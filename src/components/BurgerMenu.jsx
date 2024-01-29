import React, { useState, useRef, useEffect } from "react";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    // Обработчик для закрытия меню при клике за его пределами
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // Добавляем обработчик события при монтировании компонента
    document.addEventListener("mousedown", handleClickOutside);

    // Удаляем обработчик события при размонтировании компонента
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger" ref={menuRef}>
      <button onClick={toggleMenu}>X</button>

      <div className={`burger-inner ${isOpen ? "open" : ""}`}>
        <div className="body">
          <button className="burger-inner__item btn heading-h5 heading-h5_600">
            about me
          </button>
          <button className="burger-inner__item btn heading-h5 heading-h5_600">
            skills
          </button>
          <button className="burger-inner__item btn heading-h5 heading-h5_600">
            project
          </button>
          <button className="burger-inner__item btn heading-h5 heading-h5_600">
            contact me
          </button>
        </div>
      </div>
    </div>
  );
}