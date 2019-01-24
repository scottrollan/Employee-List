//--------SETTING SOME DEFAULTS--------------//
$('#addSign').hide();


//--------VIEW BUTTON EVENT------------------//
const renderViewBtn = function (event) {
  event.preventDefault();
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
$("#viewBtn").on("click", renderViewBtn);


//--------ADD BUTTON EVENT------------------//
const renderAddBtn = function (event) {
  event.preventDefault(); //sets page for input
  $('#viewList').hide();
  $('#inputArea').show();
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
// $('#inputArea').hide();
$('#viewList').show();
}
$("#addBtn").on("click", renderAddBtn);
$('#addSign').on('click', renderAddEmployee);
$('#verifyBtn').on('click', renderVerifyBtn);