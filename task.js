function sent(event) {
    const text1 = document.getElementById("text1") // забирает значение input "ваше имя" при вводе через id text1
    const kod = document.getElementById("kod") //забирает значение input "введите пароль" при вводе через id kod
    const weight = document.getElementById("weight") //забирает значение input "введите вес"
        //при вводе через id kod
    console.log(text1.value, kod.value, weight.value); // выводит значения
    //const ekran = document.getElementById("ekran")
    //ekran.innerText = (text1.value + kod.value + weight.value)
    const newDiv = document.createElement("div"); // создает новый элемент div
    const container = document.getElementById("container") // забирает значение а container в переменную container
    container.appendChild(newDiv); //создается потомок от container newDiv
    newDiv.classList.add("list-group-horizontal");
    newDiv.classList.add("list-group-item");
    newDiv.classList.add("box");
    newDiv.textContent = text1.value + ' ' + kod.value + ' ' + weight.value;
    //выводятся значения трех переменных в newDiv
    localStorage.setItem('myCat', 'Tom');
    'myCat' => 'users';
    'Tom' => [];
    const array = localStorage.getItem('users') || [];
    let array = localStorage.getItem('users');
    if (!array) { array = [] }
    localStorage.setItem('users', {
        text: text1.value,
        weight: weight.value,
        kod: weight.value
    });
    const button = document.createElement("button") // создается кнопка
    button.textContent = "удавить"; // на кнопке пишем delete
    button.classList.add("btn");
    button.classList.add("btn-danger");
    newDiv.appendChild(button); // делаем newDiv потомком button
    button.onclick = function() {
            container.removeChild(newDiv)

        } // создаем функцию вызываемую при нажатии на button и очищающую newDiv
}