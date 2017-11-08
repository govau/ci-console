import React from "react";

import {
  A,
  Br,
  H1,
  Hr,
  P,
  Strong,
  ButtonBlock,
  TextBlock,
  Unlink
} from "../components";
import { Value } from "../go";

export const subject = "Invitation to join cloud.gov.au";

export const previewText =
  "You have been invited to join cloud.gov.au - a service by the DTA that helps government teams create and deliver quality digital services securely hosted in the cloud.";

const supportEmail = "support@cloud.gov.au";

const HTML = () => {
  return (
    <div>
      <TextBlock>
        <H1 align="center">
          Invitation to join <Unlink>cloud.gov.au</Unlink>
        </H1>
        <P align="center">
          <Unlink>{Value(".Email")}</Unlink>, you have been invited to join{" "}
          <Unlink>cloud.gov.au</Unlink>
        </P>
      </TextBlock>
      <Hr />
      <ButtonBlock href={Value(".URL")}>Accept your invitation</ButtonBlock>
      <TextBlock>
        <P>
          <A href="https://cloud.gov.au">cloud.gov.au</A> is a service by the
          DTA that helps government teams create and deliver quality digital
          services securely hosted in the cloud.
        </P>
        <P>
          <Strong>Accept the invitation</Strong> -{" "}
          <A href={Value(".URL")}>Accept your invite [1]</A> to continue the
          registration process. You can also copy the URL below and paste it
          into your browser's address bar:
        </P>
        <P>
          <A href={Value(".URL")}>{Value(".URL")}</A>
        </P>
        <P>
          <Strong>Read the documentation</Strong> - After you{" "}
          <A href="{{.URL}}">register [2]</A> and{" "}
          <A href="https://console.cloud.gov.au/">log in [3]</A>, review the{" "}
          <A href="https://docs.cloud.gov.au">read the cloud.gov.au docs [4]</A>.
        </P>
        <P>
          Then{" "}
          <A href="https://docs.cloud.gov.au/getting_started/login/">
            set up your cloud.gov.au access and get started [5]
          </A>.
        </P>
        <P>
          If you run into problems or have any questions, please email us at{" "}
          <A href={`mailto:${supportEmail}`}>{supportEmail}</A>.
        </P>
      </TextBlock>
      <TextBlock>
        <P>
          Thank you,
          <Br />
          The <Unlink>cloud.gov.au</Unlink> team
        </P>
      </TextBlock>
    </div>
  );
};

export default HTML;

export const text = `${Value(
  ".Email"
)}, you have been invited to join cloud.gov.au

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
