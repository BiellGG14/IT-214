# Atividade 02 — Síntese Técnica, Operacional e Regulatória da UAM/AAM

**Disciplina:** Mobilidade Aérea Urbana — IT-214
**Instituto:** Instituto Tecnológico de Aeronáutica (ITA)
**Grupo:** Jaqueline Rodrigues · Luiz Tozi · Tariq Lopes · Gabriel Rufino · Giovanni Teles · Mírian Drago

---

## Objetivos

- Leitura e exercícios dos Blocos 1-5
- Apresentação detalhada sobre as cidades escolhidas.

## Desenvolvimento

### 1) Fundamentação e Análise Crítica (Bloco 1)

A viabilização da **Advanced Air Mobility (AAM)** e da **Urban Air Mobility (UAM)** exige maturação simultânea de propulsão, energia, gestão de tráfego, infraestrutura, regulação e aceitação social [cite: 3]. O ecossistema é sociotécnico e interdependente [cite: 4].

**Convergências técnicas**

- Avanços em baterias, propulsão elétrica distribuída e autonomia impulsionam a nova geração de aeronaves [cite: 7].
- Tendência de menor ruído, maior segurança operacional e potencial redução de custo frente a helicópteros convencionais [cite: 8].
- O ATM tradicional não absorve o volume on-demand esperado, demandando **UTM/U-space** [cite: 10, 11].
- A expansão da operação depende de vertiportos com alto throughput, recarga rápida e conectividade digital (ex.: 5G/6G) [cite: 14, 15].

**Divergências e limitações**

- A adoção inicial tende a nichos premium, com dúvidas sobre escalabilidade imediata como transporte de massa [cite: 18, 19].
- O principal gargalo é a **densidade energética das baterias**, limitando alcance, carga útil e robustez econômica [cite: 22, 35, 36, 37, 40].

### 2) Aplicação Operacional e Infraestrutura (Bloco 2)

As arquiteturas aeronáuticas alteram diretamente procedimentos operacionais e dimensionamento da infraestrutura [cite: 44].

**Dimensionamento de vertiportos**

- **Asa rotativa:** menor footprint e maior adaptação a áreas confinadas [cite: 48].
- **Lift+Cruise / Tilt-wing:** maior área e envelopes laterais amplos por conta das superfícies alares [cite: 50].
- **Tail-sitter:** ocupa menos área em solo, mas exige pé-direito e estabilização específicos [cite: 52].

**Procedimentos e energia**

- Perfil de operação (hover, transição, cruzeiro) impacta consumo, turnaround e exigência de recarga [cite: 56, 67].
- Configurações mais eficientes em cruzeiro favorecem rotas de média distância, com menor penalidade energética fora do hover [cite: 64].

**Gestão do espaço aéreo**

- A heterogeneidade de aeronaves eleva a complexidade de separação e sequenciamento [cite: 73].
- O UTM deve considerar o modo de voo para melhor previsão de conflito e coordenação tática [cite: 82, 84].

### 3) Estrutura Regulatória e Planejamento (Bloco 3)

**Facilitadores regulatórios**

- Evolução para requisitos baseados em desempenho [cite: 101].
- Uso de sandboxes regulatórios para validação gradual de conceitos e operações [cite: 103].

**Limitadores atuais**

- Dependência de piloto a bordo em muitos cenários [cite: 105].
- Ausência de protocolos consolidados para alto volume de voos UAM integrado ao ATM tradicional [cite: 107].

**Riscos comunitários críticos**

- Ruído e assinatura sonora como vetores centrais de aceitação pública [cite: 111, 112].
- Preocupações com privacidade e vigilância em áreas residenciais [cite: 113].
- Risco distributivo ("gentrificação aérea"): benefícios concentrados e externalidades distribuídas [cite: 114].

**UAM x AAM**

- **UAM:** foco urbano denso, alta complexidade operacional e regulatória [cite: 129].
- **AAM:** conceito guarda-chuva (urbano, regional, rural e carga), com maior viabilidade inicial em áreas menos congestionadas [cite: 130, 131, 126].

### 4) Estudo Técnico Comparativo de Categorias (Bloco 4)

