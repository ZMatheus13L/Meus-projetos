//Receita
let salario = document.querySelectorAll('input#salario1, input#salario2, input#salario3, input#salario4, input#salario5, input#salario6, input#salario7, input#salario8, input#salario9, input#salario10, input#salario11, input#salario12');
let salarioConjuge = document.querySelectorAll('input#conjuge1, input#conjuge2, input#conjuge3, input#conjuge4, input#conjuge5, input#conjuge6, input#conjuge7, input#conjuge8, input#conjuge9, input#conjuge10, input#conjuge11, input#conjuge12');
let transferencias = document.querySelectorAll('input#transferencias1, input#transferencias2, input#transferencias3, input#transferencias4, input#transferencias5, input#transferencias6, input#transferencias7, input#transferencias8, input#transferencias9, input#transferencias10, input#transferencias11, input#transferencias12');
let outros = document.querySelectorAll('input#outros1, input#outros2, input#outros3, input#outros4, input#outros5, input#outros6, input#outros7, input#outros8, input#outros9, input#outros10, input#outros11, input#outros12');
let total = document.querySelectorAll('h3#total1, h3#total2, h3#total3, h3#total4, h3#total5, h3#total6, h3#total7, h3#total8, h3#total9, h3#total10, h3#total11, h3#total12');

//Despesas Essenciais(D1)
let condominio = document.querySelectorAll('input#condominio1, input#condominio2, input#condominio3, input#condominio4, input#condominio5, input#condominio6, input#condominio7, input#condominio8, input#condominio9, input#condominio10, input#condominio11, input#condominio12');
let aluguel = document.querySelectorAll('input#aluguel1, input#aluguel2, input#aluguel3, input#aluguel4, input#aluguel5, input#aluguel6, input#aluguel7, input#aluguel8, input#aluguel9, input#aluguel10, input#aluguel11, input#aluguel12');
let transporte = document.querySelectorAll('input#transporte1, input#transporte2, input#transporte3, input#transporte4, input#transporte5, input#transporte6, input#transporte7, input#transporte8, input#transporte9, input#transporte10, input#transporte11, input#transporte12');
let alimentacao = document.querySelectorAll('input#alimentacao1, input#alimentacao2, input#alimentacao3, input#alimentacao4, input#alimentacao5, input#alimentacao6, input#alimentacao7, input#alimentacao8, input#alimentacao9, input#alimentacao10, input#alimentacao11, input#alimentacao12');
let luz = document.querySelectorAll('input#luz1, input#luz2, input#luz3, input#luz4, input#luz5, input#luz6, input#luz7, input#luz8, input#luz9, input#luz10, input#luz11, input#luz12');
let agua = document.querySelectorAll('input#agua1, input#agua2, input#agua3, input#agua4, input#agua5, input#agua6, input#agua7, input#agua8, input#agua9, input#agua10, input#agua11, input#agua12');
let internet = document.querySelectorAll('input#internet1, input#internet2, input#internet3, input#internet4, input#internet5, input#internet6, input#internet7, input#internet8, input#internet9, input#internet10, input#internet11, input#internet12');
let Transferencias = document.querySelectorAll('input#Transferencias1, input#Transferencias2, input#Transferencias3, input#Transferencias4, input#Transferencias5, input#Transferencias6, input#Transferencias7, input#Transferencias8, input#Transferencias9, input#Transferencias10, input#Transferencias11, input#Transferencias12');
let amalfi = document.querySelectorAll('input#amalfi1, input#amalfi2, input#amalfi3, input#amalfi4, input#amalfi5, input#amalfi6, input#amalfi7, input#amalfi8, input#amalfi9, input#amalfi10, input#amalfi11, input#amalfi12');
let cartao = document.querySelectorAll('input#cartao1, input#cartao2, input#cartao3, input#cartao4, input#cartao5, input#cartao6, input#cartao7, input#cartao8, input#cartao9, input#cartao10, input#cartao11, input#cartao12');
let diarista = document.querySelectorAll('input#diarista1, input#diarista2, input#diarista3, input#diarista4, input#diarista5, input#diarista6, input#diarista7, input#diarista8, input#diarista9, input#diarista10, input#diarista11, input#diarista12');
let manutencao = document.querySelectorAll('input#manutencao1, input#manutencao2, input#manutencao3, input#manutencao4, input#manutencao5, input#manutencao6, input#manutencao7, input#manutencao8, input#manutencao9, input#manutencao10, input#manutencao11, input#manutencao12');
let emprestimo = document.querySelectorAll('input#emprestimo1, input#emprestimo2, input#emprestimo3, input#emprestimo4, input#emprestimo5, input#emprestimo6, input#emprestimo7, input#emprestimo8, input#emprestimo9, input#emprestimo10, input#emprestimo11, input#emprestimo12');
let saques = document.querySelectorAll('input#saques1, input#saques2, input#saques3, input#saques4, input#saques5, input#saques6, input#saques7, input#saques8, input#saques9, input#saques10, input#saques11, input#saques12');
let Outros = document.querySelectorAll('input#Outros1, input#Outros2, input#Outros3, input#Outros4, input#Outros5, input#Outros6, input#Outros7, input#Outros8, input#Outros9, input#Outros10, input#Outros11, input#Outros12');
let essenciais = document.querySelectorAll('h3#essenciais1, h3#essenciais2, h3#essenciais3, h3#essenciais4, h3#essenciais5, h3#essenciais6, h3#essenciais7, h3#essenciais8, h3#essenciais9, h3#essenciais10, h3#essenciais11, h3#essenciais12');

