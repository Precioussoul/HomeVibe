"use client"
import useSearchModal from "@/app/hooks/useSearchModal"
import Modal from "./Modal"
import {useRouter, useSearchParams} from "next/navigation"
import {useCallback, useMemo, useState} from "react"
import {Range} from "react-date-range"
import dynamic from "next/dynamic"
import {CountrySelectvalueProps} from "@/app/types"
import qs from "query-string"
import {formatISO} from "date-fns"
import Heading from "../Heading"
import CountrySelect from "../Inputs/CountrySelect"
import Calender from "../Calender"
import Counter from "../Counter"

enum STEPS {
  LOCATION = 0,
  DATE = 1,
  INFO = 2,
}

const SearchModal = () => {
  const searchModal = useSearchModal()
  const params = useSearchParams()
  const router = useRouter()

  const [location, setLocation] = useState<CountrySelectvalueProps>(
    {} as CountrySelectvalueProps
  )
  const [step, setStep] = useState(STEPS.LOCATION)
  const [guestCount, setGuestCount] = useState(1)
  const [roomCount, setRoomCount] = useState(1)
  const [bathroomCount, setBathroomCount] = useState(1)
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  })

  const Map = useMemo(
    () =>
      dynamic(() => import("../Map").then((module) => module.default), {
        ssr: false,
      }),
    []
  ) as any

  const onBack = useCallback(() => {
    setStep((value) => value - 1)
  }, [])

  const onNext = useCallback(() => {
    setStep((value) => value + 1)
  }, [])

  const onSubmit = useCallback(async () => {
    if (step !== STEPS.INFO) {
      return onNext()
    }
    let currentQuery = {}

    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
      ...currentQuery,
      locationValue: location?.value,
      guestCount,
      roomCount,
      bathroomCount,
    }

    if (dateRange.startDate) {
      updatedQuery.startDate = formatISO(dateRange.startDate)
    }

    if (dateRange.endDate) {
      updatedQuery.endDate = formatISO(dateRange.endDate)
    }
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      {skipNull: true}
    )

    setStep(STEPS.LOCATION)
    searchModal.onClose()
    router.push(url)
  }, [
    dateRange,
    step,
    searchModal,
    router,
    guestCount,
    roomCount,
    bathroomCount,
    location?.value,
    onNext,
    params,
  ])

  const actionLabel = useMemo(() => {
    if (step === STEPS.INFO) {
      return "Search"
    }

    return "Next"
  }, [step])

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.LOCATION) {
      return undefined
    }
    return "Back"
  }, [step])

  let bodyContext = (
    <div className='flex flex-col gap-8'>
      <Heading
        title='Where do you wanna go'
        subtitle='find the perfect location'
      />
      <CountrySelect
        value={location}
        onChange={(value) => setLocation(value as CountrySelectvalueProps)}
      />
      <hr />
      <Map center={location?.latlng} />
    </div>
  )

  if (step === STEPS.DATE) {
    bodyContext = (
      <div className='flex flex-col gap-8'>
        <Heading
          title='When do you plan to go'
          subtitle='Make sure everyone is free!'
        />
        <Calender
          value={dateRange}
          onChange={(value) => setDateRange(value.selection)}
        />
      </div>
    )
  }

  if (step === STEPS.INFO) {
    bodyContext = (
      <div className='flex flex-col gap-8'>
        <Heading title='More Information' subtitle='find your perfect place' />
        <Counter
          title='Guests'
          subtitle='how many guests are coming?'
          value={guestCount}
          onChange={(value) => setGuestCount(value)}
        />
        <Counter
          title='Rooms'
          subtitle='how many rooms do you need?'
          value={roomCount}
          onChange={(value) => setRoomCount(value)}
        />
        <Counter
          title='Bathrooms'
          subtitle='how many bathrooms do you need?'
          value={bathroomCount}
          onChange={(value) => setBathroomCount(value)}
        />
      </div>
    )
  }

  return (
    <Modal
      isOpen={searchModal.isOpen}
      onClose={searchModal.onClose}
      onSubmit={onSubmit}
      title='filters'
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.LOCATION ? undefined : onBack}
      body={bodyContext}
    />
  )
}

export default SearchModal
