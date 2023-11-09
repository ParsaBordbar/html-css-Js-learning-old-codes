import El from '../utiles/ElementMaker'

const Section = () => {
    const rowNumber = 1;
    const table = El({
        element:'div',
        className: "table-it-self",
        id: 'my-id',
        children: [
                El({
                    element: 'table',
                    id:'theTable',
                    class:'table-elements',
                    children: [
                        El({
                            element: 'tr',
                            children:[
                                El({
                                    element:'th',
                                    innerText:'Name'
                                }),
                                El({
                                    element:'th',
                                    innerText:'Last Name'
                                }),
                            ]
                        }),
                        El({
                            element: 'tr',
                            id: rowNumber,
                            children:[
                                El({
                                    element:'th',
                                    id: 'name',
                                    children: [
                                        El({
                                            element:'input',
                                            type:'name',
                                            label:'Enter your name',
                                            id:'inputId',
                                            value:'Parsa'
                                        })
                                    ]
                                }),
                                El({
                                    element:'th',
                                    id: 'lastName',
                                    children: [
                                        El({
                                            element:'input',
                                            type:'text',
                                            label:'Enter your name',
                                            id:'inputId',
                                            value:'Bordbar'
                                        })
                                    ]
                                }),
                            ]
                        })
                    ]
                })
        ]
    })
    return table;
}
export  {Section};