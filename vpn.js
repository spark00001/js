function vpn(){
  document.getElementById("vpn").innerHTML=`
  <!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <style>
    .vpn-alert {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f7f6;
  font-family: sans-serif;
}

.alert-content {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  max-width: 400px;
  text-align: center;
  border-left: 5px solid #e74c3c;
}

.alert-content h3 {
  color: #e74c3c;
  margin-top: 0;
}

.small-text {
  font-size: 0.9rem;
  color: #555;
  margin-top: 1rem;
}
    </style>
</head>
<body>

<div class='vpn-alert'>
  <div class='alert-content'>
    <h3>Connection Notice</h3>
    <p>Please use a VPN (such as <strong>Aloha</strong> or <strong>Opera VPN</strong>) to access this website for streaming.</p>
    <p class='small-text'>If you are using a different browser or our app, please install <strong>Proton VPN</strong> to ensure a stable connection and streaming.</p>
  </div>
</div>


</body>
</html>
  `;
}