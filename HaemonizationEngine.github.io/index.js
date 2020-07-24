$(document).ready(function () {
    const maleNamesAmount = maleNames.length;
    const malePatronymsAmount = malePatronyms.length;
    const maleSurnamesAmount = maleSurnames.length;
    $('#outputArea').val('');

    $('#genMaleNames').click(function () {
        $('#outputArea').val('');
        let generatedName = [];
        for (let index = 0; index < 5; index++) {
            generatedName[index] = ' ' + maleNames[Math.floor((Math.random() * maleNamesAmount) + 0)] + ' ' + 
            malePatronyms[Math.floor((Math.random() * malePatronymsAmount) + 0)] + ' ' + 
            maleSurnames[Math.floor((Math.random() * maleSurnamesAmount) + 0)];
            $('#outputArea').val(generatedName);
        }
        
    });
});

const maleNames = [
	'Афанасий',
	'Андрей',
	'Август',
	'Александр',
	'Адам',
	'Атирей',
	'Альба',
	'Андрей',
	'Алексей',
	'Анатолий',
	'Апполон',
	'Аристарх',
	'Артём',
	'Архипп',
	'Ахилл',
	'Антон',
    'Аэнофор',
    'Аркадий',
	'Велизарий',
	'Василий',
	'Валентин',
	'Василиск',
	'Валерий',
	'Геоф',
	'Георгий',
	'Григорий',
	'Геннадий',
	'Гордей',
	'Гавр',
	'Гавриил',
	'Гектор',
	'Демид',
	'Денис',
	'Дмитрий',
	'Диомед',
	'Дионис',
	'Дорофей',
	'Дора',
	'Дека',
	'Евгений',
	'Ефим',
	'Евдоким',
	'Евсей',
	'Еврипид',
	'Илларион',
	'Иппократ',
	'Ипполит',
	'Иона',
	'Кир',
	'Кирилл',
	'Клеон',
	'Константин',
	'Карл',
	'Куприян',
	'Ксенофонт',
	'Ксантипп',
	'Клавдий',
	'Климент',
	'Леандр',
	'Лев',
	'Леонид',
	'Леонтий',
	'Лука',
	'Лавр',
	'Лазарь',
	'Лето',
	'Ларион',
	'Макар',
	'Мирон',
	'Максим',
	'Матвей',
	'Михаил',
	'Менелай',
	'Ника',
	'Никифор',
	'Нестор',
	'Никита',
	'Никодим',
	'Николай',
	'Омнипон',
	'Омир',
	'Одиссей',
	'Орфей',
	'Панкратий',
	'Пантелеймон',
	'Парис',
	'Перикл',
	'Пирр',
	'Платон',
	'Поликарп',
	'Порфирий',
	'Пётр',
	'Прохор',
	'Павел',
	'Палла',
	'Полидор',
	'Протей',
	'Птиполем',
	'Радола',
	'Родион',
	'Роман',
	'Савва',
	'Севастьян',
	'Степан',
	'Стефан',
	'Сергей',
	'Сила',
	'Ставр',
	'Сарпедон',
	'Тавр',
	'Тавриил',
	'Тарас',
	'Тимофей',
	'Тит',
	'Таддей',
	'Улисс',
	'Фаддей',
	'Фёдор',
	'Феодор',
	'Филат',
	'Филипп',
	'Фока',
	'Фаренд',
	'Феликс',
	'Харитон',
	'Хема',
	'Хион',
	'Хтона',
	'Эразм',
	'Эгида',
	'Эдуард',
	'Юлий',
	'Юстиниан',
	'Юрий',
	'Янис',
];
const malePatronyms = [
	'Афанасьевич',
	'Андреевич',
	'Августович',
	'Александрович',
	'Адамович',
	'Атиреевич',
	'Альбос',
	'Андреевич',
	'Алексеевич',
	'Анатольевич',
	'Апполонович',
	'Аристархович',
	'Артёмович',
	'Архиппович',
	'Ахиллович',
	'Антонович',
	'Аэнофорович',
	'Велизарьевич',
	'Васильевич',
	'Валентинович',
	'Валерьевич',
	'Геофович',
	'Георгиевич',
	'Григорьевич',
	'Геннадьевич',
	'Гордеевич',
	'Гаврович',
	'Гавриилович',
	'Гекторович',
	'Демидович',
	'Денисович',
	'Дмитриевич',
	'Диомедович',
	'Дионисович',
	'Дорофеевич',
	'Дорос',
	'Декос',
	'Евгеньевич',
	'Ефимович',
	'Евдокимович',
	'Евсеевич',
	'Еврипидович',
	'Илларионович',
	'Иппократович',
	'Ипполитович',
	'Ионович',
	'Кирович',
	'Кириллович',
	'Клеонович',
	'Константинович',
	'Карлович',
	'Куприянович',
	'Ксенофонтович',
	'Ксантиппович',
	'Клавдиевич',
	'Климентович',
	'Леандрович',
	'Львович',
	'Леонидович',
	'Леонтьевич',
	'Лукич',
	'Лаврович',
	'Лазаревич',
	'Летос',
	'Ларионович',
	'Макарович',
	'Миронович',
	'Максимович',
	'Матвеевич',
	'Михаилович',
	'Менелаевич',
	'Никос',
	'Никифорович',
	'Несторович',
	'Никитич',
	'Никодимович',
	'Николаевич',
	'Омнипонович',
	'Омирович',
	'Одиссеевич',
	'Орфеевич',
	'Панкратиевич',
	'Пантелеймонович',
	'Платонович',
	'Поликарпович',
	'Порфирьевич',
	'Петрович',
	'Прохорович',
	'Павлович',
	'Паллос',
	'Полидорович',
	'Протеевич',
	'Птиполемович',
	'Радолич',
	'Родионович',
	'Романович',
	'Саввич',
	'Севастьянович',
	'Степанович',
	'Стефанович',
	'Сергеевич',
	'Силич',
	'Ставрович',
	'Сарпедонович',
	'Таврович',
	'Тавриилович',
	'Тарасович',
	'Тимофеевич',
	'Титович',
	'Таддеевич',
	'Улиссович',
	'Фаддеевич',
	'Фёдорович',
	'Феодорович',
	'Филатович',
	'Филиппович',
	'Фокич',
	'Фарендович',
	'Феликсович',
	'Харитонович',
	'Хемос',
	'Хионович',
	'Хтонос',
	'Эразмович',
	'Эгидос',
	'Эдуардович',
	'Юльевич',
	'Юрьевич',
	'Юстинианович',
	'Янич',
];
const maleSurnames = [
    'Восьмицаров',
    'Волкобой',
    'Птиполемский',
    'Нафтанский',
    'Хлоцкий',
    'Меркуров',
    'Хлоцкий',
    'Засечный',
    'Безбородых',
    'Платонов',
    'Аргутинский',
    'Армашевский',
    'Апполонов',
    'Алединский',
    'Базилевский',
    'Андреевский',
    'Андрийский',
    'Фракид',
    'Борастид',
    'Агаменид',
    'Дукидос',
    'Князев',
    'Князевский',
    'Книзос',
    'Графос',
    'Константинов',
    'Бахтин',
    'Бегифон',
    'Бедняков',
    'Болтенков',
    'Василиад',
    'Константиниад',
    'Фасулак',
    'Зервас',
    'Амантидис',
    'Ксенакис',
    'Дукхидов',
    'Кавьяр',
    'Хризых',
    'Налбев',
    'Тавров',
    'Декамбров',
    'Декабрьский',
    'Сметанин',
    'Брадкин',
    'Брискорн',
    'Венеровский',
    'Меркуровский',
    'Василевский',
    'Акрополит',
    'Зимиск',
    'Зимин',
    'Зимов',
    'Зиминский',
    'Пселл',
    'Птохородромский',
    'Луканин',
    'Цимских',
    'Ипсиланов',
    'Атталит',
    'Рыжов',
    'Рыжовский',
    'Руф',
    'Руфовский',
    'Руфов',
    'Жилкин',
    'Вазов',
    'Гуфтовский',
    'Петалких',
    'Сидургов',
    'Рафтанов',
    'Рафтанский',
    'Милонов',
    'Милонас',
    'Ифантев',
    'Карандашев',
    'Молывский',
    'Молывов',
    'Дромовков',
    'Дромонов',
    'Вишнёв',
    'Вишнев',
    'Вишневский',
    'Орлов',
    'Орлев',
    'Орловский',
    'Белоглавов',
    'Белоглавский',
    'Лекефалис',
    'Лекефалов',
    'Доринов',
    'Доринков',
    'Аверьянов',
    'Лукьяновский',
    'Фомин',
    'Фоминид',
    'Алексид',
    'Романид',
    'Периклид',
    'Валентид',
    'Валентидский',
    'Трипанов',
    'Трипановский',
    'Трипашев',
    'Калантровский',
    'Калантров',
];

