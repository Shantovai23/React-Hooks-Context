import React, { useState } from "react";

const InputHook = (val) => {
  const [state, setState] = useState(val);

  const InputHandle = (e) => {
    e.preventDefault();
    setState(e.target.value);
  };
  const clearName=()=>{
      setState("")
  }

  return [state,InputHandle,clearName]
};

export default InputHook;
