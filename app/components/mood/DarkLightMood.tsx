"use client";
import { useTheme } from "next-themes";
const DarkLightMood = () => {
  const { theme, setTheme } = useTheme();
  const moodToggler = () => {
    setTheme(() => (theme === "dark" ? "light" : "dark"));
    console.log(theme);
  };
  return (
    <div>
      <button type="button" onClick={moodToggler}>
        moodToggle
      </button>
    </div>
  );
};

export default DarkLightMood;
