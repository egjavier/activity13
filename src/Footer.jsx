function Footer({ copyright }) {
  return (
    <footer
      className="container-fluid bg-primary text-light text-center position-absolute bottom-0"
    >
      { copyright }
    </footer>
  )
}

export default Footer