const curiosidades = [
    "O corpo humano tem cerca de 37 trilhões de células.",
    "A água-viva Turritopsis dohrnii é conhecida como biologicamente imortal.",
    "O DNA humano é 60% igual ao de uma banana.",
    "Os fungos são mais geneticamente parecidos com os animais do que com as plantas.",
    "As girafas têm a mesma quantidade de vértebras no pescoço que os humanos: sete."
];

function mostrarCuriosidade() {
    const indice = Math.floor(Math.random() * curiosidades.length);
    document.getElementById("curiosidadeTexto").innerText = curiosidades[indice];
}
