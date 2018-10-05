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
    this.priceList = React.createRef();
    this.refresh = this.refresh.bind(this);
  }

  symbolsUpdated = s => {
    this.setState({
      symbols: [...this.state.symbols, s]
    });
  };

  refresh() {
    this.priceList.current.refresh();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SymbolPicker
            updateSymbols={this.symbolsUpdated}
            refresh={this.refresh}
          />
          <PriceList props={this.state.symbols} ref={this.priceList} />
        </header>
      </div>
    );
  }
}

export default App;
