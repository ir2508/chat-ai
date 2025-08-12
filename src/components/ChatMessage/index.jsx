import styled from "styled-components"

const ChatMessage = ({ children, req }) => {
    const DivMessageBalloonStyled = styled.div`
        padding: 10px;
        display: flex;
        justify-content: ${req === "request" ? "flex-end" : "flex-start"};
        
        p {
            background-color: #E4E8F0;
            max-width: 70%;
            padding: 10px;
            border-radius: 5px;
        }
    `

    return (
        <DivMessageBalloonStyled>
            <p>{children}</p>
        </DivMessageBalloonStyled>
    )
}

export default ChatMessage
