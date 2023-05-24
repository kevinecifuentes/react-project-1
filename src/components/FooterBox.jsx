const FooterBox = ({ author }) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h3 className="h3">
          <b className="author">Author: </b>
          {author}
        </h3>
      </div>
    </footer>
  )
}
export default FooterBox
