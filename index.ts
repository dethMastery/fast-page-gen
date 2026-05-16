const res = await Bun.build({
  entrypoints: ["./src/index.ts", "./src/style.css"],
  outdir: "./dist",
  minify: { whitespace: true, identifiers: true },
  format: "esm",
});

if (res.success) {
  console.log(`Build Successfully`);
  console.log(`Files in dist folder`);
} else {
  console.error(`Failed to build.. check your code and try again..`);
}
