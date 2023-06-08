"use client"
import React from "react"
import {ListingInfoProps} from "../../types"
import useCountries from "../../hooks/useCountries"
import Avatar from "../Avatar"
import ListingCategory from "./ListingCategory"
import dynamic from "next/dynamic"

const Map = dynamic(() => import("../Map"), {
  ssr: false,
})

const ListingInfo = ({
  user,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue,
}: ListingInfoProps) => {
  const {getByValue} = useCountries()

  const coordinates = getByValue(locationValue)?.latlng

  return (
    <div className='col-span-4 flex flex-col gap-8'>
      <div className='flex flex-col gap-3'>
        <div className='text-xl font-semibold flex flex-row items-center gap-2'>
          <h3>Hosted by {user?.name}</h3>
          <Avatar src={user?.image} />
        </div>
        <div className='flex flex-row items-center gap-4 font-light text-neutral-500'>
          <p className=''>{guestCount} guests</p>
          <p className=''>{roomCount} rooms</p>
          <p className=''>{bathroomCount} bathrooms</p>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}
      <hr />
      <div className='text-lg font-light text-neutral-500'>{description}</div>
      <hr />

      <Map center={coordinates} />
    </div>
  )
}

export default ListingInfo
