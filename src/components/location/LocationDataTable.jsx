import React, { useState } from 'react'
import { useGetLocations } from '../../api/LocationApi';
import Pagination from '../Pagination';
import SearchandFilterBar from '../SearchandFilterBar';
import LocationTableRow from './LocationTableRow';


const LocationDataTable = () => {

  const [currentPage,setCurrentPage]=useState(1);

  const {locations,isLoading:locationsLoading}=useGetLocations(currentPage);
 

  return (
        
      !locationsLoading ?(

        <div className='flex flex-col'>

          <SearchandFilterBar placeholder={"Search by Name..."}/>

          <div className='flex justify-between items-center px-2 border-b border-black pb-1 mb-2'>
            
            <div className='grid grid-cols-3  gap-2 w-full text-center'>
              
              <p>Name</p>
              <p>Type</p>
              <p>Dimension</p>            
              
            </div>
            
          </div>

          <div className='flex flex-col gap-4'>

          {locations?.results.map((location,i)=>(

            <LocationTableRow key={location.id} location={location}/>
          ))}
          </div>

          <Pagination dataLength={locations?.info.count} currentPage={currentPage} setCurrentPage={setCurrentPage} />

        </div>
        
      ):(
        <div>
          <p>loading...</p>
        </div>
      )
      
  )
}

export default LocationDataTable
