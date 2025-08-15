import styled from "styled-components"
import Aside from "../components/Aside"
import Chat from "../components/Chat"

const DivContainerStyled = styled.div`
        display: flex;
        gap: 20px;
        width: 100vw;
        flex-wrap: wrap;

        Aside {
            flex: 0 0 350px;
            height: 100vh;
        }

        main {
            box-sizing: border-box;
            flex: 1;
            height: 100vh;
            padding: 10px 50px 50px 10px;
        }
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
