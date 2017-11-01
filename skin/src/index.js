import React from "react";

import * as homePage from "./components/HomePage";
export { homePage };

export { default as header } from "./header";

import InfoLogs from "dashboard/components/info_logs";

export const lang = "en-AU";

export const config = {
  header: {
    disclaimer_link_text: "Here's how you know",
    disclaimer_reason_gov_header: "The .gov.au means it’s official.",
    disclaimer_reason_gov_body:
      "Australian Government websites often end in .gov.au. Before sharing sensitive information, make sure you're on a government site.",
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
    cli: "https://cloud.gov/docs/getting-started/setup/",
    concepts_roles: "https://docs.cloudfoundry.org/concepts/roles.html",
    concepts_spaces: "https://cloud.gov/docs/getting-started/concepts/",
    deploying_apps: "https://cloud.gov/docs/getting-started/your-first-deploy/",
    use: "https://cloud.gov/overview/overview/using-cloudgov-paas/",
    invite_user: "https://cloud.gov/docs/apps/managing-teammates/",
    roles:
      "https://cloud.gov/docs/apps/managing-teammates/#give-roles-to-a-teammate",
    managed_services: "https://cloud.gov/docs/apps/managed-services/",
    status: "https://cloudgov.statuspage.io/",
    contact: "https://cloud.gov/docs/help/"
  },
  snippets: {
    logs: InfoLogs
  },
  github: {
    url: "https://github.com/govau/cg-dashboard"
  },
  platform: {
    name: "cloud.gov.au",
    api_host: "api.system.g.cld.gov.au",
    logs: {
      name: "logs.g.cld.gov.au",
      url: "https://logs.g.cld.gov.au"
    }
  }
};
