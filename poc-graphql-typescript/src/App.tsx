import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NextLaunch from "./components/NextLaunch";
import PastLaunch from "./components/PastLaunch";
import SpaceMission from "./grapgql";

function App() {
  const [data, setData] = useState<any[]>([]);
  const [nextData, setNextData] = useState<any>();

  useEffect(() => {
    loadSpaceMission();
    loadNextSpaceMission();
  }, []);

  const loadSpaceMission = async () => {
    const spaceMission = await SpaceMission.getSpaceMission(1);
    setData(spaceMission);
  };

  const loadNextSpaceMission = async () => {
    const nextSpaceMission = await SpaceMission.getNextSpaceMission();
    setNextData(nextSpaceMission);
  };
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home data={data} nextData={nextData} />} />
        <Route
          path="/nextLaunch"
          element={<NextLaunch nextData={nextData} />}
        />
        <Route path="/pastLaunch" element={<PastLaunch data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
