import { FunctionComponent } from "react"
import Image from "next/image"
import arrowright from "../public/arrowright.svg"
const Job: FunctionComponent<{
  jobdata: {
    company: string
    title: string
    description: string
    seniority: string
    applicationLink: string
  }
}> = ({ jobdata }) => {
  const { company, title, seniority, applicationLink } = jobdata
  return (
    <a target="_blank" href={applicationLink}>
      <section className="gap-30 flex flex-col justify-between gap-2 rounded-lg border-2 bg-neutral-50 px-5 py-3  duration-200 ease-out hover:scale-105 hover:drop-shadow-lg">
        <h1 className="text-lg text-neutral-700">{company}</h1>
        <h2 className="text-2xl font-bold text-neutral-900">{title}</h2>
        <div className="flex flex-row items-center  gap-2">
          <Image className="h-4 w-4 " alt="" src={arrowright} />
          <span className="text-base">{seniority}</span>
        </div>
      </section>
    </a>
  )
}

export default Job
