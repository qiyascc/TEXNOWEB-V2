class NewsDetailElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container margin_top_for_news_details">
            <div class="row">
                <div class="text-center">
                    <a href="#" class="text-decoration-none see_more_color medium_text_for_big_see_more">Daha çoxu ></a>
                </div>
            </div>
            <div class="row mt-4 margin_top_for_news_container" id="news-row">
            <!-- Kartlar -->
            </div>
        </div>
        
        `;
    }
}

customElements.define('news-detail-last-4-element', NewsDetailElement);