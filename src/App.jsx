import Layout from "./components/Layout"
import Hero from "./components/Hero"
import CoffeeForm from "./components/CoffeeForm"
import Stats from "./components/Stats"
import History from "./components/History"

function App() {

  const isAuth = true

  const authContent = (
    <>
      <Stats />
      <History />
    </>
  )
  return (
    <Layout>
      <Hero />
      <CoffeeForm isAuth = {isAuth} />
      {isAuth && (authContent)}
    </Layout>
  )
}

export default App
