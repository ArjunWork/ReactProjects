function customRender(parameter,placeHolder){
    /*const domElement = document.createElement(parameter.type);
    domElement.innerHTML = parameter.children;
    domElement.setAttribute('href',parameter.props.href);
    domElement.setAttribute('target',parameter.props.target);

    placeHolder.appendChild(domElement);*/

    const domElement = document.createElement(parameter.type);
    domElement.innerHTML = parameter.children;

    for (const prop in parameter.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop,parameter.props[prop])
    }

    placeHolder.appendChild(domElement);
}

const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank',
    },
    children:'Click me to visit google'
}


let mainContainer = document.getElementById("root");

customRender(reactElement,mainContainer);