import React, { Component } from 'react'
import Botao from './botao';
import './style.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: ''
    };

    this.biscoito = this.biscoito.bind(this);

    this.frases = ['A persistência é o caminho do êxito.', 'No meio da dificuldade encontra-se a oportunidade.', 'É parte da cura o desejo de ser curado.',
      'O que me preocupa não é o grito dos maus. É o silêncio dos bons.', 'Você precisa fazer aquilo que pensa que não é capaz de fazer.', 'O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.',
      'Nossa maior fraqueza está em desistir. O caminho mais certo de vencer é tentar mais uma vez.'];
  }

  biscoito(){
    let state = this.state;

    let numero = Math.floor(Math.random() * this.frases.length);

    state.textoFrase = '" ' + this.frases[numero] + ' "';

    this.setState(state);

  }

  render() {
    return (
      <div className='container'>
        <img src={require('./assets/biscoito.png')} className='img'/>
        <Botao nome="Abrir biscoito da sorte" acaoBtn={this.biscoito}/>
        <h2 className='textoFrase'>{this.state.textoFrase}</h2>
      </div>
    );
  }
}

export default App;