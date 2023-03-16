import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'
import { FaRegEdit } from 'react-icons/fa'
import './styles/feedbackItem.styles.css'

const FeedbackItem = ({ item }) => {
  return (
    <Card className='card'>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
      <div className='icons-container'>
        <FaRegEdit />
        <FaTimes />
      </div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
