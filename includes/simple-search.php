<link rel="stylesheet" href="css/modal.css">
<style>
	
.header {
	height: 65px;
	width: 100%;
  border-bottom: 1px solid #ddd;
}
.mylogin-btn {
	float: right;
	margin-top: -33px;
}
.mylogin-btn li {
  /*display: inline-block;*/
  float: right;
}
.mylogin-btn li a {
  padding: 16px 3px !important;
}
.logo {
	background: url(img/edunuts-logo.png) no-repeat;
	background-size: cover;
	background-size: 100% 100%;
	width: 160px;
	height: 35px;
	margin-top: 1.1%;
	float: left;
}
.search-box {
	position: relative;
  width: 810px;
}
.search-box .mysearch{
	border: none;
	width: 460px;
	border: 1px solid #ddd;
	height: 40px;
	margin: 10px 80px;
	padding: 10px;
	padding-left: 100px;
	border-radius: 4px;
	outline: none;

}
.myselect {
	position: absolute;
	left: 244px;
	height: 38px;
	top: 11px;
	border: 0;
	border-right: 1px solid #ddd;
	width: 93px;
	outline: none;
  line-height: 2.5;
  background: none !important;
}
.header ul {
	list-style: none;
}
.header ul li {
}
.header ul li a {
	float: right;
	line-height: 0px;
	text-decoration: none;
	margin-top: -13px;
	font-size: 16px;
	color: #8A8888;
  display: inline-block;
  padding: 16px 12px;
}
.serch-icon {
	position: absolute;
    top: 10px;
    left: 657px;
    height: 40px;
    width: 40px;
    border: none;
    background: transparent url(img/serch-icon.png) no-repeat center;
    border-left: 1px solid #e4e4e4;
    background-size: 18px;
}
</style>
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
	</div><!-- header -->