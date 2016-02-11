<!DOCTYPE html>
<?php include "includes/header.php" ?>
	
	<?php include "includes/search-box.php" ?>
	<hr style="margin: 0;padding:0; border-color: #ddd;">	
	
	<div class="container">	
		<ul class="breadcrumbs">
			  <li><a href="#">Home </a><i class="fa fa-angle-right"></i></li>
			  <li><a href="#">Users </a><i class="fa fa-angle-right"></i> </li>
			  <li><a href="#">Sandeep Singh </a></li>
			 
		</ul>
	</div>
	<div class="container bordered">
		<div class="row">
		<!-- side bar star from here -->
			<div class="col-md-3" style="padding-right: 0; padding-left: 0;">
				<div class="side-bar">
				<div class="side-box">
					<img class="user-img" src="img/Messy-curly-hairstyles-men.jpg" alt="">
					<h2 class="username-title text-center">Sandeep Singh</h2>
					<p class="text-center" style="font-size: 16px; margin-left: -6px">Working @ edunuts</p>
					<button style="margin-left: 21%;" class="btn btn-newbe color-black fz-16 pull-left"><img class="newbe-img" src="img/btn-icon.png" height="29" width="23" alt=""> Newbie</button>
				</div>
					<ul id="side-bar-nav"><br>
						<li><a href="#overview">Overview</a></li>
						<li><a href="#reviews">Reviews</a></li>
						<li><a href="#education-skills">Profile</a></li>
						<li><a href="#professional">Listing</a></li>
					</ul>	
				</div>
			</div>
			<!-- this is box re-->
			<div class="col-md-9 items" id="overview">	
				<div class="lived-box">	
					<p class="lived-p">Where you have lived ?</p>
					<input type="" class="lived-input" placeholder="New Delhi, India ?"><button class="lived-btn">SAVE</button>
					<a href="#" class="lived-close-btn" id="close">x</a>
				</div>
				<h4 class="dib">Dashboard</h4>
				<h5 class="pull-right text-thin">Help (?) </h5>
			<div class="dashbord-box clearfix">
				<div class="current-level-box">
					<div class="stick-1">Current Level</div>
					<div class="slider-box">	
						<div class="slider-green"></div>
						<div class="slider-gray"></div>
					</div>		
					<div class="left-newbie">
						<span class="">You are <br>	<b class="text-red">Newbie</b></span>
					</div>
					<div class="right-newbie">
						<span class="">Need 500 Points <br>	for <b class="text-red">JuniorGuru</b></span>
					</div>
				</div>
				<div class="total-points-box">
				<div class="stick-2">Total Points</div>
					<span class="text-red points-number">200</span><span class="Points color-default">Points</span>
				</div>
			</div><br>
			<h4>Recent Contributions</h4>
			<div class="rating-nav clearfix">
				<ul>
					<li><a href="">Points</a></li>
					<li><a href="">Rating</a></li>
					<li><a href="">Helpful</a></li>
				</ul>
			</div><br>
			<div class="rating-box">
				<div class="rating-img-box">
					<img class="rating-img" src="img/shriram-logo.jpg" alt="">
				</div>
				<div class="rating-details-box">
					<div class="point-box">
						<span>22</span>
						<span>3.5/5</span>
						<span>200</span>
					</div>
					<h4 class="text-blue">Shri Ram College of Commerce</h4>
					<p class="title-review">"Title of the review"</p>
					<p>Lorem ipsum dolor sit consectetur adipisicing elit. Quos adipisci dolores sapiente iure saepe, animi quae voluptatem molestiae, repudiandae vel nesciunt molestias tempora explicabo fugiat? Porro quaerat fuga iure</p>
					<div class="date">
						<i>22nd Dec 2016</i>
					</div>
				</div>
			</div>
		</div><!-- col-md-9 -->
			<div class="col-md-9 items" id="reviews"></div><!-- col-md-9 -->
			<div class="col-md-9 items clearfix" id="education-skills">
				<h4 class="mypro">My profile</h4>
				<h5  class="pull-right"><a href="">Edit</a></h5>
				<div class="myprofile-box clearfix">
					<div class="left-box text-thin">Your name</div>	
					<div class="left-box">Sandeep singh</div>	
				</div>
				<div class="myprofile-box clearfix">
					<div class="left-box text-thin">Mobile</div>	
					<div class="left-box">1234567890</div>	
				</div>
				<div class="myprofile-box clearfix">
					<div class="left-box text-thin">Email</div>	
					<div class="left-box">Example@gmial.com</div>	
				</div>
			</div><!-- .col-md-9 -->
			<div class="col-md-9 items" id="professional">
				<h4 class="dib" style="margin-bottom: 20px">My Listing</h4>	
				<h5 class="pull-right"><a href="">Creat New</a></h5>	
				<div class="list-box clearfix">	
					<div class="list-img-box">
						<img class="list" src="img/shriram-logo.jpg" alt="">
					</div>
					<h4 class="text-blue">Shri Ram College of Commerce</h4>
					<p class="color-default fz-16">1032 views this week</p>
				</div><br>	
				<div class="list-box clearfix">	
					<div class="list-img-box">
						<img class="list" src="img/shriram-logo.jpg" alt="">
					</div>
					<h4 class="text-blue">Shri Ram College of Commerce</h4>
					<p class="color-default fz-16">1032 views this week</p>
				</div>
			</div>
		</div>
	</div><!-- container -->
	
</body>
<script src="js/jquery.min.js"></script>
<script src="js/profile.js"></script>
</html>