const curiosidades = [
    { 
        texto: "O corpo humano tem cerca de 37 trilhões de células.", 
        detalhes: "É incrível pensar que nosso corpo é composto por uma quantidade tão grande de células, cada uma com uma função essencial para a nossa vida.",
        imagem: "https://th.bing.com/th/id/OIP.prejdDYMjzMMWF6EwQIpRwHaEw?w=235&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" 
    },
    { 
        texto: "A água-viva Turritopsis dohrnii é conhecida como biologicamente imortal.", 
        detalhes: "Ela tem a capacidade de reverter seu ciclo de vida e voltar a um estado mais jovem, o que a torna única no reino animal.",
        imagem: "https://static.wixstatic.com/media/834d46_2079204d4d5c4797b3ab5f294b7d4f15~mv2.png/v1/fill/w_1000,h_598,al_c,q_90,usm_0.66_1.00_0.01/834d46_2079204d4d5c4797b3ab5f294b7d4f15~mv2.png" 
    },
    { 
        texto: "O DNA humano é 60% igual ao de uma banana.", 
        detalhes: "Embora isso possa parecer surpreendente, muitas funções biológicas são compartilhadas entre diferentes formas de vida.",
        imagem: "https://th.bing.com/th/id/OIP.xe9QpcCSbOZg7x95BH8-ywHaHa?r=0&rs=1&pid=ImgDetMain" 
    },
    { 
        texto: "Os fungos são mais geneticamente parecidos com os animais do que com as plantas.", 
        detalhes: "Apesar de seu visual e habitat, os fungos compartilham mais características genéticas com os animais, como a forma de obter alimento.",
        imagem: "https://th.bing.com/th/id/OIP.nfN6FKFXCmkR3IYJjbQa4QAAAA?w=260&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" 
    },
    { 
        texto: "As girafas têm a mesma quantidade de vértebras no pescoço que os humanos: sete.", 
        detalhes: "Embora seus pescoços sejam muito longos, elas têm o mesmo número de vértebras que qualquer outro mamífero.",
        imagem: "https://1.bp.blogspot.com/-HJ7P_qD80RY/Xlxcc_F8uNI/AAAAAAAAYDY/cmL8TZu2FBQnbfwuNNB8cCuZdKFWF9-WwCNcBGAsYHQ/s1600/Girafa.jpg" 
    }
];

let indiceCuriosidade = 0;

function mostrarCuriosidade() {
    document.getElementById("curiosidadeTexto").innerText = curiosidades[indiceCuriosidade].texto;
    document.getElementById("detalhesCuriosidade").innerText = curiosidades[indiceCuriosidade].detalhes;
    document.getElementById("curiosidadeImagem").src = curiosidades[indiceCuriosidade].imagem;
    document.getElementById("curiosidadeDetails").style.display = "block";
}

function mostrarProximaCuriosidade() {
    indiceCuriosidade = (indiceCuriosidade + 1) % curiosidades.length;
    document.getElementById("curiosidadeTexto").innerText = curiosidades[indiceCuriosidade].texto;
    document.getElementById("detalhesCuriosidade").innerText = curiosidades[indiceCuriosidade].detalhes;
    document.getElementById("curiosidadeImagem").src = curiosidades[indiceCuriosidade].imagem;
}

function verificarResposta() {
    let respostasCorretas = 0;

    // Questão 1
    const resposta1 = document.querySelector('input[name="q1"]:checked');
    if (resposta1 && resposta1.value === "Pele") respostasCorretas++;

    // Questão 2
    const resposta2 = document.querySelector('input[name="q2"]:checked');
    if (resposta2 && resposta2.value === "Glóbulo Vermelho") respostasCorretas++;

    // Questão 3
    const resposta3 = document.querySelector('input[name="q3"]:checked');
    if (resposta3 && resposta3.value === "Gerar energia (ATP)") respostasCorretas++;

    const resultado = document.getElementById("resultado");
    resultado.textContent = `Você acertou ${respostasCorretas} de 3 questões.`;
}

