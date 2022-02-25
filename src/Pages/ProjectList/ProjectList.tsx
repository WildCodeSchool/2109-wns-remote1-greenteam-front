/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
import React, { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import {
  activeNextPageButton,
  imgprojectlist,
  inactiveNextPageButton,
  searchIcon,
} from '../../assets';
import ProjectBox from './ProjectBox';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const arraydata = [
  { id: 1, title: 'project 1', manager: 'John Doe' },
  { id: 2, title: 'project 2', manager: 'John Doe' },
  { id: 3, title: 'project 3', manager: 'John Doe' },
  { id: 4, title: 'project 4', manager: 'John Doe' },
  { id: 5, title: 'project 5', manager: 'John Doe' },
  { id: 6, title: 'project 6', manager: 'John Doe' },
  { id: 7, title: 'project 7', manager: 'John Doe' },
  { id: 8, title: 'project 8', manager: 'John Doe' },
  { id: 9, title: 'project 9', manager: 'John Doe' },
  { id: 10, title: 'project 10', manager: 'John Doe' },
  { id: 11, title: 'project 11', manager: 'John Doe' },
  { id: 12, title: 'project 12', manager: 'John Doe' },
];

export default function ProjectList(): JSX.Element {
  const status = [
    {
      id: 1,
      type: 'Not started',
    },
    {
      id: 2,
      type: 'In Progress',
    },
    {
      id: 3,
      type: 'Finished',
    },
  ];

  const [selected, setSelected] = useState(status[1]);

  return (
    <div className=" flex flex-col w-screen h-screen gap-2">
      <div className="flex flex-row w-full h-fit items-center justify-center">
        <h1 className="lg:text-3xl sm:text-sm md:text-2xl ">Project list</h1>
        <img src={imgprojectlist} className=" w-16 h-16" alt="imgprojectlist" />
      </div>
      <div className="w-full flex flex-row justify-center items-center">
        <div className="bg-cyan h-16 rounded-xl lg:text-sm sm:text-xs md:text-xs text-xs px-4 flex justify-center max-w-full box-border">
          <div className="flex flex-col">
            <span>Search</span>
            <div className="flex flex-row max-w-full box-border">
              <input
                type="text"
                className="rounded-md w-full box-border"
                placeholder="Enter text"
              />
              <img className="w-1/3 h-1/4" alt="searchIcon" src={searchIcon} />
            </div>
          </div>

          <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
              <div className="flex flex-col">
                <Listbox.Label className="block text-sm font-medium text-gray-700">
                  Status
                </Listbox.Label>
                <div className="relative">
                  <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <span className="flex items-center">
                      <span className="mr-6 block truncate">
                        {selected.type}
                      </span>
                    </span>
                    <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <SelectorIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      {status.map((item) => (
                        <Listbox.Option
                          key={item.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? 'text-white bg-indigo-600'
                                : 'text-gray-900',
                              'cursor-default select-none relative py-2 pl-3 pr-9'
                            )
                          }
                          value={item}
                        >
                          {({ selected, active }) => (
                            <>
                              <div className="flex items-center">
                                <span
                                  className={classNames(
                                    selected ? 'font-semibold' : 'font-normal',
                                    'ml-3 block truncate'
                                  )}
                                >
                                  {item.type}
                                </span>
                              </div>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? 'text-white' : 'text-indigo-600',
                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </div>
            )}
          </Listbox>
        </div>
      </div>

      <div className="w-full flex flex-row gap-5 p-2 justify-center flex-wrap">
        {arraydata.map((item) => (
          <div key={item.id}>
            <ProjectBox title={item.title} manager={item.manager} />
          </div>
        ))}
      </div>

      <div className="w-full flex flex-row justify-center">
        <img src={activeNextPageButton} alt="activeNextPageButton" />
        <img src={inactiveNextPageButton} alt="inactiveNextPageButton" />
        <img src={inactiveNextPageButton} alt="inactiveNextPageButton" />
        <img src={inactiveNextPageButton} alt="inactiveNextPageButton" />
      </div>
    </div>
  );
}
