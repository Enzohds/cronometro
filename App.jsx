import start from './start.png';
import pause from './pause.png';
import restart from './restart.jpg';
import React, {useState, useEffect} from "react";
import "./App.css";

function Cronometro() {
  const[tempo, setTempo] = useState(0)
  const[isRodando, setIsRodando] = useState(false)

  useEffect(()=> {
    let intervalo;

    if(isRodando) {
      intervalo = setInterval(() => {
       setTempo(tempo => tempo + 1);//att em um segundo
      }, 10); //atualiza a cada 10 mili
    } else {
      clearInterval(intervalo)
    }

    return () => clearInterval(intervalo);
  }, [isRodando])
  

  const formatarTempo = (tempo) =>  {
    const horas = Math.floor(tempo / 360000);


    const minutos = Math.floor((tempo % 360000) / 6000);
    const segundos = Math.floor((tempo % 6000) / 100);
    const milisegundos = tempo % 100;

    return`
    ${horas.toString().padStart(2, '0')}:
    ${minutos.toString().padStart(2, '0')}:
    ${segundos.toString().padStart(2, '0')}:
    ${milisegundos.toString().padStart(2, '0')}:
    `
  }
    const handleComecar = () => {
      setIsRodando(true)
    }

    const handlePausar = () => {
      setIsRodando(false)
    }

    const handleReiniciar = () =>{
      setIsRodando(false)
      setTempo(0)
    }
  
  
  return(
    <div className="cronometro-container">
      <h1>Cronometro</h1>
      <p className="tempo">{formatarTempo(tempo)}</p>
    

    <div className="botoes-container">
      <button onClick={handleComecar}>
      <img src={start} alt="botao de start" className="start"></img>
      </button>
      <button onClick={handlePausar}>
        <img src={pause} alt="botao de pause" className="pause"></img>
      </button>
      <button onClick={handleReiniciar}>
        <img src={restart} alt="botao de restart" className="restart"></img>
      </button>
    </div>
    </div>
  );
}

export default Cronometro;