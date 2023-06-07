"use client"

import {useMemo} from "react"
import {ListingClientProps} from "../types"
import {categories} from "./Navbar/Categories"

const ListingClient = ({
  listing,
  currentUser,
  reservation,
}: ListingClientProps) => {
  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category)
  }, [listing.category])

  return <div>ListingClient</div>
}

export default ListingClient
