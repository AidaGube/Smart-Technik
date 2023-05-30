import React from "react";
import "./style.css";

export const AboutUs = () => {
  return (
    <div className='about'>
      <div className='container'>
        <h1 className='about__title'>О нас</h1>
        <div className='about__content'>
          <p className='about__text'>
            Официальный представитель производителей эксклюзивного
            электротранспорта и Смарт-Техники, Созданная в 2015 году компания
            Смарт-Техника стала одним из первых дистрибьютеров персонального
            электротранспорта в России и уже более трёх лет является официальным
            представителем таких производителей эксклюзивного электронного
            транспорта, как{" "}
            <span className='bold'> Yamato, SmartONE, HALTEN и Kugoo</span>
          </p>
          <div className='about__content-item'>
            <h3 className='item__title'>
              Постоянно растущая и развивающаяся Компания
            </h3>
            <p className='about__text'>
              На сегодняшней день Компания Смарт-Техника обладает собственным
              розничным магазинами в г. Санкт-Петербурге, официальными
              представительствами в различных районах г. СПб и Ленобласти, сетью
              складов в Петербурге, Москве и других крупных городах России.
              Мы постоянно растём и развиваемся. Доставка наших товаров
              осуществляется во все регионы Страны!
            </p>
          </div>
          <div className='about__content-item'>
            <h3 className='item__title'>
              Самый большой выбор персонального электротранспорта
            </h3>
            <p className='about__text'>
              Самый большой выбор персонального электротранспорта представлен
              в выставочных залах Смарт-Техника по адресам:
            </p>
            <ul className='adress__list'>
              <li className='adress__item'>ул. Ленсовета 81;</li>
              <li className='adress__item'>ул. Дыбенко 23к1;</li>
              <li className='adress__item'>пр. Энгельса 113 к 2.</li>
            </ul>
            <p className='about__text'>
              Расширение ассортимента происходит стабильно раз в полгода,
              и вы всегда найдёте у нас самые эксклюзивные модели электронного
              транспорта нового поколения!
            </p>
          </div>
        </div>
      </div>
      <div className='moreselected'>
        <div className='container'>
          <h3 className='item__title'>Всегда в наличии большой выбор:</h3>
          <div className='moreselected__content'>
            <div className='moreselected__content-item'>
              <img />
              <div className='moreselected__item-text'>гироскутеров</div>
            </div>
            <div className='moreselected__content-item'>
              <img />
              <div className='moreselected__item-text'>
                сигвеев и мини сигвеев
              </div>
            </div>
            <div className='moreselected__content-item'>
              <img />
              <div className='moreselected__item-text'>
                электросамокатов, стандартных и полноприводных
              </div>
            </div>
            <div className='moreselected__content-item'>
              <img />
              <div className='moreselected__item-text'>электроскейтов</div>
            </div>
            <div className='moreselected__content-item'>
              <img />
              <div className='moreselected__item-text'>электровелосипедов</div>
            </div>
            <div className='moreselected__content-item'>
              <img />
              <div className='moreselected__item-text'>и многое другое</div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='about__content-item'>
          <h3 className='item__title'>
            Опытный и высококвалифицированный персонал
          </h3>
          <p className='about__text'>
            В компании работают опытные высококвалифицированные сотрудники,
            всегда готовые помочь вам с выбором персонального транспортного
            средства, ответить на все возможные вопросы и научить кататься
            на выбранной вами модели
          </p>
        </div>
        <div className='about__content-item'>
          <h3 className='item__title'>Возможность тест драйва</h3>
          <p className='about__text'>
            Благодаря месторасположению и инфраструктуре, прилегающей
            к магазинам территорий, наши посетители могут перед оформлением
            покупки пройти тест-драйв на любом из представленных в зале
            транспортных средств. Для тест-драйва крупной техники необходима
            предварительная запись. Её можно осуществить по телефону:
            +7 (812) 509-23-43
            <span className='bold'>или через консультанта в магазине.</span>
          </p>
        </div>
        <div className='about__content-item'>
          <h3 className='item__title'>
            Цель и миссия компании Смарт-Техника.рф
          </h3>
          <p className='about__text'>
            <span className='bold'>Цель компании Смарт Техника</span> —
            в 2020 году стать самым крупным магазином по продаже персонального
            электротранспорта в Санкт-Петербурге. А также открывать свои филиалы
            во всех крупных городах России, что происходит уже сейчас.
          </p>
          <p className='about__text'>
            <span className='bold'>Миссия компании Смарт Техника</span> —
            познакомить россиян с экологически чистыми видами транспорта
            и улучшить экологию Страны! Мы надеемся не просто привить нашей
            нации любовь к ЭКО-транспорту, а создать в стране новую культуру
            передвижения.
          </p>
        </div>
        <h2 className='about__footer-text'>
          Мы всегда рады взаимовыгодному сотрудничеству. Свои предложения
          отправляйте smartfamily.info@yandex.ru
        </h2>
      </div>
    </div>
  );
};
