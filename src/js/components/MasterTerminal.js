import React from 'react';
import Terminal from 'terminal-in-react';
import 'terminal-in-react/lib/css/index.css';

class MasterTerminal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <Terminal
          promptSymbol="$"
          hideTopBar={true}
          allowTabs={false}
          startState='maximised'
          style={{ fontSize: "1.5em"}}
          msg="Welcome to the Homepage of Michael Plazek. Type 'help' for a list of commands."

          commands={{

          }}
          descriptions={{

          }}
        />
      </div>
    );
  }
}

export default MasterTerminal;
