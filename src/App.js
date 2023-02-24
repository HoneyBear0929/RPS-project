import Box from "./component/Box";
import "./App.css";
import { useState } from "react";


const choice = {
  rock:{
    name:"Rock",
    img:"https://www.thoughtco.com/thmb/GwiOQBM_A1EEyU9RYEgX5SK3YlI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/rhyolite-1057171452-5c911d4b46e0fb000187a397.jpg",
    
  },
  scissors:{
    name:"Scissors",
    img:"http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTPrc5SXM6rvy7Nc1N9u8oXi9_yL3m2oEqHCfE6t_EUwWJ9zquoE6nJfvKj8B6m3gHQvFPtoOa55-r7gUoqgvo"
  },
  paper:{
    name:"Paper",
    img:"https://upload.wikimedia.org/wikipedia/commons/2/2f/Paper_450x450.jpg"
  }
}

function App() {

  const [userSelect,setUserSelect] = useState(null)
  const [computerSelect,setComputerSelect] = useState(null);
  const [result,setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice],computerChoice));
  };

  const judgement = (user,computer) => {
    console.log("user", user, "computer", computer);

    if(user.name == computer.name) {
      return "Draw"
    } else if(user.name == "Rock")return computer.name == "Scissors"?"win":"lose";
      else if(user.name == "Scissors")return computer.name == "Paper"?"win":"lose";
      else if(user.name == "Paper")return computer.name == "Rock"?"win":"lose";
  }

  const randomChoice=()=>{
    let itemArray = Object.keys(choice); //객체에 키 값만 뽑아서 Array로 만들어주는 함수.
    console.log("itemArray : ",itemArray);
    let randomItem = Math.floor(Math.random()*itemArray.length); //floor 소숫점 숫자를 버려주는.
    let final = itemArray[randomItem]
    console.log("final :",final);
    return choice[final]
  }

  return (
    <div>
      <div className="main">
        <Box title="You" item = {userSelect} result = {result} />
       <Box title="Computer" item = {computerSelect} result = {result}/>
      </div>
      <div className ="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
