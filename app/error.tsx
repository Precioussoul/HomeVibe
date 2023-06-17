"use client"

interface ErrrorStateProps {
  error: Error
}
import {useEffect} from "react"
import EmptyState from "./components/EmptyState"

const ErrorState = ({error}: ErrrorStateProps) => {
  useEffect(() => {
    console.error(error)
  }, [error])
  return <EmptyState title='Opsss!!' subtitle='Something went wrong!' />
}

export default ErrorState
