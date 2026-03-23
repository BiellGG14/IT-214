# Atividade 03 — Seleção de quatro Sítios

**Disciplina:** Mobilidade Aérea Urbana — IT-214  
**Instituto:** Instituto Tecnológico de Aeronáutica (ITA)  
**Grupo:** Jaqueline Rodrigues · Luiz Tozi · Nickolas Victor · Gabriel Rufino · Giovanni Teles · Mírian Drago

---

## Objetivos

- Consolidar os 4 sítios priorizados em Brasília para implantação inicial de vertiportos.
- Exibir o resultado de forma visual e interativa (mapa, tabela e gráfico).
- Documentar, de forma mínima, o racional de escolha de cada região.

## Painel Interativo dos Sítios

<iframe
	src="atv03-sitios.html"
	title="Atividade 03 - Sítios UAM Brasília"
	style="width:100%; height:1900px; border:1px solid #dde3ec; border-radius:12px; background:#fff;"
	loading="lazy"
></iframe>

## Síntese da seleção 

Os quatro sítios foram selecionados por complementaridade operacional na malha inicial de UAM em Brasília:

- **Sítio A — Águas Claras (eixo metroviário):** polo residencial-comercial com forte fluxo pendular diário.
- **Sítio B — Aeroporto Internacional de Brasília (BSB):** concentração de demanda aeroportuária e conexão nacional.
- **Sítio C — Asa Norte (SCS/Eixo Central):** alta densidade de destinos administrativos, corporativos e hoteleiros.
- **Sítio D — Águas Claras (eixo rodoviário):** alternativa complementar de acesso terrestre e distribuição de demanda local.

Essa configuração forma uma rede logística de curta/média distância com alto potencial de ganho de tempo em horários de pico.

## Galeria dos locais específicos (Google Earth)

> Inserir aqui as imagens exportadas/capturadas do projeto Google Earth para cada local.

| Sítio | Arquivo esperado em `docs/image/Atividade03/` |
|---|---|
| Sítio A — Águas Claras (eixo metroviário) | `sitio-a-aeroporto.jpg` |
| Sítio B — Aeroporto Internacional de Brasília (BSB) | `sitio-b-plano-piloto.jpg` |
| Sítio C — Asa Norte (SCS/Eixo Central) | `sitio-c-aguas-claras.jpg` |
| Sítio D — Águas Claras (eixo rodoviário) | `sitio-d-aguas-claras-rodoviario.jpg` |

As imagens aparecem automaticamente no painel interativo acima assim que esses arquivos forem adicionados ao repositório.

## Critérios resumidos de avaliação

| Critério | Sítio A (Águas Claras metroviário) | Sítio B (BSB) | Sítio C (Asa Norte) | Sítio D (Águas Claras rodoviário) |
|---|---|---|---|---|
| Demanda potencial | Alta (pendular) | Alta (aeroporto/hub) | Alta (serviços/governo) | Média-Alta (distribuição local) |
| Integração modal | Alta (metrô + vias arteriais) | Alta (terminal/rodoviário) | Média-Alta (ônibus/eixos centrais) | Alta (eixo rodoviário) |
| Restrição urbanística | Média | Média | Alta | Média |

## Critério de ruído e proteção de receptores sensíveis

Além de conectividade e demanda, a seleção considerou literatura técnica sobre impacto acústico de UAM, incluindo o artigo **Determination of the noise impact range of urban air mobility**. Como referência prática de triagem espacial, adotamos uma faixa de influência horizontal de **400 m a 600 m** para evitar implantação muito próxima de receptores sensíveis.

O mapa interativo acima exibe uma camada de análise com:

- **Escolas/Hospitais** georreferenciados em Brasília;
- **Buffer de 400 m** (zona sensível — em roxo);
- **Buffer de 600 m** (limite de cautela — em laranja).

Essa análise visual permite identificar espacialmente quais sítios guardam distâncias adequadas de receptores sensíveis, alinhado com as recomendações do artigo.

## Próximos passos

1. Refinamento local: validação in-loco dos sítios e levantamento de detalhes arquitetônicos preliminares.
2. Análise multicritério com **AHP (Analytic Hierarchy Process)** para priorização final do sítio do vertiporto.
3. Definir pesos dos critérios (demanda, integração modal, restrição urbanística, ruído e viabilidade regulatória).
4. Matriz de comparação par-a-par e teste de consistência (CR) do AHP.
5. Seleção do sítio final e delimitação de área candidata para anteprojeto construtivo do vertiporto.

## Conclusão

A seleção dos quatro sítios prioriza equilíbrio entre **demanda real**, **integração com modais existentes** e **viabilidade de implantação em fases**. O modelo em rede (Águas Claras metroviário - BSB - Asa Norte - Águas Claras rodoviário) sustenta uma operação inicial com boa cobertura e capacidade de expansão.

## Referências

1. Projeto Google Earth do grupo (sítios em Brasília).
2. ANAC - diretrizes e materiais sobre AAM/UAM e certificação: https://www.gov.br/anac
3. SEMOB-DF e IPEDF - dados de mobilidade e dinâmica urbana do DF.
4. Determination of the noise impact range of urban air mobility.
