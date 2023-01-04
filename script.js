//para criar o repositório git na pasta -> git init 
//para que o arquivo comece a ser observado pelo git -> git add
//git status -> mostra arquivos que tem git add -> necessário pra comitar
//mostra a branch que estamos

//git commit -m 'o que fiz de mudança' -> faz o commit, ou seja, cria um pacotinho com as mudanças

//git add -A => dá git add em todos os arquivos da pasta

//git remote add origin linkrepositorio(no github) -> conecta o repositorio remoto ao github

// depois dar git push -u origin  master 


console.log('modificação no script');


//essas barrinhas verdes que aparecem do lado do código no vs code significam que a linha foi adicionada

//também posso ver essa mudança clicando ali do lado na parte que tem o icone da branch

//clico no arquivo lá no github, em history -> temos uma listagem dos commits realizados

//branch são ramificações do ramo master que posso alterar sem alterar o master

//git branch nos diz quais branchs temos
//git branch nomeBranch => cria branch

//git checkout nomeBrancQueQUeroIr

//para clonar um repositorio git clone url que tá no github

//git pull vai puxar mudanças que aconteceram no repositorio git p/ nossso repositorio local

//para fazer merge => git merge nome da branch que quero juntar a branch atual

<<<<<<< HEAD
console.log('oi');
=======
console.log('tchau');
>>>>>>> feature0
