import styled from "styled-components"
import TextAreaChat from "../TextAreaChat"
import ChatMessage from "../ChatMessage"
import { useContext } from "react"
import { ChatHistoryContext } from "../../contexts/ChatHistoryContext"

const ContainerChatStyled = styled.div`
    /* border: 1px solid #646464; */
    min-width: 700px;
    max-width: 1000px;
    height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
        color: #4f596f;
        font-size: 1.4em;
    }

    .chat-messages {
        overflow-y: auto;
        scrollbar-color: #004a8d #f0f1f2;
    }
`
const Chat = () => {
    const { history } = useContext(ChatHistoryContext)

    return (
        <ContainerChatStyled>
            <header>
                <h3>Agente para Criar Histórias de Usuário</h3>
            </header>

            <div className="chat-messages">
                {history.map((eachMessage) => (
                    <ChatMessage req={eachMessage.type}>{eachMessage.message}</ChatMessage>
                ))}
            </div>

            <footer>
                <TextAreaChat />
            </footer>
        </ContainerChatStyled>
    )
}

export default Chat
