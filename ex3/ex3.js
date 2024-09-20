const button = document.createElement("button");
button.innerText = "Aggiungi";

const div = document.querySelector("div");
div.appendChild(button);

const addProduct = () => {
  const input = document.querySelector("input");

  const ul = document.querySelector("ul");

  const li = document.createElement("li");
  li.innerText = input.value;

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  li.appendChild(checkbox);

  ul.appendChild(li);

  input.value = "";
};
button.addEventListener("click", addProduct);
