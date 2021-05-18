import "../App.css";

import { useEffect, useState } from 'react'

import Data from"../data/JobData.js"
import JobCard from './JobCard.js';

function Body(){
    const [feed, setFeed] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
       // Create async function to fetch Reactjs posts from Reddit:
    async function fetchedJobsData() {
        setLoading(true)
        // Make a request to fetch Reactjs posts from Reddit:
        const response = await fetch('https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json')
  
        // Check if data are available (response code is 200-299):
        if (response.ok) {
          // Translate received response (promise) to JSON:
          const jobJson = await response.json()
  
          // Extract title, author and post id:
          const posts = jobJson.map(post => {
            return {
              title: post.title,
              author: post.author,
              id: post.id
            }
          })
  
          // Save posts to feed state:
          setFeed(posts)
          setLoading(false)
        }
      }
  
      // Invoke the fetchedJobsData function:
      fetchedJobsData()
      }, [])
    return (
       
        <div className=" grid grid-cols-1 sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-20 px-9 md:px-9 sm:px-20 ">

            {isLoading ? [1,2,3,4,5,6,7,8,9,10,11,12].map(val => {
                return <JobViewSkeleton/>
            }) :  feed.map(job => {
               return Data.map(job => <JobCard key={job.id} job={job}/>)
          })}
           {/* Mock Jobs Data */}
           {/* {Data.map(job => <JobCard key={job.id} job={job}/>)} */}
          

        </div>
    );
}

 function JobViewSkeleton() {
    return (
      <div className='p-8 pt-0 mx-auto bg-white   my-4  dark:bg-cardColor rounded-md shadow animate-pulse dark:bg-very-dark-blue w-76  w-full '>
        <div
          className={
            'text-white font-b  absolute grid w-12 h-12 p-2 transform -translate-y-1/2 place-items-center rounded-2xl bg-gray-400'
          }
        ></div>
        <div className='flex items-center pt-12 text-base leading-5 text-dark-grey'>
          <p className='w-6/12 h-4 bg-gray-400 rounded'></p>
        </div>
        <div className='mt-3'>
          <h2 className='w-8/12 h-4 text-lg  leading-6 bg-gray-400 rounded text-very-dark-blue dark:text-white'></h2>
        </div>
        <div>
          <p className='w-5/12 h-4 mt-3 text-base font-normal leading-5 bg-gray-400 rounded text-dark-grey'></p>
        </div>
        <div>
          <p className='w-3/12 h-4 mt-10 text-sm  bg-gray-400 rounded text-violet'></p>
        </div>
      </div>
    )
  }
export default Body ;