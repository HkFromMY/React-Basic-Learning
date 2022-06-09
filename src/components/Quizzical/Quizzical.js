import React from 'react'
import './Quizzical.css'
import StartPage from './StartPage'
import QuestionPage from './QuestionPage'

class Quizzical extends React.Component {
    constructor(props) {
        super(props)
        this.toggleQuestion = this.toggleQuestion.bind(this)
        this.state = {
            showQuestion: false
        }
    }

    toggleQuestion() {
        this.setState(oldState => {
            return {
                ...oldState, 
                showQuestion: !oldState.showQuestion
            }
        })
    }

    render() {
        return (
            this.state.showQuestion ?
            <div className="quizzical-container">
                <QuestionPage /> 
            </div>
            :
            <div className="quizzical-container start">
                <StartPage toggleQuestion={this.toggleQuestion} />
            </div>
        )
    }
}

export default Quizzical