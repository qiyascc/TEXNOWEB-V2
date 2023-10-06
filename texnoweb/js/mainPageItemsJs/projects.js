class ProjectsElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container margin_top_for_projects">
            <div class="row">
                <div class="col-6">
                    <h4 class="bold_font_for_projects_title_text">Layihələr</h4>
                </div>
                <div class="col-6 text-end">
                    <a href="#" class="text-decoration-none see_more_color medium_text_for_big_see_more">Daha çoxu ></a>
                </div>
            </div>
            <div class="row flex-column-reverse flex-lg-row mt-5">
                <div class="col-lg-6">
                    <div class="list-group" id="projectList">
                        <a href="#" class="list-group-item list-group-item-action p-16" data-bs-toggle="list" onclick="showProject('../../../images/mainPageImages/projects/texnoRobot.jpg', '##', this)">
                            <div class="d-flex w-100">
                                <i class="texno-soft-icon texno-icon"></i>
                                <h5 class="mb-1 semibold_font_for_projects_item_title_text">Texno Robot</h5>
                            </div>
                            <p class="mb-1 medium__font_for_projects_item_description_text projects_item_description_text_color">
                                Texnologiya dünyasında müasir alət və tətbiqlər təhsil sahəsində də böyük yeniliklərə səbəb olur. Qərbi Kaspi Universiteti tələbələri və müəllimləri, təhsilin effektivliyini artırmaq üçün bir Telegram botuna üz tutmuşlar. Bu bot, tələbələrə tədris və marağla bağlı yeni imkanlar təqdim edir.
        
                                Bu Telegram botunun əsas məqsədi tələbələri idarəetmək və onlara müxtəlif tapsırıqlar verməkdir. Müəllimlər bu bot vasitəsi ilə tələbələrə dərsin tələblərini, ev tapsırıqlarını və digər məlumatları ötürə bilərlər. Tələbələr isə bu botla öz cavablarını və suallarını təqdim edə bilərlər. Bu, dərsin effektivliyini artırmağa kömək edən asanlaşdırılmış bir kommunikasiya platforması yaradır.
        
                                Lakin bu bot yalnız təhsil və öyrənmə prosesinə kömək etməklə qalmır. Universitetin bu texnoloji girişimi həm də tələbələrin software sahəsində bacarıqlarını inkişaf etdirməsinə imkan verir. Botun açıq kodlu olması sayəsində tələbələr onun işləmə mexanizmini öyrənə və təkmilləşdirə bilərlər. Bu da tələbələr üçün praktiki təcrübə əldə etmək üçün əla bir imkan təqdim edir.
        
                                Telegram botunun inkişafında iştirak edən tələbələrdən Zaur Rəsulov belə deyir: "Bu botla işləmək mənə proqramlaşdırma sahəsində yeni bacarıqlar əldə etmək imkanı yaradıb. Həm də universitetdəki tədris prosesini asanlaşdırmağa necə kömək edə biləcəyimi öyrəndim."
        
                                Botun tətbiqi, tələbələrin yeni texnoloji trendlərlə tanış olmalarına, software inkişafında maraqlarını artırmağa və praktiki təcrübə əldə etmələrinə imkan verir. Eyni zamanda, bu bot universitetin təhsil effektivliyini artırmağa, tələbələr və müəllimlər arasında daha sıx əlaqə qurmağa səy göstərir.
        
                                Bu texnoloji girişiminin uğurlu nəticələrə səbəb olması, digər təhsil müəssisələrinə də nümunə olaraq xidmət edə bilər. Gələcəkdə bu kimi təşəbbüslərin daha da genişlənəcəyi və təhsil sahəsində yeni innovativ ideyaların meydana gələcəyi gözlənilir.
        
                                Bu botun tətbiqi Qərbi Kaspi Universitetinin təhsil sahəsində texnoloji yenilikləri qəbul etməsinin və tələbələrinin inkişafına marağını nümayiş etdirən bir digər addımıdır. Bu kimi təşəbbüslər, təhsilin daha effektiv, maraqli və texnoloji olmasına töhfə verir.
        
        
                            </p>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action p-16" data-bs-toggle="list" onclick="showProject('../../../images/mainPageImages/projects/biogas.jpg', '##', this)">
                            <div class="d-flex w-100">
                                <i class="texno-bio-icon texno-icon"></i>
                                <h5 class="mb-1 semibold_font_for_projects_item_title_text">Bioqaz</h5>
                            </div>
                            <p class="mb-1 medium__font_for_projects_item_description_text projects_item_description_text_color">
                                Bioqaz-Biotullantıların fermentasiya prosesi zamanı alınan metan qazıdır. Bioqaz qazlaşdırılması relyef olaraq çətin və ya yüksək maliyyə tələb edən ərazilərdə yaşayış məntəqələrin metan qazı ilə təmin etmək üçün istifadə edilə bilər. Ekoloji yolla metan qazı əldə etmək istəyənlər bioqaz qurğusuna sahib olmaqla ekoloji təmiz metan qazı əldə edə bilərlər. Həmçinin fermantasiya prosesindən keçmiş biokütlə kənd təsərrüfatına yararlı təbii gübrədir.
                            </p>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action p-16" data-bs-toggle="list" onclick="showProject('../../../images/mainPageImages/projects/pianoStairs.png', '##', this)">
                            <div class="d-flex w-100">
                                <i class="texno-hard-icon texno-icon"></i>
                                <h5 class="mb-1 semibold_font_for_projects_item_title_text">Piano Pilləkən</h5>
                            </div>
                            <p class="mb-1 medium__font_for_projects_item_description_text projects_item_description_text_color">
                                Dünyamızda innovasiya və kreativlik hər zaman yeni və maraqli layihələrə yol açır. "İnteraktiv Pilləkən" də bu layihələrdən biridir. Bu, musiqinin və texnologiyaların birgə işlədiyi müasir bir pilləkəndir. Maraqlıdırsa, davam edin.
        
                                Bu pilləkən, hərəkətə duyarlı ultrasonic sensorlarla təchiz edilib, kiçik və sadə bir hərəkəti belə hiss edə bilən bu sensorlar sayəsində hər bir mərtəbədə fərqli bir not səsləndirilir. Pilləkənin böyük bir özəlliyi isə hər bir bölümün üzərindəki işıqlardır. Pilləkəni vurdanda sensorlar həmin vuruşa reaksiya göstərərək müvafiq bölümün işığını yandırır. Bu xüsusiyyət, izləyicilərə vizual bir təsir yaratmağa kömək edir və əsl musiqi performansını daha interaktiv və maraqli edir.  
        
                                İnteraktiv Pilləkən layihəsi təkcə musiqişünaslar və maraqlananlar üçün deyil, həm də texnoloji bacarıqları öyrənmək istəyənlər üçün stimullu bir mühit yaratmağa kömək edir. Layihənin qaynaq kodu ictimaiyyətə açıq olaraq paylaşılır. Bu, maraqlananlar üçün ultrasonic sensorların işləmə prinsipləri, programlaşdırma və fiziki komponentlərin tətbiqi barədə dəyərli məlumatlar təqdim edir.
        
                                Pilləkənin virtual simulasiyası da təqdim olunur. Bu simulasiya, pilləkənin işləmə prinsipini, ultrasonic sensorların necə reaksiya göstərdiyini, işıqların necə işlədiyini və bunun kimi detalları göstərmək üçün hazırlanıb.
        
                                Musiqi və texnologiyaların birgə işlədiyi bu layihənin məqsədi, yaradıcılığın və texnologiyaların birgə nələr bacara biləcəyini göstərməkdir. İnteraktiv Pilləkən layihəsi, texnoloji innovasiya və kreativliyin mümkün olduğunu göstərir. İster musiqi, ister texnolojiya marağı olanlar üçün bu pilləkən maraqli və təlimli bir təcrübə təqdim edir.
        
                                Layihə haqqında daha çox məlumat üçün və qaynaq kodunu yükləmək üçün aşağıdaki linkə daxil olun. Bizimlə əlaqə saxlamaq, bu yenilikçi inkişafa şərh yazmaq və öz fikirlərinizi paylaşmaq üçün sosial mediada bizə qoşulun! Layihəni şəxsi təcrübəniz olaraq yaşamaq istəyirsinizsə, qaynaq kodlarından istifadə edərək öz pilləkən layihənizi başlada bilərsiniz. Bu mükəmməl təcrübəni başqa dost və tanışlarınıza da təqdim edin.
        
                                Simulasiya: https://wokwi.com/projects/352275079515419649 
        
                                Qaynaq Kodları: https://github.com/WCU-TexnoPark/Piano
                            </p>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action p-16" data-bs-toggle="list" onclick="showProject('../../../images/mainPageImages/projects/lightStairs.jpg', '##', this)">
                            <div class="d-flex w-100">
                                <i class="texno-hard-icon texno-icon"></i>
                                <h5 class="mb-1 semibold_font_for_projects_item_title_text">İşıqlı Pilləkən</h5>
                            </div>
                            <p class="mb-1 medium__font_for_projects_item_description_text projects_item_description_text_color">
                                Dünyamızda innovasiya və kreativlik hər zaman yeni və maraqli layihələrə yol açır. "İnteraktiv Pilləkən" də bu layihələrdən biridir. Bu, musiqinin və texnologiyaların birgə işlədiyi müasir bir pilləkəndir. Maraqlıdırsa, davam edin.
        
                                Bu pilləkən, hərəkətə duyarlı ultrasonic sensorlarla təchiz edilib, kiçik və sadə bir hərəkəti belə hiss edə bilən bu sensorlar sayəsində hər bir mərtəbədə fərqli bir not səsləndirilir. Pilləkənin böyük bir özəlliyi isə hər bir bölümün üzərindəki işıqlardır. Pilləkəni vurdanda sensorlar həmin vuruşa reaksiya göstərərək müvafiq bölümün işığını yandırır. Bu xüsusiyyət, izləyicilərə vizual bir təsir yaratmağa kömək edir və əsl musiqi performansını daha interaktiv və maraqli edir.  
        
                                İnteraktiv Pilləkən layihəsi təkcə musiqişünaslar və maraqlananlar üçün deyil, həm də texnoloji bacarıqları öyrənmək istəyənlər üçün stimullu bir mühit yaratmağa kömək edir. Layihənin qaynaq kodu ictimaiyyətə açıq olaraq paylaşılır. Bu, maraqlananlar üçün ultrasonic sensorların işləmə prinsipləri, programlaşdırma və fiziki komponentlərin tətbiqi barədə dəyərli məlumatlar təqdim edir.
        
                                Pilləkənin virtual simulasiyası da təqdim olunur. Bu simulasiya, pilləkənin işləmə prinsipini, ultrasonic sensorların necə reaksiya göstərdiyini, işıqların necə işlədiyini və bunun kimi detalları göstərmək üçün hazırlanıb.
        
                                Musiqi və texnologiyaların birgə işlədiyi bu layihənin məqsədi, yaradıcılığın və texnologiyaların birgə nələr bacara biləcəyini göstərməkdir. İnteraktiv Pilləkən layihəsi, texnoloji innovasiya və kreativliyin mümkün olduğunu göstərir. İster musiqi, ister texnolojiya marağı olanlar üçün bu pilləkən maraqli və təlimli bir təcrübə təqdim edir.
        
                                Layihə haqqında daha çox məlumat üçün və qaynaq kodunu yükləmək üçün aşağıdaki linkə daxil olun. Bizimlə əlaqə saxlamaq, bu yenilikçi inkişafa şərh yazmaq və öz fikirlərinizi paylaşmaq üçün sosial mediada bizə qoşulun! Layihəni şəxsi təcrübəniz olaraq yaşamaq istəyirsinizsə, qaynaq kodlarından istifadə edərək öz pilləkən layihənizi başlada bilərsiniz. Bu mükəmməl təcrübəni başqa dost və tanışlarınıza da təqdim edin.
        
                                Simulasiya: https://wokwi.com/projects/352275079515419649 
        
                                Qaynaq Kodları: https://github.com/WCU-TexnoPark/Piano
                            </p>
                        </a>
                    </div>
                </div>
                <div class="col-lg-6 mb-4 mb-lg-0">
                    <div class="position-relative">
                        <div id="projectImage" class="project-container">
                            <a href="#" id="projectButton" class="btn position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center projects_photo_button">
                                <i class="texno-full-icon texno-icon"></i> Tam Versiya
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('project-element', ProjectsElement);