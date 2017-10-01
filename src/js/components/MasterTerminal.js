import React from 'react';
import Terminal from 'terminal-in-react';

class MasterTerminal extends React.Component {

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
          msg="Hi everyone! This is a terminal component for React"
          descriptions={{ website: 'My website', intro: 'My introduction' }}
        />
      </div>
    );
  }
}

export default MasterTerminal;
