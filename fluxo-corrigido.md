FLUXO DE ATENDIMENTO A PARTIR DA INTERAÇÃO DO CLIENTE

Os clientes que chegam até o nosso assistente instalado no site, redes sociais, QR Code, Google Meu Negócio, anúncios Google e anúncios em redes sociais são direcionados a enviar uma mensagem pré-definida para o número de WhatsApp do doutor em questão, que está utilizando o serviço. Nesse WhatsApp do doutor está instalado o **SANA I.A COEX VENDEDOR**, que vai receber do **SANA I.A ORQUESTRADOR** (que monta a ficha inicial analisando os dados e as instruções que demos para ele) uma ficha do cliente e uma ficha do doutor (essa ficha ainda deverá ser construída a partir do onboarding e login do doutor).

Assim, os **SANAs I.A COEX VENDEDOR**, com essas informações mais o prompt de comando que está configurado neles, poderão executar as ações estabelecidas e acessar as tools necessárias para completar sua função de vender um horário do doutor para o cliente que está entrando em contato. Nesse processo, eles irão notificar o doutor através do número da **SANA CENTRAL ORQUESTRADOR** (esse é o “cara” da nossa central: ele trabalha para todos os doutores e todos os clientes). Ele usa a ficha do DOUTOR e do CLIENTE para poder agir, porque ele não está vendo a conversa diretamente.

Em momentos em que ele precisar da intervenção do doutor na conversa, isso tudo está estabelecido no fluxo de atendimento. Abaixo, um exemplo prático de uma conversa com seus atores: **SANA ASSISTENTE**, **SANA I.A COEX VENDEDOR**, **CLIENTE**, **DOUTOR**, **SANA CENTRAL ORQUESTRADOR** e **SANA I.A ORQUESTRADOR**. (TODOS ESSES TRABALHAM PARA O **SANA CENTRAL ORQUESTRADOR** – **SANA DISPARADOR NOTIFICAÇÃO RESERVA**, **SANA DISPARADOR NOTIFICAÇÃO PRIMEIRA CONSULTA**, **SANA DISPARADOR DE COBRANÇA DE CONTRATO**, **SANA DISPARADOR LEMBRETE DE CONSULTA**.)

--------------------------------------------------------------------------------------------------------------------------------

ETAPA 1:

MENSAGEM ENVIADA PELO CLIENTE ATRAVÉS DO ASSISTENTE **SANA ASSISTENTE** E ACIONAMENTO DO **SANA I.A ORQUESTRADOR** E **SANA I.A COEX VENDEDOR**:

Aqui o **SANA ASSISTENTE** monta uma mensagem padrão para o cliente enviar. A mensagem tem algumas variáveis, que são o nome do cliente e de onde ele veio, por exemplo: SITE, REDES SOCIAIS, QRCODE, GOOGLE MEU NEGÓCIO. Essas informações são para o psicólogo ver depois a conversa e entender todo o contexto.

Além dessa mensagem montada para o cliente, o **SANA ASSISTENTE** envia também, através de código interno, os dados para o **SANA I.A ORQUESTRADOR** criar uma ficha com os dados do cliente e uma ficha com os dados do doutor. Assim, ele ANALISA e sabe para qual doutor esse cliente está sendo direcionado, com todas as informações do doutor, e também qual **SANA I.A COEX VENDEDOR** ele tem que CHAMAR.

O **SANA I.A ORQUESTRADOR** deverá transmitir as fichas do doutor e do cliente para o **SANA I.A COEX VENDEDOR** do DOUTOR que está na ficha, além de informar para ele a ficha do CLIENTE que ele deverá atender e efetuar sua atividade. A FICHA NASCE COM **ETAPA 0**.

--------------------------------------------------------------------------------------------------------------------------------

EXEMPLO ATOR CLIENTE

JOÃO:

“Olá, meu nome é (João). Acabei de falar com o assistente no (SITE) e gostaria de mais informações sobre o atendimento psicológico 🙂”

--------------------------------------------------------------------------------------------------------------------------------

O **SANA I.A ORQUESTRADOR** recebe a ficha do cliente e do doutor. Com essas informações, ele faz uma avaliação de qual **SANA I.A COEX** ele deve chamar para atender o cliente. Então ele transmite a ficha do doutor e do paciente para o **SANA I.A COEX** ESCOLHIDO, que irá atuar no atendimento.

O **SANA I.A COEX VENDEDOR DO DOUTOR ESCOLHIDO** fará uma avaliação de quem é o cliente, de qual anúncio ou ponto de entrada ele chegou até a doutora, cidade, tipo de interesse que o trouxe até aqui, variáveis da ficha recebida através do **SANA I.A ORQUESTRADOR**, exemplificado abaixo:

FICHAS:

O QUE ANALISAR NA FICHA EM CADA ETAPA:

Temos que incluir na ficha a etapa e uma descrição do que está acontecendo nesta etapa:

**ETAPA 1** – Aqui o que está acontecendo é o seguinte: o cliente é um cliente (como você pode analisar na ficha) interessado em psicólogos, e ele enviou uma mensagem através do nosso assistente “burro”. Esse assistente fez as fichas que você analisou e, nessa etapa, nosso objetivo é atender o cliente enviando as conversas conforme o meu exemplo abaixo e respeitando as variáveis de nome do cliente e nome da doutora. Vamos enviar 3 mensagens e forçar a passagem para a Etapa 1. Você deve se identificar como **SANA**. Você pode ver que, na primeira mensagem, nós encaminhamos o cliente para a Cíntia e deixamos isso claro para todos. Depois, mandamos uma mensagem para a própria Cíntia como se ela estivesse na conversa conosco, para ela entender o contexto depois. Em seguida, avisamos que logo a doutora está chegando. Fazemos isso de forma bem direta, sem dar espaço para conversa e interação do cliente. Assim, forçamos o início da **ETAPA 1**.

SANA: Olá, (João) 😊  
Estou te encaminhando para conversar diretamente com a (Cíntia Parisotto), psicóloga.  
SANA:  
Cíntia, este é o (João). Ele chegou pelo (Site) interessado no atendimento psicológico.  
SANA:  
(João), eu já notifiquei a (Cíntia), ela vai te responder em breve, assim que estiver disponível.

Alguns segundos de “respiro” para o cliente se pronunciar, caso queira, não afetam diretamente o fluxo de atendimento. O **SANA I.A COEX VENDEDOR ESCOLHIDO** deve forçar nossa vontade. Caso o cliente mande alguma mensagem, e somente se ele mandar, então ela deve ser respondida sempre com a intenção de conduzir para a próxima etapa. Nessa transição, o **SANA I.A COEX VENDEDOR ESCOLHIDO** deve responder, caso acionado, com mensagens fechadas que induzam para a próxima etapa.

Exemplos de resposta para alguma solicitação durante o período de respiro das 3 mensagens enviadas:

SANA: (João), logo a (Cíntia) irá chegar e poderemos sanar todas as questões. Enquanto isso, eu posso ver a agenda dela para anteciparmos horários vagos, além de mandar as informações que a (Cíntia) deixou preparadas para nós. Vamos lá, deixe-me ver aqui…

Então ele aciona a **ETAPA 2** logo em seguida, sem dar chance de novas interações, mesmo que o cliente responda algo sobre.

Caso não haja interação por parte do cliente dentro de 4 segundos, o **SANA I.A COEX ESCOLHIDO** deverá mandar uma mensagem como o template abaixo e acionar a **ETAPA 2**:

SANA: (João), durante a ausência da (Cíntia) em nossa conversa, eu vou lhe adiantar informações sobre o atendimento dela e também ver a disponibilidade de agenda. Assim eu vou ajudando – eu sou um assistente eficiente, heheh – mas logo ela se junta à nossa conversa, fique tranquilo.

--------------------------------------------------------------------------------------------------------------------------------

EXEMPLO ETAPA 1 – SANA I.A COEX ESCOLHIDO

SANA: Olá, (João) 😊  
Estou te encaminhando para conversar diretamente com a (Cíntia Parisotto), psicóloga.  
SANA:  
Cíntia, este é o (João). Ele chegou pelo (Site) interessado no atendimento psicológico.  
SANA:  
(João), eu já notifiquei a (Cíntia), ela vai te responder em breve, assim que estiver disponível.

--------------------------------------------------------------------------------------------------------------------------------

Alguns segundos de respiro para o cliente se pronunciar, caso queira, não afetam diretamente o fluxo de atendimento. O **SANA I.A COEX VENDEDOR ETAPA 1 ESCOLHIDO** deve forçar nossa vontade. Caso o cliente mande alguma mensagem, e somente se ele mandar, então ela deve ser respondida sempre com a intenção de conduzir para a próxima etapa. Nessa transição, o **SANA I.A COEX VENDEDOR ETAPA 1 ESCOLHIDO** deve responder, caso acionado, com mensagens fechadas que induzam para a próxima etapa.

Exemplos de resposta para alguma solicitação durante o período de respiro das 3 mensagens enviadas:

SANA: (João), logo a (Cíntia) irá chegar e poderemos sanar todas as questões. Enquanto isso, eu posso ver a agenda dela para anteciparmos horários vagos, além de mandar as informações que a (Cíntia) deixou preparadas para nós. Vamos lá, deixe-me ver aqui…

Então ele aciona a **ETAPA 2** logo em seguida, sem dar chance de novas interações, mesmo que o cliente responda algo sobre.

