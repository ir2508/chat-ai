import styled from "styled-components"
import Aside from "../components/Aside"
import Chat from "../components/Chat"
import { Outlet } from "react-router-dom"

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

        @media only screen and (max-width: 768px) {
            flex-direction: column;
            width: auto;

            Aside {
                padding-bottom: 50px;
                box-sizing: border-box;
            }

            main {
                height: 1800px;
                padding: 50px;
            }
        }
    `
const LayoutChat = () => {
    return (
        <DivContainerStyled>
            <Aside />

            <main>
                <Outlet />
            </main>
        </DivContainerStyled>
    )
}

export default LayoutChat
