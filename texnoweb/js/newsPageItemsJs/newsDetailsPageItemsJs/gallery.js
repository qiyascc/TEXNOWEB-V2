class GalleryElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container">
                <div class="row mt-4">
                    <div class="card gallery-card">
                        <div class="card-header">
                            <h5>Qalereya</h5>
                        </div>
                        <div class="container mt-5">
                            <div class="row scrolling-wrapper">
                              <div class="col-4">
                                <div class="img-container" id="gallery-items-img">

                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        `;
    }
}

customElements.define('gallery-element', GalleryElement);