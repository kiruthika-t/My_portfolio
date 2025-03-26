import React, {useState, useEffect}from 'react';

var drawer = false;


function About(){
    
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
                    <a href="/" style={{color: "#FF5555"}}>About </a>{'\n\n'}
                    <a href = "/technology" >Technology </a>{'\n\n'}
                    <a href = "/projects" >Projects </a>{'\n\n'}
                    
                    <a target="_blank" href="https://drive.google.com/file/d/1ROYK9tE3kjzJhp-7a0i_chp0-mS-DVT2/view" rel="noreferrer">Resume</a>
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
                    <input type="checkbox" onClick={ DrawerManager } checked={drawer} id="check"/> 
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
            <section id="Home">

                <section id="img" >
                </section>
                {'\n'}
                <div class="profile"></div>
                <h1 style={{ opacity: "0.9"}}><b style={{color : "#ee5253"}}>
                Hi!</b> I'm Kaviya Gopi
                </h1>
                <p style={{ opacity: "0.7"}}>I love to tc of <b>Software Development</b></p>
                {'\n\n'}
                <div id="aboutMe" >
                    <h2 style={{ opacity: "0.9"}}>About Me</h2>
                    {'\n'}
                    <p style={{ opacity: "0.8", fontFamily: "Work Sans", marginLeft: "auto", marginRight: "auto", maxWidth: "720px",  textAlign: "justify"}}>
                    Currently pursuing a Master's in Computer Science at Stony Brook University, 
                    with a passion for creating innovative and efficient solutions through software development.
                        
                    </p>
                        {'\n'}
                        
                    
                    <h2>Education & Goals</h2>
                    <p style={{ opacity: "0.8", fontFamily: "Work Sans", marginLeft: "auto", marginRight: "auto", maxWidth: "720px",  textAlign: "justify"}}>
                        {'\n'}
                        Master's in Computer Science
                        {'\n'}
                        Stony Brook University, 2024-Present
                        {'\n'}
                        {'\n'}
                        My objective is to secure a software development role where I can apply my technical expertise, 
                        hands-on project experience, and problem-solving skills to build innovative and efficient solutions. 
                        I am eager to contribute to dynamic teams and organizations that value innovation and continuous learning.
                        {'\n\n'}
                        
                        I'm seeking an internship opportunity 
                        in software development.  
                        {'\n\n'}
                        
                    </p>
                    <h2>My Journey</h2>
                    <p style={{ opacity: "0.8", fontFamily: "Work Sans", marginLeft: "auto", marginRight: "auto", maxWidth: "720px",  textAlign: "justify"}}>
                        {'\n'}
                        Through my academic journey and hands-on projects, I've developed a strong foundation in software development. 
                        I'm passionate about creating applications that solve real-world problems and provide excellent user experiences.
                        {'\n'}
                        {'\n'}
                        My experience ranges from full-stack web development to data analysis, 
                        with a particular interest in creating intuitive user interfaces and efficient backend systems.
                        
                        {'\n\n'}
                        {'\n\n'}
                    </p>
                        You can reach me out on 
                        <b>
                            <a rel="noreferrer" href="https://www.linkedin.com/in/kaviya-gopi" target="_blank" className="LINK">
                                {''} <u>LinkedIn</u>
                            </a> 
                        </b>
                            {''} and {''}
                        <b> 
                            <a target = "_blank" rel="noreferrer" href="https://discord.com/users/777906489498271765">
                            <u>Discord</u> </a>
                        </b>
                            (ID) ✨

                    {'\n\n'}
                    Don't forget to check out my <b>
                        <a rel="noreferrer" href="https://portfolio-react-ten-orcin.vercel.app/technology" target="_blank" className="LINK">
                            <u>Technology</u>
                        </a></b> and <b><a target = "_blank" rel="noreferrer" href = "https://portfolio-react-ten-orcin.vercel.app/projects"  >
                            <u>Projects</u>
                        </a></b> page
                        {'\n'}
                        {'\n'}
                        {'\n'}
                        <i style={{opacity: 0.3}}>
                            Last Modified on: 26-03-2025
                        </i>
                </div>
            </section>
        </div>
    )
}

export default About;