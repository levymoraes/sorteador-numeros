function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let numeroMinimo = parseInt(document.getElementById("de").value);
  let numeroMaximo = parseInt(document.getElementById("ate").value);

  let sorteados = [];
  let numero;
  let resultado = document.getElementById("resultado");

  if (numeroMinimo >= numeroMaximo) {
    alert("Certifique-se de que o valor mínimo seja menor que o valor máximo!");
    return;
  }

  if (quantidade > numeroMaximo - numeroMinimo + 1) {
    alert(
      "A quantidade de números solicitada é maior que o intervalo disponível!"
    );
    return;
  }

  for (let i = 0; i < quantidade; i++) {
    numero = obterNumero(numeroMinimo, numeroMaximo);

    while (sorteados.includes(numero)) {
      numero = obterNumero(numeroMinimo, numeroMaximo);
    }

    sorteados.push(numero);
  }

  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
  //  para colocar uma informação na pagina, usamos .innerHTML
  //   .innerHTML = quando precisamos manipular o contuedo HTML interno de um elemento

  //   loop for: usado para percorrer elementos em um array

  mudarStatusBotao();
}

function obterNumero(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function mudarStatusBotao() {
  let botao = document.getElementById("btn-reiniciar");
  if (botao.classList.contains("container__botao-desabilitado")) {
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
  } else {
    botao.classList.add("container__botao");
    botao.classList.remove("container__botao-desabilitado");
  }
}

function reiniciar() {
  // Define um array com os IDs dos campos de entrada que serão limpos
  const limparCampos = ["quantidade", "de", "ate"];
  // Itera sobre cada ID no array 'limparCampos'
  // O loop começa em 0 e vai até o tamanho do array 'limparCampos'
  // A cada iteração, o valor de 'i' é incrementado em 1
  // for i = 0; = 'de' e assim por diante
  for (let i = 0; i < limparCampos.length; i++) {
    // Acessa o elemento HTML correspondente ao ID atual e limpa seu valor
    document.getElementById(limparCampos[i]).value = "";
  }
  //
  document.getElementById("resultado").innerHTML =
    '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
  mudarStatusBotao();
}
