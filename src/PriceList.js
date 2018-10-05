import React, { Component } from "react";
import "./App.css";

const apiKey = "wLgLNY6dMO7TiUUnk5vIeMsfRVFETtx7";
const getQuotesUrl = "https://forex.1forge.com/1.0.3/quotes?pairs=";

class SymbolPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: []
    };
    this.refresh = this.refresh.bind(this);
  }

  getPrices(symbols) {
    let symbolsQuotes = "";
    symbols.forEach(s => {
      symbolsQuotes += s + ",";
    });

    symbolsQuotes = symbolsQuotes.substr(0, symbolsQuotes.length - 1);

    let url = getQuotesUrl + symbolsQuotes + "&api_key=" + apiKey;

    fetch(url).then(res => res.json()).then(result => {
      let prices = [];
      result.forEach(i => {
        prices = [...prices, { symbol: i.symbol, price: i.price }];
      });

      this.setState({
        prices: prices
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    this.getPrices(nextProps.props);
  }

  refresh() {
    if (this.state.prices.length > 0) {
      this.getPrices(this.state.prices.map(p => p.symbol));
    }
  }

  render() {
    return (
      <div className="prices-list">
        {this.state.prices.map((s, index) => {
          return <div key={index}>{s.symbol}: {s.price}</div>;
        })}
      </div>
    );
  }
}

export default SymbolPicker;
