import React from "react";
import { MdDelete } from "react-icons/md";
function Delete({ remove }) {
  return (
    <div>
      <button id="delete" onClick={remove}>
        <MdDelete width={50}/>
      </button>
    </div>
  );
}

export default Delete;
