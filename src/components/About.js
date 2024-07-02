import React from "react";

export default function About(props) {
  // const [myStyle, setStyle] = useState({
  //   color: "white",
  //   backgroundColor: "black",
  // });
  // const [btntext, setBtnText] = useState("Enable Light Mode");
  // const toggleStyle = () => {
  //   if (myStyle.color === "white") {
  //     setStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Dark Mode");
  //   } else {
  //     setStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setBtnText("Enable Light Mode");
  //   }
  // };
  let myStyle = {
    color:  props.mode==='light'?'#212129':'white',
    backgroundColor:  props.mode==='light'?'white':'#212129'
  }
  return (
    <div className="container" style={myStyle}>
      <h1 className="my-2">About Us</h1>
      <div class="accordion" id="accordionExample" style={myStyle}>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
              Textutils gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count or
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              style={myStyle}
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
              TextUtils is a free character counter tool that provides instant
              character count & word count statistics for a given text.
              TextUtils reports the number of words and characters. Thus it is
              suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              style={myStyle}
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
              This word counter software works in any web browsers such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count characters in facebook, blog, books, excel document, pdf
              document, essays, etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button type="button" className="btn btn-primary" onClick={toggleStyle}>
          {btntext}
        </button>
      </div> */}
    </div>
  );
}
