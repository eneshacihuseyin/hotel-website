import {useTranslation} from "react-i18next";
import Header from "@/layouts/header.jsx";
import QuickReservation from "@/layouts/quick-reservation.jsx";


function Home() {

    const {t, i18n} = useTranslation();
    return (
        <div>
            <Header/>
            <QuickReservation/>
        </div>
    );
}

export default Home;