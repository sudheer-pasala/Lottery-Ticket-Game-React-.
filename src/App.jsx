import { useState } from 'react'
import './App.css'
import { genTicket, sum} from './helper';


export default function Lottery(){
  let [ticket, setTicket]= useState(genTicket(3));
  let isWinnning = sum(ticket) ===15;

  let buyTicket= () =>{
    setTicket(genTicket(3));
  }
  return(
    <div>
      <h1>Lottery Game!</h1>
      <div>
        <div className="roller">
        <div className="div_one">
        <h1><span>{ticket[0]}</span></h1>
          </div >
          <div className="div_two">
        <h1><span>{ticket[1]}</span></h1>
          </div>
          <div className="div_three">
        <h1><span>{ticket[2]}</span></h1>
          </div>
      </div>
        </div>
        <div className="btnGenerate">
        <button onClick={buyTicket}> Buy NEW TICKET</button>
        </div>
        <div>
          <h3>{isWinnning && "Congratulations you Won!"}</h3>
        </div>
    </div>
  );
}