import styled from "styled-components"
import TextAreaChat from "../TextAreaChat"
import ChatMessage from "../ChatMessage"
import { useContext } from "react"
import { ChatHistoryContext } from "../../contexts/ChatHistoryContext"
import Markdown from "react-markdown"
import MessageLoading from "../MessageLoading"

const ContainerChatStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    
    h3 {
        color: #4f596f;
        font-size: 1.4em;
    }

    .chat-messages {
        overflow-y: auto;
        scrollbar-color: #06402B #f0f1f2;
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding-right: 20px;
    }

    @media only screen and (max-width: 768px) {
        max-height: 800px;
    }
`
const Chat = () => {
    const { history, loading } = useContext(ChatHistoryContext)

    return (
        <ContainerChatStyled>
            <header>
                <h3>Google Gemini Flash</h3>
            </header>

            <div className="chat-messages">
                {history.map((eachMessage) => {
                    return eachMessage.type === "request" ?
                        <ChatMessage key={eachMessage.id} req={eachMessage.type} dateTime={eachMessage.timestamp}>{eachMessage.message}</ChatMessage> :
                        <ChatMessage key={eachMessage.id} req={eachMessage.type} dateTime={eachMessage.timestamp}><Markdown>{eachMessage.message}</Markdown></ChatMessage>
                })}
            </div>

            <footer>
                {loading ? <MessageLoading>Aguarde enquanto estamos gerando uma resposta...</MessageLoading> : ""}
                <TextAreaChat />
            </footer>
        </ContainerChatStyled>
    )
}

export default Chat
