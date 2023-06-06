import {IParams} from "../types"
import prisma from "../libs/prismadb"

export default async function getListingId(params: IParams) {
  const {listingId} = params

  const listing = await prisma.listings.findUnique({
    where: {
      id: listingId,
    },
    include: {
      user: true,
    },
  })

  if (!listing) {
    return null
  }
  return listing
}
