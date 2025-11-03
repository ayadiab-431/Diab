import { useEffect } from 'react';
import MainSection from '../../Components/MainSection/MainSection.jsx';
import FurnitureSection from '../../Components/FurnituresSection/FurnituresSection.jsx';
import PageTitle from '../../Components/Common/PageTitle.jsx';
export default function Home(){

    // Change Page Name
    useEffect(()=> {
        document.title = 'دياب | الصفحة الرئيسية';
    },[])

    return (
        <div className="home">
            <PageTitle title='دياب | الصفحة الرئيسية'/>
            <MainSection paddingTop={"75px"}/>
            <FurnitureSection limit={6} headerAddress='نماذج من أعمالنا'/>
        </div>
    );
}
