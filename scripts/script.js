$(function () {
    console.log("ready!");
  
    $("#loadProfile").on("click", function (e) {
  
      e.preventDefault(); 
      console.log("button clicked: ");
  
      $.ajax({
        url: "https://ellarohling.github.io/solid-potato-india/assets/data.json",
        dataType: "json",
        success: function (data) {
          
  
          $("#cruise").prop("checked", data.cruise);
          $("#resort").prop("checked", data.resort);
  
  
          $('input[type=radio]').each(function () {
            if (data.social === $(this).val())
            {
              $(this).prop('checked', true)
                console.log($(this));
           }
  
        });
  
          $.each(data, function (key, val) {
            console.log(key, val);
            $(`#${key}`).val(val);
          });
  
        },
        
      });

  });
  
  //date and time JS
  var dt = new Date();
  document.getElementById('date-time').innerHTML=dt;
  
  function myFunction() {
      var x = document.getElementById("myInput");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    }
   
    //click the eye icon
      $(".reveal").on('click',function() {
        let $pwd = $(".pwd");
        
        if ($pwd.attr('type') === 'password') {
            $pwd.attr('type', 'text');
          $(this).children('i').addClass('bi-eye-slash-fill').removeClass('bi-eye-fill');
        } else {
            $pwd.attr('type', 'password');
        $(this).children('i').removeClass('bi-eye-slash-fill').addClass('bi-eye-fill');
        }
    });
      
  
  
  });