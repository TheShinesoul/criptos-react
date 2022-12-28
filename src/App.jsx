import './index.css'
import styled from "@emotion/styled";
import ImagenCripto from './assets/img/imagen-criptos.png'
import Formulario from './components/Formulario'; 
import { useState, useEffect } from 'react';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

const Heading = styled.h1`
    font-family: 'Lato', sans-serif;
    color:#fff;
    text-align: center;
    font-weight: 700;
    margin-top: 80px;
    margin-bottom: 50px;
    font-size: 34px;

    &::after{
        content: '';
        width: 100px;
        height: 6px;
        background-color: #66a2fe;
        display: block;
        margin: 10px auto 0px auto;
    }
`

const Imagen = styled.img`
    max-width:400px;
    width:80%;
    margin: 100px auto 0 auto;
    display:block;`

const Contenedor = styled.div`
    max-width:900px;
    margin:0 auto;
    width:90%;
    @media (min-width: 992px) {
        display: grid;
        grid-template-columns: repeat(2,1fr);
        column-gap: 2rem;
    }`

function App() {

    const [monedas, setMonedas] = useState({})
    const [resultado, setResultado] = useState({})
    const [cargando, setCargando] = useState(false)

    useEffect(()=>{
        if(Object.keys(monedas).length>0){
            const cotizarCripto = async () => {
                setCargando(true)
                setResultado({})
                const {moneda, criptoMoneda} =  monedas
                // console.log(moneda, criptoMoneda);
                const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`
                const respuesta = await fetch(url)
                const resulta = await respuesta.json()
                setResultado(resulta.DISPLAY[criptoMoneda][moneda]);

                setCargando(false)
          }

            cotizarCripto()
        }
    },[monedas])



    return (
        <Contenedor>
            <Imagen
                src={ImagenCripto}
                alt='Imagen Criptomonedas'
            />
            <div>
                <Heading>Cotiza Criptomonedas al instante</Heading>

                <Formulario
                    setMonedas={setMonedas}
                />

                {cargando && <Spinner/>}

                { resultado.PRICE && <Resultado resultado={resultado} />}               


            </div>
        </Contenedor>
    )
}

export default App
