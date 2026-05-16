export const changeBG = async () => {
  const res = await fetch("https://pic.re/image.json");
  const data = await res.json();
  document.body.style.background = `url(https://${data.file_url})`;

  const creditElement = document.querySelector("#credit") as HTMLDivElement;
  const creditText = `
  <div class="credit-text">
    Thanks for image from <a href="${data.source}" target="_blank">${data.author}</a>
  </div>
  <div class="button-holder">
    <button id="update-bg">🔁</button>
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
  });
};
