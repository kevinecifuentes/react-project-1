import { useState } from 'react'
import './App.css'
import './styles/FooterBox.css'
import './styles/QuoteBox.css'
import dbQuotes from './db/quotes.json'
import { getElements } from './utils/random'
import QuoteBox from './components/QuoteBox'
import FooterBox from './components/FooterBox'

const background = ['bg1', 'bg2', 'bg3', 'bg4']

function App() {
  const [quote, setQuote] = useState(getElements(dbQuotes))
  const [bgImg, setbgImg] = useState(getElements(background))
  const handlerChangeQuote = () => {
    setQuote(getElements(dbQuotes))
    setbgImg(getElements(background))
  }

  return (
    <main className={`app ${bgImg}`}>
      <section className="app__container">
        <div className="title__container">
          <h1>Bussines Man</h1>
        </div>
        <QuoteBox
          handlerChangeQuote={handlerChangeQuote}
          phrase={quote.phrase}
          image={quote.image}
        />
        <FooterBox author={quote.author} />
      </section>
    </main>
  )
}

export default App
