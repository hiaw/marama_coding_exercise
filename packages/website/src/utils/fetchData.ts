import { Data } from "@marama-exercise/core/data";

export const getData = async () => {
  const url = import.meta.env.VITE_API_URL;

  const response = await fetch(`${url}data`);

  if (response && response.status == 200) {
    return response.json();
  } else {
    return await getOfflineData();
  }
};

const getOfflineData = async () => {
  return (await Data.fetchData()) as Data.FolderType[];
};
