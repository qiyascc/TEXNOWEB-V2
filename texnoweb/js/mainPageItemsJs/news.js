class NewsElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container  margin_top_for_news">
            <div class="row">
                <div class="col-6">
                    <h4 class="bold_font_for_news_title_text">Xəbərlər</h4>
                </div>
                <div class="col-6 text-end">
                    <a href="#" class="text-decoration-none see_more_color medium_text_for_big_see_more">Daha çoxu ></a>
                </div>
            </div>
            <div class="row mt-4 flex-row flex-nowrap" style="overflow-x: auto;">
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="card p-3 rounded-3 max-height-for-news-item">
                        <img src="../images/mainPageImages/news/wcuapp.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title semibold_font_for_news_item_title_text">WCU Mobile</h5>
                            <p class="card-text medium_text_for_news_item_description news_description_color">
                                Biz, bu tətbiqi hazırlamaqla tələbələrimizin tədris keyfiyyətini 
                                yaxşılaşdırmağı hədəfləyirik. Dekanlıq, müəllim, tələbə kom munikasiyasını, dəyişən dərs proqramını, gündəlik qiymətləri ni, ÜOMG-ni, akademik borcunu və s. informasiyaları vaxtında 
                                əldə edə biləcəyiniz bir platforma olacaq. 
                                Bununla yanaşı xəbər axışında universitetdə keçirilən tədbir lər, ölkədə və dünyada keçirilən yarışlar barədə məlumat ala 
                                bilcəksiniz. 
                                Dostlarınızla əlaqə saxlamağınızı və universitetdəki maraqlı 
                                klub və paylaşımları izləməyinizi təmin edən bu tətbiq, univer sitet təcrübənizi daha sosial və inteqrasiya olunmuş bir mü-
                                hitə çevirir.
                                Biz bu mobil aplikasiyamızı Texnoparkda proqramlaşdırırıq.
                                Əgər sizin də proqramlaşdırma bilginiz və bu tərz layihəniz 
                                varsa, Texnoparkımıza müraciət edərək reallaşdıra bilərsiniz.
                            </p>
                            <div class="d-flex justify-content-between">
                            <small class="medium_text_for_news_item_date news_date_color">28.09.2023</small>
                            <a href="#" class="text-decoration-none see_more_color">Davamı ></a>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="card p-3 rounded-3 max-height-for-news-item">
                        <img src="../images/mainPageImages/news/wcuapp.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title semibold_font_for_news_item_title_text">WCU Mobile</h5>
                            <p class="card-text medium_text_for_news_item_description news_description_color">
                                Biz, bu tətbiqi hazırlamaqla tələbələrimizin tədris keyfiyyətini 
                                yaxşılaşdırmağı hədəfləyirik. Dekanlıq, müəllim, tələbə kom munikasiyasını, dəyişən dərs proqramını, gündəlik qiymətləri ni, ÜOMG-ni, akademik borcunu və s. informasiyaları vaxtında 
                                əldə edə biləcəyiniz bir platforma olacaq. 
                                Bununla yanaşı xəbər axışında universitetdə keçirilən tədbir lər, ölkədə və dünyada keçirilən yarışlar barədə məlumat ala 
                                bilcəksiniz. 
                                Dostlarınızla əlaqə saxlamağınızı və universitetdəki maraqlı 
                                klub və paylaşımları izləməyinizi təmin edən bu tətbiq, univer sitet təcrübənizi daha sosial və inteqrasiya olunmuş bir mü-
                                hitə çevirir.
                                Biz bu mobil aplikasiyamızı Texnoparkda proqramlaşdırırıq.
                                Əgər sizin də proqramlaşdırma bilginiz və bu tərz layihəniz 
                                varsa, Texnoparkımıza müraciət edərək reallaşdıra bilərsiniz.
                            </p>
                            <div class="d-flex justify-content-between">
                            <small class="medium_text_for_news_item_date news_date_color">28.09.2023</small>
                            <a href="#" class="text-decoration-none see_more_color">Davamı ></a>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="card p-3 rounded-3 max-height-for-news-item">
                        <img src="../images/mainPageImages/news/wcuapp.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title semibold_font_for_news_item_title_text">WCU Mobile</h5>
                            <p class="card-text medium_text_for_news_item_description news_description_color">
                                Biz, bu tətbiqi hazırlamaqla tələbələrimizin tədris keyfiyyətini 
                                yaxşılaşdırmağı hədəfləyirik. Dekanlıq, müəllim, tələbə kom munikasiyasını, dəyişən dərs proqramını, gündəlik qiymətləri ni, ÜOMG-ni, akademik borcunu və s. informasiyaları vaxtında 
                                əldə edə biləcəyiniz bir platforma olacaq. 
                                Bununla yanaşı xəbər axışında universitetdə keçirilən tədbir lər, ölkədə və dünyada keçirilən yarışlar barədə məlumat ala 
                                bilcəksiniz. 
                                Dostlarınızla əlaqə saxlamağınızı və universitetdəki maraqlı 
                                klub və paylaşımları izləməyinizi təmin edən bu tətbiq, univer sitet təcrübənizi daha sosial və inteqrasiya olunmuş bir mü-
                                hitə çevirir.
                                Biz bu mobil aplikasiyamızı Texnoparkda proqramlaşdırırıq.
                                Əgər sizin də proqramlaşdırma bilginiz və bu tərz layihəniz 
                                varsa, Texnoparkımıza müraciət edərək reallaşdıra bilərsiniz.
                            </p>
                            <div class="d-flex justify-content-between">
                            <small class="medium_text_for_news_item_date news_date_color">28.09.2023</small>
                            <a href="#" class="text-decoration-none see_more_color">Davamı ></a>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="card p-3 rounded-3 max-height-for-news-item">
                        <img src="../images/mainPageImages/news/wcuapp.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title semibold_font_for_news_item_title_text">WCU Mobile</h5>
                            <p class="card-text medium_text_for_news_item_description news_description_color">
                                Biz, bu tətbiqi hazırlamaqla tələbələrimizin tədris keyfiyyətini 
                                yaxşılaşdırmağı hədəfləyirik. Dekanlıq, müəllim, tələbə kom munikasiyasını, dəyişən dərs proqramını, gündəlik qiymətləri ni, ÜOMG-ni, akademik borcunu və s. informasiyaları vaxtında 
                                əldə edə biləcəyiniz bir platforma olacaq. 
                                Bununla yanaşı xəbər axışında universitetdə keçirilən tədbir lər, ölkədə və dünyada keçirilən yarışlar barədə məlumat ala 
                                bilcəksiniz. 
                                Dostlarınızla əlaqə saxlamağınızı və universitetdəki maraqlı 
                                klub və paylaşımları izləməyinizi təmin edən bu tətbiq, univer sitet təcrübənizi daha sosial və inteqrasiya olunmuş bir mü-
                                hitə çevirir.
                                Biz bu mobil aplikasiyamızı Texnoparkda proqramlaşdırırıq.
                                Əgər sizin də proqramlaşdırma bilginiz və bu tərz layihəniz 
                                varsa, Texnoparkımıza müraciət edərək reallaşdıra bilərsiniz.
                            </p>
                            <div class="d-flex justify-content-between">
                            <small class="medium_text_for_news_item_date news_date_color">28.09.2023</small>
                            <a href="#" class="text-decoration-none see_more_color">Davamı ></a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('news-element', NewsElement);