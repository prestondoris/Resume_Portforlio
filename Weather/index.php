<?php
    
    $weather = "";
    $errorMessage = "";
    if($_POST["city"]) {
        
        $urlContents = file_get_contents('http://api.openweathermap.org/data/2.5/weather?q='.$_POST["city"].'&appid=8bbc53aa7f976a259d6537710e71ea80');
        
        //the true will return the value as an associative array.
        $weatherArray = json_decode($urlContents, true);
        
        if ($weatherArray["cod"] == 200) {
            $weatherTitle = "<p><strong>The Weather in ".$weatherArray['name']."</strong></p>";

            $tempCelcius = intval($weatherArray['main']['temp'] - 273.15);
            $tempFahrenheit = intval($tempCelcius*1.8 + 32);

            $tempHighCelcius = intval($weatherArray['main']['temp_max'] - 273.15);
            $tempHighFahrenheit = intval($tempHighCelcius*1.8 + 32);

            $tempLowCelcius = intval($weatherArray['main']['temp_min'] - 273.15);
            $tempLowFahrenheit = intval($tempLowCelcius*1.8 + 32);

            $temp = "The current temperature is ".$tempFahrenheit."&deg;F (".$tempCelcius."&deg;C) with a high of ".$tempHighFahrenheit."&deg;F (".$tempHighCelcius."&deg;C) and a low of ".$tempLowFahrenheit."&deg;F (".$tempLowCelcius."&deg;C). ";

            $weather = $weatherTitle."<p>".$temp."The forcast for the day: ".$weatherArray['weather'][0]['description'].".</p>";
        } else {
            $errorMessage = "The city you are looking for could not be found.";
        }
        

    }

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Get The Weather</title>
        
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
        
        <style type="text/css">
        
            html {
                background: url(darrel-collins-40643.jpg);
                background-position: center;
                -webkit-position: center;
                -moz-position: center;
                -o-position: center;
            }
            
            body {
                background: none;
            }
            
            .container {
                text-align: center;
                margin-top: 10em;
            }
            
            .lead {
                margin-top: 1em;
            }
            
            form {
                margin-top: 3em;
            }
            
            .btn {
                margin: 3em;
            }
            
            #message-title {
                font-size: 1.2em;
                margin: 0;
                padding-bottom: .5em
            }
        
        </style>
    </head>
    <body>
        
        <div class="container col-sm-6">
            <h1 class="display-3">Get the Weather!</h1>
            <p class="lead">Enter the name of the City.</p>
            <form class="mx-auto" method="post">
                <div>
                    <input type="text" class="form-control form-control-lg" name="city" id="city" placeholder="Eg. San Francisco, London" >
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <div id="weather">
              <?php 
                  if ($weather) {
                      echo '<div class="alert alert-success" role="alert">'.$weather.'</div>';
                  } else if ($errorMessage) {
                      echo '<div class="alert alert-danger" role="alert">'.$errorMessage.'</div>';
                  }
              ?>
            </div>
        </div>
        
        
        <!-- jQuery first, then Tether, then Bootstrap JS. -->
        <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
    </body>
</html>