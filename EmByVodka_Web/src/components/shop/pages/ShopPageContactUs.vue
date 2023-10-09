<script>
export default {
    name: 'ShopPageContactUs'
}
</script>
<template>
    <div class="main-content w-100 float-left">
		<div class="container">
			<div class="row">
				<!--Google map-->
				<div id="map-container-google-1" class="z-depth-1-half map-container col-sm-12 mb-50"
					style="height: 500px">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.076044432091!2d106.60752191084586!3d10.805487758612093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bed92698963%3A0xc777e5dda33737e2!2zQ2h1bmcgY8awIFPGoW4gS-G7syAx!5e0!3m2!1sen!2s!4v1696759146156!5m2!1sen!2s" 
                    width="100%" height="500" frameborder="0" style="border:0" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>
				<!--Google Maps-->
				<div class="contact-form-area col-sm-7">
					<div class="contact-form-inner">
						<h4 class="text-capitalize">tell us your project</h4>
						<form id="contact-form" method="post">
							<div class="row">
								<div class="col-md-12">
									<label for="name" class="float-left">First Name<span
											class="required">*</span></label>
									<input type="text" name="name" id="name" class="float-right" required>
								</div>
								<div class="col-md-12">
									<label for="last_name" class="float-left">Last Name<span
											class="required">*</span></label>
									<input type="text" name="last_name" id="last_name" class="float-right" required>
								</div>
								<div class="col-md-12">
									<label for="email" class="float-left">Email<span class="required">*</span></label>
									<input type="text" name="email" id="email" class="float-right" required>
								</div>
								<div class="col-md-12">
									<label for="subject" class="float-left">Subject<span
											class="required">*</span></label>
									<input type="text" name="subject" id="subject" class="float-right" required>
								</div>
								<div class="col-md-12">
									<label for="message" class="float-left">Message</label>
									<textarea name="message" id="message" class="float-right"></textarea>
								</div>
							</div>
							<input type="submit" class="submit-btn default-btn btn-primary btn" value="Send Email">
							<p class="form-messege"></p>
						</form>
					</div>
				</div>
				<div class="contact-address col-sm-5">
					<div class="contact-inner float-left w-100">
						<div class="contact-information">
							<h4 class="text-capitalize">contact us</h4>

							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu vehicula turpis.
								Donec semper, nunc a imperdiet sollicitudin, lacus arcu semper nibh, non fermentum risus
								est quis augue.</p>
							<div class="contact-wrapper">
								<div class="contact-list">
									<i class="material-icons">place</i>
									<span>Address: Son Ky 1 Apartment, CN13 Street, Son Ky Ward, Tan Phu District, HCM City, Viet Nam</span>
								</div>
								<div class="contact-list">
									<i class="material-icons">call</i>
									<span>(84) 399990357</span>
								</div>
								<div class="contact-list">
									<i class="material-icons">email</i>
									<span>embyvodka@gmail.com</span>
								</div>
							</div>
						</div>
						<div class="working-time">
							<h5>Working hours</h5>
							<div>
								<div>Monday – Saturday</div>
								<div>09AM – 07PM</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>