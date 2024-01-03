import { FC, Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const FormSelectInput: FC<ItemsInterface> = ({ items, title, updateState, id }) => {

  const [selected, setSelected] = useState(items[0])

  useEffect(() => {
    updateState((prev) => ({ ...prev, [id]: selected.name }))
  }, [id, selected, updateState])

  return (
    <div >
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <div >
            <label className="label">
              <span className="label-text-lg">{title}</span>
            </label>
            <div className="relative">
              <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-1 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-secondary focus:outline-none focus:ring-2 focus:ring-secondary sm:text-sm sm:leading-6">
                <span className="flex items-center">
                  {
                    selected.icon ?
                      <img src={selected.icon} alt="" className="h-5 w-5 ml-3 flex-shrink-0 rounded-full" />
                      : ""
                  }
                  <span className="ml-3 block truncate">{selected.name}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {items.map((item) => (
                    <Listbox.Option
                      key={item.id}
                      className={({ active }) =>
                        active ? 'bg-secondary text-white relative cursor-default select-none py-2 pl-3 pr-9' : 'text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9'
                      }
                      value={item}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            {
                              item.icon ?
                                <img src={item.icon} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                                : ""
                            }
                            <span
                              className={selected ? 'font-semibold ml-3 block truncate' : 'font-normal ml-3 block truncate'}
                            >
                              {item.name}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={
                                active ? 'text-white absolute inset-y-0 right-0 flex items-center pr-4' : 'text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4'
                              }
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
    </div>
  )
}

export default FormSelectInput