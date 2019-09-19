![Elo7](./client/src/assets/images/logo-elo7.svg)

Projeto de Landing Page para anuncio das vagas em aberto da Elo7.

![aasda ](./doc/desktop-demo.gif)

## Iniciando o projeto
Este projeto foi configurado para rodar em 2 ambientes, **DEV** e **PROD**. E para que tudo isso seja possível, é preciso que o NODE e YARN ou NPM estejam instalados.

- [NodeJS](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/en/docs/install)

## COMO RODAR

### DEV
Para rodar no ambiente local, abra o terminal no local princial do projeto e rode o comando:
```cmd
yarn dev
``` 
Automaticamente o yarn instalará as **Dependências do Projeto**, inicializará o **Servidor Node** e **abrirá o navegador** já com o projeto rodando. Pode ser que a primeira carregada, o css não tenha sido carregado e nem as imagens, isso ocorre porque o yarn ainda estará compilando o projeto.

- URL da Landing Page: [http://localhost:4200](htpps://localhost:4200)
- URL da API: [http://localhost:5001/vagas](htpps://localhost:5001/vagas)

### PROD
Agora para gerar um build de produção é necessário rodar o comando:
```cmd
yarn prod
``` 
Difícil heim?!

Bom, esse comando instalará todas as dependências do projeto, exatamente como o comando de `dev` porém o servidor será o endereço da API de produção, e basicamente gerará os arquivos estáticos prontos para serem publicados em produção.

## Stack utilizada
|     		 |             |
|------------|-------------|
| Bootstrap  | 4.3.1       |
| Express    | 4.17.1      |
| NodeJS     | 12.8.0      |
| VueJS      | 2.6.10      |
| Yarn   	 | 1.17.3      |


## Checklist das etapas do Projeto

1. Criação do Repositório ✔️
2. Pareamento do Versionamento ✔️
3. Criação da Estrutura ✔️
4. [Tratamento das imagens](#tratamento-das-imagens) ✔️
5. Configuração do Gulp para Deploy do SASS, JS, IMAGENS e HTML ✔️
6. Criação da Estrutura HTML ✔️
7. Estilização Mobile ✔️
8. Estilização Desktop ✔️
9. [Implementação do JS para consulta no servidor via Ajax](#implementação-do-javascript) ✔️
10. Preencher os dados na página ✔️
11. [Criação do Servidor Node](#Uso-do-NodeJS) ✔️
12. Criação de teste Jasmine simples ❌


### **Tratamento das imagens**
Foi necessário tratar algumas imagens para deixa-las menores e assim ganhar performace no carregamento da página.

Algumas imagens, foram transformadas em SVG para ganhar maior qualidade e melhorar a velocidade ainda mais no carregamento da página.

![atividades](./doc/outline-icones.jpg)

### **Implementação do JavaScript**
Apesar da funcionalidade ser simples, acabei optando por utilizar o [VueJS](https://vuejs.org/) para demonstrar o quanto é importante conhecer algumas bibliotecas SPA leves e poder utiliza-las de forma bem simples para resolver problemas comuns do nosso dia-a-dia sem perder performace e qualidade. 

## Uso do NodeJS
O objetivo de ter criado um servidor node, foi para demonstrar, além do pouco de conhecimento sobre essa tecnologia, a organização e arquitetura criada nesse projeto, por mais simples que seja.

## Testes
Infelizmente os testes é algo que ainda estou aprimorando meus conhecimentos e por esse motivo não foi criado nesse projeto. :( 

## Obrigado e até a próxima ;)