class NavbarElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light d-none d-lg-flex medium_texno_text_for_up_navbar navbar_up_text_color">
                <div class="navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="languageDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Azərbaycanca
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="languageDropdown">
                                <li><a class="dropdown-item" href="#">English</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Haqqımızda</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Əlaqə</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="../images/topImages/navbarAndFooter/logo.png" alt="Logo">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 semibold_texno_text_down_navbar navbar_down_text_color">
                            <!-- Mobile Navbar -->
                            <div class="d-lg-none mobile-nav-links d-flex flex-column align-items-center medium_texno_text_for_up_navbar navbar_up_text_color">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="languageDropdownMobile" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Azərbaycanca
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="languageDropdownMobile">
                                        <li><a class="dropdown-item" href="#">English</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Haqqımızda</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Əlaqə</a>
                                </li>
                            </div>
                            
                            <li class="nav-item">
                                <a class="nav-link" href="#">Xəbərlər</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Layihələr</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">TexnoAcademy</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Startuplar</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link btn texnopark_white_text texnopark_main_background_color register_button_navbar" href="#" id="registerButton" style="padding: 12px 32px;">Qeydiyyat</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        `;
    }
}

customElements.define('navbar-element', NavbarElement);

