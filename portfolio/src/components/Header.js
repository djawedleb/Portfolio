'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Profile1 from "../assets/Profile1.png";
import illustration from "../assets/illustration.png"; // Import your illustration

import { FaHome, FaProjectDiagram, FaEnvelope, FaFilePdf, FaHandshake } from 'react-icons/fa';

const navigation = [
  { name: 'Home', href: '#home', icon: <FaHome /> },
  { name: 'Projects', href: '#project', icon: <FaProjectDiagram /> },
  { name: 'Contact', href: '#contact', icon: <FaEnvelope /> },
  { name: 'Resume', href: '/resume.pdf', icon: <FaFilePdf /> },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='home' className="bg-[#E0F7FA]"> {/* Light blue background */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-transparent backdrop-blur' : 'bg-transparent backdrop-blur-none'}`}>
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1"></div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-2">
                {item.icon}
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#E0F7FA] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              
                <img alt="" src={Profile1} className="h-8 w-auto" />
              
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.icon}
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6"></div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-20 pt-14 ">
        <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#81D4FA] to-[#0288D1] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="  py-32 sm:py-48 lg:py-58 relative">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
            {/* Left side: Text */}
            <div className="lg:w-1/2 text-left">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Hi, I'm Lebaili Djouad Software Developer
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                I am a software engineering student passionate about web and mobile development. I enjoy creating innovative and user-friendly applications and am eager to contribute to impactful projects in the tech industry.
              </p>
              <div className="mt-10 flex items-center justify-start gap-x-6">
                <a
                  href="#contact"
                  className="rounded-md bg-[#0288D1] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0277BD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0288D1] flex items-center gap-2"
                >
                  <FaHandshake className="text-lg" /> {/* Hire me icon */}
                  Hire me!
                </a>
                <a href="/resume.pdf" className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-2">
                  About Me
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            {/* Right side: Illustration */}
            <div className="absolute right-0  lg:w-1/2 lg:h-auto hidden lg:block">
              <img
                src={illustration} // Your illustration image
                alt="illustration"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#81D4FA] to-[#0288D1] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}
