import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    return(
      <div id="main">
        {this.children}
      </div>
    );
  }
}

export default App;
