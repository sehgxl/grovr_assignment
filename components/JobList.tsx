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
  const limit = 10
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const res = await fetch(
          `https://himalayas.app/jobs/api?limit=${limit}`,

          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        const data = await res.json()
        setJobs(data.jobs)
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
