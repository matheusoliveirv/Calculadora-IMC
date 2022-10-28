import React from 'react'
import { useState } from 'react';
import custom from './App.module.css';
import logo from './assets/logo.png';
import arrow from './assets/arrow.png';
import {levels, calculoIMC, level} from './helpers/imc';
import {GridItem} from './components/GridItem'

const App = () => {
  const [altura, setAltura] = useState<number>(0);
  const [peso, setPeso] = useState<number>(0);
  const [exibirIMC, SetExibirIMC] = useState<level | null>(null);

  const calcularIMC = () => {
    if(altura && peso){
      SetExibirIMC(calculoIMC(altura, peso));
    } else{
      alert("Preencha todos os campos");
    }
  }

  const handleBack = () => {
    SetExibirIMC(null);
    setAltura(0);
    setPeso(0);
  }

  return (
    <div className={custom.container}>

      {/* INICIO DO CONTAINER ESQUERDO*/}
      <div className={custom.leftSide}>
        <div className={custom.logo}>
          <img src={logo} alt="" />
        </div>

        {/*HEADER */}
        <h1 className={custom.title}>Calcule seu IMC</h1>
        <p className={custom.subtitle}>
          IMC é a sigla para Índice de Massa Corpórea, parâmetro
          adotado pela Organização Mundial da Saúde para calcular
          o peso ideal de cada pessoa.
        </p>

        {/*INICIO DOS INPUTS */}
        <div className={custom.fields}>
          <input type="number" 
                 placeholder='Digite sua altura. Ex: 1.50 (metros)' 
                 value={altura > 0 ? altura : ''} 
                 onChange={e => setAltura(parseFloat(e.target.value))} 
                 disabled={exibirIMC ? true : false}
          />
          <input type="number" 
                 placeholder='Digite seu peso. Ex: 75.3 (kg)' 
                 value={peso > 0 ? peso : ''} 
                 onChange={e => setPeso(parseFloat(e.target.value))} 
                 disabled={exibirIMC ? true : false}
          />
        </div>

        {/*BOTAO DE CALCULO*/}
        <button onClick={calcularIMC} disabled={exibirIMC ? true : false}>Calcular IMC</button>
      </div>

      {/*INCIO DO CONTAINER DIREITO */}
      <div className={custom.rightSide}>
        {!exibirIMC && 
          <div className={custom.grid}>
            {levels.map((item,key)=>(
              <GridItem key={key} item={item}/>
            ))}
          </div>
        }
        {/*ABA DE APRESENTAÇÃO DO IMC CALCULADO */}
        {exibirIMC &&
          <div className={custom.apresentarImc}>
            <div className={custom.arrow} onClick={handleBack}>
              <img src={arrow}  alt="" />
            </div>
            <GridItem item={exibirIMC}/>
          </div> 
        }
      </div>
    </div>
  )
}

export default App