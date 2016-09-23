const React = require('react');

// Previous format...

// class FillerText extends React.Component {
//   render(){
//     React.createElement('p', {}, 'I am a filler text. I can be used to fill your screen. Amazing!')
//   }
// }

// React JSX...

class FillerText extends React.Component {
  render() {
    return (
      <p>I am a filler text. I can be used to fill your screen. Amazing!</p>
    );
  }
}

module.exports = FillerText;
