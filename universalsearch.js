var get="";
function universalsearch(){
get = srchdb();
document.getElementById("export").innerHTML=get;
const ids = [
  "throwout",
  "srchs",
  "spark",
  "songsrch",
  "audiomsg",
  "audio",
  "as",
  "navbars",
  "message"
  "noti",
  "upcoming",
  "actors"
];

[...new Set(ids)].forEach((id) => {
  const el = document.getElementById(id);
  if (el) el.style.display = "none";
});
}
function srchdb(){
return `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SEARCH</title>
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    -webkit-tap-highlight-color: transparent;
}

body {
    background-color: #000000;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding-top: 20px;
    overflow: hidden;
}
.search-container {
    position: relative;
    width: 100%;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - 40px);
}
.search-wrapper {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 99px;
    padding: 6px 10px 6px 20px;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    flex-shrink: 0;
    max-width: 600px; 
    width: 100%;
    margin: 0 auto; 
}

.search-icon {
    color: rgba(255, 255, 255, 0.4);
    margin-right: 14px;
    flex-shrink: 0;
    transition: color 0.3s ease;
}

.search-input {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.2px;
    padding: 10px 0;
}

.search-input::placeholder {
    color: rgba(255, 255, 255, 0.3);
    transition: opacity 0.3s ease;
}

.search-button {
    background: #ffffff;
    color: #000000;
    border: none;
    border-radius: 99px;
    padding: 10px 24px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    flex-shrink: 0;
    box-shadow: 0 2px 10px rgba(255, 255, 255, 0.1);
}

.search-wrapper:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.15);
}


.search-wrapper:focus-within {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 
                0 8px 40px rgba(255, 255, 255, 0.08);
}

.search-wrapper:focus-within .search-icon {
    color: rgba(255, 255, 255, 0.8);
}

.search-wrapper:focus-within .search-input::placeholder {
    opacity: 0.5;
}

.search-button:hover {
    background: #e4e4e7;
    transform: scale(1.02);
}

.search-button:active {
    transform: scale(0.98);
}

#exportsearch {
    color: white;
    width: 100%;
}

#notfound {
    color: transparent;
    -webkit-text-stroke: 1px gold;
    text-shadow:
        -1px -1px 0 #000,  
         1px -1px 0 #045,
        -1px  1px 0 #086,
         1px  1px 0 #010;
}


.gallery {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start; 
    gap: 20px;
    color: gold;
    overflow-y: auto;
    flex-grow: 1;
    padding-right: 6px;
    margin-top: 20px;
}

.gallery::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
}
.gallery::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
}
.gallery::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
}

.image-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content; 
    border: 1px solid red;
    padding: 10px;
    text-align: center; 
    border-radius: 30px 45px;
}

.image-item img {
    max-width: 150px;
    height: 200px;
    border-radius: 30px 45px;
    object-fit: cover;
}
    </style>
    <link rel="stylesheet" href="/css/style.css" />
<link rel="icon" href="/images/logo.png" type="image/png" sizes="16x16">
<!--- google font link-->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link  href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<!-- Fontawesome Link for Icons -->
<link   rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
<link rel="stylesheet" href="/css/index.css">
  <link rel="stylesheet" href="/css/autoslider.css">
  <link rel="stylesheet" href="/css/cat.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <!-- Add to your <head> -->
<link rel="manifest" href="/spark/manifest.json">
<meta name="theme-color" content="#080808">

<!-- iOS support -->
<link rel="apple-touch-icon" href="/spark/icon-192x192.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
</head>
<body>

    <div class="search-container">
        <div class="search-wrapper">
            <i data-lucide="search" class="search-icon" width="20" height="20"></i>
            <input type="text" class="search-input" id="usrsearch" placeholder="Search anything...">
            <button class="search-button" onclick="searchdb()">Search</button>
        </div>
        
            <div id="catview"></div>
            <div id="export"></div>
            <div id="exportsearch"></div>
    </div>
<script src="/js/adamproject.js"></script>
<script src="/js/searchdatabase.js"></script>
<script src="/spark/search.js"></script>
<script src="/js/south.js"></script>
<script src="/js/bollywood.js"></script>
<script src="/js/hollywood.js"></script>
<script src="/js/chinese.js"></script>
<script src="/js/korean.js"></script>
<script src="/js/punjabi.js"></script>
<script src="/js/webseries.js"></script>
<script src="/js/documentary.js"></script>
<script src="/js/ollywood.js"></script>
<script src="/js/catview.js"></script>
<script src="/js/contact.js"></script>
<script src="/js/pakdrama.js"></script>
<script src="/js/shortfilms.js"></script>
<script src="/js/livetv.js"></script>
<script src="/js/indian.js"></script>
    <script>
var h = "";
        h = livetvview();
        document.getElementById("export").innerHTML=h;
   </script>
<script src="/js/search.js"></script>
</body>
</html>

`;
}
