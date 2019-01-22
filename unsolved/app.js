// $('.content').html('<p>text added!!!</p>');

// $('.top').html('<p>Look at this!</p>');

// $('.content').addClass('myStyle');
// $('.content').removeClass('myStyle');

// $('.content').toggleClass('myStyle');
// $('.top').toggleClass('myStyle');

// $('.content').empty();

// $('.input1').val(4);

//For use with the .on function below

// const sayHello = function() {
//     console.log("Hello from the click listener");
// }
const view = function(){
    for (i = 0; i < employeeList.length; i++){
    document.write(employeeList.name);
    document.write(employeeList.officeNum);
    document.write(employeeList.phoneNum);
    }
  }
 $('#viewBtn').on('click', view);

$().view();