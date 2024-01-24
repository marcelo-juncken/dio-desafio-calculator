import {ButtonContainer} from './styles'
const Button = ({label, fontcolor, bgcolor, onClick}) => {
    return (
        <ButtonContainer fontcolor={fontcolor} bgcolor={bgcolor} onClick={onClick}>
            {label}
        </ButtonContainer>
    );
}

export default Button;
