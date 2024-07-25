// Quiz data
const quizData = {
  pipes: [
    {    //First question
      question: "If a pipe can fill a tank in 6 hours, how long will 4 such pipes take to fill the tank?",
      options: {
        A: "24 hours",
        B: "12 hours",
        C: "8 hours",
        D: "6 hours"
      },
      correctAnswer: "B"
    },
    { //second question
      question: " It takes 6 hours for three pipes, X, Y and Z to fill a tank. When the three worked together for 2 hours, Z was closed and, X and Y filled the remaining tank in 7 hours. How many hours would it take Z alone to fill the tank?",
      options: {
        A: "15 hours",
        B: "23 hours",
        C: "17 hours",
        D: "14 hours"
      },
      correctAnswer: "D"
    },
    { //third question
      question: " It takes 6 hours for three pipes, X, Y and Z to fill a tank. When the three worked together for 2 hours, Z was closed and, X and Y filled the remaining tank in 7 hours. How many hours would it take Z alone to fill the tank?",
      options: {
        A: "800",
        B: "810",
        C: "850",
        D: "790"
      },
      correctAnswer: "B"
    },
    { //Fourth question
      question: " It takes 6 hours for three pipes, X, Y and Z to fill a tank. When the three worked together for 2 hours, Z was closed and, X and Y filled the remaining tank in 7 hours. How many hours would it take Z alone to fill the tank?",
      options: {
        A: "25 min",
        B: "55 min",
        C: "83 min",
        D: "60 min"
      },
      correctAnswer: "D"
    }, { //fifth question
      question: "Two pipes A and B can fill a tank in 24 min., and 32 min, respectively. If both the pipes are opened simultaneously, after how much time B should be closed so that the tank is full in 18 minutes?",
      options: {
        A: "8 min",
        B: "16 min",
        C: "7 min",
        D: "18 min"
      },
      correctAnswer: "A"
    }, { //sixth question
      question: "A, B and C are three pipes connected to a tank. A and B together fill the tank in 30 hours, B and C together fill the tank in 40 hours. A and C together fill the tank in 60 hours. In how much time will A, B and C fill the tank separately?",
      options: {
        A: "80,60,120",
        B: "60,120,240",
        C: "80,48,240",
        D: "80,60,240"
      },
      correctAnswer: "C"
    }, { //seventh question
      question: "Two pipes can alone independently fill a bucket in 10 and 12 minutes. Both are opened together for 3 minutes after which the second pipe is turned off. What is the time taken by the first pipe alone to fill the remaining portion of the bucket?",
      options: {
        A: "3 minutes",
        B: "5.5 minutes",
        C: "6 minutes",
        D: "4.5 minutes"
      },
      correctAnswer: "D"
    }, { //Eighth question
      question: "A tank is filled by 3 pipes, second pipe take 5 hours more than first pipe and 5 hours less than third pipe to fill the tank alone. If second and third pipe together take 1 hour more than first pipe to fill the tank then find out how much time second pipe will take to fill the tank alone?",
      options: {
        A: "10 hours",
        B: "6 hours",
        C: "12 hours",
        D: "8 hours"
      },
      correctAnswer: "A"
    }, { //ninth question
      question: "A cistern has two pipes. One can fill it with water in 16 hours and other can empty it in 10 hours. In how many hours will the cistern be emptied if both the pipes are opened together when 3/5th of the cistern is already filled with water?",
      options: {
        A: "14 hours",
        B: "16 hours",
        C: "20 hours",
        D: "18 hours"
      },
      correctAnswer: "B"
    }, { //tenth question
      question : "Two pipes  A and B can fill a tank in 24 min., and 32 min, respectively. If both the pipes are opened simultaneously, after how much time B should be closed so that the tank is full in 18 minutes?",
      options: {
        A: "8 min",
        B: "6 min",
        C: "17 min",
        D: "8 min"
      },
      correctAnswer: "A"
    },
    //  the Pipes and Cisterns category question ends here
  ],
  //probability questions start 
  probability: [
    { //1st question
      question: "What is the probability of getting a prime number when rolling a fair six-sided die?",
      options: {
        A: "1/2",
        B: "1/3",
        C: "1/6",
        D: "1/4"
      },
      correctAnswer: "C"
    },
    { //2nd question
      question: " An event in the probability that will never be happened is called as -?",
      options: {
        A: "Unsure event",
        B: "Sure event",
        C: "Possible event",
        D: "Imposible event"
      },
      correctAnswer: "D"
    },
    { //3rd question
      question: " What is the probability of getting a sum as 3 if a dice is thrown?",
      options: {
        A: "2/18",
        B: "1/18",
        C: "1/36",
        D: "4"
      },
      correctAnswer: "B"
    },
    { //4th question
      question: "What is The probability of getting two tails when two coins are tossed?",
      options: {
        A: "1/2",
        B: "1/3",
        C: "1/6",
        D: "1/4"
      },
      correctAnswer: "D"
    },
    { //5th question
      question: "What is the probability of getting getting the sum as a prime number if two dice are thrown?",
      options: {
        A: "5/24",
        B: "5/12",
        C: "5/30",
        D: "1/4"
      },
      correctAnswer: "B"
    },
    { //6th question
      question: "What is the probability of getting atleast one head if three unbiased coins are tossed?",
      options: {
        A: "1/2",
        B: "7/8",
        C: "1/6",
        D: "8/9"
      },
      correctAnswer: "B"
    },
    { //7th question
      question: "What is the probability of getting 1 and 5 if a dice is thrown once?",
      options: {
        A: "1/6",
        B: "1/3",
        C: "2/3",
        D: "1/4"
      },
      correctAnswer: "B"
    },
    { //8th question
      question: "What is the probability of  losing a game if the winning probability is 0.3?",
      options: {
        A: "0.5",
        B: "0.6",
        C: "0.7",
        D: "0.8"
      },
      correctAnswer: "C"
    },
    { //9th question
      question: "If two dice are thrown together, what is the probability of getting an even number on one dice and an odd number on the other dice??",
      options: {
        A: "1/2",
        B: "1/3",
        C: "1/6",
        D: "1/4"
      },
      correctAnswer: "A"
    },
    { //10th question
      question: "A card is drawn from a pack of 52 cards. What is the probability of getting a king of a black suit?",
      options: {
        A: "1/26",
        B: "1/52",
        C: "3/26",
        D: "7/52"
      },
      correctAnswer: "A"
    },
    //Probability questions end
  ],
  age: [ // question reelated to age topic is strted
    { //1st
      question: "A father is three times as old as his son. After 15 years, he will be twice as old as his son. What are their ages now?",
      options: {
        A: "Father: 45 years, Son: 15 years",
        B: "Father: 30 years, Son: 10 years",
        C: "Father: 40 years, Son: 20 years",
        D: "Father: 35 years, Son: 15 years"
      },
      correctAnswer: "D"
    }, 
    {//2nd
      question: "A father said to his son,I was as old as you are at the present at the time of your birth. If the father's age is 38 years now, the son's age five years back was:",
      options: {
        A: " 14 years",
        B: " 19 years",
        C: " 20 years",
        D: " 38 years"
      },
      correctAnswer: "A"
    },
    {//3rd
      question: " A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B",
      options: {
        A: "7",
        B: "8",
        C: "9",
        D: "10"
      },
      correctAnswer: "D"
    },
    {//4th
      question: "Present ages of Sameer and Anand are in the ratio of 5 : 4 respectively. Three years hence, the ratio of their ages will become 11 : 9 respectively. What is Anand's present age in years",
      options: {
        A: "24 years",
        B: "27 years",
        C: "40 years",
        D: "None of this"
      },
      correctAnswer: "A"
    },
    {//5th
      question: "A man is 24 years older than his son. In two years, his age will be twice the age of his son. The present age of his son is:",
      options: {
        A: " 15 years",
        B: " 18 years",
        C: " 20 years",
        D: " 22 years"
      },
      correctAnswer: "D"
    },
    {//6th
      question: "Six years ago, the ratio of the ages of Kunal and Sagar was 6 : 5. Four years hence, the ratio of their ages will be 11 : 10. What is Sagar's age at present?",
      options: {
        A: " 15 years",
        B: " 10 years",
        C: " 16 years",
        D: " 15 years"
      },
      correctAnswer: "C"
    },
    {//7th
      question: "The sum of the present ages of a father and his son is 60 years. Six years ago, father's age was five times the age of the son. After 6 years, son's age will be:",
      options: {
        A: " 15 years",
        B: " 14 years",
        C: " 20 years",
        D: " 25 years"
      },
      correctAnswer: "C"
    }, 
    {//8th
      question: "At present, the ratio between the ages of Arun and Deepak is 4 : 3. After 6 years, Arun's age will be 26 years. What is the age of Deepak at present ?",
      options: {
        A: " 10 years",
        B: " 15 years",
        C: " 20 years",
        D: " 38 years"
      },
      correctAnswer: "B"
    },
    {//9th
      question: "Sachin is younger than Rahul by 7 years. If their ages are in the respective ratio of 7 : 9, how old is Sachin?",
      options: {
        A: " 16 years",
        B: " 18 years",
        C: " 28 years",
        D: "24.5 years"
      },
      correctAnswer: "D"
    },
    {//10th
      question: "The present ages of three persons in proportions 4 : 7 : 9. Eight years ago, the sum of their ages was 56. Find their present ages",
      options: {
        A: "8, 20, 28",
        B: "16, 28, 36",
        C: "20, 35, 45",
        D: "8, 28,20"
      },
      correctAnswer: "B"
    },
    // Age question ends 
  ],
  profit: [ // question related to profit starts
    {//question 1
      question: "A shopkeeper sells a shirt for $250 and earns a profit of 25%. What is the cost price of the shirt?",
      options: {
        A: "$200",
        B: "$225",
        C: "$190",
        D: "$240"
      },
      correctAnswer: "A"
    },
    {//question 2
      question: "The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:",
      options: {
        A: "15",
        B: "16",
        C: "18",
        D: "25"
      },
      correctAnswer: "B"
    },
    {//question 3
      question: "In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit?",
      options: {
        A: "30%",
        B: "70%",
        C: "100%",
        D: "240%"
      },
      correctAnswer: "B"
    },
    {//question 4
      question: "A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%??",
      options: {
        A: "3",
        B: "4",
        C: "5",
        D: "6"
      },
      correctAnswer: "C"
    },
    {//question 5
      question: " The percentage profit earned by selling an article for Rs. 1920 is equal to the percentage loss incurred by selling the same article for Rs. 1280. At what price should the article be sold to make 25% profit?",
      options: {
        A: "2000",
        B: "2200",
        C: "1950",
        D: "Data Inadequet"
      },
      correctAnswer: "A"
    },
    {//question 6
      question: "A shopkeeper expects a gain of 22.5% on his cost price. If in a week, his sale was of Rs. 392, what was his profit?",
      options: {
        A: "Rs 18.20",
        B: "Rs 70",
        C: "Rs 72",
        D: "Rs 88.25"
      },
      correctAnswer: "C"
    },
    {//question 7
      question: "A man buys a cycle for Rs. 1400 and sells it at a loss of 15%. What is the selling price of the cycle?",
      options: {
        A: "Rs 1090",
        B: "Rs 1160",
        C: "Rs 1190",
        D: "Rs 1202"
      },
      correctAnswer: "C"
    },
    {//question 8
      question: "Sam purchased 20 dozens of toys at the rate of Rs. 375 per dozen. He sold each one of them at the rate of Rs. 33. What was his percentage profit",
      options: {
        A: "5.6",
        B: "4.5",
        C: "5.9",
        D: "6.5"
      },
      correctAnswer: "A"
    },
    {//question 9
      question: "On selling 17 balls at Rs. 720, there is a loss equal to the cost price of 5 balls. The cost price of a ball is:",
      options: {
        A: "Rs 45",
        B: "Rs 50",
        C: "Rs 55",
        D: "Rs 60"
      },
      correctAnswer: "D"
    },
    {//question 10
      question: "A trader mixes 26 kg of rice at Rs. 20 per kg with 30 kg of rice of other variety at Rs. 36 per kg and sells the mixture at Rs. 30 per kg. His profit percent is:",
      options: {
        A: "5%",
        B: "8%",
        C: "10%",
        D: "None of above"
      },
      correctAnswer: "B"
    },
    // Quiz end here
  ]
};

