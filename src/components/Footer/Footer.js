import React from "react";
import logoIcon from "../../assets/images/logo.svg";
import "./style.css";

export const Footer = () => {
  const footeritems = [
    {
      title: "Для клиента",
      subTitle: [
        "Как купить",
        "Кредит",
        "Доставка и оплата",
        "Политика конфиденциальности",
        "Вопросы и ответы (F.A.Q.)",
        "Сервис и гарантия",
      ],
    },
    {
      title: "О магазине",
      subTitle: [
        "Отзывы",
        "Наши преимущества",
        "История компании",
        "Сотрудничество",
        "Партнёрская программа",
        "Вакансии",
      ],
    },
    {
      title: "Сотрудничество",
      subTitle: ["Оптом", "Дропшиппинг"],
    },
  ];
  const renderedItems = footeritems.map((item) => (
    <div key={item.title} className='footer__item'>
      <p className='footer__title'>{item.title}</p>
      {item.subTitle.map((subtitle) => (
        <p key={subtitle} className='footer__subtitle'>
          {subtitle}
        </p>
      ))}
    </div>
  ));

  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer__content'>
          <div className='footer__item'>
            <img className='footer__logo' src={logoIcon} />
            <p className='footer__phone'>+7 (958) 111-95-03</p>
            <p className='footer__phone'>+7 (812) 660-50-54</p>
            <p className='footer__date'>Пн-вс: с 10:00 до 21:00</p>
            <p className='footer__description'>
              Проспект Стачек 67 к.5 <br /> Лиговский проспект 205 <br />
              Гражданский проспект, 116 к.5
            </p>
          </div>
          {renderedItems}
        </div>
      </div>
    </div>
  );
};
