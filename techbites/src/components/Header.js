import React from 'react';

export const Header = () => {
  return (
    <div className='flex justify-between items-center px-12 py-6 border-2 border-black rounded-full my-12 mx-24'>
      <h1 className='text-2xl font-extrabold'>Tech Bites</h1>
      <div>
        <ul className='flex gap-x-16'>
          <li>About</li>
          <li>Blogs</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}
