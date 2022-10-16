import rb from "../images/rb.png";
import rubleDT from "../images/rubleDT.png";
import ruble from "../images/ruble.png";

function ItemFooter({ price, priceOnWarf }) {
  return (
    <div className="fontOpen flex justify-between items-center mt-[35px] mb-[19px] mx-[19px] desktop:justify-start">
      <div>
        <div className="flex items-baseline">
          <p className="text-[30px] leading-[20px] desktop:text-[36px]">
            {price}
          </p>
          <img src={ruble} alt="rouble" className="desktop:hidden" />
          <img
            src={rubleDT}
            alt="rouble"
            className="desktop:inline hidden ml-[5px]"
          />
        </div>
        {priceOnWarf ? (
          <p className="text-[10px] leading-3 mt-[8px] desktop:text-[14px]">
            {priceOnWarf}
            <img
              src={rb}
              alt="rub"
              className="hidden desktop:inline w-[11px] h-[12px]"
            />
            <span className="desktop:hidden">p</span> на причале
          </p>
        ) : null}
      </div>
      <a
        href="/"
        style={{
          border: "0.5px solid #CBA500",
        }}
        className="font-semibold text-[14px] text-[#404040] leading-[20px] flex justify-center items-center w-[165px] h-[44px] bg-[#FED74B] rounded-[20px] desktop:ml-[8px] desktop:bg-[#FFD83C] desktop:text-[18px] desktop:font-normal desktop:text-[#292929]"
      >
        Подробнее
      </a>
    </div>
  );
}

export default ItemFooter;
