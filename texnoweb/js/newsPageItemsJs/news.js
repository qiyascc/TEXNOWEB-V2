class NewsElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container margin_top_for_news">
            <div class="row">
                <div class="col-md-5 mx-auto">
                <div class="input-group">
                    <input type="search" placeholder="Search news for you..." aria-describedby="button-addon1" class="form-control border-0 bg-light search_bar_for_news_page">
                    <div class="input-group-append">
                        <button id="button-addon1" type="submit" class="btn rounded-3 bg-light search_button_for_search_news_in_news_page"><i class="fa fa-search"></i></button>
                    </div>
                </div>
                </div>  
            </div>
            <div class="row mt-4" id="news-row">
            <!-- Kartlar -->
            </div>
        </div>
        
        `;
    }
}

customElements.define('news-element', NewsElement);