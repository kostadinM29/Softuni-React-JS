import Footer from './Components/Footer'
import Header from './Components/Header'
import UserList from './Components/UserList'
import './styles.css'

function App()
{
  return (
    <>
      <Header />
      <main className="main">
        <UserList />
      </main>
      <Footer />
    </>
  )
}

export default App
