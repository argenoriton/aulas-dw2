import React from 'react';
import './style.css';

const Personagens = (props) => {
  const personagens = [
    'Jill Valentine',
    'Claire Redfield',
    'Ada Wong',
    'Chris Redfield',
    'Leon S. Kennedy',
    'Albert Wesker',
  ];

  const personagensDaFamilia = personagens.filter((personagem) => {
    const familiaEscolhida = personagem
      .toLocaleLowerCase()
      .includes(props.familia);
    return familiaEscolhida;
  });

  return (
    <div>
      <h3>Personagens de Resident Evil</h3>
      <ul>
        {personagensDaFamilia.map((personagens) => (
          <li>{personagens}</li>
        ))}
      </ul>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <Personagens familia="redfield" />
    </div>
  );
}