// Current quiz state
let currentCategory = '';
let currentQuestionIndex = 0;
let score = 0;
let startTime;
let attemptedQuestionsCount = 0;

// Start Quiz function
function startQuiz() {
const userName = document.getElementById('userName').value;
if (!userName) {
  alert('Please enter your name .');
  return;
  
}

document.getElementById('resultName').textContent = userName;
alert('Please select category to start QUIZ .');
return;

}

// Start Timer
let countdown = 100; // Initial countdown value

function startTimer() {
  startTime = new Date().getTime();
    timerInterval = setInterval(updateTimer, 1000); //It help to Update timer every second
}

function updateTimer() {
    if (countdown >= 0) {
        document.getElementById('timer').textContent = `Timer: ${countdown} seconds;` // Update timer display
        countdown--; // Decrease countdown by 1 second
    } else {
        clearInterval(timerInterval); // Stop timer when countdown reaches 0
        endQuiz(); // End quiz when timer runs out
    }
}

// Load Questions
function loadQuestion(category) {
const questionContainer = document.getElementById('questionContainer');
questionContainer.innerHTML = '';
const question = quizData[category][currentQuestionIndex];
const questionElement = document.createElement('div');
questionElement.innerHTML = `
  <h2 style="text-align: center;color: #48c6f8;">Category: ${category}</h2>
  <p>Question ${currentQuestionIndex + 1}:</p>
  <p>${question.question}</p>
  <button onclick="checkAnswer('A')">${question.options.A}</button>
  <button onclick="checkAnswer('B')">${question.options.B}</button>
  <button onclick="checkAnswer('C')">${question.options.C}</button>
  <button onclick="checkAnswer('D')">${question.options.D}</button>
`;
questionContainer.appendChild(questionElement);

}

