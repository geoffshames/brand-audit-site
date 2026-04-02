import { redirect } from "next/navigation";
import fs from "fs";
import path from "path";

export default function Home() {
  // Find the first available audit slug and redirect to it
  // For multi-audit support, this could become an index page
  const dataDir = path.join(process.cwd(), "src/lib/data");
  const files = fs.readdirSync(dataDir).filter((f: string) => f.endsWith(".ts") && f !== "index.ts");
  const firstSlug = files.length > 0 ? files[0].replace(".ts", "") : null;

  if (firstSlug) {
    redirect(`/audit/${firstSlug}`);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-900 text-white">
      <p className="text-xl opacity-60">No audits available yet.</p>
    </div>
  );
}