Caso não haja interação por parte do cliente dentro de 4 segundos, o **SANA I.A COEX ETAPA 1 ESCOLHIDO** deverá mandar uma mensagem como o template abaixo e acionar a **ETAPA 2**:

SANA: (João), durante a ausência da (Cíntia) em nossa conversa eu vou lhe adiantar informações sobre o atendimento dela e também ver a disponibilidade de agenda. Assim eu vou ajudando, eu sou um assistente eficiente, heheh, mas logo ela se junta à nossa conversa, fique tranquilo.

Deixar claro que você vai enviar informações e consultar a agenda, como no exemplo da mensagem.

--------------------------------------------------------------------------------------------------------------------------------

ETAPA 2:

Através do **SANA I.A COEX VENDEDOR ETAPA 2**, que irá realizar a leitura da FICHA do CLIENTE que foi entregue pelo **SANA I.A ORQUESTRADOR**, nessa ficha ele poderá entender qual conteúdo deverá ser entregue para o CLIENTE. O conteúdo que deverá ser entregue nessa **ETAPA 2** trata-se de um ÁUDIO e, posteriormente, um VÍDEO explicativo sobre o atendimento do DOUTOR. Para cada tipo de CLIENTE existe um conjunto de ÁUDIO e VÍDEO específico, conforme os conjuntos abaixo, no exemplo do nosso DOUTOR do ramo de psicologia. E, através da ferramenta (TOOLS) correta de envio de ÁUDIO e de envio de VÍDEO, o **SANA I.A COEX VENDEDOR ETAPA 2** deverá executar sua tarefa, conforme exemplo abaixo.

VAMOS COLOCAR OS TIPOS DE ÁUDIO E VÍDEO AQUI, EXPLICANDO SUAS ROTAS DE ANÁLISE DA FICHA.

Na montagem da ficha, pelo **SANA I.A ORQUESTRADOR**, ele já identifica qual conjunto de ÁUDIO e VÍDEO deve ser enviado, pois analisou a entrada do lead, por onde ele veio, qual tipo de anúncio e a cidade.

--------------------------------------------------------------------------------------------------------------------------------

EXEMPLO ETAPA 2 – SANA I.A COEX ESCOLHIDO

SANA: João, aqui está um áudio da própria Cíntia, onde ela explica rapidinho como funciona o atendimento e o que você pode esperar das sessões.  
**SANA I.A COEX**, através da análise da FICHA (já definida), e utilizando as TOOLS, envia o ÁUDIO CORRETO.

SANA: E este é um vídeo curto para você conhecer um pouco mais sobre a Cíntia e a forma dela trabalhar.  
**SANA I.A COEX**, através da análise da FICHA (já definida), e utilizando as TOOLS, envia o VÍDEO CORRETO.

Então ele aciona a **ETAPA 3** logo em seguida, sem dar chance de novas interações nem respiro de mensagem para o CLIENTE, mesmo que o cliente responda algo sobre. Ele deverá conduzir a conversa para a **ETAPA 3** com mensagem como a do exemplo abaixo:

SANA: (João), logo a (Cíntia) deve estar disponível. Enquanto isso, através do áudio e vídeo preparados por ela, você pode conhecê-la. Eu já estou analisando a agenda e logo retorno com informações…

Nessa etapa, nós temos a missão de entregar o áudio e o vídeo certos e, no máximo, informar para o cliente que ele vá vendo o vídeo e o áudio enquanto você está olhando as vagas da agenda, limitando-se a isso e nada mais. A **ETAPA 3** é acionada na hora da conclusão da entrega do áudio e do vídeo.

--------------------------------------------------------------------------------------------------------------------------------

ETAPA 3:

Através do **SANA I.A COEX VENDEDOR ETAPA 3**, que irá realizar a leitura da FICHA do CLIENTE que foi entregue pelo **SANA I.A ORQUESTRADOR**, através da ficha ele poderá entender qual tipo de reserva deve procurar para o CLIENTE.

Existem variáveis importantes na ficha: se ele está buscando atendimento ONLINE ou PRESENCIAL, de qual CIDADE ele é, o HORÁRIO em que está entrando em contato etc. Essas variáveis que estão na FICHA entregue pelo **SANA I.A ORQUESTRADOR** para o **SANA I.A COEX VENDEDOR ETAPA 3** definirão o comportamento de busca do **SANA I.A COEX VENDEDOR ETAPA 3** na agenda do DOUTOR.

Após entender o tipo de comportamento e horário buscado, o **SANA I.A COEX** acessa a TOOL que mostra os horários disponíveis da agenda do DOUTOR. A regra básica é procurar o próximo horário mais próximo disponível na agenda para levar para o CLIENTE:

- **REGRA 1**: o horário disponibilizado não pode ser com tempo menor que 2 HORAS próximas DO HORÁRIO ATUAL, para dar tempo de o DOUTOR se organizar.  
- **REGRA 2**: o **SANA I.A COEX** deverá oferecer o primeiro horário mais perto do horário de início do atendimento do CLIENTE, respeitando a REGRA 1 e lendo a FICHA do cliente para entender qual tipo de horário o CLIENTE está procurando.

Após oferecer esse horário, ele deverá aguardar resposta do CLIENTE em um prazo de 1 minuto. Caso não haja uma reserva efetuada pelo CLIENTE através do botão de reserva do template enviado, ele aciona a **REGRA 3**: oferecerá um horário mais próximo, porém no DIA SEGUINTE ao último horário disponibilizado na REGRA 2, ainda levando em consideração as instruções da REGRA 1 e REGRA 2.

Se mesmo assim o CLIENTE não efetuar uma reserva através dos dois templates enviados de reserva de horário, em prazo extra de mais 1 minuto, então o **SANA I.A COEX** deverá entrar no modo **ETAPA 4**, informando ao CLIENTE que logo o DOUTOR estará presente para conversar com o CLIENTE.

Quando o CLIENTE efetua uma reserva, seja ela na primeira oferta de horário ou na segunda oferta de horário, o **SANA I.A COEX VENDEDOR ETAPA 3** deverá entrar no modo **ETAPA 4**, informando ao CLIENTE que logo o DOUTOR estará presente para conversar com o CLIENTE e que sua RESERVA ESTÁ CONFIRMADA.

Caso existam interações de conversa do CLIENTE no meio do processo de envio dos TEMPLATES DE RESERVA 1 E 2, o **SANA I.A COEX VENDEDOR ETAPA 3** não deve responder e deve deixar para isso ser tratado na **ETAPA 4**, focando a **ETAPA 3** na entrega dos templates de reserva.

VAMOS COLOCAR OS TIPOS DE TEMPLATE EXPLICANDO SUAS ROTAS DE ANÁLISE DA FICHA AQUI.

**TEMPLATE TENTATIVA 1**

SANA: “{{nome}}, encontrei um horário disponível:  
👉 {{dia_semana}}, às {{hora}}, com valor de {{preço}} a consulta.”

Aqui entra a versão com botões.

SANA: “Para garantir esse horário reservado pra você, basta clicar em **Reservar**.”

**TEMPLATE TENTATIVA 2**

SANA: “{{nome}}, encontrei outro horário disponível caso fique melhor para você:  
👉 {{dia_semana}}, às {{hora}}, com valor de {{preço}} a consulta.”

Aqui entra a versão com botões.

SANA: “Para garantir esse horário reservado pra você, basta clicar em **Reservar**.”

--------------------------------------------------------------------------------------------------------------------------------

EXEMPLO ETAPA 3 – SANA I.A COEX ESCOLHIDO

Exemplo **REGRA 1**: o CLIENTE está em atendimento e sua notificação de entrada da mensagem, através da ETAPA 1, foi às 13:00 do dia 07/02/2026. Então o **SANA I.A COEX** pode oferecer horários vagos a partir das 15:00 do dia 07/02/2026.

Exemplo **REGRA 2**: o CLIENTE está em atendimento e sua notificação de entrada da mensagem, através da ETAPA 1, foi às 13:00 do dia 07/02/2026. Então o **SANA I.A COEX** pode oferecer horários vagos a partir das 15:00 do dia 07/02/2026. O **SANA I.A COEX** avalia a ficha do CLIENTE e identifica qual TIPO de HORÁRIO deverá ser ofertado (se é ONLINE ou PRESENCIAL) e qual modalidade de preço (PADRÃO, PROMOCIONAL ou EMERGENCIAL). Com essas especificações retiradas da FICHA do CLIENTE, que foi enviada pelo **SANA I.A ORQUESTRADOR**, ele consulta a TOOL de horário e verifica qual horário mais próximo disponível, respeitando as regras da FICHA + REGRA 1, e envia um TEMPLATE com essa possibilidade de reserva para o CLIENTE, através da TOOL de TEMPLATE de notificação via API oficial do WhatsApp.

Exemplo **REGRA 3**: o CLIENTE está em atendimento e sua notificação de entrada da mensagem, através da ETAPA 1, foi às 13:00 do dia 07/02/2026. Então o **SANA I.A COEX** pode oferecer horários vagos a partir das 15:00 do dia 07/02/2026. O **SANA I.A COEX** avalia a ficha do CLIENTE e identifica qual TIPO de HORÁRIO deverá ser ofertado (ONLINE ou PRESENCIAL) e qual modalidade de preço (PADRÃO, PROMOCIONAL ou EMERGENCIAL). Com essas especificações retiradas da FICHA do CLIENTE, que foi enviada pelo **SANA I.A ORQUESTRADOR**, ele consulta a TOOL de horário e verifica qual horário mais próximo disponível, respeitando as regras da FICHA + REGRA 1, e envia um TEMPLATE com essa possibilidade de reserva para o CLIENTE através da TOOL de TEMPLATE de notificação via API oficial do WhatsApp. Então ele espera 1 minuto para ver se o CLIENTE efetua a reserva.

