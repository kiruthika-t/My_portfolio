import React, {useState, useEffect}from 'react';

            
import Main from '../components/ProjectMainComponent';



var drawer = false;
//var toggle = theme ? localStorage.getItem('theme') : false;

function Project(){

    const [DrawerSlide, setDrawerSlide] = useState("DrawerHiddenInitial")
    const [DrawerBG, setDrawerBG] = useState("DrawerBGHidden");
    const [toggle, setToggle] = useState(false);
    const [navBar, setNavBar] = useState("NavBar");

    function DrawerManager(){
        if (drawer){
            if (localStorage.getItem('Theme')==="true"){
                drawer=false;
                setDrawerSlide("DrawerHidden-Dark");
                setDrawerBG("DrawerBGHidden");
            }
            else{
                drawer=false;
                setDrawerSlide("DrawerHidden");
                setDrawerBG("DrawerBGHidden");
            }
        }
        else{
            if (localStorage.getItem('Theme')==="true"){
            drawer=true;
            setDrawerSlide("Drawer-Dark");
            setDrawerBG("DrawerBG");
        }
        else{
            drawer=true;
            setDrawerSlide("Drawer");
            setDrawerBG("DrawerBG");
        }
        }
    }
    useEffect(()=>{if (localStorage.getItem('Theme')==="true"){
            setToggle(true);
            setNavBar("NavBar-Dark");
    }},[]);
    function ModeManager(){
        if (localStorage.getItem('Theme')==="true"){
            setToggle(false);
            localStorage.setItem('Theme', 'false')
            document.body.classList.remove('body');
            setNavBar("NavBar");
            drawer=false;
            setDrawerSlide("DrawerHidden");
            setDrawerBG("DrawerBGHidden");
        }
        else{
            localStorage.setItem('Theme', 'true');
            document.body.classList.add('body');
            setNavBar("NavBar-Dark");
            setToggle(true);
            drawer=false;
            setDrawerSlide("DrawerHidden-Dark");
            setDrawerBG("DrawerBGHidden");
        }
    }
    
    function Drawer(){
        return(
            <div className={DrawerBG}>
                <div className={DrawerBG} onClick={DrawerManager}>
                </div>
                <div className={DrawerSlide}>
                    {'\n\n\n\n'} 
                    <a href= "/" >About </a>{'\n\n'}
                    <a href="/technology"  >Technology </a>{'\n\n'}
                    <a href = "/projects" style={{color: "#FF5555"}} >Projects </a>{'\n\n'}
                    
                    <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1r5u4l5hZ46ztIEb-dNgKoBdMGu9BkCgR/view?usp=sharing">Resume</a>
                    {'\n\n'}<hr style={{width: "80%", margin: "auto", opacity: "0.2"}} />{'\n'}
                    <a target = "_blank" rel="noreferrer" href = "mailto:kaviyagopi11@gmail.com"  >E-mail </a>{'\n\n'}
                    <a target = "_blank" rel="noreferrer" href = "https://www.linkedin.com/in/kaviya-gopi"  >LinkedIn </a>{'\n\n'}
                    <a target = "_blank" rel="noreferrer" href = "https://discord.com/users/777906489498271765"  >Discord </a>{'\n\n'}
                    <a target = "_blank" rel="noreferrer" href = "https://t.me/"  >Twitter </a>{'\n'}
                    {'\n'}<b>Dark Mode:</b><div class="toggleWrapper">
                    <input type="checkbox" name="toggle2" checked={toggle} onClick={ModeManager} class="mobileToggle" id="toggle2" />
                    <label for="toggle2"></label>
                    </div>
                </div>
            </div>
        );
    }

    return(
        <div>
            <Drawer />

            <section id={navBar}>
                <div id="NavBar__Left__Part">
                    <label for="check">
                        <input type="checkbox" checked={drawer} id="check" onClick={DrawerManager}/> 
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                <div id="NavBar__Right__Part">
                    <span id="linkedin">
                        <a rel="noreferrer" href="https://www.linkedin.com/in/kaviya-gopi" target="_blank"> <img src="https://icons.getbootstrap.com/assets/icons/linkedin.svg" alt="" height = "25px" srcset="" /></a>
                    </span>
                    <span id="Github">
                        <a rel="noreferrer" href="https://github.com/KaviyaGopi" target="_blank"> <img src="https://icons.getbootstrap.com/assets/icons/github.svg" alt=""  height = "29px" srcset="" /></a>
                    </span>
                </div>
            </section>
            <section style={{height:"128px"}}>
            </section>
            <h2 style={{color: "#ee5253"}}>Projects</h2>{'\n\n'}
            <Main />
            <p>You can find all my work on my <a href="https://github.com/KaviyaGopi" target="_blank" style={{color: "#ee5454"}}rel="noopener noreferrer">
                GitHub</a></p>
                {'\n\n\n'}
            <i style={{opacity: 0.3}}>
                Last Modified on: 26-03-2025
            </i>
        </div>
    )
}

export default Project;