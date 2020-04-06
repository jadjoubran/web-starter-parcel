// example import from a library
import { format } from "date-fns";

document.querySelector("#demo-date").textContent = format(
  new Date(),
  "iiii, MMMM d yyyy"
);
