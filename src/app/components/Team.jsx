import React from 'react'

const Team = () => {
    return (
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
    <p className="text-base text-gray-700 md:text-lg">
      Welcome to our Dental Team! We are here to make your smile brighter.
    </p>
  </div>
  <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
    <div>
      <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
        <img
          className="absolute object-cover w-full h-full rounded"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
          alt="Dentist"
        />
      </div>
      <div className="flex flex-col sm:text-center">
        <p className="text-lg font-bold">Dr. Emily Johnson</p>
        <p className="mb-5 text-xs text-gray-800">Dentist</p>
        <div className="flex items-center space-x-3 sm:justify-center">
          <a
            href="/"
            className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              {/* Replace with relevant icon for Dr. Emily's social media */}
              <path d="..."/>
            </svg>
          </a>
          <a
            href="/"
            className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              {/* Replace with relevant icon for Dr. Emily's social media */}
              <path d="..."/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div>
      <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
        <img
          className="absolute object-cover w-full h-full rounded"
          src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt="Dentist"
        />
      </div>
      <div className="flex flex-col sm:text-center">
        <p className="text-lg font-bold">Dr. Alex Williams</p>
        <p className="mb-5 text-xs text-gray-800">Orthodontist</p>
        <div className="flex items-center space-x-3 sm:justify-center">
          <a
            href="/"
            className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              {/* Replace with relevant icon for Dr. Alex's social media */}
              <path d="..."/>
            </svg>
          </a>
          <a
            href="/"
            className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              {/* Replace with relevant icon for Dr. Alex's social media */}
              <path d="..."/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div>
      <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
        <img
          className="absolute object-cover w-full h-full rounded"
          src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt="Dentist"
        />
      </div>
      <div className="flex flex-col sm:text-center">
        <p className="text-lg font-bold">Dr. Sarah Miller</p>
        <p className="mb-5 text-xs text-gray-800">Pediatric Dentist</p>
        <div className="flex items-center space-x-3 sm:justify-center">
          <a
            href="/"
            className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              {/* Replace with relevant icon for Dr. Sarah's social media */}
              <path d="..."/>
            </svg>
          </a>
          <a
            href="/"
            className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              {/* Replace with relevant icon for Dr. Sarah's social media */}
              <path d="..."/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div>
      <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
        <img
          className="absolute object-cover w-full h-full rounded"
          src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt="Dentist"
        />
      </div>
      <div className="flex flex-col sm:text-center">
        <p className="text-lg font-bold">Dr. Michael Davis</p>
        <p className="mb-5 text-xs text-gray-800">Oral Surgeon</p>
        <div className="flex items-center space-x-3 sm:justify-center">
          <a
            href="/"
            className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              {/* Replace with relevant icon for Dr. Michael's social media */}
              <path d="..."/>
            </svg>
          </a>
          <a
            href="/"
            className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              {/* Replace with relevant icon for Dr. Michael's social media */}
              <path d="..."/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>


      );
    };

export default Team