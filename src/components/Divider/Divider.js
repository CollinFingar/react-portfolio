import React from "react";
import { DividerWrapper, Shapes, Shape } from "./Divider.style";
import { divider1, divider2, divider3 } from "./config";

export const generateShapes = (config) => {
  let arr = [];
  let i = 0;
  for (const c in config) {
    const item = config[c];
    arr.push(<Shape key={i++} {...item} />);
  }
  return arr;
};

const Divider = ({ type = 1 }) => {
  let config = divider1;
  switch (type) {
    case 2:
      config = divider2;
      break;
    case 3:
      config = divider3;
      break;
  }
  const shapeArr = generateShapes(config);
  return (
    <DividerWrapper>
      <Shapes>{shapeArr}</Shapes>
    </DividerWrapper>
  );
};

export default Divider;
