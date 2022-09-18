function myFunction()
{
  var farmerID=document.getElementById("username-field").value;
  localStorage.setItem("id", farmerID);
  return false;
}
function myFuction()
{
   if(loginForm.username.value && loginForm.password.value) 
   {
    var username=document.getElementById("username").value;
    document.write('<html><body><h1><center>')
      document.write("Welcome" + " ");
      document.write(username);
      document.write('</center></h1></body></html>');
      
   }  
}