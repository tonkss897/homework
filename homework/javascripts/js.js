document.addEventListener("DOMContentLoaded", function () {

  
  // Домашка 1
  
  // Задача 1
  let str = "abcde";
  console.log(str[0]); // a
  console.log(str[1]); // b
  console.log(str[4]); // e

  // Задача 2
  let a1 = parseInt(prompt("Введите первое число:"));
  let b1 = parseInt(prompt("Введите второе число:"));
  console.log(a1 > 0 || b1 > 0);

  // Задача 3
  let age = parseInt(prompt(" Введите ваш возраст:"));
  if (age >= 18) {
    console.log("Совершеннолетний");
  } else {
    console.log("Несовершеннолетний");
  }


  
  // Домашка 2
  

  let ex1 = document.querySelector(".ex1");
  let ex2 = document.querySelector(".ex2");
  let ex3 = document.querySelector(".ex3");
  let ex4 = document.querySelector(".ex4");
  let ex5 = document.querySelector(".ex5");
  let ex6 = document.querySelector(".ex6");
  let ex7 = document.querySelector(".ex7");

  // Задача 1
  let pensionAge = parseInt(prompt("Введите ваш возраст:"));
  if (pensionAge < 65) {
    ex1.textContent = "Вам ещё рано на пенсию";
  } else {
    ex1.textContent = "Поздравляем с пенсионным возрастом!";
  }

  // Задача 2
  let num1 = parseInt(prompt("Введите первое число:"));
  let num2 = parseInt(prompt("Введите второе число:"));

  if (num1 > num2) {
    ex2.textContent = "Первое число больше";
  } else if (num2 > num1) {
    ex2.textContent = "Второе число больше";
  } else  {
    ex2.textContent = "Числа равны";
  }

  // Задача 3
  let numC = parseInt(prompt(" Введите любое число:"));
  if (numC % 2 === 0) {
    ex3.textContent = "Это чётное число";
  } else {
    ex3.textContent = "Это нечётное число";
  }

  // Задача 4
  const secretNumber = 7;
  let guess = parseInt(prompt(" Угадайте число от 1 до 10:"));

  if (guess === secretNumber) {
    ex4.textContent = "Вы угадали!";
  } else {
    ex4.textContent = "Попробуйте ещё раз!";
  }

  // Задача 5
  let login = prompt(" Введите логин:");
  let password = prompt("Введите пароль:");

  if (login === "hse.student" && password === "2025") {
    ex5.textContent = "Добро пожаловать!";
  } else {
    ex5.textContent = "Неверный логин или пароль";
  }

  // Задача 6
  let year = parseInt(prompt("Введите год:"));

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    ex6.textContent = "Это високосный год";
  } else {
    ex6.textContent = "Это невисокосный год";
  }

  // Задача 7:
  let numF = parseInt(prompt("Введите число:"));

  if (numF > 100) {
    ex7.textContent = "Большое число";
  } else if (numF < 100) {
    ex7.textContent = "Маленькое число";
  } else {
    ex7.textContent = "Точно 100!";
  }


  
  // Домашка 3
  

  let box = document.querySelectorAll(".clickbox");

  box.forEach(function (clickbox) {
    clickbox.addEventListener("click", function () {
      if (clickbox.style.backgroundColor === "lightsteelblue") {
        clickbox.style.backgroundColor = "lavender";
        clickbox.style.margin = "2vw";
        console.log("change color");
      } else {
        clickbox.style.backgroundColor = "lightsteelblue";
        clickbox.style.margin = "1vw";
      }
    });
  });


  
  // Домашка 4
  

  let coordsText = document.querySelector(".coords");

  document.addEventListener("mousemove", function (event) {
    coordsText.textContent = `X: ${event.clientX} | Y: ${event.clientY}`;

    if (event.clientX > 500) {
      coordsText.style.color = "red";
    } else {
      coordsText.style.color = "black";
    }
  });


  
  // Домашка 5
  

  let bu = 0;
  let Butt = document.querySelector(".button1");
  let forPco = document.querySelector(".pCo");

  Butt.addEventListener("click", function () {
    bu++;
    forPco.textContent = bu;

    if (bu === 15) {
      Butt.disabled = true;
      alert("Вы достигли максимального количества кликов");
    }
  });


  
  // Домашка 5
  
// Задача 1

  let count = 10;
  const display = document.querySelector(".timer");
  const resetButton = document.querySelector(".forTimer");
  let interval;

  function startTimer() {
    interval = setInterval(function () {
      count--;
      display.textContent = count;

      if (count <= 0) {
        clearInterval(interval);
        display.textContent = "Время вышло!";
      }
    }, 1000);
  }

  resetButton.addEventListener("click", function () {
    clearInterval(interval);
    count = 10;
    display.textContent = count;
    startTimer();
  });

  startTimer();


  
 // Задача 2

  let v = 0;
  let tic = null;

  let sta = document.querySelector(".st");
  let sto = document.querySelector(".sp");
  let reset = document.querySelector(".res");
  let clo = document.querySelector(".clock");

  sta.addEventListener("click", function () {
    if (!tic) {
      tic = setInterval(function () {
        v++;
        clo.textContent = v;
      }, 1000);
    }
  });

  sto.addEventListener("click", function () {
    clearInterval(tic);
    tic = null;
  });

  reset.addEventListener("click", function () {
    clearInterval(tic);
    tic = null;
    v = 0;
    clo.textContent = v;
  });

});
