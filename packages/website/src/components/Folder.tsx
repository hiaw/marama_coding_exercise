import { FolderType } from "../types/types";

export const Folder = ({ data }: { data: FolderType[] }) => {
  return data.map((row) => (
    <>
      <div key={row.id}>{row.name}</div>
      {row.children ? <Folder data={row.children} /> : null}
    </>
  ));
};
