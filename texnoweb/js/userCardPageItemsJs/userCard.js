class UserCardElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container mt-5">
        <div class="row">
        </div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
      
            </div>
        </div>
        `;
    }
}

customElements.define('usercard-element', UserCardElement);