function genderSelection() {
      var radio1 = document.getElementById('male').checked;
      var radio2 = document.getElementById('female').checked;
      if ((radio1 == "") && (radio2 == "")) {
        alert("Choose Gender");
        return false;
      }
      return true;
    } 
 
 
 $(document).ready(function () {
      $('#usercheck').hide();
      $('#emailcheck').hide();
      $('#phcheck').hide();
      $('#passcheck').hide();
      $('#conpasscheck').hide();
      $('#gendercheck').hide();

      var user_err = true;
      var mail_err = true;
      var ph_err = true;
      var pass_err = true;
      var conpass_err = true;
      var gender_err = true;

      $('#usernames').keyup(function () {
        username_check();
      });

      function username_check() {
        var user_val = $('#usernames').val();

        if (user_val.length == '') {
          $('#usercheck').show();
          $('#usercheck').html("** Please enter the Username");
          $('#usercheck').focus();
          $('#usercheck').css("color", "red");
          user_err = false;
          return false;
        }
        else {
          $('#usercheck').hide();
        }

        if ((user_val.length < 3) || (user_val.length > 10)) {
          $('#usercheck').show();
          $('#usercheck').html("**Username Length must be between 3 and 10");
          $('#usercheck').focus();
          $('#usercheck').css("color", "red");
          user_err = false;
          return false;
        }
        else {
          $('#usercheck').hide();
        }
      }


      $('#email').keyup(function () {
        email_check();
      });

      function email_check() {
        var mail_val = $('#email').val();

        if (mail_val.length == '') {
          $('#emailcheck').show();
          $('#emailcheck').html("** Please enter the email");
          $('#emailcheck').focus();
          $('#emailcheck').css("color", "red");
          mail_err = false;
          return false;
        }
        else {
          $('#emailcheck').hide();
        }
      }


      $('#phonenumber').keyup(function () {
        ph_check();
      });

      function ph_check() {
        var ph_val = $('#phonenumber').val();

        if (ph_val.length == '') {
          $('#phcheck').show();
          $('#phcheck').html("** Please enter the Phone Number");
          $('#phcheck').focus();
          $('#phcheck').css("color", "red");
          ph_err = false;
          return false;
        }
        else {
          $('#phcheck').hide();
        }

        if (ph_val.length != 10) {
          $('#phcheck').show();
          $('#phcheck').html("**Phone Number must be 10 digit");
          $('#phcheck').focus();
          $('#phcheck').css("color", "red");
          ph_err = false;
          return false;
        }
        else {
          $('#phcheck').hide();
        }
      }


      $('#password').keyup(function () {
        password_check();
      });

      function password_check() {
        var passwrdstr = $('#password').val();

        if (passwrdstr.length == '') {
          $('#passcheck').show();
          $('#passcheck').html("** Please enter the Password");
          $('#passcheck').focus();
          $('#passcheck').css("color", "red");
          pass_err = false;
          return false;
        }
        else {
          $('#passcheck').hide();
        }

        if ((passwrdstr.length < 3) || (passwrdstr.length > 10)) {
          $('#passcheck').show();
          $('#passcheck').html("**Password Length must be between 3 and 10");
          $('#passcheck').focus();
          $('#passcheck').css("color", "red");
          pass_err = false;
          return false;
        }
        else {
          $('#passcheck').hide();
        }
      }


      $('#conpassword').keyup(function () {
        con_passwrd();
      });

      function con_passwrd() {
        var conpass = $('#conpassword').val();
        var passwrdstr = $('#password').val();

        if (passwrdstr != conpass) {
          $('#conpasscheck').show();
          $('#conpasscheck').html("**Password are not Matching");
          $('#conpasscheck').focus();
          $('#conpasscheck').css("color", "red");
          conpass_err = false;
          return false;
        }
        else {
          $('#conpasscheck').hide();
        }
      }


      $('submitbtn').click(function () {
        user_err = true;
        mail_err = true;
        ph_err = true;
        pass_err = true;
        conpass_err = true;
        gender_err = true;

        username_check();
        email_check();
        ph_check();
        password_check();
        con_passwrd();
        gender_check();

        if ((user_err == true) && (mail_err==true) && (ph_err==true) && (pass_err == true) && (conpass_err == true) && (gender_err==true)) {
          return true;
        }
        else {
          return false;
        }

      });

    });

