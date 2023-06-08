"use client"
import React from "react"
import {ListingHeadProps} from "../../types"
import Heading from "../Heading"
import useCountries from "../../hooks/useCountries"
import Image from "next/image"
import HeartButton from "../HeartButton"

const ListingHead = ({
  locationValue,
  title,
  imageSrc,
  id,
  currentUser,
}: ListingHeadProps) => {
  const {getByValue} = useCountries()
  const location = getByValue(locationValue)
  return (
    <div>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div className='w-full h-[60vh] mt-3 overflow-hidden rounded-xl relative'>
        <Image
          src={imageSrc}
          alt={"Image"}
          fill
          className='object-cover w-full'
        />
        <div className='absolute top-5 right-5'>
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </div>
  )
}

export default ListingHead
