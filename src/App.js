import logo from "./logo.svg";
import "./App.css";
import work from "./images/work.jpg";
import Navbar from "./components/Navbar";
import pattern from "./images/bg-pattern.png";
import phone from "./images/online-world.svg";
import newback from "./images/new back.png";
import person from "./images/men1.jpg";
import person1 from "./images/men2.jpg";
import person2 from "./images/men3.jpg";
import person3 from "./images/men4.jpg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid men">
        <div className=" flex-column">
          <div className="banner-text">
            We help startups launch their <br /> products
          </div>
          <div className="tagline">
            Etiam sed.Interdum consequat proin vestibulum class at.
          </div>
          <div className="play">
            <svg
              style={{ cursor: "pointer" }}
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-play-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="pattern">
        <img src={pattern} class="img-fluid" />
      </div>
      <div className="section-two">
        <div className="section-title">our services</div>
        <div className="service-border-line"></div>
        <div className="service-subtitle">
          We craft digital, graphic and dimensional thinking, to create category
          leading brand experiences that <br /> have meaning and add a value for
          our clients.
        </div>
        <div class="container text-center">
          <div class="row align-items-start">
            <div class="col">
              <div className="circle">
                <div className="jack">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="34"
                    fill="currentColor"
                    class="bi bi-gem"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z" />
                  </svg>
                </div>

                <div className="heading">Digtal Design</div>
                <div className="service-subtitle">
                  Some quick example text to build on the card <br /> title and
                  make up the bulk of the card's content.
                  <br /> Moltin gives you the platform.
                </div>
              </div>
            </div>
            <div class="col">
              <div className="circle">
                <div className="jack">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="34"
                    fill="currentColor"
                    class="bi bi-card-list"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                    <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                  </svg>
                </div>
                <div className="heading">Unlimted Colors</div>
                <div className="service-subtitle">
                  Credibly brand standards compliant users <br /> without
                  extensible services. Anibh euismod
                  <br /> tincidunt ut laoreet.
                </div>
              </div>
            </div>
            <div class="col">
              <div className="circle">
                <div className="jack">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="34"
                    fill="currentColor"
                    class="bi bi-piggy-bank"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm1.138-1.496A6.613 6.613 0 0 1 7.964 4.5c.666 0 1.303.097 1.893.273a.5.5 0 0 0 .286-.958A7.602 7.602 0 0 0 7.964 3.5c-.734 0-1.441.103-2.102.292a.5.5 0 1 0 .276.962z" />
                    <path
                      fill-rule="evenodd"
                      d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595zM2.516 6.26c.455-2.066 2.667-3.733 5.448-3.733 3.146 0 5.536 2.114 5.536 4.542 0 1.254-.624 2.41-1.67 3.248a.5.5 0 0 0-.165.535l.66 2.175h-.985l-.59-1.487a.5.5 0 0 0-.629-.288c-.661.23-1.39.359-2.157.359a6.558 6.558 0 0 1-2.157-.359.5.5 0 0 0-.635.304l-.525 1.471h-.979l.633-2.15a.5.5 0 0 0-.17-.534 4.649 4.649 0 0 1-1.284-1.541.5.5 0 0 0-.446-.275h-.56a.5.5 0 0 1-.492-.414l-.254-1.46h.933a.5.5 0 0 0 .488-.393zm12.621-.857a.565.565 0 0 1-.098.21.704.704 0 0 1-.044-.025c-.146-.09-.157-.175-.152-.223a.236.236 0 0 1 .117-.173c.049-.027.08-.021.113.012a.202.202 0 0 1 .064.199z"
                    />
                  </svg>
                </div>
                <div className="heading">Strategy Solution</div>
                <div className="service-subtitle">
                  Separated they live in Bookmarksgrove right at
                  <br /> the coast of the Semantics, a large language
                  <br /> ocean necessary regelialia.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container text-center">
          <div class="row align-items-start">
            <div class="col">
              <div className="circle">
                <div className="jack">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="34"
                    fill="currentColor"
                    class="bi bi-snow3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 7.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1z" />
                    <path d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793v-1.51l-2.053-1.232-1.348.778-.495 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.883-.237a.5.5 0 1 1 .258-.966l1.85.495L5 9.155v-2.31l-1.4-.808-1.85.495a.5.5 0 1 1-.259-.966l.884-.237-1.12-.646a.5.5 0 0 1 .5-.866l1.12.646-.237-.883a.5.5 0 1 1 .966-.258l.495 1.849 1.348.778L7.5 4.717v-1.51L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 0 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v1.51l2.053 1.232 1.348-.778.495-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495-1.4.808v2.31l1.4.808 1.849-.495a.5.5 0 1 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-1.348-.778L8.5 11.283v1.51l1.354 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5zm2-6.783V6.783l-2-1.2-2 1.2v2.434l2 1.2 2-1.2z" />
                  </svg>
                </div>
                <div className="heading">Awesome Support</div>
                <div className="service-subtitle">
                  It is a paradisematic country, in which roasted <br /> parts
                  of sentences fly into your mouth leave for <br /> the far
                  World.
                </div>
              </div>
            </div>
            <div class="col">
              <div className="circle">
                <div className="jack">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="34"
                    fill="currentColor"
                    class="bi bi-newspaper"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                    <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
                  </svg>
                </div>
                <div className="heading">Truly Multipurpose</div>
                <div className="service-subtitle">
                  Even the all-powerful Pointing has no control <br /> about the
                  blind texts it is an almost <br /> unorthographic.
                </div>
              </div>
            </div>
            <div class="col">
              <div className="circle">
                <div className="jack">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="34"
                    fill="currentColor"
                    class="bi bi-airplane"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Zm.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1c-.213 0-.458.158-.678.599Z" />
                  </svg>
                </div>
                <div className="heading">Easy to customise</div>
                <div className="service-subtitle">
                  Question Marks and devious Semikoli, but the <br /> Little
                  Blind Text didn’t listen. She packed her <br /> seven
                  versalia.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-three">
        <div class="container text-center">
          <div class="row align-items-start">
            <div class="col">
              <div className="feature-box">
                A digital web design studio creating <br /> modern &amp;
                engaging online
                <br />
                experiences
                <div className="feature-para">
                  <p>
                    Separated they live in Bookmarksgrove right at the coast of
                    the
                    <br />
                    Semantics, a large language ocean. A small river named Duden
                    <br />
                    flows by their place and supplies it with the necessary
                    regelialia.
                  </p>
                  <div>
                    <ul className="listed">
                      <li className="l1">We put a lot of effort in design.</li>
                      <li className="l1">
                        The most important ingredient of successful website.
                      </li>
                      <li className="l1">
                        Sed ut perspiciatis unde omnis iste natus error sit.
                      </li>
                      <li className="l1">Submit Your Orgnization.</li>
                    </ul>
                  </div>
                  <div>
                    <button className="square">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div className="phone">
                <img src={phone} class="img-fluid " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-four">
        <div className="flex-column">
          <div className="text-bold">Build your dream website today</div>
          <div className="high">
            But nothing the copy said could convince her and so it didn’t take
            long until a few <br />
            insidious Copy Writers ambushed her.
          </div>
          <div className="view1">
            <button className="view">View Plan & Pricing</button>
          </div>
        </div>
      </div>
      <div className="section-five">
        <div className="oppo">
          <img src={newback} class="img-fluid" />
        </div>
        <div className="section-title">our pricing</div>
        <div className="service-border-line"></div>
        <div className="service-subtitle">
          Call to action pricing table is really crucial to your for your
          business website. Make your bids stand-out <br />
          with amazing options.
        </div>
        <div class="container text-center ">
          <div class="row align-items-start">
            <div class="col">
              <div className="triangle pricing-box">
                <p className="eco">Economy</p>
                <p className="money">$ 9.90</p>
                <p className="bill">BILLING PER MONTH</p>
                <div className="band">
                  <p className="time">
                    Bandwidth: <b class="text-danger">1GB</b>
                  </p>
                  <p className="time">
                    Onlinespace : <b class="text-danger">50MB</b>
                  </p>
                  <p className="time">
                    Support: <b class="text-danger">No</b>
                  </p>
                  <p className="time">
                    Domain:<b class="text-danger"> 1</b>
                  </p>
                  <p className="time">
                    Hidden Fees:<b class="text-danger"> No</b>
                  </p>
                  <button className="square">Join Now</button>
                </div>
              </div>
            </div>
            <div class="col">
              <div className="triangle pricing-box">
                <p className="eco">Deluxe</p>
                <p className="money">$ 19.90</p>
                <p className="bill">BILLING PER MONTH</p>
                <div className="band">
                  <p className="time">
                    Bandwidth: <b class="text-danger">10GB</b>
                  </p>
                  <p className="time">
                    Onlinespace : <b class="text-danger">500MB</b>
                  </p>
                  <p className="time">
                    Support: <b class="text-danger">No</b>
                  </p>
                  <p className="time">
                    Domain:<b class="text-danger"> 10</b>
                  </p>
                  <p className="time">
                    Hidden Fees:<b class="text-danger"> No</b>
                  </p>
                  <button className="square">Join Now</button>
                </div>
              </div>
            </div>
            <div class="col">
              <div className="triangle pricing-box">
                <p className="eco">Ultimate</p>
                <p className="money">$ 29.90</p>
                <p className="bill">BILLING PER MONTH</p>
                <div className="band">
                  <p className="time">
                    Bandwidth: <b class="text-danger">100GB</b>
                  </p>
                  <p className="time">
                    Onlinespace : <b class="text-danger">2GB</b>
                  </p>
                  <p className="time">
                    Support: <b class="text-danger">Yes</b>
                  </p>
                  <p className="time">
                    Domain:<b class="text-danger"> Unlimited</b>
                  </p>
                  <p className="time">
                    Hidden Fees:<b class="text-danger"> No</b>
                  </p>
                  <button className="square">Join Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-six">
        <div className="behind">
          <div className="section-title">BEHIND THE PEOPLE</div>
          <div className="service-border-line"></div>
          <div className="service-subtitle">
            It is a long established fact that create category leading brand
            experiences a reader will be distracted by <br /> the readable
            content of a page when looking at its layout.
          </div>
        </div>
        <div class="container-fluid text-center persons-details">
          <div class="row align-items-start">
            <div class="col">
              <div className="circle">
                <div class="card" style={{ width: "18rem" }}>
                  <img src={person} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Frank Johnson</h5>
                    <p class="card-text">CEO</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div className="circle">
                <div class="card" style={{ width: "18rem" }}>
                  <img src={person1} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Elaine Stclair</h5>
                    <p class="card-text">DESIGNER</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div className="circle">
                <div class="card" style={{ width: "18rem" }}>
                  <img src={person2} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Wanda Arthur</h5>
                    <p class="card-text">DEVELOPER</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div className="circle">
                <div class="card" style={{ width: "18rem" }}>
                  <img src={person3} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Joshua Stemple</h5>
                    <p class="card-text">MANAGER</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-seven ">
        <div className="section-title">WORK PROCESS</div>
        <div className="service-border-line"></div>
        <div className="service-subtitle">
          In an ideal world this website wouldn’t exist, a client would
          acknowledge the importance of having web <br />
          copy before the design starts.
        </div>
      </div>
    </div>
  );
}

export default App;
