import { useState } from "react"
import {close, logo, menu} from "../assets"
import {navLinks} from "../constants"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="w-full flex py-6 justify-between items-center">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li className={`font-[Poppins] font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'}`} key={nav.id}><a href={`#${nav.id}`}>{nav.title}</a></li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img className="w-[28px] h-[28px] object-contain" src={toggle ? close : menu} alt="Menu" onClick={() => setToggle((prev) => !prev)} />

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}>
          <ul className="list-none flex-col flex justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li className={`text-white font-[Poppins] font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mb-0' : 'mb-4'}`} key={nav.id}><a href={`#${nav.id}`}>{nav.title}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar