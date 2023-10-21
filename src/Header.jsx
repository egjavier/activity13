import PropTypes from 'prop-types'

function Header({ title }) {
  return (
    <header
      className="shadow  m-5 p-3">
        <h1 className="text-center text-primary fw-bold">{ title }</h1>
    </header>
  )
}
// add proptypes
  Header.proptypes = {
    title: PropTypes.string.isRequired
  }

export default Header;