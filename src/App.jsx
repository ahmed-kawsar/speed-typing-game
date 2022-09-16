import { useState } from 'react'
import useWordGame from './hooks/useWordGame'

function App() {
  const [timeCount, setTimeCount] = useState(0)
  const {
    textBoxRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount,
  } = useWordGame(timeCount)

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        ref={textBoxRef}
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
      />
      <br />
      <br />
      <label htmlFor='setTime'>
        set time:
        <input
          className='set-time'
          id='setTime'
          type='number'
          value={timeCount}
          onChange={(e) => setTimeCount(e.target.value)}
        />
      </label>

      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  )
}

export default App
