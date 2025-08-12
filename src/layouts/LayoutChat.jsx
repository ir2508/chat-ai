import styled from "styled-components"
import Aside from "../components/Aside"

const LayoutChat = () => {
    const DivContainerStyled = styled.div`
        display: flex;
        gap: 20px;
    `
    return (
        <DivContainerStyled>
            <Aside /> 

            <main>
                sa
            </main>
        </DivContainerStyled>
    )
}

export default LayoutChat
