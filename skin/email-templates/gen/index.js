import Rx from "rxjs/Rx";

Rx.Observable
  .from(["./emails/userInvited"])
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
