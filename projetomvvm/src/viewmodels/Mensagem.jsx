import { useState } from 'react';

const Mensagem = () => {
  const [mensagem, setMensagem] = useState('Bem-Vindo, atualize a mensagem!');

  const atualizarMensagem = () => {
    setMensagem('Mensagem atualizada!');
  };

  return {
    mensagem,
    atualizarMensagem,
  };
};

export default Mensagem;
