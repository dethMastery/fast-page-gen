export const clock = () => {
  setInterval(() => {
    const clock = document.querySelector("#clock") as HTMLParagraphElement;
    clock.innerText = new Date().toLocaleTimeString();
  }, 1000);
};
