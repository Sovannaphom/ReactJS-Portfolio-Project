import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pagHeaderContent";
import ImageOne from "../../images/imag1.png";
import "./style.scss";

const protfolioData = [
  {
    id: 2,
    name: "Ecomerce",
    image: ImageOne,
    link: "",
  },
  {
    id: 3,
    name: "Ecomerce",
    image: ImageOne,
    link: "",
  },
  {
    id: 3,
    name: "Ecomerce",
    image: ImageOne,
    link: "",
  },
  {
    id: 3,
    name: "Ecomerce",
    image: ImageOne,
    link: "",
  },
  {
    id: 3,
    name: "Ecomerce",
    image: ImageOne,
    link: "",
  },
  {
    id: 3,
    name: "Ecomerce",
    image: ImageOne,
    link: "",
  },
  {
    id: 3,
    name: "Ecomerce",
    image: ImageOne,
    link: "",
  },
  {
    id: 3,
    name: "Ecomerce",
    image: ImageOne,
    link: "",
  },
  {
    id: 3,
    name: "Ecomerce",
    image: ImageOne,
    link: "",
  },
  {
    id: 3,
    name: "Ecomerce",
    image: ImageOne,
    link: "",
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
  const [filterValue, setFilterValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilterValue(currentId);
  }

  function handleHover(indext) {
    setHoveredValue(indext);
  }

  console.log("=============");
  console.log(handleHover);
  console.log("=============");

  const filterItems =
    filterValue === 1
      ? protfolioData
      : protfolioData.filter((item) => item.id === filterValue);

  console.log(filterItems);

  return (
    <section id="protfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filterValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filterItems.map((item, indext) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(indext)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {indext === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
