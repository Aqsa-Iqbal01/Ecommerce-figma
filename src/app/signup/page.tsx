import React from 'react'
import Image from 'next/image'

export default function page() {
    return (

        <div className="flex items-center justify-center mt-24 mb-24 flex-col md:flex-row">
            {/* Left Side (Image) */}
            <div className=" mr-52 md:mr-52">
                <Image
                    src="/Side Image (1).jpg"
                    alt="img"
                    width={700}
                    height={400}
                className=' relative ml-32 w-96 md:w-10/12 lg:w-10/12 '/>
            </div>

            {/* Right Side (Form) */}
            <div className="mt-8 ml-4 md:mr-7">
                <h2 className="lg:text-4xl text-2xl md:text-2xl font-medium mb-7 ">Create an account</h2>
                <p className="md:text-2xl text-xl font-sans  mb-4">Enter your details below</p>
                <form action="">
                    <input placeholder="Name" className='py-2 px-3 mt-5 bg-transparent border-b-2' type='text' />
                    <br />
                    <input placeholder="Email or Phone Number" className='py-2 px-3 mt-5 bg-transparent border-b-2' type='email' />
                    <br />
                    <input placeholder="Password" className='py-2 px-3 mt-5 bg-transparent border-b-2' type='pasword' />
                    <br />
                    <input className='py-2 px-12 mt-5 bg-red-500 hover:bg-red-600 cursor-pointer text-white rounded-sm' type='button' value="Create Account" />
                </form>


            </div>
        </div>

    )
}
