# Processo

Para este exercício utilizei como base o exemplo sobre o if/else disponibilizado pelo professor. 

Preservei a linha de código createCanvas (windowWidth, windowHeight) de forma a que se o tamanho do canvas se adaptasse ao tamanho da tela do utilizador.

De seguida alterei o círculo para um retângulo e com o auxílio do copilot usei o *const*
 para as seguintes funções:
 * const squareSize = min(width, height) / 8; 
 o lado de cada quadrado é um oitavo do lado menor da janela. 

 * const gap = squareSize / 4;
 corresponde ao espaço entre os quadrados, ou seja, a um quarto do tamanho do quadrado.
  
 * const step = squareSize + gap;
 corresponde à distância entre o ínicio de um quadrado e o íncio do seguinte.

 Em seguida, utilizei dois loops encaixados:
 * for (let y = 0; y < height; y += step) {
 * for (let x = 0; x < width; x += step) {
São essenciais para a criação da grelha, pois o loop exterior percorre as linhas (de cima a baixo) e o loop interior percorre as colunas (esquerda para a direita). Nas posições existentes (x e y) é desenhado um quadrado.

 Para que as cores mudassem conforme a posição do rato, alterei o código do exemplo If/Else (ver o original abaixo).

  function draw() {
    background(255);

    if (mouseX < width/2) {
        if (mouseY>height/2){
            fill(255,0,0);
        }
        else {
            fill(0,255,0);
        }
    }   
    else {
        if (mouseY>height/2){
            fill(0,0,255);
        }
        else {
            noFill();       
        }
    }

para este:

function draw() {
  background(250);

    const squareSize = min(width, height) / 8;
    const gap = squareSize / 4;
    const step = squareSize + gap;

    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        if (mouseX < width / 2) {
          if (mouseY < height / 2) {
            fill(random(120, 256), 0, 0);
          } else {
            fill(0, 0, random(120, 256));
          }
        } else {
          if (mouseY < height / 2) {
            fill(0, random(120, 256), 0);
          } else {
            fill(random(120, 256), random(120, 256), 0);
          }
        }

        strokeWeight(random(2, 20));
        rect(x, y, squareSize, squareSize);
      }
    }
}
 

Através do uso random, e da alteração dos valores rgb, criei uma maior variedade de cores. O ecrã divide-se em 4 partes:
* lado esquerdo, parte superior: tons vermelhos 
* lado esquerdo, parte inferior: tons azuis
* lado direto, parte superior: tons verdes
* lado direito; parte inferior: tons amarelos

Para a alteração da espessura dos quadrados usei esta parte do código original:

  strokeWeight(random(2,20));

circle(width/2, height/2, height/4);

  }

e com o auxílio do copilot fiz alterações para se adaptar à forma retangular:

strokeWeight(random(2, 20));
rect(x, y, squareSize, squareSize);

Por fim, usei o windowResized para a janela se adaptar a qualquer tamanho de ecrã.