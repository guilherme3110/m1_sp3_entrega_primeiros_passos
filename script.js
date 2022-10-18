 <!-- questão 1 -->

        let num1 = parseInt(prompt("Digite um numero "));
        let num2 = parseInt(prompt("Digite um segundo número"));

    
        let resultado = parseInt(num1,  num2);
        let subtracao = (num1 - num2);

        if ( num1 > num2)
            alert(`O maior número é: ${num1} e a diferença entre é ${subtracao}`)
        else if (num2 > num1)
            alert(`O maior número é: ${num2} e a diferença entre  é: ${subtracao}`)
    

<!-- questão 2 -->
    
        let num1 = parseInt(prompt("Digite um numero "));
        let num2 = parseInt(prompt("Digite um segundo número"));


       
        if ( num1 > num2)
            alert(`O numero ${num1} é maior que o ${num2} `)
        else if (num2 > num1)
            alert(`O numero ${num2} é maior que o ${num1} `)
        else if (num1 == num2)
            alert(`Números iguais`)

<!-- questão 3 -->  

        let salario = prompt("Digite o valor do salario");
        let prestacao = prompt("Digite o valor da prestação");

        let calSalario = salario * (30 / 100);
        
        if ( prestacao > calSalario)
            alert(`Emprestimo não concedido`)
        else if (calSalario > prestacao)
            alert(`Emprestimo concedido`)


<!-- questão 4 -->   

        let num1 = prompt("digite um numero");

        if ((num1 % 3 == 0) && (num1 % 5 == 0))
            alert(`Valor invalido`)
        else if (num1 % 3 == 0)
            alert(`Valor Divisivel por 3`)
        else if (num1 % 5 == 0 ) 
            alert(`Valor divisivel por 5`)   
        else if (num1 % 2 == 0)  
            alert(`È par`) 
        else 
            alert(`ímpar`)       
            
<!-- questão 5 -->         

        let num1 = prompt("digite um numero de 1 a 7");

        if (num1 == 1)
            alert(`Domingo `)
        else if (num1 == 2)
            alert(`Segunda feira`)
        else if (num1 == 3) 
            alert(`terça-feira`)   
        else if (num1 == 4) 
            alert(`Quarta-feira`) 
        else if (num1 == 5)
            alert(`Quinta-feira`)  
        else if (num1 == 6)
            alert (`Sexta-feira`)         
         else if (num1 == 7)
            alert (`Sabado`) 
        else 
            alert(`não há o dia da semana correspondente`)     
            
            
<!-- questão 6 -->           

        let salario = parseFloat(prompt("Digite o salario"));
        let percetual = parseFloat(prompt("Valor percentual de ajuste"));

        let ajusteSalario = parseFloat(salario * (percetual /100));
        let salarioNovo = parseFloat (ajusteSalario + salario);

        if (percetual <= 5)
            alert(`O salario do funcionario corrigido é de: ${salarioNovo} `)

<!-- questão 7 -->  

        let dolar = prompt("Digite valor em dolar");
        let cotacao = parseFloat(prompt("Digite a cotação atual"));

        let conversao = cotacao * dolar ;
        
            alert(`$${dolar} é equivalente a R$${conversao} tendo ${cotacao} como cotação.`)

<!-- questão 8 -->  







<!-- questão 9 -->  








<!-- questão 10 -->  

        let valor = 
