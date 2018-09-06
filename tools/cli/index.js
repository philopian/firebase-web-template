const fs = require("fs");
const path = require("path");
const argv = process.argv.slice(2);
const chalk = require("chalk");

const appDirectory = fs.realpathSync(process.cwd());
const newComponent = require("./new-component");
const newContainer = require("./new-container");

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Check for ./appseed.config.js"
let BAIL = false;
const pathAppSeedConfig = path.join(appDirectory, "config.js");
if (!fs.existsSync(pathAppSeedConfig)) {
  console.log(chalk.bgRed("[Missing File] "), ` -> ${pathAppSeedConfig}`);
  BAIL = true;
}

// Check for ./react/components/
let BAIL_NO_COMPONENTS = false;
const pathComponentsFolder = path.join(appDirectory, "www/react/components");
if (!fs.existsSync(pathComponentsFolder)) BAIL_NO_COMPONENTS = true;

// Check for ./react/containers/
let BAIL_NO_CONTAINERS = false;
const pathContainersFolder = path.join(appDirectory, "www/react/containers");
if (!fs.existsSync(pathContainersFolder)) BAIL_NO_CONTAINERS = true;

// Check for ./react/pages/
let BAIL_NO_PAGES = false;
const pathPagesFolder = path.join(appDirectory, "www/react/pages");
if (!fs.existsSync(pathPagesFolder)) BAIL_NO_PAGES = true;

// Check for ./react/pages/
let BAIL_NO_REDUCERS = false;
const pathReducersFolder = path.join(appDirectory, "www/react/reducers");
if (!fs.existsSync(pathReducersFolder)) BAIL_NO_REDUCERS = true;
const pathActionsFolder = path.join(appDirectory, "www/react/actions");
if (!fs.existsSync(pathActionsFolder)) BAIL_NO_REDUCERS = true;
const pathActionsTypefile = path.join(
  appDirectory,
  "www/react/actions/types.js"
);
if (!fs.existsSync(pathActionsTypefile)) BAIL_NO_REDUCERS = true;
const pathReducersIndex = path.join(
  appDirectory,
  "www/react/reducers/index.js"
);
if (!fs.existsSync(pathReducersIndex)) BAIL_NO_REDUCERS = true;

if (argv.includes("new") && argv.includes("component")) {
  if (!BAIL_NO_COMPONENTS) {
    // Show prompt for new component
    newComponent();
  } else {
    console.log(
      chalk.bgRed("[Missing Folder]"),
      ` -> ${pathComponentsFolder.replace(appDirectory, "")}`
    );
  }
}

if (argv.includes("new") && argv.includes("container")) {
  if (!BAIL_NO_CONTAINERS) {
    // Show prompt for new container
    newContainer();
  } else {
    console.log(
      chalk.bgRed("[Missing Folder]"),
      ` -> ${pathContainersFolder.replace(appDirectory, "")}`
    );
  }
}
