import React from 'react';
import { NavLink } from 'react-router-dom';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'User', href: '/users' },
  { name: 'Farm', href: '/farms' },
  { name: 'Crops', href: '/crops' },
  { name: 'Livestock', href: '/livestock' },
  { name: 'Weather Data', href: '/weather-data'},
  { name: 'IoTDevice', href:'/iot-devices'},
  { name: 'Dashboard', href:'/dashboard'},
]

const Header = () => (

  <Popover as="header" className="relative">
  <div className="bg-gray-900 pt-6">
    <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6" aria-label="Global">
      <div className="flex flex-1 items-center">
        <div className="flex w-full items-center justify-between md:w-auto">
          <a href="#">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt=""
            />
          </a>
          <div className="-mr-2 flex items-center md:hidden">
            <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
        <div className="hidden space-x-8 md:ml-10 md:flex">
          {navigation.map((item) => (
            <NavLink key={item.name} to={item.href} className="text-base font-medium text-white hover:text-gray-300">
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="hidden md:flex md:items-center md:space-x-6">
        <a href="#" className="text-base font-medium text-white hover:text-gray-300">
          Log in
        </a>
        <a
          href="#"
          className="inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-base font-medium text-white hover:bg-gray-700"
        >
          Start free trial
        </a>
      </div>
    </nav>
  </div>

  <Transition
    as={Fragment}
    enter="duration-150 ease-out"
    enterFrom="opacity-0 scale-95"
    enterTo="opacity-100 scale-100"
    leave="duration-100 ease-in"
    leaveFrom="opacity-100 scale-100"
    leaveTo="opacity-0 scale-95"
  >
    <Popover.Panel focus className="absolute inset-x-0 top-0 z-10 origin-top transform p-2 transition md:hidden">
      <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
        <div className="flex items-center justify-between px-5 pt-4">
          <div>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </div>
          <div className="-mr-2">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
        <div className="pb-6 pt-5">
          <div className="space-y-1 px-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="mt-6 px-5">
            <a
              href="#"
              className="block w-full rounded-md bg-indigo-600 px-4 py-3 text-center font-medium text-white shadow hover:bg-indigo-700"
            >
              Start free trial
            </a>
          </div>
          <div className="mt-6 px-5">
            <p className="text-center text-base font-medium text-gray-500">
              Existing customer?{' '}
              <a href="#" className="text-gray-900 hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </Popover.Panel>
  </Transition>
</Popover>
);

export default Header;
