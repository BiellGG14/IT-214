# Atividade 03 — Seleção de três Sítios

**Disciplina:** Mobilidade Aérea Urbana — IT-214  
**Instituto:** Instituto Tecnológico de Aeronáutica (ITA)  
**Grupo:** Jaqueline Rodrigues · Luiz Tozi · Nickolas Victor · Gabriel Rufino · Giovanni Teles · Mírian Drago

---

## Objetivos

- Consolidar os 3 sítios priorizados em Brasília para implantação inicial de vertiportos.
- Exibir o resultado de forma visual e interativa (mapa, tabela e gráfico).
- Documentar, de forma mínima, o racional de escolha de cada região.

## Painel Interativo dos Sítios

<iframe
	src="atv03-sitios.html"
	title="Atividade 03 - Sítios UAM Brasília"
	style="width:100%; height:1200px; border:1px solid #dde3ec; border-radius:12px; background:#fff;"
	loading="lazy"
></iframe>

## Síntese da seleção (texto mínimo)

Os três sítios foram selecionados por complementaridade operacional na malha inicial de UAM em Brasília:

- **Sítio A — Aeroporto Internacional de Brasília (BSB):** concentração de demanda aeroportuária e conexão nacional.
- **Sítio B — Plano Piloto (SCS/Eixo Central):** alta densidade de destinos administrativos, corporativos e hoteleiros.
- **Sítio C — Águas Claras (eixo metroviário):** polo residencial-comercial com forte fluxo pendular diário.

Essa configuração forma um triângulo logístico de curta/média distância com alto potencial de ganho de tempo em horários de pico.

## Galeria dos locais específicos (Google Earth)

> Inserir aqui as imagens exportadas/capturadas do projeto Google Earth para cada local.

| Sítio | Arquivo esperado em `docs/image/Atividade03/` |
|---|---|
| Sítio A — Aeroporto Internacional de Brasília | `sitio-a-aeroporto.jpg` |
| Sítio B — Plano Piloto (SCS) | `sitio-b-plano-piloto.jpg` |
| Sítio C — Águas Claras | `sitio-c-aguas-claras.jpg` |

As imagens aparecem automaticamente no painel interativo acima assim que esses arquivos forem adicionados ao repositório.

## Critérios resumidos de avaliação

| Critério | Sítio A (BSB) | Sítio B (Plano Piloto) | Sítio C (Águas Claras) |
|---|---|---|---|
| Demanda potencial | Alta (aeroporto/hub) | Alta (serviços/governo) | Alta (pendular) |
| Integração modal | Alta (terminal/rodoviário) | Média-Alta (ônibus/eixos centrais) | Alta (metrô + vias arteriais) |
| Restrição urbanística | Média | Alta (área tombada) | Média |
| Implantação fase 1 | Muito aderente | Aderente com condicionantes | Muito aderente |

## Critério de ruído e proteção de receptores sensíveis

Além de conectividade e demanda, a seleção considerou literatura técnica sobre impacto acústico de UAM, incluindo o artigo **Determination of the noise impact range of urban air mobility**. Como referência prática de triagem espacial, adotamos uma faixa de influência horizontal de **400 m a 600 m** para evitar implantação muito próxima de receptores sensíveis.

O mapa interativo acima exibe uma camada de análise com:

- **Pontos críticos** (escolas e hospitais) georreferenciados em Brasília;
- **Buffer de 400 m** (zona sensível — em roxo);
- **Buffer de 600 m** (limite de cautela — em laranja).

Essa análise visual permite identificar espacialmente quais vertiportos guardam distâncias adequadas de receptores sensíveis, alinhado com as recomendações do artigo.

## Próximos passos

1. Refinamento local: validação in-loco dos sítios e levantamento de detalhes arquitetônicos preliminares.
2. Análise multicritério com **AHP (Analytic Hierarchy Process)** para priorização final do sítio do vertiporto.
3. Definir pesos dos critérios (demanda, integração modal, restrição urbanística, ruído e viabilidade regulatória).
4. Matriz de comparação par-a-par e teste de consistência (CR) do AHP.
5. Seleção do sítio final e delimitação de área candidata para anteprojeto construtivo do vertiporto.

## Conclusão

A seleção dos três sítios prioriza equilíbrio entre **demanda real**, **integração com modais existentes** e **viabilidade de implantação em fases**. O modelo em triângulo (BSB - Plano Piloto - Águas Claras) sustenta uma rede inicial de alta visibilidade operacional e boa capacidade de expansão.

## Referências

1. Projeto Google Earth do grupo (sítios em Brasília).
2. ANAC - diretrizes e materiais sobre AAM/UAM e certificação: https://www.gov.br/anac
3. SEMOB-DF e IPEDF - dados de mobilidade e dinâmica urbana do DF.
4. Determination of the noise impact range of urban air mobility.
