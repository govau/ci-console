import React from "react";
import styled from "styled-components";

const Table = styled(({ ...rest }) => <table {...rest} />)`
  mso-table-lspace: 0pt;
  mso-table-rspace: 0pt;
`;

export const Td = ({ ...rest }) => <td {...rest} />;

export default Table;
