import React, { useState, useEffect } from 'react';
import { Disclosure, DisclosureButton } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '#Carousel', current: true },
  { name: 'About Us', href: '#About-Us', current: false },
  { name: 'Services', href: '#Products', current: false },
  { name: 'Products', href: '#Products', current: false },
  { name: 'Contact Us', href: '#Contact-Us', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Disclosure
      as="nav"
      className={` md:bg-transparent z-50 m-auto items-center font-jost w-full backdrop-blur-lg backdrop-brightness-75 lg:sticky sticky top-0 transition-transform duration-300 ${
        visible ? 'lg:translate-y-0' : 'lg:-translate-y-full'
      }`}
    >
      <div className="mx-auto max-w-7xl px-2">
        <div className="relative h-20 flex items-center justify-between md:border-b border-yellow-500">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* Mobile menu button */}
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
                alt="Mantik Enterprises"
                src="./img/logo-xl.png"
                className="sm:hidden h-14 w-auto md:pr-10 lg:border-r border-gray-300"
              />
              <img
                alt="Mantik Enterprises"
                src="./img/logo-64-wh.svg"
                className="hidden sm:block h-14 w-auto md:pr-10 lg:border-r border-gray-300"
              />
              <h1 className="uppercase text-xl sm:text-2xl font-normal tracking-wide px-5 hidden sm:block md:hidden lg:block">
                Mantik Enterprises
              </h1>
            </div>
            <div className="hidden md:ml-6 md:block">
              <div className="flex space-x-2 py-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current
                        ? 'ring-1 hover:ring-[#fcf5c7] ring-yellow-400 transition-all ease-in-out delay-200'
                        : 'relative text-gray-100 overflow-hidden group hover:text-black',
                      'rounded-md px-6 py-2 text-lg font-normal'
                    )}
                  >
                    <span className="absolute inset-0 bg-[#fcf5c7] scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100" />
                    <span className="relative z-50">{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Disclosure.Panel className="md:hidden">
        <div className="space-y-1 px-5 pb-20 pt-2 divide-y divide-gray-500">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'text-white' : 'text-gray-300',
                'block py-6 text-lg font-normal tracking-wider'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}
