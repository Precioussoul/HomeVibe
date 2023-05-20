"use client"

type HeadingProps = {
  title: string
  subtitle: string
  center?: boolean
}

const Heading = ({title, subtitle, center}: HeadingProps) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <h3 className='text-2xl font-bold'>{title}</h3>
      <p className='font-light text-neutral-300 mt-2'>{subtitle}</p>
    </div>
  )
}

export default Heading
