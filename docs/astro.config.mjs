import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://<USERNAME>.github.io",
  base: "/<REPO-NAME>",

  integrations: [
    starlight({
      title: "Projekt-Dokumentation"
    })
  ]
});