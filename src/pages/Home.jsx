import {useTranslation} from "react-i18next";
import Header from "@/layouts/header.jsx";
import QuickReservation from "@/layouts/quick-reservation.jsx";
import Rooms from "@/layouts/rooms.jsx";


function Home() {

    return (
        <div className="overflow-x-hidden">
            <Header/>
            <QuickReservation/>
            <Rooms/>
        </div>
    );
}

export default Home;