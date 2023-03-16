import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedbackForm() {
  //? ******** STATE *******
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const ratingInput = document.getElementById('review-text')
  //* set input text as state and handle disabled button styles
  const handleTextChange = (e) => {
    console.log(e.target.value)

    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true)
      setMessage('Please enter more than 10 characters!')
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }

  //* clear input form and add rating to arrayw
  const handleFormSubmit = (e) => {
    e.preventDefault()

    // const ratingInput = document.getElementById('review-text')

    // @todo - insert add rating to state and display

    // clear input
    ratingInput.value = ''
  }

  return (
    <div>
      <Card>
        <form onSubmit={handleFormSubmit}>
          <h2>How would you rate your service with us?</h2>
          {/* @todo - rating select component */}
          <div className='input-group'>
            <input
              type='text'
              placeholder='Write a review...'
              onChange={handleTextChange}
              value={text}
              name='reviewText'
              id='review-text'
            />
            <Button type='submit' version='primary' isDisabled={btnDisabled}>
              Submit
            </Button>
          </div>
          {message && <div className='message'>{message}</div>}
        </form>
      </Card>
    </div>
  )
}

export default FeedbackForm
