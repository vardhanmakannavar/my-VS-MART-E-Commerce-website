import { useState, useEffect } from "react";
import { InputBase, Box, styled, ListItem, List } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


import { getProducts } from '../../redux/actions/productActions';


const SearchContaner = styled(Box)`
background: #ffffff;
margin-left: 20px;
border-radius: 5px;
width: 35%;
display: flex;
`;

const InputSearchBase = styled(InputBase)`
width: 100%;
padding-left: 20px;
font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
color: black;
padding: 6px;
display: flex;

`;

const ListWrapper = styled(List)`
    position: absolute;
    background: #ffffff;
    color: #000;
    margin-top: 36px;
`



const Search = () => {

    const [text, setText] = useState('')

    const { products } = useSelector(state => state.getProducts);
    console.log(products);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getProducts())
    }, [dispatch])

    const getText = (text) => {
            setText(text);
    }
    return (
        <SearchContaner>                                                                     {/*Box */}
               <InputSearchBase placeholder="Search Here for Brand, Products ....... " 
               onChange={(e) => getText(e.target.value)}                                
               value={text} />                                                              {/* InputBase */} 
               <SearchIconWrapper>                                                           {/*Box */}
                    <SearchIcon />
               </SearchIconWrapper>
               {
                  text &&
                     <ListWrapper>
                        {
                            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                
                                <ListItem>
                                    <Link to = {`/product/${product.id}`} onClick = {() => setText('')}
                                      style={{ textDecoration: 'none', color: 'inherit'}} >
                                        {product.title.longTitle}
                                    </Link>
                                </ListItem>
                            ))
                        }
                     </ListWrapper>
               }
        </SearchContaner>
        
    ) 
}

export default Search;