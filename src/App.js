import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { QRCode } from 'react-qrcode-logo';
import { TwitterPicker } from 'react-color';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import type1 from './type1.png';
import type2 from './type2.png';
import git from './github.png';


const useStyles = makeStyles({
  root: {
    padding: '15px 15px',
  },

});

function App() {
  const classes = useStyles();
  const [urlText, setUrlText] = useState("https://github.com/gcoro/react-qrcode-logo");
  const [selectingBg, setSelectingBg] = useState('false');
  const [backgroundColor, setBackColor] = useState('#FFFFFF');
  const [fgColor, setFgColor] = useState('#000000');
  const [qrStyle, setQrStyle] = useState('squares');
  const [logoUrl, setLogoUrl] = useState(' ');
  const [qrSize, setQrSize] = useState(275);


  function handleClick() {
    return setUrlText("https://www.npmjs.com/package/react-qrcode-logo");
  };

  function handleChangeBg(color){
    return setBackColor(color);
  };

  function handleChangeFg(color){
    return setFgColor(color);
  };

  function handleUrl(event){
    return setUrlText(event);
  };

  function handleLogo(event){
    return setLogoUrl(event);
  }

  function toggleStyle(){
      return setQrStyle('squares');
  }

  function toggleDots(){
    return setQrStyle('dots');
  }

  function chooseBack(){
    return setSelectingBg('true');
  }


  return (
    <div>
      <div className="App">
        <header className="App-header">
        <span>
          <h1 className="headText"> QR Generator </h1>
          <a href="https://github.com/AndrewTheo"><img width="65px" src={git} /></a>
        </span>

        <div  display="flex" className={classes.root}>
          <QRCode value={urlText} bgColor={backgroundColor}
                  fgColor={fgColor}
                  qrStyle={qrStyle}
                  size={qrSize}
                  ecLevel={"H"}
                  logoImage={logoUrl}
                  logoWidth={qrSize*0.2}
          />

          <div className={classes.root}>
            <h6 className={"h6Text"}>URL: </h6>
            <Input className={"inputs"} type="email" onChange={event => handleUrl(event.target.value)} name="url"  placeholder="Enter URL or Data" />
          </div>
        </div>

        <div display="flex" className="App-colors">
          <h6 className={"h6Text"}>Background Color: </h6>
          <TwitterPicker id="testing" color={ backgroundColor } onChangeComplete={({hex}) => { handleChangeBg(hex);}} triangle="hide"/>
          <h6 className={"h6Text"}>Foreground Color: </h6>
          <TwitterPicker color={ fgColor } onChangeComplete={({hex}) => { handleChangeFg(hex);}} triangle="hide"/>

          <h6 className={"h6Text"}>Style: </h6>
          <div  className={"buttons"} display="flex" flex-direction="row">
            <span className={"leftdiv"}>
              <img src={type1} onClick={(toggleStyle)} />
            </span>
            <span className={"leftdiv"}>
              <img src={type2} onClick={toggleDots} />
            </span>
          </div>
          <h6 className={"h6Text"}>Logo (Optional):</h6>
          <Input className={"inputs"} type="url" onChange={event => handleLogo(event.target.value)} name="url"  placeholder="Logo Image Url" />
        </div>
      </header>
    </div>
    </div>
  );
}

export default App;
