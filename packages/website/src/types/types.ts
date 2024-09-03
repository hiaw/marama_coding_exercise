export type FolderType = {
  id: string;
  name: string;
  children?: FolderType[];
};
