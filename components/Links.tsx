'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
const Links = () => {
  const [menu, setMenu] = useState(false)
  const pathname = usePathname()
  return (
    <>
      <div
        className=' lg:hidden cursor-pointer z-50'
        onClick={() => setMenu(!menu)}
      >
        {menu ? (
          <X
            size={24}
            color='red'
          />
        ) : (
          <Menu size={24} />
        )}
      </div>
      <div
        className={
          'w-full  flex items-center  justify-between  gap-6    italic'
        }
      >
        <Link
          href='/'
          className='flex items-center gap-2 max-sm-gap-1'
        >
          <Image
            src='/images/logo.png'
            alt=' Logo'
            width={70}
            height={70}
            className=''
          />
          <h1 className='font-semibold text-xl max-sm:hidden  '>Movies</h1>
        </Link>

        <div className='max-lg:hidden flex '>
          <div className='flex items-center gap-6'>
            <Link
              href='/'
              className={`flex items-center gap-4 hover:bg-primary hover:text-primary-foreground hover:rounded-sm  rounded-sm px-4 py-1 transition ${
                pathname === '/' ? 'active ' : 'px-4'
              }`}
            >
              Home
            </Link>

            <Link
              href='/about-us'
              className={`flex items-center gap-4 hover:bg-primary hover:text-primary-foreground hover:rounded-sm  rounded-sm px-4 py-1 transition ${
                pathname === '/about-us' ? 'active ' : 'px-4'
              }`}
            >
              About
            </Link>
            <Link
              href='/contact'
              className={`flex items-center gap-4 hover:bg-primary hover:text-primary-foreground hover:rounded-sm  rounded-sm px-4 py-1 transition ${
                pathname === '/contact' ? 'active ' : 'px-4'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
        {menu && (
          <div
            className='h-screen w-full  absolute left-0 top-0  flex items-center  justify-between     z-10'
            onClick={() => setMenu(false)}
          >
            <div
              className='w-1/2 absolute top-0 left-0  flex flex-col pt-20 pb-8 gap-6 bg-secondary lg:hidden z-40'
              onClick={() => setMenu(false)}
            >
              <Link
                href='/'
                className={`flex items-center gap-4 hover:bg-primary hover:text-primary-foreground hover:rounded-sm  rounded-sm px-4 py-1 transition ${
                  pathname === '/' ? 'active ' : 'px-4'
                }`}
              >
                Home
              </Link>

              <Link
                href='/about-us'
                className={`flex items-center gap-4 hover:bg-primary hover:text-primary-foreground hover:rounded-sm  rounded-sm px-4 py-2 transition ${
                  pathname === '/about-us' ? 'active ' : 'px-4'
                }`}
              >
                About
              </Link>
              <Link
                href='/contact'
                className={`flex items-center gap-4 hover:bg-primary hover:text-primary-foreground hover:rounded-sm  rounded-sm px-4 py-2 transition ${
                  pathname === '/contact' ? 'active ' : 'px-4'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Links
