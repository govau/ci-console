import React from "react";
import InfoLogs from "dashboard/components/info_logs";

import * as homePage from "./components/HomePage";
export { homePage };

export { default as header } from "./header";

export const lang = "en-AU";

const envDomain = process.env.ENV_DOMAIN;

export const config = {
  header: {
    disclaimer_link_text: "Here’s how you know",
    disclaimer_reason_gov_header: "The .gov.au means it’s official.",
    disclaimer_reason_gov_body:
      "Australian Government websites often end in .gov.au. Before sharing sensitive information, make sure you’re on a government site.",
    disclaimer_reason_https_header: "The site is secure. ",
    disclaimer_reason_https_body:
      "The https:// ensures that you are connecting to the official website and that any information you provide is encrypted and transmitted securely.",
    disclaimer: "An official website of the Australian Government",
    show_flag: false,
    links: [
      {
        text: "cloud.gov.au",
        url: "https://cloud.gov.au"
      },
      {
        text: "Documentation",
        url: "https://docs.cloud.gov.au/"
      },
      {
        text: "Support",
        url: "https://support.cloud.gov.au/"
      }
    ]
  },
  footer: {
    author_note: (
      <span>
        Built and maintained by the{" "}
        <a href="https://www.dta.gov.au">Digital Transformation Agency</a>
      </span>
    ),
    code_note: (
      <span>
        <a href="https://github.com/govau/cg-dashboard/">Open source</a>
      </span>
    ),
    disclaimer: <span>An Australia government platform</span>,
    links: [
      {
        text: "cloud.gov.au",
        url: "https://cloud.gov.au"
      },
      {
        text: "Documentation",
        url: "https://docs.cloud.gov.au/"
      },
      {
        text: "Support",
        url: "https://support.cloud.gov.au/"
      }
    ]
  },
  docs: {
    cli: "https://docs.cloud.gov.au/getting_started/install_cli/",
    concepts_roles: "https://docs.cloudfoundry.org/concepts/roles.html",
    concepts_spaces: "https://cloud.gov/docs/getting-started/concepts/",
    deploying_apps:
      "https://docs.cloud.gov.au/deployment_configuration/application_deployment/",
    use: "https://cloud.gov/overview/overview/using-cloudgov-paas/",
    invite_user:
      "https://docs.cloud.gov.au/deployment_configuration/user_management/",
    roles:
      "https://docs.cloud.gov.au/deployment_configuration/user_management/",
    managed_services: "https://cloud.gov/docs/apps/managed-services/",
    status: "",
    contact: "https://support.cloud.gov.au/"
  },
  snippets: {
    logs: InfoLogs
  },
  github: {
    url: "https://github.com/govau/cg-dashboard"
  },
  platform: {
    name: "cloud.gov.au",
    api_host: `api.system.${envDomain}`,
    logs: {
      name: `logs.${envDomain}`,
      url: `https://logs.${envDomain}`
    },
    grafana: {
      name: `Experimental: view system state`,
      url: `https://grafana.system.${envDomain}`
    }
  }
};
