
class detailedNewsElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container">
            <div class="row mt-4">
                <div class="detailedNews" id="detailedNews">
                    <div class="card news-detail-card">
                        <div class="card-header">
                            <img src="../images/mainPageImages/news/saf.png" alt="">
                            <h5 class="semibold_font_for_news_detail_header">SAF 2023</h5>
                        </div>
                        <div class="card-body">
                            <p class="medium_font_for_news_detail_description">Biz, bu tətbiqi hazırlamaqla tələbələrimizin tədris keyfiyyətini yaxşılaşdırmağı hədəfləyirik. Dekanlıq, müəllim, tələbə kom munikasiyasını, dəyişən dərs proqramını, gündəlik qiymətləri ni, ÜOMG-ni, akademik borcunu və s. informasiyaları vaxtında əldə edə biləcəyiniz bir platforma olacaq. Bununla yanaşı xəbər axışında universitetdə keçirilən tədbir lər, ölkədə və dünyada keçirilən yarışlar barədə məlumat ala bilcəksiniz. Dostlarınızla əlaqə saxlamağınızı və universitetdəki maraqlı klub və paylaşımları izləməyinizi təmin edən bu tətbiq, univer sitet təcrübənizi daha sosial və inteqrasiya olunmuş bir mühitə çevirir. Biz bu mobil aplikasiyamızı Texnoparkda proqramlaşdırırıq. Əgər sizin də proqramlaşdırma bilginiz və bu tərz layihəniz varsa, Texnoparkımıza müraciət edərək reallaşdıra bilərsiniz.</p>
                        </div>
                        <div class="card-footer">
                            <small class="">28.09.2023</small>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
        `;
    }
}

customElements.define('detailed-news', detailedNewsElement);