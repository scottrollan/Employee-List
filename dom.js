const $ = function (selector) {
  const nodeList = document.querySelectorAll(selector);
 
 
   const text = function(content){
     for (let i = 0; i < nodeList.length; i++) {
       nodeList[i].innerText = content;
     }
   }
   
   const html = function(content){
     for (let i = 0; i < nodeList.length; i++) {
       nodeList[i].innerHTML = content;
     }
   }
 
   const addClass = function(className){
     for (let i = 0; i < nodeList.length; i++) {
       nodeList[i].classList.add(className);
     }
   }
 
   const removeClass = function(className){
     for (let i = 0; i < nodeList.length; i++) {
       nodeList[i].classList.remove(className);
     }
   }
 
   const toggleClass = function(className){
     for (let i = 0; i < nodeList.length; i++) {
       nodeList[i].classList.toggle(className);
     }
   }
 
   const empty = function(){
     for (let i = 0; i < nodeList.length; i++) {
       nodeList[i].innerHTML = '';
     }
   }
 
   const append = function(content){
     for (let i = 0; i < nodeList.length; i++) {
       nodeList[i].innerHTML += content;
     }
   }
 
   const prepend = function(content){
     for (let i = 0; i < nodeList.length; i++) {
       nodeList[i].innerHTML = content + nodeList[i].innerHTML;
     }
   }
 
   //important for homework, really only used on inputs
   const val = function (content) {
       if(content === undefined){
         return nodeList[0].value; 
       } else {
         nodeList[0].value = content;
       }     
   }
 
   const on = function (action, cb) {
     for (let i = 0; i < nodeList.length; i++) {
       nodeList[i].addEventListener(action, cb);
     }
   }
 
   const show = function () {
     for (let i = 0; i < nodeList.length; i++) {
       nodeList[i].style.display = '';
     }
   }
 
   const hide = function () {
     for (let i = 0; i < nodeList.length; i++) {
       nodeList[i].style.display = 'none';
     }
   }
 
   const leftIndent = function (content) {
     for (let i = 0; i < nodeList.length; i++) {
       nodeList[i].style.marginLeft = content;
     }
   }
 
 
   return {
     text: text,
     html: html,
     addClass: addClass,
     removeClass: removeClass,
     toggleClass: toggleClass,
     empty: empty,
     append: append,
     prepend: prepend,
     on: on,
     val: val,
     show: show,
     hide: hide,
     leftIndent: leftIndent,
   };
 }
 
 const defaultPageLook = function() {
   event.preventDefault(); //sets page for input
   $('#inputArea').show();
   $('#nameInput').show();
   $('#nameInput').value = 'name'
   $('#officeNumInput').show();
   $('#employeePhoneInput').show();
   $('#magGlass').show();
   $('#addSign').hide();
   $('#updateIcon').hide();
   $('#verifyMagGlass').hide();
   $('#deleteIcon').hide();
   $('#viewList').empty();
   $('#inputArea').leftIndent("21%");
 }