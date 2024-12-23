import styles from "./items.module.css";
import { UserContext } from "./App";
import { useContext } from "react";

const ContainerWrapper = () => {
  // Consuming user context
  const { name, age, theme, setTheme } = useContext(UserContext);

  const handleOnClick = () => {
    if (theme === "blue") {
      setTheme("grey");
    } else if (theme === "grey") {
      setTheme("blue");
    }
  };

  return (
    <div
      className={`${styles.container}`}
      style={{
        backgroundColor: theme === "blue" ? "red" : "palegoldenrod",
      }}
    >
      <h1>
        This heading will be passed by Context API: {name} and age is {age}
      </h1>
      <button onClick={handleOnClick}>Toggle Theme</button>
    </div>
  );
};

export default ContainerWrapper;
