// #main>div:nth-of-type(2)>div:first-of-type>div>button

let clicksZero = true;

let article_1 = {
    'foto': 'https://itproger.com/img/news/1516366532.jpg',
    'title': 'Устаревшие языки, которые уже не стоит изучать',
    'intro': 'Есть много ЯП, которые уже отжили свое, но их все равно продолжают изучать. В этой статье мы расскажем про 5 языков, которые уже точно не стоит изучать, хотя многие до сих пор делают это.'
};
let article_2 = {
    'foto': 'https://itproger.com/img/news/1520152698.jpg',
    'title': 'Зачем нужен язык программирования Rust?',
    'intro': 'Rust набирает популярность, но при этом многие до сих пор не понимают его ценности и функций. Мы расскажем про основные преимущества языка программирования Rust.'
};
let article_3 = {
    'foto': 'https://i.ytimg.com/vi/qnxAUKQlQaE/maxresdefault.jpg',
    'title': 'Что выбрать С+ + или С#? С чего лучше начать?',
    'intro': 'Между собой оба языка очень похожи. Статья поможет расставить всё по своим местам.'
};
let article_4 = {
    'foto': 'https://itproger.com/img/tasks/1516438067.jpg',
    'title': '3 логические задачи для настоящего программиста',
    'intro': 'Компании любят проверять молодых специалистов на различные логические задачи. Мы подобрали три интересных задачи, которые заставят вас задуматься.'
};
let article_5 = {
    'foto': 'https://i.ytimg.com/vi/R4mmcs3pJ9E/maxresdefault.jpg',
    'title': 'Как создать свою криптовалюту?',
    'intro': 'Создание собственной криптовалюты это сложная задача, на которую уйдет не мало сил и времени. Мы расскажем вам общий алгоритм!'
};
let article_6 = {
    'foto': 'https://itproger.com/img/news/1516439711.jpg',
    'title': 'ТОП 10: Подборка хобби для программиста',
    'intro': 'Мы подобрали 10 хороших хобби, чтобы можно было с удовольствием провести время вне работы, а также улучшить логические и креативные способности мозга.'
};
let article_7 = {
    'foto': 'https://itproger.com/img/news/1516890380.jpg',
    'title': 'СЕО-продвижение - верный способ улучшить свой бизнес',
    'intro': 'Продвижение сайта это сложная работа, требующая вложений как денег, так и времени. Мы расскажем про верные способы СЕО-продвижения, позволяющие раскрутить сайт!'
};
let article_8 = {
    'foto': 'https://itproger.com/img/news/1516366532.jpg',
    'title': '10 самых популярных сайтов написанных на Django',
    'intro': 'Django набирает популярность и многие крупные компании используют его для создания веб проектов. Мы подобрали 10 популярных сайтов, написанных на Django.'
};

let articles = [article_1, article_2, article_3, article_4, article_5, article_6, article_7, article_8];


$("#main>div:nth-of-type(2)>div:first-of-type>div>button").on("click", function () {
    if (clicksZero) {
        for (var i = 0; i < 4; i++) {
            $("#main>div:nth-of-type(2)>div:first-of-type>div>div:last-of-type").after("<div><div></div><h3>" + articles[i].title + "</h3><p>" + articles[i].intro + "</p><button>Читать далее</button></div>");
            $("#main>div:nth-of-type(2)>div:first-of-type>div>div:last-of-type div").css("background", "url('" + articles[i].foto + "') center no-repeat scroll");
            $("#main>div:nth-of-type(2)>div:first-of-type>div>div:last-of-type div").css("background-size", "cover");
        }
        clicksZero = false;
    } else {
        for (var i = 4; i < 8; i++) {
            $("#main>div:nth-of-type(2)>div:first-of-type>div>div:last-of-type").after("<div><div></div><h3>" + articles[i].title + "</h3><p>" + articles[i].intro + "</p><button>Читать далее</button></div>");
            if (i == 4)
                $("#main>div:nth-of-type(2)>div:first-of-type>div>div:last-of-type div").css("background", "url('" + articles[i].foto + "') center top no-repeat scroll");
            else
                $("#main>div:nth-of-type(2)>div:first-of-type>div>div:last-of-type div").css("background", "url('" + articles[i].foto + "') center no-repeat scroll");
        }
        $("#main>div:nth-of-type(2)>div:first-of-type>div>button").attr("hidden", "hidden");
        $("footer").css("margin", "50px auto 10px")
    }
});

$("header>div>div:nth-of-type(2) input").on("click", function () {
    $(this).css("opacity", "0");
    $("search div:nth-of-type(2) input").val($(this).val());
    $("search").show();
    $("search div:nth-of-type(2) input").focus();
});

$("search div:nth-of-type(2) i:first-of-type").on("click", function () {
    $("search").hide();
    $("header>div>div:nth-of-type(2) input").val($("search div:nth-of-type(2) input").val());
    $("header>div>div:nth-of-type(2) input").css("opacity", "1");
});

$("search div:nth-of-type(2) input").on("keyup", function () {
    if ($(this).val() != "")
        $("search div:nth-of-type(2) i:nth-of-type(2)").show();
    else
        $("search div:nth-of-type(2) i:nth-of-type(2)").hide();
});

$("search div:nth-of-type(2) i:nth-of-type(2)").on("click", function () {
    $("search div:nth-of-type(2) input").val("");
    $(this).hide();
    $("search div:nth-of-type(2) input").focus();
});