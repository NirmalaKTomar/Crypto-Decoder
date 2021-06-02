document.getElementById("encrypt").onclick = function(){
  document.getElementById("ans1").style.display = "none";
  document.getElementById("ans2").style.display = "none";


  var m = document.getElementById("msg").value;
  var key= document.getElementById("key").value;
  
  if(m==="")
  {     
      document.getElementById("ans2").innerHTML = "Empty input";
      document.getElementById("ans2").style.display = "block";
  }
  else
  {

  var output='';
  var encoded = '';
  var alph = 'abcdefghijklmnopqrstuvwxyz';
  var offset = 0;
  for (let i=0;i<m.length;i++)
  { 
  
  
  
     if(alph.indexOf(m[i])==-1)
          { 
       
          output = m[i];
            offset += -1;
            encoded += output;
            continue;
          }
         

      if( alph.indexOf(m[i])  > alph.length-(alph.indexOf(key[(i + offset) % key.length])) - 1 ) {
    
                 output = alph[ ((alph.indexOf(m[i]))+ (alph.indexOf(key[(i + offset) % key.length]))) % 26];
             }
       else{
                 output = alph[ ((alph.indexOf(m[i]))+ (alph.indexOf(key[(i + offset) % key.length]))) ];
                
         
     }
     encoded += output;
    }
    document.getElementById("ans1").innerHTML = "Encypted message is "+encoded;
    document.getElementById("ans1").style.display = "block";
 }

 };
//----------------------------------------------------------------------------
 document.getElementById("decrypt").onclick = function(){
 document.getElementById("ans1").style.display = "none";
 document.getElementById("ans2").style.display = "none";

  		
        var m = document.getElementById("msg").value;
        var key= document.getElementById("key").value;
        
        if(m=== "")
        {     
            document.getElementById("ans1").innerHTML = "Empty input";
            document.getElementById("ans1").style.display = "block";
        }
        else
        {
     
        var output='';
        var decoded = '';
        var alph = 'abcdefghijklmnopqrstuvwxyz';
        var offset = 0;
      	for (let i=0;i<m.length;i++)
        { 
          
    if(alph.indexOf(m[i])==-1)
       { 
    
       output = m[i];
         offset += -1;
         decoded += output;
         continue;
       }
         
         
      if( (alph.indexOf(m[i])) > alph.length-(alph.indexOf(key[(i + offset) % key.length])) - 1) {
    
             
               output = (alph.indexOf(m[i]))>=(alph.indexOf(key[(i + offset) % key.length]))?alph[ ((alph.indexOf(m[i]))-(alph.indexOf(key[(i + offset) % key.length]))) % 26]:alph[ ((alph.indexOf(m[i]))- (alph.indexOf(key[(i + offset) % key.length]))+26) % 26];
             }
       else{
        output = (alph.indexOf(m[i]))>=(alph.indexOf(key[(i + offset) % key.length]))?alph[ ((alph.indexOf(m[i]))-(alph.indexOf(key[(i + offset) % key.length]))) ]:alph[ ((alph.indexOf(m[i]))-(alph.indexOf(key[(i + offset) % key.length]))+26)];
              

                 }
           decoded += output;
          }

          document.getElementById("ans2").innerHTML = "Decypted message is "+decoded;
          document.getElementById("ans2").style.display = "block";
       }

    };
