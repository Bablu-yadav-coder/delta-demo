
let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector('ul');

btn.addEventListener('click' , function() {
    let task = document.createElement("li");
    task.classList.add("task");
    task.innerText = input.value;
    ul.append(task); 

    let del = document.createElement("button");
    del.classList.add("delete");
    del.innerHTML = 'delete';

    task.appendChild(del);

    input.value = " ";
})


ul.addEventListener('click', function(event) {
    console.log(event.target.nodeName);
    if(event.target.nodeName == "BUTTON") {
        let del = event.target.parentElement;
        del.remove();
        console.log("deleted");
    }
});