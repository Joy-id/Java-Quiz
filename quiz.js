

//Quiz object array 

let quizData =
[
    {
        question: "JavaScript and Java are completely different languages.",
        options: ["A.True", "B.False", "C.undefined", ],
        answer: "A.True",
    },

    {
        question: "Hidden HTML elements can be displayed using which of the following attributes? ",
        options: ["A.Innerhtml", "B.ID", "C.display", ],
        answer: "C.display",
    },

    {
        question: "What is used to separate Java Script statements?",
        options: ["A.IF", "B.Semicolon", "C.Div" ],
        answer: "B.Semicolon",
    },

    {
        question: "JavaScript variables are declared using?",
        options: ["A.let", "B.div, id, indices", "C.Functions" ],
        answer: "A.let",
    },

    {
        question: "In JavaScript objects can contain many values.",
        options: ["A.True", "B.False", "C.undefined" ],
        answer: "A.True",
    },

];


// Block of code for user interface 

let quizView  = document.querySelector(".data-card");

function quizApp() {

//  Quiz Score initialization 
let correctAnswer = 20;
let wrongAnswer = 0;
let result = 0;


//Mapping Quiz Data 
let quizArray = quizData.map((quiz, index) => 
{   


// HTML INTERFACE
return `<div class="row my-4 py-4">
         <div class="left col-6 d-flex flex-column fs-5">
         <div class="d-flex">
         <p class="col-1">${index + 1}</p>
          <p class="questions">${quiz.question}</p>
           </div>
            <select name="" id="select" class="col-4 fs-6 select">
            <option value="">Options</option>
             ${quiz.options.map((options) =>
                 {
                return `<option value=${options}>${options}</option>`;
                }
              )}
            </select>
               </div>
               <div class="right col-5 fs-5 p-3 ms-5 shadow bg-warning-subtle"> 
               <p> Quiz Result </p>
             <ul class="mb-5">
            <li class="fs-6 selected">Option:</li>
           <li class="fs-6 correct">Correct Answer:</li>     
          <li class="fs-6 status">Comment:</li>  
       </ul>  
    </div>
   </div> `;
});

quizView.innerHTML = quizArray.join(" ");


//Interactive Block of code

let selectElement = document.querySelectorAll(".select");
selectElement.forEach((select, index) => 

{

    select.addEventListener('change', (event) =>

 {
    let selectValue = event.target.value;
    
   let selected = document.querySelectorAll('.selected') [index];
    selected.innerHTML = `Option: ${selectValue}`;

    let correct =  document.querySelectorAll('.correct') [index];
    correct.innerHTML = `Correct Answer: ${quizData[index].answer}`;


// To display quiz  status 

  if(quizData[index].answer === selectValue)

   {
  document.querySelectorAll(".status") [index] .innerHTML = 'Comment: Correct';
  result += correctAnswer;
  document.querySelector(".score").innerHTML = `${result}`; 
  document.querySelector(".total") .innerHTML = `${result}`;
   }

  else {
    document.querySelectorAll(".status")[index].innerHTML ='Comment: Wrong';
    result += wrongAnswer;
    document.querySelector(".score").innerHTML = `${result}`; 
    document.querySelector(".total").innerHTML = `${result}`;   
   }

  });  

});

}
quizApp();


