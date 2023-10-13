
/* eslint-disable */
export function initializeWindowEvent() {    
    $(window).on('resize', function () {
        contentwidth();
        responsivemenu();
        responsivemenu2();
        responsiveheaderleft();
        header();
        stickyleft();
    });

    $(window).on('scroll', function () {
        hb_animated_contents();
        header();
        fixed_productblock();
    });

    $(window).on("load", function () {
        hb_animated_contents();
    });
}
export function initializePage(){
    var max_link = 5;
    var items = $('.navbar.navbar-full .navbar-nav > .nav-item');
    var surplus = items.slice(max_link, items.length);
    surplus.wrapAll('<li class="more_menu nav-item dropdown"><ul class="menu-dropdown cat-drop-menu">');
    $('.more_menu').prepend('<a href="#" class="nav-link dropdown-toggle text-uppercase">More</a>');

    contentwidth();
    responsivemenu();
    responsivemenu2();
    responsiveheaderleft();
    header();
    stickyleft();
    
    /* Go to Top JS START */
    if ($('#goToTop').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#goToTop').addClass('show');
                } else {
                    $('#goToTop').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#goToTop').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
    /* Go to Top JS END */

    $('[data-toggle="tooltip"]').tooltip();

    $(".search-wrapper a").on('click', function () {
        $('.search-form').parent().toggleClass('active');
        $("#cart-dropdown").css('display', 'none');
        $("#user-dropdown").css('display', 'none');
        $('.search-form').toggle('fast', function () {
        });
        $('.header-right > div.search-wrapper .search-form input').attr('autofocus', 'autofocus').focus();
    });
    /*---------------- End Search ---------------- */
    
    
    $("body").on('click', function () {
        $('.off-canvas-left').removeClass('active');
        $('.off-canvas-right').removeClass('active');
        $(".filter-title-canvas").on("click", function (event) {
            event.stopPropagation();
        });
        $(".sidebar-canvas").on("click", function (event) {
            event.stopPropagation();
        });

    });
    /*---------------- Start User-info ---------------- */
    $('.user-info .btn').on('click', function (event) {
        $(this).toggleClass('active');
        event.stopPropagation();
        $("#user-dropdown").slideToggle("fast");
        $("#cart-dropdown").css('display', 'none');
        $(".search-form").css('display', 'none');
        $(".search-wrapper").removeClass("active");
        return false;
    });
    /*---------------- End User-info ---------------- */
    /*---------------- Start cart ---------------- */
    $('.cart-wrapper > .btn').on('click', function (event) {
        $(this).toggleClass('active');
        event.stopPropagation();
        $("#cart-dropdown").slideToggle("fast");
        $("#user-dropdown").css('display', 'none');
        $(".search-form").css('display', 'none');
        $(".search-wrapper").removeClass("active");
        return false;
    });
    $("#cart-dropdown").on("click", function (event) {
        event.stopPropagation();
    });
    
    /*---------------- End cart ---------------- */
    
    var $class = $("body");
    if ($class.hasClass('category') || $class.hasClass('off-canvas-left') || $class.hasClass('off-canvas-right')) {
        $("#slider-range").slider({
            range: true,
            min: 55,
            max: 1000,
            values: [55, 1000],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));
    }
    /*---------------- Start currency ---------------- */
    $('.currency-wrapper .btn').on('click', function (event) {
        $(this).toggleClass('active');
        event.stopPropagation();
        $("#currency-dropdown").slideToggle("fast");
        $("#cart-dropdown").css('display', 'none');
        $("#user-dropdown").css('display', 'none');
        $("#language-dropdown").css('display', 'none');
        $(".search-form").css('display', 'none');
        $(".search-wrapper").removeClass("active");
        return false;
    });
    $("#currency-dropdown").on("click", function (event) {
        event.stopPropagation();
    });
    /*---------------- End currency ---------------- */
    /*---------------- Start currency ---------------- */
    $('.language-wrapper .btn').on('click', function (event) {
        $(this).toggleClass('active');
        event.stopPropagation();
        $("#language-dropdown").slideToggle("fast");
        $("#cart-dropdown").css('display', 'none');
        $("#user-dropdown").css('display', 'none');
        $("#currency-dropdown").css('display', 'none');
        $(".search-form").css('display', 'none');
        $(".search-wrapper").removeClass("active");
        return false;
    });
    $("#language-dropdown").on("click", function (event) {
        event.stopPropagation();
    });
    /*---------------- End currency ---------------- */
}

export function owlCarouselProductDetails() {
    $('.default.small-image-list .nav-add').owlCarousel({
        items: 4, //1 items above 1000px browser width
        nav: true,
        navText: [
            "<i class='material-icons'>&#xE5CB;</i>",
            "<i class='material-icons'>&#xE5CC;</i>"
        ],
        dots: false,
        loop: false,
        autoplayHoverPause: true,
        autoplay: false,
        margin: 10,
        responsive: {
            1279: {
                items: 4
            },
            992: {
                items: 3
            },
            481: {
                items: 3
            },
            100: {
                items: 2
            }
        }
    });

    $('.small-image-slider-single-product-tabstyle-3 a').on('click', function (e) {
        e.preventDefault();

        var $thisParent = $(this).closest('.left-columm');
        var $href = $(this).attr('href');
        $thisParent.find('.small-image-slider-single-product-tabstyle-3 a').removeClass('active');
        $(this).addClass('active');

        $thisParent.find('.product-large-image .tab-pane').removeClass('active show');
        $thisParent.find('.product-large-image ' + $href).addClass('active show');
    });
}

export function owlCarouselBrandLogos() {
    $('.tt-brand').owlCarousel({
        items: 6,
        nav: true,
        navText: [
            "<i class='material-icons'>&#xE5CB;</i>",
            "<i class='material-icons'>&#xE5CC;</i>"
        ],
        dots: false,
        loop: true,
        autoplayHoverPause: true,
        autoplay: true,
        responsive: {
            1279: {
                items: 6
            },
            1199: {
                items: 4
            },
            544: {
                items: 3
            },
            320: {
                items: 2
            }
        }
    });
}

export function owlCarouselHomeSlider() {
    const homeSlider = $('div.slider.slider-for.owl-carousel.owl-loaded.owl-drag');
    if(!homeSlider.length) {
        $('.slider-for').owlCarousel({
            items: 1,
            nav: true,
            navText: [
                "<i class='material-icons'>&#xE5CB;</i>",
                "<i class='material-icons'>&#xE5CC;</i>"
            ],
            dots: true,
            loop: true,
            responsive: {
                1279: {
                    items: 1
                },
                992: {
                    items: 1
                },
                481: {
                    items: 1
                },
                100: {
                    items: 1
                }
            }
        });
    } else {
        homeSlider.removeClass('owl-hidden');
    }
}

export function owlCarouselHomeSpecialProducts() {
    $('.ttspecial-content').owlCarousel({
        items: 4,
        nav: true,
        navText: [
            "<i class='material-icons'>&#xE5CB;</i>",
            "<i class='material-icons'>&#xE5CC;</i>"
        ],
        dots: false,
        loop: true,
        autoplayHoverPause: true,
        autoplay: true,
        responsive: {
            1279: {
                items: 4
            },
            992: {
                items: 3
            },
            768: {
                items: 3
            },
            320: {
                items: 2
            }
        }
    });
}

export function owlCarouselHomeBlogs() {
    $('.layout3 .smartblog-content').owlCarousel({
        items: 1,
        nav: true,
        navText: [
            "<i class='material-icons'>&#xE5CB;</i>",
            "<i class='material-icons'>&#xE5CC;</i>"
        ],
        dots: false,
        autoplayHoverPause: true,
        loop: false,
        autoplay: true,
        responsive: {
            1279: {
                items: 1
            },
            992: {
                items: 3
            },
            544: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });
}

export function initTabsForTrendingProducts(){
    initialize_owl($('#owl1'));

    $('a[href="#ttfeatured-main"]').on('shown.bs.tab', function () {
        initialize_owl($('#owl1'));
    }).on('hide.bs.tab', function () {
        destroy_owl($('#owl1'));
    });

    $('a[href="#ttnew-main"]').on('shown.bs.tab', function () {
        initialize_owl($('#owl2'));
    }).on('hide.bs.tab', function () {
        destroy_owl($('#owl2'));
    });

    $('a[href="#ttbestseller-main"]').on('shown.bs.tab', function () {
        initialize_owl($('#owl3'));
    }).on('hide.bs.tab', function () {
        destroy_owl($('#owl3'));
    });
}

export function initializeShoppingTheme() {
    $(".code").on('click', function () {
        $(".code-content").toggle("slow", function () {
        });
    });
    $("#change-password-checkbox").on("change", function () {
        $("#account-change-password").toggleClass("show")
    });
    $("#checkbox-card").on("change", function () {
        $("#card-dropdown").toggleClass("show");
        $("#card-dropdown-debit").removeClass("show");
        $("#card-dropdown-paypal").removeClass("show");
    });
    $("#checkbox-card-debit").on("change", function () {
        $("#card-dropdown-debit").toggleClass("show");
        $("#card-dropdown").removeClass("show");
        $("#card-dropdown-paypal").removeClass("show");
    });
    $("#checkbox-card-paypal").on("change", function () {
        $("#card-dropdown-paypal").toggleClass("show");
        $("#card-dropdown-debit").removeClass("show");
        $("#card-dropdown").removeClass("show");
    });
    $("#same-address-main").on("change", function () {
        $("#checkout-shipping-address").toggleClass("show")
    });
    $("#different-address-main").on("change", function () {
        $("#checkout-shipping-address-diff").toggleClass("show")
    });
    /*--- review scroll js ----*/
    $('.review-down').on('click', function () {
        $('html, body').animate({ scrollTop: $('.product-tab-area .tabs #tab2').offset().top - 100 }, 'slow');
        return false;
    });
    $('.single-post-content .btn').on('click', function () {
        $('html, body').animate({ scrollTop: $('.post-comment-form').offset().top - 100 }, 'slow');
        return false;
    });
  

    $(".btn-compare").on('click', function () {
        $(".compare-wrapper").slideToggle("slow", function () {
        });
    });


    $(".compare-wrapper .close").on('click', function () {
        $(".compare-wrapper").slideToggle("slow", function () {
            // Animation complete.
        });
    });


    $(".filter-drawer-title").on('click', function () {
        $('.main-content').toggleClass('active');
    });



    $(".filter-title").on('click', function () {
        $('.sidebar-filter').toggle('fast', function () {
        });
        $('.filter-toggle-main').toggle('fast', function () {
        });
    });
    $(".close-filter").on('click', function () {
        $('.off-canvas-left').removeClass('active');
        $('.off-canvas-right').removeClass('active');
    });
    
    $(".filter-title-canvas").on('click', function () {
        $('body').toggleClass('active');
    });

    $('.leftmenu').on('click', function () {
        $(this).toggleClass('active');
        $(".menu").toggleClass('active');
    });



    $('.btn-vertical-slider').on('click', function () {

        if ($(this).attr('data-slide') == 'next') {
            $('.nav-add-compact').carousel('next');
        }
        if ($(this).attr('data-slide') == 'prev') {
            $('.nav-add-compact').carousel('prev')
        }

    });

    $('#ttcmsservice .ttserviceblock').owlCarousel({
        items: 3, //1 items above 1000px browser width
        nav: false,
        dots: false,
        loop: true,
        responsive: {
            1279: {
                items: 3
            },
            992: {
                items: 3
            },
            481: {
                items: 2
            },
            100: {
                items: 1
            }
        }
    });

    $('#ttcmssubbanner .ttbannerblock .row .ttinner-banner').owlCarousel({
        items: 3, //1 items above 1000px browser width
        nav: false,
        dots: false,
        loop: true,
        responsive: {
            1279: {
                items: 3
            },
            992: {
                items: 3
            },
            481: {
                items: 2
            },
            100: {
                items: 1
            }
        }
    });

    $('.inner-category').owlCarousel({
        items: 3, //1 items above 1000px browser width
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            1279: {
                items: 3
            },
            992: {
                items: 3
            },
            481: {
                items: 2
            },
            100: {
                items: 1
            }
        }
    });

    $('.ttlookbook-content').owlCarousel({
        items: 1, //1 items above 1000px browser width
        nav: false,
        dots: false,
        responsive: {
            1279: {
                items: 1
            },
            992: {
                items: 1
            },
            481: {
                items: 1
            },
            100: {
                items: 1
            }
        }
    });

    $('.ttlookbook-content .inner-img').owlCarousel({
        items: 2, //1 items above 1000px browser width
        nav: false,
        autoplay: true,
        autoplayHoverPause: true,
        dots: false,
        loop: true,
        responsive: {
            1279: {
                items: 2
            },
            992: {
                items: 1
            },
            481: {
                items: 1
            },
            100: {
                items: 1
            }
        }
    });

    $('#category-products .ttproduct-cat-item:even').addClass('even');
    $('#category-products .ttproduct-cat-item:odd').addClass('odd');

    $('#category-products .ttproduct-cat-item.even .tt_cat_content').each(function (index, element) {
        var html = '';
        html += '<div class="description right-block text-center">' + $(element).find('.description').html() + '</div>';
        html += '<div class="category-img left-block">' + $(element).find('.category-img').html() + '</div>';
        $(element).html(html);
    });

    $('.layout5 #ttcmssubbanner .ttbannerblock .ttbanner:even').addClass('even');
    $('.layout5 #ttcmssubbanner .ttbannerblock .ttbanner:odd').addClass('odd');

    $('.layout5 #ttcmssubbanner .ttbannerblock .ttbanner:even .ttbanner-content').each(function (index, element) {
        var html = '';
        html += '<div class="ttbanner-inner right-block text-center">' + $(element).find('.ttbanner-inner').html() + '</div>';
        html += '<div class="ttbanner-img left-block">' + $(element).find('.ttbanner-img').html() + '</div>';
        $(element).html(html);
    });


    /*--- start testimonial js ----*/
    $('.ttcmsservices').owlCarousel({
        items: 3, //1 items above 1000px browser width
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            1279: {
                items: 3
            },
            992: {
                items: 3
            },
            481: {
                items: 2
            },
            100: {
                items: 1
            }
        }
    });

    /*--- start testimonial js ----*/
    $('#about-us .tttesti').owlCarousel({
        items: 3, //1 items above 1000px browser width
        nav: false,
        dots: true,
        loop: true,
        autoplay: true,
        center: true,
        autoplayHoverPause: true,
        responsive: {
            1279: {
                items: 3
            },
            992: {
                items: 3
            },
            481: {
                items: 2
            },
            100: {
                items: 1
            }
        }
    });



    
    /*--- start special js ----*/
    $('#sidebar-product .sale .products').owlCarousel({
        items: 1, //1 items above 1000px browser width
        nav: true,
        navText: [
            "<i class='material-icons'>&#xE5CB;</i>",
            "<i class='material-icons'>&#xE5CC;</i>"
        ],
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        responsive: {
            1279: {
                items: 1
            },
            992: {
                items: 1
            },
            768: {
                items: 1
            },
            320: {
                items: 1
            }
        }
    });

    /*--- start accessories js ----*/
    $('.product-accessories-content').owlCarousel({
        items: 4, //1 items above 1000px browser width
        nav: true,
        dots: false,
        loop: true,
        autoplayHoverPause: true,
        autoplay: true,
        responsive: {
            1279: {
                items: 4
            },
            992: {
                items: 3
            },
            481: {
                items: 2
            },
            100: {
                items: 2
            }
        }
    });


    /*--- start blog js ----*/
    $('.layout1 .smartblog-content,.layout4 .smartblog-content,.layout5 .smartblog-content,.layout2 .smartblog-content').owlCarousel({
        items: 3, //1 items above 1000px browser width
        nav: false,
        navText: [
            "<i class='material-icons'>&#xE5CB;</i>",
            "<i class='material-icons'>&#xE5CC;</i>"
        ],
        dots: false,
        autoplayHoverPause: true,
        loop: false,
        autoplay: true,
        responsive: {
            1279: {
                items: 3
            },
            992: {
                items: 3
            },
            544: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });




    /*--- start blog js ----*/
    
    $('.product_view .small-image-list .nav-add').owlCarousel({
        items: 3, //1 items above 1000px browser width
        nav: true,
        navText: [
            "<i class='material-icons'>&#xE5CB;</i>",
            "<i class='material-icons'>&#xE5CC;</i>"
        ],
        dots: false,
        loop: false,
        autoplayHoverPause: true,
        autoplay: false,
        margin: 10,
        responsive: {
            1279: {
                items: 3
            },
            1199: {
                items: 3
            },
            544: {
                items: 3
            },
            320: {
                items: 2
            }
        }
    });



    /*--- start product additional js ----*/
    

    $('.extended.small-image-list .nav-add').owlCarousel({
        items: 3, //1 items above 1000px browser width
        nav: true,
        dots: false,
        loop: true,
        autoplayHoverPause: true,
        autoplay: true,
        center: true,
        margin: 10,
        responsive: {
            1279: {
                items: 3
            },
            992: {
                items: 3
            },
            481: {
                items: 3
            },
            100: {
                items: 2
            }
        }
    });

    function autocomplete(inp, arr) {
        /*the autocomplete function takes two arguments,
        the text field element and an array of possible autocompleted values:*/
        var currentFocus;
        /*execute a function when someone writes in the text field:*/
        inp.addEventListener("input", function () {
            var a, b, i, val = this.value;
            /*close any already open lists of autocompleted values*/
            closeAllLists();
            if (!val) { return false; }
            currentFocus = -1;
            /*create a DIV element that will contain the items (values):*/
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            /*append the DIV element as a child of the autocomplete container:*/
            this.parentNode.appendChild(a);
            /*for each item in the array...*/
            for (i = 0; i < arr.length; i++) {
                /*check if the item starts with the same letters as the text field value:*/
                if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                    /*create a DIV element for each matching element:*/
                    b = document.createElement("DIV");
                    /*make the matching letters bold:*/
                    b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                    b.innerHTML += arr[i].substr(val.length);
                    /*insert a input field that will hold the current array item's value:*/
                    b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                    /*execute a function when someone clicks on the item value (DIV element):*/
                    b.addEventListener("click", function () {
                        /*insert the value for the autocomplete text field:*/
                        inp.value = this.getElementsByTagName("input")[0].value;
                        /*close the list of autocompleted values,
                        (or any other open lists of autocompleted values:*/
                        closeAllLists();
                    });
                    a.appendChild(b);
                }
            }
        });
        /*execute a function presses a key on the keyboard:*/
        inp.addEventListener("keydown", function (e) {
            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {
                /*If the arrow DOWN key is pressed,
                increase the currentFocus variable:*/
                currentFocus++;
                /*and and make the current item more visible:*/
                addActive(x);
            } else if (e.keyCode == 38) { //up
                /*If the arrow UP key is pressed,
                decrease the currentFocus variable:*/
                currentFocus--;
                /*and and make the current item more visible:*/
                addActive(x);
            } else if (e.keyCode == 13) {
                /*If the ENTER key is pressed, prevent the form from being submitted,*/
                e.preventDefault();
                if (currentFocus > -1) {
                    /*and simulate a click on the "active" item:*/
                    if (x) x[currentFocus].click();
                }
            }
        });
        function addActive(x) {
            /*a function to classify an item as "active":*/
            if (!x) return false;
            /*start by removing the "active" class on all items:*/
            removeActive(x);
            if (currentFocus >= x.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = (x.length - 1);
            /*add class "autocomplete-active":*/
            x[currentFocus].classList.add("autocomplete-active");
        }
        function removeActive(x) {
            /*a function to remove the "active" class from all autocomplete items:*/
            for (var i = 0; i < x.length; i++) {
                x[i].classList.remove("autocomplete-active");
            }
        }
        function closeAllLists(elmnt) {
            /*close all autocomplete lists in the document,
            except the one passed as an argument:*/
            var x = document.getElementsByClassName("autocomplete-items");
            for (var i = 0; i < x.length; i++) {
                if (elmnt != x[i] && elmnt != inp) {
                    x[i].parentNode.removeChild(x[i]);
                }
            }
        }
        /*execute a function when someone clicks in the document:*/
        document.addEventListener("click", function (e) {
            closeAllLists(e.target);
        });
    }

    /*An array containing all the country names in the world:*/
    var countries = ["aspetur autodit autfugit", "aliquam quaerat voluptatem", "magni dolores eosquies", "voluptas nulla pariatur", "aliquam quat voluptatem", "voluptas sit aspernatur", "similique suntin culpaqui", "suscipit laboriosam nisi", "abc"];

    /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
    autocomplete(document.getElementById("myInput"), countries);


    /* 1. Visualizing things on Hover - See next part for action on click */
    $('#stars li').on('mouseover', function () {
        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children('li.star').each(function (e) {
            if (e < onStar) {
                $(this).addClass('hover');
            }
            else {
                $(this).removeClass('hover');
            }
        });

    }).on('mouseout', function () {
        $(this).parent().children('li.star').each(function () {
            $(this).removeClass('hover');
        });
    });


    /* 2. Action to perform on click */
    $('#stars li').on('click', function () {
        var onStar = parseInt($(this).data('value'), 10); // The star currently selected
        var stars = $(this).parent().children('li.star');

        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
        }

        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
        }

        // JUST RESPONSE (Not needed)
        var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
        var msg = "";
        if (ratingValue > 1) {
            msg = "Thanks! You rated this " + ratingValue + " stars.";
        }
        else {
            msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
        }
        responseMessage(msg);

    });
}

