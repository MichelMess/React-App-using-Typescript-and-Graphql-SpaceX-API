import Navbar from "./Navbar";
const Home = ({ data, nextData }: any) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-x-6 md:space-y-0 justify-center h-full">
        <div className="flex items-center space-x-1 md:space-x-2">
          <span className="text-sm md:text-xl font-bold font-sans text-black">
            Last Rocket Launced Date:
          </span>
          <span>
            {data[0] ? new Date(data[0]?.launch_date_utc).toDateString() : null}
          </span>
        </div>
        <div className="flex items-center space-x-1 md:space-x-2">
          <span className="text-sm md:text-xl font-bold font-sans text-black">
            Next Rocket Launced Date
          </span>
          <span>
            {nextData
              ? new Date(nextData?.launch_date_utc).toDateString()
              : null}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
