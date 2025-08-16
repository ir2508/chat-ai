import styled from "styled-components"
import AgentCardItem from "../AgentCardItem"
import { Link } from "react-router-dom"

const AsideBarStyled = styled.aside`
    border-right: 1px solid #646464;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    background-color: #8fbbaf;

    Link {

    }

    h1 {
        font-size: 2em;
        color: #fff;
    }
`
const Aside = () => {
    return (
        <AsideBarStyled>
            <h1>Agentes de IA</h1>
            <AgentCardItem redirectTo="gemini-flash" agentName="Gemini Flash" read={true} />
            <AgentCardItem redirectTo="/" agentName="Gemini Pro" read={false} />
            <AgentCardItem redirectTo="/" agentName="GPT" read={false} />
            <AgentCardItem redirectTo="/" agentName="Copilot" read={false} />
        </AsideBarStyled>
    )
}

export default Aside
