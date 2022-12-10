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

- depois de x interações do toExecute sem functions ele começa ativa função que deixa o cubo rodando, como um descanço de tela





NOTAS DE ATUALIZAÇÕES
05-15-2022 
  - o cubo já funciona com todos os movimentos básicos:
    R | R' | L | L' | U | D | F | B
  - e com mais alguns úteis:
    U' | D' | F' | B'

  - é possível mover o cubo de uma forma 3D mais interativa pelo próprio cubo;
  - foi adicionado efeitos para o cursor para esse processo

  - foi suavisado o modo como o cubo aparece


05-23-2022
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


xx-xx-xxxx
  - arquivo agora com 2 elementos principais: index.html e pasta assets
    - de modo a simplificar para o usuário e melhorar o desenvolvimento do app
    - assets contem scripts e páginas de estilo
  - a personalização toda do cubo foi movida para um novo arquivo ./assets/style/cubeStyle/stylecube.css
    - de mode a criar um "layout" para uma melhor personalização do cubo

  - foram corrigidos erros de rotação dos das partes dos cubos7

  - agora undo e undo all não bugam mais o cubo, pois automaticamente param a execução to toExecute antes de serem executados

  - foi adicionado o atributo mark para registrar a rotação das peças do cubo já que algumas peças podem estar no lugar certo porém na direção errada




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

  DONE
    function2Exectue must be:
    {
      function:
      add2Historic: true / false
    }

  DONE- colocar para remover um do historico depois de cada movimento, pois se clicar em undo all, e depois em stop o cubo fica errado

      - colocar quando apertar em undo all bloquear a tela toda e deixar só stop, otherwise isso buga o cubo
  DONE- ou só cancelar o toExecute

  - execute executa um array de funções,
      para ser possível fazer aqueles movimentos que vai 2
  
  DONE - arrumar as rotações das dos span que mudam sempre que trocam de cube-part, porque isso é uma parte importante na ideia do projeto: temas personalizados

  - mudar jeito de pegar os oncliks
	usar o meu método de pegar items dentro de ()
	
  - verificar se tem como trocar algum array por map, já que são mais rápidos em busca

  - use strict

      - a tentativa de inserir a imagem usando background-image não foi um sucesso total: isso apresenta alguns bugs visuais
      - tentar inserir a imagem diretamente no HTML :(
  DONE : na verdade deu certo, o problema era com as rotações ainda aprensentavam erros e bugavam a visualização XD

  - quando animationSpeed muito baixo, dá erro no css, mas não nos movimentos
    - fazer um movimento de cada e depois voltar arruma

  // a tentativa de salvar o estado atual do cubo para voltar quando testar os movimentos foi um fracasso
    - então os testes demorarão tempo*2
    - pois precisarão voltar as funções depois de cada teste para prosseguir para o póximo teste
    - vou usar as coisas que já tem, toExecute para testar e undo para desfazer XD
    - parece que demoraria cerca de 8.3h * 2 no pior dos casos para achar a solução

  - não permitir fazer 360 na vertical quando rotacionar o cubo
  - tentar deixar suave
  - mudar o controle para fora do cubo

  - vou tentar fazer um sistema de testar as possibilidades em um array
  - assim consigo voltar pro ponto 0 depois de cada teste
  - e vai ser muito muito mais rápido

  - tentar achar o estado atual atual do cubo e pegar as funções que usou?