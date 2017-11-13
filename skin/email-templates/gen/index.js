import Rx from "rxjs/Rx";

import { injectGlobalStyles } from "../src/components/Email";

injectGlobalStyles();

Rx.Observable.from([
  "./emails/userInvited",
  "./emails/userAssociatedWithOrganization",
  "./emails/userAssociatedWithSpace"
])
  .map(modPath => require(modPath).default)
  .flatMap(fn => fn())
  .subscribe({
    error: err => {
      console.error("an error occurred:", err); // eslint-disable-line no-console
      process.exitCode = 1;
    },
    complete: () => {
      console.log("successfully generated"); // eslint-disable-line no-console
    }
  });
