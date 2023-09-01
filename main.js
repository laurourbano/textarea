export function salvarConteudo() {
  const textarea = document.getElementById('conteudo');
  const resultado = document.getElementById('resultado');

  // pega o conteúdo do textarea
  const conteudo = textarea.value;

  // salva o conteúdo (em algum lugar como, por exemplo, um banco de dados)
  // está sendo armazenando na variável
  const conteudoSalvo = conteudo;

  // regex para processar o conteúdo salvo para transformar URLs em links
  const regex = /(https?:\/\/[^\s]+)/g;
  const textoComLinks = conteudoSalvo.replace(regex, '<a href="$1" target="_blank" class="links">$1</a>');

  // insere o conteúdo da div resultado com os links apos o regex
  resultado.innerHTML = textoComLinks;
}

