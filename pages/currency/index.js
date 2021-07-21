import { useEffect, useState } from 'react'
import axios from "axios";

function Currency() {

  const [moeda, setMoeda] = useState();
  const [amountUsd, setAmountUsd] = useState('1');

  useEffect(() => {
    var options = {
      method: 'GET',
      url: 'https://currency-converter13.p.rapidapi.com/convert',
      params: { from: 'USD', to: 'BRL', amount: amountUsd },
      headers: {
        'x-rapidapi-key': '1487994fbfmsh75db92088d8f8b6p1cd7c4jsn11137186efd5',
        'x-rapidapi-host': 'currency-converter13.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      setMoeda(response?.data)
      console.log(moeda);
    }).catch(function (error) {
      console.error(error);
    });

    console.log(amountUsd)
  }, [amountUsd])

  return (
    <>
      <h1>Conversão de moeda de {moeda?.from} para {moeda?.to}: </h1>

      <input
        type="text"
        placeholder="Digite o valor em dólar: "
        onChange={e => setAmountUsd(e.target.value)}
      />
      <h1>
          Valor: {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'BRL',
        }).format(moeda?.amount)}
      </h1>
    </>
  )
}

export default Currency