import "./App.css";
import Box from "./component/Box";
import {useState} from "react";

// 1. 박스 2개
// 2. 가위 바위 보 버튼
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택
// 5. 3 4 의 결과를 가지고 누가 이기는지
// 6. 테두리 컬러

const choice = {
    rock : {
        name: "rock",
        img: "https://image.auction.co.kr/itemimage/28/65/8e/28658ea5e6.jpg",
    },
    scissors : {
        name: "scissor",
        img: "https://m.bibon.co.kr/web/product/big/202101/833fa88eae073a583699cc737f0b8a91.jpg",
    },
    paper : {
        name: "paper",
        img: "https://i.namu.wiki/i/HZUMLJivyd1QwdPZfAO8OB2kRCdjbZCnS2o5m5mKCtj9ZSZtULRv9eSLQtbMLoVyRzyw0H8XSGIeb8QIVude1A.webp",
    },
}

function App() {
    const [userSelect, setUserSelect] = useState(null);
    const [computerSelect, setComputerSelect] = useState(null);
    const [result, setResult] = useState("");

    const play = (userChoice) => {
        setUserSelect(choice[userChoice]);
        let computerChoice = randomChoice();
        setComputerSelect(computerChoice)
        setResult(judgement(choice[userChoice], computerChoice))
    }

    const judgement = (user, computer) => {
        if(user.name === computer.name) {
            return "tie"
        }  else if(user.name === "rock") return computer.name === "scissor" ? "win" : "lose"
        else if(user.name === "scissor") return computer.name === "paper" ? "win" : "lose"
        else if(user.name === "paper") return computer.name === "rock" ? "win" : "lose"
    }

    const randomChoice = () => {
        let itemArray = Object.keys(choice);
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem];
        return choice[final]
    }

  return (
    <div>
      <div className="main">
        <Box title="YOU" item={userSelect} result={result} />
        <Box title="COMPUTER" item={computerSelect} result={result === "win" ? "lose" : result === "lose" ? "win" : result ? "tie" : ''} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
