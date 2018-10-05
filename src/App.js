import React, { Component } from "react";
import "./App.css";
import SymbolPicker from "./SymbolPicker.js";
import PriceList from "./PriceList.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.symbolsUpdated = this.symbolsUpdated.bind(this);
    this.state = {
      symbols: []
    };
  }
  symbolsUpdated = s => {
    this.setState({
      symbols: [...this.state.symbols, s]
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SymbolPicker updateSymbols={this.symbolsUpdated} />
          <PriceList props={this.state.symbols} />
        </header>
      </div>
    );
  }
}

export default App;