#### 4.1 CTOL (Conventional Take-off and Landing)

**Exemplo:** Cessna 208 Caravan (variante elétrica eCaravan)

**Desempenho**

- Alcance: ~160 km (limitado pelas baterias atuais)
- Velocidade: 320 km/h
- Capacidade: 9 passageiros

**Propulsão**

- Motor elétrico (ex.: magni500)
- Alimentação por baterias de íon-lítio

**Ambiente operacional predominante**

- Regional
- Conexão entre cidades secundárias e hubs

**Desafios regulatórios associados**

- Certificação da propulsão elétrica em células existentes (Part 23)
- Gestão do peso das baterias para manter carga útil

**Implicações para infraestrutura**

- Necessidade de aeródromos convencionais
- Pistas longas
- Infraestrutura de carregamento elétrico de alta potência (megawatts)

#### 4.2 STOL (Short Take-off and Landing)

**Exemplo:** Electra.aero eSTOL

**Desempenho**

- Alcance: ~800 km
- Velocidade: 320 km/h
- Capacidade: 9 passageiros

**Propulsão**

- Híbrida-elétrica
- Propulsão distribuída (sopro sobre a asa para aumentar sustentação em baixa velocidade)

**Ambiente operacional predominante**

- Regional
- Urbano periférico

**Possíveis locais de operação**

- Pistas muito curtas
- Estruturas adaptadas como estacionamentos ou áreas urbanas adequadas

**Desafios regulatórios associados**

- Definição de padrões para pistas extremamente curtas
- Controle de ruído em decolagens com fluxo soprado sobre a asa

**Implicações para infraestrutura**

- Operações em STOLports
- Infraestrutura menor que aeroportos tradicionais e maior que vertiportos
- Necessidade de integração com zoneamento urbano

#### 4.3 VTOL / eVTOL (Vertical Take-off and Landing)

**Exemplo:** Joby S4 (configuração tilt-rotor)

**Desempenho**

- Alcance: ~240 km
- Velocidade: 320 km/h
- Capacidade: 1 piloto + 4 passageiros

**Propulsão**

- Totalmente elétrica
- 6 rotores basculantes (tilt-rotors)

**Ambiente operacional predominante**

- Urbano denso
- Mobilidade aérea urbana (UAM)
- Transporte executivo

**Desafios regulatórios associados**

- Certificação da transição entre voo vertical e horizontal
- Sistemas Detect and Avoid para operações em baixa altitude

**Implicações para infraestrutura**

- Necessidade de vertiportos
- Alta capacidade de recarga elétrica
- Áreas de aproximação com perfis íngremes

#### 4.4 Asa Rotativa (Helicóptero Convencional)

**Exemplo:** Airbus H125 (Esquilo)

**Desempenho**

- Alcance: ~630 km
- Velocidade: 250 km/h
- Capacidade: 5 a 6 passageiros

**Propulsão**

- Turbina a combustão
- Turbomeca Arriel 2D

**Ambiente operacional predominante**

- Multimissão
- Emergências médicas
- Transporte VIP
- Operações rurais

**Desafios regulatórios associados**

- Restrições de ruído em áreas urbanas
- Custos elevados de manutenção
- Pegada de carbono elevada

**Implicações para infraestrutura**

- Utilização de helipontos existentes
- Base de referência para dimensionamento inicial de futuros vertiportos

#### 4.5 UAS (Unmanned Aircraft Systems – Carga)

**Exemplo:** EHang 216-L (logística)

**Desempenho**

- Alcance: ~35 km
- Velocidade: 130 km/h
- Capacidade de carga: até 200 kg

**Propulsão**

- Totalmente elétrica
- Multirotor com 16 motores

**Ambiente operacional predominante**

- Logística urbana
- Entregas de última milha
- Operações industriais

**Desafios regulatórios associados**

- Segregação do espaço aéreo
- Operações BVLOS (Beyond Visual Line of Sight)
- Cibersegurança do link de comando e controle

**Implicações para infraestrutura**

- Áreas de pouso automatizadas
- Integração completa com sistemas UTM (Unmanned Traffic Management)

