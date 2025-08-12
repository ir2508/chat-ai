import styled from "styled-components"
import Button from "../Button"

const AgentCardItem = () => {
    const CardItemStyled = styled.div`
        box-sizing: border-box;
        border: 1px solid grey;
        border-radius: 7px;
        padding: 15px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;

        h4 {
            padding: 0px;
            margin: 0px;
        }
    `

    return (
        <CardItemStyled>
            <div>
                <h4>Análise GPG</h4>
            </div>
            <div>
                <Button btnStyle="sucess">Abrir</Button>
            </div>
        </CardItemStyled>
    )
}

export default AgentCardItem
