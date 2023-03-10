function exibirNome() {
 var nome = document.getElementById("nome").value;
 nome = nome.replace(/ \s+/g, ' ').trim();
 nome = nome.split(" ");
 document.getElementById('output1').value = nome[0];
 var outroNome = nome.slice(1);
 document.getElementById('output2').value = outroNome.join(" ");
  }