

var readlineSync = require('readline-sync');

function showMenu(){
    console.log('1.Show all student');
    console.log('2.Creat new student');
    console.log('3.Save and Exit');
  }
  
function main(){
    showMenu();
    var option = readlineSync.question('> ');
    switch (option){
        case '1':
            showStudent();
            break;
        case '2':
            
    }

  
}
main();