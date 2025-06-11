import React from "react";
import "./Question.css";
import Button from "../../atoms/Button";

function Question() {
  return (
    <div className="question">
      <div className="container">
        <h2 className="question-name">BIZGA SAVOLINGIZ BORMI?</h2>
        <Button
          style={{
            background:
              "linear-gradient(90deg, rgb(128, 39, 222), rgb(140, 25, 229))",
            width: "250px",
            height: "50px",
            cursor: "pointer",
          }}
          text="Biz bilan bog'laning"
        />
      </div>
    </div>
  );
}
export default Question;
