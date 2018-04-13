import * as React from 'react';
import * as ReactDOM from 'react-dom';

class MainPage extends React.Component {

    render() {
        return (
            <div style={styles.div}>
                <span style={styles.span}>
                    Hello TypeScript Electron!
                </span>
            </div>
        );
    }
}

const styles: {[key: string]: React.CSSProperties} = {
    div: { display: 'flex', justifyContent: 'center' },
    span: { fontSize: 30, marginTop: 200, color: '#c00' }
}

ReactDOM.render(<MainPage/>,
    document.getElementById('react-container'));

