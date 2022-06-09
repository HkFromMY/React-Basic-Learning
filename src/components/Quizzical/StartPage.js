import React from 'react'

class StartPage extends React.Component {
    render() {
        return (
            <div className="quizzical-start-content">
                <h1 className="quizzical-title">Quizzical</h1>
                <h4 className="quizzical-description">Please complete the quiz to prove your competence</h4>
                <button className="quizzical-button" onClick={this.props.toggleQuestion}>Start Quiz Now!</button>
            </div>
        )
    }
}

export default StartPage
