AOS.init();

const dataDoEvento = new Date("Dec 15, 2024 19:00:00");
const inicioDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const tempoParaEvento = inicioDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(tempoParaEvento / diaEmMs);
    const horasAteOEvento = Math.floor((tempoParaEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((tempoParaEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((tempoParaEvento % minutoEmMs) / 1000);

    document.getElementById('informacoes__contagem').innerHTML = `${diasAteOEvento} dias ${horasAteOEvento} horas ${minutosAteOEvento} minutos e ${segundosAteOEvento} segundos`;

    if (tempoParaEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('informacoes__contagem').innerHTML = 'Evento expirado';
    }
}, 1000);