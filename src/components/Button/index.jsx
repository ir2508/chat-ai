import { useContext } from "react"
import styled from "styled-components"
import { ChatHistoryContext } from "../../contexts/ChatHistoryContext"

const ButtonStyled = styled.button`
    background-color: ${({ $btnStyle }) => ($btnStyle === "success" ? "#0F6FFF" : "#AD2E2C")};
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        box-shadow: 1px 1px 10px #0f6fff;
    }
`
const Button = ({ children, btnStyle, buttonType, requestMessage }) => {
    const { setRequests, setHistory } = useContext(ChatHistoryContext)

    function handleSendMessage(requestMessage) {
        const newRegister = {
            timestamp: Date.now(),
            message: requestMessage,
        }
        console.log(newRegister)
        setRequests((prevRequests) => [...prevRequests, newRegister])
    }

    return <ButtonStyled $btnStyle={btnStyle}>{children}</ButtonStyled>
}

export default Button
