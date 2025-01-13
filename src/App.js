import React from 'react';

import HelloWorld from './Components/HelloWorld';
import CounterExample from './Components/CounterExample';
import Header from './Components/Header';

function App() {
  return (

    <div>
      <Header/>
      <HelloWorld name="Pedro"/>

     { /*<CounterExample/>*/}
    </div>
  );
}

export default App;
