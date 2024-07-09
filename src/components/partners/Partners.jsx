import React from 'react'
import flyEmirates from "../../assets/images/fly-emirates.png"
import swiss from "../../assets/images/swiss.png"
import turkishAirlines from "../../assets/images/turkish-airlines.png"
import airbnb from "../../assets/images/airbnb.png"
import etihad from "../../assets/images/trivago.png"

const Partners = () => {
  return (
    <div className='w-full bg-[#F7F7F7] py-10'>
      <div className='container grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mx-auto'>
        <img className='w-[150px] h-[50px]' src={flyEmirates} alt="Fly Emirates" />
        <img className='w-[150px] h-[50px]' src={etihad} alt="Etihad" />
        <img className='w-[150px] h-[50px]' src={airbnb} alt="Airbnb" />
        <img className='w-[150px] h-[50px]' src={turkishAirlines} alt="Turkish Airlines" />
        <img className='w-[150px] h-[50px]' src={swiss} alt="Swiss" />
      </div>
    </div>
  )
}

export default Partners
