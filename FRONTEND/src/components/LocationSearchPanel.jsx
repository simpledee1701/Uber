import React from 'react'

const LocationSearchPanel = (props) => {


    const locations = ["BMS Boys Hostel near basavanagudi temple",
        "BMS Boys Hostel near basavanagudi temple",
        "BMS Boys Hostel near basavanagudi temple",
    ]

  return (
    <div>
        {
            locations.map(function(location,ke){
                return <div key={ke} onClick={()=>{
                    props.setVehiclePanelOpen(true);
                    props.setPanelOpen(false);
                }} className='flex items-center  active:bg-gray-200 m-3 rounded-xl gap-3 p-2'>
                <h2 className='bg-[#eee] h-10 w-14 flex items-center justify-center rounded-full'><i className='ri-map-pin-fill'></i></h2>
                <h4 className='font-semibold'>{location}</h4>
             </div>
            })
        }
    </div>
  )
}

export default LocationSearchPanel
