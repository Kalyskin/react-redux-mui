import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/home/home";

const useStyles = makeStyles((theme) => {
  //console.log(theme);
  return {
    root: {
      display: "flex",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  };
});

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Sidebar />
      <main className={classes.content}>
        <Toolbar />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </main>
    </div>
  );
}
