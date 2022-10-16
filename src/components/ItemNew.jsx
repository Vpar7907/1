function ItemNew({ children }) {
  return (
    <div className="absolute mt-[61px] fontOpen flex justify-center items-center text-[#3E3E3E] font-semibold text-[12px] leading-[20px] min-w-[99px] h-[35px] bg-[#FED74B] desktop:h-[45px] desktop:text-[16px] ">
      <p className=" desktop:px-[33px] desktop:whitespace-nowrap">{children}</p>
    </div>
  );
}

export default ItemNew;
