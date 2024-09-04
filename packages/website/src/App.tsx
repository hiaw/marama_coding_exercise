import { useEffect, useState } from "react";
import { Data } from "@marama-exercise/core/data";

import { Folder } from "./components/Folder";
import { getData } from "./utils/fetchData";

function App() {
  const [data, setData] = useState<Data.FolderType[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const newData = await getData();
      if (newData) {
        setData(newData);
      }
    };
    fetch();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl pb-2">Daniel Chong's Marama Coding Exercise</h1>
      <Folder data={data} />
    </div>
  );
}

export default App;
