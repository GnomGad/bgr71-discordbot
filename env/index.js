const fs = require("node:fs");
const path = require("node:path");
const colors = require("colors");
const eventsPath = path.join(__dirname);

const mode = process.argv.length >= 3 ? process.argv[2] : "dev";

!fs.readdirSync(eventsPath).includes(mode)
    ? console.error(
          `[ERROR][${path.join(__dirname, __filename)}] directory not found`.red
      )
    : console.log(`ENVIROMENT SET MODE AS '${mode}' `);

require("dotenv").config({ path: path.join(__dirname, mode, ".env") });
