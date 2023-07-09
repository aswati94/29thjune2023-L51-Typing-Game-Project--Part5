// $(document).ready(function() {
//     // Keydown event for physical keyboards
//     $(document).keydown(function(event) {
//       var key = event.key.toUpperCase();
//       var button = $('#keyboard button:contains(' + key + ')');
//       button.addClass('active');
//     });
  
//     // Touchstart event for touchscreen devices
//     $('#keyboard button').on('touchstart', function(event) {
//       event.preventDefault();
//       var key = $(this).text().toUpperCase();
//       $(this).addClass('active');
//     });
  
//     // Keyup event for physical keyboards
//     $(document).keyup(function(event) {
//       var key = event.key.toUpperCase();
//       var button = $('#keyboard button:contains(' + key + ')');
//       button.removeClass('active');
//     });
  
//     // Touchend event for touchscreen devices
//     $('#keyboard button').on('touchend', function(event) {
//       event.preventDefault();
//       $(this).removeClass('active');
//     });
//   });
let saveRegistrationInfo= ()=>{
    //console.timeLog('SWATI');
    //object.method()
    let fn = document.getElementById("first_name").value;
    let ln = document.getElementById("last_name").value;
    let dur = document.querySelector(".s_myselect").value;

    console.log(fn);
    console.log(ln);

    window.localStorage.setItem('first_name',fn);
    window.localStorage.setItem('last_name',ln);
    window.localStorage.setItem('duration',dur);
    // To reload Page in JavaScript
    window.location.reload();
}
let logout= ()=>{
    // To clear/Logout Page in JavaScript
    window.localStorage.clear();
    // To reload Page in JavaScript
    window.location.reload();
}
let playSound= (e)=>{
    // let a = document.querySelector('.s_a');
    // console.log(a.classList.add('s_active'));
    //console.log('Good Morning');
    let at = document.querySelector('.s_audio');
    at.play();

}

let start = () => {
    //Set the date we are counting down to 
    var nextTime = new Date().getTime();
    nextTime = new Date(nextTime + ( localStorage.getItem('duration')*60*1000));    //    Add 1 hour
  
    //    Create a new date object with the specified datetime
    const datetime = new Date(nextTime);
  
    //    Get the Unix timestamp by dividing the milliseconds
  
    const unixTimestamp = Math.floor(datetime.getTime() / 1000)*1000;
    console.log(unixTimestamp);
  
     //    setInterval() is a built in function.
    setInterval(()=>{                           
      //    Get today's date and time.
      var now = new Date().getTime();
      console.log('Next Time',unixTimestamp);
      console.log('Current Time',now);
  
  
       // Find the distance between now and the count down date
      var distance = unixTimestamp - now;
  
      // Time calculations for days, hours, minutes and seconds
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Display the result in the element with id="demo"
      document.querySelector(".s_myduration").innerHTML = minutes + "m " + seconds + "s ";
  
      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.querySelector(".s_myduration").innerHTML = "EXPIRED";
      }
    },1000)                                   
  
  
  }

