import logo from "../assets/tasktracker icon.png"

export const Header = ({theme, setTheme}) => {
  return (
    <header>
        <span className="logo">
            <img src={logo} alt="" />
            <span>TaskTracker</span>
        </span>
        <span className="themeSelector">
                <span className={theme === "light" ? "light activeTheme" : "light"} onClick={() => setTheme("light")}></span>
                <span className={theme === "medium" ? "medium activeTheme" : "medium"} onClick={() => setTheme("medium")}></span>
                <span className={theme === "gradientOne" ? "gradientOne activeTheme" : "gradientOne"} onClick={() => setTheme("gradientOne")}></span>
                <span className={theme === "gradientTwo" ? "gradientTwo activeTheme" : "gradientTwo"} onClick={() => setTheme("gradientTwo")}></span>
                <span className={theme === "gradientThree" ? "gradientThree activeTheme" : "gradientThree"} onClick={() => setTheme("gradientThree")}></span>
        </span>
    </header>
  )
}

