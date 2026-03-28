import React from "react";
import { useParams } from "react-router";

const Info = () => {
  const { id } = useParams();
  return <div>Info id:{id}</div>;
};

export default Info;
