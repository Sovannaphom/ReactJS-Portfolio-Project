import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pagHeaderContent";
import ImageOne from "../../images/imag1.png";
import './style.scss'

const protfolioData = [
  {
    id: 2,
    name: "Ecomerce",
    image: ImageOne,
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  return (
    <section id="protfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li key={item.filterId}>{item.label}</li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {
            protfolioData.map((item)=>(
              <div className="portfolio__content__cards__item" key={item.id}>

                <div className="portfolio__content__cards__item__img-wrapper">
                  <a>
                    <img alt="dummy data" src={item.image} />
                  </a>
                </div>

              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
