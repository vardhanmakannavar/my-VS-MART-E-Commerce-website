
import { Fragment, useEffect } from "react";
import { Box, styled } from "@mui/material"; 
import { useDispatch, useSelector } from 'react-redux';




//components
import NavBar from "./navbar";  
import Banner from "./banner";  
import Slide from "./slide";
import Midslide from "./Midslide";
import MiddleSection from "./MiddleSection";

import { getProducts } from "../../redux/actions/productActions";



const Component = styled(Box)`
    background: #654321;
    padding: 10px 10px;
`


const Home = () => {

    const { products } = useSelector(state => state.getProducts);
    console.log(products); 

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return(
        <Fragment>
             <NavBar />   
             <Component>
                <Banner />  
                <Midslide products={products} title="Deal for the Day" timer={true}/>
                <MiddleSection />
                <Slide products={products} title="Top Selections" timer={false}/>
                <Slide products={products} title="Recommended Items" timer={false}/>
                <Slide products={products} title="Trinding Offers" timer={false}/>
                <Slide products={products} title="Home Appliances" timer={false}/>
                <Slide products={products} title="Best Value Fashion" timer={false}/>
                <Slide products={products} title="Top Deals" timer={false}/>
             </Component> 
        </Fragment >
       
    )
}


export default Home;