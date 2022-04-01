/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/destructuring-assignment */
import React, { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

type Item = {
  id: number;
  type: string;
};

interface ComponentProps {
  items: Item[];
}

export default function Dropdown({ items }: ComponentProps): JSX.Element {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }
  const [selected, setSelected] = useState(items[1]);
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <div className="flex flex-col mx-3">
          <Listbox.Label className="block text-sm font-medium text-cream font-bold">
            {items?.length > 2 ? 'Status' : 'Sort by date'}
          </Listbox.Label>
          <div className="relative">
            <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm p-1 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-darkOrange focus:border-darkOrange sm:text-sm">
              <span className="flex items-center">
                <span className="mr-20 block truncate">{selected.type}</span>
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-1 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-darkOrange"
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
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-none focus:outline-none sm:text-sm">
                {items.map((item) => (
                  <Listbox.Option
                    key={item.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-darkOrange' : 'text-gray-900',
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
                              active ? 'text-white' : 'text-darkOrange',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
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
  );
}
