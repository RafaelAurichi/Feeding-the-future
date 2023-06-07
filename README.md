# Colheita Certa

Nós somos uma plataforma que conecta pequenos produtores agrícolas com consumidores finais e/ou revendedores, com o objetivo de fomentar o comércio de pequenos negócios.

A plataforma conta com uma IA para auxiliar os produtores na administração das colheitas com base no clima e com informações do solo trazidas por sensores IoT. E, na parte do usuário final nossa IA capta o perfil e lhe dá sugestões personalizadas.

Teremos um sistema simples de gameficação onde o agricultor ganhará colecionáveis e por consequência será melhor rankeado conforme seguir as oritentações da aplicação. 
 
# Estrutura de pastas
## /app-react-native
Contém os arquivos necessários para rodar o projeto em react native da aplicação mobile
 
### Iniciar aplicação
 - Abra a pasta em um Ambiente de Desenvolvimento (ex: Visual Studio Code)
 - Certifique-se de que tenha o [Node.js](https://www.alura.com.br/artigos/como-instalar-node-js-windows-linux-macos?gclid=CjwKCAjw1YCkBhAOEiwA5aN4ASAemF6qwJklrTyYnpgA0IoEU_05CItBNrJP2DFtOd5e-DQkbcME3RoC3DEQAvD_BwE) e o [Expo](https://docs.expo.dev/get-started/installation/) instalados
 - Abra o terminal e siga os passos a seguir:
 ````
 cd (caminho até a pasta do projeto)
 ````
 ````
 npm install
 ````
 ````
 expo start
 ````
  
  
## /pag-institucional
Contém os arquivos necessários para abrir o projeto em HTML e Bootstrap da página institucional
 
### Iniciar aplicação
- Abra o arquivo `index.html` no seu navegador
 
 
## /backend
Contém os conteiners Docker com o backend do projeto em PHP e MySQL, alimentando uma API REST.
 
### Iniciar aplicação
- Abra a pasta em um Ambiente de Desenvolvimento (ex: Visual Studio Code)
 
- ### Iniciando pelo servidor Apache:
  - Certifique-se de que tenha o [Xampp](https://www.apachefriends.org/pt_br/download.html) instalado.
  - Abra o Xampp Control Painel e inicie o serviço Apache e MySQL
  - Transfira a pasta `/backend` para a pasta `C:\xampp\htdocs\`
 
  - #### Criando o banco
    - Acesse esse [link](http://localhost/phpmyadmin/) em seu navegador
    - Acesse a opção "Importar" no menu e suba o arquivo `db.sql` que está na pasta `/src`
   
  - #### Acessando o sistema
    - Acesse esse [link](http://localhost/backend/src/) em seu navegador 
    - Se cadastre e após isso efetue o login ou efetue o login com as credenciais: email: `admin@fiap` e senha: `admin` 
 
- ### Iniciando pelo Docker:
[Link](https://hub.docker.com/r/rafaelaurichi/php-apache) para o repositório da imagem no `Docker Hub` 
 
  - Certifique-se de que tenha o [Docker](https://www.docker.com/products/docker-desktop/) instalado.
  - Abra o Docker Desktop e inicie o serviço
  - Abra o terminal e siga os passos a seguir:
   
  ````
  cd (caminho até a pasta do projeto)
  ````
  ````
  docker-compose up
  ````
 
  - #### Criando o banco
    - Acesse esse [link](http://localhost:8080) em seu navegador
    - Efetue o login no PHPMyAdmin
    - Acesse a opção "Importar" no menu e suba o arquivo `db.sql` que está na pasta `/src`
 
  - #### Acessando o sistema
    - Acesse esse [link](http://localhost) em seu navegador
    - Se cadastre e após isso efetue o login ou efetue o login com as credenciais: email: `admin@fiap` e senha: `admin` 
 
### API de autenticação
Para receber um retorno de autenticação de algum usuário é necessário que esteja com o projeto da pasta `/backend` rodando e realizar uma requisição do método `POST` para essa [URL](http://localhost/backend/src/api/usuario-existente.php) (caso esteja usando Xampp) ou para esta [URL](http://localhost/api/usuario-existente.php) (caso esteja usando Docker) e passar as seguintes informações:
 
````json
{
    "email": "(email do usuário)",
    "senha": "(senha do usuário)"
}
````
 
O retorno deve ser:
 
````json
{
    "id": " ",
    "nome": " ",
    "email": " ",
    "senha": " ",
    "telefone": " ",
    "sexo": " ",
    "data_nasc": " ",
    "cidade": " ",
    "estado": " ",
    "endereco": " "
}
````
 
# Integrantes
 
 - Rafael Dias Aurichi 96169
 - Bruno Roberto 95757
