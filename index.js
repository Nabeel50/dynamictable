function output(){
    document.getElementById('output').innerHTML=''
let start= parseInt(document.getElementById('startnumber').value);
let end=parseInt(document.getElementById('endnumber').value);
let table=parseInt(document.getElementById('tablenumber').value);

for (let x =  start ; x <= end; x++)
{document.getElementById('output').innerHTML+=
table + "x"+ x+ "=" + table*x + "<br>"}
}
let num=0;
function resert() {
    num=0;
    document.getElementById('output').innerHTML=''

}