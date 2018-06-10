function allLetter(uname)
{
  var letters = /^[A-Za-z]+$/;

  if(uname.value.match(letters))
  {
    return true;
  }
  else
  {
    alert('Name must have alphabet characters only');
    uname.focus();
    return false;
  }
}

function ValidateEmail(uemail)
{
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(uemail.value.match(mailformat))
  {
    alert('Form Succesfully Submitted');
    window.location.reload();
    return true;
  }
  else
  {
    alert("You have entered an invalid email address!");
    uemail.focus();
    return false;
  }
}

function formValidation()
{
  // var uname = document.registration.username;
  var uname = document.forms["registration"]["username"];
  var uemail = document.forms["registration"]["email"];

  if(allLetter(uname))
  {
    if(ValidateEmail(uemail))
    {
    }
  }

  return false;
}
