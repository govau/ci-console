import React from "react";
import PropTypes from "prop-types";

import logoSrc from "./logo.svg";
import arrowUpSrc from "./angle-arrow-up.svg";
import arrowDownSrc from "./angle-arrow-down.svg";

const renderToggleIcon = ({ expanded }) => (
  <img
    className="right-arrow"
    src={expanded ? arrowUpSrc : arrowDownSrc}
    alt={expanded ? "Up arrow" : "Down arrow"}
  />
);

renderToggleIcon.propTypes = { expanded: PropTypes.bool.isRequired };
renderToggleIcon.defaultProps = { expanded: false };

const disclaimer = {
  text: "An official website of the Australian Government",
  linkText: "Here’s how you know",
  renderToggleIcon,
  guidance1: {
    heading: "The .gov.au means it’s official.",
    content: (
      <span>
        Australian Government websites often end in .gov.au. Before sharing
        sensitive information, make sure you’re on a government site.
      </span>
    )
  },
  guidance2: {
    heading: "The site is secure.",
    content: (
      <span>
        The https:// ensures that you are connecting to the official website and
        that any information you provide is encrypted and transmitted securely.
      </span>
    )
  }
};

const logo = {
  render: () => (
    <div className="header-title" style={{ marginTop: "-0.45rem" }}>
      <a href="/" style={{ display: "block" }}>
        <img
          src={logoSrc}
          alt="cloud.gov.au console"
          style={{
            float: "left",
            width: "40px",
            paddingTop: "13px",
            paddingRight: "10px"
          }}
        />
        <span
          style={{
            display: "inline-block",
            color: "#17788d",
            fontSize: "2.25rem",
            fontWeight: 300
          }}
        >
          console
        </span>
      </a>
    </div>
  )
};

const links = [
  {
    text: "cloud.gov.au",
    url: "https://cloud.gov.au"
  },
  {
    text: "Documentation",
    url: "https://docs.cloud.gov.au"
  },
  {
    text: "Support",
    url: "https://support.cloud.gov.au"
  }
];

const header = {
  disclaimer,
  logo,
  links
};

export default header;
