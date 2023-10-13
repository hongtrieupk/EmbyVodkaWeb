<script>
export default {
    name: 'ShopLayoutMenu'
}
</script>

<template>
    <div class="menu">
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-light d-sm-none d-xs-none d-lg-block navbar-full">

            <!-- Navbar brand -->
            <a class="navbar-brand text-uppercase d-none">Navbar</a>

            <!-- Collapsible content -->
            <div class="collapse navbar-collapse">

                <!-- Links -->
                <ul class="navbar-nav m-auto justify-content-center">
                    <li class="nav-item dropdown active">
                        <router-link to="/">
                            <a class="nav-link text-uppercase"> Home <span class="sr-only">(current)</span></a>
                        </router-link>
                    </li>
                    <li class="nav-item dropdown mega-dropdown">
                        <router-link to="/products">
                            <a class="nav-link dropdown-toggle text-uppercase">Category</a>
                        </router-link>
                        <div class="dropdown-menu mega-menu v-2 z-depth-1 special-color py-3 px-3">
                            <div class="row">
                                <div class="col-md-12 col-xl-6 sub-menu mb-xl-0 mb-4">
                                    <!--Featured image-->
                                    <ul class="list-unstyled">
                                        <li>
                                            <router-link to="/products"><a class="menu-item pl-0">T-Shirt </a></router-link>
                                        </li>
                                        <li>
                                            <router-link to="/products"><a class="menu-item pl-0">Dress </a></router-link>
                                        </li>
                                        <li>
                                            <router-link to="/products"><a class="menu-item pl-0">Jean </a></router-link>
                                        </li>
                                        <li>
                                            <router-link to="/products"><a class="menu-item pl-0">Coats & Jackets </a></router-link>
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
                        <router-link to="/contact-us">
                            <a class="nav-link text-uppercase">Contact Us</a>
                        </router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <router-link to="/about-us">
                            <a class="nav-link text-uppercase">About Us</a>
                        </router-link>
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
                        <router-link to="/">
                            <a class="nav-link text-uppercase"> Home <span class="sr-only">(current)</span> </a>
                        </router-link>
                    </li>
                    <li class="nav-item dropdown mega-dropdown">
                        <router-link to="/products">
                            <a class="nav-link dropdown-toggle text-uppercase" data-toggle="collapse" data-target="#menu3"
                            aria-controls="menu3" aria-expanded="false" aria-label="Toggle navigation">Category</a>
                        </router-link>                       
                        <div class="dropdown-menu mega-menu v-2 z-depth-1 special-color py-3 px-3" id="menu3">
                            <div class="row">
                                <div class="col-md-12 col-xl-4 sub-menu mb-xl-0 mb-4">
                                    <!--Featured image-->
                                    <ul class="list-unstyled">
                                        <li>
                                            <router-link to="/products"><a class="menu-item pl-0">T-Shirt </a></router-link>
                                        </li>
                                        <li>
                                            <router-link to="/products"><a class="menu-item pl-0">Dress </a></router-link>
                                        </li>
                                        <li>
                                            <router-link to="/products"><a class="menu-item pl-0">Jean </a></router-link>
                                        </li>
                                        <li>
                                            <router-link to="/products"><a class="menu-item pl-0">Coats & Jackets </a></router-link>
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
                    <li class="nav-item dropdown">
                        <router-link to="/contact-us">
                            <a class="nav-link text-uppercase">Contact Us</a>
                        </router-link>
                    </li>

                    <li class="nav-item dropdown">
                        <router-link to="/about-us">
                            <a class="nav-link text-uppercase">About Us</a>
                        </router-link>
                    </li>
                </ul>
                <!-- Links -->
            </div>
            <!-- Collapsible content -->
        </nav>
    </div>
</template>