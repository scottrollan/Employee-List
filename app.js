//--------SETTING SOME DEFAULTS--------------//
$('#updateIcon').hide();
$('#verifyMagGlass').hide();
$('#addSign').hide();
$('#deleteIcon').hide();
let isHere = false;
let nameIn = '';
let officeIn = '';
let phoneIn = '';



//--------VIEW BUTTON EVENT------------------//
const renderViewBtn = function (event) {
  event.preventDefault();
  defaultPageLook();
  $('#viewList').show();

  $('#inputArea').hide();
  for(let i = 0; i < employeeList.length; i++){
    nameIn = employeeList[i].name;
    officeIn = employeeList[i].officeNum;
    phoneIn = employeeList[i].phoneNum;
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
  defaultPageLook();
  $('#magGlass').hide();
  $('#addSign').show();


}
  const renderAddEmployee = function(event){ //actual input received and appended
  const addNameIn = $('#nameInput').val(); 
  const addOfficeIn = $('#officeNumInput').val();
  const addPhoneIn = $('#employeePhoneInput').val();
  for(let i = 0; i < employeeList.length; i++){
    nameIn = employeeList[i].name;
    officeIn = employeeList[i].officeNum;
    phoneIn = employeeList[i].phoneNum;
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
const renderVerifyBtn = function(event){ //This happens when VERIFY is clicked on the side menu
  event.preventDefault(); //sets page for input
  defaultPageLook();
  $('#officeNumInput').hide();
  $('#employeePhoneInput').hide();
  $('#magGlass').hide();
  $('#verifyMagGlass').show();
  $('#inputArea').leftIndent("44%");
  $('#viewList').show();
  $('#nameInput').value = "name";

}
const renderVerifyEmployee = function(event){ //thsi happens when "submitting" a verify search
  const verifyName = $('#nameInput').val(); 
  $('#viewList').empty();
  isHere=false;
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

  
  //********UPDATE BUTTON EVENT********************
  const renderUpdateBtn = function (event) {
    event.preventDefault(); //sets page for input
    defaultPageLook();
    $('#magGlass').hide();
    $('#addSign').hide();
    $('#updateIcon').show();
  
  
  }
    const renderUpdateEmployee = function(event){ //actual input received and appended
      const updateName = $('#nameInput').val();
      const updateOffice = $('#officeNumInput').val();
      const updatePhone = $('#employeePhoneInput').val();
      isHere=false;
      $('#viewList').empty();
      for(i=0; i<employeeList.length; i++){
        if(updateName == employeeList[i].name){
          isHere = true;
          break;
        }
        else {
          isHere = false;
        }
      }
    if(isHere){
    $("#viewList").append(`<h2>OK--this listing has been updated.</h2>
    <div>
    <h4>Name:  ${updateName}</h4>
    <p>Office Number:  ${updateOffice}</p>
    <p>Phone number: ${updatePhone}</p>
    </div>`);
    $('#viewList').show();
    }
    else{
      $('#viewList').prepend(`<h3>Sorry, ${verifyName} is not in our system.`)
    }
  }
  

    //********DELETE BUTTON EVENT********************

  const renderDeleteBtn = function(event){
    event.preventDefault(); //sets page for input
    defaultPageLook();
    $('#officeNumInput').hide();
    $('#employeePhoneInput').hide();
    $('#magGlass').hide();
    $('#verifyMagGlass').hide();
    $("addSign").hide();
    $('#inputArea').leftIndent("44%");
    $('#viewList').show();
    $('#deleteIcon').show();
    $('#nameInput').value = "name";
  }

    const renderDeleteEmployee = function(event){
      const deleteName = $('#nameInput').val(); 
      isHere = false;
       $('#viewList').empty();
      for(i=0; i<employeeList.length; i++){
        nameIn = employeeList[i].name;
        officeIn = employeeList[i].officeNum;
        phoneIn = employeeList[i].phoneNum;
        if(deleteName == employeeList[i].name ){
          isHere = true;
          deletedName = employeeList[i].name;
          $('#viewList').append(`
          <div>
          <h4>--- ${deleteName} has been deleted ---</h4>
          </div>`);
        }
        else{
          $('viewList').prepend(`Sorry, ${deleteName} does not exist and cannot be deleted`);
          $('#viewList').append(`
           <div>
           <h4>Name:  ${nameIn}</h4>
           <p>Office Number:  ${officeIn}</p>
           <p>Phone number: ${phoneIn}</p>
           </div>`);
          }
      }
      if(isHere){
        $("#viewList").prepend(`<h2>Confirmation: ${deletedName} has been deleted from our system.</h2>`);
      }
      else{
        $('#viewList').prepend(`<h3>Error: ${deleteName} is not in our system.`)
      }
    }

  
  
  
  const renderResetInputs = function() {
    document.querySelector('#nameInput').value = 'name';
    document.querySelector('#officeNumInput').value = 'office number';
    document.querySelector('#employeePhoneInput').value = 'phone number';
  }
  


$("#viewBtn").on("click", renderViewBtn);
$("#addBtn").on("click", renderAddBtn);
$('#addSign').on('click', renderAddEmployee);
$('#verifyBtn').on('click', renderVerifyBtn);
$('#verifyMagGlass').on('click',renderVerifyEmployee);
$('#updateBtn').on('click', renderUpdateBtn);
$('#updateIcon').on('click', renderUpdateEmployee);
$('#deleteBtn').on('click', renderDeleteBtn);
$('#deleteIcon').on('click', renderDeleteEmployee);
$('#menu').on('click',renderResetInputs);
