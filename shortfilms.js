const sf = setTimeout(shortfilms,100);
function shortfilms(){ 
document.getElementById("export").innerHTML="<div id='gallery' class='gallery'>  <div class='image-item'>            <img src='/shortfilms/vyarth.png' alt='aaina' onclick='vyarth();'> <p>VYARTH<BR>(2025)</p>        </div>   <div class='image-item'>            <img src='/shortfilms/thebrokentable.png' alt='aaina' onclick='thebrokentable();'> <p>THE BROKEN<BR>TABLE (2023)</p>        </div><div class='image-item'>            <img src='/shortfilms/aaina.png' alt='aaina' onclick='aaina();'> <p>AAINA <BR>(2024)</p></div> </div>";
}
