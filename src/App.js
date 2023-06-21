import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <head>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
          {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> */}
          {/* <title>Document</title> */}
          <script src="https://unpkg.com/feather-icons"></script>
      </head>
      <body>
          <div class="nav-container container">
            <nav class="navbar navbar-expand-md bg-body-tertiary" style="background-color: var(--dark-blue) !important;">
              <div class="nav-container-div container-fluid">
                <a class="navbar-brand" href="#">Daryl</a>
                <div class="nav-flex-fill flex-fill"></div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class=""><i data-feather="menu" class="menu-toggle-icon"></i></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <div class="nav-flex-fill flex-fill"></div>
                  <ul class="navbar-ul navbar-nav ms-auto mb-2 mb-lg-0" style="margin-bottom: 0 !important">
                    <li class="nav-item-1 nav-item">
                      <a class="nav-link" href="#home"><span>01.</span> Home</a>
                    </li>
                    <li class="nav-item-2 nav-item">
                      <a class="nav-link" href="#about"><span>02.</span> About</a>
                    </li>
                    <li class="nav-item-3 nav-item">
                      <a class="nav-link" href="#experience"><span>03.</span> Experience</a>
                    </li>
                    <li class="nav-item-4 nav-item">
                      <a class="nav-link" href="#projects"><span>04.</span> Projects</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
            <div class="container">
              <div class="row home">
                  <div class="col-sm-12 col-md-5 home-1">
                      <div class="home-image">
                        <svg class="svg-image" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" id="blobSvg" style="opacity: 1;"><image x="0" y="0" width="100%" height="100%" clip-path="url(#shape)" href="./assets/images/profile.jpeg" preserveAspectRatio="none"></image>                        <defs>                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">                            <stop offset="0%" style="stop-color: rgb(4,217,255);"></stop>                            <stop offset="100%" style="stop-color: rgb(4,217,255);"></stop>                        </linearGradient>                        </defs>                                            <clipPath id="shape"><path id="blob" fill="url(#gradient)">                            <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate>                        </path></clipPath></svg>                  
                        <svg class="svg-image-background" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" id="blobSvg" style="opacity: 1;" filter="blur(20px)"><path id="blob" fill="url(#gradient)" style="opacity: 1;">
                          <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate>
                            </path>
                            <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style="stop-color: rgb(4,217,255);"></stop>
                                <stop offset="100%" style="stop-color: rgb(4,217,255);"></stop>
                            </linearGradient>
                            </defs>
                            
                        </svg>
                      </div>
                      <div class="home-icons" id="home">
                        <ul class="home-icons-ul list-group align-middle">
                          <a class="list-group-item" href="https://github.com/darylbg" target="_blank">
                            <i data-feather="github"></i>                      
                            <span class="home-icon-span">--Github</span>
                          </a>
                          <a class="list-group-item" href="https://www.linkedin.com/in/daryl-blough-063610173/" target="_blank">
                            <i data-feather="linkedin"></i>                      
                            <span class="home-icon-span">--Linkedin</span>
                          </a>
                          <a class="list-group-item" href="mailto: darylxcuf@gmail.com">
                            <i data-feather="mail"></i>          
                            <span class="home-icon-span">--Email</span>         
                          </a> 
                          <a class="list-group-item" href="">
                            <i data-feather="file-text"></i>
                            <span class="home-icon-span">--Resume</span>
                          </a>
                      </ul>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-7 home-2">
                    <div class="home-intro-div">
                      <h6>Hi my name is</h6>
                    </div>
                    <div class="home-name-div">
                      <h1 id="home-name">Daryl Blough</h1>
                    </div>
                    <div class="home-subtitle-div">
                      <h3 id="home-subtitle">I build stuff for the web.</h3>
                    </div>
                    <div class="home-bio-div">
                      <h6 class="home-2-bio">
                          I’m a software engineer specializing in building 
                          (and occasionally designing) exceptional digital 
                          experiences. Currently, I’m focused on building 
                          accessible, human-centered products at Upstatement.
                      </h6>
                    </div>
                  </div>
                  <div class="email"><a href="">darylxcuf@gmail.com</a></div>
                  <div class="arrow"></div>
              </div>
              <div class="row about" id="about">
                  <div class="col-12 text-center">
                      <h3 class="section-title">02.<span> About ----------------</span></h3>
                  </div>
                  <div class="col-12 col-md-6 about-div">
                      <p class="about-text">
                          I am basically the best developer in the world.
                          I work well in a team and as a company bitch
                          as well as a hacker and it specialist. i have loads 
                          of certifications and all that shit. I learn quick
                          i have memorized the Bible and the dictionary.
                          Puhleeeeeze hire me. some more shit about me
                          that i need for this section as i am a piece of shit 
                          hi fuck cunt bitch i love atmospheric black metal.
                      </p>
                  </div>
                  <div class="col-12 col-md-6">
                      <div class="row text-center">
                          <h5>Some technologies I am familiar with</h5>
                      </div>
                      <div class="row text-center">
                          <div class="col-3">js</div>
                          <div class="col-3">css</div>
                          <div class="col-3">node</div>
                          <div class="col-3">mysql</div>
                      </div>
                      <div class="row text-center">
                          <div class="col-3">bootstrap</div>
                          <div class="col-3">jquery</div>
                          <div class="col-3">github</div>
                          <div class="col-3">html</div>
                      </div>
                  </div>
              </div>
              <div class="row experience" id="experience">
                  <div class="col-12 text-center">
                      <h3 class="section-title">03.<span> Experience ----------------</span></h3>
                  </div>
                  <div class="col-12 col-md-4">
                      <ul class="list-group">
                          <li class="list-group-item">UOB Bootcamp</li>
                          <li class="list-group-item">The Mount Academy</li>
                      </ul>
                  </div>
                  <div class="col-12 col-md-8">
                      {/* <!-- Nav tabs --> */}
                      <div class="d-flex align-items-start">
                          <div class="work-tabs nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical" style="margin-right: 0 !important;">
                            <button class="nav-link text-start active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Pakistan Consulate</button>
                            <button class="nav-link text-start" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Sitel</button>
                            <button class="nav-link text-start" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Shaftec</button>
                          </div>
                          <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                              <h3>Office Administrator at the Pakistan Consualte</h3>
                              <h5>2019 - Current</h5>
                              <p>administrator duties</p>
                              <p>purchaseing it networking</p>
                              <p>manager projects programs</p>
                            </div>
                            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                              <h3>Office Administrator at the Pakistan Consualte</h3>
                              <h5>2019 - Current</h5>
                              <p>administrator duties</p>
                              <p>purchaseing it networking</p>
                              <p>manager projects programs</p>
                            </div>
                            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                              <h3>Office Administrator at the Pakistan Consualte</h3>
                              <h5>2019 - Current</h5>
                              <p>administrator duties</p>
                              <p>purchaseing it networking</p>
                              <p>manager projects programs</p>
                            </div>
                          </div>
                        </div>
                  </div>
              </div>
              <div class="row text-center projects" id="projects">
                <div class="col-12">
                  <h3 class="section-title">04.<span> Projects ----------------</span></h3>
                </div>
                <div class="col-12">project 1</div>
                <div class="col-12">project 2</div> 
                <div class="col-12">project 3</div> 
              </div>
              <div class="row footer" id="footer">
                  <div class="col-12 col-md-6">
                      <ul class="footer-icons list-group list-group-horizontal">
                          <a class="list-group-item" href="">
                            <i data-feather="github"></i> 
                          </a>
                          <a class="list-group-item" href="">
                            <i data-feather="linkedin"></i> 
                          </a>
                          <a class="list-group-item" href="">
                            <i data-feather="mail"></i> 
                          </a>
                          <a class="list-group-item" href="">
                            <i data-feather="file-text"></i> 
                          </a>
                      </ul>
                  </div>
                  <div class="col-12 col-md-6 order-first order-md-last">
                      <p>
                          Designed by yours truly in Figma and 
                          built in Visual Studio Code. Built using 
                          Bootstrap framework, hosted on Heroku. 
                          calibre typeface
                      </p>
                  </div>
              </div>
            </div>
          <script src="assets/js/script.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js" integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js" integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ" crossorigin="anonymous"></script>
        <script>
          feather.replace()
        </script>
      </body>
    </>
  );
}

export default App;
