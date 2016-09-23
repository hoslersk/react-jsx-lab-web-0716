const React = require('react');

// Previous format...

// class RegistrationForm extends React.Component {
//   render(){
//     React.createElement('form', {}, [
//       React.createElement('input', {type: 'text'}, "Text"),
//       React.createElement('input', {type: 'password'}, "Password").
//       React.createElement('button', {type: 'submit'}, "Submit")
//     ])
//   }
// }

// JSX format...

class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text" />
        <input type="password" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}


module.exports = RegistrationForm;
