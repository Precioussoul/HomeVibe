"use client"
interface ContainerProps {
  children: React.ReactNode
}

const Container = ({children}: ContainerProps) => {
  return (
    <div className='max-w-[2520px] mx-auto xl:px-14 md:px-16 sm:px-2 px-4'>
      {children}
    </div>
  )
}

export default Container
