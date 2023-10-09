class NewsElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container  margin_top_for_news">
            <div class="row">
                <div class="col-md-5 mx-auto">
                    <div class="input-group">
                        <input class="form-control border-end-0 border rounded-pill" type="Search..." value="" id="example-search-input">
                        <span class="input-group-append">
                            <button class="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5" type="button">
                                <i class="fa fa-search"></i>
                            </button>
                        </span>
                    </div>
                </div>  
            </div>
            <div class="row mt-4">
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="card p-3 rounded-3 max-height-for-news-item">
                        <img src="../images/mainPageImages/news/saf.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title semibold_font_for_news_item_title_text">SAF 2023</h5>
                            <p class="card-text medium_text_for_news_item_description news_description_color">
                                SAF (STEAM Azerbaijan Festival) 2023 – Təshil Nazirliyinin dəstəyi ilə STEAM Azərbaycan layihəsi çərçivəsində ölkənin və dünyanın təhsilalanları üçün artıq üçüncü dəfə keçiriləcəkdir.  

                                STEAM Azərbaycan Festivalında 15 kateqoriya üzrə yarışlar təşkil olunacaq.

                                Əsas məqsədimiz keçirildiyi müddət ərzində müxtəlif ideyaların reallaşdırılması, fərqli həll yollarının araşdırılması, istedadlı şagirdlərin üzə çıxarılması, biliklərin və bacarıqların qazanılması, təhsilalanların yeni əməkdaşlıqları üçün şərait yaratmaqdır.

                                Dünyada bu istiqamətdə yarış və olimpiadalarda iştirak etmək üçün yerli olimpiadaların təşkili, sistemli və mərkəzləşdirilmiş şəkildə ilkin seçim və hazırlıq imkanı yaradacaqdır. Onu da qeyd edək ki, dünyada keçirilən bu tip yarışlarda şagirdlər və məktəblər xüsusi olaraq qatılırlar. Prosesə mərkəzləşdirilmiş şəkildə yanaşma daha yaxşı nəticələr əldə etməyə imkan yaradacaq. Bu cür tədbirlərin keçirilməsi həmin sahənin ölkə üzrə tətbiqi və genişlənməsi baxımından da effektivdir.

                                STEAM Azərbaycan Layihəsi – www.steam.edu.az

                                Təhsilimizin qloballaşan dünyaya inteqrasiyasının prioritet sahə olduğunu nəzərə alaraq 2019-2020-ci tədris ilindən başlayaraq ölkəmizdə STEAM Azərbaycan layihəsi tətbiq olunmağa başlamışdır.

                                Birinci vitse-prezident Mehriban Əliyevanın təşəbbüsü və Təhsil Nazirliyinin Təhsil İnstitutunun dəstəyi ilə "STEAM Azerbaijan" layihəsi 2019-2020-ci tədris ilindən start götürüb.

                                STEAM təhsil metodu 5 əsas disiplinlərin birləşik şəkildə təşkilidir. Elm (Science), Texnologiya (Technology), Mühəndislik (Engineering), İncəsənət (Art), Riyaziyyatın (Math) birgə və inteqrasiya olunmuş şəkildə tədris etmək ideyası üzərində qurulub. 
                                STEAM layihəsinin əsas məqsədi Respublikanın ümumtəhsil məktəblərində təhsil alan şagirdlərdə XXI əsr bacarıqlarını – kreativlik, tənqidi düşünmə, əməkdaşlığin inkişaf etdirilməsi, praktik məşğələlər vasitəsilə elmi, texniki biliklərin gündəlik həyatda tətbiqini şagirdlərə göstərməklə yanaşı, onlara mühəndislik səriştələri öyrətmək, müxtəlif proqramlaşdırma dillərini tətbiq etməklə müasir İKT avadanlıqlarından istifadə edə bilmə qabiliyyətlərini yüksəltməkdir.
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
                    <img src="../images/mainPageImages/news/texnoparkCom.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title semibold_font_for_news_item_title_text">TEXNOPARK.com</h5>
                            <p class="card-text medium_text_for_news_item_description news_description_color">
                                Artıq Qərbi Kaspi Universitetinin (QKU) websaytı var. Qərbi Kaspi Universiteti (QKU) təhsilinə və texnologiya inkişafına daha bir böyük töhfə verdi: universitetin TexnoParkı üçün innovativ və interaktiv bir saytın təqdimatını etdi. Bu saytın əsas məqsədi tələbələri marifləndirmək və onlara müasir texnologiyalar sahəsindəki yenilikləri öyrətməkdir. Saytın dizaynı və funksiyaları müəllimlər, tələbələr və sahə mütəxəssisləri üçün asan və effektiv bir təcrübə yaratmaq məqsədi daşıyır. İstifadəçilər burada TexnoParkın təklif etdiyi proqramlardan, laboratoriyalardan və tədqiqat imkanlarından xəbər tuta bilər, habelə tələbələr və işçilər üçün təlimatlara və dərsliklərə çata bilərlər.

                                Sayt ayrıca TexnoParkda baş verən tədbirlər, seminarlar və konfranslar üçün güncel məlumatlarla da təmin edilmişdir. İstifadəçilər ayrıca özlərinin və ya komandalarının TexnoParkın təklif etdiyi imkanlardan necə yararlana biləcəyi haqqında məlumat əldə edə bilərlər.

                                Bu proyekt, QKU-nun tələbələrinə texnologiya sahəsində liderlik etmə və global pazarda rəqabətlı olma bacarığını artırma istiqamətində verdiyi önəmin bir göstəricisidir.

                                QKU və TexnoPark saytın növbəti aşamalarında daha da böyük funksiyalar və imkanlar əlavə ediləcəyini vəd edir. Bu, universitetin texnologiya və təhsilin qarşılıqlı təsirlənən sahələrindəki böyük nailiyyətlərinin yalnız biridir.

                                Siz də TexnoPark ailəsinə qatılaraq layihələrdə iştirak edə bilərsiniz.
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
                    <img src="../images/mainPageImages/news/battlebots.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title semibold_font_for_news_item_title_text">WCU Battle Bots</h5>
                            <p class="card-text medium_text_for_news_item_description news_description_color">
                                Lego Robot Yarışları: Qəhrəmanlar Aramızdadır!

                                Müasir texnologiya dövründə oyunların, maraqların və təhsilin öz aralarında qarşılıqlı bir əlaqəsi var. Belə bir əlaqəni ən yaxşı nümayiş etdirən fəaliyyətlərdən biri də lego robot yarışlarıdır. Bu yarışlar, yalnız bir oyun deyil, həm də mühəndislik bacarıqlarının, problem həlli bacarığının və komanda işi bacarığının inkişafına kömək edir.

                                Son həftələrdə bir qrup texnologiya maraqlısı, özləri arasında lego robot yarışları keçirir. Bu yarışlar çərçivəsində iştirakçılar, öz yaratdıqları robotları ilə rəqiblərinin robotlarına qarşı mübarizə aparırlar. Lakin bu yalnız sadə bir "döyüş" deyil. Robotların hazırlanması, proqramlaşdırılması və optimize edilməsi kimi proseslər tələb olunur.

                                İştirakçılar, legoların sadə parçalarından kompleks robotlara qədər nələr yarada biləcəyini göstərir. Hər bir robot, sahibinin yaratıcılığını, texniki biliklərini və strateji düşüncəsini əks etdirir. Robotların hər biri müxtəlif funksiyalarla, hücum və müdafiə strategiyaları ilə təchiz edilmişdir.

                                Yarışın təşkilatçısı Elvin Məmmədov deyir: "Lego robot yarışları, iştirakçılar üçün yalnız maraqlı və heyəcanlı bir təcrübə deyil, həm də texnologiya və mühəndislik sahəsində bacarıqlarını inkişaf etdirmək üçün əla bir imkan təqdim edir. Biz bu yarışları gələcəkdə də davam etdirəcəyik və daha çox gənci cəlb etməyi planlaşdırırıq."


                                Robotların döyüşü zamanı, iştirakçıların heyəcanı, azmi və yaratıcılığı gözlə görünür. Hər döyüşdə robotlar arasındakı mübarizədə, sahiblərinin strateji düşüncəsi və proqramlaşdırma bacarıqları öz önəmini göstərir.

                                Bu yarışların populyarlığı da tez artır. İştirakçılar, sosial mediada öz robotlarının videolarını və fotoşəkillərini paylaşaraq digər maraqlıların diqqətini cəlb edirlər. Bu, hem gənclərin texnoloji marağını artırmağa, hem də onlara praktiki bacarıqlar əldə etmək üçün əla bir platforma təqdim edir.

                                Son nəticədə, lego robot yarışları yalnız bir oyun deyil, həm də gələcəyin mühəndisləri, proqramlaşdırıcıları və texnologiya liderləri üçün mükəmməl bir təlim meydanıdır. Bu kimi təşəbbüslər gənclərin texnoloji aləmdə özlərini ifadə etmələrinə, öz ideyalarını həyata keçirmələrinə və dəyərli bacarıqlar əldə etmələrinə kömək edir.
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
                    <img src="../images/mainPageImages/news/texnoparkCom.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title semibold_font_for_news_item_title_text">TEXNOPARK.com</h5>
                            <p class="card-text medium_text_for_news_item_description news_description_color">
                                Artıq Qərbi Kaspi Universitetinin (QKU) websaytı var. Qərbi Kaspi Universiteti (QKU) təhsilinə və texnologiya inkişafına daha bir böyük töhfə verdi: universitetin TexnoParkı üçün innovativ və interaktiv bir saytın təqdimatını etdi. Bu saytın əsas məqsədi tələbələri marifləndirmək və onlara müasir texnologiyalar sahəsindəki yenilikləri öyrətməkdir. Saytın dizaynı və funksiyaları müəllimlər, tələbələr və sahə mütəxəssisləri üçün asan və effektiv bir təcrübə yaratmaq məqsədi daşıyır. İstifadəçilər burada TexnoParkın təklif etdiyi proqramlardan, laboratoriyalardan və tədqiqat imkanlarından xəbər tuta bilər, habelə tələbələr və işçilər üçün təlimatlara və dərsliklərə çata bilərlər.

                                Sayt ayrıca TexnoParkda baş verən tədbirlər, seminarlar və konfranslar üçün güncel məlumatlarla da təmin edilmişdir. İstifadəçilər ayrıca özlərinin və ya komandalarının TexnoParkın təklif etdiyi imkanlardan necə yararlana biləcəyi haqqında məlumat əldə edə bilərlər.

                                Bu proyekt, QKU-nun tələbələrinə texnologiya sahəsində liderlik etmə və global pazarda rəqabətlı olma bacarığını artırma istiqamətində verdiyi önəmin bir göstəricisidir.

                                QKU və TexnoPark saytın növbəti aşamalarında daha da böyük funksiyalar və imkanlar əlavə ediləcəyini vəd edir. Bu, universitetin texnologiya və təhsilin qarşılıqlı təsirlənən sahələrindəki böyük nailiyyətlərinin yalnız biridir.

                                Siz də TexnoPark ailəsinə qatılaraq layihələrdə iştirak edə bilərsiniz.
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
                    <img src="../images/mainPageImages/news/texnoparkCom.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title semibold_font_for_news_item_title_text">TEXNOPARK.com</h5>
                            <p class="card-text medium_text_for_news_item_description news_description_color">
                                Artıq Qərbi Kaspi Universitetinin (QKU) websaytı var. Qərbi Kaspi Universiteti (QKU) təhsilinə və texnologiya inkişafına daha bir böyük töhfə verdi: universitetin TexnoParkı üçün innovativ və interaktiv bir saytın təqdimatını etdi. Bu saytın əsas məqsədi tələbələri marifləndirmək və onlara müasir texnologiyalar sahəsindəki yenilikləri öyrətməkdir. Saytın dizaynı və funksiyaları müəllimlər, tələbələr və sahə mütəxəssisləri üçün asan və effektiv bir təcrübə yaratmaq məqsədi daşıyır. İstifadəçilər burada TexnoParkın təklif etdiyi proqramlardan, laboratoriyalardan və tədqiqat imkanlarından xəbər tuta bilər, habelə tələbələr və işçilər üçün təlimatlara və dərsliklərə çata bilərlər.

                                Sayt ayrıca TexnoParkda baş verən tədbirlər, seminarlar və konfranslar üçün güncel məlumatlarla da təmin edilmişdir. İstifadəçilər ayrıca özlərinin və ya komandalarının TexnoParkın təklif etdiyi imkanlardan necə yararlana biləcəyi haqqında məlumat əldə edə bilərlər.

                                Bu proyekt, QKU-nun tələbələrinə texnologiya sahəsində liderlik etmə və global pazarda rəqabətlı olma bacarığını artırma istiqamətində verdiyi önəmin bir göstəricisidir.

                                QKU və TexnoPark saytın növbəti aşamalarında daha da böyük funksiyalar və imkanlar əlavə ediləcəyini vəd edir. Bu, universitetin texnologiya və təhsilin qarşılıqlı təsirlənən sahələrindəki böyük nailiyyətlərinin yalnız biridir.

                                Siz də TexnoPark ailəsinə qatılaraq layihələrdə iştirak edə bilərsiniz.
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
                    <img src="../images/mainPageImages/news/texnoparkCom.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title semibold_font_for_news_item_title_text">TEXNOPARK.com</h5>
                            <p class="card-text medium_text_for_news_item_description news_description_color">
                                Artıq Qərbi Kaspi Universitetinin (QKU) websaytı var. Qərbi Kaspi Universiteti (QKU) təhsilinə və texnologiya inkişafına daha bir böyük töhfə verdi: universitetin TexnoParkı üçün innovativ və interaktiv bir saytın təqdimatını etdi. Bu saytın əsas məqsədi tələbələri marifləndirmək və onlara müasir texnologiyalar sahəsindəki yenilikləri öyrətməkdir. Saytın dizaynı və funksiyaları müəllimlər, tələbələr və sahə mütəxəssisləri üçün asan və effektiv bir təcrübə yaratmaq məqsədi daşıyır. İstifadəçilər burada TexnoParkın təklif etdiyi proqramlardan, laboratoriyalardan və tədqiqat imkanlarından xəbər tuta bilər, habelə tələbələr və işçilər üçün təlimatlara və dərsliklərə çata bilərlər.

                                Sayt ayrıca TexnoParkda baş verən tədbirlər, seminarlar və konfranslar üçün güncel məlumatlarla da təmin edilmişdir. İstifadəçilər ayrıca özlərinin və ya komandalarının TexnoParkın təklif etdiyi imkanlardan necə yararlana biləcəyi haqqında məlumat əldə edə bilərlər.

                                Bu proyekt, QKU-nun tələbələrinə texnologiya sahəsində liderlik etmə və global pazarda rəqabətlı olma bacarığını artırma istiqamətində verdiyi önəmin bir göstəricisidir.

                                QKU və TexnoPark saytın növbəti aşamalarında daha da böyük funksiyalar və imkanlar əlavə ediləcəyini vəd edir. Bu, universitetin texnologiya və təhsilin qarşılıqlı təsirlənən sahələrindəki böyük nailiyyətlərinin yalnız biridir.

                                Siz də TexnoPark ailəsinə qatılaraq layihələrdə iştirak edə bilərsiniz.
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
                    <img src="../images/mainPageImages/news/texnoparkCom.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title semibold_font_for_news_item_title_text">TEXNOPARK.com</h5>
                            <p class="card-text medium_text_for_news_item_description news_description_color">
                                Artıq Qərbi Kaspi Universitetinin (QKU) websaytı var. Qərbi Kaspi Universiteti (QKU) təhsilinə və texnologiya inkişafına daha bir böyük töhfə verdi: universitetin TexnoParkı üçün innovativ və interaktiv bir saytın təqdimatını etdi. Bu saytın əsas məqsədi tələbələri marifləndirmək və onlara müasir texnologiyalar sahəsindəki yenilikləri öyrətməkdir. Saytın dizaynı və funksiyaları müəllimlər, tələbələr və sahə mütəxəssisləri üçün asan və effektiv bir təcrübə yaratmaq məqsədi daşıyır. İstifadəçilər burada TexnoParkın təklif etdiyi proqramlardan, laboratoriyalardan və tədqiqat imkanlarından xəbər tuta bilər, habelə tələbələr və işçilər üçün təlimatlara və dərsliklərə çata bilərlər.

                                Sayt ayrıca TexnoParkda baş verən tədbirlər, seminarlar və konfranslar üçün güncel məlumatlarla da təmin edilmişdir. İstifadəçilər ayrıca özlərinin və ya komandalarının TexnoParkın təklif etdiyi imkanlardan necə yararlana biləcəyi haqqında məlumat əldə edə bilərlər.

                                Bu proyekt, QKU-nun tələbələrinə texnologiya sahəsində liderlik etmə və global pazarda rəqabətlı olma bacarığını artırma istiqamətində verdiyi önəmin bir göstəricisidir.

                                QKU və TexnoPark saytın növbəti aşamalarında daha da böyük funksiyalar və imkanlar əlavə ediləcəyini vəd edir. Bu, universitetin texnologiya və təhsilin qarşılıqlı təsirlənən sahələrindəki böyük nailiyyətlərinin yalnız biridir.

                                Siz də TexnoPark ailəsinə qatılaraq layihələrdə iştirak edə bilərsiniz.
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
                    <img src="../images/mainPageImages/news/texnoparkCom.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title semibold_font_for_news_item_title_text">TEXNOPARK.com</h5>
                            <p class="card-text medium_text_for_news_item_description news_description_color">
                                Artıq Qərbi Kaspi Universitetinin (QKU) websaytı var. Qərbi Kaspi Universiteti (QKU) təhsilinə və texnologiya inkişafına daha bir böyük töhfə verdi: universitetin TexnoParkı üçün innovativ və interaktiv bir saytın təqdimatını etdi. Bu saytın əsas məqsədi tələbələri marifləndirmək və onlara müasir texnologiyalar sahəsindəki yenilikləri öyrətməkdir. Saytın dizaynı və funksiyaları müəllimlər, tələbələr və sahə mütəxəssisləri üçün asan və effektiv bir təcrübə yaratmaq məqsədi daşıyır. İstifadəçilər burada TexnoParkın təklif etdiyi proqramlardan, laboratoriyalardan və tədqiqat imkanlarından xəbər tuta bilər, habelə tələbələr və işçilər üçün təlimatlara və dərsliklərə çata bilərlər.

                                Sayt ayrıca TexnoParkda baş verən tədbirlər, seminarlar və konfranslar üçün güncel məlumatlarla da təmin edilmişdir. İstifadəçilər ayrıca özlərinin və ya komandalarının TexnoParkın təklif etdiyi imkanlardan necə yararlana biləcəyi haqqında məlumat əldə edə bilərlər.

                                Bu proyekt, QKU-nun tələbələrinə texnologiya sahəsində liderlik etmə və global pazarda rəqabətlı olma bacarığını artırma istiqamətində verdiyi önəmin bir göstəricisidir.

                                QKU və TexnoPark saytın növbəti aşamalarında daha da böyük funksiyalar və imkanlar əlavə ediləcəyini vəd edir. Bu, universitetin texnologiya və təhsilin qarşılıqlı təsirlənən sahələrindəki böyük nailiyyətlərinin yalnız biridir.

                                Siz də TexnoPark ailəsinə qatılaraq layihələrdə iştirak edə bilərsiniz.
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