//    ()(); IIFE 
// On Page Load
(()=>{
    let fn = window.localStorage.getItem('first_name');
    let ln = window.localStorage.getItem('last_name');
    console.log('Page Loaded Successfully');
    //Get a reference to the modal element
    var modal = document.getElementById('registrationModal');

    //create a Bootstrap modal instance using the modal element
    var modalInstance = new bootstrap.Modal(modal);

    //call the 'show' method on the modal instance to launch the modal
    console.log(fn);
    if(fn === null){
        //True
        modalInstance.show();
    }
    //check if the local storage is set or not
    if(fn !== null){
        document.querySelector('.s_welcome').innerHTML = 'Welcome '+ fn + " "+ln+'<button class="btn btn-sm btn-danger ms-4" onclick="logout()">Logout</button>';
    }
    //keypress sound play
    document.addEventListener('keypress',(e)=>{
        console.log('->',e.keyCode);
        if(e.keyCode == 97){
            let a = document.querySelector('.s_a');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
        }

          if(e.keyCode == 113) {

            let a = document.querySelector('.s_q');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
          }

          if(e.keyCode == 122) {

            let a = document.querySelector('.s_z');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
          }

          if(e.keyCode == 119) {

            let a = document.querySelector('.s_w');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_ring').style.display = 'block';
          }

          if(e.keyCode == 115) {

            let a = document.querySelector('.s_s');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_ring').style.display = 'block';
          }

          if(e.keyCode == 120) {

            let a = document.querySelector('.s_x');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_ring').style.display = 'block';
          }

          if(e.keyCode == 101) {

            let a = document.querySelector('.s_e');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_middle').style.display = 'block';
          }

          if(e.keyCode == 100) {

            let a = document.querySelector('.s_d');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_middle').style.display = 'block';
          }

          if(e.keyCode == 99) {

            let a = document.querySelector('.s_c');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_middle').style.display = 'block';
          }

          if(e.keyCode == 114) {

            let a = document.querySelector('.s_r');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_index').style.display = 'block';
          }

          if(e.keyCode == 102) {

            let a = document.querySelector('.s_f');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_index').style.display = 'block';
          }

          if(e.keyCode == 118) {

            let a = document.querySelector('.s_v');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_index').style.display = 'block';
          }

          if(e.keyCode == 116) {

            let a = document.querySelector('.s_t');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_thumb').style.display = 'block';
          }

          if(e.keyCode == 103) {

            let a = document.querySelector('.s_g');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_thumb').style.display = 'block';
          }

          if(e.keyCode == 98) {

            let a = document.querySelector('.s_b');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_thumb').style.display = 'block';
          }

          if(e.keyCode == 121) {

            let a = document.querySelector('.s_y');
            console.log(a.classList.add('a_active'));
            document.querySelector('.r_thumb').style.display = 'block';
          }

          if(e.keyCode == 104) {

            let a = document.querySelector('.s_h');
            console.log(a.classList.add('a_active'));
            document.querySelector('.r_thumb').style.display = 'block';
          }

          if(e.keyCode == 110) {

            let a = document.querySelector('.s_n');
            console.log(a.classList.add('a_active'));
            document.querySelector('.r_thumb').style.display = 'block';
          }

          if(e.keyCode == 117) {

            let a = document.querySelector('.s_u');
            console.log(a.classList.add('a_active'));
            document.querySelector('.r_index').style.display = 'block';
          }

          if(e.keyCode == 106) {

            let a = document.querySelector('.s_j');
            console.log(a.classList.add('a_active'));
            document.querySelector('.r_index').style.display = 'block';
          }

          if(e.keyCode == 109) {

            let a = document.querySelector('.s_m');
            console.log(a.classList.add('a_active'));
            document.querySelector('.r_index').style.display = 'block';
          }

          if(e.keyCode == 105) {

            let a = document.querySelector('.s_i');
            console.log(a.classList.add('a_active'));
            document.querySelector('.r_middle').style.display = 'block';
          }

          if(e.keyCode == 107) {

            let a = document.querySelector('.s_k');
            console.log(a.classList.add('a_active'));
            document.querySelector('.r_middle').style.display = 'block';
          }

          if(e.keyCode == 111) {

            let a = document.querySelector('.s_o');
            console.log(a.classList.add('a_active'));
            document.querySelector('.r_ring').style.display = 'block';
          }

          if(e.keyCode == 108) {

            let a = document.querySelector('.s_l');
            console.log(a.classList.add('a_active'));
            document.querySelector('.r_ring').style.display = 'block';
          }

          if(e.keyCode == 112) {

            let a = document.querySelector('.s_p');
            console.log(a.classList.add('a_active'));
            document.querySelector('.r_pinky').style.display = 'block';
          }
        //document  = whole website
        playSound();
    })

    document.addEventListener('keyup', (e)=>{
        //console.log(e);
        var elements = document.getElementsByClassName('a_active');
        //  var elements = document.getElementsByClassName('s_left_pinky');
        for (var i = 0; i < elements.length; i++){
           elements[i].classList.remove('a_active');
         // elements[i].style.display = "none";

        }

      //  document.querySelector('.s_left_pinky').style.display = 'none';

      });

      var s = '';
      for(var i =1; i<=60; i++)
      {
         s = s + `<option value="${i}">${i}</option>`;
      }
      
      console.log(s);
      console.log(document.querySelector('.s_myselect'));
      document.querySelector('.s_myselect').innerHTML = s;
      document.querySelector('.s_myduration').innerHTML = localStorage.getItem('duration') === null ?'': localStorage.getItem('duration')+':00';
      
})();
