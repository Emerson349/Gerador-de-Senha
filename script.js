function updateValue(value) {
  document.getElementById('charValue').textContent = value;
}

function toggleSymbol(element) {
  element.classList.toggle('ativo');
}

function gerarSenha() {
  const minusculas = "abcdefghijklmnopqrstuvwxyz";
  const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeros = "123456789123456789";
  const simbolos = "!@#$%^&*()-_=+[]{}|;:',.<>?/";

  const checkBox1 = document.getElementById("uppercase").checked;
  const checkBox2 = document.getElementById("numbers").checked;
  const checkBox3 = document.getElementById("simbols").checked;

  const tamanhoSenha = document.getElementById("charValue").textContent;

  let string = minusculas;

  if (checkBox2)  {
    string += numeros;
  }
  if (checkBox1) {
    string += maiusculas;
  }
  if (checkBox3) {
    string += simbolos;
  }

  let senha = "";
  for (let i = 0; i < tamanhoSenha; i ++) {
    let index = Math.floor(Math.random() * string.length);
    senha += string[index];
  }

  document.getElementById("resultado").innerHTML = senha;

  document.getElementById('mensagem').style.display = 'block';
  document.getElementById('caixa-de-resultado').style.display = 'flex'

  setTimeout(() => {
    document.getElementById('mensagem').style.opacity = 1;
  }, 5);

  setTimeout(() => {
    document.getElementById('caixa-de-resultado').style.opacity = 1;
  }, 10);
}

function copiar() {
  const texto = document.getElementById("resultado").textContent;

  navigator.clipboard.writeText(texto).then(() => {
    alert("Texto copiado para a área de transferência!");
  }).catch((err) => {
    alert("Erro ao copiar texto: " + err);
  });
}

