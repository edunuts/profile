<style>
.noti {
  width: 250px;
  background: #fff;
  box-shadow: 0 5px 15px rgb(216, 216, 216);
  position: absolute;
  right: 140px;
  top: 60px;
  z-index: 100;
  display: none;
  border-top: 3px solid #0D5293;
  /*overflow: auto;*/
}

.discus-header {
	height: 62px;
}
.discus-search-box {
	max-width: 400px;
	width: 100%;
	margin-top: 10px;
	float: left;
}
.discus-search-box input {
	width: 70%;
	float: left;
	height: 40px;
	border: none;
	padding-left: 10px;

}
.discus-search-box input:focus {
	outline: none;
	color: #000;
}
 
.discus-search-box select {
	width: 30%;
	float: left;
	height: 40px;
	border: none;
	border-right: 1px solid #ddd;
	padding-left: 10px;
}
.discus-search {
	position: absolute;
	font-size: 20px;
	color: #848484;
	right: 9px;
	top: 9px;

}
.bordered {
	border: 1px solid #ddd;
	border-radius: 4px;
}
.discus-logo img {
	width: 180px;
	margin-top: 10px;
	margin-left: -17px;
}
.discus-logo {
	float: left;
	margin-right: 10%;
}
.ln {
	list-style: none;
}
.discus-header-icon-box {
	float: right;
}
.cog, .bell{
	float: left;
	font-size: 20px;
	color: #848484;
	line-height: 62px;
	margin-left: 5px;	
	margin-right: 8px;	
	cursor: pointer;
	padding-left: 5px;
}
.noti {
	right: 0;
	top: 60px;
}
.noti .notification-list {
	list-style: none;
	margin: 0;
	padding: 0px;
}
.noti .notification-list li {
	padding: 7px 10px;
}

.setting .setting-list {
	list-style: none;
	padding: 0;	
	margin: 0;	
}
.setting .setting-list li {
	padding: 7px 10px;
	cursor: pointer;
	font-family: Roboto;
}
.setting .setting-list li a {
	color: #706F6F;
}

.setting .setting-list li:hover,.noti .notification-list li:hover {
	background: #f7f7f7;
}

.header-user-name {
	line-height: 62px;
	/*font-size: 16px;*/
	color: #848484;
}
.clicked {
  background: #f7f7f7;
  display: inline-block;
}
.clicked > i{
  color: #000 !important;

}
.notification-alert {
	position: absolute;
    top: 12px;
    right: 0px;
    font-size: 10px;
    padding: 3px 7px 2px 6px;
    background: #196FB2;
    color: #fff;
    border-radius: 50%;
    font-weight: 300;
  font-family: Roboto;
  cursor: pointer; 

}

	</style>
	<div class="container">
		<div class="discus-header clearfix">
			<div class="discus-logo">
				<img src="img/edunuts-logo.png" alt="">	
			</div>
			<div class="discus-search-box">
				<div class="bordered clearfix">	
					<select name="" id="">
						<option value="">Delhi</option>
					</select>
						<input class="" type="" placeholder="search here">
					<div class="por">
						<span class="discus-search fa fa-search"></span>
					</div>
				</div>
			</div>
			<div class="discus-header-icon-box">	
				<ul class="ln">
					<li class="noti-btn por pull-left">
					<i class="notification-alert">4</i>
						<i class="fa bell fa-bell-o"></i>
						<div class="noti-box">
							<div class="noti">
								<ul class="notification-list">
									<li style="margin-top: 10px">Lorem ipsum dolor sit. Lorem ipsum. lor sit amet</li>
									<li>Lorem ipsum dolor sit amet, consectetur adip </li>
									<li>Lorem ipsum dolor sit amet, consectetur adip </li>
									<li>Lorem ipsum dolor sit amet, consectetur adip </li>
									<li>Lorem ipsum dolor sit amet, consectetur adip </li>
									<li>Lorem ipsum dolor sit amet, consectetur adip </li>
									<li>Lorem ipsum dolor sit amet, consectetur adip </li>
									
								</ul>
							</div>
						</div>
					</li>
				
					<li class="pull-left header-user-name">Sandeep Sing</li>		
					<li class="por setting-btn pull-left">
					<i class="fa cog fa-cog"></i>
						<div class="setting">
							<ul class="setting-list">	
								<li style="margin-top: 10px"><a href=""><i class="fa fa-user"> Your profile</i></a></li>
								<li><a href=""><i class="fa fa-envelope-o"></i> Messages</a></li>
								<li><a href=""><i class="fa fa-question"></i>&nbsp; Help</a></li>
								<li><a href=""><i class="fa fa-sign-out"></i> Logout</a></li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		</div>
			</div>
