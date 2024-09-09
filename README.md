# 🌅 Sunset Hunter

**Sunset Hunter** é um aplicativo web simples que utiliza a API do OpenWeather para exibir o horário do pôr do sol na cidade de São Paulo, SP. O projeto foi desenvolvido utilizando EJS para renderizar templates no servidor, juntamente com CSS e JavaScript no front-end para melhorar a interface do usuário.

## ✨ Funcionalidades

- 🌇 **Consulta automática** do horário do pôr do sol em São Paulo (SP) por meio da API OpenWeather.
- 🔄 **Atualização em tempo real** da página com os dados mais recentes.
- 💻 **Interface minimalista e responsiva**.

## 🛠️ Tecnologias Utilizadas

- ⚙️ **EJS**: Template engine utilizada para gerar o HTML dinâmico no lado do servidor.
- 🎨 **CSS**: Para estilização e layout da página.
- 📝 **JavaScript**: Para manipulação do DOM e chamadas assíncronas à API.
- 🚀 **Node.js**: Servidor backend utilizando o framework Express.
- ☁️ **OpenWeather API**: API utilizada para obter as informações meteorológicas, especificamente o horário do pôr do sol.

## 📦 Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/sunset-hunter.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd sunset-hunter
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Crie um arquivo `.env` na raiz do projeto e adicione sua chave da API do OpenWeather:
    ```
    OPENWEATHER_API_KEY=your_api_key_here
    ```

5. Inicie o servidor:
    ```bash
    npm start
    ```

6. Acesse o aplicativo em seu navegador:
    ```
    http://localhost:3000
    ```

## ⚙️ Como Funciona

O Sunset Hunter faz uma requisição à API do OpenWeather para obter as informações meteorológicas de São Paulo. A partir dos dados retornados, ele extrai o horário do pôr do sol e o exibe na interface.

### 📂 Estrutura do Projeto

```bash
sunset-hunter/
├── public/
│   ├── css/
│   │   └── main.css
│   └── js/
│       └── app.js
├── views/
│   ├── partials/
│   ├── index.ejs
├── routes/
│   └── index.js
├── app.js
├── package.json
├── .env
└── README.md
