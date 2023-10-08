<template>
    <div class="menu">
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-light d-sm-none d-xs-none d-lg-block navbar-full">

            <!-- Navbar brand -->
            <a class="navbar-brand text-uppercase d-none" href="#">Navbar</a>

            <!-- Collapsible content -->
            <div class="collapse navbar-collapse">

                <!-- Links -->
                <ul class="navbar-nav m-auto justify-content-center">
                    <li class="nav-item dropdown active">
                        <a class="nav-link text-uppercase" href="category.html"> Home <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item dropdown mega-dropdown">
                        <a class="nav-link dropdown-toggle text-uppercase" href="category.html">Category</a>
                        <div class="dropdown-menu mega-menu v-2 z-depth-1 special-color py-3 px-3">
                            <div class="row">
                                <div class="col-md-12 col-xl-6 sub-menu mb-xl-0 mb-4">
                                    <!--Featured image-->
                                    <ul class="list-unstyled">
                                        <li>
                                            <a class="menu-item pl-0" href="filter-toggle.html">
                                                Category 1 </a>
                                        </li>
                                        <li>
                                            <a class="menu-item pl-0" href="off-canvas-left.html">
                                                Category 2 </a>
                                        </li>
                                        <li>
                                            <a class="menu-item pl-0" href="off-canvas-right.html">
                                                Category 3 </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-md-6 col-xl-6 sub-menu mb-0">
                                    <ul class="list-unstyled">
                                        <li>
                                            <span class="menu-banner"><img src="../../../assets/img/banner/menu-banner.jpg"
                                                    alt="menu-banner" /></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link text-uppercase" href="category.html">Blog</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link text-uppercase" href="contact-us.html">Contact Us</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link text-uppercase" href="contact-us.html">About Us</a>
                    </li>
                </ul>
                <!-- Links -->
            </div>
            <!-- Collapsible content -->
        </nav>
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-dark d-lg-none navbar-responsive">

            <!-- Navbar brand -->
            <a class="navbar-brand text-uppercase d-none" href="#">Navbar</a>

            <!-- Collapse button -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent2"
                aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">
                    <i class='material-icons'>sort</i>
                </span>
            </button>

            <!-- Collapsible content -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent2">

                <!-- Links -->
                <ul class="navbar-nav m-auto justify-content-center">

                    <!-- Features -->
                    <li class="nav-item dropdown active">
                        <a class="nav-link text-uppercase" href="#"> Home <span class="sr-only">(current)</span> </a>
                    </li>
                    <li class="nav-item dropdown mega-dropdown">
                        <a class="nav-link dropdown-toggle text-uppercase" data-toggle="collapse" data-target="#menu3"
                            aria-controls="menu3" aria-expanded="false" aria-label="Toggle navigation" href="#">Category</a>
                        <div class="dropdown-menu mega-menu v-2 z-depth-1 special-color py-3 px-3" id="menu3">
                            <div class="row">
                                <div class="col-md-12 col-xl-4 sub-menu mb-xl-0 mb-4">
                                    <!--Featured image-->
                                    <ul class="list-unstyled">
                                        <li>
                                            <a class="menu-item pl-0" href="filter-toggle.html">
                                                filter toggle </a>
                                        </li>
                                        <li>
                                            <a class="menu-item pl-0" href="off-canvas-left.html">
                                                off canvas left </a>
                                        </li>
                                        <li>
                                            <a class="menu-item pl-0" href="off-canvas-right.html">
                                                off canvas right </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-md-6 col-xl-4 sub-menu mb-0">

                                    <ul class="list-unstyled">
                                        <li>
                                            <span class="menu-banner"><img src="../../../assets/img/banner/menu-banner.jpg"
                                                    alt="menu-banner" /></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <!-- Technology -->
                    <li class="nav-item dropdown">
                        <a class="nav-link text-uppercase" href="#">Blog</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link text-uppercase" href="contact-us.html">Contact Us</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link text-uppercase" href="#">About Us</a>
                    </li>
                </ul>
                <!-- Links -->
            </div>
            <!-- Collapsible content -->
        </nav>
    </div>
</template>
<script>
export default {
    name: 'LayoutMenu'
}
</script>