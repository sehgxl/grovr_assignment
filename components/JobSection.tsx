"use client"
import { FunctionComponent } from "react"
import JobFilters from "@/components/JobFilters"
import JobList from "@/components/JobList"
import { useState } from "react"

const JobSection = () => {
  const [Filters, setFilters] = useState({
    country: "in",
    role: "Software Engineer",
    sort_by: "salary",
    min_salary: 0,
  })
  return (
    <section className="my-20 flex flex-col items-center">
      <JobFilters setFilters={setFilters} />
      <JobList Filters={Filters} />
    </section>
  )
}

export default JobSection
