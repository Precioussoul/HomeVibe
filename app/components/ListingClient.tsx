"use client"

import {useMemo} from "react"
import {ListingClientProps} from "../types"
import {categories} from "./Navbar/Categories"
import Container from "./Container"
import ListingHead from "./LIstingHead"

const ListingClient = ({
  listing,
  currentUser,
  reservations,
}: ListingClientProps) => {
  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category)
  }, [listing.category])

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
        </div>
      </div>
    </Container>
  )
}

export default ListingClient
