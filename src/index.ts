import { ConfigClass } from "./config";
import { main } from "./functions/main";

const config = new ConfigClass();

config.setHost("https://cdn.jsdelivr.net/gh/dethMastery/fast-page-gen@deploy");
config.setHomepage("https://suphakit.net");
config.setAuthor("Suphakit P.");

main(config);
