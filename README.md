markdown
# 📦 EventifyCode

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-purple)
![Licença](https://img.shields.io/badge/licença-MIT-blue)
![Prisma](https://img.shields.io/badge/backend-Prisma%20ORM-green)
![Frontend](https://img.shields.io/badge/frontend-React.js-orange)

**Autor:** Diego S.  
**Repositório:** [github.com/seu-usuario/eventifycode](https://github.com/seu-usuario/eventifycode)

---

## 🧾 Descrição do Projeto

**EventifyCode** é uma aplicação web desenvolvida com o objetivo de facilitar o gerenciamento de eventos por meio da geração de códigos QR e controle de participantes. A plataforma oferece uma experiência digital moderna e eficiente, voltada para organizadores que desejam automatizar processos de inscrição, check-in e acompanhamento de presença.

**Público-alvo:**  
Organizadores de eventos acadêmicos, corporativos, sociais e comunitários.

**Objetivo:**  
Simplificar a criação, divulgação e gestão de eventos, promovendo agilidade, segurança e controle em tempo real.

---

## ⚙️ Funcionalidades Principais

- ✅ Cadastro e autenticação de usuários (via GitHub ou email/senha)
- ✅ Criação de eventos com data, hora, descrição e link personalizado
- ✅ Geração de QR Code para check-in de participantes
- ✅ Controle de presença com status de check-in e pendência
- ✅ Adição manual de participantes com código individual
- ✅ Visualização de eventos e estatísticas
- ✅ Interface responsiva e intuitiva

---

## 🛠️ Tecnologias Utilizadas

| Camada         | Tecnologias                          |
|----------------|--------------------------------------|
| **Frontend**   | React.js, Tailwind CSS               |
| **Backend**    | Node.js, Express.js, Prisma ORM      |
| **Banco de Dados** | PostgreSQL via Prisma             |
| **Autenticação** | OAuth (GitHub), JWT                |
| **Outros**     | QR Code Generator API, Vite          |

---

## 🗂️ Estrutura do Projeto

```bash
eventifycode/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── assets/
│   └── App.js
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── index.js
├── .env
├── package.json
└── README.md
📥 Instruções de Instalação e Execução
Pré-requisitos
Node.js ≥ 18

PostgreSQL instalado

Conta no GitHub para autenticação

Prisma CLI (npm install prisma -g)

Instalação
bash
# Clonar o repositório
git clone https://github.com/seu-usuario/eventifycode.git

# Acessar a pasta do projeto
cd eventifycode

# Instalar dependências
npm install

# Gerar e aplicar o banco de dados com Prisma
npx prisma generate
npx prisma migrate dev
Execução
bash
# Iniciar o servidor backend
npm run server

# Iniciar o frontend
npm start
🧑‍💻 Uso e Funcionamento
Após o login, o usuário pode:

Criar um novo evento preenchendo os campos obrigatórios.

Gerar um link ou QR Code para o evento.

Adicionar participantes manualmente ou permitir autoinscrição.

Monitorar check-ins em tempo real.

Visualizar detalhes e estatísticas de cada evento.

🖼️ Imagens Ilustrativas
🔐 Tela de Cadastro

🗓️ Tela Principal de Eventos

📝 Modal de Criação de Evento

👥 Gerenciamento de Participantes

🔢 Código Manual e Status de Participantes

🔑 Tela de Login com GitHub

🤝 Contribuição
Contribuições são encorajadas! Para colaborar:

bash
# Fork o repositório
# Crie uma branch: git checkout -b feature/nova-feature
# Commit suas alterações: git commit -m 'Adiciona nova funcionalidade'
# Push para a branch: git push origin feature/nova-feature
# Abra um Pull Request
📄 Licença
Este projeto está licenciado sob os termos da MIT License. Consulte o arquivo LICENSE para mais informações.
