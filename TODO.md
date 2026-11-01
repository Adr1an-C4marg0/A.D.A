# TODO - A.D.A. / Caso 01: A Queda do Quarto 304

## Direção do projeto

- [x] Definir o nome oficial como **Agência de Detetives Anônimos (A.D.A.)**.
- [x] Definir a A.D.A. como agência/plataforma que recebe casos não resolvidos pela polícia.
- [x] Definir o formato híbrido: quadro de investigação, documentos, notas, arquivos e entrevistas.
- [x] Definir casos independentes, com uma camada opcional de mistério entre eles.
- [x] Definir o jogador como novo recruta da A.D.A.
- [x] Definir os papéis narrativos como fixos, com pessoas, nomes, fotos e histórias variáveis.
- [x] Definir o predecessor como uma das pessoas do caso, inicialmente oculto, que envia notas.
- [x] Definir o primeiro caso como uma morte suspeita.

## Estado atual do protótipo

- [x] Criar a mesa de investigação com madeira, fotos, post-its, fios e lixeira.
- [x] Criar tela inicial e introdução ao caso.
- [x] Criar arrastar e reposicionar itens.
- [x] Criar conexões visuais entre evidências.
- [x] Criar post-its editáveis para anotações do jogador.
- [x] Criar descarte e restauração de itens pela lixeira.
- [x] Criar progressão básica por dias.
- [x] Criar jornais e notas dinâmicos.
- [x] Criar requisição inicial de arquivos.
- [x] Criar persistência com `localStorage`.
- [x] Corrigir conteúdo digitado pelo jogador para usar `textContent`.
- [x] Adicionar suporte inicial a teclado, foco e descrições acessíveis.
- [x] Adicionar tratamento básico para estado salvo inválido.
- [x] Adicionar feedback sonoro e visual.
- [x] Adicionar música ambiente procedural e feedback sonoro contextual.
- [x] Manter o quadro principal como interface de investigação, sem lupa auxiliar.
- [x] Remover o menu superior, o arquivo separado e o painel de depoimentos da interface final.
- [x] Substituir o conteúdo genérico do protótipo pelo Caso 01.
- [x] Implementar entrevistas.
- [x] Implementar conclusão principal.
- [ ] Implementar descoberta opcional do predecessor.
- [ ] Adicionar testes automatizados para as mecânicas principais.

## Prioridade 1 — Modelo de dados dos casos

- [x] Substituir o modelo simples de caso por uma estrutura extensível.
- [x] Adicionar `id` e título do Caso 01.
- [x] Adicionar lista de personagens com IDs estáveis.
- [x] Adicionar papéis narrativos para vítima, suspeitos, familiar, policial e predecessor.
- [x] Separar identidade do personagem, papel narrativo, aparência e conteúdo.
- [x] Adicionar jornais por dia em uma coleção `newspapers`.
- [x] Adicionar notas por dia em uma coleção `dayNotes`.
- [x] Adicionar arquivos requisitáveis em uma coleção `files`.
- [x] Adicionar respostas de entrevistas em uma coleção `interviews`.
- [ ] Adicionar evidências descobertas e suas descrições.
- [ ] Adicionar regras da solução principal.
- [ ] Adicionar regras da descoberta opcional do predecessor.
- [x] Remover conteúdo específico de casos de dentro de `advanceDay()`.
- [x] Fazer a progressão consumir os dados do caso atual.

## Prioridade 2 — Conteúdo do Caso 01

### Identidade do caso

- [x] Criar o caso `caso_quarto_304`.
- [x] Definir o título como **A Queda do Quarto 304**.
- [ ] Definir a vítima como Elisa Moura.
- [ ] Definir o local como Hotel Mirante.
- [ ] Definir a ligação da vítima com o Hospital Municipal Santa Augusta.
- [ ] Definir a classificação inicial como morte acidental.
- [ ] Definir a verdade como homicídio cometido por Daniel Ferraz.
- [ ] Definir Augusto Vale como cúmplice do encobrimento.
- [ ] Definir Lívia Campos como predecessor oculto.

### Personagens

