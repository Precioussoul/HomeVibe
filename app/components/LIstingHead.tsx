"use client"
import React from "react"
import {ListingHeadProps} from "../types"
import Heading from "./Heading"
import useCountries from "../hooks/useCountries"

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
    </div>
  )
}

export default ListingHead
