export const dynamic = "force-dynamic"
import getCurrentUser from "./actions/getCurrentUser"
import getListings from "./actions/getListings"
import Container from "./components/Container"
import EmptyState from "./components/EmptyState"
import ListingCard from "./components/listings/ListingCard"
import {HomeProps} from "./types"

export default async function Home({searchParams}: HomeProps) {
  const listings = await getListings(searchParams)
  const currentUser = await getCurrentUser()

  if (listings.length === 0) {
    return <EmptyState showReset />
  }

  return (
    <>
      <Container>
        <div className='pt-[4.5rem] gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 laptopL:grid-cols-6'>
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

//