/* ------------ Start Content-width JS --------------- */
function contentwidth() {
    var colsWidth = $('.right-column, .left-column').length;
    if ($(window).width() >= 1300) {
        $(".content-wrapper").addClass("Cwidth");
        $(".left-column").addClass("Lwidth");
        $(".right-column").addClass("Rwidth");
        if (colsWidth == 2) {
            $('.Cwidth').css('width', '60%');
            $('.Lwidth').css('width', '20%');
            $('.Rwidth').css('width', '20%');
        } else if (colsWidth == 1) {
            $('.Cwidth').css('width', '75%');
            $('.Lwidth').css('width', '25%');
            $('.Rwidth').css('width', '25%');
        } else {
            $('.Cwidth').css('width', '100%');
        }
    } else if ($(window).width() > 991) {
        $(".content-wrapper").addClass("Cwidth");
        $(".left-column").addClass("Lwidth");
        $(".right-column").addClass("Rwidth");
        if (colsWidth == 2) {
            $('.Cwidth').css('width', '60%');
            $('.Lwidth').css('width', '20%');
            $('.Rwidth').css('width', '20%');
            $(".right-column").addClass("Rtoggle");
            $(".right-column h1.text-uppercase").on('click', function () {
                $(this).parent().toggleClass('active').find('.rightcolumn-toggle').slideToggle("200");
            });
        } else if (colsWidth == 1) {
            $('.Cwidth').css('width', '75%');
            $('.Lwidth').css('width', '25%');
            $('.Rwidth').css('width', '25%');
        } else {
            $('.Cwidth').css('width', '100%');
        }
    } else {
        $(".content-wrapper").removeClass("Cwidth");
        $(".left-column").removeClass("Lwidth");
        $(".right-column").removeClass("Rwidth");
        $(".right-column").removeClass("Rtoggle");
        $('.content-wrapper').removeAttr("style");
        $('.left-column').removeAttr("style");
        $('.right-column').removeAttr("style");
    }
}


