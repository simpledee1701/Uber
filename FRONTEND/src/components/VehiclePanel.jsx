import React from 'react';

const VehiclePanel = ({ setVehiclePanelOpen, setConfirmedRidePanel, setVehicleType, fare }) => {
  const vehicles = [
    { 
      type: 'car', 
      name: 'UberGo', 
      capacity: 4, 
      time: '2 min away', 
      desc: 'Affordable compact rides', 
      img: 'https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387_1280.png' 
    },
    { 
      type: 'motorcycle', 
      name: 'Moto', 
      capacity: 1, 
      time: '3 min away', 
      desc: 'Affordable motorcycle rides', 
      img: 'https://www.pngplay.com/wp-content/uploads/7/Yellow-Motorcycle-Bike-PNG-HD-Quality.png' 
    },
    { 
      type: 'auto', 
      name: 'Auto', 
      capacity: 3, 
      time: '1 min away', 
      desc: 'Affordable auto rides', 
      img: 'https://i.pinimg.com/736x/43/2f/6d/432f6d0df7b4fa8ebfa2212c8a34ca8e.jpg' 
    }
  ];

  const handleVehicleSelect = (vehicleType) => {
    setVehicleType(vehicleType);
    setConfirmedRidePanel(true);
    setVehiclePanelOpen(false);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-bold text-2xl text-gray-800">Choose a ride</h2>
        <button
          className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
          onClick={() => setVehiclePanelOpen(false)}
        >
          <i className="ri-close-line text-xl"></i>
        </button>
      </div>

      {/* Vehicle Options */}
      <div className="space-y-4">
        {vehicles.map(vehicle => (
          <div
            key={vehicle.type}
            onClick={() => handleVehicleSelect(vehicle.type)}
            className="flex items-center justify-between w-full p-4 border border-gray-200 rounded-xl hover:border-blue-400 hover:shadow-md active:bg-blue-50 cursor-pointer transition-all duration-200"
          >
            <div className="flex items-center">
              <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden mr-4">
                <img 
                  className="h-12 object-contain" 
                  src={vehicle.img} 
                  alt={vehicle.name} 
                />
              </div>
              
              <div>
                <div className="flex items-center">
                  <h4 className="font-semibold text-gray-800">{vehicle.name}</h4>
                  <span className="ml-2 bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full flex items-center">
                    <i className="ri-user-3-fill mr-1"></i> {vehicle.capacity}
                  </span>
                </div>
                <h5 className="text-sm text-blue-600 font-medium mt-1">{vehicle.time}</h5>
                <p className="text-xs text-gray-500 mt-1">{vehicle.desc}</p>
              </div>
            </div>
            
            <div className="flex flex-col items-end">
              <h2 className="text-xl font-bold text-gray-800">
                ₹{fare[vehicle.type] || "--"}
              </h2>
              <span className="text-xs text-green-600 font-medium mt-1">Best price</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          All prices include taxes and fees
        </p>
      </div>
    </div>
  );
};

export default VehiclePanel;