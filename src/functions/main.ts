import { ConfigClass } from "../config";
import { changeBG } from "./background";
import { clock as clockFunction } from "./clock";

export const main = async (config: ConfigClass) => {
  const css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = `${config.host}/style.css`;

  document.head.appendChild(css);

  const mainElement = document.createElement("main");
  mainElement.setAttribute("id", "main");

  const h1 = document.createElement("h1");
  h1.setAttribute("id", "heading");
  h1.innerText = "Nothing to load here..";

  const clock = document.createElement("p");
  clock.setAttribute("id", "clock");

  const footer = document.createElement("footer");
  footer.setAttribute("id", "footer");

  footer.innerHTML = `&copy; ${new Date().getFullYear()}, <a href="${config.homepage}" target="_blank">${config.author}</a>`;

  mainElement.appendChild(h1);
  mainElement.appendChild(clock);
  mainElement.appendChild(footer);
  document.body.appendChild(mainElement);

  await changeBG();
  clockFunction();

  console.log("Page loaded successfully");
};