//Não Essenciais(D1)
let academia = document.querySelectorAll('input#academia1, input#academia2, input#academia3, input#academia4, input#academia5, input#academia6, input#academia7, input#academia8, input#academia9, input#academia10, input#academia11, input#academia12');
let estudos = document.querySelectorAll('input#estudos1, input#estudos2, input#estudos3, input#estudos4, input#estudos5, input#estudos6, input#estudos7, input#estudos8, input#estudos9, input#estudos10, input#estudos11, input#estudos12');
let alimentacaoExtra = document.querySelectorAll('input#alimentoExtra1, input#alimentoExtra2, input#alimentoExtra3, input#alimentoExtra4, input#alimentoExtra5, input#alimentoExtra6, input#alimentoExtra7, input#alimentoExtra8, input#alimentoExtra9, input#alimentoExtra10, input#alimentoExtra11, input#alimentoExtra12');
let celular = document.querySelectorAll('input#celular1, input#celular2, input#celular3, input#celular4, input#celular5, input#celular6, input#celular7, input#celular8, input#celular9, input#celular10, input#celular11, input#celular12');
let assinaturas = document.querySelectorAll('input#assinaturas1, input#assinaturas2, input#assinaturas3, input#assinaturas4, input#assinaturas5, input#assinaturas6, input#assinaturas7, input#assinaturas8, input#assinaturas9, input#assinaturas10, input#assinaturas11, input#assinaturas12');
let entreterimento = document.querySelectorAll('input#entreterimento1, input#entreterimento2, input#entreterimento3, input#entreterimento4, input#entreterimento5, input#entreterimento6, input#entreterimento7, input#entreterimento8, input#entreterimento9, input#entreterimento10, input#entreterimento11, input#entreterimento12');
let dentista = document.querySelectorAll('input#dentista1, input#dentista2, input#dentista3, input#dentista4, input#dentista5, input#dentista6, input#dentista7, input#dentista8, input#dentista9, input#dentista10, input#dentista11, input#dentista12');
let mae = document.querySelectorAll('input#mae1, input#mae2, input#mae3, input#mae4, input#mae5, input#mae6, input#mae7, input#mae8, input#mae9, input#mae10, input#mae11, input#mae12');
let OutroS = document.querySelectorAll('input#OutroS1, input#OutroS2, input#OutroS3, input#OutroS4, input#OutroS5, input#OutroS6, input#OutroS7, input#OutroS8, input#OutroS9, input#OutroS10, input#OutroS11, input#OutroS12');
let naoEssenciais = document.querySelectorAll('h3#naoEssenciais1, h3#naoEssenciais2, h3#naoEssenciais3, h3#naoEssenciais4, h3#naoEssenciais5, h3#naoEssenciais6, h3#naoEssenciais7, h3#naoEssenciais8, h3#naoEssenciais9, h3#naoEssenciais10, h3#naoEssenciais11, h3#naoEssenciais12');

