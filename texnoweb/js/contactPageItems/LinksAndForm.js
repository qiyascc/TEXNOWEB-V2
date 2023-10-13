

class LinkAndFormsElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container mt-5">
            <div class="row p-3">
                <div class="col-md-6">
                    <h2>Bizimlə əlaqə</h2>
                    <div class="mt-5">
                        <p><a href="#"><i class="bi bi-envelope"></i> texnopark@wcu.edu.az</a></p>
                        <p><a href="#"><i class="bi bi-phone"></i> +994 12 345 67 89</a></p>
                        <p><a href="#"><i class="bi bi-pin-map-fill"></i> Western Caspian University</a></p>
                    </div>
                    <div class="pc_contact_social_container">
                        <socialcntct-element></socialcntct-element>
                    </div>
                    
                </div>
    
                <div class="col-md-6 contact-form p-5">
                    <form>
                        <div class="mb-3">
                            <input type="text" class="form-control form_items" placeholder="Adınız" required>
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control form_items" placeholder="E-poçt" required>
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control form_items" placeholder="Mövzu" required>
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control form_items" placeholder="Mesaj" rows="5" required></textarea>
                        </div>
                        <div class="">
                            <button type="submit" class="btn btn-primary me-2">
                                <i class="bi bi-telegram"></i> Göndər
                            </button>
                        </div>
                    </form>
                </div>
    
                <div class="mobile_contact_social_container">
                    <socialcntct-element></socialcntct-element>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('laf-element', LinkAndFormsElement);