import React from 'react';
import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';

//layouts 
import RootLayout from './layouts/RootLayout';

//Pages 
import Home from './views/Home'; 
import Dashboard from './views/Dashboard'; 
import UserList from './views/UserList';
import UserDetails from './views/UserDetails';
import FarmList from './views/FarmList';
import FarmDetails from './views/FarmDetails';
import CropList from './views/CropList';
import CropDetails from './views/CropDetails';
import LivestockList from './views/LivestockList';
import LivestockDetails from './views/LivestockDetails';
import WeatherDataList from './views/WeatherDataList';
import WeatherDataDetails from './views/WeatherDataDetails';
import IoTDeviceList from './views/IoTDeviceList';
import IoTDeviceDetails from './views/IoTDeviceDetails';

import UserFarms from './views/UserFarms'; 


const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/users" element={<UserList />} />
      <Route path="/users/:userId" element={<UserDetails />} />
      <Route path="/farms" element={<FarmList />} />
      <Route path="/farms/:farmId" element={<FarmDetails />} />
      <Route path="/crops" element={<CropList />} />
      <Route path="/crops/:cropId" element={<CropDetails />} />
      <Route path="/livestock" element={<LivestockList />} />
      <Route path="/livestock/:livestockId" element={<LivestockDetails />} />
      <Route path="/weather-data" element={<WeatherDataList />} />
      <Route path="/weather-data/:weatherDataId" element={<WeatherDataDetails />} />
      <Route path="/iot-devices" element={<IoTDeviceList />} />
      <Route path="/iot-devices/:deviceId" element={<IoTDeviceDetails />} />
      <Route path="/users/:userId/farms" element={<UserFarms />} />

    </Route>

)
);

export default router;
