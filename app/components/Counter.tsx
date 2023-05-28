"use client"
import {useCallback} from "react"
import {CounterProps} from "../types"
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai"

const Counter = ({title, subtitle, value, onChange}: CounterProps) => {
  const onAdd = useCallback(() => {
    onChange(value + 1)
  }, [onChange, value])

  const onReduce = useCallback(() => {
    if (value === 1) {
      return
    }
    onChange(value - 1)
  }, [onChange, value])

  return (
    <div className='flex flex-row gap-3 items-center justify-between'>
      <div className='flex flex-col'>
        <h3 className='font-medium'>{title}</h3>
        <p className='font-light text-gray-500'>{subtitle}</p>
      </div>
      <div className='flex flex-row items-center gap-3'>
        <div
          onClick={onReduce}
          className='w-10 h-10 rounded-full border border-neutral-400 flex items-center justify-center text-neutral-600 cursor-pointer hover:opacity-80 transition'
        >
          <AiOutlineMinus />
        </div>
        <div className='font-light text-xl text-neutral-600'>{value}</div>
        <div
          onClick={onAdd}
          className='w-10 h-10 rounded-full border border-neutral-400 flex items-center justify-center text-neutral-600 cursor-pointer hover:opacity-80 transition'
        >
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  )
}

export default Counter
