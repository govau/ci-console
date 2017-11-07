import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Table, { Td } from "./Table";
import A from "./A";

const Block = styled(Table)`
  min-width: 100%;
  border-collapse: collapse;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
`;

const BlockInner = styled(Td)`
  padding: 9px;
  mso-line-height-rule: exactly;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
`;

const ContentContainer = styled(Table)`
  min-width: 100%;
  border-collapse: collapse;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
`;

const Content = styled(Td)`
  padding-right: 9px;
  padding-left: 9px;
  padding-top: 0;
  padding-bottom: 0;
  text-align: center;
  mso-line-height-rule: exactly;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
`;

const Img = styled.img`
  padding-bottom: 0;
  display: inline;
  vertical-align: bottom;
  border: 0;
  height: auto;
  outline: none;
  text-decoration: none;
  -ms-interpolation-mode: bicubic;
  width: ${({ width }) => width}px;
  max-width: ${({ maxWidth }) => maxWidth};
`;

const ImageBlock = ({ src, alt, width, maxWidth, link }) => {
  const img = (
    <Img align="center" alt={alt} src={src} width={width} maxWidth={maxWidth} />
  );

  return (
    <Block border="0" cellPadding="0" cellSpacing="0" width="100%">
      <tbody>
        <tr>
          <BlockInner valign="top">
            <ContentContainer
              align="left"
              width="100%"
              border="0"
              cellPadding="0"
              cellSpacing="0"
            >
              <tbody>
                <tr>
                  <Content valign="top">
                    {link ? <A {...link}>{img}</A> : { img }}
                  </Content>
                </tr>
              </tbody>
            </ContentContainer>
          </BlockInner>
        </tr>
      </tbody>
    </Block>
  );
};

ImageBlock.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  maxWidth: PropTypes.string.isRequired,
  link: PropTypes.shape({
    href: PropTypes.string.isRequired
  })
};

export default ImageBlock;
