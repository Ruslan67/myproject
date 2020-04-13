const array = JSON.parse(localStorage.getItem('users') || "[]"); //переводит введеные занчения в js код
for (let i = 0; i < array.length; i++) {

    etuser(array[i]) // заносит указанные значения в массив
}

function sent(event) {
    const text1 = document.getElementById("text1") // забирает значение input "ваше имя" при вводе через id text1
    const kod = document.getElementById("kod") //забирает значение input "введите пароль" при вводе через id kod
    const weight = document.getElementById("weight") //забирает значение input "введите вес"
        //при вводе через id kod
    console.log(text1.value, kod.value, weight.value); // выводит значения
    //const ekran = document.getElementById("ekran")
    //ekran.innerText = (text1.value + kod.value + weight.value)
    etuser({ // создаем обьект etuser куда заносятся значения из полей
            text: text1.value,
            kod: kod.value,
            weight: weight.value
        })
        //выводятся значения трех переменных в newDiv
    const array = JSON.parse(localStorage.getItem('users') || "[]");
    array.push({
            text: text1.value,
            weight: weight.value,
            kod: kod.value
        }) // создается массив куда заносятся значения из полей
    localStorage.setItem('users', JSON.stringify(array)); //заносит в локальную память обьекты с ключом users

}

function etuser(user) { // создаем новую функцию etuser
    const newDiv = document.createElement("div"); // создает новый элемент div
    const container = document.getElementById("container") // забирает значение а container в переменную container
    container.appendChild(newDiv); //создается потомок от container newDiv
    newDiv.classList.add("list-group-horizontal");
    newDiv.classList.add("list-group-item");
    newDiv.classList.add("box");
    newDiv.textContent = user.text + ' ' + user.kod + ' ' + user.weight;
    const button = document.createElement("button") // создается кнопка
    button.textContent = "удавить"; // на кнопке пишем delete
    button.classList.add("btn");
    button.classList.add("btn-danger");
    newDiv.appendChild(button); // делаем newDiv потомком button
    button.onclick = function() {

        container.removeChild(newDiv);

        //создаем функцию вызываемую при нажатии на button и очищающую newDi


    }
}