<?php

    $error = "";
    $successMessage = "";
    //This checks if there are POST variables and if that returns true, the if statement is run
    if($_POST) {
        if(!$_POST["form-name"]) {
            $error .= "Your name field is empty<br>";
        } else {}
        if(!$_POST["form-email"]) {
            $error .= "Your email field is empty<br>";
        } else {}
        if(!$_POST["form-subject"]) {
            $error .= "Your subject field is empty<br>";
        } else {}
        if(!$_POST["form-message"]) {
            $error .= "Your message field is empty<br>";
        } else {}
        if ($_POST["form-email"] && filter_var($_POST["form-email"], FILTER_VALIDATE_EMAIL) === false) {
            $error .= "Your email is not a valid email format<br>";
        } else {}

        if ($error != "") {
            $error = '<div class="alert alert-danger" role="alert"><p><strong>There were some error(s) in your form</strong></p>'.$error.'</div>';
        } else {
            $emailTo = "preston@prestondoris.com";
            $subject = $_POST["form-subject"];
            $content = $_POST["form-message"];
            $headers = "From:".$_POST["form-name"]."<".$_POST["form-email"].">";
            if(mail($emailTo, $subject, $content, $headers)) {
                $successMessage = '<div class="alert alert-success" role="alert">Your message was successfully sent!</div>';
            } else {
                $error = '<div class="alert alert-danger" role="alert">Your message was not able to send. Please try again later.</div>';
            }
        }

    }

?>


