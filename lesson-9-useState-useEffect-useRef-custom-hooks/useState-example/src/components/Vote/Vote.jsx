import { useState } from "react";

import VoteActions from "./VoteActions";
import VoteResults from './VoteResults';
import Block from "./Block";

import styles from "./vote.module.scss";

const Vote = () => {
    const [state, setState] = useState({
        democrate: 0,
        republic: 0,
    });

    const leaveVote = (propertyName) => {
        setState(prevState => {
            return {
                ...prevState, 
                [propertyName]: prevState[propertyName] + 1
            }
        });
    }

    const {democrate, republic} = state;
    const total =  democrate + republic;

    const countPercentage = (propertyName) => {
        if(!total) {
            return 0;
        }
        const value = state[propertyName];
        const result = (value / total) * 100;
        return Number(result.toFixed(2));
    }

    const democratePercent = countPercentage("democrate");
    const republicPercent = countPercentage("republic");

    return (
        <div className={styles.wrapper}>
            <Block title="Отдать голос">
                <VoteActions leaveVote={leaveVote} />
            </Block>
            <Block title="Результаты">
                <VoteResults total={total} democrate={democrate} republic={republic} democratePercent={democratePercent} republicPercent={republicPercent}  />
            </Block>
        </div>
    )

}
/*
class Vote extends Component {
    state = {
        democrate: 0,
        republic: 0,
    }

    countTotal() {
        const {democrate, republic} = this.state;
        return democrate + republic;
    }

    countPercentage(propertyName) {
        const total = this.countTotal();
        if(!total) {
            return 0;
        }
        const value = this.state[propertyName];
        const result = (value / total) * 100;
        return Number(result.toFixed(2));
    }

    leaveVote = (propertyName) => {
        this.setState(prevState => {
            const value = prevState[propertyName];

            return {
                [propertyName]: value + 1
            }
        })
    }

    render(){
        const {democrate, republic} = this.state;

        const total = this.countTotal();

        const democratePercent = this.countPercentage("democrate");
        const republicPercent = this.countPercentage("republic");

        return (
            <div className={styles.wrapper}>
                <Block title="Отдать голос">
                    <VoteActions leaveVote={this.leaveVote} />
                </Block>
                <Block title="Результаты">
                    <VoteResults total={total} democrate={democrate} republic={republic} democratePercent={democratePercent} republicPercent={republicPercent}  />
                </Block>
            </div>
        )
    }
}
*/
export default Vote;