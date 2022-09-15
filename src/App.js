import './App.css'
import Spline from '@splinetool/react-spline'
import project from './data/project'
import socials from './data/social'
import { FiMenu } from 'react-icons/fi'
import { BsCodeSlash } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { useState } from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import athira from './img/athira.JPG'
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
                href='#about'
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
                      href='#about'
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
      <main className='w-full px-3 md:px-20 mt-4'>
        {/* about */}
        <section
          id='about'
          className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-6'
        >
          {/* image  */}
          <div className='w-full h-420 flex items-center justify-center bg-slate-100 px-5 '>
            <div className='w-full md:w-[350px] h-full  bg-emerald-200 rounded-md relative flex'>
              <img
                src={athira}
                alt=''
                className='w-full  h-full object-cover opacity-80  absolute -right-4 top-2 md:top-4 rounded items-stretch'
              />
            </div>
          </div>
          {/* paragraph */}
          <div className='w-full h-full bg-slate-100 flex  items-center px-2'>
            <div className='flex flex-col gap-5'>
              <p className='text-2xl text-bold font-bold'>About</p>
              <p className='text-md text-gray-600 font-semibold font-serif leading-7'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                fugit accusantium! Alias, repellat fugiat debitis non iusto,
                asperiores ab nemo obcaecati officiis suscipit quas commodi fuga
                perspiciatis vitae aperiam magni. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Suscipit incidunt voluptates a.
                Tempora voluptas doloremque nihil reprehenderit, labore
                voluptatibus ex nesciunt iure necessitatibus a? Dolor quibusdam
                blanditiis beatae distinctio non?
              </p>
              <div className='w-full flex justify-center'>
                <button className='px-2 py-2 text-white md:text-black font-bold text-md w-full md:w-48 bg-gradient-to-tr from-slate-400 to bg-slate-300 hover:bg-slate-600'>
                  Download
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Timeline */}
        <section className='w-full items-center justify-center py-8 bg-slate-200'>
          <VerticalTimeline>
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              contentStyle={{ background: 'rgb(21,24,31)', color: '#888' }}
              contentArrowStyle={{
                borderRight: '7px solid  rgb(21,24,31)'
              }}
              date='2011 - present'
              iconStyle={{ background: 'rgb(21,24,31)', color: '#888' }}
              icon={<BsCodeSlash />}
            >
              <h3 className='vertical-timeline-element-title'>
                Creative Director
              </h3>
              <h4 className='vertical-timeline-element-subtitle'>Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              contentStyle={{ background: 'rgb(21,24,31)', color: '#888' }}
              contentArrowStyle={{
                borderRight: '7px solid  rgb(21,24,31)'
              }}
              date='2011 - present'
              iconStyle={{ background: 'rgb(21,24,31)', color: '#888' }}
              icon={<BsCodeSlash />}
            >
              <h3 className='vertical-timeline-element-title'>
                Creative Director
              </h3>
              <h4 className='vertical-timeline-element-subtitle'>Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              contentStyle={{ background: 'rgb(21,24,31)', color: '#888' }}
              contentArrowStyle={{
                borderRight: '7px solid  rgb(21,24,31)'
              }}
              date='2011 - present'
              iconStyle={{ background: 'rgb(21,24,31)', color: '#888' }}
              icon={<BsCodeSlash />}
            >
              <h3 className='vertical-timeline-element-title'>
                Creative Director
              </h3>
              <h4 className='vertical-timeline-element-subtitle'>Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </section>
        {/* Project section */}
        <section className='w-screen flex flex-wrap my-20 gap-8 items-center justify-center bg-Navbar py-8 px-3'>
          {
            project && project.map((item)=>{
              return(
                <div className=' flex flex-col gap-3 w-full  min-w-[275px] md:max-w-[275px] cursor-pointer'>
            <p className='text-white text-md font-bold uppercase leading-6'>
              {item.name}
            </p>
            <img
              src={item.img}
              alt=''
              className='rounded-md border-2 border-zinc-400 h-[200px]'
            />
            <div className='flex flex-row gap-3 justify-between items-center '>
              <div className='flex flex-col gap-2'>
                <p className='text-lg text-white font-semibold '>
                  Technologies
                </p>
                <span className='text-sm font-semibold text-gray-500'>
                  {item.tech}
                </span>
              </div>
              <a href=''>
                <div>
                  <AiFillGithub className='text-3xl text-white' />
                </div>
              </a>
            </div>
          </div>
              )
            })
          }
        </section>

        {/* contact section  */}

        <section className='w-screen my-20 flex flex-col gap-8 py-6 px-3 md:px-10 md-px-16 items-center justify-center'>
           <p className='text-2xl text-gray-500 font-semibold'>Follow Me On</p>
          
          <div div className='flex flex-wrap gap-8 '>
            {
              socials && socials.map((item)=>{
                return(
                  <div className='flex w-full md:w-auto gap-11 md:gap-3 mx-6 md:mx-0 items-center justify-center' >

              <a href='#'>
                {item.icon}
              </a>
              <p className='font-bold font-serif text-md md:text-lg'>{item.name}</p>
            </div>
                )
              })
            }
           </div>

        </section>
      </main>
    </div>
  )
}

export default App
