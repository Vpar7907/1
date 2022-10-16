function ItemTime({ children }) {
  return (
    <div className="w-[63px] h-[24px] flex justify-center items-center rounded-[11px] mr-[7px] mt-2 bg-[#D9E8FF] text-center cursor-pointer hover:bg-[#6BA6FF] hover:text-white hover:shadow-sm desctop:bg-[#C5DCFF] desktop:w-[78px] desktop:h-[28px] hover:shadow-[#a1a1a1]">
      {children}
    </div>
  );
}

export default ItemTime;
