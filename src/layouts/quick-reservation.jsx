import DatePicker from "@/components/ui/DatePicker.jsx";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";
import {Button} from "@/components/ui/button.jsx";
import {useTranslation} from "react-i18next";
import {useLanguage} from "@/components/ui/language-provider.jsx";

function QuickReservation() {
    const { language } = useLanguage();
    const {t} = useTranslation();

    return (
        <div className="quick-reservation flex flex-col gap-5 justify-start items-center w-screen h-[30vh]">
            <div className="text-3xl font-bold">{t("home.reservation.title")}</div>
            <div className="container w-[75vw] h-[8vh] flex justify-center shadow-md  rounded-md overflow-hidden">
                <DatePicker locale={language} placeholder={t("home.reservation.checkin")} className="h-[8vh] border-0 bg-white border-r rounded-none" />
                <DatePicker locale={language} placeholder={t("home.reservation.checkout")} className="h-[8vh] border-0 bg-white border-r rounded-none" />
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
    );
}

export default QuickReservation;