import prisma from "@/app/libs/prismadb"

export default async function getListings() {
  try {
    const listings = await prisma.listings.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })
    return listings
  } catch (err) {
    throw new Error("")
  }
}