| Categoria    | Exemplo       | Alcance (aprox.) | Velocidade (aprox.) | Capacidade  | Infraestrutura predominante    | Principal desafio                     |
| ------------ | ------------- | ---------------: | ------------------: | ----------- | ------------------------------ | ------------------------------------- |
| CTOL         | eCaravan      |           160 km |            320 km/h | 9 pax       | Aeródromos convencionais      | Peso/energia de baterias              |
| STOL         | Electra eSTOL |           800 km |            320 km/h | 9 pax       | STOLports/pistas curtas        | Padronização operacional e ruído   |
| VTOL/eVTOL   | Joby S4       |           240 km |            320 km/h | 1+4 pax     | Vertiportos                    | Certificação da transição + DAA   |
| Asa Rotativa | Airbus H125   |           630 km |            250 km/h | 5–6 pax    | Helipontos                     | Ruído, custo e emissões             |
| UAS (carga)  | EHang 216-L   |            35 km |            130 km/h | até 200 kg | Hubs logísticos automatizados | BVLOS, segregação e cibersegurança |

**Síntese técnica do comparativo**

- **CTOL/STOL** fortalecem conectividade regional, com maior dependência de pista.
- **VTOL/eVTOL** são mais aderentes ao contexto urbano e intracity, demandando vertiportos e alta disponibilidade energética.
- **UAS** minimizam infraestrutura física, mas trazem alto desafio de integração segura no espaço aéreo compartilhado.

### 5) Consolidação dos Pontos-Chave (Bloco 5)

**Desafios urbanos críticos**

- Infraestrutura física (vertiportos e interfaces com modais terrestres) [cite: 136, 137].
- Gerenciamento de tráfego de baixa altitude (UTM robusto e interoperável) [cite: 138, 139].
- Aceitação social (ruído, segurança e percepção de benefício coletivo) [cite: 140, 141].

**Infraestruturas indispensáveis**

- Vertiportos (operação, manutenção e turnaround) [cite: 161, 162].
- Sistemas UTM para planejamento e monitoramento em tempo real [cite: 163, 164].
- Rede energética de alta potência para recarga rápida e previsível [cite: 165, 166].

**Implicação estratégica**

- O sucesso da UAM depende de implantação faseada, governança regulatória adaptativa e alinhamento entre tecnologia, infraestrutura e política pública [cite: 168, 170, 173].

## Conclusão

A análise consolidada indica que a UAM é tecnicamente promissora, porém condicionada por três eixos de maturidade: **energia**, **coordenação do espaço aéreo** e **regulação orientada a risco**. No curto prazo, a adoção deve ocorrer em nichos operacionais e corredores específicos; no médio prazo, a escalabilidade dependerá de ganhos de densidade energética, padronização de vertiportos e aceitação comunitária. Em termos de planejamento, recomenda-se abordagem incremental (pilotos controlados, avaliação contínua de impacto e expansão por evidência), priorizando segurança operacional e valor público.

## Referências

1. Garrow, L. A., et al. (2021). Urban Air Mobility: A Comprehensive Review of Current Practice and Future Prospects.
2. Kiesewetter, P., et al. (2023). Advanced Air Mobility Communications and Networking: Recent Advances, Techniques, and Challenges.
3. Pak, H., et al. (2024). Can Urban Air Mobility become reality? Opportunities and challenges.
4. Arafat, M. Y., & Pan, S. (2024). Urban Air Mobility Communications and Networking.

---

# Brasília em 2026. Estrutura urbana, custo de vida e potencial para mobilidade aérea urbana

Brasília é uma cidade única, projetada para ser a capital funcional e monumental do Brasil. Para compreender a dinâmica urbana em 2026, é necessário analisar simultaneamente seu traçado urbanístico icônico e os desafios de mobilidade de uma metrópole moderna.

Viver no Distrito Federal em 2026 representa um cenário de contrastes. Embora Brasília possua uma das maiores rendas per capita do país, o custo de vida acompanha esse nível de renda e frequentemente se aproxima dos patamares de São Paulo e Rio de Janeiro. A compreensão dessa dinâmica exige observar a relação estrutural entre o Plano Piloto e as Cidades Satélites, além dos fatores que compõem o orçamento cotidiano da população.

