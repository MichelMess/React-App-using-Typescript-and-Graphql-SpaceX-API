import React from "react";
import Navbar from "./Navbar";

const NextLaunch = ({ nextData }: any) => {
  return (
    <div className="flex flex-col h-screen justify-center">
      <Navbar />

      <div className="flex md:items-center md:p-0 p-2 flex-col justify-center h-full">
        <div className="flex items-center space-x-1 md:space-x-2">
          <span className="text-base md:text-xl font-bold font-sans text-black">
            Mission:
          </span>
          <span>{nextData ? nextData.mission_name : null}</span>
        </div>
        <div className="flex items-center space-x-1 md:space-x-2">
          <span className="text-base md:text-xl font-bold font-sans text-black">
            Next Launch Date:
          </span>
          <span>
            {nextData
              ? new Date(nextData?.launch_date_utc).toDateString()
              : null}
          </span>
        </div>
        <div className="flex space-x-1 md:space-x-2">
          <span className="text-base md:text-xl whitespace-nowrap font-bold font-sans text-black">
            Launch Site:
          </span>
          <span>{nextData ? nextData.launch_site.site_name_long : null}</span>
        </div>
      </div>
    </div>
  );
};

export default NextLaunch;
