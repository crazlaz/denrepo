import React from 'react'

const Header = () => {
    return (
<div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
    <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
        >
            <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlbnRpc3R8ZW58MHx8MHx8fDA%3D"
            alt=""
        />
    </div>
    <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Elevate your smile at -
                <br className="hidden md:block" />
                {' '}River Vista Dentistry{' '}
                <span className="inline-block text-yellow-accent-700">
                    with personalized care
                </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                Discover comprehensive dental solutions at River Vista Dentistry. Our commitment is to provide exceptional care, addressing all your dental needs with a personal touch.
            </p>
            <div className="flex items-center">
                <a
                    href="/"
                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-yellow-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                    Get started
                </a>
                <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-yellow-accent-700"
                >
                    Learn more
                </a>
            </div>
        </div>
    </div>
</div>

      );
    };


export default Header