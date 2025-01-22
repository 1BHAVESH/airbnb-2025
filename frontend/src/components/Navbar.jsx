import React from 'react'
import { Input } from './ui/input'
import { Menu, Search } from 'lucide-react'
import { Button } from './ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Navigate, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { use } from 'react'
import CIcon from '@coreui/icons-react'
import { cibAirbnb } from '@coreui/icons'

const Navbar = () => {
  const navigate = useNavigate()

  const {user} = useSelector((store) => store.auth)

  console.log(user)

  const hostHandler = () => {
    if(user.role === "guest"){
      navigate("/application")
    }else if(user.role === "host"){
      navigate("/property-listing")
    }
  }

  const MenuItmesHandler = (type) => {
    if(type === "bookings"){
      navigate("/bookings")
    }
    if(type === "profile"){
      navigate("/profile")
    }
  }


  return (
    <div className='flex items-center justify-between border-b-2 w-full md:px-4 mx-auto h-16  mt-2'>

        <div onClick={()=> navigate("/")} className='ml-3 cursor-pointer'>
        <img className='w-[118px] md:ml-14' src='data:image/jpeg;base64,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' />
        </div>

        
          

           
           <div className='flex mr-3 items-center gap-3'>
           <div className="hidden md:block">
            <h1 className='text-xl font-semibold cursor-pointer hover:text-red-500 text-gray-500' onClick={hostHandler}>Airbnb your home</h1>
           </div>
      {user &&   <div className='cursor-pointer '>
        <DropdownMenu className="cursor-pointer mr-7 mt-9">
  <DropdownMenuTrigger asChild>
    <Menu />
  </DropdownMenuTrigger>
  <DropdownMenuContent className="cursor-pointer mr-7 mt-7">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="cursor-pointer" onClick={() => MenuItmesHandler("profile")}>Profile</DropdownMenuItem>
    <DropdownMenuItem className="cursor-pointer" onClick={() => MenuItmesHandler("bookings")} >Booking</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem >Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
        </div>}

           </div>
        

    </div>
  )
}

export default Navbar


{/* <form className="flex items-center rounded-lg overflow-hidden max-w-xl  border border-gray-300">
<Input className="flex-1 border-none focus-visible:ring-0"/>
<Button className="text-blue-800 bg-slate-200">
<Search style={{ height: '30px', width: '30px' }}/>
</Button>

</form> */}
