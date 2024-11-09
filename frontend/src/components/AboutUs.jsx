import React from 'react'

const AboutUs = () => {
  return (
    <div className='h-[70vh] flex justify-evenly p-20'>
      <fragment className="">
        <img src="/images/Professor-pana.png" alt="professor" className='h-[100%]'/>
      </fragment>
      <fragment className="w-[30%]">
        <h1 className='text-4xl mb-10'>ABOUT US</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia nihil dolores cupiditate, aut doloribus libero eaque debitis. Itaque, velit ut.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia nihil dolores cupiditate, aut doloribus libero eaque debitis. Itaque, velit ut.</p>
        <button class="mt-8 appearance-none bg-transparent border-[0.125em] border-[#1A1A1A] rounded-[0.9375em] box-border text-[#3B3B3B] cursor-pointer inline-block font-sans font-semibold text-lg leading-normal p-[.5em_1.8em] text-center no-underline transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] select-none outline-none disabled:pointer-events-none hover:text-white hover:bg-[#1A1A1A] hover:shadow-[0_2px_15px_rgba(0,0,0,0.25)] hover:-translate-y-[2px] active:shadow-none active:translate-y-0">
        MORE
        </button>
      </fragment>
    </div>
    
  )
}

export default AboutUs