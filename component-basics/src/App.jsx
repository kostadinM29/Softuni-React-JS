import './App.css'
import MovieList from './components/MovieList'
import Timer from './components/Timer'
import Counter from './components/Counter'

const movies = [
  {
    title: 'The Matrix',
    description: 'Movie about robots using humans for energy'
  },
  {
    title: 'Harry Potter',
    description: 'Movie about wizards'
  },
  {
    title: 'The Equalizer',
    description: 'Movie about some guy killing people'
  }
]

function App()
{
  return (
    <div>
      <h1> my first dynamic react app!</h1>
      <MovieList headingText='My favorite movies are:' movies={movies} />
      <Timer startTime={10} increment={10000} />
      <Timer startTime={100} increment={1000} />
      <Timer startTime={1000} increment={100} />
      <Counter start={0} increment={1} />
      <Counter start={-600} increment={600} />
    </div>
  )
}

export default App
