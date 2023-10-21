import PropTypes from 'prop-types'

function CountDisplay({count}) {
  
  return (
    <p style={{color: count < 6 ? "red": "blue"}}>{
        `Count: ${count}`
    }</p>
  )
}

// proptypes
CountDisplay.proptypes = {
  count: PropTypes.number.isRequired
}

export default CountDisplay