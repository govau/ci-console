import React from "react";
import { resolve } from "path";

import Email from "../../src/components/Email";
import HTML, {
  subject,
  previewText,
  text
} from "../../src/emails/UserAssociatedWithSpace";
import renderComponentToFile from "../renderComponentToFile";

const distPath = "userAssociatedWithSpace";

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
