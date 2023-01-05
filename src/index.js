import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const api_key = "AIzaSyBUWtWQ1o5xMJd1_-y4PAteRHP3Yq_5mhY";

function getTabUrl(spreadsheet_id, tab_name) {
  return (
    "https://sheets.googleapis.com/v4/spreadsheets/" +
    spreadsheet_id +
    "/values/" +
    encodeURIComponent(tab_name) +
    "?alt=json&key=" +
    api_key
  );
}

function getAllTabsUrl(spreadsheet_id) {
  return (
    "https://sheets.googleapis.com/v4/spreadsheets/" +
    spreadsheet_id +
    "?alt=json&key=" +
    api_key
  );
}

async function getJson(url) {
  console.log(url);
  return await fetch(url).then((response) => response.json());
}

async function main() {
  var spreadsheet_id = "1ZXAX4K2rjLQHl4bbidDAgScilH3khcRcLCAl0fATbwk";

  const allTabsJson = await getJson(getAllTabsUrl(spreadsheet_id));
  console.log(allTabsJson);
}

main().catch((err) => console.log(err));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
