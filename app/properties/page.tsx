import EmptyState from "../components/EmptyState"
import ClientOnly from "../components/ClientOnly"
import getCurrentUser from "../actions/getCurrentUser"
import getReservations from "../actions/getReservations"
import TripClient from "../components/trips/TripClient"
import getListings from "../actions/getListings"
import PropertiesClient from "../components/properties/PropertiesClient"

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title=' Unauthorized' subtitle='Please login' />
      </ClientOnly>
    )
  }

  const listings = await getListings({
    userId: currentUser.id,
  })

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title='No properties found'
          subtitle='looks like you have not properties.'
        />
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <PropertiesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  )
}

export default PropertiesPage
