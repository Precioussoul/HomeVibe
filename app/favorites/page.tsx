import EmptyState from "../components/EmptyState"
import ClientOnly from "../components/ClientOnly"
import getCurrentUser from "../actions/getCurrentUser"
import getFavoriteListings from "../actions/getFavoriteListings"

const ListingFavorites = async () => {
  const currentUser = await getCurrentUser()
  const listings = await getFavoriteListings()

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title='No favorites found'
          subtitle='looks like you have no favorite listings.'
        />
      </ClientOnly>
    )
  }

  //   return (
  //     <ClientOnly>

  //     </ClientOnly>
  //   )
}

export default ListingFavorites
