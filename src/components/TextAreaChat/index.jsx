import styled from "styled-components"
import Button from "../Button"
import { useContext } from "react"
import { ChatHistoryContext } from "../../contexts/ChatHistoryContext"

const ContainerDivRequest = styled.div`
    /* max-width: 1000px; */
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 30px;

    textarea {
        width: 100%;
        height: 40px;
        border-radius: 5px;
        padding: 12px 20px;
        border: 1px solid #78849e;
        border-radius: 5px;
        font-size: 0.875rem;
    }
`
const TextAreaChat = () => {
    const { messageToRequest, setMessageToRequest } = useContext(ChatHistoryContext)

    function onChangeHandler(e) {
        setMessageToRequest(e)
    }
    return (
        <ContainerDivRequest>
            <textarea value={messageToRequest} onChange={(e) => { onChangeHandler(e.target.value) }}></textarea>
            <Button btnStyle="success" buttonType="submitToChat" requestMessage={messageToRequest}>Enviar</Button>
        </ContainerDivRequest>
    )
}

export default TextAreaChat
