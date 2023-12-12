import grazed from "../../assets/icons/grazed.svg";

const CoffeCards = () => {
  return (
    <div className="w-[393px] h-[471px] rounded-3xl shadow-xl hover:shadow-2xl  px-[30px] pt-[41px] pb-[35px]">
      <div className="relative">
        <img
          className="absolute top-[-118px] left-[-30px]"
          src={grazed}
          alt=""
        />
        <div className="ml-[172px] mb-[87px]">
          <p className="mb-2 text-[#64646A] font-[Medium] text-[20px] leading-[140%]">
            #index Name
          </p>
          <h3 className="text-[40px] font-[Semibold] leading-[110%] text-[#1B1B1D]">
            Double Espresso
          </h3>
        </div>
        <p className="text-[#64646A] leading-[140%] text-[20px] mb-10 font-[Regular]">
          Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do
          amet sint. Velit officia consequat duis.
        </p>
        <div className="flex items-center justify-between">
          <p className="text-[30px] font-[Medium] leading-[93%] text-[#1B1B1D]">
            $price
          </p>
          <button className="rounded-[126px] font-[Medium] bg-[#1B1B1D] px-[30px] py-[15px] text-white uppercase text-[18px]">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeCards;
