import styled from "styled-components"

const DivMessageBalloonStyled = styled.div`
    display: flex;
    justify-content: ${({ $req }) => ($req === "request" ? "flex-end" : "flex-start")};

    div {
        background-color: #d5fad4;
        max-width: 80%;
        padding: 10px;
        border-radius: 10px;
    }
    span {
        display: block;
        text-align: right;
        font-size: 0.7em;
    }
`
const ChatMessage = ({ children, req, dateTime }) => {
    const messageDate = dateTime.toLocaleString("pt-BR")
    return (
        <DivMessageBalloonStyled $req={req}>
            <div>
                {children}
                <span>{messageDate}</span>
            </div>
        </DivMessageBalloonStyled>
    )
}

export default ChatMessage
