"use client"

import {useRouter} from "next/navigation"
import {EmptyState} from "../types"
import Heading from "./Heading"
import Button from "./Button"

const EmptyState = ({
  title = "No exact matches",
  subtitle = "Try changing or removing scene of your filters",
  showReset,
}: EmptyState) => {
  const router = useRouter()

  return (
    <div className='h-[60vh] flex flex-col gap-2 justify-center items-center'>
      <Heading center title={title} subtitle={subtitle} />
      <div className='w-40 mt-4'>
        {showReset && (
          <Button
            outline
            label='Remove all filters'
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  )
}

export default EmptyState
