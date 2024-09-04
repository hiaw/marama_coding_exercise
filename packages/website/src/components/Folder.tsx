import { ChevronDownIcon, StopCircleIcon } from "@heroicons/react/20/solid";
import { Data } from "@marama-exercise/core/data";

export const Folder = ({ data }: { data: Data.FolderType[] }) => {
  return data.map((row) => {
    const { name, id, children } = row;

    const childLevel = children ? "pl-6" : "";

    const icon = children ? (
      <ChevronDownIcon className="size-6" />
    ) : (
      <StopCircleIcon className="size-2" />
    );

    return (
      <div key={`${name}-${id}`}>
        <div className="flex flex-row items-center gap-2">
          <div className="size-6 flex items-center justify-center">{icon}</div>
          <p>{name}</p>
        </div>
        <div className={childLevel}>
          {children ? <Folder data={children} /> : null}
        </div>
      </div>
    );
  });
};
