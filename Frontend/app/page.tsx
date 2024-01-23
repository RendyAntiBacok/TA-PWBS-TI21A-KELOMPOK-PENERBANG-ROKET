import React from 'react'
import Image from 'next/image'
//panggil function ViewPage
import ViewPage from './view/page'

export default function  Mainpage() {
  return (
    <div>
     <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <Image src="/images/haldepan.jpg" width={2830} height={1500} alt="" className=" bg-slate-200 absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"/>
        <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#fff3f8] to-[#000000] opacity-70" ></div>
        </div>
        <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr" ></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className=" text-4xl font-bold tracking-tight text-white sm:text-6xl">apotek roket</h2>
            <p className=" mt-6 font-medium text-lg leading-2 text-white">buka setiap hari 24 jam.</p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
          
            
            </div>
          </div>
        </div>
      </div>

        <div className="mt-5">
          <div className ="flex justify-center mb-5">
            <h2> best recomendation</h2>
          </div>
        </div>

    </div>
  )
}