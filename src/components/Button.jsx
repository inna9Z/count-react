import './Button.css'
import propTypes from 'prop-types';
const Button = ({ styling, text, handlerClick }) => {
    return (<button className={`btn ${styling}`} onClick={handlerClick} >{text}</button>)
}
// Button default

Button.defaultProps = {
    styling: '',
    text: 'Click Me',
    handleClick: propTypes.func.isRequired
};

Button.propTypes = {
    styling: propTypes.string,
    text: propTypes.string,
    handleClick: propTypes.func.isRequired
};
export default Button;