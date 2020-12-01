let fruits = prompt("entrer le nom d'un fruit");

switch(fruits) {
    case "Banana": case "banana":
        alert("Hello");
        break;
    case "Apple": case "apple":
        alert("Welcome");
        break;
    default:
        alert("aucun des deux");
}