//Reserva mensal
let montante = document.querySelectorAll('input#montante1, input#montante2, input#montante3, input#montante4, input#montante5, input#montante6, input#montante7, input#montante8, input#montante9, input#montante10, input#montante11, input#montante12');
let totalInvestido = document.querySelectorAll('input#totalInvestido1, input#totalInvestido2, input#totalInvestido3, input#totalInvestido4, input#totalInvestido5, input#totalInvestido6, input#totalInvestido7, input#totalInvestido8, input#totalInvestido9, input#totalInvestido10, input#totalInvestido11, input#totalInvestido12');
let TotalInvestido = document.querySelectorAll('input#TotalInvestido1, input#TotalInvestido2, input#TotalInvestido3, input#TotalInvestido4, input#TotalInvestido5, input#TotalInvestido6, input#TotalInvestido7, input#TotalInvestido8, input#TotalInvestido9, input#TotalInvestido10, input#TotalInvestido11, input#TotalInvestido12');
let sobra = document.querySelectorAll('input#sobra1, input#sobra2, input#sobra3, input#sobra4, input#sobra5, input#sobra6, input#sobra7, input#sobra8, input#sobra9, input#sobra10, input#sobra11, input#sobra12');
let fundoEmergencia = document.querySelectorAll('input#fundoEmergencia1, input#fundoEmergencia2, input#fundoEmergencia3, input#fundoEmergencia4, input#fundoEmergencia5, input#fundoEmergencia6, input#fundoEmergencia7, input#fundoEmergencia8, input#fundoEmergencia9, input#fundoEmergencia10, input#fundoEmergencia11, input#fundoEmergencia12');
let totalReservado = document.querySelectorAll('input#totalReservado1, input#totalReservado2, input#totalReservado3, input#totalReservado4, input#totalReservado5, input#totalReservado6, input#totalReservado7, input#totalReservado8, input#totalReservado9, input#totalReservado10, input#totalReservado11, input#totalReservado12');
let totalGasto = document.querySelectorAll('input#totalGasto1, input#totalGasto2, input#totalGasto3, input#totalGasto4, input#totalGasto5, input#totalGasto6, input#totalGasto7, input#totalGasto8, input#totalGasto9, input#totalGasto10, input#totalGasto11, input#totalGasto12');
let sobraMensal = document.querySelectorAll('h3#sobraMensal1, h3#sobraMensal2, h3#sobraMensal3, h3#sobraMensal4, h3#sobraMensal5, h3#sobraMensal6, h3#sobraMensal7, h3#sobraMensal8, h3#sobraMensal9, h3#sobraMensal10, h3#sobraMensal11, h3#sobraMensal12');

function janeiro() {
    let janeiro = total1.innerHTML = `R$${Number(salario1.value) + Number(conjuge1.value) + Number(transferencias1.value) + Number(outros1.value)}`;
    let janeiro1 = essenciais1.innerHTML = `R$${Number(condominio1.value) + Number(aluguel1.value) + Number(transporte1.value) + Number(alimentacao1.value) + Number(luz1.value) + Number(agua1.value) + Number(internet1.value) + Number(Transferencias1.value) + Number(amalfi1.value) + Number(cartao1.value) + Number(diarista1.value) + Number(manutencao1.value) + Number(emprestimo1.value) + Number(saques1.value) + Number(Outros1.value)}`;
    let janeiro2 = naoEssenciais1.innerHTML = `R$${Number(academia1.value) + Number(estudos1.value) + Number(alimentoExtra1.value) + Number(celular1.value) + Number(assinaturas1.value) + Number(entreterimento1.value) + Number(dentista1.value) + Number(mae1.value) + Number(OutroS1.value)}`;
    totalReservado1.innerHTML = `R$${Number(montante1.value) + Number(totalInvestido1.value) + Number(TotalInvestido1.value)}`;
    totalGasto1.innerHTML = `R$${Number(janeiro1.split('R$')[1]) + Number(janeiro2.split('R$')[1])}`;
    sobraMensal1.innerHTML = `R$${Number(janeiro.split('R$')[1]) - Number(janeiro1.split('R$')[1]) - Number(janeiro2.split('R$')[1])}`;
}

