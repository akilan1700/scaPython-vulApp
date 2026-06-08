const { ArgumentParser } = require("argparse");

const parser = new ArgumentParser({
  description: "Custom npm CLI app for SCA testing using argparse"
});

parser.add_argument("--name", {
  help: "Enter user name",
  required: false,
  default: "Guest"
});

parser.add_argument("--role", {
  help: "Enter user role",
  required: false,
  default: "User"
});

parser.add_argument("--email", {
  help: "Enter email address",
  required: false,
  default: "test@example.com"
});

const args = parser.parse_args();

console.log("SCA Custom NPM Test Repo");
console.log("------------------------");
console.log("Package Used: argparse");
console.log("Name:", args.name);
console.log("Role:", args.role);
console.log("Email:", args.email);
console.log("Application executed successfully");