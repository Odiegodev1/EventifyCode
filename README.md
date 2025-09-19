# 📦 EventifyCode

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-purple)
![Licença](https://img.shields.io/badge/licença-MIT-blue)
![Prisma](https://img.shields.io/badge/backend-Prisma%20ORM-green)
![Frontend](https://img.shields.io/badge/frontend-React.js-orange)

**Autor:** Diego Santos  
**Repositório:** [github.com/Odiegodev1/EventifyCode](https://github.com/Odiegodev1/EventifyCode)

---

## 🧾 Descrição do Projeto

**EventifyCode** é uma aplicação web desenvolvida para facilitar o gerenciamento de eventos por meio da geração de códigos de 6 dígitos para participantes e controle de presença. A plataforma proporciona uma experiência digital moderna e eficiente, voltada para organizadores que desejam automatizar processos de inscrição, check-in e acompanhamento de presença.  

**Público-alvo:** Organizadores de eventos acadêmicos, corporativos, sociais e comunitários.  

**Objetivo:** Simplificar a criação, divulgação e gestão de eventos, promovendo agilidade, segurança e controle em tempo real.  

---

## ⚙️ Funcionalidades Principais

- ✅ Cadastro e autenticação de usuários (via GitHub ou email/senha)  
- ✅ Criação de eventos com data, hora, descrição e link personalizado  
- ✅ Geração de códigos de 6 dígitos para cada participante  
- ✅ Controle de presença com status de check-in e pendência  
- ✅ Adição manual de participantes com código individual  
- ✅ Visualização de eventos e estatísticas em tempo real  
- ✅ Interface responsiva e intuitiva  

---

## 🛠️ Tecnologias Utilizadas

| Camada         | Tecnologias                          |
|----------------|--------------------------------------|
| **Frontend**   | React.js, Tailwind CSS               |
| **Backend**    | Node.js, Express.js, Prisma ORM      |
| **Banco de Dados** | PostgreSQL via Prisma             |
| **Autenticação** | OAuth (GitHub), JWT                |
| **Outros**     | Vite, ESLint                          |

---

## 🗂️ Estrutura do Projeto


eventifycode/
├── public/                   # Arquivos estáticos (imagens, fontes, etc.)
├── src/                      # Código-fonte da aplicação
│   ├── components/           # Componentes React
│   ├── pages/                # Páginas da aplicação
│   ├── services/             # Serviços e APIs
│   ├── assets/               # Recursos (imagens, ícones, etc.)
│   └── App.js                # Arquivo principal do frontend
├── prisma/                   # Configuração e migrations do Prisma
│   ├── schema.prisma
│   └── migrations/
├── server/                   # Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── index.js
├── .env                      # Variáveis de ambiente
├── package.json               # Dependências e scripts
└── README.md                  # Documentação do projeto
📥 Instruções de Instalação e Execução
Pré-requisitos
Node.js ≥ 18

PostgreSQL instalado

Conta no GitHub para autenticação

Prisma CLI (npm install prisma -g)

Instalação
bash
Copiar código
# Clonar o repositório
git clone https://github.com/Odiegodev1/EventifyCode.git

# Acessar a pasta do projeto
cd EventifyCode

# Instalar dependências
npm install

# Gerar e aplicar o banco de dados com Prisma
npx prisma generate
npx prisma migrate dev
Execução
bash
Copiar código
# Iniciar o servidor backend
npm run server

# Iniciar o frontend
npm start
🧑‍💻 Uso e Funcionamento
Após o login, o usuário pode:

Criar um novo evento preenchendo os campos obrigatórios.

Gerar códigos de 6 dígitos para cada participante.

Adicionar participantes manualmente ou permitir autoinscrição.

Monitorar check-ins em tempo real.

Visualizar detalhes e estatísticas de cada evento.

🖼️ Imagens Ilustrativas
Adicione suas imagens aqui com Markdown, por exemplo:


![Tela de Cadastro](./images/cadastro.png)
![Tela Principal de Eventos](./images/eventos.png)
![Modal de Criação de Evento](./images/modal_evento.png)
![Gerenciamento de Participantes](./images/participantes.png)
![Código Manual e Status](./images/codigo_manual.png)
![Tela de Login](./images/login.png)
🤝 Contribuição
Contribuições são bem-vindas! Para colaborar:

bash
Copiar código
# Fork o repositório
# Crie uma branch: git checkout -b feature/nova-feature
# Commit suas alterações: git commit -m 'Adiciona nova funcionalidade'
# Push para a branch: git push origin feature/nova-feature
# Abra um Pull Request
📄 Licença
Este projeto está licenciado sob os termos da MIT License. Consulte o arquivo LICENSE para mais informações.
