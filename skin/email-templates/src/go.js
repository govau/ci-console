import React from "react";

export const Value = pipeline => {
  return `{{${pipeline}}}`;
};

export const ValueC = ({ pipeline }) => {
  return <span>{`{{${pipeline}}}`}</span>;
};

export const If = ({ pipeline, children }) => {
  return (
    <div>
      {`{{if ${pipeline}}}`}
      {children}
      {"{{end}}"}
    </div>
  );
};

export const Range = ({ pipeline, children }) => {
  return (
    <div>
      {`{{range ${pipeline}}}`}
      {children}
      {"{{end}}"}
    </div>
  );
};
