const BtnPesquisar = document.querySelector('#btnPesquisar')
const bairro = document.querySelector('#bairro')
const estado = document.querySelector('#estado')
const uf = document.querySelector('#uf')
const localidade = document.querySelector('#localidade')
const logradouro = document.querySelector('#logradouro')



BtnPesquisar.addEventListener("click", ()=>{
    let cep = document.querySelector('#inpCEP').value;
    consomeApi(cep)
})


const consomeApi = async(cep)=>{
    let resultado = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    console.log(resultado);

        bairro.innerHTML = (resultado.data.bairro);
        estado.innerHTML = (resultado.data.estado);
        uf.innerHTML = (resultado.data.uf);
        localidade.innerHTML = (resultado.data.localidade);
        logradouro.innerHTML = (resultado.data.logradouro);    
        
    };








