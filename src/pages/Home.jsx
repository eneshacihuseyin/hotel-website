import { Button } from "@/components/ui/button"
import DatePicker from "@/components/ui/DatePicker.jsx";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import Header from "@/layouts/header.jsx";

function Home() {

    const {t} = useTranslation();
    const [selectedLn,setSelectedLn] = useState(localStorage.getItem("language"))

    const handleSelectedLng = (lng) => {
        setSelectedLn(lng)
    }

    return (
        <div className="overflow-x-hidden">
            <Header sendDataToParent={handleSelectedLng} />
            <div className="quick-reservation flex flex-col gap-10 justify-center items-center w-screen h-[40vh]">
                <div className="text-3xl font-bold">{t("home.reservation.title")}</div>
                <div className="container w-[75vw] h-[7vh] flex justify-center shadow-md rounded-md">
                    <DatePicker locale={selectedLn} placeholder={t("home.reservation.checkin")} className="h-[7vh] border-0 bg-white border-r rounded-none" />
                    <DatePicker locale={selectedLn} placeholder={t("home.reservation.checkout")} className="h-[7vh] border-0 bg-white border-r rounded-none" />
                    <Select>
                        <SelectTrigger className="w-[15vw] hover:bg-accent hover:text-foreground! h-full border-0 border-r bg-white rounded-none">
                            <SelectValue placeholder={t("home.reservation.adults")} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="1">1</SelectItem>
                                <SelectItem value="2">2</SelectItem>
                                <SelectItem value="3">3</SelectItem>
                                <SelectItem value="4">4</SelectItem>
                                <SelectItem value="5">5</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="w-[15vw] hover:bg-accent hover:text-foreground! h-full border-0 border-r bg-white rounded-none">
                            <SelectValue placeholder={t("home.reservation.kids")} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="1">1</SelectItem>
                                <SelectItem value="2">2</SelectItem>
                                <SelectItem value="3">3</SelectItem>
                                <SelectItem value="4">4</SelectItem>
                                <SelectItem value="5">5</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Button className="w-[15vw] h-full rounded-none">{t("home.reservation.button")}</Button>
                </div>
            </div>
        </div>
    );
}

export default Home;