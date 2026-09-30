# 🎸 CifraSync

**Cifra sincronizada, metrônomo e setlists no navegador. Sem instalar nada, sem servidor.**

O CifraSync é um app que sincroniza cifra, letra e metrônomo com o áudio da música. Você importa os arquivos gerados pela análise do SheetSage2 (ou qualquer arquivo de acordes + batidas), e o app monta tudo: carrossel de acordes, cifra sincronizada, destaque na linha atual, transposição, edição e setlists para tocar ao vivo.

Funciona offline depois de aberto pela primeira vez. Todos os dados ficam apenas no seu navegador.

🌐 **Acesse:** https://lexmonteirogm.github.io/cifrasync/

\---

## Sumário

* [Instalação](#instalação)
* [Primeiros passos](#primeiros-passos)
* [Importar uma música](#importar-uma-música)
* [Estruturar a letra](#estruturar-a-letra)
* [Tocar](#tocar)
* [Editar alinhamento](#editar-alinhamento)
* [Editar letra](#editar-letra)
* [Editar acordes](#editar-acordes)
* [Instrumentos: guitarra, baixo 4 e baixo 5](#instrumentos)
* [Transposição](#transposição)
* [Modo apresentação](#modo-apresentação)
* [Setlists](#setlists)
* [Backup e portabilidade](#backup-e-portabilidade)
* [Uso offline](#uso-offline)
* [Atalhos de teclado](#atalhos-de-teclado)
* [Perguntas frequentes](#perguntas-frequentes)

\---

## Instalação

### No computador

Abra **https://lexmonteirogm.github.io/cifrasync/** no Chrome, Edge ou Firefox.

### No celular ou tablet

1. Abra a mesma URL no **Chrome** (Android) ou **Safari** (iOS)
2. Toque no menu (⋮ no Android, botão de compartilhar no iOS)
3. Escolha **"Adicionar à tela inicial"** (Android) ou **"Adicionar à Tela de Início"** (iOS)

O app fica com ícone próprio, abre em tela cheia, e funciona como um aplicativo nativo.

> \*\*Importante:\*\* cada dispositivo tem sua própria biblioteca. Músicas e áudios \*\*não são sincronizados\*\* entre aparelhos. Use a \[exportação de backup](#backup-e-portabilidade) para transferir.

\---

## Primeiros passos

Ao abrir pela primeira vez, você verá três áreas no topo:

* **Biblioteca** — onde ficam suas músicas e setlists
* **Importar** — o assistente para adicionar novas músicas
* **Player** — abre quando você clica numa música

### Fluxo básico





Você começa importando uma música, toca, ajusta o que ficou torto, junta numa setlist e apresenta.



\---



\## Importar uma música



O assistente tem \*\*5 passos\*\*:



\### 1. Arquivos



Você precisa de:



| Arquivo | Obrigatório | O que faz |

|---|---|---|

| `song\_beats.txt` | ✅ | Marca o tempo das batidas |

| `song\_chords.txt` | ✅ | Acordes com início e fim |

| `song\_keys.txt` | ✅ | Tonalidades da música |

| `song\_structures.txt` | ✅ | Seções (intro, verso, refrão...) |

| Letra (`.txt`) | ✅ | Texto da música com tags `\[Verse]` etc. |

| Áudio (`.mp3`) | Opcional | A música em si |



\*\*Formato esperado dos arquivos:\*\* são arquivos de texto com valores separados por \*\*tabs\*\* (o formato que o SheetSage2 gera).



\*\*Formato da letra:\*\*

\[Intro]



\[Verse]

Primeira linha do verso

Segunda linha do verso



\[Chorus]

Refrão vai aqui

Outra linha do refrão



\[Verse]

Mais um verso...





\- Use `\[Nome da seção]` para marcar cada bloco

\- Deixe uma linha em branco entre blocos

\- Seções instrumentais podem ficar vazias (`\[Intro]` sozinho)

\- \*\*Não coloque acordes\*\* no arquivo de letra — eles vêm do `song\_chords.txt`



\### 2. Validar



O app mostra o que leu: BPM detectado, tonalidade, número de seções, número de acordes. Se algo parecer errado, volte e verifique os arquivos.



\### 3. Estruturar a letra



Aqui você pode \*\*ouvir o áudio\*\* e ajustar onde cada seção começa na letra:



\- Clique numa seção (chip) para tocar apenas aquele trecho

\- Ative \*\*Loop\*\* para repetir até achar o ponto certo

\- Coloque o cursor no ponto exato da letra e clique no \*\*+\*\* do chip para inserir a tag ali

\- Ao terminar, clique em \*\*Aplicar e mapear\*\*



Se sua letra já vem bem marcada, pode passar direto.



\### 4. Mapear



O app cruza os blocos da letra com as seções detectadas no áudio. Se o mapeamento automático errar (por exemplo, um `\[Bridge]` que virou verso), você pode corrigir manualmente em cada linha.



\### 5. Salvar



Escolha um título, opcionalmente um artista, e clique em \*\*Salvar na biblioteca\*\*. O app pergunta em qual setlist colocar.



\---



\## Estruturar a letra



Um detalhe importante para o mapeamento funcionar bem: \*\*a análise de estrutura do áudio manda\*\* — a letra só fornece o texto.



Se o `song\_structures.txt` diz que existem 3 versos, 2 refrãos e 1 intro, seu arquivo de letra deve refletir a mesma ordem. Caso contrário, o app tenta mapear do melhor jeito possível, mas o resultado pode exigir ajuste manual.



\---



\## Tocar



Ao abrir uma música da Biblioteca, você vê:



\### Cabeçalho



\- \*\*Título\*\* e metadados (BPM, fórmula de compasso, tom, duração, número de seções)

\- \*\*Botões\*\*: Editar letra, Ver cifra/Editar alinhamento, Limpar ajustes, Exportar, Imprimir



\### Carrossel de acordes



No topo, uma faixa mostra três acordes:


\- O acorde do \*\*centro\*\* é o que está tocando agora, em destaque ciano

\- O da \*\*esquerda\*\* é o anterior (cinza)

\- O da \*\*direita\*\* é o próximo (cinza)



Um \*\*anel pulsa a cada batida\*\* e pisca em verde quando o acorde muda.



Em cima do acorde central aparece o \*\*grau harmônico\*\* (I, IV, V, vi, etc.) conforme a tonalidade atual.



\*\*Clique no acorde central\*\* para abrir um popover com posições alternativas no braço (para guitarra) ou regiões de raiz (para baixo).



\### Cifra sincronizada



A cifra rola automaticamente conforme a música avança. A \*\*linha atual fica destacada\*\* com fundo âmbar e barra lateral dourada. O acorde ativo fica em \*\*ciano brilhante\*\* com uma pequena animação.



\### Player



Na barra inferior:



\- \*\*▶ / ⏸\*\* — Tocar / pausar

\- \*\*■\*\* — Parar e voltar ao início

\- \*\*⏮ / ⏭\*\* — Música anterior / próxima (na fila)

\- \*\*Tempo\*\* — Posição atual / duração total

\- \*\*Barra de seek\*\* — Clique para pular a qualquer ponto

\- \*\*Δ Offset\*\* — Ajusta sincronia do áudio com a cifra (se o MP3 estiver atrasado ou adiantado)

\- \*\*🔊 Volume\*\* — Volume do áudio da música

\- \*\*🎯 Latência\*\* — Ajuste fino do metrônomo (compensa atraso do celular)

\- \*\*BPM\*\* — Ajuste o BPM se a detecção automática errou

\- \*\*♪ Metrônomo\*\* — Liga/desliga o clique

\- \*\*½\*\* — Meio tempo (toca clique a cada 2 batidas)

\- \*\*🔒 Wake Lock\*\* — Estado da tela (verde = tela não vai apagar)

\- \*\*Scroll\*\* — Modo de rolagem automática (centro, topo, off)



\### Count-in visual



Ao apertar \*\*play\*\* no início da música, a tela pisca \*\*8 vezes\*\* antes da música começar:


🟡 🟡 🟡 🔴 🟡 🟡 🟡 🟢



\- Os \*\*amarelos\*\* preparam

\- O \*\*vermelho\*\* avisa que faltam 4 tempos

\- O \*\*verde\*\* marca o início real



O count-in respeita o \*\*marcador de início\*\* definido no editor de alinhamento.



\### Metrônomo



O metrônomo segue o \*\*`song\_beats.txt`\*\* com precisão de milissegundos. Ele continua tocando mesmo com a música pausada — útil para estudar.



Se você tocar no celular e ouvir o clique atrasado em relação à música:



1\. Use os botões \*\*−\*\* e \*\*+\*\* ao lado do 🎯

2\. Cada clique ajusta 10ms

3\. \*\*Segure\*\* o botão para ajustar rápido

4\. \*\*Botão direito\*\* (ou toque longo) ajusta 5ms para refinamento

5\. \*\*Duplo clique\*\* no valor reseta para 0



O valor é salvo \*\*por música\*\* — depois de calibrar uma vez, ele lembra.



\---



\## Editar alinhamento



Clique em \*\*✎ Editar alinhamento\*\* no cabeçalho da música. Aqui você pode:



\- \*\*Arrastar acordes\*\* horizontalmente para ajustar posição no tempo

\- \*\*Zoom\*\* de 100% a 400% (só afeta a faixa de acordes, a letra fica legível)

\- \*\*Ocultar\*\* acordes (botão × no canto do acorde)

\- \*\*Renomear\*\* acordes (duplo clique abre o picker)

\- \*\*Inserir\*\* novos acordes que a detecção perdeu

\- \*\*Marcar o início musical\*\* da música



\### Inserir um acorde



1\. Toque a música até o ponto onde quer o novo acorde

2\. Clique em \*\*＋ Inserir acorde\*\* na toolbar

3\. Escolha o acorde no picker (ou digite manualmente)

4\. Confirme — o acorde aparece com um \*\*pontinho verde\*\* no canto



Acordes adicionados podem ser arrastados, renomeados ou \*\*apagados de verdade\*\* (o × remove, diferente dos originais que apenas ocultam).



\### Marcar o início musical



Se o áudio tem silêncio antes da música começar, o count-in ficaria desalinhado. Para corrigir:



1\. Toque o áudio até o \*\*exato momento em que a música começa\*\*

2\. Clique em \*\*🎯 Marcar início\*\*

3\. Uma \*\*linha verde\*\* aparece na grade mostrando a marcação

4\. O count-in vai contar de trás para frente a partir desse ponto



O marcador é salvo por música.



\### Snap



O dropdown \*\*Snap\*\* controla como os acordes se alinham quando você os move:



\- \*\*livre\*\* — posição exata do ponteiro

\- \*\*batida\*\* — encaixa na batida mais próxima

\- \*\*compasso\*\* — encaixa no início do compasso mais próximo



Recomendado: use \*\*batida\*\* para ajuste, \*\*compasso\*\* para correções grandes.



\### Ferramentas auxiliares



\- \*\*Mostrar ocultos\*\* — reexibe acordes que você ocultou

\- \*\*↻ Redistribuir letra\*\* — recalcula tempos das linhas por peso silábico (útil para músicas importadas com letras mal formatadas)

\- \*\*Resetar posições\*\* — devolve todos os acordes às posições originais da análise



\---



\## Editar letra



Clique em \*\*✎ Editar letra\*\* no cabeçalho.



Um modal abre com:



\- \*\*Player de áudio\*\* com seek e loop

\- \*\*Chips das seções\*\* — clique numa seção para ouvi-la

\- \*\*Waveform\*\* com grade de barras numeradas

\- \*\*Textarea\*\* com a letra para edição direta



Você pode:



\- \*\*Mover tags\*\* `\[Verse]`, `\[Chorus]` etc. para o lugar certo

\- \*\*Adicionar novas tags\*\* clicando no \*\*+\*\* de um chip

\- \*\*Editar o texto\*\* da letra livremente

\- \*\*Trocar o áudio\*\* de referência (útil para testar com uma versão diferente)



Ao clicar em \*\*Aplicar alterações\*\*, o app re-parseia a letra, refaz o mapeamento e salva. Seus ajustes de acordes (posições, nomes, ocultações) são preservados.



\---



\## Editar acordes



\### Pelo editor de alinhamento



\- \*\*Duplo clique\*\* num acorde abre o picker

\- Escolha \*\*fundamental\*\* (C, C#, Db...), \*\*qualidade\*\* (maj, min, 7, maj7...) e \*\*baixo\*\* para inversões

\- Ou \*\*digite manualmente\*\* qualquer cifra (`Cmaj7/E`, `Dsus4(b7)`, `A7#5`)

\- \*\*Restaurar original\*\* volta ao nome que veio da análise



\### Pelo popover no carrossel



Clique no \*\*diagrama do acorde central\*\* no carrossel para ver:



\- \*\*Guitarra\*\* — todas as posições CAGED (aberta, pestana em várias casas)

\- \*\*Baixo 4/5 cordas\*\* — as regiões de raiz (E, A, D, G, e B como extensão no 5 cordas)

\- Clique num card para \*\*definir como preferido\*\* para aquele acorde — o carrossel passa a mostrar o novo shape



\---



\## Instrumentos



Três modos disponíveis no topo do carrossel:



| Modo | O que mostra |

|---|---|

| 🎸 \*\*Guitarra\*\* | Shapes CAGED no braço de 6 cordas |

| 🎵 \*\*Baixo 4\*\* | Braço de 4 cordas (E-A-D-G) |

| 🎵 \*\*Baixo 5\*\* | Braço de 5 cordas (B-E-A-D-G) |



\### Sobre o baixo de 5 cordas



O app segue a convenção de baixistas: \*\*o desenho principal usa as 4 cordas superiores\*\* (E-A-D-G) e a \*\*corda B\*\* aparece por último como "extensão" para alcançar notas graves. O dropdown de posições reordena automaticamente para refletir isso.



\### Trocando a posição da raiz



No baixo, o dropdown ao lado dos botões de instrumento permite escolher:



\- Raiz na corda E

\- Raiz na corda A

\- Raiz na corda D

\- Raiz na corda G

\- Raiz na corda B (baixo 5, extensão)



Cada escolha recentra o braço na região correspondente. É a adaptação do CAGED para baixo.



\---



\## Transposição



No cabeçalho de cada música:

Tom: \[−] +2 \[+]




Cada clique sobe ou desce \*\*meio tom\*\*. O valor entre os botões mostra quantos semitons você transpôs (0 = original, +2 = dois semitons acima).



\*\*Tudo é transposto junto:\*\*



\- Cifra na tela

\- Carrossel de acordes

\- Diagramas no popover



Os \*\*acordes originais não são alterados\*\* — a transposição é só visual. Você pode voltar a 0 a qualquer momento.



A transposição é salva por música.



\---



\## Modo apresentação



Clique no botão \*\*🎭 Apresentação\*\* (canto inferior direito) ou aperte \*\*F\*\* para entrar.



Mudanças visuais:



\- Topnav, botões e avisos desaparecem

\- Carrossel fica \*\*maior e mais visível\*\*

\- Cifra em fonte maior

\- Player-bar com fundo translúcido (blur)



A player-bar se \*\*oculta sozinha\*\* após 3 segundos sem movimento do mouse/toque. Toque em qualquer lugar para trazê-la de volta.



\*\*Para sair:\*\*



\- \*\*ESC\*\* no teclado

\- \*\*F\*\* de novo

\- Botão \*\*✕ Sair\*\* na player-bar

\- Navegar para outra música



\---



\## Setlists



Setlists são grupos de músicas para tocar em sequência — um show, um ensaio, uma aula.



\### Criar um setlist



1\. Na Biblioteca, clique em \*\*+ Novo setlist\*\*

2\. Dê um nome

3\. Dentro do setlist, clique em \*\*+ Adicionar músicas\*\*



\### Organizar



\- \*\*Arraste\*\* o ícone `≡` para reordenar as músicas

\- \*\*Selecione várias\*\* com os checkboxes para ação em lote:

&#x20; - \*\*Copiar\*\* para outro setlist (individual ou em lote)

&#x20; - \*\*Remover\*\* (as músicas continuam na Biblioteca)

\- Clique no \*\*título\*\* de um setlist para renomear



\### Tocar um setlist



\- \*\*▶ Tocar tudo\*\* começa da primeira música

\- Os botões \*\*⏮ ⏭\*\* no player navegam entre as músicas

\- Ao terminar, a próxima começa automaticamente

\- \*\*Imprimir\*\* gera uma folha com a lista de músicas na ordem



\*\*Cópia entre setlists:\*\* quando você copia uma música para outro setlist, ela é a \*\*mesma entidade\*\* — os ajustes de acorde, transposição, latência de metrônomo tudo continua vinculado à música, não ao setlist.



\---



\## Backup e portabilidade



Na Biblioteca, cinco botões:



\### 📄 Música (JSON)



Importa \*\*um arquivo de música individualmente\*\* — útil para trocar arquivos entre pessoas.



\### 💾 Exportar backup



Gera um \*\*JSON\*\* com todas as músicas, setlists e preferências. \*\*Não inclui os áudios.\*\*



\### 📥 Importar backup



Restaura um JSON exportado antes. Duas opções:



\- \*\*Mesclar\*\* — mantém o que já existe, adiciona só o que falta

\- \*\*Substituir\*\* — apaga tudo e restaura o backup



\### 🎵 Exportar áudios



Gera um \*\*ZIP\*\* com todos os MP3, nomeados pelo ID interno de cada música.



\### 🎧 Importar áudios



Restaura os MP3 do ZIP, associando pelo ID. Só funciona se a música correspondente já existir na biblioteca (importe o backup JSON primeiro).



\### Transferir de um dispositivo para outro



\*\*No dispositivo antigo:\*\*



1\. Clique em 💾 \*\*Exportar backup\*\* → salva `cifrasync-backup.json`

2\. Clique em 🎵 \*\*Exportar áudios\*\* → salva `cifrasync-audios.zip`

3\. Envie os dois arquivos para o novo dispositivo (email, Drive, AirDrop)



\*\*No dispositivo novo:\*\*



1\. Abra o app

2\. Clique em 📥 \*\*Importar backup\*\* → escolha o JSON → \*\*Substituir\*\*

3\. Clique em 🎧 \*\*Importar áudios\*\* → escolha o ZIP

4\. Tudo pronto



\---



\## Uso offline



Depois de abrir o app \*\*uma vez com internet\*\*, ele funciona \*\*totalmente offline\*\*:



\- O app carrega sem rede (Service Worker cacheia o HTML)

\- Suas músicas e áudios estão no IndexedDB do navegador

\- O metrônomo e a sincronização continuam funcionando

\- Aparece um \*\*badge 📴 Offline\*\* no cabeçalho quando sem rede



\*\*Testado em:\*\* modo avião do Android, sem Wi-Fi no PC.



\*\*Importante:\*\* alguns navegadores em modo "economia de dados" muito agressivo podem apagar o IndexedDB após dias sem uso. Faça backups periódicos se tiver músicas importantes.



\---



\## Atalhos de teclado



| Atalho | Ação |

|---|---|

| \*\*Espaço\*\* | Tocar / pausar |

| \*\*← / →\*\* | Voltar / avançar 5 segundos |

| \*\*Home\*\* | Voltar ao início |

| \*\*F\*\* | Modo apresentação |

| \*\*ESC\*\* | Sair do modo apresentação |

| \*\*+ / =\*\* | Zoom in (editor de alinhamento) |

| \*\*−\*\* | Zoom out |

| \*\*0\*\* | Reset do zoom |



\---



\## Perguntas frequentes



\### O app funciona sem internet?



Sim, depois de aberto uma primeira vez com rede. Aparece um badge \*\*📴 Offline\*\* quando sem conexão.



\### Onde ficam meus dados?



\*\*Apenas no seu navegador.\*\* Nada é enviado para servidores. Músicas, áudios e preferências ficam no IndexedDB local.



\### Como transfiro músicas para outro aparelho?



Use \*\*Exportar backup\*\* + \*\*Exportar áudios\*\* e depois \*\*Importar backup\*\* + \*\*Importar áudios\*\* no outro aparelho. Veja \[Backup e portabilidade](#backup-e-portabilidade).



\### A tela do celular apaga durante o play. Como resolver?



O app tenta manter a tela ligada (Wake Lock). O cadeado 🔒 fica \*\*verde\*\* quando está ativo. Se ainda apagar:



1\. Verifique se está usando a versão HTTPS (`lexmonteirogm.github.io`) — não a versão baixada localmente

2\. Ative o \*\*Modo de economia de bateria do Android\*\* para "sem restrição" no Chrome

3\. Se persistir, é limitação do fabricante. Toque a tela de vez em quando.



\### O metrônomo está atrasado no celular



Use a \*\*calibração 🎯\*\* na player-bar. Veja a seção \[Tocar](#tocar).



\### Não vejo o botão de apresentação



O botão \*\*🎭 Apresentação\*\* só aparece quando uma música está aberta. Não fica na Biblioteca.



\### Meu celular tem uma notificação de "CifraSync instalado", o que é?



É a PWA — o app foi instalado como aplicativo pela tela inicial. Comportamento esperado.



\### Como faço para uma música que não tem MP3?



Você pode usar só o metrônomo. Importe os 4 arquivos de análise e a letra, deixe o áudio vazio. O metrônomo toca, o carrossel gira, a cifra acompanha.



\### Posso importar cifras prontas do CifraClub ou Ultimate Guitar?



Não automaticamente — o formato de análise é diferente. Você precisa do `song\_beats.txt`, `song\_chords.txt`, etc. gerados pelo SheetSage2.



\### Como atualizo o app?



Quando uma nova versão estiver disponível, aparece um \*\*chip ✨ Atualizar\*\* no canto superior direito. Clique nele para atualizar. Também aparece sozinho sempre que você abre o app e há uma versão nova.



\### Onde reporto bugs ou sugiro melhorias?



Abra uma \[Issue no GitHub](https://github.com/lexmonteirogm/cifrasync/issues).



\---



\## Créditos



Desenvolvido para músicos que querem uma ferramenta simples, portátil e offline de cifras.



Zero dependências externas — funciona em qualquer navegador moderno sem instalar nada.








