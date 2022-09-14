import './App.css'
import Spline from '@splinetool/react-spline'
import { FiMenu } from 'react-icons/fi'
import { useState } from 'react'
function App () {
  const [isActive, setActive] = useState(false)
  const [isSelected, setSelected] = useState(false)
  return (
    <div className='App'>
      <div className=' w-screen h-screen flex-col bg-Primary'>
        {/* NAV BAR  */}
        <nav className='w-full fixed px-1 md:px-6 z-50 inset-x-0 top-8 flex justify-center items-center  '>
          <div className='w-full md:w-880 bg-Navbar flex  rounded-2xl p-3 md:p-6  '>
            <p className='text-white text-md font-semibold font-serif mr-auto'>
              Adarsh K
            </p>
            <div className='hidden md:flex gap-5'>
              <a
                href=''
                className='text-slate-500 text-lg font-semibold hover:text-white'
              >
                Home
              </a>
              <a
                href=''
                className='text-slate-500 text-lg font-semibold hover:text-white'
              >
                About
              </a>
              <a
                href=''
                className='text-slate-500 text-lg font-semibold hover:text-white'
              >
                Projects
              </a>
              <a
                href=''
                className='text-slate-500 text-lg font-semibold hover:text-white'
              >
                PortFolio
              </a>
              <div className='ml-auto text-gray-900 text-lg rounded border-slate-400 bg-slate-500 px-2 hover:text-white'>
                <button>Download</button>
              </div>
            </div>
            <div
              className='block md:hidden cursor-pointer'
              onClick={() => setActive(prev => !prev)}
            >
              <FiMenu className='text-2xl  text-white' />
            </div>
            {isActive && (
              <div className='flex flex-col md:hidden w-full h-auto fixed top-[82px] items-center'>
                <div className='flex flex-col gap-4 py-2 w-80 bg-Navbar'>
                  <div onClick={() => setActive(false)}>
                    <a
                      href=''
                      className='text-slate-500 text-lg font-semibold hover:text-white'
                    >
                      Home
                    </a>
                  </div>
                  <div onClick={() => setActive(false)}>
                    <a
                      href=''
                      className='text-slate-500 text-lg font-semibold hover:text-white'
                    >
                      About
                    </a>
                  </div>
                  <div onClick={() => setActive(false)}>
                    <a
                      href=''
                      className='text-slate-500 text-lg font-semibold hover:text-white'
                    >
                      Projects
                    </a>
                  </div>
                  <div onClick={() => setActive(false)}>
                    <a
                      href=''
                      className='text-slate-500 text-lg font-semibold hover:text-white'
                    >
                      Contacts
                    </a>
                  </div>

                  <div className='ml-28 flex justify-self-center w-28 text-gray-900 text-lg rounded border-slate-400 bg-slate-500 px-2  hover:text-white'>
                    <button>Download</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Animation Added */}
        <div className='h-screen w-screen overflow-hidden bg-Primary'>
          <Spline scene='https://prod.spline.design/MJfFjUoWLYK8CoPs/scene.splinecode' />
          <div className='absolute bottom-5 right-16'>
            <div className='rounded-md bg-slate-500'>
              <p className='text-base font-semibold'>Press And Drag To Orbit</p>
            </div>
          </div>
        </div>
      </div>
      {/* main section */}
      <main className='w-[80%] mt-5'>
        {/* about */}
        <section
          id='about'
          className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-10'
        >
          {/* image  */}
          <div></div>
          {/* paragraph */}
          <div></div>
        </section>
      </main>
    </div>
  )
}

export default App
