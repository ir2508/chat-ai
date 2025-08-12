import styled from "styled-components"
import Button from "../Button"

const AgentCardItem = () => {
    const CardItemStyled = styled.div`
        border: 1px solid grey;
        border-radius: 5px;
        padding: 15px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        h4 {
            padding: 0px;
            margin: 0px;
        }
    `

    return (
        <CardItemStyled>
            <div>
                <h4>Análise GPG</h4>
                <span>Última alteração: 10/08/2025</span>
            </div>
            <div>
                <Button btnStyle="sucess">Abrir</Button>
            </div>
        </CardItemStyled>
    )
}

export default AgentCardItem
