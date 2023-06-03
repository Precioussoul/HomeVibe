"use client"

import useCountries from "@/app/hooks/useCountries"
import {ListingCardProps} from "@/app/types"
import format from "date-fns/format"
import Image from "next/image"
import {useRouter} from "next/navigation"
import {useCallback, useMemo} from "react"
import HeartButton from "../HeartButton"
import Button from "../Button"

const ListingCard = ({
  data,
  reservations,
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
    if (reservations) {
      return reservations.totalPrice
    }
    return data.price
  }, [reservations, data.price])

  const reservationDate = useMemo(() => {
    if (!reservations) {
      return null
    }
    const start = new Date(reservations.startDate)
    const end = new Date(reservations.endDate)

    return `${format(start, "PP")} - ${format(end, "PP")}`
  }, [reservations])

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
            <HeartButton listingId={" "} currentUser={currentUser} />
          </div>
        </div>
        <p className='font-semibold text-lg'>
          {location?.region}, {location?.label}
        </p>
        <p className='font-light text-neutral-500'>
          {reservationDate || data.category}
        </p>
        <div className='flex flex-row items-center gap-1'>
          <p className='font-semibold'>${price}</p>
          {!reservations && <p className='font-light'>night</p>}
        </div>
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel}
            onClick={handleCancel}
          />
        )}
      </div>
    </div>
  )
}

export default ListingCard