function fevereiro() {
    let fevereiro = total2.innerHTML = `R$${Number(salario2.value) + Number(conjuge2.value) + Number(transferencias2.value) + Number(outros2.value)}`;
    let fevereiro1 = essenciais2.innerHTML = `R$${Number(condominio2.value) + Number(aluguel2.value) + Number(transporte2.value) + Number(alimentacao2.value) + Number(luz2.value) + Number(agua2.value) + Number(internet2.value) + Number(Transferencias2.value) + Number(amalfi2.value) + Number(cartao2.value) + Number(diarista2.value) + Number(manutencao2.value) + Number(emprestimo2.value) + Number(saques2.value) + Number(Outros2.value)}`;
    let fevereiro2 = naoEssenciais2.innerHTML = `R$${Number(academia2.value) + Number(estudos2.value) + Number(alimentoExtra2.value) + Number(celular2.value) + Number(assinaturas2.value) + Number(entreterimento2.value) + Number(dentista2.value) + Number(mae2.value) + Number(OutroS2.value)}`;
    totalReservado2.innerHTML = `R$${Number(montante2.value) + Number(totalInvestido2.value) + Number(TotalInvestido2.value)}`;
    totalGasto2.innerHTML = `R$${Number(fevereiro1.split('R$')[1]) + Number(fevereiro2.split('R$')[1])}`;
    sobraMensal2.innerHTML = `R$${Number(fevereiro.split('R$')[1]) - Number(fevereiro1.split('R$')[1]) - Number(fevereiro2.split('R$')[1])}`;
}

function marco() {
    let marco = total3.innerHTML = `R$${Number(salario3.value) + Number(conjuge3.value) + Number(transferencias3.value) + Number(outros3.value)}`;
    let marco1 = essenciais3.innerHTML = `R$${Number(condominio3.value) + Number(aluguel3.value) + Number(transporte3.value) + Number(alimentacao3.value) + Number(luz3.value) + Number(agua3.value) + Number(internet3.value) + Number(Transferencias3.value) + Number(amalfi3.value) + Number(cartao3.value) + Number(diarista3.value) + Number(manutencao3.value) + Number(emprestimo3.value) + Number(saques3.value) + Number(Outros3.value)}`;
    let marco2 = naoEssenciais3.innerHTML = `R$${Number(academia3.value) + Number(estudos3.value) + Number(alimentoExtra3.value) + Number(celular3.value) + Number(assinaturas3.value) + Number(entreterimento3.value) + Number(dentista3.value) + Number(mae3.value) + Number(OutroS3.value)}`;
    totalReservado3.innerHTML = `R$${Number(montante3.value) + Number(totalInvestido3.value) + Number(TotalInvestido3.value)}`;
    totalGasto3.innerHTML = `R$${Number(marco1.split('R$')[1]) + Number(marco2.split('R$')[1])}`;
    sobraMensal3.innerHTML = `R$${Number(marco.split('R$')[1]) - Number(marco1.split('R$')[1]) - Number(marco2.split('R$')[1])}`;
}

function abril() {
    let abril = total4.innerHTML = `R$${Number(salario4.value) + Number(conjuge4.value) + Number(transferencias4.value) + Number(outros4.value)}`;
    let abril1 = essenciais4.innerHTML = `R$${Number(condominio4.value) + Number(aluguel4.value) + Number(transporte4.value) + Number(alimentacao4.value) + Number(luz4.value) + Number(agua4.value) + Number(internet4.value) + Number(Transferencias4.value) + Number(amalfi4.value) + Number(cartao4.value) + Number(diarista4.value) + Number(manutencao4.value) + Number(emprestimo4.value) + Number(saques4.value) + Number(Outros4.value)}`;
    let abril2 = naoEssenciais4.innerHTML = `R$${Number(academia4.value) + Number(estudos4.value) + Number(alimentoExtra4.value) + Number(celular4.value) + Number(assinaturas4.value) + Number(entreterimento4.value) + Number(dentista4.value) + Number(mae4.value) + Number(OutroS4.value)}`;
    totalReservado4.innerHTML = `R$${Number(montante4.value) + Number(totalInvestido4.value) + Number(TotalInvestido4.value)}`;
    totalGasto4.innerHTML = `R$${Number(abril1.split('R$')[1]) + Number(abril2.split('R$')[1])}`;
    sobraMensal4.innerHTML = `R$${Number(abril.split('R$')[1]) - Number(abril1.split('R$')[1]) - Number(abril2.split('R$')[1])}`;
}

