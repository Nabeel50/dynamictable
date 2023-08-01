function output(){
    document.getElementById('output').innerHTML=''
let start=document.getElementById('startnumber').value;
let end=document.getElementById('endnumber').value;
let table=document.getElementById('tablenumber').value;

for (let x = start; x <= end; x++)
{document.getElementById('output').innerHTML+=
table + "x"+ x+ "=" + table*x + "<br>"}
}
let num=0;
function resert() {
    num=0;
    document.getElementById('output').innerHTML=''

}