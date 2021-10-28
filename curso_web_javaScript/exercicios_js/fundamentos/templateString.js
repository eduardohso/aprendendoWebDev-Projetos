const nome = "Jao";
const concatenacao = "Olá " + nome + " !";
const template = `
    Olá
    ${nome}!`;

console.log(concatenacao, template);

//expressoes
console.log(`1+1=${1 + 1}`);

const up = (s) => s.toUpperCase();
console.log(`Ei... ${up("cuidado")}!`);