- [x] Cadastrar Elisa Moura, arquivista e vítima.
- [x] Cadastrar Augusto Vale, gerente do hotel.
- [x] Cadastrar Renata Moura, irmã da vítima.
- [x] Cadastrar Daniel Ferraz, funcionário do hospital e responsável pela morte.
- [x] Cadastrar Lívia Campos, jornalista e predecessor.
- [x] Cadastrar Marcelo Nunes, policial responsável pelo caso.
- [ ] Definir nomes, fotos, descrições, relações e estilos de escrita.
- [ ] Garantir que o predecessor apareça inicialmente como remetente desconhecido.
- [ ] Permitir revelar a identidade de Lívia apenas na camada opcional.

### Dia 1 — Fotografias e versão oficial

- [x] Criar jornal “Arquivista morre após queda em hotel durante apagão”.
- [x] Entregar imagens-placeholder do corrimão e da garrafa sem copo.
- [ ] Criar foto do corpo no pátio interno.
- [ ] Criar foto da escada de emergência.
- [ ] Criar foto do quarto 304.
- [ ] Criar foto da mesa de Elisa.
- [ ] Criar foto do corredor e da câmera desligada.
- [ ] Apresentar a hipótese inicial de acidente.
- [ ] Garantir que as imagens contenham pistas observáveis:
  - [ ] garrafa sem copo;
  - [ ] sapatos limpos;
  - [ ] marca no corrimão;
  - [ ] página arrancada do caderno;
  - [ ] câmera desligada.

### Dia 2 — Notas dos envolvidos

- [x] Criar nota de Augusto sobre a chegada de Elisa.
- [x] Criar nota de Renata sobre o comportamento da irmã.
- [x] Criar nota de Daniel minimizando os arquivos alterados.
- [x] Criar nota de Marcelo sobre a investigação policial.
- [x] Criar nota anônima do predecessor: “Não comece pela garrafa. Comece pelo corrimão.”
- [ ] Marcar quais trechos são verdadeiros, incompletos ou mentirosos.
- [ ] Criar jornal “Polícia mantém hipótese de acidente”.
- [ ] Entregar as notas sem revelar imediatamente seus remetentes.
- [x] Entregar imagem-placeholder da câmera desligada durante o apagão.

### Dia 3 — Arquivos e requisições

- [ ] Criar jornal sobre a possível ligação com documentos hospitalares.
- [x] Liberar a ferramenta de Requisição de Arquivos.
- [x] Permitir requisitar arquivos de todos os personagens válidos.
- [ ] Criar arquivo de Elisa sobre documentos alterados.
- [ ] Criar arquivo de Daniel sobre acessos fora do horário.
- [ ] Criar arquivo de Augusto com as ligações da recepção.
- [ ] Criar arquivo de Lívia com a mensagem recebida antes da divulgação oficial.
- [ ] Criar arquivo de Marcelo com as limitações da investigação.
- [ ] Criar arquivo de manutenção do Hotel Mirante.
- [x] Entregar imagem-placeholder da página azul arrancada do caderno.
- [ ] Exibir erro explícito para nomes inexistentes.
- [ ] Diferenciar arquivo inexistente, arquivo bloqueado e arquivo já requisitado.

### Dia 4 — Conexões e predecessor

- [ ] Criar nota do predecessor sobre o corrimão e o apagão.
- [ ] Criar evidência ligando Daniel aos arquivos do hospital.
- [ ] Criar evidência ligando Daniel ao Hotel Mirante.
- [ ] Criar evidência ligando Augusto ao encobrimento.
- [ ] Criar evidência sobre a câmera desligada por onze minutos.
- [ ] Criar jornal “Funcionário do hospital nega envolvimento”.
- [ ] Permitir conectar arquivos, fotos, notas e personagens.
- [ ] Registrar evidências descobertas independentemente da posição visual no quadro.

### Dia 5 — Entrevistas

