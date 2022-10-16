import clock from "../images/clock.png";
import ItemOpt from "./ItemOpt";
import ItemTime from "./ItemTime";
import ItemTitle from "./ItemTitle";
import ItemNew from "./ItemNew";
import ItemNew2 from "./ItemNew2";
import ItemFooter from "./ItemFooter";
import Item2Footer from "./Item2Footer";
import { useState } from "react";

let count = 100;

function gen() {
  count++;
  return count;
}

function Item({ post }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        border: "0.3px solid #828282",
      }}
      className="mt-[27px] mb-[4px] overflow-hidden w-[341px] flex flex-col rounded-[16px] desktop:w-[1070px] desktop:h-[370px] desktop:flex-row desktop:border-[0.5px] desktop:mt-[60px] desktop:mb-[7px]"
    >
      {post.new === 1 ? <ItemNew>{post.textNew}</ItemNew> : null}
      {post.new === 2 ? <ItemNew2>{post.textNew}</ItemNew2> : null}
      <img src={post.image} alt="photo" className="desktop:w-[40%]" />
      <div className="flex mt-[16px] ml-[12px] items-center text-[#9E9E9E] desktop:hidden">
        <img src={clock} alt="time" className="w-[16px] h-[16px] mr-[9px] " />
        <p className="fontOpen text-[12px] font-normal leading-[20px]">
          {post.time}
        </p>
      </div>

      <div className="desktop:w-[60%] desktop:pl-[8px]">
        <ItemTitle>{post.title}</ItemTitle>
        <div className=" mt-[16px] ml-[12px] items-center text-[#9E9E9E] hidden desktop:flex">
          <img src={clock} alt="time" className="w-[16px] h-[16px] mr-[9px] " />
          <p className="fontOpen text-[12px] font-normal leading-[20px]">
            {post.time}
          </p>
        </div>
        <div className="flex flex-col">
          {post.options.map((item, index) => {
            if (index !== post.options.length - 1) {
              return <ItemOpt key={gen()}>{item.text}</ItemOpt>;
            }
            return (
              <div key={gen()} className="desktop:flex desktop:items-center">
                <ItemOpt key={gen()}>{item.text}</ItemOpt>
                <div
                  key={gen()}
                  className="flex flex-wrap justify-start items-center mt-[20px] ml-[30px] fontOpen leading-[20px] text-[14px] text-[#343434] desktop:ml-[12px] desktop:mt-[14px] desktop:text-[16px]"
                >
                  {post.times.map((element, idx) => {
                    if (post.times.length <= 4) {
                      return <ItemTime key={gen()}>{element.time}</ItemTime>;
                    } else {
                      if (!open) {
                        while (idx < 3) {
                          return (
                            <ItemTime key={gen()}>{element.time}</ItemTime>
                          );
                        }
                      } else {
                        return <ItemTime key={gen()}>{element.time}</ItemTime>;
                      }
                    }
                  })}
                  {post.times.length > 4 && !open ? (
                    <ItemTime>
                      <p
                        className="w-full h-full flex justify-center items-center"
                        onClick={(event) => {
                          event.preventDefault();
                          console.log("hi");
                          setOpen(true);
                        }}
                      >
                        ещё...
                      </p>
                    </ItemTime>
                  ) : post.times.length > 4 && open ? (
                    <ItemTime>
                      <p
                        className="w-full h-full flex justify-center items-center"
                        onClick={(event) => {
                          event.preventDefault();
                          setOpen(false);
                        }}
                      >
                        скрыть
                      </p>
                    </ItemTime>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
        {post.footerType === 1 ? (
          <ItemFooter price={post.price} priceOnWarf={post.priceOnWarf} />
        ) : null}
        {post.footerType === 2 ? (
          <Item2Footer price={post.price} priceOnWarf={post.priceOnWarf} />
        ) : null}
      </div>
    </div>
  );
}

export default Item;