// Check Answer
function checkAnswer(selectedOption) {
  const question = quizData[currentCategory][currentQuestionIndex];
  const correctAnswer = question.correctAnswer;
  if (selectedOption === correctAnswer) {
    score++;
    document.getElementById('score').textContent = `Score: ${score};`
  }
  currentQuestionIndex++;
  attemptedQuestionsCount++;
  if (currentQuestionIndex < 10) {
    loadQuestion(currentCategory);
  } else {
    endQuiz();
  }
}


// End Quiz
function endQuiz() {
  clearInterval(timerInterval);
  const endTime = new Date().getTime();
  const countedTime = Math.floor((endTime - startTime)/1000 );
  const totalTimeSeconds = countedTime - 2;
  const totalQuestions = 10;
  const attemptedQuestions = attemptedQuestionsCount;
  const correctAnswers = score;
  const wrongAnswers = attemptedQuestions - correctAnswers;
  const scorePercentage = Math.floor((correctAnswers / totalQuestions) * 100);

  document.getElementById('totalTime').textContent = `${(totalTimeSeconds)} seconds;`
  document.getElementById('totalQuestions').textContent = totalQuestions;
  document.getElementById('attemptedQuestions').textContent = attemptedQuestions;
  document.getElementById('correctAnswers').textContent = correctAnswers;
  document.getElementById('wrongAnswers').textContent = wrongAnswers;
  document.getElementById('scorePercentage').textContent = scorePercentage;

  showPage('resultPage');
}