function verificarDesafio(desafio) {
    const resultado = document.getElementById(`resultadoDesafio${desafio}`);
    let resposta = '';

    if (desafio === 1) {
        resposta = document.getElementById("respostaDesafio1").value.toLowerCase();
        if (resposta === "respiração celular") {
            resultado.textContent = "Correto!";
        } else {
            resultado.textContent = "Tente novamente!";
        }
    }

    if (desafio === 2) {
        resposta = document.getElementById("respostaDesafio2").value.toLowerCase();
        if (resposta === "mitose") {
            resultado.textContent = "Correto!";
        } else {
            resultado.textContent = "Tente novamente!";
        }
    }

    if (desafio === 3) {
        resposta = document.getElementById("respostaDesafio3").value.toLowerCase();
        if (resposta === "glóbulo branco" || resposta === "leucócito") {
            resultado.textContent = "Correto!";
        } else {
            resultado.textContent = "Tente novamente!";
        }
    }
}

function mostrarCuriosidade() {
  const curiosidades = [
    { texto: "O DNA humano tem cerca de 3 bilhões de pares de bases!", imagem: "https://img.freepik.com/premium-photo/blueprint-life-striking-blue-dna-strand-illustrating-complexity-beauty-genetics-created-with-generative-ai-technology_27525-19477.jpg" },
    { texto: "Os polvos têm três corações!", imagem: "https://th.bing.com/th/id/OIP.rLnnGNzp5xfmWMLunQL2DwHaHa?r=0&rs=1&pid=ImgDetMain" },
    { texto: "O coração de uma baleia azul pesa mais de 150 kg!", imagem: "https://th.bing.com/th/id/OIP.hZV3dK1kRgm_iDBEoWGiZwHaFN?w=281&h=198&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" }
  ];

  let index = Math.floor(Math.random() * curiosidades.length);
  document.getElementById("curiosidadeTexto").style.display = "none";
  document.getElementById("curiosidadeDetails").style.display = "block";
  document.getElementById("detalhesCuriosidade").innerText = curiosidades[index].texto;
  document.getElementById("curiosidadeImagem").src = curiosidades[index].imagem;
}

function mostrarProximaCuriosidade() {
  mostrarCuriosidade();
}

function verificarResposta() {
  corrigirQuiz();
}

function verificarDesafio(numero) {
  const respostas = [
    "respiração celular",
    "mitose",
    "leucócito"
  ];

  let respostaUsuario = document.getElementById(`respostaDesafio${numero}`).value.trim().toLowerCase();
  let resultado = document.getElementById(`resultadoDesafio${numero}`);

  if (respostaUsuario === respostas[numero - 1]) {
    resultado.innerText = "✅ Resposta correta!";
  } else {
    resultado.innerText = "❌ Tente novamente.";
  }
}

function corrigirQuiz() {
  const respostasCorretas = ["Pele", "Glóbulo Vermelho", "Gerar energia (ATP)"];
  const respostasUsuario = [
    document.querySelector('input[name="q1"]:checked'),
    document.querySelector('input[name="q2"]:checked'),
    document.querySelector('input[name="q3"]:checked')
  ];

  let acertos = 0;
  respostasUsuario.forEach((resposta, index) => {
    if (resposta && resposta.value === respostasCorretas[index]) {
      acertos++;
    }
  });

  document.getElementById("pontuacao-final").innerText = `Pontuação: ${acertos}/3`;

  let nivel = "";
  let badge = "";

  if (acertos === 3) {
    nivel = "Avançado 🧠";
    badge = "🏆 Mestre da Biologia!";
  } else if (acertos === 2) {
    nivel = "Intermediário 🔬";
    badge = "🥈 Explorador Científico!";
  } else {
    nivel = "Iniciante 🌱";
    badge = "🥉 Curioso Biológico!";
  }

  document.getElementById("nivel-conhecimento").innerText = "Nível: " + nivel;
  document.getElementById("badge-container").innerHTML = `<h3 class="badge-animada">${badge}</h3>`;
  document.getElementById("som-badge").play();

  let melhor = localStorage.getItem("melhorPontuacao") || 0;
  if (acertos > melhor) {
    localStorage.setItem("melhorPontuacao", acertos);
    melhor = acertos;
  }

  document.getElementById("melhor-pontuacao").innerText = `🏅 Sua melhor pontuação: ${melhor}/3`;

  document.getElementById("resultado-quiz").scrollIntoView({ behavior: "smooth" });
}

function exportarResultado() {
  html2canvas(document.getElementById("resultado-quiz")).then(function(canvas) {
    let link = document.createElement("a");
    link.download = "resultado_quiz.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}
