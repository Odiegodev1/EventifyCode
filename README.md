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
