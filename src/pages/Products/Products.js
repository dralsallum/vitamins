import React from "react";
import { homeObjFour, homeObjThree, homeObjTwo } from "./Data";
import { InfoSection, Pricing } from "../../components";

const Products = () => {
  return (
    <>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Products;
