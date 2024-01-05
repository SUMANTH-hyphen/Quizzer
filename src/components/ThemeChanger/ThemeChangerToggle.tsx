import { FC } from "react";
import styles from "./styles.module.css";

const defaultOptions = {
  invertedIconLogic: false
};

const ToggleButton:FC<{isDark: boolean, onChangeEvent(): void, invertedIconLogic?: boolean }> = ({isDark, onChangeEvent, invertedIconLogic = defaultOptions.invertedIconLogic}) => (
  <label
    className={styles.container}
    title={isDark ? "Activate light mode" : "Activate dark mode"}
    aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
  >
    <input
      type="checkbox"
      defaultChecked={invertedIconLogic ? !isDark : isDark}
      onChange={onChangeEvent}
    />
    <div />
  </label>
);

export default ToggleButton;
