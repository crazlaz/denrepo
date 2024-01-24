import React from 'react'
import { FaUserDoctor } from "react-icons/fa6";
import { FaTooth } from "react-icons/fa";
import { FaRegSmileBeam } from "react-icons/fa";
import { FaTeeth } from "react-icons/fa";

const Features = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
                <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                    <defs>
                        <pattern
                            id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                            x="0"
                            y="0"
                            width=".135"
                            height=".30"
                        >
                            <circle cx="1" cy="1" r=".7" />
                        </pattern>
                    </defs>
                    <rect
                        fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                        width="52"
                        height="24"
                    />
                </svg>
                <span className="relative">Explore</span>
            </span>{' '}
            top features of our Dentist Practice
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
            Discover the exceptional features that set our dentist practice apart and make us your trusted choice for dental care.
        </p>
    </div>
    <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
        {/* Feature 1 */}
        <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <FaUserDoctor />

            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">Comprehensive Care</h6>
            <p className="mb-3 text-sm text-gray-900">
                Our practice offers comprehensive dental care services to address all your oral health needs.
            </p>
            <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-yellow-accent-700 hover:text-yellow-800"
            >
                Learn more
            </a>
        </div>

        {/* Feature 2 */}
        <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <FaTooth />
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">State-of-the-Art Technology</h6>
            <p className="mb-3 text-sm text-gray-900">
                We utilize advanced technology to ensure precise diagnostics and the most effective treatments.
            </p>
            <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-yellow-accent-700 hover:text-yellow-800"
            >
                Learn more
            </a>
        </div>

        {/* Feature 3 */}
        <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <FaRegSmileBeam />

            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">Patient-Centric Approach</h6>
            <p className="mb-3 text-sm text-gray-900">
                We prioritize your comfort and well-being with a patient-centric approach to dentistry.
            </p>
            <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-yellow-accent-700 hover:text-yellow-800"
            >
                Learn more
            </a>
        </div>

        {/* Feature 4 */}
        <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <FaTeeth />

            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">Experienced Team</h6>
            <p className="mb-3 text-sm text-gray-900">
                Our experienced dental team is dedicated to providing you with the highest quality care and service.
            </p>
            <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-yellow-accent-700 hover:text-yellow-800"
            >
                Learn more
            </a>
        </div>
    </div>
</div>
      );
    };

export default Features