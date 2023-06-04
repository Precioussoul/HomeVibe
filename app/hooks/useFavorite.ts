import axios from "axios"
import {useRouter} from "next/navigation"
import {useCallback, useMemo} from "react"
import {toast} from "react-hot-toast"
import {UseFavoriteProps} from "../types"
import useLoginModal from "./useLoginModal"

const useFavorites = ({listingId, currentUser}: UseFavoriteProps) => {
  const router = useRouter()
  const loginModal = useLoginModal()

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || []
    return list.includes(listingId)
  }, [currentUser, listingId])
}