## Highlights

- Brasília combina alto valor urbanístico e forte pressão de mobilidade pendular entre Plano Piloto e Regiões Administrativas.
- Renda per capita média no DF em 2026: aproximadamente **R$5.400/mês**.
- Gasto médio mensal estimado no DF em 2026: aproximadamente **R$4.920**.
- Triângulo logístico proposto para UAM: **Aeroporto Internacional de Brasília ↔ Plano Piloto ↔ Águas Claras**.
- Ganho potencial de tempo nas rotas analisadas: **6–10 min (eVTOL)** versus **25–70 min (carro em horário de pico)**.
- Viabilidade depende de integração multimodal, infraestrutura de vertiportos e coordenação regulatória.

---

# Arquitetura e cultura

Brasília pode ser entendida como um museu a céu aberto. A cidade possui a maior área urbana tombada do mundo pela UNESCO. Sua identidade arquitetônica é marcada pelas curvas de Oscar Niemeyer e pelo planejamento urbano de Lúcio Costa.

## Eixo Monumental

O Eixo Monumental concentra os principais edifícios institucionais da capital:

- Congresso Nacional
- Palácio do Planalto
- Supremo Tribunal Federal
- Palácio Itamaraty

## Museus

Alguns dos espaços culturais mais relevantes incluem:

**Museu Nacional da República**
Reconhecido pela grande cúpula branca. Recebe exposições itinerantes nacionais e internacionais.

**Memorial JK**
Espaço dedicado à memória do fundador da cidade, Juscelino Kubitschek.

**CCBB Brasília**
Centro cultural de grande relevância nacional, com exposições, eventos e jardins projetados para grandes fluxos de visitantes.

## Arquitetura religiosa

Dois edifícios se destacam:

- **Catedral Metropolitana de Brasília**, conhecida pelos anjos suspensos no interior.
- **Santuário Dom Bosco**, famoso pelos vitrais azuis que criam um ambiente luminoso singular.

---

# O Aeroporto Internacional de Brasília

O Aeroporto Internacional de Brasília – Presidente Juscelino Kubitschek constitui um dos principais hubs aeroportuários da América Latina.

## Conectividade

O aeroporto funciona como ponto estratégico de conexão para passageiros que se deslocam entre:

- Norte e Nordeste
- Sul e Sudeste

## Estrutura

O complexo possui infraestrutura ampliada, incluindo o **Aeroporto Square**, espaço com cinema, lojas e restaurantes utilizado tanto por passageiros quanto por moradores da cidade.

---

# Mobilidade e trânsito

Brasília foi planejada originalmente para priorizar o transporte automotivo. Esse modelo gera grande pressão sobre o sistema viário, especialmente nos deslocamentos entre o Plano Piloto e as Regiões Administrativas.

## Modais de transporte

### Ônibus e BRT

O BRT Sul conecta regiões como:

- Santa Maria
- Gama

O corredor Eixo Oeste, pela EPTG, passa por expansão para melhorar o fluxo de Taguatinga.

### Metrô

O sistema possui formato de Y, conectando:

- Rodoviária do Plano Piloto
- Ceilândia
- Samambaia

O trajeto inclui:

- Asa Sul
- Guará
- Águas Claras

### Rodovias urbanas

Principais eixos de circulação:

- Eixão (Eixo Rodoviário)
- L4
- EPTG
- EPIA

## Horários de pico

Os maiores congestionamentos ocorrem nos deslocamentos pendulares entre periferia e centro.

- **Manhã:** 06:30 – 09:00
- **Tarde / noite:** 17:30 – 19:45

## Eixão do Lazer

Aos domingos e feriados o Eixão é fechado para veículos e aberto ao uso recreativo da população.

- **Horário:** 06:00 – 18:00

---

# Perfil socioeconômico e renda

Brasília apresenta grande desigualdade espacial de renda. Embora o Distrito Federal tenha a maior renda per capita do Brasil, superior a aproximadamente **R$5.400 mensais em média em 2026**, as diferenças entre regiões são significativas.

