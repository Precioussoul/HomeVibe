"use client"

import {useCallback} from "react"
import {CounterProps} from "../types"

const Counter = ({title, subtitle, value, onChange}: CounterProps) => {
  const onAdd = useCallback(() => {
    onChange(value + 1)
  }, [onChange, value])

  const onReduce = useCallback(() => {
    if (value === 1) {
      return
    }
    onChange(value + 1)
  }, [onChange, value])

  return <div></div>
}

export default Counter
