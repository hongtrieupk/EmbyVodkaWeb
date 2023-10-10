<script>
import ShopLayoutMenu from './ShopLayoutMenu'
export default {
	name: 'ShopLayoutHeader',
	components: {
		ShopLayoutMenu
	}
}
</script>

<template>
	<header class="header-area header-sticky text-center header-default">
		<div class="header-main-sticky">
			<div class="header-nav">
				<div class="container">
					<div class="nav-left float-left">
						<div class="ttheader-service">Wants to explore Upcoming Deals on Weekends?</div>
					</div>
					<div class="nav-right float-right d-flex">
						<div class="ttheader-mail"><a href="mailto:embyvodka@gmail.com">embyvodka@gmail.com</a></div>
					</div>
				</div>
			</div>
			<div class="header-main-head">
				<div class="header-main">
					<div class="container">
						<div class="header-left float-left d-flex d-lg-flex d-md-block d-xs-block">
							<div class="language-wrapper toggle">
								<button type="button" class="btn text-capitalize dropdown-toggle"><img
										src="../../../assets/img/banner/en.png" alt="en" /><span>English</span></button>
								<div id="language-dropdown" class="language">
									<ul>
										<li><img src="../../../assets/img/banner/en.png" alt="en" /><span>English</span>
										</li>
									</ul>
								</div>
							</div>
							<div class="currency-wrapper toggle">
								<button type="button" class="btn text-capitalize dropdown-toggle"><span>$ US
										Dollar</span></button>
								<div id="currency-dropdown" class="currency">
									<ul>
										<li><span>$ US Dollar</span></li>
									</ul>
								</div>
							</div>
							<div class="contact">
								<i class="material-icons">phone</i>
								<span> (84) 399990357</span>
							</div>
						</div>
						<div class="header-middle float-lg-left float-md-left float-sm-left float-xs-none">
							<div class="logo">
								<router-link to="/"><a><img src="../../../assets/img/logos/logo.png"
											alt="NatureCircle"></a></router-link>
							</div>
						</div>
						<div class="header-right d-flex d-xs-flex d-sm-flex justify-content-end float-right">
							<div class="search-wrapper">
								<a>
									<i class="material-icons search">search</i>
									<i class="material-icons close">close</i> </a>
								<div autocomplete="off" class="search-form">
									<div class="autocomplete" style="width:300px;">
										<input id="myInput" type="text" name="myCountry" placeholder="Search here">
										<button type="button"><i class="material-icons">search</i></button>
									</div>
								</div>
							</div>
							<div class="user-info">
								<button type="button" class="btn">
									<i class="material-icons">perm_identity</i> </button>
								<div id="user-dropdown" class="user-menu">
									<ul>
										<li><a class="text-capitalize">my account</a></li>
										<li><a class="modal-view button" data-toggle="modal"
												data-target="#modalRegisterForm">Register</a></li>
										<li><a class="modal-view button" data-toggle="modal"
												data-target="#modalLoginForm">login</a></li>
									</ul>
								</div>
							</div>
							<div class="cart-wrapper">
								<button type="button" class="btn">
									<i class="material-icons">shopping_cart</i>
									<span class="ttcount">1</span> </button>
								<div id="cart-dropdown" class="cart-menu">
									<ul class="w-100 float-left">
										<li>
											<table class="table table-striped">
												<tbody>
													<tr>
														<td class="text-center"><a href="#"><img
																	src="../../../assets/img/products/01.jpg" alt="01"
																	title="01"></a>
														</td>
														<td class="text-left product-name"><a href="#">(Cart is being implemented)</a>
															<div class="quantity float-left w-100">
																<span class="cart-qty">1 × </span>
																<span class="text-left price"> $20.00</span>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</li>
										<li>
											<table class="table price mb-30">
												<tbody>
													<tr>
														<td class="text-left"><strong>Total</strong></td>
														<td class="text-right"><strong>$2,122.00</strong></td>
													</tr>
												</tbody>
											</table>
										</li>
										<li class="buttons w-100 float-left">
											<form>
												<input class="btn pull-left mt_10 btn-primary btn-rounded w-100"
													value="View cart" type="submit">
											</form>
											<form>
												<input class="btn pull-right mt_10 btn-primary btn-rounded w-100"
													value="Checkout" type="submit">
											</form>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ShopLayoutMenu />
			</div>
		</div>
	</header>

	<!-- Register modal -->
	<div class="modal fade" id="modalRegisterForm" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header text-center">
					<h4 class="modal-title w-100 font-weight-medium text-left">Sign up (is being implemented)</h4>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body mx-3">
					<div class="md-form mb-4">
						<input type="text" id="RegisterForm-name" class="form-control validate" placeholder="Your name">
					</div>
					<div class="md-form mb-4">
						<input type="email" id="RegisterForm-email" class="form-control validate" placeholder="Your email">
					</div>
					<div class="md-form mb-4">
						<input type="password" id="RegisterForm-pass" class="form-control validate"
							placeholder="Your password">
					</div>
					<div class="checkbox-link d-flex justify-content-between">
						<div class="left-col">
							<input id="remember-me" type="checkbox"><label for="remember_me">Remember Me</label>
						</div>
						<div class="right-col"><a>Forget Password?</a></div>
					</div>
				</div>

				<div class="modal-footer d-flex justify-content-center">
					<button class="btn btn-primary">Sign up</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Login modal -->
	<div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header text-center">
					<h4 class="modal-title w-100 font-weight-medium text-left">Sign in  (is being implemented)</h4>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body mx-3">
					<div class="md-form mb-4">
						<input type="text" id="LoginForm-name" class="form-control validate" placeholder="Your name">
					</div>
					<div class="md-form mb-4">
						<input type="password" id="LoginForm-pass" class="form-control validate"
							placeholder="Your password">
					</div>
					<div class="checkbox-link d-flex justify-content-between">
						<div class="left-col">
							<input type="checkbox" id="remember_me"><label for="remember_me">Remember Me</label>
						</div>
						<div class="right-col"><a>Forget Password?</a></div>
					</div>
				</div>

				<div class="modal-footer d-flex justify-content-center">
					<button class="btn btn-primary">Sign in</button>
				</div>
			</div>
		</div>
	</div>
</template>