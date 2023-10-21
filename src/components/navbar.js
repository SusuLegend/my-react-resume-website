import "./navbar.css";
import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#Home", current: true },
  { name: "About", href: "#About", current: false },
  { name: "Skill", href: "#Skill", current: false },
  { name: "Project", href: "#Project", current: false },
  { name: "Contact", href: "#Contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarView() {
  const [Navigation1, SetIsClickNav] = useState(navigation);

  function handlechange(navName) {
    SetIsClickNav((prevState) => {
      return prevState.map((navitem) => {
        return navitem.name === navName ? { ...navitem, current: true } : { ...navitem, current: false };
      });
    });
  }

  return (
    <Disclosure as="nav" className="bg-gradient-to-r from-[#053B50] from-10% via-[#176B87] via-30% to-[#64CCC5] to-90% sticky top-0 z-50 w-full fixed">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-14 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <span className="text-gray-50 font-pacifico pl-2">SusuLegend</span>
                </div>
                <div className="hidden sm:ml-auto sm:block">
                  <div className="flex space-x-4">
                    {Navigation1.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? "bg-gray-900 text-white text-center no-underline scale-125 ease-in duration-100 w-20" : "text-gray-100 no-underline font-medium hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        onClick={() => handlechange(item.name)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {Navigation1.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(item.current ? "bg-gray-900 text-white no-underline" : "text-gray-300 no-underline hover:bg-gray-700 hover:text-white", "block rounded-md px-3 py-2 text-base font-medium")}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
