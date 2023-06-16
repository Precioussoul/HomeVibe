import prisma from "@/app/libs/prismadb"
import {IListingsParams} from "../types"

export default async function getListings(params: IListingsParams) {
  try {
    const {userId} = params

    let query: any = {}

    if (userId) {
      query.userId = userId
    }

    const listings = await prisma.listings.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    })
    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }))

    return safeListings
  } catch (err) {
    throw new Error("Something went wrong")
  }
}
