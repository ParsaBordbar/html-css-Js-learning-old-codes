import './style.css'
import App from "./src/App"
import El from './src/utiles/ElementMaker'
import {Section} from "./src/table"

const root = document.getElementById('app')
root.appendChild(App())

//List to store cells as Objs
const cellList = []

let rowNumber= 1;
const tableEl = document.getElementById('theTable');

//Making NEW Rows in two Cell Format
const makeNewRow = (rowID) => {
  const newRow =El({
    element: 'tr',
    id: +rowID+1,
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
                    value:''
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
                    value:''
                })
            ]
        }),
    ]
})
return newRow;
}

//Making NEW ROWS Using Objs From List
const LoadBackName = (arr,index) => {
    const newRow =
    El({
        element:'th',
        id: 'name',
        children: [
            El({
                element:'input',
                type:'name',
                label:'Enter your name',
                id:'inputId',
                value: arr[index].value
            })
        ]
    })
  return newRow;
  }

const LoadBackLastName = (arr,index) => {
const newRow =
        El({
            element:'th',
            id: 'lastName',
            children: [
                El({
                    element:'input',
                    type:'name',
                    label:'Enter your name',
                    id:'inputId',
                    value: arr[index].value
                })
            ]
        })
return newRow;
}

const arrayBackFromLocal = JSON.parse(localStorage.getItem("cells"));
const baseEl = document.getElementById('1');

if(arrayBackFromLocal && arrayBackFromLocal.length > 0){
    const createdRowList = [];
    tableEl.removeChild(document.getElementById('1'));
    arrayBackFromLocal.forEach((item,index,arr) =>{
    const tr = document.createElement('tr')
    tr.id = arr[index].rowID
    tableEl.className = 'make-them-row'
        if(arr[index].colID === 'name'){
            createdRowList.push(LoadBackName(arr, index));
            tr.appendChild(LoadBackName(arr, index))
        }
        else{
            createdRowList.push(LoadBackLastName(arr, index));
            tr.appendChild(LoadBackLastName(arr, index));
        }
        tableEl.appendChild(tr);
            console.log(arr[index].colID);
        console.log('createdRowList',createdRowList);

    })
}
// console.log('createdRowList Item',createdRowList.item);




document.addEventListener('keypress',event =>{
    let colID = document.activeElement.parentElement.id;
    let rowID = document.activeElement.parentElement.parentElement.id;
    const valueSave = document.activeElement.value;
    if(event.key === 'Enter'){
        if(colID === 'name'){
            let next = document.getElementById(rowID).children.lastName.children.inputId.focus()
        }
        else if(document.getElementById(+rowID + 1)){
            let next = document.getElementById(+rowID + 1).children.name.children.inputId.focus()
        }
        else{
            tableEl.appendChild(makeNewRow(rowID));
            root.appendChild(tableEl);
            let next = document.getElementById(+rowID + 1).children.name.children.inputId.focus()
        }
        
        const cell ={
            rowID: rowID,
            colID: colID,
            value: valueSave
        }
        
        if(cellList && cellList.length > 0){
            cellList.forEach((element) =>{
                if((element.colID == colID) && (element.rowID == rowID)){
                    element.value = valueSave;
                    console.log('elements value', element.value);
                }
            })
        }
        cellList.push(cell)
        const uniqueCell = cellList.filter((cell, index) => {
            return index === cellList.findIndex((o) => {
                if(o.colID === cell.colID && o.rowID === cell.rowID)
                    return o.colID === cell.colID;
            });
        });
        console.log(cellList);
        console.log('Filtered',uniqueCell);
        localStorage.setItem('cells',JSON.stringify(uniqueCell));
        console.log('Array Back from Local:', arrayBackFromLocal);

        
        
        console.log('MergeData:', arrayBackFromLocal);
    }
    if(arrayBackFromLocal && arrayBackFromLocal.length > 0){
        const mergeData = [...arrayBackFromLocal, uniqueCell]
        localStorage.setItem('cells', JSON.stringify(mergeData))
    }
})
