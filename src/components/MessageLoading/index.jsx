import styled from "styled-components"

const DivMessageStyled = styled.div`
    text-align: center;
    padding: 5px 0;
`

const MessageLoading = ({ children }) => {
    return (
        <DivMessageStyled>{children}</DivMessageStyled>
    )
}

export default MessageLoading