| Região                    | Perfil de renda                                                      |
| -------------------------- | -------------------------------------------------------------------- |
| Lago Sul / Lago Norte      | Áreas de altíssima renda, com renda domiciliar superior a R$30.000 |
| Plano Piloto / Sudoeste    | Alta renda, concentrando servidores públicos federais               |
| Águas Claras              | Classe média alta, forte verticalização                           |
| Sol Nascente / Pôr do Sol | Regiões com maior vulnerabilidade social                            |

---

# Custo de vida em 2026

Dados de fevereiro de 2026 indicam que o gasto médio mensal de um morador do Distrito Federal gira em torno de **R$4.920**.

Quatro fatores principais determinam esse custo.

## Moradia

Principal componente do orçamento. O valor varia significativamente entre regiões.

## Alimentação

Custos elevados tanto em supermercados quanto em restaurantes.

## Transporte

Deslocamentos longos aumentam despesas com combustível ou aplicativos de transporte.

## Serviços e lazer

Brasília apresenta um dos custos mais altos do país nesse segmento.

---

# Diferenças regionais no custo de vida

## Plano Piloto

Regiões:

- Asa Sul
- Asa Norte
- Sudoeste
- Noroeste

Características:

- Custo imobiliário muito elevado
- Proximidade de serviços
- Redução do tempo de deslocamento

Perfil predominante:

- servidores públicos de alto escalão
- diplomatas
- executivos

---

## Regiões de classe média

Principais áreas:

- Águas Claras
- Guará

Características:

- custo intermediário
- forte verticalização
- acesso ao metrô

Desafio principal: deslocamentos diários.

---

## Regiões administrativas periféricas

Exemplos:

- Ceilândia
- Santa Maria
- Sol Nascente

Características:

- menor custo de moradia
- maior dependência de transporte público
- grandes tempos de deslocamento.

---

# Planejamento financeiro no DF

## Armadilha do deslocamento

Morar longe do centro pode reduzir o aluguel, mas aumenta custos indiretos:

- combustível
- tempo perdido no trânsito
- desgaste logístico diário

## Orçamento familiar

Uma família de quatro pessoas pode ultrapassar **R$13.000 mensais**, considerando:

- educação
- saúde
- transporte
- lazer

---

# Vertiportos e mobilidade aérea urbana

A implantação de vertiportos em Brasília representa uma possível solução estrutural para os desafios de mobilidade da capital.

Vertiportos são infraestruturas dedicadas à operação de aeronaves elétricas de decolagem vertical (**eVTOLs**), frequentemente chamadas de carros voadores.

---

# Estrutura potencial da rede aérea urbana

Um modelo inicial pode ser estruturado em um triângulo logístico conectando:

- Aeroporto Internacional de Brasília
- Plano Piloto
- Águas Claras

---

# Distâncias e tempos estimados

| Rota                          | Distância aproximada | Tempo eVTOL | Tempo carro (pico) |
| ----------------------------- | --------------------- | ----------- | ------------------ |
| Aeroporto → Plano Piloto     | ~10 km                | 6–8 min    | 25–45 min         |
| Aeroporto → Águas Claras    | ~12 km                | 7–9 min    | 35–60 min         |
| Plano Piloto → Águas Claras | ~15 km                | 8–10 min   | 40–70 min         |

## Ilustração das rotas (mapas)

### 1) Aeroporto → Plano Piloto

**Interpretação:** trajeto entre o Aeroporto Internacional de Brasília (A) e o Plano Piloto/SCS (B).

![Rota Aeroporto para Plano Piloto](../img/SCSaero.jpeg)

*Figura 1 — Rota Aeroporto → Plano Piloto.*

### 2) Plano Piloto → Águas Claras

**Interpretação:** trajeto entre o Plano Piloto/SCS (A) e Águas Claras (B).

![Rota Plano Piloto para Águas Claras](../img/SCSaguas.jpeg)

*Figura 2 — Rota Plano Piloto → Águas Claras.*

### 3) Aeroporto → Águas Claras

