import React,{useState} from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode ==='dark' ? 'black' : 'white',
  }
  // const [myStyle, setmyStyle] = useState({
  //   color: 'black', 
  //   backgroundColor: 'white', 
  //   // border: '2px solid black' , 
  // });
  // const [btnText, setbtnText] = useState('Enable Dark Mode');
  // const toggleStyle= ()=>{
  //   if(myStyle.color==='white'){
  //     setmyStyle({
  //       color: 'black',
  //       backgroundColor: 'white',
  //       border: '2px solid white' , 
  //     })
  //     setbtnText("Enable Dark Mode");
  //   }else{
  //     if(myStyle.color==='black'){
  //       setmyStyle({
  //         color: 'white',
  //         backgroundColor: 'black',
  //         border: '2px solid black' , 
  //       })
  //       setbtnText("Enable Light Mode");
  //     }
  //   }
  // };
  return (
    <div className="container" style={myStyle}>
        <h1 className="my-3">About my website</h1>
      <div className="card">
        <div className="card-header" id="headingOne" style={myStyle}>
          <h5 className="mb-0">
            <button
              className="btn btn-link"
              style={myStyle}
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >

              <strong>Analyze your text </strong> 
            </button>
          </h5>
        </div>

        <div
          id="collapseOne"
          className="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div className="card-body" style={myStyle}>
            TextMania gives you a way to analyze your text quickly and efficiently. Be it word count, character count or many other things 
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingTwo" style={myStyle}>
          <h5 className="mb-0">
            <button
              className="btn btn-link collapsed"
              style={myStyle}
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use </strong> 
            </button>
          </h5>
        </div>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordion"
        >
          <div className="card-body" style={myStyle}>
            TextMania is a free character counter tool that provides instant character count and word count statstics for a given text. 
            TextMania reports the no of words and characters. Thus it is suitable for writing text with word/character limit 
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingThree" style={myStyle}>
          <h5 className="mb-0">
            <button
              className="btn btn-link collapsed"
              style={myStyle}
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser compatibility </strong> 
            </button>
          </h5>
        </div>
        <div
          id="collapseThree"
          className="collapse"
          aria-labelledby="headingThree"
          data-parent="#accordion"
        >
          <div className="card-body" style={myStyle}>
            This amazing word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safrai, Opera etc. It 
            suits to count character in facebook blogs, books, excel document, pdf doc, and many other things. 
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button className="btn btn-primary" onClick={toggleStyle} type="button">{btnText}</button>
      </div> */}
    </div>
  );
}
