import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import Error from './Error'
import { monedas } from '../data/monedas'


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
        margin-top: 30px;

        &:hover{
            background-color: #7a7dfe;
        }
    `

const Formulario = () => {
    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)


    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)
    const [criptoMoneda, SelectCripto] = useSelectMonedas('Elige tu criptomoneda', criptos)

    useEffect(() => {
        const consultarApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            const arrayCripto = resultado.Data.map(cripto => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }

                return (objeto)
            })

            setCriptos(arrayCripto)
        }

        consultarApi()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        if ([moneda, criptoMoneda].includes('')) {
            console.log('error');
            setError(true)
            return
        }

        setError(false)

        

    }

    // SelectMonedas()

    return (
        <>
            
            {error && <Error>Todos los campos son obligatorios</Error>}

            <form onSubmit={handleSubmit}>

                <SelectMonedas />
                <SelectCripto />

                <InputSubmit
                    type='submit'
                    value='Cotizar'
                />
            </form>

        </>
    )
}

export default Formulario