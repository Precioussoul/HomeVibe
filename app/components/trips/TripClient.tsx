"use client"
import {TripsProps} from "@/app/types"
import Container from "../Container"
import Heading from "../Heading"
import {useRouter} from "next/navigation"
import {useCallback, useState} from "react"
import axios from "axios"
import {toast} from "react-hot-toast"

const TripClient = ({reservations, currentUser}: TripsProps) => {
  const router = useRouter()
  const [deletingId, setDeletingId] = useState("")

  const onCancel = useCallback((id: string) => {
    setDeletingId(id)

    axios
      .delete(`/api/reservations/${id}`)
      .then(() => {
        toast.success("reservations cancelled")
      })
      .catch((err) => {
        toast.error(err?.response?.data?.error)
      })
      .finally(() => {
        setDeletingId("")
      })
  }, [])

  return (
    <Container>
      <Heading
        title='Trips'
        subtitle="Where you've been and where you're going"
      />
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'></div>{" "}
    </Container>
  )
}

export default TripClient
