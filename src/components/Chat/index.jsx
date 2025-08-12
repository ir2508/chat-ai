import styled from "styled-components"
import TextAreaChat from "../TextAreaChat"
import ChatMessage from "../ChatMessage"

const Chat = () => {
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
            scrollbar-color: #004A8D #F0F1F2;
        }
    `

    return (
        <ContainerChatStyled>
            <header>
                <h3>Agente Análise GPG</h3>
            </header>

            <div className="chat-messages">
                <ChatMessage req="request">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur alias quo facilis beatae recusandae accusantium dolor nam nisi iure modi nesciunt explicabo doloremque quidem culpa dolore minus fugit, maxime cum!</ChatMessage>
                <ChatMessage req="response">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur alias quo facilis beatae recusandae accusantium dolor nam nisi iure modi nesciunt explicabo doloremque quidem culpa dolore minus fugit, maxime cum!</ChatMessage>
                <ChatMessage req="request">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur alias quo facilis beatae recusandae accusantium dolor nam nisi iure modi nesciunt explicabo doloremque quidem culpa dolore minus fugit, maxime cum!</ChatMessage>
                <ChatMessage req="response">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur alias quo facilis beatae recusandae accusantium dolor nam nisi iure modi nesciunt explicabo doloremque quidem culpa dolore minus fugit, maxime cum!</ChatMessage>
                <ChatMessage req="request">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur alias quo facilis beatae recusandae accusantium dolor nam nisi iure modi nesciunt explicabo doloremque quidem culpa dolore minus fugit, maxime cum!</ChatMessage>
                <ChatMessage req="response">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur alias quo facilis beatae recusandae accusantium dolor nam nisi iure modi nesciunt explicabo doloremque quidem culpa dolore minus fugit, maxime cum!</ChatMessage>
                <ChatMessage req="request">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur alias quo facilis beatae recusandae accusantium dolor nam nisi iure modi nesciunt explicabo doloremque quidem culpa dolore minus fugit, maxime cum!</ChatMessage>
                <ChatMessage req="response">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur alias quo facilis beatae recusandae accusantium dolor nam nisi iure modi nesciunt explicabo doloremque quidem culpa dolore minus fugit, maxime cum!</ChatMessage>
                <ChatMessage req="request">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur alias quo facilis beatae recusandae accusantium dolor nam nisi iure modi nesciunt explicabo doloremque quidem culpa dolore minus fugit, maxime cum!</ChatMessage>
                <ChatMessage req="response">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur alias quo facilis beatae recusandae accusantium dolor nam nisi iure modi nesciunt explicabo doloremque quidem culpa dolore minus fugit, maxime cum!</ChatMessage>
                <ChatMessage req="request">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur alias quo facilis beatae recusandae accusantium dolor nam nisi iure modi nesciunt explicabo doloremque quidem culpa dolore minus fugit, maxime cum!</ChatMessage>
                <ChatMessage req="response">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur alias quo facilis beatae recusandae accusantium dolor nam nisi iure modi nesciunt explicabo doloremque quidem culpa dolore minus fugit, maxime cum!</ChatMessage>
            </div>

            <footer>
                <TextAreaChat />
            </footer>
        </ContainerChatStyled>
    )
}

export default Chat