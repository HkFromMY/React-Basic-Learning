import React from 'react'
import './QuestionPage.css'

class QuestionPage extends React.Component {
    constructor(props) {
        super(props)
        this.selectAnswer = this.selectAnswer.bind(this)
        this.getQuestions = this.getQuestions.bind(this)
        this.checkAnswer = this.checkAnswer.bind(this)
        this.resetQuiz = this.resetQuiz.bind(this)

        this.state = {
            questions: [],
            correctAnswerCount: 0
        }
    }

    componentDidMount() {
        this.getQuestions()
    }

    replaceHTMLEntities(string) {
    //     let symbols = {

    //     }

    //     let symbol = string.match(/&[#]*[\d|\w]+;/)[0]
    //     let new_ques = string.replace(symbol, )
    }

    getQuestions() {
        fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
            .then(response => response.json())
            .then(data => {
                const questions = data.results.map((question, index) => {
                    return {
                        id: index,
                        question: question.question,
                        choices: question.incorrect_answers.concat([question.correct_answer]),
                        correct_answer: question.correct_answer,
                        selected_answer: null
                    }
                })
                
                // setState must be within "then" method
                this.setState((oldState) => {
                    return {
                        ...oldState,
                        questions: questions
                    }
                })
            })
    }

    selectAnswer(id, choice) {
        this.setState(oldState => {
            const questions = oldState.questions.map(question => {
                if (question.id === id) {
                    return {
                        ...question,
                        selected_answer: choice
                    }
                }
                return question
            })

            return {
                ...oldState,
                questions: questions
            }
        })
    }

    checkAnswer() {
        const canCheckAnswer = this.state.questions.every((question) => question.selected_answer !== null)
        if (canCheckAnswer) {
            let correctCount = 0
            this.state.questions.forEach((question) => {
                if (question.selected_answer === question.correct_answer) {
                    correctCount += 1
                }
            })

            this.setState(oldState => {
                return {
                    ...oldState,
                    correctAnswerCount: correctCount
                }
            })

        } else {
            alert("Please answer all questions first!")
        }
    }

    resetQuiz() {
        this.getQuestions()
        this.setState(oldState => {
            return {
                ...oldState,
                correctAnswerCount: 0
            }
        })
    }

    render() {
        return (
            <div className="quizzical-questions">
                {
                    this.state.questions.length > 0 &&
                    this.state.questions.map((question) => {
                        return (
                            <div className="quizzical-question" key={question.id}>
                                <h1 className="quizzical-question--title">{ question.question }</h1>
                                <ul className="quizzical-options">
                                    {
                                        question.choices.map((choice, index) => {
                                            return (
                                                <li 
                                                key={index} 
                                                className={question.selected_answer === choice ? "selected" : ""}
                                                onClick={() => this.selectAnswer(question.id, choice)}
                                                >
                                                    { choice }
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <hr />
                            </div>
                        )
                    })
                }
                {
                    this.state.correctAnswerCount !== 0 &&
                    <p className="quizzical-correct--answer">You scored {this.state.correctAnswerCount} / {this.state.questions.length} correct answers</p>
                }
                <div className="quizzical-question--button">
                    <button onClick={this.state.correctAnswerCount > 0 ? this.resetQuiz : this.checkAnswer} >{ this.state.correctAnswerCount > 0 ? "Reset Quiz" : "Check answers" }</button>
                </div>
            </div>
        )
    }
}

export default QuestionPage
