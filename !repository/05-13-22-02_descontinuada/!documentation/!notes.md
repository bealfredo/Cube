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
  - back
  - right
  - left
  - front
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
  
a ordem de preferencia para o top do bloco segue a lista de declaração

depois são distribuídos com transforms
guardar os primeiros encontrados no css em um array, nao ordem
js muda os transforms entre os objetos