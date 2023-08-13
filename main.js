const iconMenu = document.querySelector('.menu__icon');
const bodyMenu = document.querySelector('.menu__body');
if(iconMenu){
    iconMenu.addEventListener('click', function(e){
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        bodyMenu.classList.toggle('_active');
    });
}
let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

for(let i = 0; i <list.length; i++){
    list[i].addEventListener('click',function(){
        for(let j = 0; j <list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');
        for(let k = 0; k < itemBox.length; k++){
            itemBox[k].classList.remove('active')
            itemBox[k].classList.add('hide')

            if(itemBox[k].getAttribute('data-item')== dataFilter || dataFilter == 'all'){
                itemBox[k].classList.remove('hide')
                itemBox[k].classList.add('actice')
            }
        }
    })
}
let languages2 ={
    en:{
        editions: "Home",
        about:"About",
        services:"Service",
        portfolio:"Portfolio",
        contacts:"Contact",
        home__subtitle_one:"Welcome ! I’m",
        home__subtitle_two:'Game Designer 3D Artist',
        home__text:`Welcome to my creative world! As a passionate Game Designer and 3D Artist, I bring dreams to life through immersive experiences. With a keen eye for aesthetics and a knack for storytelling, I craft captivating worlds where players can escape reality. Join me on this exhilarating journey as we push boundaries and redefine gaming together. Let's make magic happen!`,
        about_p_1:`Welcome to my world of creativity and imagination! I'm Kristina , a passionate Game Designer and 3D Artist with over 5 years of experience in crafting mesmerizing 3D models. My journey in this dynamic field has been a constant pursuit of honing my skills and pushing artistic boundaries.`,
        about_p_2:` I take immense pride in bringing dreams to life through immersive gaming experiences. With a keen eye for aesthetics and a flair for storytelling, I build captivating virtual worlds that transport players to extraordinary realms. Every project is a chance to refine my craft and embrace new challenges.`,
        about_p_3:`Join me on this thrilling adventure as I continue to explore, innovate, and redefine what gaming and art can achieve. Let's embark on a journey where the only limit is our imagination. Together, let's create magic!`,
        skills:'Skills',
        services_t_1:'3D Modeling and Animation:',
        services_p_1:'Creating high-quality 3D models of objects, characters, and scenes, as well as animations for use in games, animated films, and other multimedia projects.',
        services_t_2:'Game Design:',
        services_p_2:'Generating innovative game mechanics, levels, and interfaces to ensure an entertaining and satisfying gaming experience.',
        services_t_3:'Concept Art and Illustrations:',
        services_p_3:'Creating illustrations and concept art for games and animation projects, helping to visualize ideas and establish the art style of the gaming world.',
        services_t_4:'Modifications and Add-ons (Mods):',
        services_p_4:'Crafting user-created modifications and add-ons for existing games, introducing new gameplay elements, characters, or worlds.',
        services_t_5:'Consultation and Support:',
        services_p_5:'Providing consultations on various aspects of game and 3D modeling development, as well as supporting projects at various stages of their development.',
        portfolio_all:'All',
        portfolio_char:'Сharacters',
        portfolio_build:'Buildings',
        portfolio_trans:'Transport',
        portfolio_weapons:'Weapons',
        send:'Send',
        say_hi:"'Let's say Hi'"
    },
    ru:{
        editions: "Дом",
        about:"Обо мне",
        services:"Услуги",
        portfolio:"Портфолио",
        contacts: "Контакты",
        home__subtitle_one:"Привет !",
        home__subtitle_two:'Игровой 3D Художник',
        home__text:`Добро пожаловать в мой творческий мир! Будучи страстным гейм  дизайнером и 3D  художником, я воплощаю мечты в жизнь с помощью иммерсивного опыта. Обладая острым чувством эстетики и умением рассказывать истории, я создаю увлекательные миры, в которых игроки могут уйти от реальности. Присоединяйтесь ко мне в этом волнующем путешествии, где мы вместе раздвигаем границы и переопределяем игры. Давайте сделаем волшебство!`,
        about_p_1:`Добро пожаловать в мой мир творчества и воображения! Я - Кристина, страстный игровой дизайнер и 3D-художник с более чем 5-летним опытом создания завораживающих 3D-моделей. Мой путь в этой динамичной области был постоянным стремлением к совершенствованию своих навыков и преодолению художественных границ.`,
        about_p_2:`Я горжусь тем, что могу воплощать мечты в жизнь через захватывающие игровые впечатления. Обладая чутким чувством прекрасного и мастерством рассказывания историй, я создаю завораживающие виртуальные миры, перенося игроков в необыкновенные измерения. Каждый проект - это возможность совершенствовать своё мастерство и принимать новые вызовы`,
        about_p_3:`Присоединитесь ко мне в этом захватывающем приключении, пока я продолжаю исследовать, инноваций и переопределять, что могут достичь игры и искусство. Давайте отправимся в путешествие, где единственным ограничением будет наше воображение. Вместе давайте создавать волшебство!`,
        skills:'Умения',
        services_t_1:'3D Моделирование и Анимация',
        services_p_1:'Создание высококачественных трехмерных моделей объектов, персонажей и сцен, а также анимаций для использования в играх, анимационных фильмах и других мультимедийных проектах.',
        services_t_2:'Геймдизайн:',
        services_p_2:'Генерация инновационных игровых механик, уровней и интерфейсов для обеспечения увлекательного и удовлетворительного игрового опыта.',
        services_t_3:'Концепт-арт и иллюстрации:',
        services_p_3:'Создание иллюстраций и концепт-артов для игр и анимационных проектов, помощь в визуализации идей и установление художественного стиля игрового мира.',
        services_t_4:'Модификации и дополнения (Моды):',
        services_p_4:'Создание пользовательских модификаций и дополнений для существующих игр, внесение новых игровых элементов, персонажей или миров.',
        services_t_5:'Консультация и поддержка:',
        services_p_5:'Предоставление консультаций по различным аспектам разработки игр и трехмерного моделирования, а также поддержка проектов на разных этапах их развития.',
        portfolio_all:'Все',
        portfolio_char:'Персонажи',
        portfolio_build:'Здание',
        portfolio_trans:'Транспорт',
        portfolio_weapons:'Оружие',
        send:'Отправить',
        say_hi:"Скажи привет"

    }
};

const language = document.querySelectorAll('.language');



const setText = ()=>{
    const lang = localStorage.getItem('lang')|| 'en';
    const content = languages2[lang];

    Object.entries(content).forEach(([key, value]) =>{
        const items = document.querySelectorAll(`[data-text="${key}"]`);
        items.forEach((item)=>(item.innerHTML = value));
    })
}

const toggleLangvige =({target})=>{
    const {lang} = target.dataset;

    if(!lang) return;

    localStorage.setItem('lang', lang);

    setText();
}
setText()
language.forEach((lang) => lang.addEventListener('click',toggleLangvige));
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if(menuLinks.length > 0){
    menuLinks.forEach(menuLink =>{
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e){
        const menuLink = e.target;
        if( menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);

            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight;

            if(iconMenu.classList.contains('_active')){
                document.body.classList.remove('_lock')
                iconMenu.classList.remove('_active');
                bodyMenu.classList.remove('_active');
            }
            
            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
            e.preventDefault();

        }
    }
}
const text = document.querySelector('.home__text-circle p');
text.innerHTML = text.innerHTML.split("").map(
    (char,i) =>
    `<span style="transform:rotate(${i * 6}deg)">${char}</span>`
).join("");