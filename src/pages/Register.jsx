import React from 'react'
import foodTable from '../assets/foodTable.webp'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
 <>
    <div>
      <img src={foodTable} alt="" className='h-[90vh] w-full object-cover' />
      <div className='absolute top-22 right-30'>
        <form className='flex flex-col w-[29vw] gap-3  bg-white rounded-[10px] py-6 px-10' >
          <div className='flex flex-col gap-2'>
          <div className='text-3xl font-bold text-orange-700 text-center'>Create Account</div>
          <div className='text-center text-gray-500'>Join us as a Customer, Restaurant, or Rider</div>
          </div>

          <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-3'>
          <label htmlFor="user" className='font-semibold'>Register as:</label>
          <div className="flex gap-7 pb-2">
            <div className='flex gap-2'><input type="radio" name='user' value='customer' defaultChecked/><span>Customer</span></div>
          <div className='flex gap-2'><input type="radio" name='user' value='restaurant'/><span>Restaurant</span></div>
          <div className='flex gap-2'><input type="radio" name='user' value='rider'/><span>Rider</span></div>
          </div>
          </div>
          
          <input type="text" placeholder='Enter your full name' className='p-1.5 border-[#F2EBE3] rounded-[7px] border focus:border-3 focus:border-orange-700 focus:ring-0 focus:outline-none'/>
          <input type="email" placeholder='Enter your email' className='p-1.5 border-[#F2EBE3] rounded-[7px] border focus:border-3 focus:border-orange-700 focus:ring-0 focus:outline-none' />
          <input type="text" placeholder='Enter your phone number' className='p-1.5 border-[#F2EBE3] rounded-[7px] border focus:border-3 focus:border-orange-700 focus:ring-0 focus:outline-none' />
          <input type="password" placeholder='Enter your password' className='p-1.5 border-[#F2EBE3] rounded-[7px] border focus:border-3 focus:border-orange-700 focus:ring-0 focus:outline-none' />
          <input type="password" placeholder='Confirm your password' className='p-1.5 border-[#F2EBE3] rounded-[7px] border focus:border-3 focus:border-orange-700 focus:ring-0 focus:outline-none' />
          <div className='py-2'><input type="checkbox"/><span className='text-gray-500'> I agree to the <Link className='text-(--primary) hover:underline'>terms and conditions.</Link> </span></div>
          <button className='w-full bg-(--primary) rounded-[7px] p-3 text-white font-bold'>Register</button>
          <div className="text-center text-gray-500">Already registered?<Link to="/login" className='text-(--primary) text-semibold hover:underline'> Login here</Link ></div>
        </div>
        </form>
      </div>
    </div>
</>
  )
}

export default Register