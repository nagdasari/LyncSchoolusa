var returnTrue=true;var returnFalse=false;var returnValue=true;var emailRegex=/^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;var phoneregex=/^\d{10}$/;var filetyperegex=/\.(pdf|doc|docx)$/i;var address=/^[ A-Za-z0-9_@./#&+-]*$/;var cityregex=/^[a-zA-Z\s]+$/;var stateregex=/^[a-zA-Z\s]+$/;var fnameregex=/^[a-zA-Z\s]+$/;var lnameregex=/^[a-zA-Z\s]+$/;var fileLimit=2*1024*1024;var mandatoryFieldElements;var errorMsgCarrier;function checkForValidInput(){returnValue=true;var manFieldEl=document.getElementsByClassName('reqfield');for(i=0;i<manFieldEl.length;i++){var nameAttrValue=manFieldEl[i].getAttribute('name');switch(nameAttrValue){case'fname':if(!fnameregex.test(manFieldEl[i].value)){addErrorMessage(manFieldEl[i],"This is an invalid name");returnValue=false;}
break;case'lname':if(!lnameregex.test(manFieldEl[i].value)){addErrorMessage(manFieldEl[i],"Enter a valid Last Name");returnValue=false;}
break;case'email':if(!emailRegex.test(manFieldEl[i].value)){addErrorMessage(manFieldEl[i],"Enter a valid Email");returnValue=false;}
break;case'mobile':if(!phoneregex.test(manFieldEl[i].value)){addErrorMessage(manFieldEl[i],"Enter a valid Mobile Number");returnValue=false;}
break;case'add':if(!address.test(manFieldEl[i].value)){addErrorMessage(manFieldEl[i],"Enter a valid Address");returnValue=false;}
break;case'city':if(!cityregex.test(manFieldEl[i].value)){addErrorMessage(manFieldEl[i],"Enter a valid City");returnValue=false;}
break;case'state':if(!stateregex.test(manFieldEl[i].value)){addErrorMessage(manFieldEl[i],"Enter a valid State");returnValue=false;}
break;case'filen':if(!filetyperegex.test(manFieldEl[i].value)){addErrorMessage(manFieldEl[i],"Please select only pdf, doc or docx ");returnValue=false;}
else{var file=document.getElementById('filen').files[0];console.log(file.size+" Filss size");if(file.size>fileLimit){addErrorMessage(manFieldEl[i],"Please select a file below 2 MB");console.log(file.size-fileLimit);returnValue=false;}}
break;}}}
function regExpValidation(elementname,addingMsg){}
function addErrorMessage(emptyfieldelement,validcharacters){console.log('error message '+validcharacters);var elementName=emptyfieldelement.parentNode;var existingErrMsgCarier=elementName.querySelector('.errormsg');if(existingErrMsgCarier){if(validcharacters){if(!existingErrMsgCarier.innerHTML==="Mandatory Field"||existingErrMsgCarier.innerHTML===""){existingErrMsgCarier.innerHTML=validcharacters;}else{}}}else{errorMsgCarrier=document.createElement('span');errorMsgCarrier.setAttribute('class','errormsg');if(validcharacters){errorMsgCarrier.innerHTML=validcharacters}else{errorMsgCarrier.innerHTML="Mandatory Field"}
emptyfieldelement.parentNode.appendChild(errorMsgCarrier);}}
function removeErrorMessage(filledelement){filledParentElement=filledelement.parentNode;var removeErrorMsg=filledParentElement.querySelector('.errormsg');removeErrorMsg.innerHTML='';}
function checkForEmptyFields(){mandatoryFieldElements=document.getElementsByClassName('reqfield');console.log('checkForEmptyFields'+ mandatoryFieldElements)
for(i=0;i<mandatoryFieldElements.length;i++){if(mandatoryFieldElements[i].value===""){console.log('empty field element  '+ mandatoryFieldElements[i]);addErrorMessage(mandatoryFieldElements[i]);mandatoryFieldElements[i].onfocusout=function(){if(this.value===""){addErrorMessage(this);}else{removeErrorMessage(this);debugger;checkForValidInput();}}}}}
var allReqFields=document.getElementsByClassName('reqfield');for(i=0;i<allReqFields.length;i++){allReqFields[i].onfocusout=function(){checkForEmptyFields();checkForValidInput();}}
function validateEnteredValues(){}
function onSubmit(){console.log("on submit function");checkForEmptyFields();checkForValidInput();console.log(returnValue+'Return Value');if(returnValue){}
return returnValue;}
