import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    rules: {
      // Disable specific ESLint rules here
      "@typescript-eslint/no-unused-vars": "off", // Disable unused variable warnings
      "no-console": "off", // Allow console.log usage
      "@typescript-eslint/no-explicit-any": "off", // Allow 'any' type
      "@next/next/no-img-element": "off", // Allow using <img> instead of <Image />
    },
  },
];

export default eslintConfig;
