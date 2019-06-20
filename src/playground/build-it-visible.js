class VisibilityToggle extends React.Component {
   
    constructor(props) {
        super(props);
        this.handleToggleVisiblity = this.handleToggleVisiblity.bind(this)
        this.state = {
            visibility: false
        };
    }
    

    handleToggleVisiblity() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    
    }

    render() {
       return (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisiblity}>
            {this.state.visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {this.state.visibility && (
                <div>
                    <p>Hey, these are some details</p>
                </div>
            )}
        </div>
    );
    }
}

    ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

    


// const toggleVisibility = () => {
//     visibility = !visibility;
//     render()
// };

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//             {visibility ? 'Hide Details' : 'Show Details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Hey, these are some details</p>
//                 </div>
//             )}
//         </div>

//     );
//     ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();





// const app = {
//     title: "Visibility Toggle",
//     toggleState: false,
//     buttonDetails: "Show Details"
// };

// const toggleDetails = () => {
//     if (app.toggleState) {
//         app.buttonDetails;
//         renderToggleTemplate();
//     }
//     else {
//         app.buttonDetails = "Hide Details";
//         renderToggleTemplate();
//     }
// }
// const appRoot = document.getElementById('app');
// const renderToggleTemplate = () => {
// const template = (
//     <div>
//         <h1>{app.title}</h1>
//         <button onClick={toggleDetails}>{app.buttonDetails}</button>
//     </div>
// );
// ReactDOM.render(template, appRoot);

// }
// renderToggleTemplate();
