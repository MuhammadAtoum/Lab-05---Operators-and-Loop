var order = prompt("what do you want (100$ Dollars) or (500$ Dollars) ??");


while(order !== "100" && order !== "500")
{
    order = prompt("what do you want (100$ Dollars) or (500$ Dollars) please choose?");
}

var ATMOrder = '';

if(order == "100")
{
    ATMOrder = '<img src="100dollars.jpg"/>';
}
else if(order == "500")
{
    ATMOrder = '<img src="500dollars.jpg"/>';
}

var numofDLR = prompt("what is the number of dollars?");

var result = '';
for(var i= 0; i<numofDLR; i++)
{
    result = result + ATMOrder;
}

document.write(result);
