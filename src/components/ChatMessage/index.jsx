import styled from "styled-components"

const DivMessageBalloonStyled = styled.div`
    padding: 10px;
    display: flex;
    justify-content: ${({ $req }) => ($req === "request" ? "flex-end" : "flex-start")};

    p {
        background-color: #e4e8f0;
        max-width: 70%;
        padding: 10px;
        border-radius: 5px;
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
