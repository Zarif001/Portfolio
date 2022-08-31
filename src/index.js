import './styles/style.css'
import './script/index.js'
import './script/script.js'
import './libs/bootstrap.min.css'
import './libs/bootstrap.min.js'
import 'axios'

// Images

    async function getComponent() {
        const element = document.createElement('img');
        const { default: _ } = await import('lodash');
            element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        return element;
    }
    
    
getComponent().then((component) => {
    document.body.appendChild(component);
});
