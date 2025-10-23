console.log('Hello World');

// Mostra data e hora atual no fuso horário de Brasília (UTC-3)
const now = new Date();
const offsetMs = -3 * 60 * 60 * 1000; 
const brasilTime = new Date(now.getTime() + offsetMs);
console.log('Data e hora no Brasil:', brasilTime.toString());

const soma = 2 + 2;
console.log('2 + 2 =', soma);

document.getElementById('info').textContent =
  `Data/hora Brasil: ${brasilTime.toLocaleString('pt-BR')} — 2+2 = ${soma}`;
