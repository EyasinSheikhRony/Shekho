// @ts-nocheck
function menu(e) {
  let list = document.querySelector("ul");
  let list2 = document.querySelector("p");

  e.name === "menu"
    ? ((e.name = "close"),
      list.classList.add("top-[80px]"),
      list.classList.add("opacity-100"),
      list2.classList.add("top-[250px]"),
      list2.classList.add("opacity-100"))
    : ((e.name = "menu"),
      list.classList.remove("top-[80px]"),
      list.classList.remove("opacity-100"),
      list2.classList.remove("top-[250px]"),
      list2.classList.remove("opacity-100"));
}

menu();
