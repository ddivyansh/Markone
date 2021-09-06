//quiz application as a part of level zero of neog camp
var readInput=require("readline-sync");
var userName=readInput.question('Enter your name: ');
console.log('Welcome to the quiz game '+userName+' !!');
var score=0;
var questionOne=
{
  //object
  question:"Who's your favourite superhero ?",
  answer:"Flash"
}
var questionTwo=
{
  question:"Where do I work ?",
  answer:"TCS"
}
function calculateScore(question,answer)
{
if(answer.toUpperCase()==question.answer.toUpperCase())
score=score+1;
else
console.log("BOO !! Wrong answer");
}
//array of the objects
var arrayOfQuestions=[questionOne,questionTwo];
for(var i=0;i<arrayOfQuestions.length;i++)
{
  var currentQuestion=arrayOfQuestions[i];
  console.log(currentQuestion.question);
  var answer=readInput.question("Enter your answer: ");
  calculateScore(currentQuestion,answer);
}
console.log("Your final score is: "+score);
