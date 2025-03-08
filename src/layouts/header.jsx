import React, {useEffect, useState} from 'react';
import {Button} from "@/components/ui/button.jsx";
import ModeToggle from "@/components/ui/mode-toggle.jsx";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu.jsx";
import {IoEarthOutline} from "react-icons/io5";
import {useTranslation} from "react-i18next";
import {TbAirConditioning, TbParking, TbSwimming, TbToolsKitchen2, TbWifi} from "react-icons/tb";
import {FaBath, FaBed, FaChild} from "react-icons/fa";
import {useLanguage} from "@/components/ui/language-provider.jsx";

function Header() {

    const {language, setLanguage} = useLanguage()
    const { t, i18n } = useTranslation();
    const [opacity, setOpacity] = useState("opacity-0")

    useEffect(() => {
        setTimeout(()=> setOpacity(""),500)
    })

    const features = [
        {
            nameEn: "Breakfast",
            nameTr:"Kahvaltı",
            icon: <TbToolsKitchen2 size={24}/>
        },
        {
            nameEn: "Wifi",
            nameTr:"Wifi",
            icon: <TbWifi size={24}/>
        },
        {
            nameEn:"AC",
            nameTr:"Klima",
            icon: <TbAirConditioning size={24}/>
        },
        {
            nameEn: "Turkish Bath",
            nameTr:"Hamam",
            icon: <FaBath size={24}/>
        },
        {
            nameEn:"Playground",
            nameTr:"Oyun Parkı",
            icon:<FaChild size={24}/>
        },
        {
            nameEn: "Free Parking Lot",
            nameTr:"Ücretsiz Otopark",
            icon: <TbParking size={24}/>
        },
        {
            nameEn: "Swimming",
            nameTr:"Yüzme Havuzu",
            icon: <TbSwimming size={24}/>
        },
        {
            nameEn:"Cozy Rooms",
            nameTr:"Rahat Odalar",
            icon: <FaBed size={24}/>
        }
    ]

    return (
        <div className="header w-screen relative flex justify-center mt-[10vh] select-none mb-[15vh]">
            <div className={`links z-[100] transition-all bg-background duration-200 fixed top-0 left-[5vw] w-[90vw] h-[10vh] flex justify-between items-center`}>
                <div className="left">
                    <div className="logo h-full text-[2rem] items-center flex ml-[1vw]">
                        Ulugut Hotel
                    </div>
                </div>
                <div className="right flex gap-32">
                    <div className="h-full flex items-center gap-8">
                        <div>
                            <Button variant="link" className={` bg-transparent! text-lg`}>{t("home.header.links.home")}</Button>
                        </div>
                        <div>
                            <Button variant="link" className={` bg-transparent! text-lg`}>{t("home.header.links.about")}</Button>
                        </div>
                        <div>
                            <Button variant="link" className={` bg-transparent! text-lg`}>{t("home.header.links.contact")}</Button>
                        </div>
                    </div>
                    <div className="settings flex gap-3">
                        <ModeToggle className={``}/>
                        <DropdownMenu className="language">
                            <DropdownMenuTrigger className="flex items-center gap-2  mr-[1vw] cursor-pointer">
                                <IoEarthOutline size={24} className=""/>
                                <div className="text-lg">{language === "en" ? "EN" : "TR"}</div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem className="p-0">
                                    <Button
                                        variant="ghost"
                                        className="w-full flex justify-start text-[16px] cursor-pointer"
                                        onClick={() => {
                                            setLanguage("en")
                                            localStorage.setItem("language","en")
                                            i18n.changeLanguage("en")
                                        }}>
                                        {t("home.header.links.changeLn.en")}
                                    </Button>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="p-0">
                                    <Button
                                        variant="ghost"
                                        className="w-full flex justify-start text-[16px] cursor-pointer"
                                        onClick={() => {
                                            setLanguage("tr")
                                            localStorage.setItem("language","tr")
                                            i18n.changeLanguage("tr")
                                        }}>
                                        {t("home.header.links.changeLn.tr")}
                                    </Button>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                </div>

            </div>
            <div className="hero bg-[url(images/9.jpg)] bg-no-repeat bg-cover bg-center w-[90vw] h-[75vh] relative rounded-2xl">
                <div className="filter absolute top-0 left-0 w-full h-full rounded-2xl"
                     style={{
                         background: "linear-gradient(90deg, rgba(99,108,175,1) 30%, rgba(99,108,175,0.67) 40%, rgba(99,108,175,0.33) 60%, rgba(99,108,175,0)70%)"
                     }}></div>
                <div className={`slogan w-[42vw] duration-2000 z-10 relative mt-[20vh] ml-[5vw] text-background opa justify-between ${opacity}` }>
                    <div className="text-[3.2rem] font-[500]  flex-[2] ml-[2vw] mt-[1vh] mb-[4vh] leading-tight">
                        {t("home.header.slogan")}
                    </div>
                </div>
                <div className="features bg-white w-[80vw] h-[20vh] absolute flex flex-row gap-[2vw] items-center bottom-[-6vh] px-[2vw] py-[1vh] rounded-2xl shadow-xl border border-[rgba(99,108,175,.5)] left-[5vw]">
                    <div className="title h-full text-center mt-[8vh] flex-1 text-[1.5rem] font-[500] mb-[1vh]">
                        {t("home.header.features.title")}
                    </div>
                    <div className="grid grid-cols-4 flex-[3] w-full h-full justify-between items-center">
                        {
                            features.map((feature,index) => (
                                <div className="feature w-[10vw] flex items-center flex-row gap-2" key={index}>
                                    <div className="icon p-3 rounded-2xl shadow-lg border text-cyan-700 border-[rgba(120,129,196,.3)]">
                                        {feature.icon}
                                    </div>
                                    <div className="text font-[500]">
                                        {language === "en" ? feature.nameEn : feature.nameTr}
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;