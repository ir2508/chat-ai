import styled from "styled-components"
import AgentCardItem from "../AgentCardItem"

const Aside = () => {
    const AsideBarStyled = styled.aside`
        height: 100vh;
        border-right: 1px solid #646464;
        padding: 0 30px;
        width: 350px; 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start; 
        gap: 10px;
        background-color: #004A8D;

        h1 {
            font-size: 2em;
            color: #fff;
        }
    `

    return (
        <AsideBarStyled>
            <h1>SE - Agentes de IA</h1>
            <AgentCardItem />
            <AgentCardItem />
            <AgentCardItem />
        </AsideBarStyled>
    )
}

export default Aside