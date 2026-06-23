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
          <input type="radio" name='user' value='customer'/><span>Customer</span>
          <input type="radio" name='user' value='restaurant'/><span>Restaurant</span>
          <input type="radio" name='user' value='rider'/><span>Rider</span>
          </div>
          
          <input type="text" placeholder='Enter your full name' />
          <input type="email" placeholder='Enter your email' />
          <input type="text" placeholder='Enter your phone number' />
          <input type="password" placeholder='Enter your password' />
          <input type="password" placeholder='Confirm your password' />
          <div><input type="checkbox"/><span>I agree to the terms and conditions.</span></div>
          <button>Register</button>
          <div>Already registered?<span>Login here</span></div>
        </form>
      </div>
    </div>
</>
  )
}

export default Register