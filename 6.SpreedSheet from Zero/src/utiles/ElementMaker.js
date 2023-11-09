const EL = (options) => {
    const el = document.createElement(options.element)
    for (const key in options) {
        if(key !== 'element' && key !== 'children') 
            el[key] = options[key]
    }
    if(options.children){
        if(Array.isArray(options.children)){
            options.children.forEach(element => {
                el.append(element)
            });
        }
        else el.append(options.children)
    }
    return el;
}
export default EL;