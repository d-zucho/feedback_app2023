import './app.css'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

function App() {
  const [feedback, setFeedbackItem] = useState(FeedbackData)
  return (
    <div className='app'>
      <div className='container'>
        <Header text='Feedback UI' />
        <main>
          <FeedbackForm />
          <FeedbackStats feedback={feedback} />
          <FeedbackList feedback={feedback} />
        </main>
      </div>
    </div>
  )
}

export default App
