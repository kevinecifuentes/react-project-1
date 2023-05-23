import { useState } from 'react'
import './App.css'
import './styles/FooterBox.css'
import './styles/QuoteBox.css'
import dbQuotes from './db/quotes.json'
import { getElements } from './utils/random'
import QuoteBox from './components/QuoteBox'
import FooterBox from './components/FooterBox'

function App() {
  const [quote, setQuote] = useState(getElements(dbQuotes))
  const handlerChangeQuote = () => {
    setQuote(getElements(dbQuotes))
  }
  return (
    <main className="app">
      <section className="app__container">
        <div className="title__container">
          <h1>Bussines Man</h1>
        </div>
        <QuoteBox phrase={quote.phrase} />
        <FooterBox author={quote.author} />
      </section>
    </main>
  )
}

export default App
