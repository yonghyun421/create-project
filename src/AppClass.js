import React, {Component} from 'react';
import Box from "./component/Box";
import "./App.css";

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

class AppClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userSelect: null,
            computerSelect: null,
            result: "",
        }
    }

    play = (userChoice) => {
        this.setState({userSelect: choice[userChoice]});
        let computerChoice = this.randomChoice();
        this.setState({computerSelect: computerChoice})
        this.setState({result: this.judgement(choice[userChoice], computerChoice)})
    }

    judgement = (user, computer) => {
        if(user.name === computer.name) {
            return "tie"
        }  else if(user.name === "rock") return computer.name === "scissor" ? "win" : "lose"
        else if(user.name === "scissor") return computer.name === "paper" ? "win" : "lose"
        else if(user.name === "paper") return computer.name === "rock" ? "win" : "lose"
    }

    randomChoice = () => {
        let itemArray = Object.keys(choice);
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem];
        return choice[final]
    }

    render() {
        return (
            <div>
                <div className="main">
                    <Box title="YOU" item={this.state.userSelect} result={this.state.result}/>
                    <Box title="COMPUTER" item={this.state.computerSelect}
                         result={this.state.result === "win" ? "lose" : this.state.result === "lose" ? "win" : this.state.result ? "tie" : ''}/>
                </div>
                <div className="main">
                    <button onClick={() => this.play("scissors")}>가위</button>
                    <button onClick={() => this.play("rock")}>바위</button>
                    <button onClick={() => this.play("paper")}>보</button>
                </div>
            </div>
        );
    }
}

export default AppClass;
