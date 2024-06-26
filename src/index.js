document.addEventListener("DOMContentLoaded", () => {
    let form = document.getElementById("create-task-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let input = document.getElementById("new-task-description").value;
        let list = document.getElementById("list");

        let li = document.createElement("li");
        li.textContent = input + " ";
        list.appendChild(li);

        let li_button = document.createElement("button");
        li_button.setAttribute("data-description", input);
        li_button.textContent = "X";
        li.appendChild(li_button);

        li_button.addEventListener("click", function(event) {
            event.target.parentNode.remove();
        });
    });
});
