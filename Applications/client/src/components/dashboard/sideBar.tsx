import { CalendarIcon, ClockIcon, CpuChipIcon, GlobeAltIcon, HomeIcon, ShoppingBagIcon, SunIcon, UserCircleIcon } from "@heroicons/react/20/solid";

function SidebarComponent() {
  const menuItems = [
    { label: 'Home', icon: <HomeIcon className="w-6 h-6" />, href: '#' },
    { label: 'Profile', icon: <UserCircleIcon className="w-6 h-6" />, href: '#' },
    { label: 'Weather', icon: <SunIcon className="w-6 h-6" />, href: '#' },
    { label: 'Calendar', icon: <CalendarIcon className="w-6 h-6" />, href: '#' },
    { label: 'Farm', icon: <GlobeAltIcon className="w-6 h-6" />, href: '#' },
    { label: 'IoT', icon: <CpuChipIcon className="w-6 h-6" />, href: '#' },
    { label: 'Recent', icon: <ClockIcon className="w-6 h-6" />, href: '#' },
    { label: 'Marketplace', icon: <ShoppingBagIcon className="w-6 h-6" />, href: '#' },
  ];
  
  return (
    <div className="w-56 h-screen bg-green-800 py-6 px-4">
      <div className="flex  mb-8">
        <img
          className="h-8 w-8 mr-2"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
          alt="Workflow"
        />
        <span className="text-white text-xl font-medium">GreenSync</span>
      </div>
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-center py-2 px-4 rounded-lg text-gray-300 hover:text-white hover:bg-yellow-600 transition duration-300"
              >
                <span className="text-lg mr-3">{item.icon}</span>
                <span className="text-lg">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="absolute bottom-0 py-6 px-4">
        <button className="flex items-center py-2 px-4 rounded-lg text-gray-300 hover:text-white hover:bg-pink-500 transition duration-300">
          <svg className="w-6 h-6 fill-current text-yellow-300" viewBox="0 0 24 24">
            <path d="M12 6l-6 6h4v6h4v-6h4l-6-6z" />
          </svg>
          <span className="text-lg ml-2">Logout</span>
        </button>
      </div>
    </div>
  );
}

export default SidebarComponent;
