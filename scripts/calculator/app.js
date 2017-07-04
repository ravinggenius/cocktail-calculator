const h = React.createElement;

const App = () => h('p', {}, 'Hello World!');

ReactDOM.render(
    h(App, {}, null),
    document.getElementById('calculator-root')
);
