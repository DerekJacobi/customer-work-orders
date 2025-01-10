import React from 'react';
import { useParams } from "react-router";

const Boatyard = () => {
  let { boatyard } = useParams();

  return <h1>Boatyard: {boatyard} </h1>
}

export default Boatyard;