<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="description" content="Front End Web Developer">
      <meta name="keywords" content="Web Developer, Front End, HTML, CSS, Javascript, jQuery, Bootstrap, Responsive Web Design">
      <meta name="author" contents="Preston Doris">
      <title>Preston Doris - Web Developer</title>
      <link rel="stylesheet" href="stylesheet.css">
      <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">

  </head>
  <body>
      <nav class="topnav" id="myTopnav">

          <div class="col-3 col-m-6" id="brand">
              <button type="button" class="icon" id="button">
                  <hr class="collapsed-icon">
                  <hr class="collapsed-icon">
                  <hr class="collapsed-icon">
              </button>
              <span><a id="brand-link" href="#home"><img id="brand-logo" src="images/LOGO2.png"></a></span>
          </div>

          <div class="col-6" id="my-navbar">
              <ul id="nav-bar-list">
                  <li><a class="link" id="about" href="#about-anchor">About</a></li>
                  <li><a class="link" id="education" href="#education-anchor">Education</a></li>
                  <li><a class="link" id="experience" href="#experience-anchor">Experience</a></li>
                  <li class="dropdown">
                      <span class="link" id="portfolio">Portfolio</span>
                      <div class="dropdown-content">
                          <a class="link" id="your-app" href="yourApp/your_app.html">YourApp</a>
                          <!--<a class="link" id="the-coding-grounds" href="#">theCodingGrounds</a>-->
                          <a class="link" id="weather" href="Weather/">Weather</a>
                          <a class="link" id="recipe" href="RecipeBuilder/">Recipe Builder (Alpha)</a>
                          <a class="link" id="color-game" href="ColorGame/color.html">RGB Color Game</a>
                      </div>
                  </li>
                  <li><a class="link" id="contact" href="#contact-anchor">Contact</a></li>
              </ul>
          </div>

          <div class="col-3 col-m-6" id="buttons">
              <a href="Resume/Preston%20Doris%20Resume.pdf"><button type="button" id="resume-button">Download Resume</button></a>
          </div>

      </nav>
      <div class="clear"></div>
      <div id="dropdown-list">
          <div class='col-m-12 dropdown-list-link'><a class="link" id="media-about" href="#about-anchor">About</a></div>
          <div class='col-m-12 dropdown-list-link'><a class="link" id="media-education" href="#education-anchor">Education</a></div>
          <div class='col-m-12 dropdown-list-link'><a class="link" id="media-experience" href="#experience-anchor">Experience</a></div>
          <div class="col-m-12 dropdown-list-link" id="media-portfolio-div"><span class="link" id="media-portfolio">Portfolio</span></div>
          <div class="col-m-12 media-portfolio-dropdown">
              <div class="col-m-12 dropdown-list-link media-portfolio"><a class="link" id="media-your-app" href="yourApp/your_app.html">YourApp</a></div>
              <!-- <div class="col-m-12 dropdown-list-link media-portfolio"><a class="link" id="media-the-coding-grounds" href="#">theCodingGrounds</a></div>-->
              <div class="col-m-12 dropdown-list-link media-portfolio"><a class="link" id="media-weather" href="Weather/">Weather</a></div>
              <div class="col-m-12 dropdown-list-link media-portfolio"><a class="link" id="media-recipe" href="RecipeBuilder/">Recipe Builder (Alpha)</a></div>
              <div class="col-m-12 dropdown-list-link media-portfolio"><a class="link" id="media-color" href="ColorGame/color.html">RGB Color Game</a></div>
          </div>
          <div class='col-m-12 dropdown-list-link'><a class="link" id="media-contact" href="#contact-anchor">Contact</a></div>
      </div>

      <div class="clear" id="home"></div>

      <div id="home-body-container">
          <div id='content-header-transbox'></div>

          <div class="col-6" id="title-container">
              <h1 id="name">Preston Doris</h1>
              <hr class="divider">
              <h4 id="profession">Web Developer</h4>
          </div>

          <div class="col-6" id="headshot-container">
              <div id="headshot-border">
                  <img id="headshot" src="images/2%20copy.jpg" >
              </div>
          </div>
      </div>



      <div class="clear" id="about-anchor"></div>

      <div class="col-12" id="about-body-container">
          <div class="col-10 col-m-10" id="about-container">
              <p class="section-title" id="title-about">About Me</p>
              <span><hr class="underline"></span><br><br>
              <p class="about-content" id="about-two">I graduated from Cal Poly San Luis Obispo in 2010 with a Mathematics degree. As part of my degree I took programming courses in C++ and Java where I first learned to code. After graduating, I pursued a passion for brewing beer by obtaining a Diploma in Brewing Technology and Science from UC Davis Extension. I have worked diligently for 5 years in the Brewing Industry to become the Production Manager at a local Regional Brewery in the Bay Area.  </p>
              <p class="about-content" id="about-two">During that time, I reignited a passion for programming by building websites designed around and relating to beer. My skills include: HTML5, CSS3, Responsive Web Design, Bootstrap, JavaScript, jQuery, PHP, MySQL, Node.JS, Express, and MongoDB through online courses hosted by Udemy, Udacity, and Codecademy. I continue to push myself so as to continually build on my knowledge base to create a quality user experiences and effective web solutions. </p>
          </div>
      </div>



      <div class="clear" id="education-anchor"></div>

      <div class="col-12" id="education-body-container">
          <div id="education-body-transbox"></div>
          <div class="col-10 col-m-10" id="education-container">
              <p class="section-title" id="title-education">Education</p>
              <span><hr class="underline"></span><br><br>

              <div class="insitution-set">
                  <div class="institution" id="cal-poly">
                      <div class="flip">
                          <div class="box front">
                              <img src="images/CP_Logo.png" class="institution-img" id="cp-logo" />
                          </div>
                          <div class="box back">
                              <p><strong>Bachelor of Science:<br>Mathematics</strong></p>
                              <p>2006 - 2010</p>
                          </div>
                      </div>
                  </div>
                  <div class="institution" id="udemy">
                      <div class="flip">
                          <div class="box front">
                              <img src="images/udemy-logo.png" class="institution-img" id="udemy-logo"  />
                          </div>
                          <div class="box back">
                              <p>Complete Web Developer Course 2.0</p>
                              <p>2017</p>
                              <hr id="ed-divider">
                              <p>The Web Developer Bootcamp</p>
                              <p>2017</p>
                          </div>
                      </div>
                  </div>
                  <div class="institution" id="cca">
                      <div class="flip">
                          <div class="box front">
                              <img src="images/CCA-logo.png" class="institution-img" id="cca-logo" />
                          </div>
                          <div class="box back">
                              <p><strong>Certificate: Level 1</strong></p>
                              <p>HTML - CSS - Javascript</p>
                              <p>jQuery - PHP</p>
                          </div>
                      </div>
                  </div>
                  <div class="institution" id="codecademy">
                      <div class="flip">
                          <div class="box front">
                              <img src="images/cc-logo.png" class="institution-img" id="cc-logo" />
                          </div>
                          <div class="box back">
                              <p><strong>Courses:</strong></p>
                              <p>Learn HTML - Learn CSS</p>
                              <p>Learn Javascript - Make a Website</p>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
          <div class="col-10 col-m-10" id="skillset-container">
              <div id="title-skillset">
                  <p class="section-title">Skillsets</p>
                  <hr class="underline">
              </div>
              <div class="col-12" id="my-skills">
                  <div class="squares odd" id="one">
                      <p class="skill">HTML5</p>
                      <p class="skill-level">Advanced</p>
                  </div>
                  <div class="squares even" id="two">
                      <p class="skill">CCS3</p>
                      <p class="skill-level">Advanced</p>
                  </div>
                  <div class="squares odd" id="three">
                      <p class="skill">JavaScript</p>
                      <p class="skill-level">Advanced</p>
                  </div>
                  <div class="squares even" id="four">
                      <p class="skill">jQuery</p>
                      <p class="skill-level">Advanced</p>
                  </div>
                  <div class="squares even" id="six">
                      <p class="skill">Responsive Web Design</p>
                      <p class="skill-level">Advanced</p>
                  </div>
                  <div class="squares odd" id="six">
                      <p class="skill">Git & GitHub/p>
                      <p class="skill-level">Intermediate</p>
                  </div>
                  <div class="squares odd" id="six">
                      <p class="skill">Python</p>
                      <p class="skill-level">Intermediate</p>
                  </div>
                  <div class="squares odd" id="five">
                      <p class="skill">PHP</p>
                      <p class="skill-level">Proficient</p>
                  </div>
                  <div class="squares even" id="six">
                      <p class="skill">mySQL</p>
                      <p class="skill-level">Proficient</p>
                  </div>
                  <div class="squares even" id="six">
                      <p class="skill">APIs</p>
                      <p class="skill-level">Proficient</p>
                  </div>
                  <div class="squares even" id="six">
                      <p class="skill">Bootstrap</p>
                      <p class="skill-level">Proficient</p>
                  </div>
              </div>
          </div>
      </div>



      <div class="clear" id="experience-anchor"></div>

      <div class="col-12 col-m-12" id="experience-body-container">
          <div id="experience-body-transbox"></div>
          <div class="col-10 col-m-10" id="experience-container">
              <p class="section-title" id="title-experience">Experience</p>
              <span><hr class="underline"></span><br><br>
              <div class="timeline">
                  <ul>
                      <li>
                          <div class="in-view">
                              <h4>Web Developer</h4>
                              <h4>Independent</h4>
                              <p>June 2016 - Present</p>
                              <p>My Web Developement education has focused on all aspects of Front End developing. I am in the process of building a web based Beer Recipe Builder that has been invaluable in my Education to become a Developer. I am capable of tackling any Front End development need including Responsive Web Design. My Back End skills are still a work in progress, and currently consist of PHP and mySQL. Please check out my Portfolio to see other projects I have completed.</p>
                          </div>
                      </li>
                      <li>
                          <div class="in-view">
                              <h4>Production Manager</h4>
                              <h4>21st Amendment Brewery</h4>
                              <p>November 2016 - Present</p>
                              <p>I manage and oversee all beer production, packaging, and shipping from two facilities on opposite sides of the country through 10% growth year over year. I manage 8 direct reports and am currently the acting Packaging Manager in addition to my current duties. </p>
                          </div>
                      </li>
                      <li>
                          <div class="in-view">
                              <h4>Head Brewer</h4>
                              <h4>21st Amendment Brewery</h4>
                              <p>December 2015 - November 2016</p>
                              <p>I developed an algorithm that accurately calculated beer recipes in a production environment. The algorithm was accurate from batch to batch and it took into accounte the variations in raw materials from our suppliers</p>
                          </div>
                      </li>
                      <li>
                          <div class="in-view">
                              <h4>Brewery Operations Supervisor</h4>
                              <h4>21st Amendment Brewery</h4>
                              <p>January 2015 - December 2015</p>
                              <p>I managed 100% of all production at our off site Partner Brewery through 30% growth year over year, and was responsible for all shipping logistics for the company.</p>
                          </div>
                      </li>
                      <li>
                          <div class="in-view">
                              <h4>Brewery Production Assistant</h4>
                              <h4>21st Amendment Brewery</h4>
                              <p>April 2013 - January 2015</p>
                              <p>While managing all shipping logistics through 40% growth year over year, I developed mulitple Excel algorithms to display specific trends in production and shipping all of which are actively used today.</p>
                          </div>
                      </li>
                      <li>
                          <div class="in-view">
                              <h4>Brewer</h4>
                              <h4>Lagunitas Brewing Company</h4>
                              <p>June 2012 - April 2013</p>
                              <p>I worked in a production environment advancing my technical skills for future roles. </p>
                          </div>
                      </li>
                      <li >
                          <div class="in-view">
                              <h4>Instructional Assistant II</h4>
                              <h4>Clovis Unified School District</h4>
                              <p>February 2011 - December 2011</p>
                              <p>I assisted in a Special Education classroom teaching English and Mathematics to Special Needs students.</p>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      </div>



      <div class="clear" id="contact-anchor"></div>

      <div class="col-12 col-m-12" id="contact-body-container">
          <div id="title-contact">
              <div class="col-10 col-m-10">
                  <p class="section-title" id="test">Contact</p>
                  <span><hr class="underline"></span>
              </div>

          </div>

          <div class="clear"></div>
          <div class="col-10" id="contact-container">
              <div class="col-6 col-m-12">
                  <form class="col-12" method="post">
                      <div class="col-12 col-m-12 form-container">
                          <input type="text" class="col-5-8 col-m-5-8 form-input" name="form-name" id="form-name" placeholder="Name"/>
                          <input type="email" class="col-5-8 col-m-5-8 form-input" name="form-email" id="form-email" placeholder="Email"/>
                      </div>
                      <div class="col-12 col-m-12 form-container">
                           <input type="text" class="col-12 col-m-12 form-input" name="form-subject" id="form-subject" placeholder="Subject"/>
                      </div>
                      <div class="col-12 col-m-12 form-container">
                        <textarea type="text" class="col-12 col-m-12 form-input" id="form-message" name="form-message" placeholder="Your Message Here"></textarea>
                      </div>
                      <button type="submit" id="form-button">Submit</button>
                  </form>
                  <div class="col-12" id="form-confirmation"> <? echo $error.$successMessage ?> </div>
              </div>
              <div class="col-6 col-m-12" id="contact-info-container">
                  <div class="col-12 col-m-12">
                      <h1>Preston Doris</h1>
                      <h3>Web Developer</h3>
                      <p><strong>Phone:</strong><br>(925) 519-5071</p>
                      <p><strong>Email:</strong><br>preston@prestondoris.com</p>
                  </div>
              </div>
          </div>
      </div>
      <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
      <script src="script.js" tyep="text/javascript"></script>

  </body>
</html>