function responseMessage(msg) {
    $('.success-box').fadeIn(200);
    $('.success-box div.text-message').html("<span>" + msg + "</span>");
}
/*****************start animation script*******************/
function hb_animated_contents() {
    $(".hb-animate-element:in-viewport").each(function (i) {
        var $this = $(this);
        if (!$this.hasClass('hb-in-viewport')) {
            setTimeout(function () {
                $this.addClass('hb-in-viewport');
            }, 100 * i);
        }
    });
}


/*****************end animation script*******************/

function initialize_owl(el) {
    el.owlCarousel({
        items: 4, //1 items above 1000px browser width
        nav: true,
        navText: [
            "<i class='material-icons'>&#xE5CB;</i>",
            "<i class='material-icons'>&#xE5CC;</i>"
        ],
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            1279: {
                items: 4
            },
            992: {
                items: 3
            },
            768: {
                items: 3
            },
            320: {
                items: 2
            }
        }
    });
}

function destroy_owl(el) {
    if (typeof el.data('owlCarousel') != 'undefined') {
        el.data('owlCarousel').destroy();
        el.removeClass('owl-carousel');
    }
}

function responsivemenu() {
    if ($(document).width() <= 991) {
        $('.header-default .header-main .container .header-right').insertAfter('.navbar-responsive');
    } else {
        $('.header-default .menu .header-right').insertAfter('.header-middle');
    }
}

