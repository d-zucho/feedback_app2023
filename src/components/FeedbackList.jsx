import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

const FeedbackList = ({ feedback }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback yet!</p>
  }
  return feedback.map((item) => (
    <div className='feedback-list'>
      <FeedbackItem key={item.id} item={item} />
    </div>
  ))
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
}

export default FeedbackList
