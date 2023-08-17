import Hero from "@/components/Hero"
import JobSection from "@/components/JobSection"

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-start bg-white px-5 text-slate-900 sm:px-20">
      <Hero />
      <JobSection />
    </section>
  )
}
