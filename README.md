# Projeto myreads Udacity Nanodegree React

O App mais reads é o primeiro projeto do Nanodegree React da Udacity

O Myreads consiste uma aplicação que te permite organizar suas leituras com uma interface simples e intuitiva. É possivel organizar os livros entre prateleiras, bem como buscar e adicionar livros nas estantes disponiveis

* Instalação das dependências
Antes de inicializa a aplicação é necessário instalar as dependencias do projeto. Essa instalação pode ser feita de forma simples por meio da execução do seguinte código em sua linha de comando

npm install

* Inicialização da aplicação

Para iniciar a aplicação utilize

npm start or yarn start

## Pagina Inicial

A Pagina inicial mostra três prateleiras para os livros.

É possivel mover os livros entres as prateleiras na pagina principal, em cada um dos livros.

## Pesquisa 

A pagina search tem um campo que permite a busca de livros para serem adicionados as prateleiras “currently reading”, “want to read”, ou “read”. Quando um item é adicionado a uma das prateleiras na pagina search, e o usuário retorna a pagina principal, o livro será mostrado nessa prateleira na pagina inicial.

## Rotas

A página inicial contém um link para a pagina de pesquisa, quando o link é clicado o display do browser será atualizado para a página de pesquisas. A página de pesquisa contém também um link para retorno a página inicial.
