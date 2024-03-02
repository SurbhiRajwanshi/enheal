console.log("hlw");
let meg = document.querySelector("#meg");
let template = document.createElement('template');
template.innerHTML = `<header class="main-header header-style-two">



<div class="header-top_two">
    <div class="auto-container">
        <div class="d-flex justify-content-center align-items-center flex-wrap">
            <ul class="info-list">
                <li><a href="#"><span class="icon fa-solid fa-phone fa-fw"></span>9045301702</a></li>
                <li><a href="#"><span class="icon fa-solid fa-envelope fa-fw"></span>enhealtech@gmail.com</a></li>
                <li><a href="#"><span class="icon fa-solid fa-map fa-fw"></span>G-9, First Floor, Sector 63, Noida</a></li>
            </ul>
            <ul class="header-social_box">
                <li><a href="https://www.twitter.com/" class="fa-brands fa-facebook-f fa-fw"></a></li>
                <li><a href="https://www.facebook.com/" class="fa-brands fa-twitter fa-fw"></a></li>
                <li><a href="https://www.linkedin.com/" class="fa-brands fa-linkedin fa-fw"></a></li>
                <li><a href="https://instagram.com/" class="fa-solid fa-instagram fa-fw"></a></li>
            </ul>
        </div>
    </div>
</div>
<div class="header-upper">
    <div class="auto-container">
        <div class="inner-container d-flex ">
            <div class="logo"><a href="index.html"><img src="imgg/logo-white.png" alt="" title=""></a></div>
            <div class="upper-right" >
                <div class="nav-outer d-flex justify-content-between align-items-center ">
                    <nav class="main-menu show navbar-expand-md">
                        <div class="navbar-header">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>
                        <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                            <ul class="navigation clearfix">
                                 <li><a href="index.html">Home</a></li> </li>
                                <li class="dropdown"><a href="services.html">Services</a>
                                    <ul>
                                         <li><a href="desktop-laptop.html">Desktop/Laptop</a></li> 
                                         <li><a href="buy-old-laptop.html">Buy old laptop/desktop</a></li> 
                                         <li><a href="buy-new-laptop.html">Buy new laptop/desktop</a></li> 
                                         <li><a href="repair-on-site.html">Repair on site services </a></li> 
                                         <li ><a href="Accessories.html">Accessories </a></li>
                                    </ul> 
                                </li>
                                <li class="dropdown"><a href="Networking.html">Networking</a>
                                    <ul>
                                        <li><a href="Installation.html">Installation</a></li>
                                        <li class="dropdown"><a href="Cabling.html">Cabling</a>
                                            <ul>
                                            <li><a href="RackInstallation.html">Rack Installation</a></li> 
                                            </ul>            
                                        </li>
                                        <li><a href="Implementation.html">Implementation</a></li>
                                        <li><a href="Installation_of_firewall.html">Installation of firewall</a></li>
                                        </ul>
                                </li>
                                <li class="dropdown"><a href="cctv.html">CCTV</a>
                                    <ul>
                                        <li><a href="Cabling2.html">Cabling</a></li>
                                        <li><a href="HD-Camera.html">HD Camera</a></li>
                                        <li><a href="IP-Camera.html">IP Camera</a></li>
                                        <li><a href="SPY-Camera.html">SPY Camera</a></li>
                                        <li><a href="Wifi-Camera.html">Wifi Camera</a></li>
                                        
                                    </ul>
                                </li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div class="outer-box d-flex align-items-center">
                        <div class="button-box">
                            <a class="btn-style-three theme-btn btn-item" href="#">
                                <div class="btn-wrap">
                                    <span class="text-one">Get a quote now <i class="fa-solid fa-arrow-right fa-fw"></i></span>
                                    <span class="text-two">Get a quote now <i class="fa-solid fa-arrow-right fa-fw"></i></span>
                                </div>
                            </a>
                        </div>
                        <div class="mobile-nav-toggler"><span class="icon fa-solid fa-bars fa-fw"></span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="sticky-header">
    <div class="auto-container">
        <div class="d-flex justify-content-between align-items-center">
            <div class="logo">
                <a href="index.html" title=""><img src="imgg/logo-white.png" alt="" title=""></a>
            </div>
            <div class="right-box d-flex align-items-center  nav-6 flex-wrap">
                <nav class="main-menu"></nav>
                <div class="outer-box d-flex align-items-center">
                    <div class="button-box">
                        <a class="btn-style-three theme-btn btn-item" href="#">
                            <div class="btn-wrap">
                                <span class="text-one">Get a quote now <i class="fa-solid fa-arrow-right fa-fw"></i></span>
                                <span class="text-two">Get a quote now <i class="fa-solid fa-arrow-right fa-fw"></i></span>
                            </div>
                        </a>
                    </div>
                    <div class="mobile-nav-toggler"><span class="icon fa-solid fa-bars fa-fw"></span></div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="mobile-menu">
    <div class="menu-backdrop"></div>
    <div class="close-btn"><span class="icon flaticon-020-x-mark"></span></div>
    <nav class="menu-box">
        <div class="nav-logo  "><a href="index.html"><img src="imgg/logo-white.png" alt="" title="" style="background-color: black; padding: 25px;"></a></div>
        <div class="search-box">
            <form method="post" action="contact.html">
                <div class="form-group">
                    <input type="search" name="search-field" value="" placeholder="SEARCH HERE" required>
                    <button type="submit"><span class="icon flaticon-001-loupe"></span></button>
                </div>
            </form>
        </div>
        <div class="menu-outer">
        </div>
    </nav>
</div>
</header>`;
meg.appendChild(template.content);