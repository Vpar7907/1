function ItemTitle({ children }) {
  return (
    <div className="mx-[12px] my-[10px] fontOpen text-[#404040] font-semibold leading-[22px] text-[14px] desktop:text-[26px] desktop:leading-[34px] desktop:font-normal desktop:text-black">
      {children}
    </div>
  );
}

export default ItemTitle;
