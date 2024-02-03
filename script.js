const imagemVisualização = document.getElementById ('imagem-visualizacao');
const tituloProduto = document.getElementById ('titulo-produto');
const nomeCor = document.getElementById('nome-cor-selecionada');
const MiniaturaImagem0 = document.getElementById('0-imagem-miniatura'); 
const MiniaturaImagem1 = document.getElementById('1-imagem-miniatura'); 
const MiniaturaImagem2 = document.getElementById('2-imagem-miniatura'); 

const verdeCipreste ={
    nome:'verde-cipreste',
    pasta:'imagens-verde-cipreste'
    }

const azulInverno= {
    nome: 'Azul-Inverno',
    pasta: 'imagens-azul-inverno'
    } 

const meianoite= {
    nome: 'meia-noite',
    pasta: 'imagens-meia-noite'
    } 

const estelar= {
    nome: 'estelar',
    pasta: 'imagens-estelar'
    } 

const rosaclaro= {
    nome: 'rosa-claro',
    pasta: 'imagens-rosa-claro'
    } 

//const minhaLista = [6, 7, 8, 9, 10]
//    numeros       0, 1, 2, 3, 4 --- busca de acordo com a colocação em que ele se encontra 
//minhaLista [2]
// para acessar campo em particular ---- meianoite.pasta

const opcoesCores = ['verdeCipreste,azulInverno,meianoite,estelar,rosaclaro'];
const opcaoTamanho = ['41 mm', '45 mm'];


//minhalista [3]
//meianoite.pasta 

// dessa forma sempre vai trazer o que estiver marcado CHECKED 
let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1; 

 function trocarImagem(){
    const idopcaoSelecionada = document.querySelector ('[name="opcao-imagem"]: checked');
    imagemSelecionada = idopcaoSelecionada.chartAt (0);
    imagemVisualização.src = './imagens/opcoes-cores/imagens-azul-inverno' + imagemSelecionada + '.jpeg';
 }

 function trocarTamanho (){
    //atualizar variavel de controle do tamanho da caixa 
    const idopcaoSelecionada=document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idopcaoSelecionada.charAt(0);
    //mudar o tamanho da imagem de acordo com a opção 
    //mudar o titulo do produto 
    tituloProduto.innerText = "Pulseira loop esportiva azul-inverno para caixa de " +  opcaoTamanho[tamanhoSelecionado];
    if(opcaoTamanho[tamanhoSelecionado] ==='41 mm')
    imagemVisualização.classList.add('caixa-pequena');
    { else {
        imagemVisualização.classList.remove ('caixa-pequena');
    }   
 }
}

 function trocarCor(){
//atualizar cor selecionada
const idOpcaoSelecionada = document.querySelector ('[name="opcao-cor"] :checked').id;
corSelecionada = idOpcaoSelecionada.charAt(0);
//trocar titulo da pagina
tituloProduto.innerText="Pulseira loop esportiva " + opcoesCores [corSelecionada].nome + "para caixa de " +  opcaoTamanho[tamanhoSelecionado];
//trocar nome da cor 
nomeCor.innerText = 'Cor - ' = opcoesCores [corSelecionada].nome; 
//trocar imagens mini exibidas
MiniaturaImagem0.src = './imagens/opcoes-cores/' + opcoesCores [corSelecionada].pasta + '/imagem-0.jpeg';
MiniaturaImagem1.src = './imagens/opcoes-cores/' + opcoesCores [corSelecionada].pasta + '/imagem-1.jpeg';
MiniaturaImagem2.src = './imagens/opcoes-cores/' + opcoesCores [corSelecionada].pasta + '/imagem-2.jpeg';
//trocar imagens grandes 
imagemVisualização.src='./imagens/opcoes-cores/' + opcoesCores 

 }

