ANOTAÇÕES
cube-part :

  19 20 21
  22 23 24
  25 26 27

  10 11 12
  13 14 15
  16 17 18

  01 02 03
  04 05 06
  07 08 09


cube-part-[side]:
  - bottom
  - back  -> left
  - right -> back
  - left  -> front
  - front -> right
  - top


todos os blocos são pintados iguais
  - de 1 parte:
    - top

  - de 2 partes:
    - front
    - top

  - de 3 partes:
    - left
    - front
    - top
  

depois são distribuídos com transforms
guardar os primeiros encontrados no css em um array, nao ordem
js muda os transforms entre os objetos






PROGRESSO / COMENTÁRIOS
- foi distribuidas as peças
- todos os movimentos básicos foram adicionados
- mas tem um erro com as rotações

- foi adicionada uma rotação 3d mais interativa 
  - para acelerar o desenvolvimento
  - ainda não 100%
  - melhorei !!!!!!! - agora não reseta sempre que clica de novo





IDEIAS / COMENTÁRIOS
-Alguns temas para adicionar:
  - vidro - opacity X (0.9 is good)
  - só uma linha na borda

- adicionar maneiras diferentes do cubo aparecer (aleatórias)

- adicionar sombra?

- box shadow no #cube dá um efeito legal ao redor

- bordas #fff são bonitas

- mortrar graus da rotação do cubo (para ativar)





NOTAS DE ATUALIZAÇÕES
05-15-2022 
  - o cubo já funciona com todos os movimentos básicos:
    R | R' | L | L' | U | D | F | B
  - e com mais alguns úteis:
    U' | D' | F' | B'

  - é possível mover o cubo de uma forma 3D mais interativa pelo próprio cubo;
  - foi adicionado efeitos para o cursor para esse processo

  - foi suavisado o modo como o cubo aparece



