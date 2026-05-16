import { host } from "./config";

const changeBG = async () => {
  const res = await fetch("https://pic.re/image.json");
  const data = await res.json();
  document.body.style.background = `url(https://${data.file_url})`;

  const creditElement = document.querySelector("#credit") as HTMLDivElement;
  const creditText = `
  <div class="credit-text">
    Thanks for image from <a href="${data.source}" target="_blank">${data.author}</a>
  </div>
  <div class="button-holder">
    <button id="update-bg">Change Image</button>
  </div>`;

  if (creditElement === null) {
    const source = document.createElement("div");
    source.setAttribute("id", "credit");
    source.innerHTML = creditText;
    document.body.appendChild(source);
  } else {
    creditElement.innerHTML = creditText;
  }

  document.querySelector("#update-bg")?.addEventListener("click", async () => {
    await changeBG();
    console.log("Changed background");
  });
};

const clock = () => {
  setInterval(() => {
    const clock = document.querySelector("#clock") as HTMLParagraphElement;
    clock.innerText = new Date().toLocaleTimeString();
  }, 1000);
};

const main = async () => {
  const css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = `${host}/style.css`;

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

  footer.innerHTML = `&copy; ${new Date().getFullYear()}, <a href="${homepage}" target="_blank">${author}</a>`;

  await changeBG();

  mainElement.appendChild(h1);
  mainElement.appendChild(clock);
  mainElement.appendChild(footer);
  document.body.appendChild(mainElement);

  console.log("Page loaded successfully");
};

main();
clock();
