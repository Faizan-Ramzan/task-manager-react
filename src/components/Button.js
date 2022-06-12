import PropTypes from 'prop-types'

const Button = ({color, text}) => {
  return( 
    <button class="btn" style={{ backgroundColor: color }}>{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
}

export default Button