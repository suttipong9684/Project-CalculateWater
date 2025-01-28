import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

type ThemeProps = {
  setTheme: React.Dispatch<React.SetStateAction<string>>,
  theme:string
};

export const Theme = ({theme, setTheme }: ThemeProps) => {
  return (
    <>
      <div
        className="theme"
        onClick={() =>
          setTheme((theme) => (theme === "light" ? "dark" : "light"))
        }
      >
        {theme === "light" ? <FaMoon /> : <MdSunny />}
        <span>{theme === "light" ? "dark" : "light"}</span>
      </div>
    </>
  );
};
