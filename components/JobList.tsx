"use client"
import { FunctionComponent, useEffect, useState } from "react"
import Job from "./Job"
import Loader from "./Loader"
import ErrorScreen from "./ErrorScreen"

const JobList: FunctionComponent<{
  Filters: {
    country: string
    role: string
    sort_by: string
    min_salary: number
  }
}> = ({ Filters }) => {
  const [Loading, setLoading] = useState(false)
  const [Jobs, setJobs] = useState([])
  const [Fail, setFail] = useState(false)
  const results = 10
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const res = await fetch(
          `https://api.adzuna.com:80/v1/api/jobs/${Filters.country}/search/1?app_id=39f59b82&app_key=902a41619a9e539cb04ac4723c917bd9&results_per_page=${results}&what=${Filters.role}&sort_by=${Filters.sort_by}&salary_min=${Filters.min_salary}`,

          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        const data = await res.json()
        setJobs(data.results)
        setLoading(false)
      } catch (error) {
        setFail(true)
      }
    }

    getData()
  }, [Filters])
  return (
    <div className="mt-8 w-full">
      {Fail ? (
        <ErrorScreen />
      ) : Loading ? (
        <Loader />
      ) : (
        <section className="flex flex-col gap-4">
          {Jobs.map((jobdata, idx) => {
            return <Job jobdata={jobdata} key={idx} />
          })}
        </section>
      )}
    </div>
  )
}

export default JobList
