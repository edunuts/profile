<!DOCTYPE html>
<?php include "includes/header.php" ?>

	<?php include "includes/simple-search.php" ?>
	<link rel="stylesheet" href="css/experience-profile.css">
	<link rel="stylesheet" href="css/bootstrap-tagsinput.css">
	<link rel="stylesheet" href="css/ng-tags-input.min.css">
	<link rel="stylesheet" href="css/ng-tags-input.bootstrap.min.css">

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
						<p class="pr color-default edit editable">Working @ Edunuts
							<a href="#" class="hover-edit"><i class="fa fa-pencil"></i></a>
						</p>
						<p class=	"pr color-default edit editable">edunuts.com/sandeep 
							<a href="#" class="hover-edit"><i class="fa fa-pencil"></i></a>

						</p>
						<button class="btn btn-newbe color-black fz-16 open-sign-in">
						<img class="newbe-img " src="img/btn-icon.png" alt="">Newbe</button>
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
			<div class="for-hover-box">
				<p class="fz-16 color-default edit">Studied at Kirorimal College
					<a href="#" class="hover-edit"><i class="fa fa-pencil"></i></a>
				</p>
			</div>
				<p class="fz-16 color-default edit">Currently lives in New Delhi, India
					<a href="#" class="hover-edit"><i class="fa fa-pencil"></i></a>
				</p>
				<p class="fz-16 color-default edit"><b>Skills</b> <a href="#" class="hover-edit skill-icon"><i class="fa fa-pencil"></i></a></p>
				
				<!-- <h1>hello &#9998;</h1> -->
				<hr class="mt-none">
				<div class="btn-box tagsinput-done-box">
					<button class="btn color-green">PHP & MySQL</button>
					<button class="btn color-green">MongoDB</button>
					<button class="btn color-green">Laravel</button>
					<button class="btn color-green">Slim Framework</button>
				</div>
					<div class="tagsinput-box">
					<input type="text" value="PHP & MySQL,MongoDB,Laravel,Slim Framework" data-role="tagsinput"> 
					<button- class="btn tagsinput-save-btn">Save</button>
					</div>
				<br>	

				<h4 class="exp ">Experience</h4>
				<hr class="mt-none">
				<h4 class="username-title edit">Software Engineer @ Guru iNfoways Pvt Ltd. ( 2 Yrs )
					<small><a href="#" class="hover-edit"><i class="fa fa-pencil"></i></a></small>
				</h4>
				<div class="">
					<p class="color-default edit">
						Recruitment Services: Have helped companies across domains ranging from BFSI, manufacturing, ad agencies, education, healthcare, diversiﬁed groups to real estate developers. We help companies to recruit across functional areas and seniority levels.
						<a href="#" class="hover-edit"><i class="fa fa-pencil"></i></a>
					</p>
				</div>
				<div class="replace-box-expand">
					<div class="col-5 por new-review-box">
						<div class="comment-details">
							<div class="start-rating-content">
								<input type="text" class="details-input" placeholder="Title here">
								<input class="r-input-l" type="text" placeholder="Company Name">
								<input class="r-input-r" type="text" placeholder="duration">
							</div>
						<div class="rating-text-area">
							<textarea  style="margin-top: 6px" class="r-text-area" placeholder="Write here all details "></textarea>
						</div>
						<div class="extended-review">
								
							<div class="myrating-btn-box">
								<p id="cancel-it" class="mrb-l">Cancel</p>
								<p class="mrb-r"><a href="#" style="color: #fff">Save </a></p>
							</div><br><br>
						</div>
						</div><!-- dp none box --> 
					</div>
			</div>
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
<script src="js/aloha.min.js"></script>
<script src="js/bootstrap-tagsinput-angular.js"></script>
<script src="js/bootstrap-tagsinput.js"></script>
<script src="js/ng-tags-input.min.js"></script>
<script>

</script>
<?php include "includes/signin-modal.php" ?>
<?php include "includes/signup-modal.php" ?>
<?php include "includes/forgot-modal.php" ?>
<script>
	
		$('.review-input').focus(function(e) {
			$(this).hide();
			$('.comment-details').slideDown(300);
		});

		$('.r-text-area').click(function(e) {
			$('.start-rating-content, .extended-review').slideDown();
		})
		$('#cancel-it').click(function(e) {
			$('.start-rating-content, .extended-review').slideUp();
		})
	
</script>
</html>