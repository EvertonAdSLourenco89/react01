import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

function App(){
  return(
    <div>
      <Header/>
      <main>
        <p> Componente do semestre 2024/2</p>
        {ListaDeDisciplinas()}
      </main>
      <Footer/>
    </div>
  );
}
 
function ListaDeDisciplinas() {
  
  // Estado para armazenar na lista de disciplinas e a nova disciplina
  const [lista, setlista] = useState(['PW4', 'TC2', 'PDM']);
  const [novaDisciplina, setnovaDisciplina] = useState('');
  
  /// Função para lidar com a mudança de valor do input
  const handleChange = (event) => {
    setnovaDisciplina(event.target.value);
  };

  // Função para adicionar uma nova disciplina à lista
  const adicionarDisciplina = () => {
    if (novaDisciplina.trim() !== '') {
      setlista([...lista, novaDisciplina]);
      setnovaDisciplina('');
    }
  };

  // Função para capturar a tecla Enter e adicionar a lista de disciplinas
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      adicionarDisciplina();  // Chama a função de adicionar tarefa ao pressionar Enter
    }
  };

  return (
    <div>
      <h1>Lista de disciplinas</h1>
      <input
        type="text"
        value={novaDisciplina}
        onChange={handleChange}
        onKeyPress={handleKeyPress}  // Adiciona a função de capturar Enter
        placeholder="Nova disciplina"
      />
      <button onClick={adicionarDisciplina}>Adicionar</button>
      <ul>
        {lista.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>  // Renderiza cada tarefa como um item de lista
        ))}
      </ul>     
    </div>
  );
}
export default App;