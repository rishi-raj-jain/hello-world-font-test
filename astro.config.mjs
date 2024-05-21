import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import node from "@astrojs/node";
import critters from "astro-critters";
import playformCompress from "@playform/compress";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), critters(), playformCompress(), compressor()],
  output: 'hybrid',
  adapter: node({
    mode: "standalone"
  }),
});
