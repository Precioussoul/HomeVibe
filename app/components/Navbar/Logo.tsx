"use client"
import Image from "next/image"
import {useRouter} from "next/navigation"
import React from "react"
import {GiAtomicSlashes} from "react-icons/gi"

const Logo = () => {
  const router = useRouter()

  return (
    <div
      className='flex-row items-center gap-2 hidden md:flex cursor-pointer'
      onClick={() => router.push("/")}
    >
      <GiAtomicSlashes size={48} color='#2359D8' />
      <span className='font-bold text-xl capitalize text-blue-600'>
        Homevibe
      </span>
    </div>
  )
}

export default Logo
