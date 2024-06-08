import headerIcon from "../../assets/corepack.svg";

const Header = () => {
  return (
    <div className="  h-[200px] bg-stone-950 flex justify-center items-center gap-[12px]">
      <div>
        <img className="w-[22px]" src={headerIcon} alt="headerIcon" />
      </div>
      <div>
        <span className="text-blue-400 text-[40px] font-black font-['Inter']">
          to
        </span>
        <span className="text-indigo-500 text-[40px] font-black font-['Inter']">
          do
        </span>
      </div>
    </div>
  );
};

export default Header;
