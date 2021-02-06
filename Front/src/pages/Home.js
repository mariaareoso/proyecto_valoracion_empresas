import Navigation from "../components/home/Navigation";
import TextLeft from "../components/home/TextLeft";
import TextRight from "../components/home/TextRight";
import SearchHookForm from "../components/buscador/SearchHookForm";
import Footer from "../components/home/Footer";

function Home() {
    return (
        <>
            <Navigation></Navigation>
            <SearchHookForm></SearchHookForm>
            <TextRight></TextRight>
            <TextLeft></TextLeft>
            <TextRight></TextRight>
            <TextLeft></TextLeft>
            <Footer></Footer>
        </>
    )
}

export default Home