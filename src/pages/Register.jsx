import React from 'react'
import foodTable from '../assets/foodTable.webp'

const Register = () => {
  return (
 <>
    <div>
      <img src={foodTable} alt="" className='h-[90vh] w-full object-cover' />
      <div className='absolute top-25'>
        <form className='flex flex-col w-[30vw] gap-3 bg-amber-50 rounded-[10px] py-8 px-10' >
          <div className='text-3xl font-bold text-orange-700 text-center'>Create Account</div>
          <div className='text-center'>Join us as a Customer, Restaurant, or Rider</div>
          <div>
          <label htmlFor="user">Register as:</label><br />
          <div className="flex gap-7 ">
            <div className='flex gap-2'><input type="radio" name='user' value='customer'/><span>Customer</span></div>
          <div className='flex gap-2'><input type="radio" name='user' value='restaurant'/><span>Restaurant</span></div>
          <div className='flex gap-2'><input type="radio" name='user' value='rider'/><span>Rider</span></div>
          </div>
          </div>
          
          <input type="text" placeholder='Enter your full name' className='p-2 border-[#F2EBE3] rounded border focus:border-2 focus:border-orange-700 focus:ring-0 focus:outline-none'/>
          <input type="email" placeholder='Enter your email' className='p-2 border-[#F2EBE3] rounded border focus:border-2 focus:border-orange-700 focus:ring-0 focus:outline-none' />
          <input type="text" placeholder='Enter your phone number' className='p-2 border-[#F2EBE3] rounded border focus:border-2 focus:border-orange-700 focus:ring-0 focus:outline-none' />
          <input type="password" placeholder='Enter your password' className='p-2 border-[#F2EBE3] rounded border focus:border-2 focus:border-orange-700 focus:ring-0 focus:outline-none' />
          <input type="password" placeholder='Confirm your password' className='p-2 border-[#F2EBE3] rounded border focus:border-2 focus:border-orange-700 focus:ring-0 focus:outline-none' />
          <div><input type="checkbox"/><span> I agree to the <span className='text-(--primary)'>terms and conditions.</span> </span></div>
          <button className='w-full bg-(--primary) rounded p-3 text-white font-bold'>Register</button>
          <div className="text-center">Already registered?<span className='text-(--primary) text-semibold '> Login here</span></div>
        </form>
      </div>
    </div>
</>
  )
}

export default Register