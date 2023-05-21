import {User} from "@prisma/client"
import {IconType} from "react-icons/lib"

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string
  updatedAt: string
  emailVerified: string | null
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
