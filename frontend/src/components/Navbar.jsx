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
        <img className='w-[118px] md:ml-14' src="data:image/png;base64,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" </div>

        
          

           
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
