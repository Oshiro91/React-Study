import './App.css'
import { useState } from 'react';
export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  )
}

const questions = [
  {
    "id": 1,
    "question": "SAP MII permite a integração direta entre sistemas de manufatura e aplicações empresariais.",
    "answer": "True"
  },
  {
    "id": 2,
    "question": "O SAP MII é um sistema ERP independente, sem necessidade de conexão com o SAP ERP.",
    "answer": "False"
  },
  {
    "id": 3,
    "question": "A arquitetura do SAP MII inclui a camada de conectividade com sistemas de chão de fábrica.",
    "answer": "True"
  },
  {
    "id": 4,
    "question": "SAP MII pode processar dados em tempo real para fornecer insights operacionais.",
    "answer": "True"
  },
  {
    "id": 5,
    "question": "Os Workflows no SAP MII são usados apenas para visualização de dados, sem interação.",
    "answer": "False"
  },
  {
    "id": 6,
    "question": "A comunicação no SAP MII pode ser feita via protocolos como OPC e XML.",
    "answer": "True"
  },
  {
    "id": 7,
    "question": "SAP MII possui uma interface nativa para desenvolvimento de aplicativos móveis.",
    "answer": "False"
  },
  {
    "id": 8,
    "question": "Os dashboards no SAP MII podem ser configurados para exibir métricas de produção.",
    "answer": "True"
  },
  {
    "id": 9,
    "question": "A arquitetura do SAP MII não suporta integração com sistemas de terceiros.",
    "answer": "False"
  },
  {
    "id": 10,
    "question": "SAP MII utiliza Manufacturing Execution Systems (MES) para obter dados do chão de fábrica.",
    "answer": "True"
  }
];
function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);
  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }
  return (
    <div className='flashcards'>
      {questions.map(question =>
        <div key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? question.answer === 'True' ? 'selectedTrue' : 'selectedFalse' : ''}>
          <p >{question.id === selectedId ? question.answer : question.question}</p>
        </div>)}
    </div>
  )
}