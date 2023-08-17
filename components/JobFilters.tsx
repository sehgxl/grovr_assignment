import { FunctionComponent } from "react"

const JobFilters: FunctionComponent<{ setFilters: Function }> = ({
  setFilters,
}) => {
  return (
    <section className="flex w-max flex-col items-center gap-10 rounded-lg border-2 bg-white px-3 py-2 text-2xl drop-shadow-xl sm:flex-row sm:px-5">
      <select
        name="Country"
        className="select select-secondary w-full max-w-xs bg-white"
        id=""
        onChange={(e) => {
          setFilters((old: object) => ({ ...old, country: e.target.value }))
        }}
      >
        <option value="in">India</option>
        <option value="us">USA</option>
        <option value="ca">Canada</option>
      </select>

      <select
        name="Role"
        className="select select-secondary w-full max-w-xs bg-white"
        id=""
        onChange={(e) => {
          setFilters((old: object) => ({ ...old, role: e.target.value }))
        }}
      >
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Fullstack">Fullstack</option>
      </select>

      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            console.log(e.target.value)
            setFilters((old: object) => ({
              ...old,
              min_salary: e.target.value,
            }))
          }
        }}
        min={0}
        step={100}
        type="number"
        placeholder="Min Salary"
        className="input input-bordered input-secondary w-full max-w-xs appearance-none bg-white"
      />
    </section>
  )
}

export default JobFilters
