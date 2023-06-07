import getCurrentUser from "@/app/actions/getCurrentUser"
import getListingId from "@/app/actions/getListingByIds"
import ClientOnly from "@/app/components/ClientOnly"
import EmptyState from "@/app/components/EmptyState"
import {IParams} from "@/app/types"

const ListingPage = async ({params}: {params: IParams}) => {
  const listing = await getListingId(params)
  const currentUser = await getCurrentUser()

  if (!listing) {
    return <EmptyState />
  }

  return (
    <div>
      <ClientOnly>
        <ListingClient listing={listing} currentUser={currentUser} />
      </ClientOnly>
    </div>
  )
}

export default ListingPage
