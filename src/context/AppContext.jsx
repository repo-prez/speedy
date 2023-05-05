import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [filterHome, setFilterHome] = useState(false);


  return (
    <AppContext.Provider value={{
      filterHome,
      setFilterHome,
    }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };