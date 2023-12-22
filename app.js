let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const usreScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice =()=>{
    const options=["rock", "paper", "scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () =>{
    msg.innerText="Game was Draw. Play again. ";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin, userChoice, CompChoice)=>{
    if(userWin){
        userScore++;
        usreScorePara.innerText=userScore;
        msg.innerText= `You Win! Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText= `You Lost. ${CompChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    // Generate Computer Choices
    const CompChoice= genCompChoice();

    if(userChoice === CompChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissor, paper
            userWin=CompChoice==="paper"?false:true;
        }else if(userChoice==="paper") {
            //rock,paper
            userWin=CompChoice==="scissors"?false:true;
        }else{
            //rock,paper
            userWin=CompChoice==="rock"? false:true;
        }
        showWinner(userWin, userChoice, CompChoice);
    }
};

choices.forEach((choice)=>{
        choice.addEventListener("click",()=>{
            const userChoice=choice.getAttribute("id");
            playGame(userChoice);
        });
});


