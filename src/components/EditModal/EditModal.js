import React from "react";
import "./EditModal.css";

const EditModal = (props) => {
  console.log(props);
  return (
    <div className="main-modal">
      <div className="inner-modal">
        <div className="close">
          <button>&times;</button>
        </div>
        <input type="text" className="inp-edit"></input>
        <button>save</button>
      </div>
    </div>
  );
};

export default EditModal;
