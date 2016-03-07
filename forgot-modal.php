<link rel="stylesheet" href="css/bootstrap.css">
<link rel="stylesheet" href="css/modal-modify.css">
<div class="modal-video my-modal scroll-this">
    <div class="modal-video-container for-forgot">
        <span class="close-vm">x</span>

    <h2 class="login-header">Embarrassing, Isn't it?</h2>
    <p class="login-content">Don't worry, we'll help you get your password via email.</p><br>
    <div class="col-md-1"></div>
    <div class="col-md-10">
        <div class="input-box"> 
            <input type="text "class="myinput forgotinput" placeholder="Password" >
             <a href="profile-2.php" class="small-btn">Recover my password</a>
           
            &nbsp;<br>
        </div>
    </div>
    <div class="col-md-1"></div>
   
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