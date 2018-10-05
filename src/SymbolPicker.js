import React, { Component } from "react";
import "./App.css";

const apiKey = "wLgLNY6dMO7TiUUnk5vIeMsfRVFETtx7";
const getSymbolsUrl = "https://forex.1forge.com/1.0.3/symbols?api_key=" +
  apiKey;

class SymbolPicker extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false, symbols: null, selected: null };
    this.addSymbol = this.addSymbol.bind(this);
  }

  componentDidMount() {
    fetch(getSymbolsUrl).then(res => res.json()).then(
      result => {
        console.log(result);

        this.setState({
          isLoaded: true,
          selected: result[0],
          symbols: result
        });
      },
      error => {
        console.log("Loaded Error!");
      }
    );
  }

  addSymbol() {
    this.props.updateSymbols(this.state.selected);
    this.setState({
      symbols: [...this.state.symbols, this.state.selected]
    });
  }

  render() {
    return (
      <div className="App">
        <p>Select Forex symbols below to track prices.</p>
        {this.state.isLoaded
          ? <div>
              <select
                name="picker"
                onChange={s => this.setState({ selected: s.target.value })}
              >
                {this.state.symbols.map((s, index) => {
                  return (
                    <option key={index} value={s}>
                      {s}
                    </option>
                  );
                })}
              </select>
              <button onClick={this.addSymbol}>
                Add Symbol
              </button>
            </div>
          : "Loading symbols..."}
      </div>
    );
  }
}

export default SymbolPicker;
