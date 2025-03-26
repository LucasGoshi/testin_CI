# 🚀 Projeto React – Proof HTML Demo

Este é um projeto React com integração contínua via GitHub Actions. O foco principal é validar o HTML gerado após o build e garantir a qualidade do código através de testes automatizados.

---

## ▶️ Como rodar o projeto localmente
```bash
1. **Clone o repositório**
git clone https://github.com/LucasGoshi/testin_CI.git
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
