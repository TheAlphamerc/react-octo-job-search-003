import "../App.css";

import Data from"../data/JobData.js"
import JobCard from './JobCard.js';

function Body(){
    
    return (
        <div className=" grid grid-cols-1 sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  gap-4 mt-20 px-9 md:px-9 sm:px-20 ">
           {Data.map(job => <JobCard key={job.id} job={job}/>)}
        </div>
    );
}
export default Body ;