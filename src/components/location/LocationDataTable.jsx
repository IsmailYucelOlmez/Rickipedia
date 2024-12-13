import React from 'react'
import { useGetLocations } from '../../api/LocationApi';
import Pagination from '../Pagination';
import SearchandFilterBar from '../SearchandFilterBar';
import LocationTableRow from './LocationTableRow';
import useFilterStore from '../../store/FilterStore';
import LocationTableHead from './LocationTableHead';
import Loading from '../Loading';


const LocationDataTable = () => {

  const filters=useFilterStore((state)=>state.filters)

  const {locations,isLoading:locationsLoading}=useGetLocations(filters);
 

  return (         

      <div className='flex flex-col'>

        <SearchandFilterBar placeholder={"Search by Name..."}/>

        <LocationTableHead/>    

        {!locationsLoading ?(
          <>
            <div className='flex flex-col gap-4'>

              {locations?.results.map((location,i)=>(

                <LocationTableRow key={location.id} location={location}/>
              ))}
            </div>

            <Pagination dataLength={locations?.info.count} />
          </>
        ):(
          <Loading/>
        )}

      </div>           
      
  )
}

export default LocationDataTable
