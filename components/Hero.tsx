import Link from "next/link"

const Hero = () => {
  return (
    <section className="mt-40 flex flex-col items-center sm:mx-10 lg:mx-40 2xl:mx-96 ">
      <h1 className="text-center text-5xl font-bold sm:text-7xl">
        Seize your Spotlight by unveiling your Dream Job
      </h1>
      <h2 className="mt-8 text-center text-base sm:text-lg">
        Our job listings platform is designed to empower you with choices that
        resonate with your goals, creating a bridge between your dreams and
        professional reality
      </h2>
      <Link href="Waitlist">
        <button className="mt-14 w-max rounded-lg bg-pink-500 px-5 py-2 text-xl text-white transition  duration-200 ease-out hover:scale-125">
          Join our waitlist
        </button>
      </Link>
    </section>
  )
}

export default Hero
