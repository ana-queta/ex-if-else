# Processo

Para este exercício utilizei como base o exemplo sobre o if/else disponibilizado pelo professor. 

Preservei a linha de código createCanvas (windowWidth, windowHeight) de forma a que se o tamanho do canvas se adaptasse ao tamanho da tela do utilizador.

De seguida alterei o círculo para um retângulo e com o auxílio do copilot usei o *const*
 para as seguintes funções:
 * const squareSize = min(width, height) / 8; 

 o lado de cada quadrado é um oitavo do lado menor da janela 
 * const gap = squareSize / 4;

 corresponde ao espaço entre os quadrados, ou seja um quarto do tamanho do quadrado
 * const step = squareSize + gap;
 
 corresponde à distância entre o ínicio de um quadrado e o íncio do seguinte

 Depois existem dois loops encaixados:
 * for (let y = 0; y < height; y += step) {
 * for (let x = 0; x < width; x += step) {