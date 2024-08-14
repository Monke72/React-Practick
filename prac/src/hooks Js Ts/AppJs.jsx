import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

function AppJs() {
  const [name, setName] = useState("");
  const age = 22;

  const valueMemo = useMemo(
    () => ({
      name,
      age,
    }),
    [name]
  );
  console.log(valueMemo);

  // при изменение name будет передаваться age

  const getName = useCallback(() => {
    console.log(name);
  }, [name]);
  //кешируют ссылку на функцию , изменяется при изменинии name

  const inputref = useRef(null);

  useLayoutEffect(() => {
    console.log(inputref.current.className);
  });
  useEffect(() => {
    inputref.current.value = "vasya";
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("500");
  //   }, 50000);
  //   return () => clearInterval(interval);
  // }, []);
  {
    /* 2 аргументом передаем при каких обстоятельстах хук будет срабатывать , при загрузке страницы автоматически срабатывает 1 раз */
  }
  return (
    <>
      <div>TS version</div>;
      <input
        className="oo"
        ref={inputref}
        defaultValue="Sonya"
        type="text"
        placeholder="Enter Name"
      />
    </>
  );
}

export default AppJs;
