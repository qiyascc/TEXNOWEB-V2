
class FaqElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container mt-5">
            <h2 class="text-center">Tez-tez Soruşulan Suallar</h2>
            <div class="accordion mb-3 mt-5" id="accordionExample"></div>
        </div>
        `;
    }
}

customElements.define('faq-element', FaqElement);