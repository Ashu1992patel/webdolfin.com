<div class="mainmenu-area" id="mainmenu-area">
    <div class="mainmenu-area-bg"></div>
    <nav class="navbar">
        <div class="container container__full">
            <div class="row">
                <div class="col-md-12 flex-v-center">
                    <div class="navbar-header">
                        <a href="index.html" class="custom-logo-link default-logo">
                            <img src="wp-content/uploads/sites/2/2021/07/webdolphin-logo.svg" style="height: 100px;" alt="">
                            {{-- <img src="wp-content/uploads/sites/2/2021/07/logo-2.png" alt=""> --}}
                        </a>
                        <a href="index.html" class="custom-logo-link sticky-logo">
                            <img src="wp-content/uploads/sites/2/2021/07/webdolphin-logo.svg" style="height: 100px;" alt="">
                            {{-- <img src="wp-content/uploads/sites/2/2021/07/logo-2.png" alt=""> --}}
                        </a>
                    </div>
                    <svg class="ham hamRotate ham8" viewBox="0 0 100 100" width="60">
                        <path class="line top"
                            d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
                        <path class="line middle" d="m 30,50 h 40" />
                        <path class="line bottom"
                            d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
                    </svg>
                    
                    <div id="main-nav" class="stellarnav">
                        <ul id="nav" class="nav navbar-nav pull-right">
                            <li id="menu-item-2670"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-582 current-menu-ancestor current_page_parent current_page_ancestor menu-item-has-children {{ request()->is('home*') ? 'current-menu-parent current_page_item' : '' }}">
                                <a href="{{ route('home') }}">Home</a>
                            </li>

                            <li id="menu-item-597" class="menu-item menu-item-type-post_type menu-item-object-page {{ request()->is('about*') ? 'current-menu-parent current_page_item' : '' }}"><a
                                    href="{{ route('about') }}">About<span class="sub"></span></a></li>
                            <li id="menu-item-596"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children {{ request()->is('services*') ? 'current-menu-parent current_page_item' : '' }}">
                                <a href="{{ route('services') }}">Services<span class="sub"></span></a>
                                <ul class="sub-menu">
                                    <li id="menu-item-1888"
                                        class="menu-item menu-item-type-post_type menu-item-object-page"><a
                                            href="services/services-details/index.html">Services
                                            Details<span class="sub"></span></a></li>
                                </ul>
                            </li>

                            <li id="menu-item-597" class="menu-item menu-item-type-post_type menu-item-object-page {{ request()->is('team*') ? 'current-menu-parent current_page_item' : '' }}"><a
                                    href="{{ route('team') }}">Team</a></li>

                            <li id="menu-item-597" class="menu-item menu-item-type-post_type menu-item-object-page {{ request()->is('faq*') ? 'current-menu-parent current_page_item' : '' }}"><a
                                    href="{{ route('faq') }}">FAQ</a></li>

                            <li id="menu-item-597" class="menu-item menu-item-type-post_type menu-item-object-page {{ request()->is('plans*') ? 'current-menu-parent current_page_item' : '' }}"><a
                                    href="{{ route('plans') }}">Our Plans</a></li>


                            {{-- <li id="menu-item-2710"
                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                                <a href="#">Pages<span class="sub"></span></a>
                                <ul class="sub-menu">
                                    <li id="menu-item-2713"
                                        class="menu-item menu-item-type-post_type menu-item-object-page"><a
                                            href="{{ route('team') }}">Team<span class="sub"></span></a>
                                    </li>
                                    <li id="menu-item-2712"
                                        class="menu-item menu-item-type-post_type menu-item-object-page"><a
                                            href="{{ route('plans') }}">Our Plans<span class="sub"></span></a></li>
                                    <li id="menu-item-2711"
                                        class="menu-item menu-item-type-post_type menu-item-object-page"><a
                                            href="{{ route('faq') }}">FAQ<span class="sub"></span></a></li>
                                </ul>
                            </li> --}}
                            <li id="menu-item-595" class="menu-item menu-item-type-post_type menu-item-object-page {{ request()->is('blog*') ? 'current-menu-parent current_page_item' : '' }}"><a
                                    href="{{ route('blog') }}">Blog<span class="sub"></span></a></li>
                            <li id="menu-item-594" class="menu-item menu-item-type-post_type menu-item-object-page {{ request()->is('contact*') ? 'current-menu-parent current_page_item' : '' }}"><a
                                    href="{{ route('contact') }}">Contact<span class="sub"></span></a></li>
                        </ul>
                    </div>

                    <div class="header-action hidden-sm hidden-xs hidden-md">

                        <a class="action-button" href="#">Get a quote</a>



                    </div>
                </div>
            </div>
        </div>
    </nav>
</div>
