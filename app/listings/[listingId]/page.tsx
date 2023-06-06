import getListingId from "@/app/actions/getListingByIds"
import EmptyState from "@/app/components/EmptyState"
import {IParams} from "@/app/types"

const ListingPage = async ({params}: {params: IParams}) => {
  const listing = await getListingId(params)

  if (!listing) {
    return <EmptyState />
  }

  return <div>{listing?.title}</div>
}

export default ListingPage