function maio() {
    let maio = total5.innerHTML = `R$${Number(salario5.value) + Number(conjuge5.value) + Number(transferencias5.value) + Number(outros5.value)}`;
    let maio1 = essenciais5.innerHTML = `R$${Number(condominio5.value) + Number(aluguel5.value) + Number(transporte5.value) + Number(alimentacao5.value) + Number(luz5.value) + Number(agua5.value) + Number(internet5.value) + Number(Transferencias5.value) + Number(amalfi5.value) + Number(cartao5.value) + Number(diarista5.value) + Number(manutencao5.value) + Number(emprestimo5.value) + Number(saques5.value) + Number(Outros5.value)}`;
    let maio2 = naoEssenciais5.innerHTML = `R$${Number(academia5.value) + Number(estudos5.value) + Number(alimentoExtra5.value) + Number(celular5.value) + Number(assinaturas5.value) + Number(entreterimento5.value) + Number(dentista5.value) + Number(mae5.value) + Number(OutroS5.value)}`;
    totalReservado5.innerHTML = `R$${Number(montante5.value) + Number(totalInvestido5.value) + Number(TotalInvestido5.value)}`;
    totalGasto5.innerHTML = `R$${Number(maio1.split('R$')[1]) + Number(maio2.split('R$')[1])}`;
    sobraMensal5.innerHTML = `R$${Number(maio.split('R$')[1]) - Number(maio1.split('R$')[1]) - Number(maio2.split('R$')[1])}`;
}

function junho() {
    let junho = total6.innerHTML = `R$${Number(salario6.value) + Number(conjuge6.value) + Number(transferencias6.value) + Number(outros6.value)}`;
    let junho1 = essenciais6.innerHTML = `R$${Number(condominio6.value) + Number(aluguel6.value) + Number(transporte6.value) + Number(alimentacao6.value) + Number(luz6.value) + Number(agua6.value) + Number(internet6.value) + Number(Transferencias6.value) + Number(amalfi6.value) + Number(cartao6.value) + Number(diarista6.value) + Number(manutencao6.value) + Number(emprestimo6.value) + Number(saques6.value) + Number(Outros6.value)}`;
    let junho2 = naoEssenciais6.innerHTML = `R$${Number(academia6.value) + Number(estudos6.value) + Number(alimentoExtra6.value) + Number(celular6.value) + Number(assinaturas6.value) + Number(entreterimento6.value) + Number(dentista6.value) + Number(mae6.value) + Number(OutroS6.value)}`;
    totalReservado6.innerHTML = `R$${Number(montante6.value) + Number(totalInvestido6.value) + Number(TotalInvestido6.value)}`;
    totalGasto6.innerHTML = `R$${Number(junho1.split('R$')[1]) + Number(junho2.split('R$')[1])}`;
    sobraMensal6.innerHTML = `R$${Number(junho.split('R$')[1]) - Number(junho1.split('R$')[1]) - Number(junho2.split('R$')[1])}`;
}

