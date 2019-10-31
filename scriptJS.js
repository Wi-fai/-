
let budget = prompt("Ваш бюджет за месяц?");
let date = prompt("Введите дату в формате YYYY-MM-DD");
//console.log(budget);
//console.log(date);
let questionOne = prompt("Введите обязательную  сумму расходов в этом месяце"); // я так понял сколько надо купить
let questionTwo = prompt("Во сколько обойдется"); // видимо стоимость покупки

let appData = {
    Budget: (budget - questionTwo) / 30,
    timeData: date,
    expenses: { 
        QuestionOne: 'Ответ на первый вопрос ' + questionOne,
        QuestionTwo: 'Ответ на второй вопрос ' + questionTwo, 
    },
    optionalExpenses: {},
    income: [],
    savings: false,
    
};

//console.log(appData);
alert("Ваш бюджет на 1 день составляет у/е " + appData.Budget); 