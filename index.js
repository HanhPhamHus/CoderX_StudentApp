

var readlineSync = require('readline-sync');
var fs = require('fs');

var students = [];

function loadData(){
    var fileContent = fs.readFileSync('./data.json');
    students = JSON.parse(fileContent);
}

function showMenu(){
    console.log('1.Show all student');
    console.log('2.Creat new student');
    console.log('3.Save and Exit');

    var option = readlineSync.question('>>> ');
    //console.log(option);
    switch (option){
        case '1':
            showStudent();
            showMenu();
            break;
        case '2':
            showCreatStudent();
            showMenu();
           // console.log(students);
            break;
        case '3':
            saveAndExit();
            break;
        default:
            console.log('Wrong option');
            showMenu();
            break;
    }
}
function showStudent(){
    for (var student of students){
        console.log(student.name, student.age);
    }
}


function showCreatStudent(){
    var name = readlineSync.question('Name : ');
    var age = readlineSync.question('Age : ');
    var student = {
        name: name,
        age: parseInt(age)
    };
    students.push(student);
}

function saveAndExit() {
    var studentString = JSON.stringify(students);
    fs.writeFileSync('./data.json', studentString, {encoding: 'utf-8'})
}

function main(){
    loadData();
    //console.log(students);
    showMenu();
}
main();