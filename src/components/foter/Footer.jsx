import React from 'react'

const Footer = () => {
  return (
   
<>
  {/* Hello world */}
  <footer className=" backdrop-blur-lg bg-gradient-to-bl from-blue-200 to-pink-200">
    <div className="mx-auto   w-full max-w-screen-xl">
      <div className="grid grid-cols-2  gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div className='flex justify-between w-[500px]'>
        <div className='flex '>
          <ul className="text-black  font-medium">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Discord Server
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className='flex'>
          <ul className=" text-black  font-medium">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Licensing
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div> 
        <div className='flex flex-row gap-5'>
          <ul className=" text-black font-medium">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                iOS
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Android
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Windows
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                MacOS
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>

      <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500  sm:text-center">
          © 2024 All Rights
          Reserved.
        </span>
      </div>
    </div>
  </footer>
</>


   
  )
}

export default Footer