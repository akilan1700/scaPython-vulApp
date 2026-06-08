const { ArgumentParser } = require("argparse");
const minimist = require("minimist");
const _ = require("lodash");
const moment = require("moment");
const validator = require("validator");

const parser = new ArgumentParser({
  version: "1.0.0",
  addHelp: true,
  description: "Custom npm CLI app for SCA testing"
});

parser.addArgument(["--name"], {
  help: "Enter user name",
  required: false,
  defaultValue: "Guest"
});

parser.addArgument(["--role"], {
  help: "Enter user role",
  required: false,
  defaultValue: "User"
});

parser.addArgument(["--email"], {
  help: "Enter email address",
  required: false,
  defaultValue: "test@example.com"
});

const args = parser.parseArgs();

console.log("SCA Custom NPM Test Repo");
console.log("------------------------");

console.log("Name:", args.name);
console.log("Role:", args.role);
console.log("Email:", args.email);

const rawArgs = minimist(process.argv.slice(2));
console.log("Raw Args:", rawArgs);

const user = _.merge(
  {},
  {
    name: args.name,
    role: args.role,
    email: args.email,
    createdAt: moment().format("YYYY-MM-DD HH:mm:ss")
  }
);

console.log("User Object:", user);

const isValidEmail = validator.isEmail(args.email);
console.log("Is Valid Email:", isValidEmail);

console.log("Application executed successfully");