import CheckboxIcon from "components/ui/InteractiveCheckboxIcon";
import { pages } from "db/pages";
import { useState } from "react";

const Form = () => {
  const [selectedPages, setSelectedPages] = useState<
    number[] | "all"
  >([]);

  const handleCheckboxChange = (pageId: number) => {
    if (selectedPages === "all") {
      setSelectedPages([pageId]);
    } else if (selectedPages.includes(pageId)) {
      setSelectedPages(selectedPages.filter((id) => id !== pageId));
    } else {
      setSelectedPages([...selectedPages, pageId]);
    }
  };
  return (
    <div className="p-[9px] shadow-md max-w-[370px] w-full bg-white rounded-[8px] flex flex-col justify-between gap-[10px]">
      <div className="p-[12px] flex items-center justify-between gap-1">
        <p className="text-[14px] leading-[130%] ">All pages</p>
        <button
          className="cursor-pointer"
          onClick={() =>
            setSelectedPages((prev) => (prev === "all" ? [] : "all"))
          }
        >
          <CheckboxIcon isSelected={selectedPages === "all"} />
        </button>
      </div>

      <hr className="text-[#CDCDCD]" />
      {pages.map((page) => {
        const isSelected =
          selectedPages === "all" || selectedPages.includes(page.id);
        return (
          <div
            key={page.id}
            className="p-[12px] flex items-center justify-between gap-1"
          >
            <p className="text-[14px] leading-[130%] ">{page.name}</p>
            <button
              className="cursor-pointer"
              onClick={() => handleCheckboxChange(page.id)}
            >
              <CheckboxIcon isSelected={isSelected} />
            </button>
          </div>
        );
      })}

      <hr className="text-[#CDCDCD]" />

      <button>Done</button>
    </div>
  );
};

export default Form;
