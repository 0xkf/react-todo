import logo from './logo.svg';
import './App.css';
import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


class MemoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memos: [],
      currentMemo: ''
    };
  }

  handleChange = (event) => {
    this.setState({currentMemo: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newMemos = this.state.memos.concat(this.state.currentMemo);
    this.setState({
      memos: newMemos,
      currentMemo: ''
    });
  }

  render() {
    const memos = this.state.memos.map((memo, index) => {
      return <li key={index}>{memo}</li>;
    });

    return (
        <div>
          <h2>Memo App</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.currentMemo}
              onChange={this.handleChange}
            />
            <input type="submit" value="Add" />
          </form>
          <ul>
            {memos}
          </ul>
        </div>
      );
    }
  }
  
  export default MemoApp;
