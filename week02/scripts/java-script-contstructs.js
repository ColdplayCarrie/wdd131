const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

______________________________________
for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i])
    }
}

______________________________________
let i = 0;

while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i])
    }
    i++;
}

______________________________________
studentReport.forEach(function (item) {
    if (item < LIMIT) {
        console.log(item);
    }
});

______________________________________
for (let i in studentReport) {
    let result = "";
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i])
    }
}

______________________________________
let currentDay = gettodaysday
const daysOfTheWeek = [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday];

for (let i in daysOfTheWeek) {
    if (daysOfTheWeek[i] !== currentDay) {
        console.log(daysOfTheWeek[i]);
    }
}