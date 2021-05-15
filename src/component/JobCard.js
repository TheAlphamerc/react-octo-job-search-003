import "../App.css";

import { AiFillEye } from "react-icons/ai";

var colors = [
  "bg-red-300",
  "bg-yellow-300",
  "bg-green-300",
  "bg-blue-400",
  "bg-indigo-400",
  "bg-purple-400",
  "bg-pink-400",
];
function JobCard(props) {
  var col = colors[Math.floor((Math.random() * 7))];
  var job = props.job;
  return (
    <div className="shadow-sm grid-span-1 bg-white dark:bg-cardColor rounded-md  pb-7 static my-4 font-sans ">
      <div className="relative  -inset-y-6 place-content-end flex justify-between items-end">
        <div className={"h-14 w-14 " + col + " rounded-2xl ml-5 self-start place-content-center flex align-middle text-3xl text-white font-bold"}>
          <p className="self-center">{job.company.charAt(0)}</p>
        </div>
        <div className="uppercase text-primary font-semibold relative text-sm top-0 right-0 h-8 w-30 hover:bg-gray-100 dark:hover:bg-bcakground cursor-pointer px-6 py-9">
          <a src="#"><span><AiFillEye className="inline text-xl"/></span> View Detail</a>
        </div>
      </div>

      <div className="px-5">
        <div className="block text-subtitle text-base font-normal ">
          <p>
            {new Date(job.created_at).toLocaleDateString()} · {job.type}
          </p>
        </div>
        <div className="text-xl dark:text-white font-bold  py-5">{job.title}</div>
        <div className="text-caption dark:text-gray-300 text-base">{job.company}</div>
        <div className="text-primary font-bold text-sm pt-7 place-content-end place-items-end flex">
          {job.location}
        </div>
      </div>
    </div>
  );
}
export default JobCard;
