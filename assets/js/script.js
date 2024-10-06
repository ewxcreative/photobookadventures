//input box in sub-page "explore" for building a locations list 
function addText () {
    var value = document.querySelector("#input").value;
    var ul = document.querySelector("ul.list-data");
    var li = document.createElement("li");

    li.textContent = value;
    ul.appendChild(li)
}

//extra function to clear the text entered into the input on button click
function clearField() {
document.getElementById('input').value='';
}
