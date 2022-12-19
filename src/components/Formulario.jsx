import React from 'react'
import styled from '@emotion/styled'

const Formulario = () => {
    const InputSubmit = styled.input`
        background-color: #9497FF;
        border: none;
        width: 100%;
        padding: 10px;
        color: #fff;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 20px;
        border-radius: 5px;
        transition: background-color .3s ease;
        cursor: pointer;
        
        &:hover{
            background-color: #7a7dfe;
        }
    `
    return (
        <form>
            <InputSubmit 
                type='submit' 
                value='Cotizar' 
            />
        </form>
    )
}

export default Formulario