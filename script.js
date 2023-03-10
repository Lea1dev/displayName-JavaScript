function exibirNome() {
 var nome = document.getElementById("nome").value;
  nome = tratarString(nome);
  var outroNome = nome.slice(1);
  document.getElementById('output1').value = nome[0];
  document.getElementById('output2').value = outroNome.join(" ");
  }

function tratarString(palavra){
  palavra = palavra.replace(/ \s+/g, ' ').trim();
  palavra = palavra.split(' ');
  for(var letra = 0; letra < palavra.length; letra++){
    switch(palavra[letra]){
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        alert('Informação inadequada, tente novamente!')
        document.getElementById('nome').innerHtml = none;
        return [];
        break;
    }
  } 
  return palavra;
}