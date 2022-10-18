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

        let tipo = prompt("Digite o tipo de pulverização ");
        let area = prompt("Digite o tamanho da area a ser puverizada");

        let erva = 50;
        let gafanhoto = 100;
        let broca = 50;
        let todos = 50;

        let precoFinal ;
        let custo;
        let desconto1;
        let desconto2;
        let desconto3;


        if (tipo == 1) {
            custo = erva * area };
            if (area > 1000)
                alert(`seu custo foi de: ${custo}`);
                desconto1 = custo * 0.05
                alert(`Após desconto de 5%, seu desconto foi de: ${desconto1}`)
                precoFinal = custo - desconto1;
                alert(`Após desconto de 5%, seu preço foi de: ${precoFinal}`) 
            else if (custo > 750)  
                desconto2 = custo * 0.10;
                precoFinal = custo - desconto2;
                alert(`Após desconto de 10%, seu preço foi de: ${precoFinal}`)
            else if ((custo > 750) && (area > 1000))
                desconto3 =((custo * 0.05) + (custo * 0.10));
                precoFinal = custo - desconto3
                alert(`Após desconto de 5% de área mais o 10% de deconto sobre o custo, o valor total foi de: ${precoFinal}`);

       else if (tipo == 2)
            custo = gafanhoto * area;
            if (area > 1000)
                desconto1 = custo * 0.05
                precoFinal = custo - desconto1;
                alert(`Após desconto de 5%, seu preço foi de: ${precoFinal}`)
            else if (custo > 750)
                desconto2 = custo * 0.10;
                precoFinal = custo - desconto2;
                alert(`Após desconto de 10%, seu preço foi de: ${precoFinal}`)
            else if ((custo > 750) && (area > 1000))
                desconto3 =((custo * 0.05) + (custo * 0.10));
                precoFinal = custo - desconto3
                alert(`Após desconto de 5% de área mais o 10% de deconto sobre o custo, o valor total foi de: ${precoFinal}`);
            
        else if (tipo == 3)
            custo = broca * area;
            if (area > 1000)
                desconto1 = custo * 0.05
                precoFinal = custo - desconto1;
                alert(`Após desconto de 5%, seu preço foi de: ${precoFinal}`)
            else if (custo > 750)
                desconto2 = custo * 0.10;
                precoFinal = custo - desconto2;
                alert(`Após desconto de 10%, seu preço foi de: ${precoFinal}`)
            else if ((custo > 750) && (area > 1000))
                desconto3 =((custo * 0.05) + (custo * 0.10));
                precoFinal = custo - desconto3
                alert(`Após desconto de 5% de área mais o 10% de deconto sobre o custo, o valor total foi de: ${precoFinal}`);
            
       else  if (tipo == 4)
            custo = todos * area;
            if (area > 1000)
                desconto1 = custo * 0.05
                precoFinal = custo - desconto1;
                alert(`Após desconto de 5%, seu preço foi de: ${precoFinal}`)
            else if (custo > 750)
                desconto2 = custo * 0.10;
                precoFinal = custo - desconto2;
                alert(`Após desconto de 10%, seu preço foi de: ${precoFinal}`)
            else if ((custo > 750) && (area > 1000))
                desconto3 =((custo * 0.05) + (custo * 0.10));
                precoFinal = custo - desconto3
                alert(`Após desconto de 5% de área mais o 10% de deconto sobre o custo, o valor total foi de: ${precoFinal}`);

<!-- questão 9 -->  

        let tempoGasto = prompt("Digite aqui o tempo gasto na viagem");
        let velocidadeMedia = prompt("Digite aqui a velocidade media");
        let distancia =  (tempoGasto * velocidadeMedia);
        let litroUsados = distancia / 12;
       
        alert(`Seu veiculo percorreu 
            ${distancia}km a 
            ${velocidadeMedia} km/h em 
            ${tempoGasto}h de viagem e consumiu 
            ${litroUsados.toFixed(2)}l de gasolina`)

<!-- questão 10 -->  

        let valor = prompt("Digite um valor da prestação");
        let taxa = prompt("Digite o valor da taxa");
        let tempo = prompt("digite o tempo de atraso da prestação");

        let prestacao = valor + (valor *(taxa/100) * tempo);

            

            if ((tempo == 0) || (tempo != Number.parseInt(tempo)))
            alert(`Valor inválido o tempo de atraso deve ser em dias`)
            else 
            alert(`R$ ${prestacao}`)

        