const femaleNames = [
    'Альба',
    'Аркадия',
	'Аспра',
	'Алькеста',
	'Агата',
	'Агнес',
	'Агнесса',
	'Агния',
	'Александра',
	'Алексина',
	'Алла',
	'Анна',
	'Анастасия',
	'Альбина',
	'Варвара',
	'Василиса',
	'Валерия',
	'Валентина',
	'Мика',
	'Рика',
	'Ника',
	'Гекуба',
	'Кассандра',
	'Геспатия',
	'Глафира',
	'Грация',
	'Дора',
	'Евгения',
	'Екатерина',
	'Елена',
    'Зинаида',
    'Зоя',
	'Инес',
	'Инна',
	'Ирина',
	'Кира',
	'Кристина',
	'Ксения',
	'Лариса',
	'Лидия',
	'Лина',
	'Майя',
	'Маргарита',
	'Мелисса',
	'Мельпомена',
	'Олимпия',
	'Палла',
	'Паллада',
	'Пандора',
	'Пелагия',
	'Римма',
	'Татьяна',
	'Элина',
	'Эрмина',
	'Диана',
	'Констанция',
	'Мария',
	'Наталья',
	'Рената',
	'Урсула',
	'Целестина',
	'Юлия',
	'Ия',
	'Афина',
	'Хема',
	'Хтона',
    'Эгида',
    'Феодора',
];
const femalePatronyms = [
	'Афанасьевна',
	'Андреевна',
	'Августовна',
	'Александровна',
	'Адамовна',
	'Атиреевна',
	'Альбична',
	'Андреевна',
	'Алексеевна',
	'Анатольевна',
	'Апполоновна',
	'Аристарховна',
	'Артёмовна',
	'Архипповна',
	'Ахилловна',
	'Антоновна',
	'Аэнофоровна',
	'Велизарьевна',
	'Васильевна',
	'Валентиновна',
	'Валерьевна',
	'Геофовна',
	'Георгиевна',
	'Григорьевна',
	'Геннадьевна',
	'Гордеевна',
	'Гавровна',
	'Гаврииловна',
	'Гекторовна',
	'Демидовна',
	'Денисовна',
	'Дмитриевна',
	'Диомедовна',
	'Дионисовна',
	'Дорофеевна',
	'Дорична',
	'Декична',
	'Евгеньевна',
	'Ефимовна',
	'Евдокимовна',
	'Евсеевна',
	'Еврипидовна',
	'Илларионовна',
	'Иппократовна',
	'Ипполитовна',
	'Кировна',
	'Кирилловна',
	'Клеоновна',
	'Константиновна',
	'Карловна',
	'Куприяновна',
	'Ксенофонтовна',
	'Ксантипповна',
	'Клавдиевна',
	'Климентовна',
	'Леандровна',
	'Львовна',
	'Леонидович',
	'Леонтьевна',
	'Лукинична',
	'Лавровна',
	'Лазаревна',
	'Летична',
	'Ларионовна',
	'Макаровна',
	'Мироновна',
	'Максимовна',
	'Матвеевна',
	'Михаиловна',
	'Менелаевна',
	'Никична',
	'Никифоровна',
	'Несторовна',
	'Никитична',
	'Никодимовна',
	'Николаевна',
	'Омнипоновна',
	'Омировна',
	'Одиссеевна',
	'Орфеевна',
	'Панкратиевна',
	'Пантелеймоновна',
	'Платоновна',
	'Поликарповна',
	'Порфирьевна',
	'Петровна',
	'Прохоровна',
	'Павловна',
	'Паллична',
	'Полидоровна',
	'Протеевна',
	'Птиполемовна',
	'Радолична',
	'Родионовна',
	'Романовна',
	'Саввична',
	'Севастьяновна',
	'Степановна',
	'Стефановна',
	'Сергеевна',
	'Силична',
	'Ставровна',
	'Сарпедоновна',
	'Тавровна',
	'Таврииловна',
	'Тарасовна',
	'Тимофеевна',
	'Титовна',
	'Таддеевна',
	'Улиссовна',
	'Фаддеевна',
	'Фёдоровна',
	'Феодоровна',
	'Филатовна',
	'Филипповна',
	'Фокична',
	'Фарендовна',
	'Феликсовна',
	'Харитоновна',
	'Хемична',
	'Хионовна',
	'Хтонична',
	'Эразмовна',
	'Эгидична',
	'Эдуардовна',
	'Юльевна',
	'Юрьевна',
	'Юстиниановна',
	'Янисовна',
];
const femaleSurnames = [
    'Восьмицарова',
    'Волкобоева',
    'Птиполемская',
    'Нафтанская',
    'Хлоцкая',
    'Меркурова',
    'Хлоцкая',
    'Засечная',
    'Безбородых',
    'Платонова',
    'Аргутинская',
    'Армашевская',
    'Апполонова',
    'Алединский',
    'Базилевский',
    'Андреевский',
    'Андрийский',
    'Фракид',
    'Борастид',
    'Агаменид',
    'Дукидос',
    'Князев',
    'Князевский',
    'Книзос',
    'Графос',
    'Константинов',
    'Бахтин',
    'Бегифон',
    'Бедняков',
    'Болтенков',
    'Василиад',
    'Константиниад',
    'Фасулак',
    'Зервас',
    'Амантидис',
    'Ксенакис',
    'Дукхидов',
    'Кавьяр',
    'Хризых',
    'Налбев',
    'Тавров',
    'Декамбров',
    'Декабрьский',
    'Сметанин',
    'Брадкин',
    'Брискорн',
    'Венеровский',
    'Меркуровский',
    'Василевский',
    'Акрополит',
    'Зимиск',
    'Зимин',
    'Зимов',
    'Зиминский',
    'Пселл',
    'Птохородромский',
    'Луканин',
    'Цимских',
    'Ипсиланов',
    'Атталит',
    'Рыжов',
    'Рыжовский',
    'Руф',
    'Руфовский',
    'Руфов',
    'Жилкин',
    'Вазов',
    'Гуфтовский',
    'Петалких',
    'Сидургов',
    'Рафтанов',
    'Рафтанский',
    'Милонов',
    'Милонас',
    'Ифантев',
    'Карандашев',
    'Молывский',
    'Молывов',
    'Дромовков',
    'Дромонов',
    'Вишнёв',
    'Вишнев',
    'Вишневский',
    'Орлов',
    'Орлев',
    'Орловский',
    'Белоглавов',
    'Белоглавский',
    'Лекефалис',
    'Лекефалов',
    'Доринов',
    'Доринков',
    'Аверьянов',
    'Лукьяновский',
    'Фомин',
    'Фоминид',
    'Алексид',
    'Романид',
    'Периклид',
    'Валентид',
    'Валентидский',
    'Трипанов',
    'Трипановский',
    'Трипашев',
    'Калантровский',
    'Калантров',
];