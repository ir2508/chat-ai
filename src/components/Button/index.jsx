import { useContext } from "react"
import styled from "styled-components"
import { ChatHistoryContext } from "../../contexts/ChatHistoryContext"

const ButtonStyled = styled.button`
    background-color: ${({ $btnStyle }) => ($btnStyle === "success" ? "#8ef58b" : "#AD2E2C")};
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        box-shadow: 1px 1px 10px #8ef58b;
    }
`
const Button = ({ children, btnStyle, buttonType, requestMessage }) => {
    const { newRequest } = useContext(ChatHistoryContext)

    function handleSendMessage(requestMessage) {
        newRequest(requestMessage)
    }

    return <ButtonStyled $btnStyle={btnStyle} onClick={() => handleSendMessage(requestMessage)}>{children}</ButtonStyled>
}

export default Button
