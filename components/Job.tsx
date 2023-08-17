import { FunctionComponent } from "react"
import Image from "next/image"
import locationIcon from "../public/location.svg"
const Job: FunctionComponent<{
  jobdata: {
    company: {
      display_name: string
    }
    title: string
    description: string
    location: {
      display_name: string
    }
    redirect_url: string
  }
}> = ({ jobdata }) => {
  const { company, title, description, location, redirect_url } = jobdata
  return (
    <a target="_blank" href={redirect_url}>
      <section className="gap-30 flex flex-col justify-between gap-2 rounded-lg border-2 bg-neutral-50 px-5 py-3  duration-200 ease-out hover:scale-105 hover:drop-shadow-lg">
        <h1 className="text-lg text-neutral-700">{company.display_name}</h1>
        <h2 className="text-2xl font-bold text-neutral-900">{title}</h2>
        <div className="flex flex-row items-center  gap-2">
          <Image className="h-4 w-4 " alt="" src={locationIcon} />
          <span className="text-base">{location.display_name}</span>
        </div>
      </section>
    </a>
  )
}

export default Job