- [x] Entregar planilha oficial com perguntas no Dia 5.
- [x] Liberar o painel de Entrevistas somente após a planilha ser entregue.
- [x] Permitir montar uma entrevista arrastando a nota do autor e a nota do tema para as marcações da planilha.
- [x] Exibir um botão global, grande e misterioso para fazer a entrevista.
- [x] Fazer o botão global agendar a entrevista para o autor da nota sobre o tema da outra nota.
- [ ] Criar entrevista de Augusto sobre a recepção e o quadro de energia.
- [ ] Criar entrevista de Renata sobre a “página azul”.
- [ ] Criar entrevista de Daniel sobre mensagens, hotel e arquivos.
- [ ] Criar entrevista de Lívia sobre a denúncia anônima.
- [ ] Criar entrevista de Marcelo sobre a investigação incompleta.
- [ ] Permitir escolher a ordem das entrevistas.
- [ ] Não punir respostas ou escolhas incorretas.
- [ ] Registrar respostas e revelações como evidências no quadro.
- [ ] Revelar, opcionalmente, que Lívia é o predecessor.

## Prioridade 3 — Requisição de arquivos

- [ ] Normalizar acentos, maiúsculas e minúsculas nas buscas.
- [ ] Aceitar nome completo e primeiro nome quando não houver ambiguidade.
- [ ] Usar IDs internos em vez de comparar apenas texto visível.
- [ ] Associar cada arquivo ao personagem ou à evidência correta.
- [ ] Permitir mais de uma requisição ao longo da investigação.
- [ ] Definir quais arquivos ficam disponíveis em cada dia.
- [ ] Preservar requisições pendentes ao salvar o jogo.
- [ ] Exibir os arquivos recebidos como dossiês no quadro.

## Prioridade 4 — Entrevistas

- [x] Criar painel visual de entrevistas em `index.html`.
- [x] Adicionar lista de personagens entrevistáveis.
- [x] Adicionar perguntas livres e respostas por personagem.
- [ ] Adicionar perguntas condicionais quando uma evidência já foi encontrada.
- [ ] Exibir claramente o remetente e o conteúdo de cada resposta.
- [ ] Permitir fechar e reabrir entrevistas.
- [ ] Salvar entrevistas concluídas.
- [ ] Transformar revelações importantes em evidências conectáveis.
- [ ] Garantir navegação por teclado e foco acessível.

## Prioridade 5 — Evidências e conclusão

- [x] Entregar documento oficial de encerramento no Dia 7.
- [x] Liberar o formulário de conclusão somente após o documento de encerramento ser entregue.
- [x] Tornar o checklist do documento de encerramento interativo no próprio documento.
- [ ] Criar registro interno de evidências descobertas.
- [ ] Associar evidências a fotos, notas, arquivos e entrevistas.
- [ ] Diferenciar evidência observada de hipótese escrita pelo jogador.
- [ ] Criar solução principal com Daniel como responsável pela morte.
- [ ] Criar solução de encobrimento com Augusto como cúmplice.
- [ ] Verificar se a conclusão pode ser alcançada sem descobrir o predecessor.
- [ ] Criar conclusão opcional identificando Lívia como predecessor.
- [x] Criar tela de conclusão do caso.
- [ ] Mostrar evidências encontradas e evidências ausentes.
- [ ] Permitir voltar ao quadro após concluir.
- [ ] Permitir reiniciar o caso sem apagar dados incompatíveis de outros casos.

## Prioridade 6 — Interface e organização do quadro

- [ ] Atualizar o nome visível para “Agência de Detetives Anônimos — A.D.A.”.
- [ ] Remover referências ao Caso 404, Beco do Corvo e textos genéricos.
- [ ] Organizar itens por categorias: pessoas, jornais, arquivos, notas e fotos.
- [ ] Evitar que muitos itens fiquem sobrepostos.
- [ ] Melhorar posicionamento automático para telas menores.
- [ ] Avaliar zoom ou panorâmica para quadros grandes.
- [ ] Adicionar indicação visual de conteúdo novo recebido.
- [ ] Adicionar indicador de conteúdo desbloqueado por dia.
- [ ] Preservar a estética de papel, fotos, post-its, fios e lixeira.
- [ ] Revisar textos, rótulos, títulos e mensagens em português brasileiro.

## Prioridade 7 — Imagens e assets

