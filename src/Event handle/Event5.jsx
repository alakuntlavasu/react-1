import React from "react";

const Event5 = () => {
  return (
    <button value="Hello!" onClick={(e) => alert(e.target.value)}>
      Say Hello
    </button>
  );
};

export default Event5;