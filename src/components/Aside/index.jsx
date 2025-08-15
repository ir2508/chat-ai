import styled from "styled-components"
import AgentCardItem from "../AgentCardItem"

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
    background-color: #8fbbaf;

    h1 {
        font-size: 2em;
        color: #fff;
    }
`
const Aside = () => {
    return (
        <AsideBarStyled>
            <h1>Agentes de IA</h1>
            <AgentCardItem agentName="Criador de Épicos" />
            <AgentCardItem agentName="Histórias de Usuário" />
            <AgentCardItem agentName="Casos de Teste" />
            <AgentCardItem agentName="Requisitos Funcionais" />
            <AgentCardItem agentName="Requisitos Não Funcionais" />
            <AgentCardItem agentName="Análise" />
        </AsideBarStyled>
    )
}

export default Aside
