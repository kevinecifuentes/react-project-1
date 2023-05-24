const QuoteBox = ({ phrase, image, handlerChangeQuote }) => {
  return (
    <section className="quoteBox">
      <img src={`${image}`} alt="hola" />
      <article className="article">
        <p>{phrase}</p>
      </article>
      <button onClick={handlerChangeQuote} className="button">
        Change
      </button>
    </section>
  )
}

export default QuoteBox
