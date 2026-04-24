function vitoriasDerrotas(nome, vitorias, derrotas) {
    let nivel;

    if (vitorias < 10) nivel = "Ferro";
    else if (vitorias <= 20) nivel = "Bronze";
    else if (vitorias <= 50) nivel = "Prata";
    else if (vitorias <= 80) nivel = "Ouro";
    else if (vitorias <= 90) nivel = "Diamante";
    else if (vitorias <= 100) nivel = "Lendário";
    else nivel = "Imortal";

    let saldo = vitorias - derrotas;

    return `O Herói ${nome} tem de saldo de ${saldo} está no nível de ${nivel}`;
}

let jogadores = [
    { nome: "Kratos", vitorias: 120, derrotas: 10 },
    { nome: "Link", vitorias: 35, derrotas: 16 },
    { nome: "Ezio", vitorias: 80, derrotas: 0 }
];

for (let i = 0; i < jogadores.length; i++) {
    console.log(
        vitoriasDerrotas(
            jogadores[i].nome,
            jogadores[i].vitorias,
            jogadores[i].derrotas
        )
    );
}
