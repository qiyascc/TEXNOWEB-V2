class AboutItems extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container margin_top_for_what_is_a_texnopark">
            <h1 class="bold_font_for_gallery_titles">TexnoPark nədir?</h1>
            <p class="medium_font_for_gallery_descriptions">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum.
    
                t is a long established fact that a reader will be distracted by the readable content of a page when looking
                at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                as opposed to using 'Content here, content here', making it look like readable English. Many desktop
                publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for
                'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the
                years, sometimes by accident, sometimes on purpose (injected humour and the like)</p>
    
            <h2 class="margin_top_for_join_texnopark bold_font_for_gallery_titles">TEXNOPARK komandasına qatılmaq</h2>
            <p class="medium_font_for_gallery_descriptions">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum.
    
                t is a long established fact that a reader will be distracted by the readable content of a page when looking
                at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                as opposed to using 'Content here, content here', making it look like readable English. Many desktop
                publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for
                'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the
                years, sometimes by accident, sometimes on purpose (injected humour and the like)</p>
            <div class="d-flex mt-2 semibold_font_for_gallery_buttons">
                <a href="#" class="btn texnopark_white_text texnopark_main_background_color register_button_navbar me-2">Qeydiyyat</a>
                <a href="#" class="btn btn-outline-info">Ailəmizi tanı</a>
            </div>
    
            <h2 class="margin_top_for_gallery_in_about bold_font_for_gallery_titles">Qalereya</h2>
            <div class="row row-cols-1 row-cols-md-4 g-4 mt-4">
    
            </div>
        </div>
        `;
    }
}

customElements.define('about-element', AboutItems);