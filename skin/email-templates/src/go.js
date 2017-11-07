import React from "react";

export const Value = pipeline => `{{${pipeline}}}`;

export const ValueC = ({ pipeline }) => <span>{`{{${pipeline}}}`}</span>;

export const If = ({ pipeline, children }) => (
  <div>
    {`{{if ${pipeline}}}`}
    {children}
    {"{{end}}"}
  </div>
);

export const Range = ({ pipeline, children }) => (
  <div>
    {`{{range ${pipeline}}}`}
    {children}
    {"{{end}}"}
  </div>
);
