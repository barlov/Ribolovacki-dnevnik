
$.getScript('./script/validacija_registracije.js'); 
$(document).ready(function() { 
  
   
  
    $('#contact_form').bootstrapValidator({
        
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please enter your First Name'
                    }
                }
            },
             last_name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please enter your Last Name'
                    }
                }
            },
			 user_name: {
            
                validators: {
                 
                    callback: {
                        message: 'The user name already taken ',
                        callback: function(value, validator, $field) {
                            var proveraVrednostiPolja = $('#user').val();
                            return proveraImena(proveraVrednostiPolja);
                        }


                    },
                    stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please enter your Last Name'
                    }
                 
                }
            },
			 user_password: {
                validators: {
                        identical: {
                            field: 'confirm_password',
                            message: 'The password and its confirm are not the same'
                        },
                    
                
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please enter your Password'
                    }
                }
            },
			confirm_password: {
                validators: {
                    
                        identical: {
                            field: 'user_password',
                            message: 'The password and its confirm are not the same'
                        },
                    
               
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please confirm your Password'
                    }
                }
            },
            email: {
                validators: {
                    callback: {
                        message: 'The email already taken ',
                        callback: function(value, validator, $field) {
                            var proveraVrednostiPolja = $('#mail').val();
                            return proveraMejla(proveraVrednostiPolja);
                        }


                    },
                    notEmpty: {
                        message: 'Please enter your Email Address'
                    },
                    emailAddress: {
                        message: 'Please enter a valid Email Address'
                    }
                }
            },
        

            }
        })
        
        .on('success.form.bv', function(e) {
            $.getScript('./script/skladiste.js'); 
            $('#contact_form').attr('onclick','skidanjePoruke()');
            $('#contact_form').bootstrapValidator('revalidateField', 'user_name');
            $('#contact_form').bootstrapValidator('revalidateField', 'email');

            $('#success_message').slideDown({ opacity: "show" }, "slow"); // Do something ...
               
                $('.btn-info').html('NAZAD NA POČETNU&nbsp');

            // Prevent form submission
            e.preventDefault();
           
            var $form = $(e.target);

             bv = $form.data('bootstrapValidator');


            var kor = $('#contact_form').serializeArray();
                          //console.log(korisnik);

                         /*   var korisnik = [];
                          $('.form-control').each(function(){
                            korisnik.push($(this).val());
                          });  */  


                        // var $this=$(this);
                       //  var kor=$this.$('#contact_form').serializeArray();
                         var korisnik={};

                         for(var i in kor){
                             korisnik[kor[i].name]= kor[i].value;
                         }
                  
                
                     
 $('#contact_form').bootstrapValidator('resetForm', true);



         localStorage.setItem ("korisnik" +( localStorage.length + 1), JSON.stringify(korisnik));
          
         
         sessionStorage.setItem('ulogovaniKorisnik',korisnik.user_name);



            
        });
  
});
function skidanjePoruke(){
    
$('#success_message').slideUp({ opacity: "hide" }, "slow"); // Do something ...
}