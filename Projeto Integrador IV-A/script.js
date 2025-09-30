//Inicio da criação de Slides
let index = 0;
const slides = document.querySelectorAll('.slide');

//Função para deixar os slides ativos
function showSlide(i) {
slides.forEach((s, j) => s.classList.toggle('active', j === i));
}

//Função para passar o próximo slide
function nextSlide() {
index = (index + 1) % slides.length;
showSlide(index);
}

//Função para voltar para o slide previo
function prevSlide() {
index = (index - 1 + slides.length) % slides.length;
showSlide(index);
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Slide passa automáticamente a cada 15s
setInterval(nextSlide, 15000);

showSlide(index);

//Aplica o formato de moeda Brasileira para o formulário de doações
const input = document.getElementById("valor");
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  input.addEventListener("input", () => {
    let value = input.value.replace(/\D/g, ""); // só números
    value = (value / 100).toFixed(2);           // divide por 100 para centavos
    input.value = formatter.format(value);      // aplica formato monetário
  });

  // Identifica variavel por variavel
  function ValidarDoacao() {
    var nome = document.getElementById('nome').value.trim();
    var email = document.getElementById('email').value.trim();
    var valor = document.getElementById('valor').value;

    // Verifica se algum campo está vazio
    if (nome === '' || email === '' || valor === '') {
        alert('Por favor, preencha todos os campos de doação.');
        return false;
    }
    
    // Avisa caso o Valor inserido seja igual a 0,00 impedindo uma doação nula
    if (valor === 'R$ 0,00') {
      alert('Por favor, defina um valor válido.');
      return false;
  }

    // Validação e redirecionamento
    alert('Muito obrigado por sua Doaçao!!!');;
    return true;
}

  // Identifica variavel por variavel
  function ValidarVoluntario() {
    var nome = document.getElementById('nomevol').value.trim();
    var email = document.getElementById('emailvol').value.trim();
    var senha = document.getElementById('senha').value;
    var senhanovamente = document.getElementById('senhanovamente').value;

    // Verifica se algum campo está vazio
    if (nome === '' || email === '' || senha === '' || senhanovamente === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    // Verifica se as senhas coincidem
    if (senha !== senhanovamente) {
        alert('As senhas não coincidem.');
        return false;
    }

    // Validação e redirecionamento
    alert('As senhas coincidem.');
    return true;
}
