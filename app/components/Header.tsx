import { Link } from '@remix-run/react'
import { BsGithub } from 'react-icons'
import memoji from '~/assets/33964b1296d2579d7a3932f465052c06-sticker.png'

const Header = () => 
<div className="bg-iris3 text-iris12 lg:h-[40vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold">Hey, I'm Matt!</h1>
      <h2 className="">I'm a full stack developer</h2>
      <div className="flex justify-evenly">
        <Link to="https://github.com/matnreyes" target='_black'>Github</Link>
        <Link to="https://linkedin.com/in/matnreyes" target='_black'>LinkedIn</Link>
      </div>
  </div>


export default Header