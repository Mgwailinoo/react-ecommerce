import React from "react";
import { Paper } from "@mui/material";
const Hero = ({ data }) => {
  return (
    <Paper>
      <img src={data.img} alt="" style={{ width: "90vw", height: "75vh" }} />
    </Paper>
  );
};

export default Hero;
