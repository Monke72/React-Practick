import { string } from "prop-types";
import React, { FC, useState } from "react";

interface IData {
  name: string;
  phone: string;
  postCode: number;
}

const AppTs: FC = () => {
  const [data, setData] = useState<IData>({} as IData);
  return <></>;
};

export default AppTs;
