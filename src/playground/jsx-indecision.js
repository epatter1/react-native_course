console.log('App.js is running!');

const app = {
    title: "Indecision App",
    subtitle: "Indecision is a decision",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderOptions();
    }

};

const onRemoveAll = () => {
    app.options = [];
    renderOptions();
};

const onMakeDecision = () => {
  const randNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randNum];
  alert(option);
};

// JSX - Javascript XML
const appRoot = document.getElementById('app');

const numbers = [55, 101, 4700];
const items = ['One', 'Two', 'Three'];

const renderOptions = () => {

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do?</button>        
        <button onClick={onRemoveAll}>Remove All</button>
        {
            // numbers.map((number) => {
            //     return <p key={number}>Number: {number}</p>
            // })
        }
        <ol>
            {
                app.options.map((option) => <li key={option}>Item: {option}</li>)
            }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add Option</button>
        </form>
    </div>
    );

    ReactDOM.render(template, appRoot);
};

renderOptions();