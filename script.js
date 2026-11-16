
// ==========================================
// IT KAMP — НАВЧАЛЬНІ МАТЕРІАЛИ
// Автор: Крутяк Н. О.
// ==========================================

// Перелік навчальних курсів
const courseData = [
    {
        id: "informatics",
        title: "Інформатика · профільний рівень · 10 клас",
        subtitle: "Модельна навчальна програма",
        icon: "⌘",
        lessons: [
            { number: 1, title: "Поняття електронної таблиці. Типи даних. Форматування. Діапазон клітин.", url: "https://docs.google.com/spreadsheets/d/1mvgm45edWjqQL0MU15OQkUCoJVymjyNp/edit?usp=drive_link&ouid=101379645053779183781&rtpof=true&sd=true" },
            { number: 2, title: "Використання формул та функцій.", url: "https://docs.google.com/spreadsheets/d/1kyqrX-0QOkDulp3whsjc6Wum1nV-q23y/edit?usp=drive_link&ouid=101379645053779183781&rtpof=true&sd=true" },
            { number: 3, title: "Формули для опрацювання текстів.", url: "https://docs.google.com/spreadsheets/d/1pG-rKIO5GvWbI-z7j8xBKB0KXvcww2WK/edit?usp=drive_link&ouid=101379645053779183781&rtpof=true&sd=true" },
            { number: 4, title: "Розв'язування задач з використанням умов. Абсолютне посилання.", url: "https://docs.google.com/spreadsheets/d/1R4hrknIyhnTt4oZpEnIp8Y6HD1al4ARa/edit?usp=drive_link&ouid=101379645053779183781&rtpof=true&sd=true" },
            { number: 5, title: "Розв'язування задач з використанням умов. Абсолютне посилання.", url: "https://docs.google.com/spreadsheets/d/1lzwjsY4TKn52xpxEPqr3T_RK5PhQxgin/edit?usp=drive_link&ouid=101379645053779183781&rtpof=true&sd=true" },
            { number: 6, title: "Сортування та фільтрування даних.", url: "https://docs.google.com/spreadsheets/d/1ivIDzFVwJrLxZuu1rCZXXT0bRvhmtjey/edit?usp=sharing&ouid=101379645053779183781&rtpof=true&sd=true" },
            { number: 7, title: "Створення таблиць і візуалізацій, доступних для різних груп користувачів. Дата та час.", url: "https://docs.google.com/spreadsheets/d/1yBxM4CA4kfw3RlwHCL-xyFO4326t_9yM/edit?usp=drive_link&ouid=101379645053779183781&rtpof=true&sd=true" },
            { number: 8, title: "Вибір способу візуалізації даних залежно від поставленої задачі. Використання функцій пошуку та вибірки даних для аналізу інформації.", url: "https://docs.google.com/spreadsheets/d/1TvP4DVydM-umCzcJvkMtWfclVyATnt4l/edit?usp=drive_link&ouid=101379645053779183781&rtpof=true&sd=true" },
            { number: 9, title: "Відкриті дані та їх використання для аналізу суспільних процесів моєї громади.", url: "https://docs.google.com/spreadsheets/d/1pQGj-655kJAhCoEmJIEaKF2yKk2rdk5z/edit?usp=drive_link&ouid=101379645053779183781&rtpof=true&sd=true" },
            { number: 10, title: "Зведена таблиця. Зведена діаграма.", url: "https://docs.google.com/spreadsheets/d/13YXtpqVUjUQUEkCDdH934EgZ3eQwud8j/edit?usp=drive_link&ouid=101379645053779183781&rtpof=true&sd=true" },
            { number: 11, title: "Підсумок з теми: Опрацювання табличних даних та моделей.", url: "https://docs.google.com/spreadsheets/d/1oVQknW1N1lE5bAgzOM_vnAgh-BCVsOFW/edit?usp=drive_link&ouid=101379645053779183781&rtpof=true&sd=true" },
            { number: 12, title: "Мета та структура презентації. Правила оформлення презентації. Використання текстових, графічних і мультимедійних об'єктів.", url: "https://drive.google.com/file/d/1D4JcRVubgdrF6_HZCilzkTeQakkyV1Q3/view?usp=drive_link" },
            { number: 13, title: "Авторське право та академічна доброчесність під час створення презентацій.", url: "https://drive.google.com/file/d/1peSKgxmM6BfwBDeh1UA3zcc5t8uy7F-k/view?usp=drive_link" },
            { number: 14, title: "Адаптація презентацій до різних цільових аудиторій.", url: "https://drive.google.com/file/d/13-Ecj5_UzonJPm9H5zIP1TodmGn5eK0g/view?usp=drive_link" },
            { number: 15, title: "Представлення та захист презентацій на тему: Професії та ролі фахівців у сфері інформаційних технологій.", url: "https://drive.google.com/file/d/1sLPVNlU5sfddm2SYHjhTvaOsgvx9b2We/view?usp=drive_link" },
            { number: 16, title: "Представлення та захист презентацій на тему: Професії та ролі фахівців у сфері інформаційних технологій.", url: "https://drive.google.com/file/d/1dHbZfbQpgoNa6ta6Jk5GhmiWcIN6ckbm/view?usp=drive_link" },
            { number: 17, title: "Повторення основ Python. Перетворення простих типів даних. Арифметичні операції.", url: "https://colab.research.google.com/drive/1lJUml5uw1rhHQ0dKMKD9QFo4mDV3k89k?usp=drive_link" },
            { number: 18, title: "Форми розгалуження. Логічні оператори.", url: "https://colab.research.google.com/drive/1qGL7MxUsQl4JJtYX_ZfDe_WCGd2lNGoR?usp=drive_link" },
            { number: 19, title: "Форми розгалуження. Логічні оператори.", url: "https://colab.research.google.com/drive/1Yfyd2xE5aQcHpS_RTyYYhkUAzLeGBpkP?usp=drive_link" },
            { number: 20, title: "Списки: створення, індексація, зрізи.", url: "https://colab.research.google.com/drive/1YSkItTmH_1lst7fjLkwUAT02Lvbu0y04?usp=drive_link" },
            { number: 21, title: "Операції над списками. Цикли.", url: "https://colab.research.google.com/drive/18xt4wQ0AC65_XS83_GbN-4NUE7U1wcnR?usp=drive_link" },
            { number: 22, title: "Операції над списками. Цикли.", url: "https://colab.research.google.com/drive/156V9BYFQB-d7Jeu7wxc8qHXdPk0CiVbR?usp=drive_link" },
            { number: 23, title: "Поєднання повторення і розгалуження.", url: "https://colab.research.google.com/drive/1yzFhp_xjfIVS8d69bKFfSrNm9WT9BM3w?usp=drive_link" },
            { number: 24, title: "Поєднання повторення і розгалуження.", url: "https://colab.research.google.com/drive/1p0283f4r7Etb81XfcER1BbqKmbEnyX08?usp=drive_link" },
            { number: 25, title: "Рядки: основні операції, індексація, методи.", url: "https://colab.research.google.com/drive/1dtVHG8yrNGLEqqVMW6Y0o1BmIzXSBurc?usp=drive_link" },
            { number: 26, title: "Рядки: основні операції, індексація, методи.", url: "https://colab.research.google.com/drive/1clWpjzJD5lLtGiPD00GXjJxWu02UOwQj?usp=drive_link" },
            { number: 27, title: "Множини: операції, застосування.", url: "https://colab.research.google.com/drive/1RpNM4RfTr8YiBCSww3R9UpDW_oVl4WZT?usp=drive_link" },
            { number: 28, title: "Практичні задачі з множинами для аналізу та порівняння даних.", url: "https://colab.research.google.com/drive/1XVfMX6VxX-sYwRnVffe69WhTCVmOMWGZ?usp=drive_link" },
            { number: 29, title: "Матриця. Індексація.", url: "https://colab.research.google.com/drive/1EtCNNOjpxiU663BF3z4HCvAyQsMtIu40?usp=drive_link" },
            { number: 30, title: "Аналіз двовимірної матриці.", url: "https://colab.research.google.com/drive/1Bt2C3WKju5HHSI1ncIX5qwob247hoCHW?usp=drive_link" },
            { number: 31, title: "Моделювання даних за допомогою двовимірних структур.", url: "https://colab.research.google.com/drive/13JTbqEVVHd1a5sxYxbHgeZFjSr8bUVPF?usp=drive_link" },
            { number: 32, title: "Розв'язування задач із використанням вкладених списків і матриць.", url: "https://colab.research.google.com/drive/1tr2zOZrWZPi4DIehGFug1-mANHvQSUZd?usp=drive_link" },
            { number: 33, title: "Словники. ", url: "https://colab.research.google.com/drive/1raA92mHr20GHH77g4hUtF1NLv7YuNd2S?usp=drive_link" },
            { number: 34, title: "Принципи хешування та асоціативного доступу до даних.", url: "https://colab.research.google.com/drive/1rAJUIKxV0m0OO_z0QmCqyJhSlE4-UgLq?usp=drive_link" },
            { number: 35, title: "Розв'язування задач із використанням словників та комбінованих структур даних.", url: "https://colab.research.google.com/drive/1cbiewHanSIyMy2MFiHo-m1Ldw5X7V3x5?usp=drive_link" },
            { number: 36, title: "Порівняння можливостей різних структур даних під час розв'язування задач.", url: "https://colab.research.google.com/drive/1Fl7MZpUYI62l89R7aGO2jVI7HKO8uW4C?usp=drive_link" },
            { number: 37, title: "Підсумок з теми:  Структури даних.", url: "https://drive.google.com/file/d/1pVZkt5HM6NfLqlruIS5g7y7sMiyJooMe/view?usp=drive_link" },
            { number: 38, title: "Що таке алгоритм? Властивості алгоритмів.", url: "https://drive.google.com/file/d/1PsZDXHend6M1VGL2qq1VHs-67MmBaKDM/view?usp=drive_link" },
            { number: 39, title: "Ефективність алгоритмів. Поняття складності.", url: "https://drive.google.com/file/d/1hIW5_0s1iVUAHJ2PeN5B1zWVLwSm1dfe/view?usp=drive_link" },
            { number: 40, title: "Порівняння та вдосконалення алгоритмів розв'язування задач.", url: "https://drive.google.com/file/d/1RaRg2blJLnZSshpWI3VgxrmS0-OvNEyu/view?usp=drive_link" },
            { number: 41, title: "Лінійний пошук: логіка та застосування.", url: "https://drive.google.com/file/d/1ij-vyFL2lkWAbrpiu7De_l2H_othANrF/view?usp=drive_link" },
            { number: 42, title: "Бінарний пошук: логіка та застосування.", url: "https://drive.google.com/file/d/1BLZBioi8Xq93DiC9MZsHGBdIFEfvVXIB/view?usp=drive_link" },
            { number: 43, title: "Практика задач на пошук.", url: "https://drive.google.com/file/d/1-Kc-mTbkbT0YBqKftiv1AdkQCCP0qY4u/view?usp=drive_link" },
            { number: 44, title: "Порівняння ефективності алгоритмів пошуку.", url: "https://drive.google.com/file/d/1GRQrjzUNSLD9_WeN5C89tkdV-bFBZeGu/view?usp=drive_link" },
            { number: 45, title: "Сортування вибором. Сортування вставками.", url: "https://drive.google.com/file/d/1z0HNLC6mBeuXBON0b8RM2U-kdV2i5Fg-/view?usp=drive_link" },
            { number: 46, title: "Бінарне сортування.", url: "https://drive.google.com/file/d/11-srlcL4n-19Kic1cI0_mop8kiDVVS10/view?usp=drive_link" },
            { number: 47, title: "Практика задач на сортування.", url: "https://colab.research.google.com/drive/1FXt0Bem6SFzZyDoGwvtm8uJ5IATnUIIK?usp=drive_link" },
            { number: 48, title: "Швидке сортування", url: "https://drive.google.com/file/d/1cfpZXvMGoz4FJLt1bAzYVBsIxfDmc-88/view?usp=drive_link" },
            { number: 49, title: "Жадібні алгоритми.", url: "https://drive.google.com/file/d/1Nx5_cNuDwIUJObdcUI7c8AHm1jJkvCGf/view?usp=drive_link" },
            { number: 50, title: "Практика застосування жадібних алгоритмів.", url: "https://drive.google.com/file/d/1Nx5_cNuDwIUJObdcUI7c8AHm1jJkvCGf/view?usp=drive_link" },
            { number: 51, title: "Алгоритми з використанням двох індексів.", url: "https://drive.google.com/file/d/1mHORw0shGL0CfkVQKqxc62l8lIjvt1Pr/view?usp=drive_link" },
            { number: 52, title: "Задачі на обробку списків.", url: "https://colab.research.google.com/drive/11MT0Fbsyj_FoJ09eaLC5a04JJs_nF93D?usp=drive_link" },
            { number: 53, title: "Пошук підрядка.", url: "https://colab.research.google.com/drive/1AdWVdCvMwPsAqbC5utxow9vO6crzHHNM?usp=drive_link" },
            { number: 54, title: "Перевірка анаграм.", url: "https://colab.research.google.com/drive/1fFRuloJUxIqsQgaDgDnPuG2j5i8PuEPm?usp=drive_link" },
            { number: 55, title: "Стиснення рядків.", url: "https://colab.research.google.com/drive/1a0YEwclbKGlJjYx3n2D-acidRBO-sr4n?usp=drive_link" },
            { number: 56, title: "Порівняння та вибір алгоритмів для розв'язування практичних задач.", url: "https://colab.research.google.com/drive/1ul9m0q62CjeIrCtbS5tp2qkJva_JKcAx?usp=drive_link" },
            { number: 57, title: "Алгоритмічні рішення в цифрових сервісах: безпека, ефективність та врахування потреб користувачів.", url: "https://drive.google.com/file/d/1w1Y1ZyO26EMeHxPnfzU8MLCXFhtXE2pb/view?usp=drive_link" },
            { number: 58, title: "Підсумок з теми: Алгоритми опрацювання даних", url: "https://drive.google.com/file/d/1ZnfTv2X2ij4ZqkBhUc9hDmAs0Kw98JWk/view?usp=drive_link" },
            { number: 59, title: "Вступ до вебпрограмування. JavaScript у браузері. Змінні, типи даних та оператори.", url: "https://drive.google.com/file/d/15ZtfibCBZEMLtOA4axEoKwixOrWE97K7/view?usp=drive_link" },
            { number: 60, title: "Функції в JavaScript. Способи оголошення функцій.", url: "https://drive.google.com/file/d/1lEM9LFOgY4FjrrLfrzdEXQvfVerXQnZJ/view?usp=drive_link" },
            { number: 61, title: "Об'єкти та масиви для опрацювання даних.", url: "https://drive.google.com/file/d/1ntrBJ5heoC9FTtX2RwhK7ps3cxT9e2kI/view?usp=drive_link" },
            { number: 62, title: "DOM-модель документа та керування елементами вебсторінки.", url: "https://drive.google.com/file/d/1spYQO2DTgyX3TtSxH4wyDS0SF4gp-lOW/view?usp=drive_link" },
            { number: 63, title: "Події вебсторінки та взаємодія користувача з вебінтерфейсом.", url: "https://drive.google.com/file/d/1Bs_zyUsSNRcWlo7Cw5nUvWegVC4LDzC5/view?usp=drive_link" },
            { number: 64, title: "Використання масивів для динамічного оновлення вмісту вебсторінки.", url: "https://drive.google.com/file/d/12aMKuh9QFVaaoNrnxRDZWkJ4KYU9WR9N/view?usp=drive_link" },
            { number: 65, title: "Керування зовнішнім виглядом елементів вебінтерфейсу.", url: "https://drive.google.com/file/d/10h1gDtmR0TTF20BPdRhdTILcLcnAGbv6/view?usp=drive_link" },
            { number: 66, title: "Основи безпечної роботи з даними користувача.", url: "https://drive.google.com/file/d/1Vc5LRbn6lw0jguWaHLzVc3nENW4NzNdt/view?usp=sharing" },
            { number: 67, title: "Планування командного вебпроєкту соціального або волонтерського спрямування. Ознайомлення з ролями розробника, дизайнера, тестувальника та менеджера проєкту.", url: "https://drive.google.com/file/d/18jrYtEKBa7aSL9TlmA-82keVN3rszUcZ/view?usp=drive_link" },
            { number: 68, title: "Командна реалізація вебпроєкту відповідно до визначених ролей.", url: "https://drive.google.com/file/d/1t1IGvl8A2FYDzhL97vLklEh7Hdf4fqoL/view?usp=drive_link" },
            { number: 69, title: "Командна реалізація вебпроєкту відповідно до визначених ролей.", url: "https://drive.google.com/file/d/1t1IGvl8A2FYDzhL97vLklEh7Hdf4fqoL/view?usp=drive_link" },
            { number: 70, title: "Тестування та вдосконалення вебпроєкту. ", url: "https://drive.google.com/file/d/1QZzw1TW5G8yLJf96L1x7c0CEhzpN9Ns1/view?usp=drive_link" },
            { number: 71, title: "Взаємодія учасників команди під час розв'язування проблем.", url: "https://drive.google.com/file/d/1WbhgYD041WwBIRscxIM7yqvTODiQvOW7/view?usp=drive_link" },
            { number: 72, title: "Презентація та командний захист результатів вебпроєкту.", url: "https://drive.google.com/file/d/13mqr7IAGDVdwIzXG0MGj9MW_0TwNaG6T/view?usp=drive_link" },
            { number: 73, title: "Рефлексія щодо професійних ролей у сфері інформаційних технологій.", url: "https://drive.google.com/file/d/1VQnPoSEr9BLQC2v_763RzKtSJ98PLH-r/view?usp=drive_link" }
        ]
    },
    {
        id: "robotics",
        title: "Робототехніка",
        subtitle: "Навчальний курс",
        icon: "⚙",
        lessons: [
           { number: 1, title: "Вступ до інженерної робототехніки.Складові роботизованої системи", url: "https://drive.google.com/file/d/1UNarGWhRnzwTOzKFgo-qfSMR6eMM37so/view?usp=drive_link" },
            { number: 2, title: "Плата Arduino: будова та можливості. Середовище Arduino IDE. Blink.", url: "https://drive.google.com/file/d/1oo1ZMO7RMjozaKyUSQr8Jcti9AeuBe9c/view?usp=drive_link" },
            { number: 3, title: "Змінні та типи даних, умовні оператори. ", url: "https://drive.google.com/file/d/1LwB-rdETa1_7AmsVIB48K8CTKdUwMOEc/view?usp=drive_link" },
            { number: 4, title: "Цикли в керуванні. Рефакторинг коду.", url: "https://drive.google.com/file/d/13y_v0D6GuaYW2mRrNyBo3rFfx-4G3R68/view?usp=drive_link" },
            { number: 5, title: "Робота з кнопкою.", url: "https://drive.google.com/file/d/1YqBSyFF_VWt15Uutw-QIllJ5V-6tv2Cn/view?usp=drive_link" },
            { number: 6, title: "Поняття функції. Правила функціонального програмування.", url: "https://drive.google.com/file/d/1iesstB6f83-QdbNWmZzi_ctz8o1RseFv/view?usp=drive_link" },
            { number: 7, title: "ШІМ-сигнал (PWM).", url: "https://drive.google.com/file/d/10Q42Fr4F2k6pds_bxhlxgpxEYrlpAfbl/view?usp=drive_link" },
            { number: 8, title: "Аналогові сигнали.", url: "https://drive.google.com/file/d/13vTwVvn223JoCKOE3qzpCMKOXpovhH3E/view?usp=drive_link" },
            { number: 9, title: "Датчики в робототехніці.", url: "https://drive.google.com/file/d/1gbTOo43SmGFV9daT9nFtreYJ9lO_8vDT/view?usp=drive_link" },
            { number: 10, title: "Датчик відстані. Serial Monitor.", url: "https://drive.google.com/file/d/1GthjeScjWBBKW9SE-UFhxAcik1ZFK8Ph/view?usp=drive_link" },
            { number: 11, title: "Сервомотор. Керування Servo.", url: "https://drive.google.com/file/d/13_U3vd4pqMJyYOujDF_dvYEcuiK6npVd/view?usp=drive_link" },
            { number: 12, title: "Логіка реакції.", url: "https://drive.google.com/file/d/16O2kdqP6jNFU47eqzSuOvz24pet_bI-U/view?usp=drive_link" },
            { number: 13, title: "Пєзоелемент.", url: "https://drive.google.com/file/d/1gQdgbXIj_7erzgp6Ok734vzW1Y3oFrmv/view?usp=drive_link" },
            { number: 14, title: "Проект освітлення вулиці.", url: "https://drive.google.com/file/d/1sTfDAkTI6g4O5soTRGYRlPpCpO1qIxED/view?usp=drive_link" },
            { number: 15, title: "Проект Сигналізація.", url: "https://drive.google.com/file/d/1ZIXC_stYMjb_AFe3vJSJ1jlOd9jUDnrZ/view?usp=drive_link" },
            { number: 16, title: "Підсумок з теми: Датчики та актуатори", url: "https://drive.google.com/file/d/1ucIU2xmoLWRxd52YgOzGr06FQ42DLHXN/view?usp=drive_link" },
            { number: 17, title: "LCD / OLED дисплей.", url: "https://drive.google.com/file/d/1zNtTDzrdNi2hjmJLDIKIyQrtetvKJVco/view?usp=drive_link" },
            { number: 18, title: "Проєкт інформаційна панель.", url: "https://drive.google.com/file/d/1tgQqDlR9syJRr97Li1954qt-uD-ZUKFP/view?usp=drive_link" },
            { number: 19, title: "Матриця", url: "https://drive.google.com/file/d/1yeRw5RePRnkQiELyj13JJiygWVmXJglM/view?usp=drive_link" },
            { number: 20, title: "Побудова рухомих зображень", url: "https://drive.google.com/file/d/1xbU68-UQ7gEp6N6QiwvP_s_sBLYOfjeS/view?usp=drive_link" },
            { number: 21, title: "7 сегментний дисплей.", url: "https://drive.google.com/file/d/14IavLutjBHePBYJkMeZ5n8g0sEa1DDAO/view?usp=drive_link" },
            { number: 22, title: "Мікроконтролери нового покоління. Arduino vs ESP32", url: "https://drive.google.com/file/d/135BAC_JeU4fM829LoizSkwHe0l9140-5/view?usp=drive_link" },

        ]
    },
    {
        id: "webdesign",
        title: "Вебдизайн",
        subtitle: "Навчальний курс",
        icon: "▧",
        lessons: [
            { number: 1, title: "Вебдизайн та його роль у створенні сучасних вебресурсів.", url: "https://drive.google.com/file/d/1kWx9cLcE--CmDH9XwgUf9Gh3xGYqcIrN/view?usp=drive_link" },
            { number: 2, title: "Організація роботи над вебпроєктом та структура вебдокумента.", url: "https://drive.google.com/file/d/1cRlDjPw96bb0en0CNTJTQS_RX4dlgsj3/view?usp=drive_link" },
            { number: 3, title: "Гіпертекстові документи та принципи їх побудови.", url: "https://drive.google.com/file/d/1jdQaow2jCYo8_ipQlPbVKITanBcZnzF8/view?usp=drive_link" },
            { number: 4, title: "Елементи структурування та форматування вмісту вебсторінки.", url: "https://drive.google.com/file/d/1PTmMxXsnCSqrwG1tRk5OSL0YZ0lIlBn3/view?usp=drive_link" },
            { number: 5, title: "Подання текстової, графічної та навігаційної інформації на вебсторінці.", url: "https://drive.google.com/file/d/1Nelr-byxDcbJcbQVApGpVzkRLVXodhve/view?usp=drive_link" },
            { number: 6, title: "Організація табличних даних у вебдокументах.", url: "https://drive.google.com/file/d/18U0pLb_MsuJf7FKvsRHtSzeQrJQV-Alo/view?usp=drive_link" },
            { number: 7, title: "Створення простої вебсторінки та аналіз результатів її роботи.", url: "https://drive.google.com/file/d/1noRNiUpSGhhpvdcfGmSwTH5pyjCN7P83/view?usp=drive_link" },
            { number: 8, title: "Засоби оформлення вебсторінок та робота з текстовим оформленням.", url: "https://drive.google.com/file/d/1IasW1PR09Tb7cqWTfRfSd2-QspgdoDj6/view?usp=drive_link" },
            { number: 9, title: "Кольорове оформлення та просторове розміщення елементів вебсторінки.", url: "https://drive.google.com/file/d/1nJSZ2Mok_ki8msHyrGWOJkKpO4UNs0Z8/view?usp=drive_link" },
            { number: 10, title: "Кольорове оформлення та просторове розміщення елементів вебсторінки.", url: "https://drive.google.com/file/d/1I5-KbIKWAhX8aBTrs_dQXrPp_jI7UpgC/view?usp=drive_link" },
            { number: 11, title: "Використання графічного оформлення та декоративних елементів.", url: "https://drive.google.com/file/d/1mVD7ueQvw7DB6cYY61pZcqv_IF1ujsd6/view?usp=drive_link" },
            { number: 12, title: "Використання графічного оформлення та декоративних елементів.", url: "https://drive.google.com/file/d/1BUw2sSsSPpDqsQj0_I3pCVTrcpoXQRbJ/view?usp=drive_link" },
            { number: 13, title: "Організація розміщення елементів на вебсторінці.", url: "https://drive.google.com/file/d/12t9Rdg0KwuMWQnsVaz-WlDcyf1HMghrt/view?usp=drive_link" },
            { number: 14, title: "Створення візуального оформлення вебсторінки відповідно до визначених вимог.", url: "https://drive.google.com/file/d/1wqj1Z6WtSOxDV8OluzK7imyzWG5rT5S4/view?usp=drive_link" },
            { number: 15, title: "Оформлення елементів взаємодії користувача з вебресурсом.", url: "https://drive.google.com/file/d/1PJpIwcY4B-GZOMP8GUqwzGHIs0PsOME0/view?usp=drive_link" },
            { number: 16, title: "Анімаційні та інтерактивні ефекти у вебінтерфейсах.", url: "https://drive.google.com/file/d/11t6K0PPQDXm22gVv56cQLr2M6sDhCjDh/view?usp=drive_link" },
            { number: 17, title: "Поняття UX та UI. Роль інтерфейсу в взаємодії користувача з цифровим продуктом.", url: "https://drive.google.com/file/d/1AZQ3ACIRVbtoGoKHIBlHUEsLiyi_T7bc/view?usp=drive_link" },
            { number: 18, title: "Поняття UX та UI. Роль інтерфейсу в взаємодії користувача з цифровим продуктом.", url: "https://drive.google.com/file/d/19LWUDCzmFr87UDoqXZUed-Jz4szmcOgt/view?usp=drive_link" },
            { number: 19, title: "Базові принципи проєктування інтерфейсів: простота, узгодженість, зрозумілість, зворотний зв’язок.", url: "https://drive.google.com/file/d/1o7IqpzF4rBVVYSaUlrD5ZP_mj6fdCB3v/view?usp=drive_link" },
            { number: 20, title: "Візуальна структура інтерфейсу: макет, композиція, ієрархія елементів.", url: "https://drive.google.com/file/d/1NgP5zkyt96nwvMAEw_U0Qf5ksFENmDzr/view?usp=drive_link" },
            { number: 21, title: "UI-елементи та їх функціональне призначення (кнопки, картки, форми, навігаційні елементи).", url: "https://drive.google.com/file/d/1oLtYvcDxXr0FJAYRDZPu-hZgGCfqNHaW/view?usp=drive_link" },
            { number: 22, title: "Принципи побудови дизайн-системи (повторне використання елементів).", url: "https://drive.google.com/file/d/1LmyU-SSHTrdcGOPrSnyjzHWGAUm9ELjo/view?usp=drive_link" },
            { number: 23, title: "Прототипування інтерфейсів.", url: "https://drive.google.com/file/d/1rbKZywkZXZ4fWYtqlx8vE3s4eOEZQuWV/view?usp=drive_link" },
            { number: 24, title: "Проєктування інтерфейсу вебсервісу як комплексного користувацького сценарію на громадські потреби.", url: "https://drive.google.com/file/d/1Vv2Ra182Oux_PZFDoqh1ItC_KszhdWDa/view?usp=drive_link" },
            { number: 25, title: "Основи візуальних стилів інтерфейсу та їх вплив на сприйняття користувача.", url: "https://drive.google.com/file/d/1FtDt8VMf5_p3SjVXCVLWapcYxCWvIBeM/view?usp=drive_link" },
            { number: 26, title: "Використання цифрових інструментів для створення прототипів інтерфейсів.", url: "https://drive.google.com/file/d/1cwXSOq03_oltN_Dbby6hBgCvx8diYC3q/view?usp=drive_link" },
            { number: 27, title: "Організація командної роботи над вебпроєктом: розподіл ролей, відповідальності та узгодження рішень.", url: "https://drive.google.com/file/d/186KJmmEYstgAc5fCfY_lZ6Y-veF-bk8I/view?usp=drive_link" },
            { number: 28, title: "Перетворення дизайн-макета у вебреалізацію як етап командної розробки цифрового продукту.", url: "https://drive.google.com/file/d/1PGxOHIapIZs4Op1eEnAN-guug3Fl2_tS/view?usp=drive_link" },
            { number: 29, title: "Спільне кодування та робота з кодом у команді.", url: "https://drive.google.com/file/d/1KjiEv3pLm1EVhugLPPmDUhFrCav-6W4c/view?usp=drive_link" },
            { number: 30, title: "Реалізація інтерфейсу вебсайту на основі макета: структура, семантика, відповідність дизайну.", url: "https://drive.google.com/file/d/1KjiEv3pLm1EVhugLPPmDUhFrCav-6W4c/view?usp=drive_link" },
            { number: 31, title: "Створення адаптивного інтерфейсу для різних пристроїв у межах командного проєкту.", url: "https://drive.google.com/file/d/1V7YOvY9p53YA4TVhFVEVHr6SMksZhs3B/view?usp=drive_link" },
            { number: 32, title: "Використання гнучких моделей компонування для побудови інтерфейсів.", url: "https://drive.google.com/file/d/1V7YOvY9p53YA4TVhFVEVHr6SMksZhs3B/view?usp=drive_link" },
            { number: 33, title: "Реалізація адаптивності через медіа-запити.", url: "https://drive.google.com/file/d/1V7YOvY9p53YA4TVhFVEVHr6SMksZhs3B/view?usp=drive_link" },
            { number: 34, title: "Тестування проєкту та внесення покращень.", url: "https://drive.google.com/file/d/1VEx8_oJr-REsFBaRxiCnZrqKqaUV_eiL/view?usp=drive_link" },
            { number: 35, title: "Підсумкове обговорення результатів роботи команди та оцінка внеску учасників.", url: "https://drive.google.com/file/d/1SLSCG9gw9hElaNQkFlSmWnr0A6WxTh4E/view?usp=drive_link" },

        ]
    },
    {
        id: "graphic",
        title: "Графічний дизайн",
        subtitle: "Навчальний курс",
        icon: "✳",
        lessons: [
            { number: 1, title: "Вступ до графічного дизайну. Будова вікна програми. Фрейми та створення простих графічних блоків.", url: "#" },
            { number: 2, title: "Геометричні фігури у Figma. Створення композицій із простих форм.", url: "#" },
            { number: 3, title: "Колір у графічному дизайні. Колірні палітри, контраст і поєднання кольорів.", url: "https://www.figma.com/design/BxapWqWfysbSfilOYbGzYM/Untitled?node-id=0-1&t=OfvI7M0qpx5fTSOK-1" },
            { number: 4, title: "Малювання у редкторі. Використання Pen Tool, Pencil та векторних інструментів.", url: "https://www.figma.com/design/Ad6bvK8eSQk4hZjxarGfMm/%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D1%87%D0%BD%D0%B0-%D1%80%D0%BE%D0%B1%D0%BE%D1%82%D0%B0-4?node-id=0-1&p=f&t=eSrHluQYu71TwEzF-0" },
            { number: 5, title: "Робота з векторними об'єктами.Створення піктограм або простого логотипу.", url: "https://www.figma.com/design/YIWTCLZ0Z95F5qvgD8Yhnq/Untitled?node-id=0-1&t=OfvI7M0qpx5fTSOK-1" },
            { number: 6, title: "Типографіка.Робота зі шрифтами, розмірами, стилями та текстовою ієрархією.", url: "https://drive.google.com/file/d/1Ng1_l6J4oBgZH3wx0FOV9EILTEBRgd9n/view?usp=drive_link" },
            { number: 7, title: "Дизайн інформаційної картки.", url: "https://drive.google.com/file/d/1wOHasranLl-DAxKf0-FdN_wVa6liQrbe/view?usp=drive_link" },
            { number: 8, title: "Створення карток для соціальних мереж. Робота із зображеннями, текстом та графічними елементами.", url: "https://drive.google.com/file/d/1YLsAwpPxrewftZiR4A2oPcfR01zm7BGG/view?usp=drive_link" },
            { number: 9, title: "Основи рекламного дизайну. Цільова аудиторія та структура рекламного матеріалу.", url: "https://drive.google.com/file/d/103sLldxC0903cjUSRHc8BzPPjytIBpZb/view?usp=drive_link" },
            { number: 10, title: "Створення флаєра. Формат, композиція, текстова інформація та візуальне оформлення.", url: "https://drive.google.com/file/d/1rI1QilJU18TWg0uI3c5-CZ5iqiuqtyDD/view?usp=drive_link" },
            { number: 11, title: "Розробка рекламного флаєра для події, закладу, гуртка або заходу.", url: "https://drive.google.com/file/d/1O5Rk8xbQsQBIPSmmdaKeCkf0tA6Kqomk/view?usp=drive_link" },
            { number: 12, title: "Створення інформаційних та вітальних листівок.", url: "https://drive.google.com/file/d/1N2Ky6RhjqFsBZPXdL0Ddu-AgetZy2x8J/view?usp=drive_link" },
            { number: 13, title: "Робота з великими заголовками, фотографіями та композицією. Розробка афіші", url: "https://drive.google.com/file/d/1hlrLLnEQpo7a6iyHgsxk6rp0B5mdyQ4J/view?usp=drive_link" },
            { number: 14, title: "Дизайн рекламних банерів та графіки для соціальних мереж.", url: "#" },
            { number: 15, title: "Розробка постера на тему: Моє портфоліо", url: "https://drive.google.com/file/d/1pt-u4oUZuCLnH6sMqJNdJGj-nY12pKjM/view?usp=drive_link" },
            { number: 16, title: "Завершення та презентація дизайн-проєкту.", url: "https://drive.google.com/file/d/1-ClZzIrwACqyOtfGDNsenJ6ieVr2P4t4/view?usp=drive_link" },

        ]
    }
];

