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

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation()

      if (!currentUser) {
        return loginModal.onOpen()
      }

      try {
        let request
        if (hasFavorited) {
          request = () => axios.delete(`/app/favorites/${listingId}`)
        } else {
          request = () => axios.post(`/app/favorites/${listingId}`)
        }

        await request()
        router.refresh()
        toast.success("success")
      } catch (error) {
        toast.error("Something went wrong")
      }
    },
    [currentUser, loginModal, hasFavorited, router, listingId]
  )
}
