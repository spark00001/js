function searches(){
	    var inputs = document.getElementById("takeinpr").value;
	   if(inputs == "campus diaries"){
	   document.getElementById("srchs").innerHTML="<p id='loading'></p>";
	   const loading = setTimeout(ld,0000);
	    const view = setTimeout(campusdiaries,000);
	    }
	    if(inputs == ""){
	    const view = setTimeout(reset,0000);
	    }
 }
