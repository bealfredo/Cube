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


xx-xx-xxxx
  - foi adicionado movimentos aleatórios
    - 1 movimento ou X movimentos
    - output de movimentos restantes
    - botões de movimentos são bloqueados durante randomMoves()

  - foi adicionado area que executa um grupo de funções

  - foi adiciona um histórico dos movimentos realizados
    - também conta com as funções desfazer 1 e desfazer todos
  
  - agora todos os movimentos são realizados por um setInterval que tem o intervalo de animação do cubo
    - então os botões não executam, mas mandam as funções para esse array
    - as funções de desfazer também
    - a função parar para essa executação limpando o array
    - isso pode ter diminuido a sensação de movimentos instantâneos, mas certamente evita muitos bugs em relação ao rotacionamento do cubo

  - agora podem ser adicionados imagems para os cubos uma vez que os lados também giram e matém o seu estado,
  - diferente da versão anterior que a rotação era sempre resetada e as cores eram trocadas entre as partes
  - agora o conteúdo inteiro interno dos elementos HTML são trocados

  - o arquivo possibilities.js contém alguns movimentos aleátorios que podem resolver o cubo
  - mas ainda não foi testado



TODO
  DONE- star executa até as inversas
  DONE- não está cancelando buttons of groupExecute
  
  - colorir botoes durante groupExecute
  - e depois apagar a cor
  - durante select cancelar botoes do group execute

  - trocar a forma de pegar os onclicks?
    - com getAttribute('onclick') também é possível

  - sempre que adicionar funcções ao toExecute aparecer uma notificação embaixo
    - "+1"
    - que some e vai em 3 segundos

  - usar o toExecute para executar funções antes e depois dos movimentos??

  DONE- adicionar o evento de adicionar para o historico quando criar os buttons of groupExecute
  DONE- e toExecute
  DONE- desfazer na verdade adiciona para o toExecute em vez de executar automaticamente

  function2Exectue must be:
  {
    function:
    add2Historic: true / false
  }

  DONE- colocar para remover um do historico depois de cada movimento, pois se clicar em undo all, e depois em stop o cubo fica errado

  - colocar quando apertar em undo all bloquear a tela toda e deixar só stop, otherwise isso buga o cubo

  - execute executa um array de funções,
      para ser possível fazer aqueles movimentos que vai 2
  
  DONE - arrumar as rotações das dos span que mudam sempre que trocam de cube-part, porque isso é uma parte importante na ideia do projeto: temas personalizados

  - mudar jeito de pegar os oncliks
	usar o meu método de pegar items dentro de ()
	
  - verificar se tem como trocar algum array por map, já que são mais rápidos em busca

  - use strict
