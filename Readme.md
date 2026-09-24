![poster](./.github/poster.png)

# 🎭 Playwright Actions

Automação de testes **End-to-End (E2E)** utilizando **Playwright + TypeScript**, com execução dos testes integrada ao **GitHub Actions**.

Este projeto foi desenvolvido durante meus estudos de automação de testes com Playwright, com o objetivo de praticar a criação, execução e integração de testes automatizados em um fluxo de **Continuous Testing**.

## 🚀 Tecnologias

* [Playwright](https://playwright.dev/)
* TypeScript
* Node.js
* GitHub Actions
* Tesults

## 🎯 Objetivo do projeto

Praticar automação de testes E2E utilizando Playwright e compreender como integrar os testes automatizados a uma pipeline de CI.

O projeto contempla:

* Criação de testes automatizados E2E
* Execução dos testes em modo Headless
* Configuração do Playwright
* Organização dos testes
* Geração de relatório HTML
* Integração com GitHub Actions
* Execução automatizada dos testes através da pipeline

## 📁 Estrutura do projeto

```text
playwright-actions/
│
├── .github/
│   └── workflows/
│       └── ...
│
├── e2e/
│   └── ...
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└── Readme.md
```

## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/jongadev/playwright-actions.git
```

Acesse o diretório:

```bash
cd playwright-actions
```

Instale as dependências:

```bash
npm install
```

Instale os navegadores do Playwright:

```bash
npx playwright install
```

## ▶️ Executando os testes

Para executar os testes em modo Headless:

```bash
npx playwright test
```

Para executar os testes com a interface visual:

```bash
npx playwright test --headed
```

## 📊 Relatório de testes

Após a execução dos testes, o relatório HTML pode ser aberto com:

```bash
npx playwright show-report
```

O relatório permite visualizar informações sobre a execução dos testes e possíveis falhas.

## 🔄 GitHub Actions

O projeto utiliza **GitHub Actions** para executar os testes automatizados em um ambiente de CI.

O fluxo permite que os testes sejam executados automaticamente através da pipeline, proporcionando uma validação contínua da aplicação.

### Pipeline

```text
GitHub
   ↓
GitHub Actions
   ↓
Instalação das dependências
   ↓
Instalação dos browsers
   ↓
Execução dos testes Playwright
   ↓
Resultado dos testes
   ↓
Relatório
```

## 📌 Aprendizados

Este projeto faz parte da minha evolução em **Quality Assurance e Test Automation**, colocando em prática conceitos de:

* Automação E2E
* Playwright
* TypeScript
* Testes automatizados
* CI/CD
* GitHub Actions
* Relatórios de execução

O objetivo é continuar evoluindo a automação através de projetos práticos e aplicação dos conhecimentos no ambiente profissional.

## 👨‍💻 Autor

**João Gabriel**

QA Engineer | Quality Assurance | Test Automation

[GitHub](https://github.com/jongadev)


<hr>
Curso disponível em https://qaxperience.com

