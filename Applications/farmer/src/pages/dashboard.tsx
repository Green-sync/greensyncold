import React, { useState } from 'react';
import ProfileComponent from '../components/dashboard/profile';
import RecentActivities from '../components/dashboard/recentActivities';
import SidebarComponent from '../components/dashboard/sideBar';
import { CalendarComponent } from '../components/dashboard/calendar/calendar';
import SearchBar from '../components/dashboard/searchBar';

const DashboardComponent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <SidebarComponent />
      <div className="flex-1 p-6 lg:p-10 bg-gray-200">
        <div className="bg-green-700 text-white px-4 py-3 mb-6 rounded-md flex items-center justify-between">
          <ProfileComponent />
          <div className="w-2/3 mx-auto">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="col-span-1 lg:col-span-8">
            <CalendarComponent />
            {/* <RecentActivities searchQuery={searchQuery} /> */}
          </div>
          <div className="col-span-1 lg:col-span-4"></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
