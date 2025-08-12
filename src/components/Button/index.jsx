import styled from "styled-components"

const Button = ({ children, btnStyle}) => {
    const ButtonStyled = styled.button`
        background-color: ${btnStyle === "sucess" ? "#0F6FFF" : "#AD2E2C"};

        &:hover{
            box-shadow: 1px 1px 10px #0F6FFF;
        }
    `

    return <ButtonStyled>{children}</ButtonStyled>
}

export default Button
