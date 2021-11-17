nameHer = prompt ("Введите имя девушки: ");                         //Task1
nameHis = prompt("Введите имя парня: ");
randomResult = (Math.random(100).toFixed(2))*100;
alert (`${nameHer} подходит к ${nameHis} на ${randomResult}%.`);

wt = prompt("Введите свой вес:")                                    //Task2
height = (prompt("Введите свой рост"))/100;
bmi = (wt/(height**2)).toFixed(2);
if(bmi<=18.5){
    alert(`Недостаточный вес, BMI = ${bmi}`);
}else if(bmi<=25){
    alert(`Нормально, BMI = ${bmi}`);
}else if(bmi<=30){
    alert(`У вас излишек веса, BMI = ${bmi}`);
}else if(bmi>30){
    alert(`Ожирение, BMI = ${bmi}`);
}

year = prompt("Введите год:");                                       //Task3
if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
    alert(`${year} - високосный год`);
}else{
    alert(`${year} - невисокосный год`);
}

let names = ["Арсений" , "Никита", "Андрей", "Сергей"];               //Task4
randomNames = Math.floor(Math.random()*names.length);
alert(`Оплачивать будет ${names[randomNames]}`);



