"use client"

import { useState } from "react"

const Waitlist = () => {
  const [Toast, setToast] = useState(false)
  return (
    <section className="flex min-h-screen flex-col items-center justify-start gap-4 bg-white px-4 pt-10">
      <h1 className="text-center text-3xl font-medium text-gray-700 sm:text-5xl">
        Enter your email to be part of the list
      </h1>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-secondary input-lg w-full max-w-xs bg-white text-gray-700"
      />

      <select
        className="select select-secondary w-full max-w-xs bg-white text-gray-700"
        name="role"
        id=""
      >
        {" "}
        <option value="Frontend">Compnay</option>
        <option value="Backend">Tester</option>
      </select>
      <button
        onClick={() => {
          setToast(true)
          setTimeout(() => {
            setToast(false)
          }, 900)
        }}
        className="btn btn-secondary"
      >
        Submit
      </button>
      {Toast ? (
        <div className="toast  toast-start">
          <div className="alert alert-success">
            <span>Email sent successfully.</span>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default Waitlist
