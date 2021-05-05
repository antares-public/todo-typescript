import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Information</h1>
      <p>At vero eos et accusamus et iusto odio dignissimos ducimus.</p>
      <button className="btn" onClick={() => history.push("/todo-typescript")}>
        Back
      </button>
    </>
  );
};