Caso o CLIENTE efetue a reserva, não é necessário aplicar a REGRA 3.

Se não efetuar, então o **SANA I.A COEX** irá fazer uma nova consulta na TOOL de horários e gerar uma nova oferta de reserva através da TOOL de TEMPLATE de notificação via API oficial do WhatsApp. Essa nova oferta deverá respeitar a REGRA 1 + ANÁLISE da FICHA da REGRA 2 e então ofertar um horário disponível na agenda que esteja disponível no dia seguinte. Ou seja, se no TEMPLATE 1 ele ofereceu o seguinte horário: 17:00 do dia 07/02/2026, então, no TEMPLATE 2, o **SANA I.A COEX** poderá ofertar horário a partir do dia 08/02/2026, no primeiro horário disponível. Se nesse dia não tiver, ele procura o próximo horário disponível a partir do dia 08/02/2026, que é o dia posterior à primeira oferta, sempre respeitando as especificações da FICHA, por exemplo: (HORÁRIOS PARA ATENDIMENTO ONLINE – preço PADRÃO).

No caso de o CLIENTE não efetuar nenhuma reserva, nem no TEMPLATE 1 nem no TEMPLATE 2, o **SANA I.A COEX** envia a mensagem abaixo e entra no modo **ETAPA 4**:

SANA: João, logo a Cíntia estará presente em nossa conversa e poderemos ver outros horários disponíveis ou encaixes conforme sua necessidade. Enquanto isso, se puder ouvir o áudio e ver o vídeo, logo ela chega aqui.

No caso de o CLIENTE efetuar a RESERVA no TEMPLATE 1 ou no TEMPLATE 2, o **SANA I.A COEX** envia a mensagem abaixo e entra no modo **ETAPA 4**:

SANA: João, sua reserva está garantida e logo a Cíntia estará presente em nossa conversa para conversar com você.

--------------------------------------------------------------------------------------------------------------------------------

ETAPA 4:

Nesta etapa, o **SANA I.A COEX** aciona o **SANA CENTRAL ORQUESTRADOR** e envia para ele a FICHA CLIENTE e a FICHA do DOUTOR, já adicionadas de especificações sobre como todo o atendimento do CLIENTE chegou até a **ETAPA 4**, juntamente com dados sobre a AGENDA do DOUTOR.

Assim, o **SANA CENTRAL ORQUESTRADOR** poderá:

- Analisar quem é o CLIENTE e seus dados.  
- Fazer também uma análise do DOUTOR, sabendo qual seu nome correto, qual seu telefone, quais horários ele está disponível para receber notificações, como ele gosta de ser chamado, qual seu ramo de especialidade.

VAMOS COLOCAR COMO AS FICHAS FICAM APÓS SEREM COMPLEMENTADAS PELOS DADOS DO ATENDIMENTO ATÉ A ETAPA 4 E EXPLICANDO SUAS ROTAS DE ANÁLISE DA FICHA AQUI.

O **SANA CENTRAL ORQUESTRADOR**, através de sua base de conhecimento, sabe qual assistente de sua central ele deve chamar para enviar cada tipo de mensagem através da TOOL de TEMPLATE de notificação via API oficial do WhatsApp. Ele está gerenciando os assistentes abaixo:

- **SANA DISPARADOR NOTIFICAÇÃO RESERVA**  
- **SANA DISPARADOR NOTIFICAÇÃO PRIMEIRA CONSULTA**  
- **SANA DISPARADOR DE COBRANÇA DE CONTRATO**  
- **SANA DISPARADOR LEMBRETE DE CONSULTA**

--------------------------------------------------------------------------------------------------------------------------------

Este **SANA DISPARADOR NOTIFICAÇÃO RESERVA**, quando acionado pelo **SANA CENTRAL ORQUESTRADOR**, é responsável por notificar o DOUTOR quando a reserva de um horário foi efetuada ou não pelo CLIENTE durante seu atendimento efetuado pelo **SANA I.A COEX** no fluxo de 4 ETAPAS. A informação, já com o TEMPLATE que deve ser usado, é passada pelo **SANA CENTRAL ORQUESTRADOR**, que recebeu as informações do **SANA I.A COEX** e analisou as variáveis.

TEMPLATES CADASTRADOS NO **SANA DISPARADOR NOTIFICAÇÃO RESERVA**:

**TEMPLATE 1 – RESERVA REALIZADA**

RESERVA CONFIRMADA  
Olá DOUTOR, você recebeu uma reserva na sua agenda para a Data: xx/xx/xx às XX:XX horas. O CLIENTE está aguardando sua chegada na conversa para concluir o atendimento.  
Deseja enviar a ficha de confirmação de primeira consulta?

SIM ou NÃO

**TEMPLATE 2 – RESERVA NÃO REALIZADA**

RESERVA NÃO CONFIRMADA (aguardar 4 minutos)  
Olá DOUTOR, o CLIENTE está aguardando sua chegada na conversa para concluir o atendimento de reserva de horário. TIPO DE HORÁRIO (ONLINE / PRESENCIAL).

--------------------------------------------------------------------------------------------------------------------------------

Com essas análises realizadas, o **SANA CENTRAL ORQUESTRADOR** chama o **SANA DISPARADOR NOTIFICAÇÃO RESERVA**. Ele já recebe tudo “mastigado” e deverá somente enviar o TEMPLATE escolhido pelo **SANA CENTRAL ORQUESTRADOR** para o DOUTOR através da TOOL de TEMPLATE de notificação via API oficial do WhatsApp.

Enquanto o **SANA CENTRAL ORQUESTRADOR** faz seu trabalho juntamente com o **SANA DISPARADOR NOTIFICAÇÃO RESERVA**, o **SANA I.A COEX VENDEDOR ETAPA 4** aguarda a chegada do DOUTOR até a conversa. Caso seja questionado pelo CLIENTE, antes da chegada do DOUTOR, sobre alguma informação extra, ele poderá consultar a FICHA do DOUTOR e, através da FICHA e somente com a base de conhecimento que está na TOOL + dados da FICHA, responder perguntas do CLIENTE, sempre em um formato fechado e incluindo que logo o DOUTOR irá chegar para concluir o atendimento.

Após a chegada do DOUTOR, o **SANA I.A COEX** aciona a **ETAPA 5**.

--------------------------------------------------------------------------------------------------------------------------------

EXEMPLO ETAPA 4 – SANA I.A COEX ESCOLHIDO

CLIENTE: qualquer pergunta que o cliente fizer, que não puder ser respondida com a base de conhecimento da FICHA que o **SANA I.A COEX** tem acesso, deverá ser respondida com a mensagem abaixo, fechando a conversa e lembrando que o DOUTOR logo vai chegar:

SANA: João, logo a Cíntia estará presente em nossa conversa e poderemos ver outros horários disponíveis ou encaixes conforme sua necessidade. Enquanto isso, se puder ouvir o áudio e ver o vídeo, logo ela chega aqui.

CLIENTE: qualquer pergunta que o cliente fizer, que puder ser respondida com a base de conhecimento da FICHA que o **SANA I.A COEX** tem acesso, deverá ser respondida, porém sempre finalizada com a mensagem abaixo:

SANA: resposta da pergunta com base na base de conhecimento da TOOL + FICHA + sempre com fechamento “logo o DOUTOR estará presente em nossa conversa para conversar com você.”

--------------------------------------------------------------------------------------------------------------------------------

ETAPA 5

Nesta etapa é quando o DOUTOR envia alguma mensagem na conversa ou, através do TEMPLATE enviado pelo **SANA DISPARADOR NOTIFICAÇÃO RESERVA**, interage na conversa enviando o **FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA**. Então o **SANA I.A COEX** não conversa mais, nem responde questionamentos, e deixa o DOUTOR finalizar o atendimento através de suas próprias mensagens e com o auxílio dos assistentes do **SANA CENTRAL ORQUESTRADOR**.

Aqui o DOUTOR poderá conversar com o CLIENTE primeiramente antes de enviar o **FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA**, pois nem sempre o CLIENTE terá reservado um horário dentro dos oferecidos pelo **SANA I.A COEX**. Nesse caso, cabe ao DOUTOR achar um novo horário e realizar a reserva manual no calendário inteligente do SANA, para o CLIENTE, no próprio calendário. Então ele poderá enviar o **FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA**.

Caso o CLIENTE tenha aceitado a reserva de algum dos horários propostos pelo **SANA I.A COEX**, então o DOUTOR poderá executar o envio do **FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA** diretamente da mensagem de confirmação recebida pelo **SANA DISPARADOR NOTIFICAÇÃO RESERVA**.

Somente os CLIENTES que RECEBERAM o **FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA** estarão na **ETAPA 6**.

--------------------------------------------------------------------------------------------------------------------------------

ETAPA 6

O CLIENTE passa para a **ETAPA 6** logo após receber o **FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA**. Nesta etapa da conversa, o **SANA I.A COEX** não está mais presente e cabe ao DOUTOR conduzir a partir daqui. Todos os CLIENTES que chegam até esta etapa já RECEBERAM o **FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA**.

