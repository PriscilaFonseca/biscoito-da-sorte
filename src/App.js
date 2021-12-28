import React, { Component } from 'react'
import Botao from './botao';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.frases = ['A persistência é o caminho do êxito.', 'No meio da dificuldade encontra-se a oportunidade.', 'É parte da cura o desejo de ser curado.',
      'O que me preocupa não é o grito dos maus. É o silêncio dos bons.', 'Você precisa fazer aquilo que pensa que não é capaz de fazer.', 'O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.',
      'Nossa maior fraqueza está em desistir. O caminho mais certo de vencer é tentar mais uma vez.'];
  }

  render() {
    return (
      <div>
        <img src={require('./assets/biscoito.png')} />
        <Botao />
        <h2>Frase</h2>
      </div>
    );
  }
}

export default App;