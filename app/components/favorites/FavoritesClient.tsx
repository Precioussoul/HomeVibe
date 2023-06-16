import {FavoritesClientProps} from "@/app/types"
import Heading from "../Heading"
import ListingCard from "../listings/ListingCard"
import Container from "../Container"

const FavoritesClient = ({listings, currentUser}: FavoritesClientProps) => {
  return (
    <Container>
      <Heading title='Favorites' subtitle='list of places you have favorited' />
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
        {listings.map((listing) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </Container>
  )
}

export default FavoritesClient