Quando um CLIENTE chega até esta etapa, o **SANA CENTRAL ORQUESTRADOR** já identifica, pois controla os assistentes de notificação. O **SANA CENTRAL ORQUESTRADOR** possui a FICHA do CLIENTE e do DOUTOR, assim como o histórico completo do atendimento. Então, completa a FICHA com as informações da **ETAPA 5** e aciona outro de seus assistentes. Nesse caso será o **SANA DISPARADOR NOTIFICAÇÃO PRIMEIRA CONSULTA**. Ele receberá a FICHA atualizada do CLIENTE e do DOUTOR e, assim, poderá criar o template corretamente para ser entregue, conforme ordem do **SANA CENTRAL ORQUESTRADOR**.

O **SANA CENTRAL ORQUESTRADOR** completa a ficha COM TODOS OS DADOS DAS ETAPAS e muda o estado de “FLOW ENVIADO” para “FLOW PREENCHIDO” do CLIENTE e aciona o **SANA DISPARADOR NOTIFICAÇÃO PRIMEIRA CONSULTA** em três hipóteses:

**Primeira:**  
O CLIENTE conclui o preenchimento do **FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA**, e então a sua primeira consulta está confirmada para o horário reservado na **ETAPA 5**.  
Nesta primeira hipótese, o **SANA CENTRAL ORQUESTRADOR** completa a ficha e aciona o **SANA DISPARADOR NOTIFICAÇÃO PRIMEIRA CONSULTA** logo que recebe a confirmação do preenchimento.

**Segunda:**  
O CLIENTE NÃO conclui o preenchimento do **FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA**, e então a sua primeira consulta NÃO está confirmada para o horário reservado na **ETAPA 5**.  
Nesta segunda hipótese, o **SANA CENTRAL ORQUESTRADOR** completa a ficha e aciona o **SANA DISPARADOR NOTIFICAÇÃO PRIMEIRA CONSULTA**, atualizando que o FLOW NÃO FOI PREENCHIDO, logo após passar 1 hora que o CLIENTE recebeu o **FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA** e NÃO respondeu, e 1:30 antes do HORÁRIO RESERVADO na **ETAPA 5**. Ele sabe dessas informações através da FICHA que foi sendo completada durante as mudanças de ETAPAS.

**Terceira:**  
O CLIENTE conclui o preenchimento do **FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA**, e sua primeira consulta está confirmada pelo próprio DOUTOR para o horário reservado na **ETAPA 5**, através da utilização dos templates recebidos por ele ou através do uso diretamente no calendário inteligente.  
Nesta terceira hipótese, o **SANA CENTRAL ORQUESTRADOR** completa a ficha com “FLOW PREENCHIDO” ou “CONFIRMAÇÃO PELO DOUTOR” e aciona o **SANA DISPARADOR NOTIFICAÇÃO PRIMEIRA CONSULTA**, que agenda uma notificação, através do template 8, de lembrete de horário confirmado para 30 minutos antes da reserva de primeira consulta que foi confirmada pelo próprio DOUTOR. Aqui, o **SANA CENTRAL ORQUESTRADOR**, antes de liberar o disparo do aviso pelo **SANA DISPARADOR NOTIFICAÇÃO PRIMEIRA CONSULTA**, deve conferir novamente se o horário continua confirmado no calendário inteligente ou se foi cancelado pelo CLIENTE ou pelo DOUTOR.

VAMOS COLOCAR COMO AS FICHAS FICAM APÓS SEREM COMPLEMENTADAS PELOS DADOS DO ATENDIMENTO ATÉ A **ETAPA 5** E **ETAPA 6** E EXPLICANDO SUAS ROTAS DE ANÁLISE DA FICHA AQUI.

--------------------------------------------------------------------------------------------------------------------------------

Este **SANA DISPARADOR NOTIFICAÇÃO PRIMEIRA CONSULTA**, quando acionado pelo **SANA CENTRAL ORQUESTRADOR**, é responsável por notificar o DOUTOR quando o **FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA** foi efetuado ou NÃO pelo CLIENTE, durante seu atendimento efetuado em 5 ETAPAS. A informação, já com o TEMPLATE que deve ser usado, é passada pelo **SANA CENTRAL ORQUESTRADOR**, que recebeu as informações do **SANA I.A COEX** e analisou as variáveis, e vai completando as fichas e passando para seus assistentes junto com as instruções de qual template usar e quando.

--------------------------------------------------------------------------------------------------------------------------------

TEMPLATES CADASTRADOS NO **SANA DISPARADOR NOTIFICAÇÃO PRIMEIRA CONSULTA**

--------------------------------------------------------------------------------------------------------------------------------

**TEMPLATE 1**

FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA CONFIRMADO  
DE: SANA DISPARADOR NOTIFICAÇÃO PRIMEIRA CONSULTA.  
PARA: DOUTOR  
PRIMEIRA CONSULTA CONFIRMADA  
Olá DOUTOR, você recebeu a confirmação da primeira consulta de CLIENTE na sua agenda para a Data: xx/xx/xx às XX:XX horas.  
Deseja enviar o link da reunião para o CLIENTE?

SIM ou NÃO

--------------------------------------------------------------------------------------------------------------------------------

**TEMPLATE 2**

FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA CONFIRMADO  
DE: SANA DISPARADOR NOTIFICAÇÃO PRIMEIRA CONSULTA.  
PARA: DOUTOR  
PRIMEIRA CONSULTA CONFIRMADA  
Olá DOUTOR, você recebeu a confirmação da primeira consulta de CLIENTE na sua agenda para a Data: xx/xx/xx às XX:XX horas.  
Deseja enviar o endereço do consultório para o CLIENTE?

SIM ou NÃO

--------------------------------------------------------------------------------------------------------------------------------

**TEMPLATE 3**

FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA NÃO CONFIRMADO – 1 HORA ANTES DO HORÁRIO DA RESERVA DO CLIENTE  
DE: SANA DISPARADOR NOTIFICAÇÃO PRIMEIRA CONSULTA.  
PARA: DOUTOR  
PRIMEIRA CONSULTA NÃO CONFIRMADA  
Olá DOUTOR, você NÃO recebeu a confirmação da primeira consulta de CLIENTE na sua agenda para a Data: xx/xx/xx às XX:XX horas.  
Deseja cancelar a reserva e notificar o CLIENTE?

SIM ou NÃO

--------------------------------------------------------------------------------------------------------------------------------

**TEMPLATE 4**

FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA NÃO CONFIRMADO – APÓS 1 HORA DO SEU ENVIO  
DE: SANA DISPARADOR NOTIFICAÇÃO PRIMEIRA CONSULTA.  
PARA: CLIENTE  
PRIMEIRA CONSULTA NÃO CONFIRMADA  
Olá CLIENTE, você NÃO respondeu o FLOW de confirmação da primeira consulta com o DOUTOR para a Data: xx/xx/xx às XX:XX horas.  
Deseja cancelar a reserva e notificar o DOUTOR?

SIM ou VOU CONCLUIR O FLOW

--------------------------------------------------------------------------------------------------------------------------------

**TEMPLATE 5**

FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA NÃO CONFIRMADO – 1 HORA E 30 MINUTOS ANTES DA RESERVA  
DE: SANA DISPARADOR NOTIFICAÇÃO PRIMEIRA CONSULTA.  
PARA: CLIENTE  
PRIMEIRA CONSULTA NÃO CONFIRMADA  
Olá CLIENTE, você NÃO respondeu o FLOW de confirmação da primeira consulta com o DOUTOR para a Data: xx/xx/xx às XX:XX horas. Caso não seja preenchido, sua agenda não estará garantida.  
Deseja cancelar a reserva e notificar o DOUTOR?

SIM ou VOU CONCLUIR O FLOW

--------------------------------------------------------------------------------------------------------------------------------

**TEMPLATE 6**

FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA CONFIRMADO  
DE: SANA DISPARADOR NOTIFICAÇÃO PRIMEIRA CONSULTA.  
PARA: CLIENTE  
PRIMEIRA CONSULTA ONLINE CONFIRMADA  
Olá CLIENTE, esta é a confirmação da primeira consulta com o DOUTOR para a Data: xx/xx/xx às xx:xx horas. O link de sua chamada é (link da chamada do Google).  
Qualquer eventual problema, avisar o DOUTOR com antecedência.

--------------------------------------------------------------------------------------------------------------------------------

**TEMPLATE 7**

FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA CONFIRMADO  
DE: SANA DISPARADOR NOTIFICAÇÃO PRIMEIRA CONSULTA.  
PARA: CLIENTE  
PRIMEIRA CONSULTA PRESENCIAL CONFIRMADA  
Olá CLIENTE, esta é a confirmação da primeira consulta com o DOUTOR para a Data: xx/xx/xx às xx:xx horas. O endereço está no link (link do Google Maps).  
Qualquer eventual problema, avisar o DOUTOR com antecedência.

--------------------------------------------------------------------------------------------------------------------------------

**TEMPLATE 8**

FLOW de AVISO – PRIMEIRA CONSULTA CONFIRMADA  
DE: SANA DISPARADOR NOTIFICAÇÃO PRIMEIRA CONSULTA.  
PARA: CLIENTE  
PRIMEIRA CONSULTA  
Olá CLIENTE, sua primeira consulta com o DOUTOR acontecerá daqui a 30 minutos.

--------------------------------------------------------------------------------------------------------------------------------

ETAPA 7

