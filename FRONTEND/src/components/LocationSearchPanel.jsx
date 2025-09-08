import React from 'react'

const LocationSearchPanel = ({ suggestions, setVehiclePanelOpen, setPanelOpen, setPickup, setDestination, activeField }) => {

    const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion)
        } else if (activeField === 'destination') {
            setDestination(suggestion)
        }
        // Optionally close the panel or set the vehicle panel state
        // setVehiclePanelOpen(true)
        // setPanelOpen(false)
    }

    return (
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
            {/* Display fetched suggestions */}
            {suggestions.map((elem, idx) => (
                <div
                    key={idx}
                    onClick={() => handleSuggestionClick(elem)}
                    className="flex gap-4 border-2 p-4 border-gray-200 rounded-xl items-center my-2 cursor-pointer hover:border-blue-600 transition-all ease-in-out duration-200 hover:shadow-lg"
                >
                    <div className="bg-gray-100 h-10 w-10 flex items-center justify-center rounded-full">
                        <i className="ri-map-pin-fill text-lg text-gray-600"></i>
                    </div>
                    <h4 className="text-lg font-medium text-gray-800">{elem}</h4>
                </div>
            ))}
        </div>
    )
}

export default LocationSearchPanel;
