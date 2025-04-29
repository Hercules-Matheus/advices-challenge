# Frontend Mentor - Advice Generator App Solution

Esta é a solução para o desafio [Advice Generator App](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db) no Frontend Mentor. Os desafios do Frontend Mentor ajudam a melhorar suas habilidades de codificação ao construir projetos realistas.

## Índice

- [Frontend Mentor - Advice Generator App Solution](#frontend-mentor---advice-generator-app-solution)
  - [Índice](#índice)
  - [Visão Geral](#visão-geral)
    - [O Desafio](#o-desafio)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [Meu Processo](#meu-processo)
    - [Construído com](#construído-com)
    - [O que aprendi](#o-que-aprendi)
    - [Desenvolvimento contínuo](#desenvolvimento-contínuo)
    - [Recursos úteis](#recursos-úteis)
  - [Autor](#autor)
  - [Agradecimentos](#agradecimentos)

## Visão Geral

### O Desafio

Os usuários devem ser capazes de:

- Visualizar o layout ideal para o aplicativo dependendo do tamanho da tela do dispositivo.
- Ver os estados de hover para todos os elementos interativos na página.
- Gerar um novo conselho ao clicar no ícone de dado.

### Screenshot

(./screenshot.png)

### Links

- URL da Solução: (https://github.com/Hercules-Matheus/advices-challenge)
- URL do Site ao Vivo: (https://your-live-site-url.com)

## Meu Processo

### Construído com

- Marcação HTML5 semântica
- Propriedades personalizadas de CSS
- Flexbox
- Fluxo de trabalho mobile-first
- JavaScript para interatividade

### O que aprendi

Durante este projeto, aprendi a trabalhar com a API `fetch` para consumir dados de uma API externa e atualizar dinamicamente o conteúdo da página. Além disso, refinei minhas habilidades em manipulação de eventos para criar uma experiência de usuário responsiva e interativa.

Aqui está um exemplo de código que me deixou orgulhoso:

```javascript
async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  adviceTitle.innerHTML = `ADVICE #${data.slip.id}`;
  adviceText.innerHTML = `"${data.slip.advice}"`;
}
```

### Desenvolvimento contínuo

Quero continuar aprimorando minhas habilidades em:

- Acessibilidade (ARIA e navegação por teclado).
- Animações CSS para melhorar a experiência do usuário.
- Melhorar a compatibilidade entre navegadores, especialmente no Safari.

### Recursos úteis

- [MDN Web Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - Este artigo me ajudou a entender como consumir APIs de forma assíncrona.
- [CSS Tricks - Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Um guia completo para trabalhar com Flexbox.

## Autor

- Github - [Hercules-Matheus](https://github.com/Hercules-Matheus)
- Frontend Mentor - [@Hercules-Matheus](https://www.frontendmentor.io/profile/Hercules-Matheus)
- LinkedIn - [Hercules Matheus](https://www.linkedin.com/in/hercules-matheus/)

## Agradecimentos

Gostaria de agradecer ao Frontend Mentor por fornecer desafios tão interessantes e à comunidade de desenvolvedores por compartilhar dicas e soluções que me ajudaram a concluir este projeto.
