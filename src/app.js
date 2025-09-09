function genertatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "Poem will go here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemElement = document.querySelector("#poem-generator-form");
poemElement.addEventListener("submit", genertatePoem);
