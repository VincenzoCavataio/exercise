var elements = document.getElementsByClassName("element");

      function addName() {
        event.preventDefault();
        if (document.getElementById("newValue").value === "") {
          document.getElementById("newValue").setAttribute("class","error")
          setTimeout(() => document.getElementById("newValue").removeAttribute("class"), 300)
          return;
        }
        document.getElementById("newValue").removeAttribute("class")
        const newValue = document.getElementById("newValue").value;
        const elementList = document.getElementById("elementList");
        const newElement = document.createElement("li");
        const newImage = document.createElement("img");
        newElement.setAttribute("class", "element");
        newElement.setAttribute("id", newValue);
        newImage.setAttribute("src", "./public/imgs/trash.svg");
        newImage.setAttribute("class", "deleteIcon");
        newImage.setAttribute("onClick", "removeName(event)");
        newElement.append(newImage);
        newElement.append(newValue);
        elementList.append(newElement);
        document.getElementById("newValue").value = "";
      }

      function removeName(event) {
        var temp = [...document.getElementsByClassName("element")].map(
          (e) => e.innerText
        );
        temp.filter((e) => e === event.target.parentNode.id);
        document.getElementById(event.target.parentNode.id).remove();
      }

      function random() {
        if (!elements.length) {
          document.getElementById("dest").value = "";
          return;
        }
        const length = elements.length;
        const randomNumber = parseInt(Math.random() * (length - 0) + 0);
        document.getElementById("dest").value =
          elements[randomNumber].childNodes[1].nodeValue;
      }