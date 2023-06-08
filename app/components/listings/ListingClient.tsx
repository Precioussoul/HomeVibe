"use client"

import {useMemo} from "react"
import {ListingClientProps} from "../../types"
import {categories} from "../Navbar/Categories"
import Container from "../Container"
import ListingHead from "./LIstingHead"
import ListingInfo from "./ListingInfo"
import {eachDayOfInterval} from "date-fns"
import useLoginModal from "@/app/hooks/useLoginModal"
import {useRouter} from "next/navigation"

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
