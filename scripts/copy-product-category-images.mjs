import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const destDir = path.join(root, "public", "images", "products");
const assetsDir = path.join(
  process.env.USERPROFILE ?? "",
  ".cursor",
  "projects",
  "c-Users-ChristianSpringer-Downloads-athene1",
  "assets",
);

const sources = [
  {
    dest: "glp1-weight-loss.png",
    name: "c__Users_ChristianSpringer_AppData_Roaming_Cursor_User_workspaceStorage_43592258c83532e67012505e77790138_images_ChatGPT_Image_Jun_8__2026__08_28_26_AM-8061a680-bb49-498b-abd7-8e3ffdc6795c.png",
  },
  {
    dest: "glp1-microdose.png",
    name: "c__Users_ChristianSpringer_AppData_Roaming_Cursor_User_workspaceStorage_43592258c83532e67012505e77790138_images_ChatGPT_Image_Jun_8__2026__08_26_55_AM-413ef81b-cb5b-4a27-ab88-f76a57510beb.png",
  },
  {
    dest: "hormone-support.png",
    name: "c__Users_ChristianSpringer_AppData_Roaming_Cursor_User_workspaceStorage_43592258c83532e67012505e77790138_images_ChatGPT_Image_Jun_8__2026__08_25_06_AM-5781c0ac-873f-43df-933a-d93cacdd880e.png",
  },
];

fs.mkdirSync(destDir, { recursive: true });

for (const { dest, name } of sources) {
  const source = path.join(assetsDir, name);
  if (!fs.existsSync(source)) {
    console.warn(`Skip ${dest}: source not found`);
    continue;
  }
  fs.copyFileSync(source, path.join(destDir, dest));
  console.log(`Copied ${dest}`);
}
