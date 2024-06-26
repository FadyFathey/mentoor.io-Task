import { useTranslation } from "react-i18next";
import headerIcon from "../../assets/corepack.svg";

const Header = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="h-[200px] bg-stone-950 flex justify-center items-center gap-[12px]">
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
      <div className="ml-[300px]">
        <button
          className="w-[103px] h-[52px] p-4 bg-cyan-700 rounded-lg text-zinc-100 text-sm font-bold leading-tight"
          type="button"
          onClick={toggleLanguage}
        >
          {i18n.language === "en" ? "Ar" : "En"}
        </button>
      </div>
    </div>
  );
};

export default Header;