// Go to Home
function goToHome() {
showPage('homePage');
window.location.reload();
}

// Show page function
function showPage(pageId) {
const pages = document.getElementsByClassName('page');
for (let page of pages) {
  page.style.display = 'none';
}
document.getElementById(pageId).style.display = 'block';
}

// Select Category
function selectCategory(category) {
currentCategory = category;
startTimer();
showPage('quizPage');
loadQuestion(currentCategory);
}

//previous Qustion 
function prevQuestion() {
currentQuestionIndex--;
if (currentQuestionIndex > 1) {
  loadQuestion(currentCategory);
} else {
  loadQuestion(category);
}
}
// Next Question
function nextQuestion() {
currentQuestionIndex++;
if (currentQuestionIndex < 10) {
  loadQuestion(currentCategory);
} else {
  endQuiz();
}
}

function resetQuizState() {
  currentQuestionIndex = 0;
  clearInterval(timerInterval); // Clear the interval
  countdown = 100; // Reset countdown to its initial value
  document.getElementById('timer').textContent = `Timer: ${countdown} seconds;` // Update timer display
  startTimer();
 
  attemptedQuestionsCount = 0;
  score = 0;
  document.getElementById('score').textContent = `Score: ${score};`
}

function restartQuiz() {
  resetQuizState(); // Reset quiz state
  loadQuestion(currentCategory); // Load the first question of the current category
  showPage('quizPage'); // Show the quiz page
}

// Initialize the Quiz
showPage('homePage');