"use client"
import { ArrowRightFromLine } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Explore() {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/api/courses')
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.courses)
      })
  }, [])
  return (
    <div className='text-center md:py-14 py-6'>
      <h1 className='text-3xl md:text-4xl font-bold underline decoration-indigo-500'>Explore Courses</h1>
      <div className='flex flex-wrap justify-evenly items-center pt-14'>
        {
          courses.slice(0, 3).map((course,i)=>(
            <Link key={i} href={`/courses/${course.id} ` }>
              <div>
                  <Image
                  src={course.img}
                  width={300}
                  height={400}
                  alt="Picture of the author"/>
                  <h1>{course.name}</h1>
              </div>  
            </Link>
          ))
        }
        <Link href='/courses' className='p-5 bg-blue-600 text-white rounded-full'>
          <ArrowRightFromLine/>
        </Link>
      </div>
    </div>
  )
}

export default Explore
