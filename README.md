# 🚀 Projeto React – Proof HTML Demo

Este é um projeto React com integração contínua via GitHub Actions. O foco principal é validar o HTML gerado após o build e garantir a qualidade do código através de testes automatizados.

---

## 📦 Tecnologias

- [React](https://reactjs.org/)
- [html-validate](https://html-validate.org/) – Validador de HTML
- [Jest](https://jestjs.io/) – Testes automatizados
- [GitHub Actions](https://docs.github.com/en/actions) – Integração contínua

---

## ▶️ Como rodar o projeto localmente

1. **Clone o repositório**
git clone https://github.com/Goshi/proof-html-demo.git
cd proof-html-demo

2. **Instale as dependências**
npm install
npm start

3. **Rodar teste**
npm test

4. **Após gerar o build:**
npm run build

5. **Para validar arquivos públicos diretamente:**
npx html-validate "public/**/*.html"