// ==========================================
// ВІДОБРАЖЕННЯ КУРСІВ ТА УРОКІВ
// ==========================================

function renderCourseAccordions() {
    const root = document.getElementById("course-accordions");

    if (!root) return;

    root.innerHTML = courseData.map(course => `
    <details class="course-accordion" id="${course.id}">

      <summary>
        <span class="accordion-icon">${course.icon}</span>

        <span class="accordion-title">
          <strong>${course.title}</strong>
          <small>${course.subtitle} · ${course.lessons.length} уроків</small>
        </span>

        <span class="accordion-count">
          ${course.lessons.length} тем
        </span>

        <span class="chevron">⌄</span>
      </summary>

      <div class="lesson-list">

        ${course.lessons.map(lesson => `
          <div class="lesson-row">

            <span class="lesson-number">
              ${String(lesson.number).padStart(2, "0")}
            </span>

            <span class="lesson-name">
              ${lesson.title}
            </span>

            ${lesson.url
            ? `<a class="lesson-link"
                     href="${lesson.url}"
                     target="_blank"
                     rel="noopener noreferrer">
                     Відкрити ↗
                   </a>`
            : `<span class="lesson-link disabled">
                     Матеріали готуються
                   </span>`
        }

          </div>
        `).join("")}

      </div>
    </details>
  `).join("");

    // Відкриття потрібного курсу
    // при переході з головної сторінки

    if (location.hash) {
        const target = document.querySelector(location.hash);

        if (target && target.tagName.toLowerCase() === "details") {
            target.open = true;

            setTimeout(() => {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 100);
        }
    }
}

// ==========================================
// МОБІЛЬНЕ МЕНЮ ТА ІНІЦІАЛІЗАЦІЯ
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // Автоматичне встановлення року
    document.querySelectorAll("#year").forEach(el => {
        el.textContent = new Date().getFullYear();
    });

    // Відображення навчальних курсів
    renderCourseAccordions();

    // Мобільна навігація
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".main-nav");

    if (toggle && nav) {
        toggle.addEventListener("click", () => {

            const opened = nav.classList.toggle("open");

            toggle.setAttribute(
                "aria-expanded",
                String(opened)
            );

        });
    }

});
