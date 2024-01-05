import "./styles.css";
import { useState } from "react";
import ToggleButton from "./ThemeChangerToggle";

const ThemeChanger = () => {
    const [isDark, setDark] = useState(false);
    return (
        <ToggleButton
            isDark={isDark}
            invertedIconLogic
            onChangeEvent={() => setDark((prev) => !prev)}
        />
    );
}

export default ThemeChanger