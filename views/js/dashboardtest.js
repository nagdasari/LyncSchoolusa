
var pos = 0, test, status, question, choice, choices, c1, c2, c3, c4, i,count = 0;
 var arr = [];
var questions = [
  [ "Which element attribute is used to define the inline styles", "Class", "Font", "Styles", "Style","D" ],
   [ "How do you group selectors?", "Separate each selector with a comma", "Separate each selector with a space", "Separate each selector with a plus sign","None", "A" ],
   [ "How do you select all p elements inside a div element?", "div+p", "div p", "div.p","none", "B" ],
   ["Which tags are used to add rows to table?","&lt;th&gt; and &lt;/th&gt;","&lt;td&gt; and &lt;/td&gt;","&lt;tr&gt; and &lt;/tr&gt;","none","C"],
   ["How can you make a list that lists the items with numbers?","&lt;ol&gt;","list","&lt;li&gt;","display:list","A"]
];
function Question(){
    test=document.getElementById("test");
    if(pos >= questions.length){ 
        status=document.getElementById("status").innerHTML= "Test Completed";
        var image=document.createElement('img');
        var division=document.createElement('div');
        var submitButton=document.createElement('button');
        submitButton.setAttribute('class',"btn","btn-success");da
        submitButton.innerHTML="submit";
        test.appendChild(submitButton);
        /*image.src="cert.png";
        division.id="badgeDiv";
        image.id='badge';
        test.appendChild(division);
        division.appendChild(image);
        
        if (count==5) {
            var onestar=document.createElement('img');
            onestar.src="5.png"
            onestar.id='onestar';
            test.appendChild(onestar);
        }
        if (count>5&&count<10) {
            var twostar=document.createElement('img');
            twostar.src="2.png";
            twostar.id='onestar';
            test.appendChild(twostar);
        }
        if (count>10&&count<=14) {
            var threestar=document.createElement('img');
            threestar.src="3.png";
            threestar.id='onestar';
            test.appendChild(threestar);
        }    
        if (count>14&&count<=19) {
            var fourstar=document.createElement('img');
            fourstar.src="4.png";
            fourstar.id='onestar';
            test.appendChild(fourstar);
        }
        if (count==20) {
            var fivestar=document.createElement('img');
            fivestar.src="5.png";
            fivestar.id='onestar';
            test.appendChild(fivestar);
        }*/
        /*console.log(count);*/         
        pos=0;
        count = 0;
        return false;
    }else{
    if(pos<=4) {
    status=document.getElementById("status").innerHTML = "Question "+(pos+1);   
        }
    }
    question = questions[pos][0];
    c1 = questions[pos][1];
    c2 = questions[pos][2];
    c3 = questions[pos][3];
    c4 = questions[pos][4];
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> "+"<span>"+c1+"</span>"+"<br>"+"<hr>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> "+"<span>"+c2+"</span>"+"<br>"+"<hr>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> "+"<span>"+c3+"</span>"+"<br>"+"<hr>";
    test.innerHTML += "<input type='radio' name='choices' value='D'> "+"<span>"+c4+"</span>"+"<br>"+"<hr>";
    test.innerHTML += "<button onclick='checkAnswer()' id='btn1'>Next</button>";
    /*if (pos>0) {
         test.innerHTML += "<button id='btn2' onclick='previousAnswer()'>Previous</button>";
    }*/

}
function checkAnswer(){
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++)
    {
        if(choices[i].checked){
            choice = choices[i].value;
        }
    }
    if(choice == questions[pos][5]){
        count++;
    }   
    checkForEmptyOption();
     
}
function checkForEmptyOption(){
    choices = document.getElementsByName("choices");
    var check;
    for(var i=0; i<choices.length; i++){
       if(choices[i].checked){
            pos++;
            Question();
            check = true;
            arr.push(check);
        } else{
            check = false;
            arr.push(check);
        }
    }
    fillEmptyOption();
}
function fillEmptyOption(){
    var pop = arr.sort().pop();
    if(pop==false){
        alert('Select Option');
    }
}

window.addEventListener("load", Question, true);
