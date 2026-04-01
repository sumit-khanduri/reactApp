
// const h2 = document.createElement('h2');
// h2.innerText = 'hey';
// document.querySelector('#root').append(h2)

// import React from "react";

const container = React.createElement('div',
    {className: 'container', key:1},[
        React.createElement('section', {key:1},
            [
                React.createElement('p',
                    {key:1},
                    'The library for web and native user interfaces'),
                React.createElement('img',{
                    key: 2, style:{width:'200px',height:'200px'},
                    src:'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'})
            ]),
        React.createElement('section', {key:2},
            [
                React.createElement('p',
                    {key:1},
                    'This is the FORM to test'),
                React.createElement('img',{
                    key: 2, style:{width:'200px',height:'200px'},
                    src:'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'})
            ])
    ])


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(container)



