import React from 'react'
import Location from './search-components/Location'
import Dates from "./search-components/Dates"
import SearchIcon from './search-components/SearchIcon'
import Booking from './search-components/Booking'
import Trips from './search-components/Trips'
import Airlines from './search-components/Airlines'
import Passengers from './search-components/Passengers'

const Search = () => {
  return (
    <>
    <div className='flex w-full flex-col xl:flex-row md:absolute'>
        <Location/>
        <Dates/>
        <Booking/>
        <Trips/>
        <Airlines/>
        <Passengers/>
        <SearchIcon/>
    </div>
    </>
  )
}

export default Search