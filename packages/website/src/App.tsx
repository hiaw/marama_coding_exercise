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

  return <Folder data={data} />;
}

export default App;
