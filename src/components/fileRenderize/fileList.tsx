import type { FileList } from "../../pages/types/[type]/filesTypes.astro";
import { DeleteNote } from "../../svg/DeleteFile.svg";
import { EditNote } from "../../svg/EditNote.svg";
import { FileIcon } from "../../svg/FileIcon";

export function FileMap({ files }: { files: FileList[] }) {
  return (
    <>
      {files.map((item, idx) => {
        return (
          <li key={idx + 1} className="flex flex-col z-0 shrink justify-around gap-3 lg:h-40 lg:w-[30%] rounded-lg border border-[#5C5C5C] shadow-sm py-1 px-4 bg-[#1B1B1B]">
            <div className="rounded-full relative shadow-md top-3 bg-[#2D2D2D] border border-[#5C5C5C] lg:h-10 lg:w-10 flex items-center justify-center">
              <FileIcon className="w-full" />
            </div>
            <a href={`/docs/${item.id}/files`} key={item.id}>
              <div className="truncate w-full text-cyan-300 font-medium lg:text-lg">{item.name}</div>
            </a>
            <div className="flex items-center gap-2 self-end align-bottom">
              <div>
                <EditNote className="cursor-pointer"/>
              </div>
              <div>
                <DeleteNote className="fill-red-400 cursor-pointer"/>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
}
