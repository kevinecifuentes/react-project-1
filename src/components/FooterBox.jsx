const FooterBox = ({ author }) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h3>
          <b>Author: </b>
          {author}
        </h3>
      </div>
    </footer>
  )
}
export default FooterBox
