import React from "react";

export interface IRulesProps {}

const Rules: React.FunctionComponent<IRulesProps> = (props) => {
  return (
    <main className="content">
      <div className="rules">
        <h2>Rules</h2>
        <p>
          The aim of the game is to resize your window to hit the target
          measurements. One hit equals one point. You have 30 seconds to get as
          many points as possible.
        </p>
      </div>
    </main>
  );
};

export default Rules;
