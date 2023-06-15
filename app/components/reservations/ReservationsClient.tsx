import {useRouter} from "next/navigation"
import {useCallback, useState} from "react"
import Container from "../Container"
import Heading from "../Heading"
import {ReservationClientProps} from "@/app/types"

const ReservationsClient = ({}: ReservationClientProps) => {
  const router = useRouter()

  return (
    <Container>
      <Heading title='Reservations' subtitle='Bookings on your properties' />
    </Container>
  )
}

export default ReservationsClient