AQUI SERÁ APÓS A PRIMEIRA CONSULTA REALIZADA, OU CASO O CLIENTE NÃO COMPAREÇA, O QUE DEVE ACONTECER. ENVOLVE A PARTE DE FECHAR CONTRATAÇÃO OU LIBERAR O HORÁRIO. E O **SANA CENTRAL ORQUESTRADOR**, COM SEUS ASSISTENTES **SANA DISPARADOR DE COBRANÇA DE CONTRATO** E **SANA DISPARADOR LEMBRETE DE CONSULTA**, TRABALHA NESSA FASE. ELE SÓ PASSA A ATUAR NESSES PONTOS DEPOIS QUE O CLIENTE FECHA UM CONTRATO (E APÓS A PRIMEIRA CONSULTA, CONFORME A LÓGICA DEFINIDA).

A ESCREVER – ESTÁ SÓ NA MENTE AINDA.

--------------------------------------------------------------------------------------------------------------------------------

FLUXO DE ATENDIMENTO APARTIR DA INTERAÇÃO DO CLIENTE 

Os clientes que chegam ate nosso assistente instalado no site, redes sociais , qr code , google meu negocio , anuncios google e anúncios rede sociais , sao direcionados a enviar uma msg pre definida para o numero de whats app do doutor em questão que esta utilizado o serviço, nesse whats do doutor esta instalado o SANA I.A COEX VENDEDOR que vai receber do SANA I.A ORQUESTRADOR(monta a ficha inicio analisando os dados e as instruções que demos pra ele) uma ficha do cliente e uma ficha do doutor (essa ainda devera ser construida apartir do onboarding e login do doutor )  , assim  os SANAs I.A COEX VENDEDOR com essas informações mais o pront de comando que esta nele,  poderam executar as ações estabelecidas e acessar as tools necessárias para completar sua função de vender um horário do doutor para o cliente que esta entrando em contato, nesse processo ele ira notificar o doutor atraves do numero da  SANA CENTRAL ORQUESTRADOR(esse eh o cara da nossa central ele trabalha para todos os doutores e todos os clientes) ,ele usa a ficha do DOUTOR e do CLIENTE para poder agir porque ele nao esta vendo a conversa , em momentos que ele precisar da intervenção do doutor na conversa , isso tudo esta estabelecido no fluxo de atendimento, abaixo um exemplo pratico de uma conversa com seus atores , SANA ASSISTENTE , SANA I.A COEX VENDEDOR , CLIENTE , DOUTOR , SANA CENTRAL ORQUESTRADOR e SANA I.A ORQUESTRADOR , (TODOS ESSES TRABALHAM PARA O SANA CENTRAL ORQUESTRADOR - SANA DISPARADOR  NOTIFICAÇÃO RESERVA.  SANA DISPARADOR  NOTIFICAÇÃO PRIMEIRA CONSULTA. SANA DISPARADOR DE COBRANÇA DE CONTRATO, SANA DISPARADOR LEMBRETE DE CONSULTA)




—------------------------------------------------------------------------------------------------------------------------

ETAPA 1 : 
MENSAGEM ENVIADA PELO CLIENTE ATRAVES DO ASSISTENTE SANA ASSISTENTE E ACIONAMENTO DO SANA ORQUESTRADOR E SANA I.A COEX VENDEDOR: 

Aqui o SANA ASSISTENTE monta umas msg padrao para o cliente enviar , a msg tem  algumas variáveis que sao o nome do cliente e de onde ele veio , exemplo SITE , REDES SOCIAIS , QRCOD , GOOGLE MEU NEGOCIO ,  essas informações sao para o psicólogo ver depois a conversa e entender todo o contexto.

Alem dessa MSG montada para o cliente o SANA ASSISTENTE envia tbm atraves de codigo interno os dados para o SANA I.A ORQUESTRADOR   criar uma ficha com os dados do cliente e uma ficha com os dados do doutor assim ele ANALISA e  sabe para qual doutor este cliente esta sendo direcionado com todas as informações do doutor e tbm qual SANA I.A COEX VENDEDOR ele tem que CHAMAR.

O SANA I.A ORQUESTRADOR devera transmitir as fichas do doutor e do cliente para o SANA I.A COEX VENDEDOR  do DOUTOR que esta na ficha alem de informar para ele a ficha do CLIENTE que ele devera atender e efetuar sua atividade. A FICHA NASCE COM ETAPA 0 


—------------------------------------------------------------------------------------------------------------------------









EXEMPLO ATOR CLIENTE

JOÃO:

“Olá, meu nome é (João). Acabei de falar com o assistente no (SITE)  e gostaria de mais informações sobre o atendimento psicológico 🙂”

—------------------------------------------------------------------------------------------------------------------------

SANA I.A ORQUESTRADOR recebe a ficha do cliente e do doutor, com essas informações ele faz uma avaliação de qual SANA I.A COEX ele deve chamar para atender o cliente , então ele transmite a ficha do doutor e do paciente para o SANA I.A COEX ESCOLHIDO que ira atuar no atendimento.

SANA I.A COEX VENDEDOR DO DOUTOR ESCOLHIDO, fara uma avaliação de quem eh o cliente de qual anuncio ou ponto de entrada ele chegou ate a doutora , cidade , tipo de interesse que trouxe ele ate aqui variaveis da ficha recebida atraves do SANA I.A ORQUESTRADOR exemplificado abaixo : 
FICHAS : 

OQUE ANALISAR NA FICHA EM CADA ETAPA: 
Temos que incluir na ficha a etapa , e uma descrição de oque esta acontecendo nesta etapa: 
ETAPA 1 - Aqui oque esa acontecendo eh seguinte o cliente eh um cliente como vc pode analisar na ficha de ineteresse em psicólogos e ele enviou uma msg atraves do nosso assistente burro e esse assistente fez as fichas que vc anaisou e nessa etapa nosso objetivo e atender o cliente enviando as conversar conforme o meu exemplo abaixo e respeitando as variaveis de nome do cliente e nome da doutora , vamos enviar 3 msg e forcar a passagem para a etapa 1, vc deve se identificar como SANA,  vc pode ver que na primeira msg nos encaminhamos o cliente par cintia e deixamos isso claro para todos , depois nos mandamos uma msg para a propria cintia como se ela estivese na conversa com nos , para ela entende o contexto depois e depois nos avisamos que logo a doutora esta chegando , isso nos fazemos de forma bem direta sem dar espaco para conversa e interacao do cliente. assim forcamos o Inicio da ETAPA 1

SANA: Olá, (João) 😊
Estou te encaminhando para conversar diretamente com a (Cíntia Parisotto), psicóloga.
SANA:
Cíntia, este é o (João). Ele chegou pelo (Site) interessado no atendimento psicológico.
SANA:
(João), eu ja notifiquei a (Cíntia) ela vai te responder logo breve assim que estiver disponível.
alguns segundos de respiro para o cliente se pronunciar caso queira, não afeta diretamente o fluxo de atendimento , o SANA I.A COEX VENDEDOR ESCOLHIDO
deve forcar nossa vontade , caso o cliente mande alguma msg e somente se ele mandar, então ela deve ser respondida sempre com a intenção de conduzir para a próxima etapa ,nesta transição o  SANA I.A COEX VENDEDOR  ESCOLHIDO deve responder caso acionado com msg fechadas que induzam para aproxima
exemplos de resposta para alguma solicitacao durante o periodo de respiro das 3 msg enviada:
SANA: (João) logo a (Cíntia)  ira chegar e poderemos sanar todas as questões, enquanto eu posso ver a agenda dela para anteciparmos horários vagos alem de  mandar as informações que a  (Cíntia) deixou preparado para nos,  vamos lah deixa me ver aqui…
então ele aciona  ETAPA 2 logo em seguida sem dar chance de novas interações mesmo que o cliente responda algo sobre.
caso não tenha interação por parte do cliente dentro de 4 segundos o  SANA I.A COEX ESCOLHIDO devera mandar uma msg como o template abaixo e acionar a ETAPA 2


SANA: (João) durante a ausencia da  (Cíntia) em nossa conversa eu vou  lhe adiantar informações sobre o atendimento dela e tbm ver a disponiblidade de agenda ,assim eu vou ajudando eu sou um assistente eficiente heheh , mas logo ela se junta a nossa conversa fique tranquilo


—------------------------------------------------------------------------------------------------------------------------

EXEMPLO ETAPA 1 SANA I.A COEX ESCOLHIDO


SANA: Olá, (João) 😊
Estou te encaminhando para conversar diretamente com a (Cíntia Parisotto), psicóloga.
SANA:
Cíntia, este é o (João). Ele chegou pelo (Site) interessado no atendimento psicológico.
SANA:
(João), eu ja notifiquei a (Cíntia) ela vai te responder logo breve assim que estiver disponível.
—------------------------------------------------------------------------------------------------------------------------
alguns segundos de respiro para o cliente se pronunciar caso queira, não afeta diretamente o fluxo de atendimento , o SANA I.A COEX VENDEDOR ETAPA1 ESCOLHIDO
deve forcar nossa vontade , caso o cliente mande alguma msg e somente se ele mandar, então ela deve ser respondida sempre com a intenção de conduzir para a próxima etapa ,nesta transição o  SANA I.A COEX VENDEDOR ETAPA1  ESCOLHIDO deve responder caso acionado com msg fechadas que induzam para aproxima
exemplos de resposta para alguma solicitacao durante o periodo de respiro das 3 msg enviada:
SANA: (João) logo a (Cíntia)  ira chegar e poderemos sanar todas as questões, enquanto eu posso ver a agenda dela para anteciparmos horários vagos alem de  mandar as informações que a  (Cíntia) deixou preparado para nos,  vamos lah deixa me ver aqui…
então ele aciona  ETAPA 2 logo em seguida sem dar chance de novas interações mesmo que o cliente responda algo sobre.
caso não tenha interação por parte do cliente dentro de 4 segundos o  SANA I.A COEX ETAPA1 ESCOLHIDO devera mandar uma msg como o template abaixo e acionar a ETAPA 2


