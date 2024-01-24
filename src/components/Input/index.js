import {InputContainer} from './styles'
const Input = ({value, totalValue}) => {
    return (
        <InputContainer>
            <input disabled value={totalValue}/>
            <input disabled value={value}/>
        </InputContainer>
    );
}

export default Input;
