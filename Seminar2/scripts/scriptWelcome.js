function getName() {
    let yourName = prompt("Введите свое имя: ");
    return yourName.toString();
}
nameOfUser = getName();
alert('Привет, '+nameOfUser+'!');