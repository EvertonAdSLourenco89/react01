import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';
import { saveAs } from 'file-saver'; // Importação da biblioteca file-saver

function App() {
  return (
    <div className="App-header">
      <Header />
      <main>
        <p>Componente do semestre 2024/2</p>
        {ListaDeDisciplinas()}
      </main>
      <Footer />
    </div>
  );
}

function ListaDeDisciplinas() {
  // Estados para disciplinas, turno e observações
  const [lista, setLista] = useState(['PW4', 'TC2', 'PDM']);
  const [novaDisciplina, setNovaDisciplina] = useState('');
  const [turno, setTurno] = useState('Matutino'); // Estado para armazenar o turno
  const [observacoes, setObservacoes] = useState(''); // Estado para observações

  // Função para lidar com a mudança de valor do input
  const handleChange = (event) => {
    setNovaDisciplina(event.target.value);
  };

  // Função para lidar com a mudança no textarea
  const handleObservacoesChange = (event) => {
    setObservacoes(event.target.value);
  };

  // Função para adicionar uma nova disciplina à lista
  const adicionarDisciplina = () => {
    if (novaDisciplina.trim() !== '') {
      setLista([...lista, novaDisciplina]);
      setNovaDisciplina('');
    }
  };

  // Função para capturar a tecla Enter e adicionar a lista de disciplinas
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      adicionarDisciplina();
    }
  };

  // Função para lidar com a seleção de turno
  const handleTurnoChange = (event) => {
    setTurno(event.target.value);
  };

  // Função para salvar as informações em um arquivo de texto
  const salvarAgenda = () => {
    const conteudo = `
      Disciplinas: ${lista.join(', ')}
      Turno: ${turno}
      Observações: ${observacoes}
    `;

    const blob = new Blob([conteudo], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'agenda-professor.txt'); // Salva o arquivo usando file-saver
  };

  return (
    <div>
      <h1>Lista de disciplinas</h1>
      <input
        type="text"
        value={novaDisciplina}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Nova disciplina"
      />
      <button onClick={adicionarDisciplina}>Adicionar</button>
      <ul>
        {lista.map((disciplina, index) => (
          <li key={index}>{disciplina}</li>
        ))}
      </ul>

      <div>
        <p>Selecione o turno:</p>
        <label>
          <input
            type="radio"
            name="turno"
            value="Matutino"
            checked={turno === 'Matutino'}
            onChange={handleTurnoChange}
          />
          Matutino
        </label>
        <label>
          <input
            type="radio"
            name="turno"
            value="Vespertino"
            checked={turno === 'Vespertino'}
            onChange={handleTurnoChange}
          />
          Vespertino
        </label>
        <label>
          <input
            type="radio"
            name="turno"
            value="Noturno"
            checked={turno === 'Noturno'}
            onChange={handleTurnoChange}
          />
          Noturno
        </label>
      </div>

      <div>
        <p>Observações da sala de aula:</p>
        <textarea
          value={observacoes}
          onChange={handleObservacoesChange}
          placeholder="Escreva observações aqui"
        ></textarea>
      </div>

      <button onClick={salvarAgenda}>Salvar Agenda</button>
    </div>
  );
}

export default App;
