

class LinkAndFormsElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container mt-5">
            <div class="row p-3">
                <div class="col-md-6">
                    <h2 class="bold_font_for_contact_us_title">Bizimlə əlaqə</h2>
                    <div class="mt-5 medium_font_for_contact_social">
                        <p><a href="#" class="contact_page_contact_icons_color"><i class="bi bi-envelope-fill" style="color: #4764bf"></i> texnopark@wcu.edu.az</a></p>
                        <p><a href="#" class="contact_page_contact_icons_color"><i class="bi bi-telephone-fill" style="color: #4764bf"></i> +994 12 345 67 89</a></p>
                        <p><a href="#" class="contact_page_contact_icons_color"><i class="bi bi-geo-alt-fill" style="color: #4764bf"></i> Western Caspian University</a></p>
                    </div>
                    <div class="pc_contact_social_container medium_font_for_contact_social contact_page_social_color">
                        <socialcntct-element></socialcntct-element>
                    </div>
                    
                </div>
    
                <div class="col-md-6 contact-form p-5">
                    <form>
                        <div class="mb-3">
                            <input type="text" class="form-control form_items semibold_font_for_contact_form_placeholder_text contact_form_placeholder_color" placeholder="Adınız" required>
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control form_items semibold_font_for_contact_form_placeholder_text contact_form_placeholder_color" placeholder="E-poçt" required>
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control form_items semibold_font_for_contact_form_placeholder_text contact_form_placeholder_color" placeholder="Mövzu" required>
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control form_items semibold_font_for_contact_form_placeholder_text contact_form_placeholder_color" placeholder="Mesaj" rows="5" required></textarea>
                        </div>
                        <div class="">
                            <button type="submit" class="btn me-2" style="background-color: #4764bf; color: white;">
                                <i class="bi bi-send-fill"></i> Göndər
                            </button>
                        </div>
                    </form>
                </div>
    
                <div class="mobile_contact_social_container medium_font_for_contact_social contact_page_social_color">
                    <socialcntct-element></socialcntct-element>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('laf-element', LinkAndFormsElement);