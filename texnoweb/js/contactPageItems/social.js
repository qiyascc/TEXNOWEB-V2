class socialContactElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="mb-2 mt-5">
            <a href="" class="contact_form_placeholder_color">
                <i class="bi bi-github"></i> Github
            </a>
        </div>
        <div class="mb-2">
            <a href="" class="contact_form_placeholder_color">
                <i class="bi bi-youtube"></i> YouTube
            </a>
        </div>
        <div class="mb-2">
            <a href="" class="contact_form_placeholder_color">
                <i class="bi bi-instagram"></i> Instagram
            </a>
        </div>
        <div>
            <a href="" class="contact_form_placeholder_color">
                <i class="bi bi-behance"></i> Behance
            </a>
        </div>
        `;
    }
}

customElements.define('socialcntct-element', socialContactElement);