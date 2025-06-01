document.getElementById("hindi").innerHTML="<div style='border:1px solid orange;border-radius:20px;color:gold;height:90px;width:99%;padding:;'>         <img src='/actor/bollywood.jpg' style='border:1px solid white; border-radius:50%;height:90px;width:90px;' onclick='bollywood()'><b style='position:relative;top:-40px;left:50px;outline:1px solid red;border-radius:20px;border:1px solid gold;padding:10px;' onclick='bollywood()'>PUNJABI</b>         <img style='position:relative;top:-20px;left:150px;outline:1px solid red;border-radius:50%;border:1px solid gold;padding:px;width:50px;height:50px;' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvU1a509pduQk_sWPAkkryIsQS7TAHc5kdxQ&usqp=CAU' onclick='srch()'>";
function bollywood(){
        location.assign("/spark/bollywood.html");
}
    function srch(){
        location.assign("/spark/search.html");
    }


document.getElementById("bollywood").innerHTML="<div id='gallery' class='gallery'>    <!--2025-->	                                                                      <div class='image-item'>            <img src='/images/jaat_poster.png' alt='jaat' onclick='jaat();'> <p>JAAT <BR>(2025)</p>        </div>	                       <div class='image-item'>            <img src='/images/sikandar_poster.png' alt='sikandar' onclick='sikandar();'> <p>SIKANDAR<br>(2025)</p>   </div>   </div>";
   