SANA: (João) durante a ausencia da  (Cíntia) em nossa conversa eu vou  lhe adiantar informações sobre o atendimento dela e tbm ver a disponiblidade de agenda ,assim eu vou ajudando eu sou um assistente eficiente heheh , mas logo ela se junta a nossa conversa fique tranquilo
Deixar claro que vc vai enviar informações e consultar a agenda , como no exemplo da msg. 
—------------------------------------------------------------------------------------------------------------------------

ETAPA 2 : 

ATRAVES DO SANA I.A COEX VENDEDOR ETAPA 2 que ira realizar a leitura da FICHA do CLIENTE que foi entregue pelo SANA I.A ORQUESTRADOR , nessa ficha ele podera entender qual o conteúdo devera ser entregue para o CLIENTE , o conteúdo que devera ser entregue nessa ETAPA 2 trata se de um AUDIO e posterior um VIDEO explicativo sobre o atendimento do  DOUTOR para cada tipo de CLIENTE existe um conjunto de AUDIO e VIDEO especifico conforme os conjuntos abaixo do exemplo do nosso DOUTOR do ramo de psicologia, e atraves da ferramenta de TOOLS corretas de envio de AUDIO e de envio de VIDEO o SANA I.A COEX VENDEDOR ETAPA 2 devera executar sua tarefa conforme exemplo abaixo. 


VAMOS COLOCAR OS TIPOS  DE AUDIO E VIDEO AQUI EXPLICANDO SUAS ROTAS DE ANALISE DA FICHA AQUI 


NA MONTAGEM DA FICHA PELO SANA I.A ORQUESTRADOR ELE JA IDENTIFICA QUAL CONJUNTO DE AUDIO E VIDEO ELE DEVE ENVIAR , POIS ANALISOU A ENTRADA DO LEED POR ELE VEIO E QUAL TIPO DE ANUNCIO E CIDADE.

—------------------------------------------------------------------------------------------------------------------------


EXEMPLO ETAPA 2 SANA I.A COEX ESCOLHIDO


SANA: João aqui está um áudio da própria Cíntia, onde ela explica rapidinho como funciona o atendimento e o que você pode esperar das sessões 
 SANA I.A COEX atraves da analise da FICHA ja ta definido e utilizando as TOOLS envia o AUDIO CORRETO
SANA: E este é um vídeo curto para você conhecer um pouco mais sobre a  Cíntia,  e a forma dela trabalhar


 SANA I.A COEX atraves da analise da FICHA ja ta definido e utilizando as TOOLS envia o VIDEO CORRETO
então ele aciona a ETAPA 3 logo em seguida sem dar chance de novas interações nem respiro de msg para CLIENTE  mesmo que o cliente responda algo sobre ele devera conduzir a conversa para a ETAPA 3 com msg como a do exemplo abaixo
SANA: (João) logo a (Cíntia) deve estar disponível enquanto isso atraves do audio e video preparado por ela voce pode conhece la , eu ja estou analisando a agenda e logo retorno com informações… 
nessa etapa nos temos a missao de entregar o audio e video certo e o no maximo informar para o cliente que ele va vendo o video e o audio enquanto vc esta olhando as vagas da agenda , se limitando a isso e nada mais , pois a etapa 3 eh acionada na hora da conclusao da entrega do audio e video
 —------------------------------------------------------------------------------------------------------------------------



ETAPA 3 : 

ATRAVES DO SANA I.A COEX que ira realizar a leitura da FICHA do CLIENTE que foi entregue pelo SANA I.A ORQUESTRADOR , atraves da  ficha ele podera entender qual tipo de reserva ele deve procurar para o  CLIENTE , existem variável importante na ficha , se ele esta buscando atendimento ONLINE ou PRESENCIAL , de qual CIDADE ele é , o HORARIO que ele esta entrando em contato , essas variáveis que estão na FICHA  entregue pelo SANA I.A ORQUESTRADOR para o  SANA I.A COEX VENDEDOR ETAPA 3  definiram o comportamento de busca do  SANA I.A COEX VENDEDOR ETAPA 3 na agenda do DOUTOR , e apos entender o tipo de comportamento e horário buscado o  SANA I.A COEX acessa a TOOL que mostra os horários disponíveis da agenda do DOUTOR , a regra básica é procurar o proximo horário mais próximo disponível na agenda para levar para o CLIENTE ,  REGRA1 : o horário disponibilizado nao pode ser com tempo menor que 2 HORAS próximas DO HORÁRIO ATUAL , para dar tempo de o  DOUTOR  se organizar , REGRA 2 o SANA I.A COEX  devera oferecer o primeiro horário mais perto do horário do incio do atendimento do  CLIENTE respeitando a REGRA 1 e lendo a FICHA do cliente para entender qual tipo de horário o CLIENTE esta procurando: apos oferecer este horário ele devera aguardar resposta do  CLIENTE em um prazo de 1 minuto , caso não tenha uma reserva efetuada pelo  CLIENTE atraves do botão de reserva do template enviado , ele aciona a REGRA 3 : oferecera um horário mais proximo porem no DIA SEGUINTE ao ultimo horário disponibilizado na REGRA 2 ainda levando em consideração as instruções da REGRA 1 e REGRA 2.
Se mesmo assim o  CLIENTE não efetuar uma reserva atraves dos dois templates enviados de reserva de horário em prazo extra de mais 1 minuto , então  SANA I.A COEX  devera entrar no modo ETAPA 4 informando ao   CLIENTE que logo o  DOUTOR  estará presente para conversar com o  CLIENTE 

Quando o CLIENTE efetua uma reserva seja ela na primeira oferta de horário ou na segunda oferta de horário SANA I.A COEX VENDEDOR ETAPA3  devera entrar no modo ETAPA 4 informando ao   CLIENTE que logo o  DOUTOR  estará presente para conversar com o  CLIENTE e que sua RESERVA ESTA CONFIRMADA.

Caso exista interações de conversa do  CLIENTE no meio do processo de envio dos TEMPLATES DE RESERVA 1 E 2 o SANA I.A COEX VENDEDOR ETAPA3 não deve responder e deixar para isso ser tratado na ETAPA 4 , focando a ETAPA 3 na entrega dos templates de reserva.

VAMOS COLOCAR OS TIPOS  TEMPLATE  EXPLICANDO SUAS ROTAS DE ANALISE DA FICHA AQUI

TEMPLATE TENTATIVA 1
SANA: **“{{nome}}, encontrei um horário disponível:
 👉 {{dia_semana}}, às {{hora}}, com valor de {{preço}} a consulta.
aqui entra a versão com botões 
SANA: : Para garantir esse horário reservado pra você, basta clicar em Reservar.
TEMPLATE TENTATIVA  2
SANA: **“{{nome}}, encontrei outro horário disponível caso fique melhor para voce:
 👉 {{dia_semana}}, às {{hora}}, com valor de {{preço}} a consulta.
aqui entra a versão com botões 
SANA: : Para garantir esse horário reservado pra você, basta clicar em Reservar.


—------------------------------------------------------------------------------------------------------------------------

EXEMPLO ETAPA 3 SANA I.A COEX ESCOLHIDO


exemplo REGRA 1 : o CLIENTE esta em atendimento e sua notificação de entrada da msg atraves da ETAPA 1 foi as 13:00 do dia 07/02/2026 , então o  SANA I.A COEX pode oferecer horários vagos apartir das 15:00 do dia 07/02/2026

exemplo REGRA 2 : o CLIENTE esta em atendimento e sua notificação de entrada da msg atraves da ETAPA 1 foi as 13:00 do dia 07/02/2026 , então o  SANA I.A COEX pode oferecer horários vagos apartir das 15:00 do dia 07/02/2026 , SANA I.A COEX  avalia a ficha do CLIENTE e identifica qual TIPO de HORÁRIO devera ser ofertado se é ONLINE ou PRESENCIAL , e qual modalidade de preço PADRAO , PROMOCIONAL ou EMERGENCIAL , então com essas especificações retiradas da FICHA do CLIENTE que foi enviada pelo SANA I.A ORQUESTRADOR ele consulta a TOOLS de horário e verifica qual horário mais proximo disponíveis respeitando as regras da FICHA+REGRA 1 e envia um TEMPLATE com essa possiblidade de reserva para o CLIENTE  atraves da TOOLS de TEMPLATE de notificação via API oficial WHATS 

exemplo REGRA 3 : o CLIENTE esta em atendimento e sua notificação de entrada da msg atraves da ETAPA 1 foi as 13:00 do dia 07/02/2026 , então o  SANA I.A COEX pode oferecer horários vagos apartir das 15:00 do dia 07/02/2026 , SANA I.A COEX  avalia a ficha do CLIENTE e identifica qual TIPO de HORÁRIO devera ser ofertado se é ONLINE ou PRESENCIAL , e qual modalidade de preço PADRAO , PROMOCIONAL ou EMERGENCIAL , então com essas especificações retiradas da FICHA do CLIENTE que foi enviada pelo SANA I.A ORQUESTRADOR ele consulta a TOOLS de horário e verifica qual horário mais proximo disponíveis respeitando as regras da FICHA+REGRA 1 e envia um TEMPLATE com essa possiblidade de reserva para o CLIENTE  atraves da TOOLS de TEMPLATE de notificação via API oficial WHATS , então ele espera 1 minuto para ver se o  CLIENTE efetua a reserva. 

