import * as React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TrendingIcon from "@material-ui/icons/Whatshot";
import MovieIcon from "@material-ui/icons/Movie";
import TvIcon  from "@material-ui/icons/Tv";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useHistory } from "react-router";
const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "flexed",
    bottom: 0,
    backgroundColor: "#2d313a",
  },
});

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const history = useHistory();
    useEffect(() => {
      if(value ===0) history.push("/");
      else if(value ===1) history.push("/movies");
      else if(value ===2) history.push("/series");
      else if(value ===3) history.push("/search"); 
    }, [value, history])

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className= {classes.root}
    >
      <BottomNavigationAction
        style={{color:'white'}}
       label="Trending" icon={<TrendingIcon />} />
      <BottomNavigationAction 
      style={{color:'white'}}
      label="Movies" icon={<MovieIcon />} />
      <BottomNavigationAction 
        style={{color:'white'}}
      label="TV Series" icon={<TvIcon />} />
      <BottomNavigationAction 
        style={{color:'white'}}
      label="Search" icon={<SearchIcon />} />

      </BottomNavigation>

  );
}
