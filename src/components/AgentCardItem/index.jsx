import styled from "styled-components"
import Button from "../Button"
import { Link } from "react-router-dom"

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

    span {
        font-size: 0.8em;
    }
`
const AgentCardItem = ({ agentName, read, redirectTo }) => {
    return (
        <CardItemStyled>
            <div>
                <h4>{agentName}</h4>
                {read ? "" : <span>Em desenvolvimento!</span>}
            </div>
            <div>
                <Link to={redirectTo}>
                    <Button btnStyle="success">Abrir</Button>
                </Link>
            </div>
        </CardItemStyled>
    )
}

export default AgentCardItem
