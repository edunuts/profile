<!DOCTYPE html>
<?php include "includes/header.php" ?>
<link rel="stylesheet" href="css/modal.css">
	<div class="header">
		<div class="container">
			<div class="logo"></div>
			<div class="search-box">
				<div class="">
					<input class="mysearch" type="text" placeholder="Search here">
					<select class="myselect" name="" id="">
						<option value="">Delhi NCR</option>
						<option value="">Delhi NCR</option>
						<option value="">Delhi NCR</option>
						<option value="">Delhi NCR</option>
					</select>
					<div class="serch-icon"></div>
				</div>
			</div>	
			<ul class="mylogin-btn">
				<li ><a href="#open-modal-1" >SignUp</a></li>
				<li ><a href="#open-modal-2" id="dark">Login / </a></li>
			</ul>
		</div>
	</div>
	<div class="container">
		<ul class="breadcrumbs">
		 	<li><a href="#">Home</a><i class="fa fa-angle-right"></i></li>
		 	<li><a href="#">Users</a><i class="fa fa-angle-right"></i> </li>
		 	<li><a href="#">Sandeep Singh </a></li>
		</ul>
	</div>
	<div class="container bordered">
		<div class="row ">	
			<div class="col-md-12 pull-down-15">
				<div class="col-md-6">	
					<div class="img-box">	
						<img src="img/Messy-curly-hairstyles-men.jpg" alt="">	
					</div>
					<div class="user-name-box" style="margin-top: 17px">	
						<h2 class="username-title">Sandeep Singh</h2>
						<p class="pr color-default">Working @ Edunuts</p>
						<p class="pr color-default">edunuts.com/sandeep </p>
						<button class="btn btn-newbe color-black fz-16 ">
						<img class="newbe-img" src="img/btn-icon.png" alt="">Newbe</button>
					</div>
				</div>
				<div class="col-md-6">
					<div class="right-box">
						<div class="icon-box">
							<a href=""><i class="fa fa-facebook fb"></i></a>
							<a href=""><i class="fa fa-twitter twitter"></i></a>
							<a href=""><i class="fa fa-google-plus gp"></i></a>
							<a href=""><i class="fa fa-linkedin in"></i></a>
							<a href=""><i class="fa fa-instagram insta"></i></a>
							<a href=""><i class="fa fa-pinterest-p pin"></i></a>
						</div>	
						<div class="right-box2">
							<p class="color-default">Member since: July 2015</p>
							<p class="color-default">www.edunuts.com</p>
						</div>	
					</div>
				</div>
			</div>
		</div>
		<hr>	
		<div class="row">
		<!-- side bar star from here -->
			<div class="col-md-3" style="padding-right: 0; padding-left: 0;">
				<div class="side-bar">
					<ul id="side-bar-nav">
						<li><a href="#overview">Overview</a></li>
						<li><a href="#reviews">Reviews</a></li>
						<li><a href="#education-skills">Education & Skills</a></li>
						<li><a href="#professional">Professional</a></li>
					</ul>	
				</div>
			</div>
			<!-- this is box re-->
			<div class="col-md-9 items" id="overview">
				<p class="fz-16 color-default">Studied at Kirorimal College</p>
				<p class="fz-16 color-default">Currently lives in New Delhi, India</p>
				<p class="fz-16 color-default"><b>Skills</b></p>
				<hr class="mt-none">
				<div class="btn-box">
					<button class="btn color-green">PHP & MySQL</button>
					<button class="btn color-green">MongoDB</button>
					<button class="btn color-green">Laravel</button>
					<button class="btn color-green">Slim Framework</button>
				</div>
				<br>	
				<h4 class="exp ">Experience</h4>
				<hr class="mt-none">
				<h4 class="username-title">Software Engineer @ Guru iNfoways Pvt Ltd. ( 2 Yrs )</h4>
				<p class="color-default">
					Recruitment Services: Have helped companies across domains ranging from BFSI, manufacturing, ad agencies, education, healthcare, diversiﬁed groups to real estate developers. We help companies to recruit across functional areas and seniority levels.
				</p>	
				<hr>
			</div>
			<!-- this is box -->

			<!-- this is box  REViEWS -->
			<div class="col-md-9 items" id="reviews">
				working.......
			</div><!-- col-md-9 -->
			<!-- this is box  education-skills -->
			<div class="col-md-9 items" id="education-skills">
				<div class="col-md-12">
					<h4 class="">EDUCATION</h4>
					<hr class="myhr">
					<div class="education ">
						<div class="edu-logo-box">
							<img class="edu-logo" src="img/shriram-logo.jpg" alt="">
						</div>
						<div class="edu-p-box">
							<h4 class="mt-18 color-default">Shri Ram College Of Commerce</h4>
							<p>M.S. · Information Technology</p>
						</div>
					</div>
				</div>
				<div class="col-md-12">
					<hr class="myhr">
					<div class="education ">
						<div class="edu-logo-box">
							<img class="edu-logo" src="img/shriram-logo.jpg" alt="">
						</div>
						<div class="edu-p-box">
							<h4 class="mt-18 color-default">Shri Ram College Of Commerce</h4>
							<p>M.S. · Information Technology</p>
						</div>
					</div>
				</div>&nbsp; <br>
				<div class="col-md-12">	
					<h4 class="">PROFESSIONAL SKILLS</h4>
					<hr class="myhr">
					<div class="skill-box">			
						<button class="btn">Adobe Photoshop</button>
						<button class="btn">Adobe Illustrator</button>
						<button class="btn">Adobe Edge</button>
						<button class="btn">Adobe Pro Promier</button>
						<button class="btn">HTML</button>	
						<button class="btn">CSS</button>
						<button class="btn">Java Script</button>
						<button class="btn">SASS</button>
						<button class="btn">Sublime Text</button>
					</div>
				</div>
			</div><!-- .col-md-9 -->
			<!-- this is box education-skills End -->
			<!-- this is box  professional -->
			<div class="col-md-9 items" id="professional">
				<h1>working......</h1>
			</div>
			<!-- this is box professional End -->
		</div>
	</div><!-- container -->
</body>
<script src="js/jquery.min.js"></script>
<script src="js/profile.js"></script>
<?php include "includes/signin-modal.php" ?>
<?php include "includes/signup-modal.php" ?>
<?php include "includes/forgot-modal.php" ?>
</html>