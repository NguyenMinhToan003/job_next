"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext({
  accessToken: "",
  setAccessToken: (token: string) => {},
});
export const useAppProvider = () => {
  return useContext(AppContext);
};

export function AppProvider({
  children,
  initialAccessToken,
}: {
  children: React.ReactNode;
  initialAccessToken: string;
}) {
  const [accessToken, setAccessToken] = useState<string>(initialAccessToken);
  return (
    <AppContext.Provider
      value={{
        accessToken,
        setAccessToken,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