function julho() {
    let julho = total7.innerHTML = `R$${Number(salario7.value) + Number(conjuge7.value) + Number(transferencias7.value) + Number(outros7.value)}`;
    let julho1 = essenciais7.innerHTML = `R$${Number(condominio7.value) + Number(aluguel7.value) + Number(transporte7.value) + Number(alimentacao7.value) + Number(luz7.value) + Number(agua7.value) + Number(internet7.value) + Number(Transferencias7.value) + Number(amalfi7.value) + Number(cartao7.value) + Number(diarista7.value) + Number(manutencao7.value) + Number(emprestimo7.value) + Number(saques7.value) + Number(Outros7.value)}`;
    let julho2 = naoEssenciais7.innerHTML = `R$${Number(academia7.value) + Number(estudos7.value) + Number(alimentoExtra7.value) + Number(celular7.value) + Number(assinaturas7.value) + Number(entreterimento7.value) + Number(dentista7.value) + Number(mae7.value) + Number(OutroS7.value)}`;
    totalReservado7.innerHTML = `R$${Number(montante7.value) + Number(totalInvestido7.value) + Number(TotalInvestido7.value)}`;
    totalGasto7.innerHTML = `R$${Number(julho1.split('R$')[1]) + Number(julho2.split('R$')[1])}`;
    sobraMensal7.innerHTML = `R$${Number(julho.split('R$')[1]) - Number(julho1.split('R$')[1]) - Number(julho2.split('R$')[1])}`;
}

function agosto() {
    let agosto = total8.innerHTML = `R$${Number(salario8.value) + Number(conjuge8.value) + Number(transferencias8.value) + Number(outros8.value)}`;
    let agosto1 = essenciais8.innerHTML = `R$${Number(condominio8.value) + Number(aluguel8.value) + Number(transporte8.value) + Number(alimentacao8.value) + Number(luz8.value) + Number(agua8.value) + Number(internet8.value) + Number(Transferencias8.value) + Number(amalfi8.value) + Number(cartao8.value) + Number(diarista8.value) + Number(manutencao8.value) + Number(emprestimo8.value) + Number(saques8.value) + Number(Outros8.value)}`;
    let agosto2 = naoEssenciais8.innerHTML = `R$${Number(academia8.value) + Number(estudos8.value) + Number(alimentoExtra8.value) + Number(celular8.value) + Number(assinaturas8.value) + Number(entreterimento8.value) + Number(dentista8.value) + Number(mae8.value) + Number(OutroS8.value)}`;
    totalReservado8.innerHTML = `R$${Number(montante8.value) + Number(totalInvestido8.value) + Number(TotalInvestido8.value)}`;
    totalGasto8.innerHTML = `R$${Number(agosto1.split('R$')[1]) + Number(agosto2.split('R$')[1])}`;
    sobraMensal8.innerHTML = `R$${Number(agosto.split('R$')[1]) - Number(agosto1.split('R$')[1]) - Number(agosto2.split('R$')[1])}`;
}

function setembro() {
    let setembro = total9.innerHTML = `R$${Number(salario9.value) + Number(conjuge9.value) + Number(transferencias9.value) + Number(outros9.value)}`;
    let setembro1 = essenciais9.innerHTML = `R$${Number(condominio9.value) + Number(aluguel9.value) + Number(transporte9.value) + Number(alimentacao9.value) + Number(luz9.value) + Number(agua9.value) + Number(internet9.value) + Number(Transferencias9.value) + Number(amalfi9.value) + Number(cartao9.value) + Number(diarista9.value) + Number(manutencao9.value) + Number(emprestimo9.value) + Number(saques9.value) + Number(Outros9.value)}`;
    let setembro2 = naoEssenciais9.innerHTML = `R$${Number(academia9.value) + Number(estudos9.value) + Number(alimentoExtra9.value) + Number(celular9.value) + Number(assinaturas9.value) + Number(entreterimento9.value) + Number(dentista9.value) + Number(mae9.value) + Number(OutroS9.value)}`;
    totalReservado9.innerHTML = `R$${Number(montante9.value) + Number(totalInvestido9.value) + Number(TotalInvestido9.value)}`;
    totalGasto9.innerHTML = `R$${Number(setembro1.split('R$')[1]) + Number(setembro2.split('R$')[1])}`;
    sobraMensal9.innerHTML = `R$${Number(setembro.split('R$')[1]) - Number(setembro1.split('R$')[1]) - Number(setembro2.split('R$')[1])}`;
}

