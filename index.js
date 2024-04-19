const addProduct = () => {
  setTimeout(() => {
    ul = document.querySelector("ul")
    const li = document.createElement("li")

    const input = document.querySelector("input")
    const value = input.value
    

    li.innerText = value

    ul.appendChild(li)


  }, 2000);
 
};
