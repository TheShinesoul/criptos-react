import React from "react";
import styled from "@emotion/styled";

const ShowInfo = styled.div`
    color:#fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    `
const Texto = styled.p`
    font-size:18px;
    span{
        font-weight: 700;
    }
`
const Precio = styled.p`
    font-size:24px;
    span{
        font-weight: 700;
    }`

const Imagen = styled.img`
    display:block;
    width:150px;`





const Resultado = ({ resultado }) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
    return (
        <ShowInfo>
            <Imagen src={`https://crYptocompare.com/${IMAGEURL}`}/>
            <div>
                <Precio>El Textorecio es de: <span>{PRICE}</span></Precio>
                <Texto>Precio Textoás alto del día: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio más Textoajo del día<span>{LOWDAY}</span></Texto>
                <Texto>Variación últimTextos 24 horas<span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Ultima actualizacióTexto<span>{LASTUPDATE}</span></Texto>
            </div>
        </ShowInfo>
    )
}

export default Resultado