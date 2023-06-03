"use client"
import React from "react"
import {HeartButtonProps} from "../types"
import {AiOutlineHeart} from "react-icons/ai"

const HeartButton = ({listingId, currentUser}: HeartButtonProps) => {
  const hasFavorited = false
  const toggleFavorite = () => {}
  return (
    <div
      onClick={toggleFavorite}
      className='relative hover:opacity-80 transition cursor-pointer'
    >
      <AiOutlineHeart
        size={28}
        className={`absolute -top-[2px] -right-[2px] ${
          hasFavorited ? "fill-rose-500" : "fill-neutral-500/70"
        }`}
      />
    </div>
  )
}

export default HeartButton
