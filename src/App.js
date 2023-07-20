import Layout from "./Layout";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Experiance from "./sections/Experiance";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import NavBar from "./sections/NavBar";
import Projects from "./sections/Projects";
import SideBar from "./sections/SideBar";
import Skills from "./sections/Skills";
import Settings from "./sections/Settings";
import { SettingContexts } from "./contexts/SettingsContexts";
import { useEffect, useState } from "react";
import { NavActiveContexts } from "./contexts/NavActiveContext";
import { DarkModeContext } from "./contexts/DarkModeContext";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { darkTheme, lightTheme} from './theme';
import { Box, CssBaseline, GlobalStyles } from "@mui/material";
import { ColorContext } from "./contexts/ColorContext";
import { teal } from "@mui/material/colors";
import { LanguageContext } from "./contexts/LanguageContext";
import { useTranslation } from "react-i18next";
import MiniNav from "./sections/NavBar/MiniNav";
import { MiniNavContext } from "./contexts/MiniNavContext";
import NavMneu from "./sections/NavBar/NavMneu";
import Loading from "./sections/Loading";

const palette = {primary : {
  main : teal.A700,
  light : teal[400],
  dark : teal[900],
  contrastText : '#fff'
}}

function App() {

  const [settingOpen, setSettingOpen] = useState(false);
  const [miniNavOpen, setMiniNavOpen] = useState(false);
  const [sectionsY, setSectionsY] = useState('Home');
  const [isDark, setIsDark] = useState(false);
  const [theme, setTheme] = useState(lightTheme);
  const [color, setColor] = useState(palette);
  const [language, setLanguage] = useState('en');
  const [isLoadning, setIsLoading] = useState(true);

  let {i18n} = useTranslation();

  useEffect(()=>{
    let storageDark = localStorage.getItem('MN-Dark');
    let storageClr = localStorage.getItem('MN-Color');
    let storageLang = localStorage.getItem('MN-Lang')

    if(storageDark) setIsDark(JSON.parse(storageDark))
    if(storageClr) setColor(JSON.parse(storageClr))
    if(storageLang) {
      setLanguage(storageLang);
    }
    if(!storageDark && !storageClr && !storageLang) {
      
    }
  },[])

  
  useEffect(()=>{
    setTheme(isDark ? darkTheme : lightTheme);

    setTheme(prev => {
      return createTheme(prev, {
        palette : color
      })
    })
    setTimeout(()=>{setIsLoading(false)},1000)
  },[isDark, color])

  useEffect(()=>{
    i18n.changeLanguage(language);
    setTheme(prev => {
      return createTheme(prev, {
        direction : language === 'ar' ? 'rtl' : 'ltr'
      })
    })
    document.dir = language === 'ar' ? 'rtl' : 'ltr'
    setTimeout(()=>{setIsLoading(false)},1000)

  },[language, i18n])
  
  return (
    <Box
    overflow='visible'
      sx={{
        width : '100vw',
        maxWidth : '100%'
      }}
    >
      <DarkModeContext.Provider value={{isDark, setIsDark}}>
        <ColorContext.Provider value={{color, setColor}}>
          <ThemeProvider theme={theme}>
            <GlobalStyles
              styles={theme => ({
                '*::-webkit-scrollbar': {
                  width: '15px',
                  cursor : 'pointer'
                },
                '.root' : {
                  maxWidth : '100vw'
                },
                '*::-webkit-scrollbar-track': {
                  backgroundColor : theme.palette.background.paper2
                },
                '*::-webkit-scrollbar-thumb': {
                  backgroundColor : theme.palette.primary.light
                },
                '*::-webkit-scrollbar-thumb:hover': {
                  backgroundColor : theme.palette.primary.main
                }
              })}
            />
            <CssBaseline />
            <SettingContexts.Provider value={{settingOpen, setSettingOpen}}>
              <NavActiveContexts.Provider value={{sectionsY, setSectionsY}}>
                <LanguageContext.Provider value={{language, setLanguage}}>
                  <MiniNavContext.Provider value={{miniNavOpen, setMiniNavOpen}}>
                    <Layout sidebar={<SideBar />} navbar={<NavBar />} miniNav={<MiniNav />}>
                      <Loading isLoading={isLoadning} />
                      <Settings />
                      <NavMneu />
                      <Home />
                      <About />
                      <Skills />
                      <Education />
                      <Experiance />
                      <Projects />
                      <Contact />
                      <Footer />
                    </Layout>
                  </MiniNavContext.Provider>
                </LanguageContext.Provider>
              </NavActiveContexts.Provider>
            </SettingContexts.Provider>
          </ThemeProvider>
        </ColorContext.Provider>
      </DarkModeContext.Provider>
    </Box>
  );
}

export default App;
