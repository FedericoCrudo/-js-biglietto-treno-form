var element = document.getElementById('richiedi');
  element.addEventListener('click',
  function() {
    
    var nome=document.getElementById("nome").value;
    var km=document.getElementById("km").value;
    var eta=document.getElementById("eta").value;
    var costo=0.21;
    var carrozza=Math.floor(Math.random() * 9) + 1;
    var codicecp=Math.floor(Math.random() * 99999) +90000;
    var pbase=(km*costo).toFixed(2);
    var sconto20=pbase*0.20;
    var sconto40=pbase*0.40;
    var offerta="";
    var cbiglietto="";
    //controllo campi
    if(nome==""||km=="" || eta==""){
         carrozza='';
         codicecp='';
        document.getElementById('message').innerHTML= '<span id="text"><span></i>';
        document.getElementById('text').innerHTML= '* Si prega di compilare tutti i campi';
        
    }
    else{
       
        document.getElementById('message').innerHTML= '';
        if(eta=="minorenne"){   
             cbiglietto=pbase-sconto20;
             console.log(cbiglietto);
            offerta="Sconto Minorenne (-20%)";

        }
        // over 65
        else if(eta=="over65"){
            cbiglietto=pbase-sconto40;
             console.log(cbiglietto);
            offerta="Sconto Silver (-40%)";
        }
        // dai 17 ai 68
        else{
            cbiglietto=pbase;
             console.log(cbiglietto);
            offerta="Tarriffa Standard";
        }
            
        
    }
    //caricamento dati
    document.getElementById("left-information").innerHTML+='<span>'+nome+'</span>';  
    document.getElementById("data").innerHTML+='<td>'+offerta+'</td>';  
    document.getElementById("data").innerHTML+='<td>'+carrozza+'</td>';  
    document.getElementById("data").innerHTML+='<td>'+codicecp+'</td>';  
    document.getElementById("data").innerHTML+='<td>'+cbiglietto+'</td>';  
    }    
);         
   

