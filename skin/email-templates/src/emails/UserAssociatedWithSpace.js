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
import { Value, If } from "../go";

export const subject = "Member added to space";

export const previewText = `Access to the cloud.gov.au space ${Value(
  ".OrgName"
)}/${Value(".SpaceName")} has been given to the account for ${Value(
  ".GranteeEmail"
)}.`;

const supportEmail = "support@cloud.gov.au";

const HTML = () => {
  return (
    <div>
      <TextBlock>
        <H1 align="center">Space member added</H1>
        <P align="center">
          The <Unlink>cloud.gov.au</Unlink> account for{" "}
          <A href={`mailto:${Value(".GranteeEmail")}`}>
            <Strong>{Value(".GranteeEmail")}</Strong>
          </A>{" "}
          has been given access to the space{" "}
          <Strong>{Value(".OrgName")}</Strong> /{" "}
          <Strong>{Value(".SpaceName")}</Strong>.
        </P>
        <P align="center">
          Access was granted by{" "}
          <A href={`mailto:${Value(".GranterEmail")}`}>
            <Strong>{Value(".GranterEmail")}</Strong>
          </A>.
        </P>
      </TextBlock>
      <Hr />
      <ButtonBlock href={Value(".Link")}>Go to space</ButtonBlock>
      <TextBlock>
        <If pipeline=".SpaceManager">
          <P>
            You’re receiving this notification because you’re a space manager of{" "}
            <Strong>{Value(".OrgName")}</Strong>.
          </P>
        </If>
        <If pipeline="not .SpaceManager">
          <P>
            If you’re unsure why you’re receiving this notification{" "}
            <A href={`mailto:${supportEmail}`}>contact us</A> or if possible ask
            the person who granted the access.
          </P>
        </If>
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

export const text = ``;
