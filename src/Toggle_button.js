import React, { useState } from "react";

const Toggle_button = ({ show, setshow }) => {
  return <div onClick={() => setshow(!show)}>Toggle_button</div>;
};

export default Toggle_button;