function outubro() {
    let outubro = total10.innerHTML = `R$${Number(salario10.value) + Number(conjuge10.value) + Number(transferencias10.value) + Number(outros10.value)}`;
    let outubro1 = essenciais10.innerHTML = `R$${Number(condominio10.value) + Number(aluguel10.value) + Number(transporte10.value) + Number(alimentacao10.value) + Number(luz10.value) + Number(agua10.value) + Number(internet10.value) + Number(Transferencias10.value) + Number(amalfi10.value) + Number(cartao10.value) + Number(diarista10.value) + Number(manutencao10.value) + Number(emprestimo10.value) + Number(saques10.value) + Number(Outros10.value)}`;
    let outubro2 = naoEssenciais10.innerHTML = `R$${Number(academia10.value) + Number(estudos10.value) + Number(alimentoExtra10.value) + Number(celular10.value) + Number(assinaturas10.value) + Number(entreterimento10.value) + Number(dentista10.value) + Number(mae10.value) + Number(OutroS10.value)}`;
    totalReservado10.innerHTML = `R$${Number(montante10.value) + Number(totalInvestido10.value) + Number(TotalInvestido10.value)}`;
    totalGasto10.innerHTML = `R$${Number(outubro1.split('R$')[1]) + Number(outubro2.split('R$')[1])}`;
    sobraMensal10.innerHTML = `R$${Number(outubro.split('R$')[1]) - Number(outubro1.split('R$')[1]) - Number(outubro2.split('R$')[1])}`;
}

function novembro() {
    let novembro = total11.innerHTML = `R$${Number(salario11.value) + Number(conjuge11.value) + Number(transferencias11.value) + Number(outros11.value)}`;
    let novembro1 = essenciais11.innerHTML = `R$${Number(condominio11.value) + Number(aluguel11.value) + Number(transporte11.value) + Number(alimentacao11.value) + Number(luz11.value) + Number(agua11.value) + Number(internet11.value) + Number(Transferencias11.value) + Number(amalfi11.value) + Number(cartao11.value) + Number(diarista11.value) + Number(manutencao11.value) + Number(emprestimo11.value) + Number(saques11.value) + Number(Outros11.value)}`;
    let novembro2 = naoEssenciais11.innerHTML = `R$${Number(academia11.value) + Number(estudos11.value) + Number(alimentoExtra11.value) + Number(celular11.value) + Number(assinaturas11.value) + Number(entreterimento11.value) + Number(dentista11.value) + Number(mae11.value) + Number(OutroS11.value)}`;
    totalReservado11.innerHTML = `R$${Number(montante11.value) + Number(totalInvestido11.value) + Number(TotalInvestido11.value)}`;
    totalGasto11.innerHTML = `R$${Number(novembro1.split('R$')[1]) + Number(novembro2.split('R$')[1])}`;
    sobraMensal11.innerHTML = `R$${Number(novembro.split('R$')[1]) - Number(novembro1.split('R$')[1]) - Number(novembro2.split('R$')[1])}`;
}

function dezembro() {
    let dezembro = total12.innerHTML = `R$${Number(salario12.value) + Number(conjuge12.value) + Number(transferencias12.value) + Number(outros12.value)}`;
    let dezembro1 = essenciais12.innerHTML = `R$${Number(condominio12.value) + Number(aluguel12.value) + Number(transporte12.value) + Number(alimentacao12.value) + Number(luz12.value) + Number(agua12.value) + Number(internet12.value) + Number(Transferencias12.value) + Number(amalfi12.value) + Number(cartao12.value) + Number(diarista12.value) + Number(manutencao12.value) + Number(emprestimo12.value) + Number(saques12.value) + Number(Outros12.value)}`;
    let dezembro2 = naoEssenciais12.innerHTML = `R$${Number(academia12.value) + Number(estudos12.value) + Number(alimentoExtra12.value) + Number(celular12.value) + Number(assinaturas12.value) + Number(entreterimento12.value) + Number(dentista12.value) + Number(mae12.value) + Number(OutroS12.value)}`;
    totalReservado12.innerHTML = `R$${Number(montante12.value) + Number(totalInvestido12.value) + Number(TotalInvestido12.value)}`;
    totalGasto12.innerHTML = `R$${Number(dezembro1.split('R$')[1]) + Number(dezembro2.split('R$')[1])}`;
    sobraMensal12.innerHTML = `R$${Number(dezembro.split('R$')[1]) - Number(dezembro1.split('R$')[1]) - Number(dezembro2.split('R$')[1])}`;
}
