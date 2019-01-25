//--------SETTING SOME DEFAULTS--------------//
$('#addSign').hide();


//--------VIEW BUTTON EVENT------------------//
const renderViewBtn = function (event) {
  event.preventDefault();
  $('#viewList').show();

  $('#inputArea').hide();
  for(let i = 0; i < employeeList.length; i++){
    const nameIn = employeeList[i].name;
    const officeIn = employeeList[i].officeNum;
    const phoneIn = employeeList[i].phoneNum;
    console.log(nameIn, officeIn, phoneIn);
    $("#viewList").append(`<div>
		<h3>Name:  ${nameIn}</h3>
		<p>Office Number:  ${officeIn}</p>
		<p>Phone number: ${phoneIn}</p>
	</div>`);
  }
}


//--------ADD BUTTON EVENT------------------//
const renderAddBtn = function (event) {
  event.preventDefault(); //sets page for input
  defaultPageLook();
  $('#magGlass').hide();
  $('#addSign').show();
}
  const renderAddEmployee = function(event){ //actual input received and appended
  const addNameIn = $('#nameInput').val(); 
  const addOfficeIn = $('#officeNumInput').val();
  const addPhoneIn = $('#employeePhoneInput').val();
  for(let i = 0; i < employeeList.length; i++){
    const nameIn = employeeList[i].name;
    const officeIn = employeeList[i].officeNum;
    const phoneIn = employeeList[i].phoneNum;
    console.log(nameIn, officeIn, phoneIn);
    $("#viewList").append(`<div>
		<h3>Name:  ${nameIn}</h3>
		<p>Office Number:  ${officeIn}</p>
		<p>Phone number: ${phoneIn}</p>
	</div>`);
  }
  $("#viewList").append(`<div>
  <h3>Name:  ${addNameIn}</h3>
  <p>Office Number:  ${addOfficeIn}</p>
  <p>Phone number: ${addPhoneIn}</p>
</div>`);
$('#viewList').show();
}


//--------VERIFY BUTTON EVENT------------------//
const renderVerifyBtn = function(){
  event.preventDefault(); //sets page for input
 defaultPageLook();
 $('#officeNumInput').hide();
 $('#employeePhoneInput').hide();
 $('#magGlass').hide();
 $('#verifyMagGlass').show();
}
const renderVerifyEmployee = function(event){ //when "submitting" a verify search
  const verifyName = $('#nameInput').val(); 
  console.log(verifyName);
  for(i=0; i<employeeList.length; i++){
    console.log(employeeList[i].name);
    if(verifyName == employeeList[i].name){
      console.log(employeeList[i]);
      $('#viewList').empty();
      $('#viewList').show();

        }
  }
}
  


$("#viewBtn").on("click", renderViewBtn);
$("#addBtn").on("click", renderAddBtn);
$('#addSign').on('click', renderAddEmployee);
$('#verifyBtn').on('click', renderVerifyBtn);
$('#verifyMagGlass').on('click',renderVerifyEmployee);

