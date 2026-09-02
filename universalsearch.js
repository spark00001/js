var gett = "";
gett = universalsearch();
document.getElementById("searchicon").innerHTML=gett;
function universalsearch(){
return `
<form class="auto-search-wrapper"">
  <i class="fa-solid fa-magnifying-glass auto-search-icon"></i>
  <input type="text" id="usrsearch" class="auto-search-input" placeholder="Search..." autocomplete="on" required/>
  <button type="button" onclick="searchdb()" class="auto-search-btn" aria-label="Search">
    <span class="auto-search-btn-text">Search</span>
    <i class="fa-solid fa-arrow-right"></i>
  </button>
</form>
`;
}
