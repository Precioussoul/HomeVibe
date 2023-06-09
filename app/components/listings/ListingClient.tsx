"use client"

import {useCallback, useEffect, useMemo, useState} from "react"
import {ListingClientProps} from "../../types"
import {categories} from "../Navbar/Categories"
import Container from "../Container"
import ListingHead from "./LIstingHead"
import ListingInfo from "./ListingInfo"
import {eachDayOfInterval} from "date-fns"
import useLoginModal from "@/app/hooks/useLoginModal"
import {useRouter} from "next/navigation"
import axios from "axios"
import {toast} from "react-hot-toast"

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
}

const ListingClient = ({
  listing,
  currentUser,
  reservations,
}: ListingClientProps) => {
  const loginModal = useLoginModal()
  const router = useRouter()

  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category)
  }, [listing.category])

  const disabledDates = useMemo(() => {
    let dates: Date[] = []

    reservations?.forEach((reservation) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate),
      })
      dates = [...dates, ...range]
    })

    return dates
  }, [reservations])

  const [isLoading, setIsLoading] = useState(false)
  const [totalPrice, setTotalPrice] = useState(listing.price)
  const [dateRange, setDateRange] = useState(initialDateRange)

  const onCreateReservation = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen()
    }
    setIsLoading(true)

    axios
      .post("/api/reservations", {
        totalPrice,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate,
        listing: listing?.id,
      })
      .then(() => {
        toast.success("Listing reservation")
        setDateRange(initialDateRange)

        router.refresh()
      })
      .catch(() => {
        toast.error("Something went wrong")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [totalPrice, dateRange, listing?.id, router, currentUser, loginModal])

  // useEffect(() => {
  //   if (dateRange.startDate && dateRange.endDate) {
  //     const dayCount = dateRange.startDate.
  //   }
  // }, [])

  return (
    <Container>
      <div className='max-w-screen-lg mx-auto'>
        <div className='flex flex-col gap-6'>
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
          <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              roomCount={listing.roomCount}
              guestCount={listing.guestCount}
              bathroomCount={listing.bathroomCount}
              locationValue={listing.locationValue}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ListingClient