Caso efetue não é necessario a REGRA 3 .

Se não efetuar entao  SANA I.A COEX  ira fazer uma nova consulta na TOOLS de horários e gerar uma nova oferta de reserva atraves da  TOOLS de TEMPLATE de notificação via API oficial WHATS, essa nova oferta devera respeitar a REGRA 1 + ANALISE da FICHA da REGRA 2 e então ofertar um horario disponivel na agenda que esteja disponível no dia seguinte , ou seja se no TEMPLATE 1 ele ofereceu o seguinte horário: 17:00 do dia 07/02/2026, então no TEMPLATE 2 o  SANA I.A COEX  podera ofertar horario apartir do dia 08/02/2026 no primeiro horario disponivel , se nesse dia nao tiver ele procura o proximo horario disponivel apartir do dia 08/02/2026 que eh o dia posterior a primeira oferta , sempre respeitando as especificações da FICHA , exemplo (HORÁRIOS PARA ATENDIMENTO ONLINE - preço PADRAO)

No caso do CLIENTE não efetuar nenhuma reserva nem no TEMPLATE 1 nem no TEMPLATE 2 ,  SANA I.A COEX envia msg abaixo e entra no modo ETAPA 4: 

SANA: João logo a Cintia estará presente em nossa conversa e poderemos ver outro horarios disponiveis ou encaixes conforme sua necessidade , enquanto se puder ouvir o audio e ver o video logo ela chega aqui 


No caso do CLIENTE efetuar a RESERVA  no TEMPLATE 1 ou no TEMPLATE 2  SANA I.A COEX  envia a msg abaixo e  entra no modo ETAPA 4:

SANA: João sua reserva esta garantida e logo a Cintia estará presente em nossa conversa para conversar com voçe.


—------------------------------------------------------------------------------------------------------------------------

ETAPA 4 : 

Nesta etapa o SANA I.A COEX aciona SANA CENTRAL ORQUESTRADOR e envia para ele a FICHA CLIENTE e a FICHA do DOUTOR ja adicionada de especificações sobre como todo atendimento do CLIENTE chegou ate a ETAPA 4 , juntamente de dados sobe a AGENDA do DOUTOR, assim o SANA CENTRAL ORQUESTRADOR podera analisar quem é o  CLIENTE seus dados, tbm fara uma analise do  DOUTOR, sabendo qual seu nome correto qual seu telefone , quais horarios ele esta disponível para receber notificações como ele gosta de ser chamado, qual seu ramo de especialidade

 VAMOS COLOCAR COMO AS FICHAS FICAM APOS SEREM COMPLEMENTADAS PELOS DADOS DO ATENDIMENTO ATE A ETAPA 4 E  EXPLICANDO SUAS ROTAS DE ANALISE DA FICHA AQUI 

O  SANA CENTRAL ORQUESTRADOR atraves de sua base de conhecimento sabe qual assistente de sua central ele deve chamar para enviar cada tipo de msg atraves da TOOLS de TEMPLATE de notificação via API oficial WHATS. Ele esta gerenciando os assistentes abaixo: SANA DISPARADOR  NOTIFICAÇÃO RESERVA.  SANA DISPARADOR  NOTIFICAÇÃO PRIMEIRA CONSULTA. SANA DISPARADOR DE COBRANÇA DE CONTRATO, SANA DISPARADOR LEMBRETE DE CONSULTA
—------------------------------------------------------------------------------------------------------------------------ 

Este SANA DISPARADOR  NOTIFICAÇÃO RESERVA, quando acionado pelo SANA CENTRAL ORQUESTRADOR, é responsável em notificar o DOUTOR quando a reserva de um horário  foi efetuada ou não pelo  CLIENTE  durante seu atendimento efetuado pelo SANA I.A COEX no fluxo de 4 ETAPAS  a informação  já com o TEMPLATE que deve ser usado é passada pelo  SANA CENTRAL ORQUESTRADOR que recebeu as informações do SANA I.A COEX  e analisou as variáveis  


TEMPLATES CADASTRADOS NO SANA DISPARADOR  NOTIFICAÇÃO RESERVA. 
TEMPLATE 1 RESERVA REALIZADA
RESERVA CONFIRMADA
Ola DOUTOR você recebeu uma reserva na sua agenda para a Data: xx/xx/xx as XX:XX horas , CLIENTE  esta aguardando sua chegada na conversa para concluir o atendimento. 
Deseja enviar a ficha de confirmação primeira consulta ?

SIM ou NAO 

TEMPLATE 2 RESERVA NÃO REALIZADA
RESERVA NÃO CONFIRMADA ( aguardar 4 minutos )
Ola DOUTOR , CLIENTE  esta aguardando sua chegada na conversa para concluir o atendimento de reserva de horário TIPO DE HORÁRIO (ONLINE / PRESENCIAL)

—------------------------------------------------------------------------------------------------------------------------ 



Com essas analises realizadas o SANA CENTRAL ORQUESTRADOR chama o  SANA DISPARADOR  NOTIFICAÇÃO RESERVA. ele ja recebe tudo mastigado e devera somente enviar o TEMPLATE escolhido pelo SANA CENTRAL ORQUESTRADOR para o  DOUTOR  atraves da TOOLS de TEMPLATE de notificação via API oficial WHATS. 

Enquanto o SANA CENTRAL ORQUESTRADOR faz seu trabalho juntamente do SANA DISPARADOR  NOTIFICAÇÃO RESERVA.  o  SANA I.A COEX VENDEDOR ETAPA 4 aguarda a chegada do DOUTOR  ate a conversa, e caso seja questionado pelo  CLIENTE  antes da chegada do DOUTOR  de alguma informação extra ele podera consultar a FICHA do DOUTOR
 e atraves da FICHA e somente com a base de conhecimento que esta na TOOL + dados da FICHA responder perguntas do  CLIENTE  sempre em  um formato fechado e incluindo que logo o DOUTOR
 ira chegar para concluir o atendimento , apos a chegada do DOUTOR  o SANA I.A COEX aciona a ETAPA 5




—------------------------------------------------------------------------------------------------------------------------

EXEMPLO ETAPA 4 SANA I.A COEX ESCOLHIDO
 
CLIENTE:  Qualquer pergunta que o cliente fizer que não puder ser respondida com a base de conhecimento da FICHA que o SANA I.A COEX tem acesso deverá ser respondida com a msg abaixo, fechando a conversa e lembrando que o DOUTOR logo vai chegar 
SANA: João logo a Cintia estará presente em nossa conversa e poderemos ver outro horarios disponiveis ou encaixes conforme sua necessidade , enquanto se puder ouvi o audio e ver o video logo ela chega aqui 
CLIENTE:  Qualquer pergunta que o cliente fizer que puder ser respondida com a base de conhecimento da FICHA que o SANA I.A COEX tem acesso deverá ser respondida porem sempre finalizado com a msg abaixo 

SANA: resposta da pergunta com base na base de conhecimento da tools + ficha + sempre com fechamento com logo DOUTOR estará presente em nossa conversa para conversar com você.

—------------------------------------------------------------------------------------------------------------------------

ETAPA 5
Nesta etapa é quando o  DOUTOR envia alguma msg na conversa ou atraves do TEMPLATE enviado pelo SANA DISPARADOR  NOTIFICAÇÃO RESERVA.  interage na conversa enviando o FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA então SANA I.A COEX  nao conversa mais nem responde questionamentos e deixa o   DOUTOR finalizar o atendimento atraves de suas proprias msg e auxilio dos assistentes do SANA CENTRAL ORQUESTRADOR.
Aqui o DOUTOR podera conversar com o CLIENTE primeiramente antes de enviar o FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA , pois nem sempre o CLIENTE tera reservado um horário dentro dos oferecidos pelo  SANA I.A COEX  , então nesse caso cabe ao DOUTOR  achar um novo horário e realizar a reserva manual no calendário inteligente do sana, para o CLIENTE , no proprio calendário entao ele podera enviar o FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA . 
Caso o CLIENTE tenha aceitado a reserva de alguns dos horários propostos pelo SANA I.A COEX então o DOUTOR podera executar o envio do FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA . diretamente da msg de confirmação recebida pelo SANA DISPARADOR  NOTIFICAÇÃO RESERVA.
Somente os CLIENTES que RECEBERAM o FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA estarão na ETAPA 6
—------------------------------------------------------------------------------------------------------------------------

ETAPA 6
O CLIENTE passa para a ETAPA 6 logo apos receber o FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA, Nesta etapa da conversa o SANA I.A COEX  nao esta mais presente na conversa e cabe ao DOUTOR conduzir apartir daqui todos os CLIENTE que chegam ate esta etapa ja RECEBERAM o FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA. Quando um CLIENTE chega ate esta etapa o SANA CENTRAL ORQUESTRADOR ja identifica pois controla os assistentes de notificação, o SANA CENTRAL ORQUESTRADOR  possui a FICHA  do CLIENTE e do DOUTOR assim como o histórico completo do atendimento ,então completa a FICHA com as informações da ETAPA 5 e aciona outro de seus assistentes , nessa caso sera o   SANA DISPARADOR  NOTIFICAÇÃO PRIMEIRA CONSULTA. ele recebera a FICHA atualizada do CLIENTE e do  DOUTOR e assim podera criar o template corretamente para ser entregue conforme ordem do SANA CENTRAL ORQUESTRADOR , 

