//pin generate
const generate_pin_btn = document.getElementById('generate_pin_btn')
generate_pin_btn.addEventListener('click',() =>{
   min =0
   max =9999;
  const pinCount =  ("0" + Math.floor(Math.random() * (max - min + 1)) + min).substr(-4);
  document.getElementById('generate_pin').innerHTML= pinCount;
   });
   //submit velue
   function submit_kyeboard(kye_number){
    const num = parseInt(kye_number);
    document.getElementById('submitOutput').value += num;
}
//pin submit
    const submit_btn = document.querySelector('.submit-btn');
        submit_btn.addEventListener('click', function () {
            const generate_pin = document.getElementById('generate_pin').innerHTML;
            const parseInt_generate_pin = parseInt(generate_pin);
            const submitOutput = document.getElementById('submitOutput').value;
           
           if (parseInt_generate_pin == submitOutput  && submitOutput.length > 0) {
              document.getElementById('pin_match').style.display = 'block';
              document.getElementById('pin_not_match').style.display = 'none';
            }
            else if (parseInt_generate_pin != submitOutput && submitOutput.length > 0) {
                   
                document.getElementById('pin_not_match').style.display = 'block';
                document.getElementById('pin_match').style.display = 'none';

                const try_left = document.getElementById('try_left').innerHTML;
                const tryLeft =  parseFloat(try_left);
                    if (tryLeft <= 3  && tryLeft > 1) {
                        document.getElementById('try_left').innerHTML = tryLeft - 1;
                    }
                    else if (tryLeft == 1) {
                        const submit_btn = document.getElementById('submit-btn');
                        submit_btn.setAttribute('disabled', 'disabled');
                        submit_btn.style.backgroundColor = 'red';
                        document.getElementById('try_left').innerHTML = '0';
                    }          
            }  
            
        });

  
 

//backSpace
  function back_space() {
      var back_space = document.getElementById('submitOutput').value;
      var output = back_space.toString(back_space);
        output= output.slice(0,-1);
        document.getElementById("submitOutput").value =output;
  }

function clear_submit_number(){ 
    document.getElementById("submitOutput").value = "" ;
};



