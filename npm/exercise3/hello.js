import { program } from "commander";

program.option("-n, --name <type>", "any string");

program.parse(process.argv);

console.log(`Hello, ${program.opts().name}!`);