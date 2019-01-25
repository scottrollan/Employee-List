//--------SETTING SOME DEFAULTS--------------//
$('#addSign').hide();


//--------VIEW BUTTON EVENT------------------//
const renderViewBtn = function (event) {
  event.preventDefault();
  defaultPageLook();
  $('#viewList').show();

  $('#inputArea').hide();
  for(let i = 0; i < employeeList.length; i++){
    const nameIn = employeeList[i].name;
    const officeIn = employeeList[i].officeNum;
    const phoneIn = employeeList[i].phoneNum;
    $("#viewList").append(`<div>
		<h4>Name:  ${nameIn}</h4>
		<p>Office Number:  ${officeIn}</p>
		<p>Phone number: ${phoneIn}</p>
	</div>`);
  }
}


//--------ADD BUTTON EVENT------------------//
const renderAddBtn = function (event) {
  event.preventDefault(); //sets page for input
  $('#magGlass').hide();
  $('#addSign').show();
  $('#inputArea').leftIndent(initial);

  // document.getElementById("inputArea").style.marginLeft = "20px";
}
  const renderAddEmployee = function(event){ //actual input received and appended
  const addNameIn = $('#nameInput').val(); 
  const addOfficeIn = $('#officeNumInput').val();
  const addPhoneIn = $('#employeePhoneInput').val();
  for(let i = 0; i < employeeList.length; i++){
    const nameIn = employeeList[i].name;
    const officeIn = employeeList[i].officeNum;
    const phoneIn = employeeList[i].phoneNum;
    $("#viewList").append(`<div>
		<h4>Name:  ${nameIn}</h4>
		<p>Office Number:  ${officeIn}</p>
		<p>Phone number: ${phoneIn}</p>
	</div>`);
  }
  $("#viewList").append(`<div>
  <h4>Name:  ${addNameIn}</h4>
  <p>Office Number:  ${addOfficeIn}</p>
  <p>Phone number: ${addPhoneIn}</p>
</div>`);
$('#viewList').show();
}


//--------VERIFY BUTTON EVENT------------------//
const renderVerifyBtn = function(){ //This happens when VERIFY is clicked on the side menu
  event.preventDefault(); //sets page for input
 defaultPageLook();
 $('#officeNumInput').hide();
 $('#employeePhoneInput').hide();
 $('#magGlass').hide();
 $('#verifyMagGlass').show();
 $('#inputArea').leftIndent("44%");
 $('#viewList').show();

}
const renderVerifyEmployee = function(event){ //thsi happens when "submitting" a verify search
  const verifyName = $('#nameInput').val(); 
  let isHere = false;
  let nameIn = '';
  let officeIn = '';
  let phoneIn = '';
  $('#viewList').empty();
  for(i=0; i<employeeList.length; i++){
    if(verifyName == employeeList[i].name){
      isHere = true;
      nameIn = employeeList[i].name;
      officeIn = employeeList[i].officeNum;
      phoneIn = employeeList[i].phoneNum;
      break;
    }
    else {
      isHere = false;
    }
  }
    if(isHere){
      $("#viewList").prepend(`<h2>Yes, ${nameIn} is in our system.</h2>
      <div>
      <h4>Name:  ${nameIn}</h4>
      <p>Office Number:  ${officeIn}</p>
      <p>Phone number: ${phoneIn}</p>
      </div>`);
    }
    else{
      $('#viewList').prepend(`<h3>Sorry, ${verifyName} is not in our system.`)
    }
}
  


$("#viewBtn").on("click", renderViewBtn);
$("#addBtn").on("click", renderAddBtn);
$('#addSign').on('click', renderAddEmployee);
$('#verifyBtn').on('click', renderVerifyBtn);
$('#verifyMagGlass').on('click',renderVerifyEmployee);