**Interpretação:** trajeto direto entre o Aeroporto Internacional de Brasília (A) e Águas Claras (B).

![Rota Aeroporto para Águas Claras](../img/aeroAguas.jpeg)

*Figura 3 — Rota Aeroporto → Águas Claras.*

**Leitura comparativa:** os três mapas reforçam o triângulo logístico proposto para implantação inicial da rede de vertiportos e evidenciam o potencial de ganho de tempo nos deslocamentos pendulares.

---

# Integração multimodal

A viabilidade do sistema depende da conexão com os modais existentes.

### Plano Piloto

Vertiporto integrado ao Setor Comercial Sul e aos eixos de ônibus e metrô.

### Águas Claras

Vertiporto próximo à estação de metrô, permitindo conexão imediata com o sistema ferroviário urbano.

---

# Corredores de voo

Os eVTOLs operariam em baixa altitude, abaixo de aproximadamente **1.000 pés**.

Em Brasília, grandes vias como o **Eixão** podem funcionar como corredores naturais de navegação aérea, reduzindo impacto acústico sobre áreas residenciais.

---

# Desafios institucionais

## Tombamento do Plano Piloto

A proteção urbanística limita novas construções. Vertiportos precisariam utilizar:

- topos de edifícios
- estacionamentos existentes
- estruturas já urbanizadas.

## Escalabilidade

A viabilidade econômica exige alta frequência de voos e sistemas digitais avançados de gestão de tráfego aéreo.

---

# Justificativa estratégica para Brasília

Três fatores tornam a capital um local adequado para implementação inicial dessa tecnologia.

## Geografia urbana espraiada

A estrutura da cidade cria gargalos viários entre o Plano Piloto e as regiões administrativas.

## Hub aeroportuário nacional

Conectar rapidamente o Aeroporto JK aos centros administrativos e hoteleiros aumenta a eficiência logística.

## Perfil governamental e diplomático

Autoridades, executivos e diplomatas demandam deslocamentos rápidos e previsíveis.

---

# Impactos econômicos potenciais

## Geração de empregos qualificados

A infraestrutura de vertiportos demanda profissionais em áreas como:

- engenharia aeronáutica
- manutenção elétrica
- gestão de tráfego aéreo urbano
- tecnologia da informação

---

## Valorização imobiliária

A proximidade de vertiportos tende a atrair:

- hotéis
- centros comerciais
- polos empresariais

---

## Aumento de produtividade

Reduzir deslocamentos de 90 minutos para cerca de 10 minutos gera ganhos econômicos significativos, liberando tempo produtivo para profissionais e empresas.

---

# Desafios de equidade

Inicialmente o serviço deve operar como modalidade premium.

Entretanto, o aumento da escala de produção e operação pode reduzir gradualmente o custo por passageiro, aproximando o preço de serviços de transporte por aplicativo de categoria superior.

A integração com transporte público será determinante para evitar que a tecnologia se torne um sistema isolado.

---

# Fontes de dados e instituições relevantes

## Estatísticas e economia

- IPEDF – Instituto de Pesquisa e Estatística do Distrito Federal: [https://www.ipe.df.gov.br](https://www.ipe.df.gov.br)
- IBGE – Instituto Brasileiro de Geografia e Estatística: [https://www.ibge.gov.br](https://www.ibge.gov.br)
- Plataforma de dados municipais: [https://cidades.ibge.gov.br](https://cidades.ibge.gov.br)

---

## Mobilidade urbana

SEMOB-DF – Secretaria de Transporte e Mobilidade
Informações sobre metrô, ônibus e projetos viários.

- Agência Brasília: [https://www.agenciabrasilia.df.gov.br](https://www.agenciabrasilia.df.gov.br)

---

## Mobilidade aérea urbana

ANAC – Agência Nacional de Aviação Civil
Responsável pela certificação e regulamentação.

- [https://www.gov.br/anac](https://www.gov.br/anac)

Eve Air Mobility
Empresa brasileira de desenvolvimento de eVTOL e ecossistemas de mobilidade aérea.

- [https://www.eveairmobility.com](https://www.eveairmobility.com)
