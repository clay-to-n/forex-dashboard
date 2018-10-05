import React, { Component } from "react";
import "./App.css";

const apiKey = "wLgLNY6dMO7TiUUnk5vIeMsfRVFETtx7";
const getQuotesUrl = "https://forex.1forge.com/1.0.3/quotes?pairs=";

class SymbolPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      symbols: [],
      prices: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.symbols !== this.state.symbols && nextProps.symbols) {
      let symbolsQuotes = "";
      nextProps.symbols.map(s => {
        symbolsQuotes += s + ",";
      });

      symbolsQuotes = symbolsQuotes.substr(0, symbolsQuotes.length - 1);

      // Fetch URL with each of these symbols, then fill in this.state.prices

      // this.state.symbols.map((s) => {
      //   fetch(getQuotesUrl + ).then(res => res.json()).then(
      //     result => {
      //     }
      //   );
      // })
    }

    console.log("New symbols: " + JSON.stringify(nextProps));
  }

  render() {
    return (
      <div>
        {this.state.symbols
          ? this.state.symbols.map(s => {
              return <div>{JSON.stringify(s)}</div>;
            })
          : "No symbols selected."}
      </div>
    );
  }
}

export default SymbolPicker;
