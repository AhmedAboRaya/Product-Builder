
'use client'

import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const brans = [
  {
    id: 1,
    name: 'Acura',
    avatar:
      'https://th.bing.com/th/id/R.d8990c4f530b79b8a6a56aa73f70e2aa?rik=GYHx0gAxZvfhcA&pid=ImgRaw&r=0',
  },
  {
    id: 2,
    name: 'Aston Martin',
    avatar:
      'https://th.bing.com/th/id/R.70e0b348ad600fe20b1679252d53d6b7?rik=xtDisxTBE%2bfI8g&pid=ImgRaw&r=0',
  },
  {
    id: 3,
    name: 'Audi',
    avatar:
      'https://th.bing.com/th/id/OIP.Cta-CMAXxwKOpr8iKEYZjwHaEE?rs=1&pid=ImgDetMain',
  },
  {
    id: 4,
    name: 'BMW',
    avatar:
      'https://th.bing.com/th/id/OIP.EcF6jP_c5LwEcQLbSalKUQHaHa?rs=1&pid=ImgDetMain',
  },
  {
    id: 5,
    name: 'Alfa Romeo',
    avatar:
      'https://th.bing.com/th/id/R.ed085a6b9e364b0e1ae90f34dadee73c?rik=2gbLZH42zFBSqA&riu=http%3a%2f%2ftous-logos.com%2fwp-content%2fuploads%2f2017%2f09%2flogo-Alfa-Romeo.png&ehk=WfZ0lVsPfFxdpGG7g%2ffoO0Z3ZRcjFm%2fDovcDr0GG9yc%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    id: 6,
    name: 'Buick',
    avatar:
      'https://th.bing.com/th/id/OIP.6gvmrCKDLoUyR2Rjh2NRvwHaEK?rs=1&pid=ImgDetMain',
  },
  {
    id: 7,
    name: 'Cadillac',
    avatar:
      'https://th.bing.com/th/id/R.b7661d474b4e5ed71077e9992279ce41?rik=1emIxUNNA2dI7A&pid=ImgRaw&r=0',
  },
  {
    id: 8,
    name: 'Chevrolet',
    avatar:
      'https://th.bing.com/th/id/OIP.ZE3d6MkNn5Ae_lLgCO7UYgHaEK?rs=1&pid=ImgDetMain',
  },
  {
    id: 9,
    name: 'Chrysler',
    avatar:
      'https://th.bing.com/th/id/R.3a45bb99211edf34697e3657f450cabb?rik=rs%2fBg9BGLMe80Q&pid=ImgRaw&r=0',
  },
  {
    id: 10,
    name: 'Dodge',
    avatar:
      'https://th.bing.com/th/id/OIP.9jbDRX3hndBlr0_trp1X_wHaEK?rs=1&pid=ImgDetMain',
  },
]


interface IProps {


}

function SelectMenu() {
    const [selected, setSelected] = useState(brans[3])
  
    return (
      <Listbox value={selected} onChange={setSelected}>
        <Label className="block text-sm font-medium leading-6 text-gray-900">Assigned to</Label>
        <div className="relative mt-2">
          <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
            <span className="flex items-center">
              <img alt="" src={selected.avatar} className="h-5 w-5 flex-shrink-0 rounded-full" />
              <span className="ml-3 block truncate">{selected.name}</span>
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
              <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
            </span>
          </ListboxButton>
  
          <ListboxOptions
            transition
            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
          >
            {brans.map((person) => (
              <ListboxOption
                key={person.id}
                value={person}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
              >
                <div className="flex items-center">
                  <img alt="" src={person.avatar} className="h-5 w-5 flex-shrink-0 rounded-full" />
                  <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                    {person.name}
                  </span>
                </div>
  
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                  <CheckIcon aria-hidden="true" className="h-5 w-5" />
                </span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    )
  }

export default SelectMenu