"use client"

import useCountries from "@/app/hooks/useCountries"
import {ListingCardProps} from "@/app/types"
import {useRouter} from "next/navigation"
import {useCallback, useMemo} from "react"

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
  }, [reservations])

  return <div>ListingCard</div>
}

export default ListingCard
