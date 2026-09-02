var gett = "";
gett = universalsearch();
document.getElementById("searchicon").innerHTML=gett;
function universalsearch(){
return `
<!-- Drop this element anywhere inside your layout (header, sidebar, main content) -->
<form class="auto-search-wrapper" onsubmit="event.preventDefault(); executeSearch();">
  <i class="fa-solid fa-magnifying-glass auto-search-icon"></i>
  <input 
    type="text" 
    id="autoSearchInput" 
    class="auto-search-input" 
    placeholder="Search..." 
    autocomplete="off"
    required
  />
  <button type="submit" class="auto-search-btn" aria-label="Search">
    <span class="auto-search-btn-text">Search</span>
    <i class="fa-solid fa-arrow-right"></i>
  </button>
</form>

`;
}
