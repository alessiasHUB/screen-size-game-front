import React from "react";

export interface IRulesProps {}

const Rules: React.FunctionComponent<IRulesProps> = (props) => {
  return (
    <main className="content">
      <div className="rules">
        <p>Rules: </p>
      </div>
    </main>
  );
};

export default Rules;
