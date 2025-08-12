import styled from "styled-components"
import Button from "../Button"

const TextAreaChat = () => {
    const ContainerDivRequest = styled.div`
        max-width: 1000px;
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

    return (
        <ContainerDivRequest>
            <textarea></textarea>
            <Button btnStyle="sucess">Enviar</Button>
        </ContainerDivRequest>
    )
}

export default TextAreaChat
