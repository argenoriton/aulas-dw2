import React from 'react';
import './style.css';

const Personagens = (props) => {
  const personagens = [
    'Jill Valentine',
    'Jack Baker',
    'Claire Redfield',
    'Ada Wong',
    'Chris Redfield',
    'Leon S. Kennedy',
    'Albert Wesker',
    'Lucas Baker',
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
  const [exibir, setExibir] = React.useState('Listar');

  const handleOnClick = (value) => setExibir(value);

  return (
    <div>
      <button onClick={() => handleOnClick('Listar')}>Listar</button>
      <button onClick={() => handleOnClick('Baker')}>Baker</button>
      <button onClick={() => handleOnClick('Redfield')}>Redfield</button>

      {exibir === 'Baker' && (
        <div>
          <Personagens familia="baker" />
        </div>
      )}
      {exibir === 'Redfield' && (
        <div>
          <Personagens familia="redfield" />
        </div>
      )}
      {exibir === 'Listar' && (
        <div>
          <Personagens familia="" />
        </div>
      )}
    </div>
  );
}
