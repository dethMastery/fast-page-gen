import { ConfigClass } from "./config";
import { main } from "./functions/main";

const config = new ConfigClass();

config.setHost("./dist");
config.setHomepage("https://detzz.in.th");
config.setAuthor("George");

main(config);
