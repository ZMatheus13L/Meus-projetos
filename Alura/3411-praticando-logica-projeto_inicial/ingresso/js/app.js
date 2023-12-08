function comprar() {
// Coletando dados / informações    
    let quantia = parseInt(document.getElementById('qtd').value);
    let ingresso = document.getElementById('tipo-ingresso').value;
    
    // Fazendo calculos
    if(ingresso == 'pista') {
        let pista = parseInt(document.getElementById('qtd-pista').textContent);
        if (quantia > document.getElementById('qtd-pista').textContent) {
            alert('Ingressos demais, 100 é o máximo!');
        } else {
            pista -= quantia;
            document.getElementById('qtd-pista').textContent = pista;
            alert('Compra realizada baby!');
        }
    } else if(ingresso == 'inferior') {
        let inferior = parseInt(document.getElementById('qtd-inferior').textContent);
        if (quantia > document.getElementById('qtd-inferior').textContent) {
            alert('Muitos ingressos, o máximo é 400!');
        } else {
            inferior -= quantia;
            document.getElementById('qtd-inferior').textContent = inferior;
            alert('Você comprou ' + quantia + ' ingressos!');
        }
    } else {
        let superior = parseInt(document.getElementById('qtd-superior').textContent);
        if (quantia > document.getElementById('qtd-superior').textContent) {
            alert('Pra que tanto? O máximo é 200!');
        } else {
            superior -= quantia;
            document.getElementById('qtd-superior').textContent = superior;
            alert('Ingressos comprados com sucesso!');
        }
}
}