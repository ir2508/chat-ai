import styled from "styled-components"

const DivMessageBalloonStyled = styled.div`
    display: flex;
    justify-content: ${({ $req }) => ($req === "request" ? "flex-end" : "flex-start")};

    p {
        background-color: #d5fad4;
        max-width: 80%;
        padding: 10px;
        border-radius: 10px;
    }
`
const ChatMessage = ({ children, req }) => {
    return (
        <DivMessageBalloonStyled $req={req}>
            <p>{children}</p>
        </DivMessageBalloonStyled>
    )
}

export default ChatMessage
