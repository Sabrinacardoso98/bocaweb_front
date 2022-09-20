import './App.css';
import {Component} from 'react';
import { Cabecalho } from './components/Cabecalho';
import { Busca } from './components/Busca';
import { Rodape } from './components/Rodape';
import {Lista} from './components/Lista';
import logo from './logobocaweb.png';
class App extends Component{

  state = {
    busca: '',
    odas: []
  }

  componentDidMount(){
    this.carregaODAs();
  }

  carregaODAs(){
    const {busca} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
    console.log({busca})
  }

  buscaODA = (evento) => {
    this.setState({busca: evento.target.value});
    this.carregaODAs()
  }

  render(){
    const {odas} = this.state;
    return (
      <section className = 'container'>
        <div className='logoweb'>
       <img src={logo} className="app-logo" alt="logoboca" />
       </div>

        <div className='Cabecalho'>
           <h1>BOCAWEB FRONT</h1>
              <Cabecalho
                title={odas.title}
              />
            
       </div>


        <div className='Busca'>
            <Busca
            busca={this.state.busca}
            buscaODA={this.buscaODA}
            />
          

        </div>

        <div className = 'Lista'>

          {odas.map(oda => (
            <Lista
            key={oda.id}
            nome={oda.nome} 
            usuario= {oda.usuario} 
            descricao= {oda.descricao} 
            data_inclusao={oda.data_inclusao}
           palavras_chave={oda.palavras_chave}
               />
          ))}
        </div>


       <div className='Rodape'> 
          <p id='roda'>IFMS Dourados - Frameworks 2 - Sabrina Ellen e Amanda Alves</p>
              <Rodape
                title={odas.title}
              
              />
         
       </div>
       
      </section>
    )
  }
}

export default App;