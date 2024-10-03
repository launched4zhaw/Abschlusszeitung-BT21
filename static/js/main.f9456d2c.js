/*! For license information please see main.f9456d2c.js.LICENSE.txt */
position: relative;
height: 100vh;
max-width: 100%;

.spline{
  position: absolute
  
  @media(max-width: 1024px){
    transform: scale(0.8) translateX(200px)}
  }
`,JH=KH.div`
position: absolute;
top: 30px;
display: flex;
flex-direction: column;
padding-left: 3em;

h1{
  font-family: 'Spline Sans Mono';
  font-size: 4.5em;
  color: #61dafb;

  @media (max-width: 800px){
    font-size: 3.2em;
    padding-right: 1em;
    margin-top: 0.8em;
  }
  @media (max-width: 600px){
    font-size: 2.5em;
    max-width: 70%;
    padding-right: 1em;
    margin-top: 1em;
    }
  @media (max-width: 450px){
    font-size: 1.8em;
    max-width: 60%;
    padding-right: 1em;
    margin-top: 1em;
    }
  @media (max-width: 350px){
    font-size: 1.5em;
    max-width: 60%;
    padding-right: 1em;
    margin-top: 1.2em;
    }
  }
}

h2{
font-family: 'Spline Sans Mono';
font-size: 3em;

color: whitesmoke;
max-width: 45%;

@media (max-width: 800px){
    font-size: 2.1em;
    margin-top: 2em;
  }
@media (max-width: 600px){
    font-size: 1.8em;
    margin-top: 1.5em;
    }
@media (max-width: 450px){
    font-size: 1.2em;
    }
@media (max-width: 350px){
    font-size: 1em;
    margin-top: 4em;
    }
}

button{
  background: rgb(0,0,0,0.4);
  border: 0px;
  font-size: 1.5em;
  font-family: 'Spline Sans Mono';
  border-radius: 0.6em;
  border: 1px solid rgb(255,255,255,0.2);
  padding: 0.3em 0.8em 0.3em 0.8em;
  max-width: 45%;
  display: flex;
  justify-content: center;
  align-items: center
  
  :hover {
    border: 1px solid rgb(255,255,255,0.8);
    }
@media (max-width: 800px){
    font-size: 1.2em;
    max-width: 55%;
    margin-top: 1.5em;
  }
@media (max-width: 600px){
    font-size: 1em;
    max-width: 60%;
    margin-top: 2em;
    }
@media (max-width: 450px){
    font-size: 0.8em;
    max-width: 55%;
    margin-top: 2em;
    }
  @media (max-width: 370px){
    font-size: 0.6em;
    max-width: 55%;
    margin-top: 1em;
    }
}
`,$H=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(ZH,{children:[(0,n.jsx)(lV,{className:"spline"}),(0,n.jsxs)(JH,{children:[(0,n.jsx)("h1",{children:"Abschlusszeitung 2024"}),(0,n.jsx)("h2",{children:"Studiengang Biotechnologie"}),(0,n.jsx)("button",{children:(0,n.jsx)(r,{})}),(0,n.jsx)("br",{})]})]})})},eW=e=>{e&&e instanceof Function&&i.e(453).then(i.bind(i,453)).then((t=>{let{getCLS:i,getFID:n,getFCP:r,getLCP:s,getTTFB:a}=t;i(e),n(e),r(e),s(e),a(e)}))};t.createRoot(document.getElementById("root")).render((0,n.jsx)(e.StrictMode,{children:(0,n.jsx)($H,{})})),eW()})()})();
//# sourceMappingURL=main.f9456d2c.js.map