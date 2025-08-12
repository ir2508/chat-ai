import styled from "styled-components"

const Button = ({ children, btnStyle}) => {
    const ButtonStyled = styled.button`
        background-color: ${btnStyle === "sucess" ? "#646CFF" : "#AD2E2C"};

        &:hover{
            box-shadow: 1px 1px 10px #9297fd;
        }
    `

    return <ButtonStyled>{children}</ButtonStyled>
}

export default Button
