import chalk from "chalk";
import { execSync } from "child_process";

// Get target from command line args (frontend, backend, or both)
const target = process.argv[2] || "both";

const targets = target === "both" ? ["frontend", "backend"] : [target];

for (const t of targets) {
  console.log(chalk.blue(`Linting ${t}...`));
  try {
    execSync(`npx eslint ${t}`, { stdio: "inherit" });
  } catch (error) {
    console.log(
      chalk.red(`${t.charAt(0).toUpperCase() + t.slice(1)} linting failed`)
    );
    process.exit(1);
  }
  if (targets.length > 1 && t !== targets[targets.length - 1]) {
    console.log("");
  }
}

console.log("");
console.log(chalk.green("All code passes linting!"));
