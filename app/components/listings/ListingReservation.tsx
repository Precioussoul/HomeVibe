"use client"
import {Range} from "react-date-range"
import {ListingReservationProps} from "@/app/types"

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
    <div className='bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden'>
      <div className='flex flex-row items-center gap-1 p-4'>
        <p className='text-2xl font-semibold'>${price}</p>
        <p className='font-light text-neutral-500'>Night</p>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disabledDate={disabledDates}
        onChange={(value) => onChangeDate}
      />
    </div>
  )
}

export default ListingReservation
