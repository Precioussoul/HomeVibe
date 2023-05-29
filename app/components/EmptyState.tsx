"use client"

import {useRouter} from "next/navigation"
import {EmptyState} from "../types"
import Heading from "./Heading"

const EmptyState = ({
  title = "No exact matches",
  subtitle = "Try changing or removing scene of your filters",
  showReset,
}: EmptyState) => {
  const router = useRouter()

  return (
    <div className='h-[60vh] flex flex-col gap-2 justify-center items-center'>
      <Heading center title={title} subtitle={subtitle} />
    </div>
  )
}

export default EmptyState
