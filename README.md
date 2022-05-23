# Отчет по проекту "Электронная очередь"
Автор: Николин Василий

# Прогресс:
1 неделя(22.02 - 01.03)/ Создание репозитория. Описание тех. задания, идеи и функционала проекта.
2 и 3 неделя(1.03 - 15.03)/ Правки в Readme. Понимание важности тз и начало разработки.

...to be continued

# 1. Цель проекта:
Цель: разработать универсальную, удобную систему электронной очереди.

# 2. План функционала системы: 
 1. Регистрация и авторизация.
 2. Страница "добавления" своей организации // Администратор.
 3. Страница "добавления" виртуальной очереди // Администратор.
 4. Отслеживание своей очереди // Администратор/Работник.
 5. Форма бронирования очереди // Клиент.
 6. Страница забронированных мест в очередях // Клиент.
 7. Страница поиска организаций // Клиент.

# 3. Подробное описание функционала системы:
## 3.1 Типы пользователей:
В данной "экосистеме" будут присутствовать 3 типа пользователей: 
* Клиент - человек, который хочет забронировать место в n-ой очереди.
* Администратор - человек, отвечающий за создание, отслеживание очереди n-организации.
* Работник - человек, имеющий доступ к отслеживанию очереди в свой "кабинет"(условно понятный пример).

## 3.2 Регистрация/Авторизация:
Регистрация имеет 3 вида:  
Регистрация клиента:
* ФИО
* Дата рождения
* Номер телефона
* Пароль

Регисрация Администратора:  
* ФИО
* Дата рождения
* Номер телефона
* Название организации, которую представляет администратор
* Пароль

Регистрация Работника:  
* ФИО
* Дата рождения
* Номер телефона
* Название организации, в которой он работает
* Рабочие дни и часы 
* Пароль

Аунтификация сама определяет какой тип клиента входит на сайт.
 
## 3.3 Кратко про возможности:
* Администратор имеет возможность создать новую организацию на сайте, которая будет содержать внутри себя список очередей данной организации, для различных нужд. Также, он может добавлять людей, которые будут создавать очереди в свой "кабинет"(опять же условно).
* Работник может добавлять очередь внутри организации, в которой он работает.
* Клиент может бронировать очередь, отслеживать все завбронированные очереди.
 
## 3.4 Аутентификация пользователей:
Аутентификация пользователей осуществляется по логину и паролю введенному при регистрации учетной записи.

# 4. Страницы сайта:

## 4.1 Главная страница:
 На главной странице сайта будут присутствовать следующие компоненты:
  1. Поиск по компаниям, которые создали электронные очереди для своих кабинетов на сайте.
  2. Список всех компаний предоставляющих доступ к электронной очереди.
 
 При клике на обьект компании вы попадаете на страницу данной компании.
 
## 4.2 Страница компании:
 На странице любой компании будет присутствовать краткое описание компании: ее владелец, номера телефонов поддержки и т.д. Также будет сприсуттсвовать поиск по кабинетам, и список всех кабинетов данной компании.
 
 При нажатии на определенный кабинет будет открываться страница кабинета.
 
 Если человек зарегистрирован, как администратор, то у него будет присутствовать кнопка добалвения кабинета в организации. 
 
## 4.3 Страница кабинета:
 На странице кабинета будет представленно описание: ФИО человека/людей сидящего/сидящих в этом кабинете. Кнопка записи, которая при нажатии будет открывать модалку с возможностью выбора времени и даты.

## 4.4 Header всех страниц:
 На всех страницах будет присутствовать header с кнопками перехода на: главную страницу, профиль клиента(если пользователь зарегистрирован и авторизирован), регистрацию или авторизацию(если пользователь не зашел в систему или не зарегистрирован).
 
## 4.5 Если пользователь не зарегистрирован или не авторизирован:
 Если пользователь не авторизирован или не зарегистрирован, то при нажатии на организацию будет открываться модалка с предложением войти или зарегистрироваться.
 
## 4.6 Страница профиля: 
 На странице профиля будет представленны данные заполненные при регистрации пользователем, аватар(если загружен). Также будет представлен сортированный по датам список отображающий все очереди, в которых учавствует человек(если он зарегистрирован, как клиент) или  сортированный список всех зарегистрированных в очереди людей.
 Если человек зарегистрирован, как администратор, ему будет представлен список всех зарегистрированных им копаний и кнопка добавить компанию.
 
## 4.7 Открытие сайта: 
 По умолчанию при открытии сайта человек попадает на главную страницу сайта, человек не будет авторизирован.

# 5. Было бы здорово:
* Организовать рейтинговую систему пользователей//организаций, за то, что человек не пришел в назначенное время рейтинг понижается, за то что пришел вовремя повышается. У организацией же за задержку клиентов понижается рейтинг, а за четкую работу по времени повышается. Так можно было бы предоставить пользователю возможность отслеживать релевантность организации.
* Ввести оплату данной услуги, огранизации платят n-ую сумму, а пользователи просто подписываются на сервис.
* Возможность перехода с одного типа пользователя на другого. Будет удобно для администратора и работника, который тоже может нуждаться в бронировании очереди.
 
# 6. Предполагаемый стек технологий:
 Фронтенд:
 * Angular
 * Typescript
 * HTML
 * SCSS 
 
 Бэкенд:
 * Express
 * Node.js
 * MongoDB
 
 Дизайн:
 * Figma
 * Illustartor
