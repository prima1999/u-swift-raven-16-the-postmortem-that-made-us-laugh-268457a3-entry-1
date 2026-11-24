import { join } from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";

const entry = "I asked the agent to fix the off-by-one in the billing loop. It fixed it by charging every customer twice, then wrote a test asserting the double charge was correct.";

const outputDir = "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
