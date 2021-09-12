function TransferMoney(){
            
    var str = document.getElementById("SenderName").value;
    var SenderName = str.toLowerCase();

    var str2 = document.getElementById("RecieverName").value;
    var RecieverName = str2.toLowerCase();
    
    var Amount = parseInt(document.getElementById("AmountToSend").value);
   
   var SenderAccount = SenderName + "BankBalance";
   var AmountToSend =parseInt(document.getElementById(SenderAccount).innerHTML);
   
    if (Amount > AmountToSend) 
    {
        swal("Oops!", "Insufficient Balance.", "warning");
    }
    else 
    {
        //Changes in bank account of Sender and Reciever.
        var RecieverAccount = RecieverName + "BankBalance";
        var AmountInReciever = parseInt(document.getElementById(RecieverAccount).innerHTML) + Amount;
        var AmountInSender = parseInt(document.getElementById(SenderAccount).innerHTML) - Amount;

       document.getElementById(SenderAccount).innerHTML = AmountInSender;
       document.getElementById(RecieverAccount).innerHTML = AmountInReciever;

       swal("Done!", "Transaction Successful.", "success");

        // Transaction History Record 
       var createPTag = document.createElement("li");
       var textNode = document.createTextNode(`Rs ${Amount} has been transferred from 
       ${SenderName}'s account to ${RecieverName}'s account on ${Date()}.`);
       createPTag.appendChild(textNode);
       var element = document.getElementById("transaction-history-body");
       element.insertBefore(createPTag, element.firstChild);
    }
}