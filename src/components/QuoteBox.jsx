const QuoteBox = ({ phrase, image }) => {
  return (
    <section className="quoteBox">
      <img src="/images/jeff-bezos.webp" alt="hola" />
      <article className="article">
        <p>{phrase}</p>
      </article>
      <button className="button">Change</button>
    </section>
  )
}

export default QuoteBox
