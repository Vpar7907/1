import check from "../images/check.png";

function ItemOpt({ children }) {
  return (
    <div className="flex items-start ml-[13px] content-center mt-[13px] fontOpen text-[14px] text-[#4B4B4B] desktop:text-[#343434] desktop:mt-[10px]">
      <img
        src={check}
        alt="mark"
        className="mt-[4px] w-[16px] h-[16px]  mr-[20px]  "
      />
      <p>{children}</p>
    </div>
  );
}

export default ItemOpt;
