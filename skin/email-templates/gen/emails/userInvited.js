import React from "react";
import { resolve } from "path";

import Email from "../../src/components/Email";
import HTML, { subject, previewText, text } from "../../src/emails/UserInvited";
import renderComponentToFile from "../renderComponentToFile";

const distPath = "userInvited";

const renderToFile = () =>
  renderComponentToFile(
    subject,
    <Email subject={subject} previewText={previewText}>
      <HTML />
    </Email>,
    text,
    resolve(__dirname, `../../../templates/mail/${distPath}`)
  );

export default renderToFile;
