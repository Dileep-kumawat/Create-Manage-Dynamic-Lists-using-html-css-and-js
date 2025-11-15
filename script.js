let ul = document.querySelector("ul");
let addBtn = document.querySelector("#addBtn");
let addInp = document.querySelector("#addInp");

let insertLi = (e) => {
    if (e.key === "Enter" || e.type === "click") {
        let data = addInp.value;
        if (data === "") {
            addInp.value = "Please Enter some Data...";
        } else {
            let li = document.createElement("li");
            li.innerHTML = `<span>${data}</span> <button id="editBtn">Edit</button> <button id="deleteBtn">Delete</button> `;
            li.addEventListener("click", function (dets) {
                if (dets.target.matches("#editBtn")) {
                    let inpLi = document.createElement("input");
                    let span = li.querySelector("span");
                    let editBtn = li.querySelector("#editBtn");
                    inpLi.value = span.textContent;
                    inpLi.addEventListener("focus", () => inpLi.select());
                    li.replaceChild(inpLi, span);
                    editBtn.setAttribute("disabled", "");
                    inpLi.addEventListener("keydown", function (e) {
                        if (e.key === "Enter") {
                            if (inpLi.value !== "") {
                                span.textContent = inpLi.value;
                                editBtn.removeAttribute("disabled");
                                li.replaceChild(span, inpLi);
                            }
                        }
                    });
                } else if (dets.target.matches("#deleteBtn")) {
                    li.remove();
                }
            });
            ul.appendChild(li);
            addInp.value = "";
        }
    }
}

addBtn.addEventListener("click", insertLi);
addInp.addEventListener("keydown", insertLi);