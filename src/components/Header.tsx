import React from "react";
import PaddingXContainer from "./UI/PaddingXContainer";
import logo from "../assets/icons/logo.svg";
import burger from "../assets/icons/burger.svg";
import search from "../assets/icons/search.svg";
import profile from "../assets/icons/profile.svg";
import busket from "../assets/icons/busket.svg";

const Header = () => {
  return (
    <header className="w-full py-3 bg-bg_blue">
      <PaddingXContainer>
        <div className="flex items-center gap-2 w-full justify-between">
          <img className="mr-4" src={logo} alt="logo" />
          <nav className="flex items-center lg:w-[100%] sm:w-[70%] lg:justify-between justify-end">
            <div className="flex items-center justify-between w-full ">
              <div className="lg:block hidden">
                <div className="flex items-center rounded-xl px-5 py-2 gap-3 bg-menu_blue">
                  <img src={burger} alt="burger" />
                  <span className="text-light">Каталог</span>
                </div>
              </div>
              <div className="sm:block hidden">
                <div className="flex items-center sm:w-96 w-72 justify-between  bg-white py-2 rounded-2xl px-4">
                  <div className="flex items-center">
                    <img src={search} alt="search" />
                    <input
                      className="ml-4 focus:outline-none"
                      placeholder="Поиск"
                    />
                  </div>
                  <p className="text-dark_gray">42903</p>
                </div>
              </div>
              <div className="lg:block hidden">
                <div className="flex items-center gap-6">
                  <div className="flex flex-col">
                    <p className="text-light text-sm">Добро пожаловать</p>
                    <h3 className="text-light">Вход/Регистрация</h3>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="bg-light p-2 rounded-full">
                      <img src={profile} alt="profile" />
                    </div>
                    <div className="border-r h-6 border-solid"></div>
                    <div className="bg-light p-2 rounded-full ">
                      <img src={busket} alt="busket" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="block lg:hidden">
                <div className="flex ml-2 items-center rounded-sm px-3 py-3 gap-3 bg-menu_blue">
                  <img src={burger} alt="burger" />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </PaddingXContainer>
    </header>
  );
};

export default Header;
