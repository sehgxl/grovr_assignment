import Link from "next/link"

const Navbar = () => {
  return (
    <div className="navbar bg-secondary text-primary-content">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl normal-case">JobHunt</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <Link href="/">
            <li>
              <a>Home</a>
            </li>
          </Link>

          <Link href="/Waitlist">
            <li>
              <a>Waitlist</a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
