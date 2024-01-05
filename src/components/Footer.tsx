import React from "react";
import { ReactComponent as Image } from "../assets/icons/footer_logo.svg";
import { ReactComponent as AppStore } from "../assets/icons/app_store.svg";
import { ReactComponent as GooglePay } from "../assets/icons/google_play.svg";
import { ReactComponent as Whatsapp } from "../assets/icons/whatsapp.svg";
import { ReactComponent as Instagram } from "../assets/icons/instagram.svg";
import { ReactComponent as FaceBook } from "../assets/icons/facebook.svg";
import PaddingXContainer from "./UI/PaddingXContainer";

export const Footer = () => {
  return (
    <div className="w-full mt-4 md:mt-16 bg-[#0063a9] from-blue-600 to-blue-900">
      <PaddingXContainer>
        <div className=" py-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col gap-4 md:w-1/4">
              <Image className="w-64 h-16" />
              <p className="md:w-64 text-white text-base font-normal">
                Первый отечественный бренд Iskender на рынке сантехники от
                компании ОсОО «Стройдом.кг»
              </p>
              <div className="flex gap-4 mt-2 md:mt-4">
                <AppStore />
                <div className="bg-black rounded-lg w-fit  px-2 flex items-center justify-center">
                  <GooglePay />
                </div>
              </div>
            </div>
            <div className="md:w-1/4 mt-4 md:mt-0">
              <p className="text-white text-2xl font-bold">Адреса</p>
              <div className="flex flex-col text-white mt-2 md:mt-4">
                <p>ЭлитСтрой</p>
                <span>ул. Ден-Сяопина 18/1</span>
                <p>Баткен</p>
                <span>ул. Льва-Толстого 19</span>
                <p>ТааТан</p>
                <span>ул. Лермонтова 6</span>
              </div>
            </div>
            <div className="md:w-1/4 mt-4 md:mt-0">
              <p className="text-white text-2xl font-bold">Компания</p>
              <div className="flex flex-col text-white mt-2 md:mt-4">
                <p>Каталог</p>
                <p>Избранное</p>
                <p>Личный кабинет</p>
              </div>
            </div>
            <div className="md:w-1/4 mt-4 md:mt-6">
              <p className="text-white text-2xl font-bold">Контакты</p>
              <div className="flex flex-col text-white mt-2 md:mt-4">
                <span>Email:</span>
                <p>iskender.kg@gmail.com</p>
                <span>Телефон:</span>
                <p>+996 (500) 000-104</p>
                <p>+996 (997) 000-104</p>
                <p>+996 (222) 000-104</p>
                <div className="bg-light rounded-2xl p-2 mt-2 w-fit flex items-center gap-4">
                  <Whatsapp className="cursor-pointer w-6 h-6" />
                  <p className="text-lg text-green">WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 flex items-center justify-between mt-6 pt-4">
            <p className="text-gray-500 text-sm font-medium">
              &copy; 2023 Iskender.kg - Отечественный бренд сантехники
            </p>
            <div className="flex gap-4">
              <Instagram className="cursor-pointer" />
              <FaceBook className="cursor-pointer" />
            </div>
          </div>
        </div>
      </PaddingXContainer>
    </div>
  );
};
