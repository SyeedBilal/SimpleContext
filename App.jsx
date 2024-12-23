import { createContext, useState } from "react";
import ContainerWrapper from "./ContainerWrapper";

// Create the context
const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ name: "syed", age: 21 });
  const [theme, setTheme] = useState("blue");

  return (
    <UserContext.Provider value={{ ...user, theme, setTheme }}>
      <ContainerWrapper />
    </UserContext.Provider>
  );
}

export default App;
export { UserContext };
