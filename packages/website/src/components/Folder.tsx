import { FolderType } from "../types/types";

const folderIndent = "pl-2";

export const Folder = ({ data }: { data: FolderType[] }) => {
  return data.map((row) => {
    const topLevel = row.children ? folderIndent : "";
    const folderNameStyle = row.children ? "text-gray-700 pl-2" : "";
    return (
      <div key={row.id} className={topLevel}>
        <div className={folderNameStyle}>{row.name}</div>
        {row.children ? <Folder data={row.children} /> : null}
      </div>
    );
  });
};
