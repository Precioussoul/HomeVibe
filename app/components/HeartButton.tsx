"use client"
import React from "react"
import {HeartButtonProps} from "../types"
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai"
import useFavorites from "../hooks/useFavorite"

const HeartButton = ({listingId, currentUser}: HeartButtonProps) => {
  const {toggleFavorite, hasFavorited} = useFavorites({
    listingId: listingId,
    currentUser: currentUser,
  })
  return (
    <div
      onClick={toggleFavorite}
      className='relative hover:opacity-80 transition cursor-pointer'
    >
      <AiOutlineHeart
        size={28}
        className={` fill-white absolute -top-[2px] -right-[2px] ${
          hasFavorited ? "fill-white" : "fill-neutral-500/70"
        }`}
      />
      <AiFillHeart
        size={24}
        className={` ${hasFavorited ? "fill-blue-500" : "fill-neutral-500/70"}`}
      />
    </div>
  )
}

export default HeartButton
