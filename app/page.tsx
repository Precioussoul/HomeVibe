import getCurrentUser from "./actions/getCurrentUser"
import getListings from "./actions/getListings"
import Container from "./components/Container"
import EmptyState from "./components/EmptyState"
import ListingCard from "./components/listings/ListingCard"
import {HomeProps} from "./types"

export default async function Home({searchParams}: HomeProps) {
  const listings = await getListings(searchParams)
  const currentUser = await getCurrentUser()
  console.log("searchParams", searchParams)
  console.log("listing results", listings)

  if (listings.length === 0) {
    return <EmptyState showReset />
  }

  return (
    <>
      <Container>
        <div className='pt-24 gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
          {listings.map((listing) => (
            <div key={listing.id}>
              <ListingCard data={listing} currentUser={currentUser} />
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}
