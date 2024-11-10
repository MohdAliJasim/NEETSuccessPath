import React from 'react'

const WhyUs = () => {
  return (
    <div className="flex justify-evenly p-10 h-[70vh]" id='whychooseus'>
      <fragment className=" text-center w-[40%]">
        <img src="/images/Why.png" alt="why choose us" className='h-[55%] mx-auto'/>
        <h1 className='text-3xl font-bold'>Why choose us ?</h1>
        <p className='text-xl text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad voluptate dicta rerum illum perspiciatis dolorem ut quos cumque, voluptas expedita ab, minima magni laboriosam, sunt numquam tenetur quibusdam aut nostrum.</p>
      </fragment>

      <fragment className=" bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden w-[40%] rounded-lg">
        <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7"></div>
        <div className="w-24 h-24 bg-violet-500 rounded-full absolute -left-5 -bottom-7"></div>
        <h1 class="font-bold text-xl">All you need to know</h1>
        <ul className='text-gray-600 list-disc mx-10'>
          <li className='mb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga perspiciatis ratione, dolor dignissimos deserunt vitae praesentium cupiditate.</li>
          <li className='mb-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, veritatis?</li>
          <li className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe officiis tempore beatae nulla asperiores.</li>
        </ul>
      </fragment>

    </div>
  )
}

export default WhyUs