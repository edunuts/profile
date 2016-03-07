<link rel="stylesheet" href="css/bootstrap.css">
<link rel="stylesheet" href="css/modal-modify.css">
<div class="modal-video my-modal scroll-this">
    <div class="modal-video-container scroll-this">
        <span class="close-vm">x</span>

    <h2 class="login-header">Let's hack education.</h2>
    <p class="login-content">Welcome to edunuts, Join us and make education better.</p><br>
    <div class="col-md-6 br">
        <div class="input-box"> 
            <input type="text "class="myinput" placeholder="Your Name">&nbsp;<br>
            <input type="text "class="myinput" placeholder="Your Email">&nbsp;<br>
            <input type="text "class="myinput" placeholder="Password">&nbsp;<br>
            <input type="text "class="myinput signup-small-input" placeholder="Mobile No" >
             <a href="profile-2.php" class="small-btn">Sign Up</a>
            <p class="text-right" style="margin-top: 10px">Already have an account? <i><a href="#" class="fz-18">Sign In</a></i></p>
            &nbsp;<br>
        </div>
    </div>
    <div class="col-md-6">
      <div class="btn-box">
        <a href="" class="g-color my-btn-f">  <span class="facebook-img"></span>SIGN UP WITH FACEBOOK</a>
        <a href="" class="g-color my-btn-g"><span class="google-img"></span>SIGN UP WITH GOOGLE</a>
      </div>
    </div>
  
    </div>
</div>

<button class="open-vm">open me</button>
<script src="js/jquery.min.js"></script>
<script>
        $('.open-vm').click(function() {
        $('.modal-video').addClass('show-it');
    });

    $('.close-vm').click(function() {
        $('.modal-video').removeClass('show-it');
    });
</script>