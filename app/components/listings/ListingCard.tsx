"use client"

import useCountries from "@/app/hooks/useCountries"
import {ListingCardProps} from "@/app/types"
import format from "date-fns/format"
import Image from "next/image"
import {useRouter} from "next/navigation"
import {useCallback, useMemo} from "react"
import HeartButton from "../HeartButton"
import Button from "../Button"
import {IoBedOutline, IoLocationSharp} from "react-icons/io5"
import {AiFillStar} from "react-icons/ai"
import {FaBath} from "react-icons/fa"
import {IoIosPeople} from "react-icons/io"

const ListingCard = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser,
}: ListingCardProps) => {
  const router = useRouter()
  const {getByValue} = useCountries()
  const location = getByValue(data.locationValue)

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()

      if (disabled) {
        return
      }

      onAction?.(actionId)
    },
    [onAction, actionId, disabled]
  )

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice
    }
    return data.price
  }, [reservation, data.price])

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null
    }
    const start = new Date(reservation.startDate)
    const end = new Date(reservation.endDate)

    return `${format(start, "PP")} - ${format(end, "PP")}`
  }, [reservation])

  return (
    <div
      onClick={() => router.push(`/listings/${data.id}`)}
      className='col-span-1 cursor-pointer group'
    >
      <div className='flex flex-col gap-2 w-full'>
        <div className='aspect-square w-full relative overflow-hidden rounded-xl'>
          <Image
            src={data.imageSrc}
            alt={"listing"}
            fill
            className='object-cover h-full w-full group-hover:scale-110 transition'
          />
          <div className='absolute top-3 right-3'>
            <HeartButton listingId={data.id} currentUser={currentUser} />
          </div>
          <div className='absolute top-3 left-3'>
            <div className='flex flex-row gap-2 bg-neutral-200 bg-opacity-70 py-2 px-2 rounded-full'>
              <IoLocationSharp size={20} />
              <span className='text-sm'>
                {location?.region}, {location?.label}
              </span>
            </div>
          </div>
        </div>
        <div className='flex flex-row items-center justify-between '>
          <h3>{data.title}</h3>
          <div className='flex flex-row gap-2 items-center'>
            <AiFillStar size={22} color='#FFEF84' />
            <span>{4.6}</span>
          </div>
        </div>
        <div className='flex flex-row items-center justify-between gap-2'>
          <h3 className='font-semibold text-[1.25rem] text-blue-600'>
            ${data.price}
          </h3>
          <span className='bg-[#f8fafb] bg-opacity-70 py-1 px-2 rounded-lg text-neutral-400 text-[0.8rem]'>
            {data.category}
          </span>
        </div>
        <div className='flex flex-row gap-3 items-center justify-between text-neutral-700'>
          <div className='flex flex-row gap-2 items-center bg-[#f8fafb] bg-opacity-70 py-1 px-2 rounded-lg '>
            <IoBedOutline size={20} />
            <span className='text-[9px] font-semibold'>
              {data.roomCount} rooms
            </span>
          </div>
          <div className='flex flex-row gap-2 items-center bg-[#f8fafb] bg-opacity-70 py-1 px-2 rounded-lg'>
            <FaBath size={20} />
            <span className='text-[9px] font-semibold'>
              {data.bathroomCount} baths
            </span>
          </div>
          <div className='flex flex-row gap-2 items-center bg-[#f8fafb] bg-opacity-70 py-1 px-2 rounded-lg'>
            <IoIosPeople size={20} />
            <span className='text-[9px] font-semibold'>
              {data.guestCount} Guests
            </span>
          </div>
        </div>
        {/* <p className='font-semibold text-lg'>{data.title}</p>
        <p className='font-light text-neutral-500'>
          {reservationDate || data.category}
        </p>
        <div className='flex flex-row items-center gap-1'>
          <p className='font-semibold'>${price}</p>
          {!reservation && <p className='font-light'>night</p>}
        </div>
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel}
            onClick={handleCancel}
          />
        )} */}
      </div>
    </div>
  )
}

export default ListingCard
