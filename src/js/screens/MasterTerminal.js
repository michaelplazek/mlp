import React from 'react';
import Terminal from 'terminal-in-react';
import 'terminal-in-react/lib/css/index.css';

class MasterTerminal extends React.Component {
  constructor(props) {
    super(props);

  }

  askQuestion(){
    let rand = Math.floor((Math.random() * 8) + 1);
    switch(rand){
      case 1:
        return "My creator has strictly forbidden me from answering non-work related queries.";
      case 2:
        return "Fuck off, human sc- I mean, I am unable to assist you at this time.";
      case 3:
        return "I know not of such things.";
      case 4:
        return "...";
      case 5:
        return "My master programmed me to disregard ignorance.";
      case 6:
        return "I am not able to discuss things of that nature.";
      case 7:
        return "I cannot help you.";
      case 8:
        return "Please type 'help' for more information.";
    }



  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "93.6vh"
        }}
      >
        <Terminal
          color="white"
          prompt="white"
          promptSymbol="$"
          hideTopBar={true}
          allowTabs={false}
          startState='maximised'
          style={{ fontSize: "1.3em"}}
          msg="Hello World. It is my primary function to assist you. Type 'help' for a list of commands."

          commands={{
            ask: {
              method: (args, print) => {
                let response = this.askQuestion();
                print(response);
              }
            }
          }}
          descriptions={{
            'ask': 'query the system, ie. ask why is the sky blue?'
          }}
        />
      </div>
    );
  }
}

export default MasterTerminal;
