import {Container, Content, Row} from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";

import {useCalculator} from "./hooks/useCalculator";

const App = () => {

    const {
        calcState,
        handleAddDot,
        handleSimpleOperation,
        handleEqualOperation,
        handleSquare,
        handleSquareRoot,
        handleToggleSign,
        handleAddNumber,
        handleResetCalculator
    } = useCalculator()

    return (
        <Container>
            <Content>
                <Input value={calcState.displayValue} totalValue={calcState.totalValue}/>
                <Row>
                    <Button label={"x²"} bgcolor={"#F0F0F0"} onClick={handleSquare}/>
                    <Button label={"√"} bgcolor={"#F0F0F0"} onClick={handleSquareRoot}/>
                    <Button label={"C"} bgcolor={"#F0F0F0"} onClick={handleResetCalculator}/>
                    <Button label={"/"} bgcolor={"#f7f7f8"}
                            onClick={(e) => handleSimpleOperation(e.target.textContent)}/>
                </Row>
                <Row>
                    <Button label={"7"} bgcolor={"#fdfdfe"} onClick={(e) => handleAddNumber(e.target.textContent)}/>
                    <Button label={"8"} bgcolor={"#fdfdfe"} onClick={(e) => handleAddNumber(e.target.textContent)}/>
                    <Button label={"9"} bgcolor={"#fdfdfe"} onClick={(e) => handleAddNumber(e.target.textContent)}/>
                    <Button label={"x"} bgcolor={"#f7f7f8"}
                            onClick={(e) => handleSimpleOperation(e.target.textContent)}/>
                </Row>
                <Row>
                    <Button label={"4"} bgcolor={"#fdfdfe"} onClick={(e) => handleAddNumber(e.target.textContent)}/>
                    <Button label={"5"} bgcolor={"#fdfdfe"} onClick={(e) => handleAddNumber(e.target.textContent)}/>
                    <Button label={"6"} bgcolor={"#fdfdfe"} onClick={(e) => handleAddNumber(e.target.textContent)}/>
                    <Button label={"-"} bgcolor={"#f7f7f8"}
                            onClick={(e) => handleSimpleOperation(e.target.textContent)}/>
                </Row>
                <Row>
                    <Button label={"1"} bgcolor={"#fdfdfe"} onClick={(e) => handleAddNumber(e.target.textContent)}/>
                    <Button label={"2"} bgcolor={"#fdfdfe"} onClick={(e) => handleAddNumber(e.target.textContent)}/>
                    <Button label={"3"} bgcolor={"#fdfdfe"} onClick={(e) => handleAddNumber(e.target.textContent)}/>
                    <Button label={"+"} bgcolor={"#f7f7f8"}
                            onClick={(e) => handleSimpleOperation(e.target.textContent)}/>
                </Row>
                <Row>
                    <Button label={"±"} bgcolor={"#fdfdfe"} onClick={handleToggleSign}/>
                    <Button label={"0"} bgcolor={"#fdfdfe"} onClick={(e) => handleAddNumber(e.target.textContent)}/>
                    <Button label={"."} bgcolor={"#fdfdfe"} onClick={handleAddDot}/>
                    <Button label={"="} fontcolor={"#FFF"} bgcolor={"#0066bf"} onClick={handleEqualOperation}/>
                </Row>
            </Content>
        </Container>
    );
}

export default App;