/*--------- End js for left-column -------------*/




function responsivemenu2() {
    if ($(document).width() <= 991) {
        $('.header1 .nav-right').insertAfter('.navbar-responsive .navbar-nav');
    } else {
        $('.header1 .nav-right').insertAfter('.nav-left');
    }
}

/*--------- Start js for left-column -------------*/

function responsiveheaderleft() {
    if ($(document).width() <= 991) {
        $('.header-default .header-left').insertAfter('.navbar-responsive .navbar-nav');
    } else {
        $('.header-default .header-left').insertBefore('.header-middle');
    }
}

/*--------- End js for left-column -------------*/

function header() {
    if ($(window).width() > 1199) {
        if ($(window).scrollTop() > 200) {
            $('.header-main-sticky').addClass("fixed-header");

        } else {
            $('.header-main-sticky').removeClass("fixed-header");
        }
    } else {
        $('.header-main-sticky').removeClass("fixed-header");
    }
}

function fixed_productblock() {
    if (jQuery(window).width() < 768) return;

    if (jQuery('#product-sticky-right .product-information,#product-grid .product-information').height() > jQuery('#product-sticky-right .left-column,#product-grid .left-column').height()) return;

    jQuery('#product-sticky-right .product-information,#product-grid .product-information').each(function () {
        var el = jQuery(this),
            parent = el.parent(),
            heightOffsetEl = jQuery('#product-sticky-right .left-column,#product-grid .left-column'),
            parentHeight = heightOffsetEl.outerHeight(),
            firstImg = heightOffsetEl.find('img').first(),
            firstImgHeight = firstImg.outerHeight();

        jQuery(window).on('resize', function () {
            parentHeight = heightOffsetEl.outerHeight();
            firstImgHeight = firstImg.outerHeight();
            el.css({
                'maxWidth': parent.width(),
                'minHeight': firstImgHeight
            });
            parent.height(parentHeight);
        });

        jQuery(window).resize();

        jQuery(this).stick_in_parent({
            offset_top: 120
        });


    });
}


function stickyleft() {
    if ($(document).width() <= 1199) {
        $('.content-wrapper, .sidebar').theiaStickySidebar({
            additionalMarginBottom: 30,
            additionalMarginTop: 30
        });
    } else if ($(document).width() >= 1200) {
        $('.content-wrapper, .sidebar').theiaStickySidebar({
            additionalMarginBottom: 120,
            additionalMarginTop: 120
        });
    }
}


/*--------- Start js for left-column -------------*/
