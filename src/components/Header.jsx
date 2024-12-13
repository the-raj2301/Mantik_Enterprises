import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About Us', href: '#', current: false },
  { name: 'Services', href: '#', current: false },
  { name: 'Products', href: '#', current: false },
  { name: 'Contact Us', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-gray-800 font-jost">
      <div className="mx-auto max-w-7xl px-2">
        <div className="relative h-20 flex items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-300">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-7 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-7 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-between">
            <div className="flex shrink-0 items-center">
              {/* Company Logo */}
              <img
                alt="Your Company"
                src="./img/logo-64-wh.svg"
                className="h-14 w-auto pr-10 lg:border-r border-gray-500"
              />
              <h1 className='uppercase text-2xl font-normal tracking-wide px-5 hidden lg:block'>Mantik Enterprises</h1>
            </div>
            <div className="hidden md:ml-6 md:block">
              <div className="flex space-x-4 py-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-900 hover:text-white',
                      'rounded-md px-3 py-2 text-lg font-normal',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 px-5 pb-20 pt-2 divide-y divide-gray-500">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'text-white' : 'text-gray-300',
                'block py-6 text-lg font-normal tracking-wider',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
