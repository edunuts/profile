<!DOCTYPE html>
<?php include "includes/header.php" ?>
<link rel="stylesheet" href="public/css/discussions.css">
<div class="container">	
<?php include "includes/search-box.php" ?>
</div>
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
			<div class="col-md-12">
			<div class="col-md-9">
				<div class="all-questions-box">	
				<h4 class="all-questions-title ">All Question</h4>
					<ul class="	questions-link">
						<li><a href="">Newest</a></li>
						<li><a href="">Featured</a></li>
						<li><a href="">Courses</a></li>
						<li><a href="">Careers</a></li>
						<li><a href="">Un answered</a></li>
					</ul>
				</div><!-- all-question-box -->
			</div>
			<div class="col-md-3 "><h4 class="tags">tags</h4></div>
			</div><!-- col-md-12 -->
				<div class="col-md-9 border-right">
				<!-- clone-from-here -->
					<div class="ask-q-box border-bottom clearfix">
						<div class="col-md-2">
							<div class="left-digit">
								<span class="angle-up"><img src="img/angle-up.png" alt=""></span>
								<h1 class="text-thin digit">24</h1>
								<span class="angle-down"><img src="img/angle-down.png" alt=""></span>
							</div>
						</div>
						<div class="col-md-10">
							<h3><a href="discussions-answer.php" class="what-to-do">Can i study B. Tech (CSE) in Germany ?</a></h3>
							<p>I have scored in 10th:89% 12th:60% and CMAT:72 Percentle. <br><strong>21 hrs ago</strong></p>
							<button class="btn btn-blue ck-open"><span class="fa fa-pencil"></span> Write Answer</button>
						</div>
						<div class="col-md-2"></div>
						<div class="col-md-10">
							<div id="full-ck">
								<div class="ck-editor-box" >
									<div class="ck-header">
										<div class="col-md-1">
											<img class="ck-img" src="img/Messy-curly-hairstyles-men.jpg" alt="">
										</div>
										<div class="col-md-10">
											<h4 class="ck-title">Sandeep Singh</h4>
											<h5>Add Bio . Go</h5>
										</div>
										<div class="col-md-1">
											<span class="fa expand fa-expand" onclick="fullscreen()"></span>
										</div>
									</div>
									<div class="ck-nav clearfix">
										<!-- <ul class="float-left ">
											<li><span class="fa fa-bold"></span>&nbsp;</li>
											<li><span class="fa fa-italic"></span>&nbsp;</li>
											<li><span class="fa fa-strikethrough"></span></li>
										</ul>
																		
										<ul class="pull-right ck-right">
											<li><span class="fa fa-link">&nbsp;</span></li>
											<li><span class="fa fa-search">&nbsp;</span></li>
										</ul> -->
									</div>
									<textarea class="ck-text-area" id="ckeditor1" placeholder="Write Your text here"></textarea>
									<div class="ck-footer">
										<div class="float-left">
											<button class="btn bg-blue">Submit</button>
											<button class="btn">Save Draft</button>
										</div>
										<div class="pull-right">
										
										</div>
									</div>
								</div>
							</div>
						</div><!-- col-md-10 -->
					</div>
				<!-- clone-from-here -->
				<!-- clone-from-here -->
					<div class="ask-q-box border-bottom clearfix">
						<div class="col-md-2">
							<div class="left-digit">
								<span class="angle-up"><img src="img/angle-up.png" alt=""></span>
								<h1 class="text-thin digit">24</h1>
								<span class="angle-down"><img src="img/angle-down.png" alt=""></span>
							</div>
						</div>
						<div class="col-md-10">
							<h3 ><a href="discussions-answer.php" class="what-to-do">I want to know admission criteria and exam dates of IIT Delhi ?</a></h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit aliquid laboriosam alias hic, neque eveniet a ullam magni distinctio debitis.
							<br><strong>21 hrs ago</strong></p>
							<button class="btn btn-blue ck-open"><span class="fa fa-pencil"></span> Write Answer</button>
						</div>
						<div class="col-md-2"></div>
						<div class="col-md-10">
							<div class="ck-editor-box">
								<div class="ck-header">
									<div class="col-md-1">
										<img class="ck-img" src="img/Messy-curly-hairstyles-men.jpg" alt="">
									</div>
									<div class="col-md-10">
										<h4 class="ck-title">Sandeep Singh</h4>
										<h5>Add Bio . Go</h5>
									</div>
									<div class="col-md-1">
										<span class="fa expand fa-expand"></span>
									</div>
								</div>
								<div class="ck-nav clearfix">
									<ul class="float-left ">
										<li><span class="fa fa-bold"></span>&nbsp;</li>
										<li><span class="fa fa-italic"></span>&nbsp;</li>
										<li><span class="fa fa-strikethrough"></span></li>
									</ul>

									<ul class="pull-right ck-right">
										<li><span class="fa fa-link">&nbsp;</span></li>
										<!-- <li><span class="fa fa-search">&nbsp;</span></li> -->
									</ul>
								</div>
								<textarea class="ck-text-area" placeholder="Write Your text here"></textarea>
								<div class="ck-footer">
									<div class="float-left">
										<button class="btn bg-blue">Submit</button>
										<button class="btn">Save Draft</button>
									</div>
									<div class="pull-right">
									
									</div>
								</div>
							</div>
						</div><!-- col-md-10 -->
					</div>
				<!-- clone-from-here -->
				</div>
			<div class="col-md-3 border-left">
					<button id="slide-down" class="full-width-btn btn btn-blue "><span class="fa fa-pencil"></span> Write Answer</button>
				
				<button class="btn tag-btn">B. Tech</button>
				<button class="btn tag-btn">B. Tech</button>
				<button class="btn tag-btn">B. Tech</button>
				<button class="btn tag-btn">B. Tech</button>
				<button class="btn tag-btn">B. Tech</button>
			</div><!-- col-md-9 -->
		</div>
	</div><!-- container -->
	<div class="ck-editor-box ck-popup-box">
		<div class="ck-header">
			<div class="col-md-1">
				<img class="ck-img" src="img/Messy-curly-hairstyles-men.jpg" alt="">
			</div>
			<div class="col-md-10">
				<h4 class="ck-title">Sandeep Singh</h4>
				<h5>Add Bio . Go</h5>
			</div>
			<div class="col-md-1">
				<span class="fa expand fa-expand" id="slide-Up"></span>
			</div>
		</div>
		<div class="ck-nav clearfix">
			<ul class="float-left ">
				<li><span class="fa fa-bold"></span>&nbsp;</li>
				<li><span class="fa fa-italic"></span>&nbsp;</li>
				<li><span class="fa fa-strikethrough"></span></li>
			</ul>
	
			<ul class="pull-right ck-right">
				<li><span class="fa fa-link">&nbsp;</span></li>
				<!-- <li><span class="fa fa-search">&nbsp;</span></li> -->
			</ul>
		</div>
		<textarea class="ck-text-area" placeholder="Write Your text here"></textarea>
		<div class="ck-footer">
			<div class="float-left">
				<button class="btn bg-blue">Submit</button>
				<button class="btn">Save Draft</button>
			</div>
			<div class="pull-right">
			
			</div>
		</div>
	</div><!-- ck-popup -->
</body>
<script src="js/jquery.min.js"></script>
<script src="js/profile.js"></script>
<script src="ckeditor/ckeditor.js"></script>
<script>
	$('.ck-open').click(function() {
		$(this).parents('.ask-q-box').find('.ck-editor-box').slideToggle();
	});
$('#full-ck').click(function() {
	$(this).addClass('full-screen-ck');
});

 $('#slide-down').click(function() {
	$('.ck-popup-box').animate({
		top: '100px',
	})
});

 $('#slide-Up').click(function() {
	$('.ck-popup-box').animate({
		top: '-400px',
	})
});
 CKEDITOR.replace('ckeditor1');
</script>
</html>