# TODO - A.D.A. / O Caso 404

## Estado atual

Implementação concluída em 31/10/2026: persistência, segurança, responsividade,
acessibilidade e reinício foram integrados ao protótipo. A tela de encerramento
permanece planejada, mas desativada até ser solicitada.

**Classificação:** protótipo avançado / vertical slice  
**Avaliação geral:** 7/10

O projeto já possui uma identidade visual forte e uma mecânica jogável de investigação, com quadro de evidências, post-its, conexões, descarte de itens, progressão por dias e consultas de suspeitos.

## Prioridade alta

- [x] Adicionar persistência com `localStorage` para salvar o dia atual, notas, posições, conexões, itens descartados e solicitações pendentes.
- [x] Corrigir o uso de `innerHTML` com conteúdo digitado pelo jogador, utilizando `textContent` para evitar injeção de HTML.
- [x] Melhorar a responsividade para telas menores, evitando que os elementos posicionados absolutamente fiquem sobrepostos ou fora da área visível.
- [x] Criar um fluxo de reinício de caso e tratamento para estados inválidos ou progresso corrompido.

## Prioridade média

- [x] Adicionar suporte a teclado, foco visível e descrições acessíveis para os principais elementos interativos.
- [x] Permitir interação sem mouse ou oferecer uma alternativa acessível para arrastar itens e criar conexões.
- [x] Separar casos, pistas e eventos em uma estrutura de dados para facilitar a criação de novas investigações.
- [x] Adicionar mais casos, suspeitos, pistas e finais para aumentar a rejogabilidade.
- [x] Adicionar feedback sonoro e visual para arrastar, conectar, descartar itens, receber pistas e encerrar o dia.
- [ ] Adicionar testes para progressão de dias, consultas de arquivos, conexões e descarte de itens.

## Prioridade baixa

- [ ] Reduzir a dependência de CDN, avaliando o empacotamento local do Tailwind e das fontes.
- [ ] Melhorar a organização do código JavaScript, separando estado, renderização, interação e dados.
- [x] Criar uma tela inicial, instruções e uma introdução ao caso.
- [ ] Adicionar tela de conclusão e possibilidade de voltar ao quadro/reiniciar.
- [ ] Otimizar imagens e avaliar carregamento das texturas e fotos.

## Pontos fortes a preservar

- Identidade visual marcante e coerente.
- Atmosfera de investigação criada com madeira, fotos, post-its, fios, dossiês e lixeira.
- Mecânicas de arrastar objetos, conectar evidências e avançar por dias.
- Estrutura de dados que já permite expandir o projeto para vários casos.
- Separação inicial entre [index.html](./index.html), [style.css](./style.css) e [script.js](./script.js).
