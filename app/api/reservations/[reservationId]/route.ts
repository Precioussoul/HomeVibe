import {NextResponse} from "next/server"
import getCurrentUser from "@/app/actions/getCurrentUser"
import prisma from "@/app/libs/prismadb"
import {ReservationParams} from "@/app/types"

export async function DELETE(
  request: Request,
  {params}: {params: ReservationParams}
) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return NextResponse.error()
  }

  const {reservationId} = params

  if (!reservationId || typeof reservationId !== "string") {
    throw new Error("Invalid Id")
  }

  const reservation = await prisma.reservation.deleteMany({
    where: {
      id: reservationId,
      OR: [{userId: currentUser.id}, {listing: {userId: currentUser.id}}],
    },
  })
  return NextResponse.json(reservation)
}
