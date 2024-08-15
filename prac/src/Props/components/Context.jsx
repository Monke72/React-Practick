import React, { createContext, useContext, useEffect, useState } from "react";

const ContextAll = createContext({
  spin: [],
  data: [],
});

export function ContextProvider({ children }) {
  const [spin, setSpin] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(async function preload() {
      setSpin(false);
      const response = await fetch("https://fakestoreapi.com/products").then(
        (response) => response.json()
      );
      setData(response);
    }, 2000);
  }, []);

  return (
    <>
      <ContextAll.Provider value={{ spin, data }}>
        {children}
      </ContextAll.Provider>
    </>
  );
}

export default ContextAll;

export function useContextA() {
  return useContext(ContextAll);
}
