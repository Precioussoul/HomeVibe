import {Listings, Reservation, User} from "@prisma/client"
import {Range, RangeKeyDict} from "react-date-range"
import {IconType} from "react-icons/lib"

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string
  updatedAt: string
  emailVerified: string | null
}
export type SafeListing = Omit<Listings, "createdAt"> & {
  createdAt: string
}
export type SafeReservations = Omit<
  Reservation,
  "createdAt" | "startDate" | "endDate" | "listing"
> & {
  createdAt: string
  startDate: string
  endDate: string
  listing: SafeListing
}

export type AvatarProps = {
  src?: string | null | undefined
}

export type CategoryBoxProps = {
  label: string
  icon: IconType
  description?: string
  selected?: boolean
}

export type CategoryInputProps = {
  icon: IconType
  label: string
  selected?: boolean
  onClick: (s: string) => void
}

export type CountrySelectvalueProps = {
  flag: string
  label: string
  latlng: string[] | number[]
  region: string
  value: string
}

export type CountrySelectProps = {
  value: CountrySelectvalueProps
  onChange: (value: CountrySelectvalueProps) => void
}

export type MapProps = {
  center: number[]
}

export type CounterProps = {
  title: string
  subtitle: string
  value: number
  onChange: (value: number) => void
}

export type ImageUploadProps = {
  onChange: (value: string) => void
  value: string
}

export type EmptyState = {
  title?: string
  subtitle?: string
  showReset?: boolean
}

export type ListingCardProps = {
  data: SafeListing
  reservation?: SafeReservations
  onAction?: (id: string) => void
  disabled?: boolean
  actionLabel?: string
  actionId?: string
  currentUser?: SafeUser | null
}
export type HeartButtonProps = {
  listingId: string
  currentUser?: SafeUser | null
}
export type IParams = {
  listingId?: string
}

export type UseFavoriteProps = {
  listingId: string
  currentUser?: SafeUser | null
}

export type getListingId = {
  params: IParams
}

export type ListingClientProps = {
  reservations?: SafeReservations[]
  listing: SafeListing & {
    user: SafeUser
  }
  currentUser?: SafeUser | null
}

export type ListingHeadProps = {
  title: string
  imageSrc: string
  locationValue: string
  id: string
  currentUser: SafeUser | null | undefined
}
export type ListingInfoProps = {
  user: SafeUser | null | undefined
  description?: string
  category: CategoryProps | undefined
  roomCount?: number
  guestCount?: number
  bathroomCount?: number
  locationValue: string
}

export type CategoryProps = {label: string; icon: IconType; description: string}

export type ListingReservationProps = {
  price: number
  totalPrice: number
  onChangeDate: (value: Range) => void
  onSubmit: () => void
  dateRange: Range
  disabled?: boolean
  disabledDates: Date[]
}
export type CalenderProps = {
  value: Range
  onChange: (value: RangeKeyDict) => void
  disabledDates?: Date[]
}

export type getReservationParams = {
  listingId?: string
  userId?: string
  authorId?: string
}
export type TripsProps = {
  reservations: SafeReservations[]
  currentUser?: SafeUser | null
}
