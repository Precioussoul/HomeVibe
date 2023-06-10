"use client"

import {ListingReservationProps} from "@/app/types"
import Calender from "../Calender"
import Button from "../Button"

const ListingReservation = ({
  price,
  totalPrice,
  onChangeDate,
  dateRange,
  disabled,
  onSubmit,
  disabledDates,
}: ListingReservationProps) => {
  return (
    <div className='bg-white rounded-xl w-full border-[1px] border-neutral-200 overflow-hidden'>
      <div className='flex flex-row items-center gap-1 p-4'>
        <p className='text-2xl font-semibold'>${price}</p>
        <p className='font-light text-neutral-500'>Night</p>
      </div>
      <hr />
      <Calender
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <hr />
      <div className='p-4'>
        <Button disabled={disabled} label='Reserve' onClick={onSubmit} />
      </div>
      <div className='p-4 flex flex-row items-center justify-between font-semibold text-lg'>
        <h3>Total</h3>
        <p className=''>$ {totalPrice}</p>
      </div>
    </div>
  )
}

export default ListingReservation
