import styled from "styled-components"
import Aside from "../components/Aside"
import Chat from "../components/Chat"

const DivContainerStyled = styled.div`
        display: flex;
        gap: 20px;
    `
const LayoutChat = () => {
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
