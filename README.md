# LumaFlow — Seu ritmo, sua hidratação

## Integrante

- Leonardo Ferraz Scavazza

> Projeto individual desenvolvido para a Atividade 01 — Landing Page de Produto. LumaFlow é um produto fictício e não está à venda.

## Sobre o produto

A LumaFlow é o conceito de uma garrafa reutilizável de 600 ml com indicador visual pensado para incentivar pausas de hidratação ao longo do dia. A proposta é tornar o hábito mais leve e acessível, sem alarmes insistentes ou metas competitivas.

O público imaginado inclui estudantes, profissionais e pessoas com rotinas corridas que gostariam de se lembrar de beber água. A landing page apresenta a proposta, os benefícios, o funcionamento conceitual, avaliações ilustrativas, preço fictício, perguntas frequentes e um CTA simulado de lista de interesse.

## Jornada de construção

### Ideia inicial

A ideia escolhida foi criar um produto cotidiano, fácil de entender e visualmente interessante para uma landing page. Foram consideradas propostas de organização pessoal e acessórios de rotina. A garrafa de hidratação foi escolhida por permitir comunicar benefícios concretos e criar uma representação visual do produto sem depender de backend.

O nome **LumaFlow** combina a ideia de leveza com fluxo e continuidade. A mensagem central — “Seu ritmo. Sua hidratação.” — orienta o tom da página: acolhedor, simples e sem cobrança.

### Pesquisa e referências

A direção visual foi planejada a partir de convenções comuns em páginas de produtos de estilo de vida: hero com proposta clara, chamada para ação visível, benefícios em cards, explicação em etapas, avaliações, oferta e FAQ. A composição usa bastante espaço em branco, cantos arredondados, títulos grandes e ilustrações geométricas do produto.

A paleta verde-sálvia, verde-lima e off-white foi escolhida para comunicar frescor, natureza e tranquilidade. A garrafa é representada com CSS, gradientes e formas; assim, o projeto não depende de imagens externas para apresentar o produto.

**Referências de estrutura para consulta e comparação:**
- [Apple](https://www.apple.com/) — hierarquia visual e apresentação focada em produto.
- [Notion](https://www.notion.so/) — comunicação direta e seções organizadas.
- [Aesop](https://www.aesop.com/) — direção de arte minimalista para produtos de consumo.

Esses sites servem apenas como referências gerais de comunicação e organização; o projeto não reproduz uma página específica.

### Ferramentas utilizadas

- React para construir a interface em componentes.
- Vite para iniciar o projeto e executar o servidor de desenvolvimento.
- JavaScript e CSS Modules para interações e estilos isolados por componente.
- Lucide React para ícones.
- VS Code (ou editor equivalente) para edição.
- Git e GitHub para versionamento e publicação do repositório.
- Navegador para testar a responsividade e as interações.

### Uso de IA

Foi utilizado **OpenAI (GPT-5.4)** como apoio à organização do escopo, à escolha de uma ideia fictícia, à estruturação dos componentes React, à criação de estilos e à elaboração inicial deste README.

A IA foi usada como ferramenta de apoio, não como substituta da revisão. Antes da entrega, o estudante deve executar o projeto, conferir o resultado no próprio navegador, entender o código e ajustar o texto deste registro para refletir fielmente as decisões e testes realizados.

**Reflexão crítica sobre o uso de IA:** uma primeira versão gerada automaticamente pode apresentar excesso de elementos, textos genéricos ou decisões visuais pouco consistentes. Neste projeto, a estrutura foi organizada em seções com responsabilidades claras, o visual foi limitado a uma paleta curta e as ações foram mantidas simples para respeitar o escopo client-side. Os resultados devem ser validados localmente; não se deve declarar testes que não foram executados.

**Sugestões mantidas:** separação da página em seções, CTA de lista de interesse, FAQ interativo, layout responsivo e ilustração do produto feita com CSS.

**Decisões importantes:** não foi criado backend, não há integração com APIs e o formulário não envia nem armazena dados. As avaliações e o preço são explicitamente demonstrativos para evitar a impressão de que são dados comerciais reais.

> Atualize esta seção se você utilizar outras ferramentas, modificar significativamente o projeto ou realizar testes adicionais. O registro final deve descrever o seu processo real.

### Evolução da solução

A proposta foi organizada como uma jornada: apresentar a LumaFlow, explicar seus benefícios, mostrar como o conceito funciona, oferecer contexto social, apresentar a oferta e responder às dúvidas antes do CTA.

A página usa:
- **Hero:** proposta principal, CTA e representação visual da garrafa.
- **Benefícios:** quatro diferenciais em cards.
- **Como funciona:** três etapas curtas.
- **Avaliações:** depoimentos fictícios identificados como demonstrativos.
- **Oferta:** preço fictício e lista do que acompanha o conceito.
- **FAQ:** perguntas que abrem e fecham ao clicar.
- **CTA:** modal com formulário simulado e estado de confirmação.
- **Responsividade:** navegação móvel e grades que se reorganizam em telas menores.

A representação do produto foi feita em CSS para manter o protótipo leve e independente de imagens. O CTA abre um modal; ao enviar o formulário, a interface apresenta uma confirmação local. Como a aplicação é 100% client-side, os dados não são transmitidos nem persistidos.

### Arquitetura escolhida: FSD (Feature-Sliced Design)

A organização segue uma adaptação didática do FSD, separando aplicação, funcionalidades, widgets, componentes compartilhados e estilos globais:

```text
src/
├── app/                       # Composição da aplicação e CSS global
├── features/
│   └── join-waitlist/         # Ação de entrar na lista (modal/formulário)
├── shared/
│   └── ui/                    # Botão reutilizável
├── widgets/
│   ├── Header/
│   ├── Hero/
│   ├── Benefits/
│   ├── HowItWorks/
│   ├── Reviews/
│   ├── Offer/
│   ├── FAQ/
│   └── Footer/
└── main.jsx                   # Ponto de entrada React
```

Os widgets representam seções completas da landing page. A feature contém a interação de lista de interesse e `shared/ui` contém o botão reutilizável. Cada seção mantém seu próprio arquivo `.module.css`, evitando conflitos desnecessários de estilos.

### Resultado final

O resultado é uma landing page navegável, responsiva e coerente com o conceito de produto. O CTA abre um formulário demonstrativo, o FAQ é interativo e os links do menu levam às seções correspondentes. A solução atende ao escopo de protótipo client-side, sem servidor, banco de dados ou API.

Com mais tempo, seria interessante testar a página com colegas, coletar feedback sobre clareza e acessibilidade, melhorar detalhes de navegação por teclado e revisar contraste e desempenho em diferentes dispositivos.

## Como executar

É necessário ter Node.js e npm instalados.

```bash
npm install
npm run dev
```

Abra no navegador o endereço local exibido pelo Vite (normalmente `http://localhost:5173`).

Para verificar a compilação de produção:

```bash
npm run build
npm run preview
```

## Publicação no GitHub

1. Crie um repositório público no GitHub com o nome `lumaflow-landing-page`.
2. Extraia os arquivos deste projeto e abra a pasta no terminal.
3. Execute `git init`.
4. Execute `git add .`.
5. Execute `git commit -m "feat: cria landing page LumaFlow"`.
6. Crie o repositório remoto no GitHub e siga as instruções exibidas para conectar o repositório local.
7. Envie os commits com `git push`.
8. Confira em uma janela anônima se o repositório está público e envie o link no Moodle.

**Importante:** o repositório precisa ser criado e publicado na sua conta. O projeto entregue aqui não cria automaticamente um repositório público no GitHub.
