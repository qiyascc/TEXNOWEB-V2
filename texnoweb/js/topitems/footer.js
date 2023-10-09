class FooterElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="container-fluid py-4 footer_margin_top">
            <div class="row justify-content-center text-center mb-4">
                <div class="col-md-10 text-md-start">
                    <img src="../images/topImages/navbarAndFooter/logo.png" alt="Logo" class="footer-brand mb-4" />
                </div>
            </div>
            <div class="row justify-content-center text-start footer-margin-left">
                <div class="col-md-2">
                    <h5 class="mb-3 bold_texno_text_footer">Əsas</h5>
                    <ul class="list-unstyled semibold_texno_text_footer">
                        <li><a class="text-decoration-none footer_link_color" href="#">Qərbi Kaspi Universiteti</a></li>
                        <li><a class="text-decoration-none footer_link_color" href="#">Haqqımızda</a></li>
                        <li><a class="text-decoration-none footer_link_color" href="#">Komandamız</a></li>
                        <li><a class="text-decor
                            ation-none footer_link_color" href="#">Qalereya</a></li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <h5 class="mb-3 bold_texno_text_footer">Resurslar</h5>
                    <ul class="list-unstyled semibold_texno_text_footer">
                        <li><a class="text-decoration-none footer_link_color" href="#">Xəbərlər</a></li>
                        <li><a class="text-decoration-none footer_link_color" href="#">Layihələr</a></li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <h5 class="mb-3 bold_texno_text_footer">Mərkəzlər</h5>
                    <ul class="list-unstyled semibold_texno_text_footer">
                        <li><a class="text-decoration-none footer_link_color" href="#">WCU Startap Mərkəzi</a></li>
                        <li><a class="text-decoration-none footer_link_color" href="#">Texnopark Learning</a></li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <h5 class="mb-3 bold_texno_text_footer">Əlaqə</h5>
                    <ul class="list-unstyled semibold_texno_text_footer">
                        <li><a class="text-decoration-none footer_link_color" href="#">Bizimlə Əlaqə</a></li>
                        <li><a class="text-decoration-none footer_link_color" href="#">Feedback</a></li>
                        <li><a class="text-decoration-none footer_link_color" href="#">FAQ</a></li>
                    </ul>
                </div>
                <div class="col-md-2 bold_texno_text_footer">
                    <h5 class="mb-3 bold_texno_text_footer">Sosial</h5>
                    <ul class="list-unstyled semibold_texno_text_footer">
                        <li><a class="text-decoration-none footer_link_color" href="#">Instagram</a></li>
                        <li><a class="text-decoration-none footer_link_color" href="#">YouTube</a></li>
                        <li><a class="text-decoration-none footer_link_color" href="#">GitHub</a></li>
                        <li><a class="text-decoration-none footer_link_color" href="#">Behance</a></li>
                    </ul>
                </div>
            </div>



            <div class="row justify-content-center">
                <hr class="hr hr-blurry" style="width:86%;">
            </div>

            <div class="row justify-content-center text-center mt-4 medium_texno_text_for_footer_copyright_text">
                <div class="col-12">
                    <p class="footer_copyright_text_color">@2023 TEXNOPARK - Bütün hüquqlar qorunur.</p>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('footer-element', FooterElement);