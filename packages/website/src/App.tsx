import { useEffect, useState } from "react";
import { fetchData } from "./utils/data";
import { Folder } from "./components/Folder";
import { FolderType } from "./types/types";

function App() {
  const [data, setData] = useState<FolderType[]>([]);

  useEffect(() => {
    const getData = async () => {
      const newData = (await fetchData()) as FolderType[];
      setData(newData);
    };
    getData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl pb-2">Daniel Chong's Marama Coding Exercise</h1>
      <Folder data={data} />
    </div>
  );
}

export default App;