- [x] Adicionar foto final de Elisa Moura.
- [x] Adicionar foto de Augusto Vale.
- [x] Adicionar foto de Renata Moura.
- [x] Adicionar foto de Daniel Ferraz.
- [x] Adicionar foto de Lívia Campos.
- [x] Adicionar foto de Marcelo Nunes.
- [x] Adicionar foto do pátio interno.
- [x] Adicionar foto da escada de emergência.
- [x] Adicionar foto do quarto 304.
- [x] Adicionar foto da mesa de Elisa.
- [x] Adicionar foto do corredor e da câmera.
- [ ] Adicionar texto alternativo descritivo para todas as imagens.
- [ ] Manter placeholders funcionais enquanto os assets finais não existirem.

## Prioridade 8 — Persistência e compatibilidade

- [x] Versionar o formato salvo do jogo.
- [ ] Salvar arquivos desbloqueados separadamente.
- [ ] Salvar evidências descobertas separadamente.
- [x] Salvar perguntas de entrevistas pendentes.
- [ ] Salvar revelação do predecessor.
- [ ] Salvar estado da conclusão.
- [ ] Validar dados restaurados antes de usá-los.
- [ ] Migrar ou invalidar com segurança salvamentos do protótipo antigo.
- [ ] Garantir que notas na lixeira não reapareçam no quadro.
- [ ] Garantir que conexões para itens removidos sejam descartadas.
- [ ] Testar recarregamento em cada dia da investigação.

## Testes e validação

- [ ] Testar no navegador o fluxo completo, especialmente perguntas no Dia 5 e respostas recebidas no dia seguinte.
- [ ] Testar seleção aleatória e restauração do caso.
- [ ] Testar progressão do Dia 1 ao Dia 5 no navegador.
- [ ] Testar que cada jornal corresponde ao dia correto.
- [ ] Testar entrega de todas as notas do dia.
- [ ] Testar requisição válida de cada personagem.
- [ ] Testar nomes com acentos, caixa diferente e primeiro nome.
- [ ] Testar nome inexistente e requisição duplicada.
- [ ] Testar entrega de arquivo pendente no dia seguinte.
- [ ] Testar entrevistas em ordens diferentes.
- [ ] Testar conclusão sem a descoberta opcional.
- [ ] Testar conclusão com a descoberta do predecessor.
- [ ] Testar arrastar, conectar e descartar todos os tipos de item.
- [ ] Testar teclado e foco nas novas interações.
- [ ] Testar persistência após recarregar a página.
- [ ] Testar reinício completo do caso.
- [x] Criar sequência de falha após três tentativas, com retirada dos documentos e documento de desligamento.
- [x] Reiniciar o caso após assinatura do documento de desligamento.
- [ ] Executar lint, testes e validação manual no navegador.

## Critérios de pronto do Caso 01

- [x] O jogador consegue iniciar o caso e entender o objetivo.
- [x] O jogador recebe jornal e conteúdo novo nos cinco dias.
- [x] O jogador consegue requisitar arquivos de qualquer personagem válido.
- [x] O jogador consegue enviar perguntas aos personagens no Dia 5.
- [x] O jogador consegue resolver a morte de Elisa sem depender da camada oculta.
- [x] A solução identifica Daniel como responsável pela morte.
- [x] A solução identifica Augusto como colaborador do encobrimento.
- [ ] A descoberta opcional identifica Lívia como predecessora.
- [x] Nenhuma escolha incorreta bloqueia o progresso.
- [x] O progresso básico permanece salvo e pode ser restaurado.
- [x] O caso funciona sem os textos de caso antigos.
- [ ] A interface precisa ser validada em telas menores com o novo conteúdo.

## Melhorias futuras

- [ ] Criar mais casos independentes: roubo, sequestro, espionagem e infiltração.
- [ ] Sortear personagens, nomes, fotos, cores e fontes por caso.
- [ ] Criar padrões recorrentes entre casos sem exigir uma ordem fixa.
- [ ] Criar camada opcional envolvendo a A.D.A.
- [ ] Reduzir dependência de CDN e avaliar empacotamento local.
- [ ] Separar estado, renderização, interação e dados em módulos.
- [ ] Otimizar imagens e texturas.
