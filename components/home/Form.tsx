import CheckboxIcon from "components/ui/InteractiveCheckboxIcon";
import { pages } from "db/pages";
import { useState } from "react";

type TSelectedpages = number[] | "all";
type TFormState = {
  message: string;
  type: "success" | "error";
};

const Form = () => {
  const [selectedPages, setSelectedPages] = useState<TSelectedpages>([]);

  const [formState, setFormState] = useState<TFormState | undefined>();

  const handleCheckboxChange = (pageId: number) => {
    setFormState(undefined);
    if (selectedPages === "all") {
      setSelectedPages([pageId]);
    } else if (selectedPages.includes(pageId)) {
      setSelectedPages(selectedPages.filter((id) => id !== pageId));
    } else {
      setSelectedPages([...selectedPages, pageId]);
    }
  };

  const handeFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedPages !== "all" && selectedPages.length === 0) {
      setFormState({
        message: "Please select at least one page",
        type: "error",
      });

      return;
    }

    setFormState({
      message: "Pages selected successfully",
      type: "success",
    });
  };
  return (
    <form
      onSubmit={handeFormSubmit}
      className="p-[9px] shadow-md max-w-[370px] w-full bg-white rounded-[8px] flex flex-col justify-between gap-[10px]"
    >
      <div className="p-[12px] flex items-center justify-between gap-1">
        <p className="text-[14px] leading-[130%] text-brand-3">All pages</p>
        <button
          className="cursor-pointer"
          type="button"
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
            <p className="text-[14px] leading-[130%] text-brand-3">
              {page.name}
            </p>
            <button
              className="cursor-pointer"
              type="button"
              onClick={() => handleCheckboxChange(page.id)}
            >
              <CheckboxIcon isSelected={isSelected} />
            </button>
          </div>
        );
      })}

      <hr className="text-[#CDCDCD]" />

      {formState && (
        <p
          className={`text-[14px] leading-[130%] ${formState.type === "error" ? "text-red-500" : "text-green-500"}`}
        >
          {formState.message}
        </p>
      )}

      <button className="text-[14px] my-[12px] leading-[130%] bg-brand-1 text-brand-3 p-[12px] cursor-pointer rounded-[6px] hover:bg-brand-1/70 active:bg-brand-1">
        Done
      </button>
    </form>
  );
};

export default Form;