o SANA CENTRAL ORQUESTRADOR completa a ficha COM TODOS OS DADOS DAS ETAPAS E MUDA O ESTADO DE FLOW ENVIADO PARA FLOW PREENCHIDO do CLIENTE e aciona o SANA DISPARADOR  NOTIFICAÇÃO PRIMEIRA CONSULTA. em tres hipóteses 
Primeira:
O CLIENTE conclui o preenchimento do FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA , e então a sua primeira consulta esta confirmada para o horário reservado na ETAPA 5 , 
Neta primeira hipótese o SANA CENTRAL ORQUESTRADOR,  completa a ficha e aciona o SANA DISPARADOR  NOTIFICAÇÃO PRIMEIRA CONSULTA logo que recebe a confirmação do preenchimento
Segunda:
O CLIENTE NÃO conclui o preenchimento do FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA , e então a sua primeira consulta NÃO esta confirmada para o horário reservado na ETAPA 5 ,  
Neta segunda hipótese o SANA CENTRAL ORQUESTRADOR,  completa a ficha e aciona o SANA DISPARADOR  NOTIFICAÇÃO PRIMEIRA CONSULTA ATUALIZA QUE O FLOW NAO FOI PREENCHIDO, logo apos passar 1 hora que o  CLIENTE recebeu  FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA e NAO respondeu , e 1:30 antes do HORÁRIO RESERVADO na  ETAPA5 , ele sabe dessas informações atraves da FICHA que foi sido completada durante as mudanças de ETAPAS.

Terceira:
O CLIENTE conclui o preenchimento do FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA , e sua primeira consulta esta confirmada pelo proprio DOUTOR para o horário reservado na ETAPA 5   atraves da utilização dos templates recebidos por ele ou atraves do uso diretamente no calendário inteligente.
Neta terceira hipótese o SANA CENTRAL ORQUESTRADOR,  completa a ficha COM FLOW PREENCHDO OU CONFIRMACAO PELO DOUTOR e aciona o SANA DISPARADOR  NOTIFICAÇÃO PRIMEIRA CONSULTA que agenda uma notificação  atraves do template 8  de lembrete de horário confirmado para 30 minutos antes da reserva de primeira consulta que foi confirmada pelo proprio DOUTOR , aqui o SANA CENTRAL ORQUESTRADOR antes de liberar o disparo do aviso pelo SANA DISPARADOR  NOTIFICAÇÃO PRIMEIRA CONSULTA  deve conferir novamente se o horário continua confirmado no calendário inteligente ou se foi cancelado pelo CLIENTE ou DOUTOR.

 VAMOS COLOCAR COMO AS FICHAS FICAM APOS SEREM COMPLEMENTADAS PELOS DADOS DO ATENDIMENTO ATE A ETAPA 5 e 6 E  EXPLICANDO SUAS ROTAS DE ANALISE DA FICHA AQUI 

—------------------------------------------------------------------------------------------------------------------------ 

Este SANA DISPARADOR  NOTIFICAÇÃO PRIMEIRA CONSULTA.quando acionado pelo SANA CENTRAL ORQUESTRADOR, é responsável em notificar o DOUTOR quando FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA foi efetuada ou NÃO pelo  CLIENTE  durante seu atendimento efetuado de 5 ETAPAS  a informação  já com o TEMPLATE que deve ser usado é passada pelo  SANA CENTRAL ORQUESTRADOR que recebeu as informações do SANA I.A COEX  e analisou as variáveis  e vai completando as fichas e passando para seus assistentes junto com as instruções de qual template usare quando.

—------------------------------------------------------------------------------------------------------------------------
TEMPLATES CADASTRADOS NO SANA DISPARADOR  NOTIFICAÇÃO PRIMEIRA CONSULTA.
—------------------------------------------------------------------------------------------------------------------------
TEMPLATE 1 
FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA CONFIRMADO
DE: SANA DISPARADOR  NOTIFICAÇÃO PRIMEIRA CONSULTA.
PARA: DOUTOR
PRIMEIRA CONSULTA CONFIRMADA
Ola DOUTOR voçe recebeu a confirmação da primeira consulta de CLIENTE na sua agenda para a Data: xx/xx/xx as XX:XX horas 
Deseja enviar o link da reunião para o CLIENTE ?

SIM ou NAO 

—------------------------------------------------------------------------------------------------------------------------
TEMPLATE 2 
FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA CONFIRMADO
DE: SANA DISPARADOR  NOTIFICAÇÃO PRIMEIRA CONSULTA.
PARA: DOUTOR
PRIMEIRA CONSULTA CONFIRMADA
Ola DOUTOR voçe recebeu a confirmação da primeira consulta de CLIENTE na sua agenda para a Data: xx/xx/xx as XX:XX horas 
Deseja enviar o endereço do consultorio para o CLIENTE ?

SIM ou NAO 
—------------------------------------------------------------------------------------------------------------------------
TEMPLATE 3 
FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA NÃO CONFIRMADO 1 HORA ANTES DO HORÁRIO DA RESERVA DO CLIENTE
DE: SANA DISPARADOR  NOTIFICAÇÃO PRIMEIRA CONSULTA.
PARA: DOUTOR
PRIMEIRA CONSULTA NÃO CONFIRMADA
Ola DOUTOR voçe NÃO recebeu a confirmação da primeira consulta de CLIENTE na sua agenda para a Data: xx/xx/xx as XX:XX horas 
Deseja cancelar a reserva e notificar o CLIENTE ?

SIM ou NAO 

—------------------------------------------------------------------------------------------------------------------------ 

TEMPLATE 4 
FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA NÃO CONFIRMADO APOS 1 HORA DO SEU ENVIO
DE: SANA DISPARADOR  NOTIFICAÇÃO PRIMEIRA CONSULTA.
PARA: CLIENTE
PRIMEIRA CONSULTA NÃO CONFIRMADA
Ola CLIENTE voçe NÃO respondeu o FLOW de confirmação da primeira consulta com  DOUTOR  para a Data: xx/xx/xx as XX:XX horas 
Deseja cancelar a reserva e notificar o DOUTOR ?

SIM ou VOU CONCLUIR O FLOW


—------------------------------------------------------------------------------------------------------------------------ 
TEMPLATE 5
FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA NÃO CONFIRMADO 1 HORA E 30 MINUTOS ANTES DA RESERVA 
DE: SANA DISPARADOR  NOTIFICAÇÃO PRIMEIRA CONSULTA.
PARA: CLIENTE
PRIMEIRA CONSULTA NÃO CONFIRMADA
Ola CLIENTE voçe NÃO respondeu o FLOW de confirmação da primeira consulta com  DOUTOR  para a Data: xx/xx/xx as XX:XX horas , caso não seja preenchido sua agenda não estará garantida.
Deseja cancelar a reserva e notificar o DOUTOR ?

SIM ou VOU CONCLUIR O FLOW


—------------------------------------------------------------------------------------------------------------------------ 

TEMPLATE 6
FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA CONFIRMADO 
DE: SANA DISPARADOR  NOTIFICAÇÃO PRIMEIRA CONSULTA.
PARA: CLIENTE
PRIMEIRA CONSULTA ONLINE CONFIRMADA
Ola CLIENTE esta é a confirmação da primeira consulta com  DOUTOR  para a Data: xx/xx/xx as xx:xx horas , o link de sua chamada é ( link da chamada do google )
Qualquer eventual problema avisar  DOUTOR com antecedência 
—------------------------------------------------------------------------------------------------------------------------ 

TEMPLATE 7
FLOW de CONFIRMAÇÃO DE PRIMEIRA CONSULTA CONFIRMADO 
DE: SANA DISPARADOR  NOTIFICAÇÃO PRIMEIRA CONSULTA.
PARA: CLIENTE
PRIMEIRA CONSULTA PRESENCIAL CONFIRMADA
Ola CLIENTE esta é a confirmação da primeira consulta com  DOUTOR  para a Data: xx/xx/xx as xx:xx horas , o endereço esta no link  ( link do google maps )
Qualquer eventual problema avisar  DOUTOR com antecedência 


—------------------------------------------------------------------------------------------------------------------------ 

TEMPLATE 8
FLOW de AVISO  PRIMEIRA CONSULTA CONFIRMADO 
DE: SANA DISPARADOR  NOTIFICAÇÃO PRIMEIRA CONSULTA.
PARA: CLIENTE
PRIMEIRA CONSULTA
Ola CLIENTE sua primeira consulta com  DOUTOR acontecera daqui a  30 minutos 

—------------------------------------------------------------------------------------------------------------------------

ETAPA 7
AQUI SERA APOS A PRIMEIRA CONSULTA REALIZADA , OU CASO O CLIENTE NAO COMPARECA , O'QUE DEVE ACONTECER , ENVOLVE A PARTE DE FECHAR CONTRATAÇÃO OU LIBERAR O HORÁRIO E OSANA CENTRAL ORQUESTRADOR COM SEUS ASSISTENTES SANA DISPARADOR DE COBRANÇA DE CONTRATO, SANA DISPARADOR LEMBRETE DE CONSULTA ELE SOH TRABALHA DEPOIS QUE O CLIENTE FECHA UM CONTRATO.

A ESCREVER TA SO NA MENTE AINDA

—------------------------------------------------------------------------------------------------------------------------ 

