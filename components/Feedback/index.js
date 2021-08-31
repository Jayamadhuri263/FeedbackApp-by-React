import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  setIsFeedbackSelected = () => {
    this.setState({isFeedbackSelected: true})
  }

  renderFeedbackQuestion = () => {
    const {feedbackData} = this.props
    const {emojis} = feedbackData

    return (
      <div className="question">
        <h1 className="question-heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="list-item">
          {emojis.map(emoji => (
            <li
              key={emoji.id}
              className="li-item-container"
              onClick={this.setIsFeedbackSelected}
            >
              <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
              <p>{emoji.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderFeedbackSummary = () => {
    const {feedbackData} = this.props
    const {loveEmojiUrl} = feedbackData

    return (
      <div className="feedback-summary-container">
        <img src={loveEmojiUrl} alt="loveEmoji" className="emoji" />
        <h1 className="question-heading">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state

    return (
      <div className="feedback-container">
        <div className="questions-container">
          {isFeedbackSelected
            ? this.renderFeedbackSummary()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}
export default Feedback
