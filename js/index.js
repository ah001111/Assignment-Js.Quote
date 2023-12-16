








function generateQuote() {


    var quote = [ document.getElementById('quoteOutput').innerHTML=`The best revenge is massive success.
   <br>--Frank Sinatra</br>`,
      document.getElementById('quoteOutput').innerHTML=`Do not take life too seriously. You will not get out alive.
    <br>--Elbert Hubbard</br>`,
    
     document.getElementById('quoteOutput').innerHTML=`Resentment is like drinking poison and waiting for your enemies to die.
    <br>--Nelson Mandela</br>`,
    
    document.getElementById('quoteOutput').innerHTML=`You miss 100% of the shots you don't take.
    <br>--Wayne Gretzy</br>`,
    
     document.getElementById('quoteOutput').innerHTML=`It's not what happens to you, but how you react to it that matters.
    <br>--Epictetus</br>`];
    

    
    var x = Math.random()*5;
    var y = Math.floor(x);
    document.getElementById('quoteOutput').innerHTML=quote[y];









}












