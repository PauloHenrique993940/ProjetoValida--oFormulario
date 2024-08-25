/*
Na atividade prática deste módulo, você irá praticar todos os conceitos aprendidos. Se tiver dúvidas, retome o passo a passo nas aulas.

1) Crie um formulário HTML que possua dois campos numéricos:
campo A
campo B

2) Insira um botão para submeter o formulário.

3) Crie uma validação no JavaScript, na qual o formulário será válido caso o número B seja maior que o número A.

4) Exiba uma mensagem positiva para o usuário quando o formulário for válido e uma mensagem negativa quando for inválido.

5) Suba no Github no repositório do curso em uma branch chamada git branch -m master exercicio_html_js

6) Copie o link do repositório na plataforma da EBAC que a equipe de tutoria dará o feedback.


Entrega: Exercício Módulo 7
Olá, estudante!
Uma informação importante: esse exercício foi atualizado, mas alteramos apenas a narrativa, o objetivo continua o mesmo. Se você já realizou a atividade e foi aprovado, pode seguir em sua jornada.
Bons estudos 😄
O tutor irá corrigir sua tarefa em 2 dias úteis.
A nota mínima para aprovação na tarefa é 70. Se você não atingir essa nota, você pode refazer a tarefa
*/
const frm = document.querySelector("form");
const resp1 = document.querySelector("#inResp");
const resp2 = document.querySelector("#inResp1");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const primeiroValor = Number(frm.campoA.value);
    const segundoValor = Number(frm.campoB.value);

    // Limpa as mensagens antigas
    resp1.innerHTML = "";
    resp2.innerHTML = "";

    if (primeiroValor === segundoValor) {
        resp1.innerHTML = "Para validação, os campos não podem ser iguais";
        resp1.style.color = "black";
        resp1.style.background = "yellow"; // Alterei para uma cor visível
        resp1.style.border = "2px solid red";

        // Limpa os campos de entrada
        frm.campoA.value = "";
        frm.campoB.value = "";
    } else if (primeiroValor > segundoValor) {
        resp1.innerHTML = "Parabéns! O formulário foi validado com sucesso";
        resp1.style.color = "#fff";
        resp1.style.background = "#146551";

        // Limpa os campos de entrada
        frm.campoA.value = "";
        frm.campoB.value = "";
    } else {
        resp2.innerHTML = "Erro! Formulário não pode ser validado";
        resp2.style.color = "#fff";
        resp2.style.background = "red";
        resp2.style.padding = "10px";

        // Limpa os campos de entrada
        frm.campoA.value = "";
        frm.campoB.value = "";
    }
});






