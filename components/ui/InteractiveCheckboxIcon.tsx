import TickMarkIcon from "icons/TickMarkIcon";

const InteractiveCheckboxIcon = ({
  isSelected,
}: {
  isSelected?: boolean;
}) => {
  return (
    <span
      className={`w-[23px] h-[23px] shrink-0 border-1 flex items-center justify-center rounded-[6px] group/checkbox ${isSelected ? "bg-brand-2 border-transparent hover:bg-brand-2/70" : "bg-transparent border-[#CDCDCD] hover:outline-3 hover:outline-[#eaf0fe]"}`}
    >
      <TickMarkIcon
        className={` ${isSelected ? "opacity-100 stroke-white" : "opacity-0 stroke-[#878787]"} group-hover/checkbox:opacity-100`}
      />
    </span>
  );
};

export default InteractiveCheckboxIcon;
