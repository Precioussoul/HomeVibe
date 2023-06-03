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

  return <div>ListingCard</div>
}

export default ListingCard
