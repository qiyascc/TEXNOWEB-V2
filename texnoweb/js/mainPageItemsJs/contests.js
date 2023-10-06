class ContestElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container margin_top_for_contests">
            <div style="width: 100%; text-align: center;">
                <h2 class="semibold_font_for_contest_text contest_title_color">İştirak etdiyimiz yarışmalar</h2>
            </div>
            <div class="marquee-container contestlist">
                <div class="marquee">
                    <div class="marquee__group d-flex align-items-center justify-content-around">
                        <img src="../../../images/mainPageImages/contests/abb.png" alt="Logo 1">
                        <img src="../../../images/mainPageImages/contests/saf.png" alt="Logo 2">
                        <img src="../../../images/mainPageImages/contests/spaceapps.png" alt="Logo 3">
                        <img src="../../../images/mainPageImages/contests/Vector.png" alt="Logo 4">
                        <img src="../../../images/mainPageImages/contests/teknofest.png" alt="Logo 5">
                        <img src="../../../images/mainPageImages/contests/ca.png" alt="Logo 6">
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('contest-element', ContestElement);