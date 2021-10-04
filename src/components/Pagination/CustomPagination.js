import React from 'react'
import Pagination from '@material-ui/lab/Pagination'
import { createMuiTheme } from '@material-ui/core';
import { dark } from '@material-ui/core/styles/createPalette';
import { ThemeProvider } from '@material-ui/styles';
const darkTheme = createMuiTheme(
    {
        palette:{
            type:'dark',
            
        }
    }
)

const CustomPagination = ({setPage,numOfPages = 10}) => {
const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0,0);
};

    return (
        <div 
        style={{
            width:"100%",
            display:"flex",
            justifyContent:"center",
            marginTop:10,
        }}
        >
           <ThemeProvider theme={darkTheme}>
               
           <Pagination
            count={numOfPages}
            onChange={(e)=> handlePageChange(e.target.textContent)}
            color="primary"
            />
            </ThemeProvider> 
            
        </div>
    )
}

export default CustomPagination
