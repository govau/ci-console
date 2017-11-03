import React from "react";

import { Value } from "../go";

export const subject = "Invitation to join cloud.gov.au";

export const previewText = `TODO`;

const HTML = () => {
  return <div>TODO: {Value(".URL")}</div>;
};

export default HTML;

export const text = `You have been invited to join cloud.gov.au

cloud.gov.au is a service by the DTA that helps government teams
create and deliver quality digital services securely hosted in the
cloud.

Accept the invitation - Accept your invite [1] to continue the
registration process. You can also copy the URL below and paste it
into your browser's address bar:

{{.URL}}

Read the documentation - After you register [2] and log in [3], read
the cloud.gov.au docs [4].

Then set up your cloud.gov.au access and get started [5].

If you run into problems or have any questions, please email us at
support@cloud.gov.au.

Thank you,
The cloud.gov.au team

Need help [6]? We'd love to hear from you.

[1] Accept your invite: {{.URL}}
[2] Register: {{.URL}}
[3] Log in: https://console.cloud.gov.au
[4] Docs: https://docs.cloud.gov.au
[5] Set up your cloud.gov access and get started: https://docs.cloud.gov.au/getting_started/login/
[6] Need help: https://support.cloud.gov.au
`;
