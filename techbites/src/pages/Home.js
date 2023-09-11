import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <div className='flex flex-col px-48 gap-y-8'>

        <div>
          <Link to="/1">
            <p className='text-2xl underline font-bold py-4'>Learn JavaScript Basics</p>
          </Link>
          <p className=''>JavaScript is a versatile and widely-used programming language that empowers developers to add interactivity and functionality to websites and web applications. </p>
        </div>

        <div>
          <Link to="/2">
            <p className='text-2xl underline font-bold py-4'>Learn React Basics</p>
          </Link>
          <p className=''>Learning the basics of React is an essential step for anyone interested in modern web development. React, a JavaScript library developed by Facebook, has gained immense popularity for building interactive user interfaces.</p>
        </div>

      </div>
    </div>
  )
}
