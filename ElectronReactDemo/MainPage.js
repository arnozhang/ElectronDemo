const React = require('react');
const ReactDOM = require('react-dom');

class MainPage extends React.Component {

    render() {
        let message = 'Hello React Electron!';
        let span = React.createElement(
            'span', {style: styles.span}, message);
        return React.createElement(
            'div', {style: styles.div}, span);
    }
}

const styles = {
    div: { display: 'flex', justifyContent: 'center' },
    span: { fontSize: 60, marginTop: 200 }
}

ReactDOM.render(
    React.createElement(MainPage, null),
    document.getElementById('react-container'));

