import React from 'react';

const todoList = [
  { id: 1, title: "Drink a glass of water" },
  { id: 2, title: "Study for upcoming Python quiz" },
  { id: 3, title: "Create R&D strategy for wellness project" }
];

function App (){
  return(
    <div>
      <h1>
        Daily To-do List
      </h1>
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;