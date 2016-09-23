const React = require('react');

const FillerText = require('./FillerText');

// previous format...

// class Webage extends React.Component {
//   render(){
//     React.createElement('h1', {}, ["The world's coolest webpage", FillerText, FillerText])
//   }
// }

// JSX format...

class Webpage extends React.Component {
  render() {
    return (
      <div>
        <h1>The world's coolest webpage</h1>
        <FillerText />
        <FillerText />
      </div>
    );
  }
}

module.exports = Webpage;
