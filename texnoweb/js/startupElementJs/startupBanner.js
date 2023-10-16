class BannerElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="banner container-fluid">
            <div class="row align-items-center justify-content-center">
                <div class="col-md-5 text-container order-2 order-md-1">
                    <h1 class="mb-3 semibold_font_for_startup_banner_text mt-3">WCU Startup Mərkəzi</h1>
                    <p class="semibold_font_for_startup_banner_description_text startup_banner_description_color">
                        Qərbi Kaspi Universitetinin yeni Startap Mərkəzi, gələcəyin lider sahibkarlarını indidən formalaşdırır! Burada, yenilikçi fikirlərinizi reallaşdırmaq şansına sahib olacaq, sektorun liderləri və təcrübəli mentorlarla bir araya gələrək vizyonunuzu həyata keçirə biləcəksiniz. Bura yalnız bir fikri olanlar üçün deyil, həmçinin də, bu fikirləri reallığa çevirmək üçün lazım olan vasitələrə, resurslara və biliyə sahib olmaq istəyənlər üçün ideal platformadır. Gəlin, dünyanı dəyişdirəcək ideyalarınızı birlikdə həyata keçiək,.
                    </p>
                    <a class="btn texnopark_white_text texnopark_main_background_color register_button_navbar" href="#" id="registerButton" style="padding: 12px 32px;">Qeydiyyat</a>
                </div>
                <div class="col-md-5 order-1 order-md-2">
                    <img class="img-fluid mt-5 startup_banner_image_left_margin" src="../images/startupPageImages/startupbanner.png" alt="" style="width: 100%; height: 100%; border-radius: 7px;">
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('banner-element', BannerElement)