<<<<<<< HEAD
<script type = "text/javascript">

      // Form validation code will come here.
=======
function validateForm() {
   var x = document.forms["myForm"]["name"].value;
   var y = document.forms["myForm"]["mail"].value;
   var z = document.forms["myForm"]["message"].value;
   if (x == "" || y == "" || z == "" ) {
       alert("Please fill in the missing details");
       return false;
   } else{
       alert("thanks we'll contact you shortly");
       return false;
   }
}









    /*  // Form validation code will come here.
>>>>>>> bcc9ef9b5f42eed1abf571de90cdd3d76d8e96c7
      function validate() {
      
         if( document.myForm.Name.value == "" ) {
            alert( "Please provide your name!" );
            document.myForm.Name.focus() ;
            return false;
         }
         if( document.myForm.email.value == "" ) {
            alert( "Please provide your Email!" );
            document.myForm.email.focus() ;
            return false;
         }
         var emailID = document.myForm.email.value;
         atpos = emailID.indexOf("@");
         dotpos = emailID.lastIndexOf(".");
         if (atpos < 1 || ( dotpos - atpos < 2 )) {
            alert("Please enter correct email ID")
            document.myForm.email.focus() ;
            return false;
         }
         if( document.myForm.message.value == "" ) {
            alert( "Please provide your Message!" );
            document.myForm.message.focus() ;
            return false;
         }
         /*if( document.myForm.Zip.value == "" || isNaN( document.myForm.Zip.value ) ||
            document.myForm.Zip.value.length != 5 ) {
            
            alert( "Please provide a zip in the format #####." );
            document.myForm.Zip.focus() ;
            return false;
         }
         if( document.myForm.Country.value == "-1" ) {
            alert( "Please provide your country!" );
            return false;
         }
         return( true ); */

