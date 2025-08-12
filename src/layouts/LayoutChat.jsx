import styled from "styled-components"
import Aside from "../components/Aside"
import Chat from "../components/Chat"

const LayoutChat = () => {
    const DivContainerStyled = styled.div`
        display: flex;
        gap: 20px;
    `
    return (
        <DivContainerStyled>
            <Aside /> 

            <main>
                <Chat />
            </main>
        </DivContainerStyled>
    )
}

export default LayoutChat
