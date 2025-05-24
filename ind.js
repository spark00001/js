document.getElementById("ind").innerHTML="<div style='border:1px solid orange;border-radius:20px;color:gold;height:90px;width:99%;padding:;'>         <img src='/actor/ind.png' style='border:1px solid white; border-radius:50%;height:90px;width:90px;' onclick='indlivetv()'><b style='position:relative;top:-40px;left:50px;outline:1px solid red;border-radius:20px;border:1px solid gold;padding:10px;' onclick='indlivetv()'>INDIAN TV</b>         <img style='position:relative;top:-20px;left:150px;outline:1px solid red;border-radius:50%;border:1px solid gold;padding:px;width:50px;height:50px;' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvU1a509pduQk_sWPAkkryIsQS7TAHc5kdxQ&usqp=CAU' onclick='srch()'>";
 
function indlivetv(){
        location.assign("/spark/indianlivetv.html");
    }
    function srch(){
        location.assign("/spark/search.html");
    }
