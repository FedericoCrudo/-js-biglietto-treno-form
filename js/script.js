var element = document.getElementById('richiedi');
  element.addEventListener('click',
  function() {
    
    var nome=document.getElementById("nome").value;
    var km=document.getElementById("km").value;
    var eta=document.getElementById("eta").value;
    var costo=0.21;
    var carrozza=Math.floor(Math.random() * 9) + 1;
    var codicecp=Math.floor(Math.random() * (9999 )+90000);
    var pbase=(km*costo);
    var sconto20=pbase*0.20;
    var sconto40=pbase*0.40;
    var offerta="";
    var cbiglietto=""
    //controllo campi
    if(nome=="" || km=="" || eta==""){
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
            
         //caricamento dati
    document.getElementById("nomeP").innerHTML=nome;  
    document.getElementById("offerta").innerHTML=offerta;  
    document.getElementById("carrozza").innerHTML=carrozza;  
    document.getElementById("codicecp").innerHTML=codicecp;  
    document.getElementById("costo").innerHTML=cbiglietto.toFixed(2);   
    document.getElementById("box-biglietto").className='show box m_top_10  pd_20';   
    }
  
    }    
);   
// sezione annulla
var element = document.getElementById('annulla');
  element.addEventListener('click',
  function() {
    document.getElementById("nome").value='';
    document.getElementById("km").value='';
    document.getElementById("eta").value='';
    document.getElementById("nomeP").innerHTML='';  
    document.getElementById("offerta").innerHTML='';  
    document.getElementById("carrozza").innerHTML='';  
    document.getElementById("codicecp").innerHTML='';  
    document.getElementById("costo").innerHTML='';  
    document.getElementById("box-biglietto").className='hidden';   
    }    
);      
   

