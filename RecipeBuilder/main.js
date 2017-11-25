/*malt specs
Position 1: malt name
Position 2: % extract
Position 3: % moisture
Position 4: color
*/
var maltList = [
  [''],
  ['Rahr 2-Row', 0.811, 0.046, 1.95],
  ['Rahr 6-Row', 0.79, 0.042, 2.3],  
  ['Rahr Premium Pilsner', 0.805, 0.04, 1.8],
  ['Rahr Pale Ale Malt', 0.79, 0.045, 3.5],
  ['Rahr Old World Pilsner', 0.79, 0.04, 1.8],
  ['Rahr Red Wheat', 0.85, 0.45, 3.3],
  ['Rahr White Wheat', 0.85, 0.45, 3.3],
  ['Crisp Best Ale Malt', 0.82, 0.035, 3.0],
  ['Crisp Cara Gold', 0.76, .065, 6.5],
  ['Crisp Cara Malt', 0.76, .060, 12.5],
  ['Crisp Finest Marris Otter', 0.815, 0.035, 3.0],
  ['Crisp Extra Pale Marris Otter', 0.815, 0.045, 1.8],
  ['Crisp Extra Pale Malt', 0.82, 0.045, 1.8],
  ['Crisp EuroPils Malt', 0.815, 0.045, 1.8],
  ['Crisp Clear Choice Malt', 0.815, .040, 2.5],
  ['Crisp Clear Choice Extra Pale Malt', 0.815, .045, 1.8],
  ['Crisp Organic Pale Malt', 0.815, 0.040, 3.3],
  ['Crisp Organic Extra Pale Malt', 0.815, 0.045, 1.8],
  ['Crisp Wheat Malt', 0.845, 0.065, 2.0],
  ['Crisp Rye Malt', 0.865, 0.045, 8.0],
  ['Crisp Gleneagles Marris Otter', 0.816, 0.032, 3.5],
  ['Crisp Torrified Wheat', 0.80, 0.05, 3.0],
  ['Crisp Flaked Torrified Barley', 0.819, 0.10, 2.0],
  ['Crisp Flaked Torrified Maize', 0.865, 0.085, 1.0],
  ['Crisp Flaked Torrified Rice', 0.806, 0.085, 0.0],
  ['Crisp Flaked Torrified Oats', 0.772, 0.11, 2.0],
  ['Crisp Vienna Malt', 0.800, 0.045, 3.5],
  ['Crisp Munich Light Malt', 0.790, 0.045, 5.0],
  ['Crisp Munich Dark Malt', 0.79, .045, 20.0],
  ['Crisp Light Crystal', 0.76, 0.032, 45],
  ['Crisp Crystal 60 &deg;L', 0.76, 0.032, 60],
  ['Crisp Crystal 77 &deg;L', 0.76, 0.032, 77],
  ['Crisp Extra Dark Crystal 120 &deg;L', 0.76, 0.032, 120],
  ['Crisp Amber Malt', 0.80, 0.032, 28.5],
  ['Crisp Brown Malt', 0.765, 0.03, 65],
  ['Crisp Pale Chocolate Malt', 0.67, 0.03, 225],
  ['Crisp Chocolate Malt', 0.67, 0.03, 450],
  ['Crisp Roasted Barley', 0.65, 0.03, 555],
  ['Weyermann Abbey', 0.75, 0.045, 17.5],
  ['Weyermann Acidulated', 0.805, 0.07, 2.8],
  ['Weyermann Barke Munich', 0.78, 0.04, 7.7],
  ['Weyermann Barke Pilsner', 0.805, 0.05, 1.8],
  ['Weyermann Barke Vienna', .079, 0.055, 3.4],
  ['Weyermann Beech Smoked Barley', 0.77, 0.05, 2.7],
  ['Weyermann Bioland Beech Smoked Barley', 0.77, 0.05, 2.7],
];

var baseMaltList = [
  ['Base Malt Variety'],
  ['Rahr 2-Row', 0.811, 0.046, 1.95],
  ['Rahr 6-Row', 0.79, 0.042, 2.3],  
  ['Rahr Premium Pilsner', 0.805, 0.04, 1.8],
  ['Rahr Pale Ale Malt', 0.79, 0.045, 3.5],
  ['Rahr Old World Pilsner', 0.79, 0.04, 1.8],
  ['Crisp Best Ale Malt', 0.82, 0.035, 3.0],
  ['Crisp Finest Marris Otter', 0.815, 0.035, 3.0],
  ['Crisp Extra Pale Marris Otter', 0.815, 0.045, 1.8],
  ['Crisp Extra Pale Malt', 0.82, 0.045, 1.8],
  ['Crisp EuroPils Malt', 0.815, 0.045, 1.8],
  ['Crisp Clear Choice Malt', 0.815, .040, 2.5],
  ['Crisp Clear Choice Extra Pale Malt', 0.815, .045, 1.8],
  ['Crisp Organic Pale Malt', 0.815, 0.040, 3.3],
  ['Crisp Organic Extra Pale Malt', 0.815, 0.045, 1.8],
  ['Crisp Gleneagles Marris Otter', 0.816, 0.032, 3.5],
  ['Weyermann Abbey', 0.75, 0.045, 17.5],
  ['Weyermann Barke Pilsner', 0.805, 0.05, 1.8],
];

var hopList = [
  ['Hop Variety'],
  ['Ahtanum', .036],
  ['Amarillo', .080],
  ['Azacca', .131],
  ['Cascade', .074],
  ['Calypso', .120],
  ['Centennial', .087],
  ['Chinook', .120],
  ['Citra', .110],
  ['CTZ', .140],
  ['EKG', .052],
  ['Ella', .140],
  ['Equinox', .140],
  ['Eureka', .170],
  ['Lemon Drop', .045],
  ['Mandarina Bavaria', .064],
  ['Magnum', .125],
  ['Mosaic', .122],
  ['Moteuka', .065],
  ['Simcoe', .120],
  ['Sterian Celia', .030],
  ['Sterian Golding', .040],
  ['US Golding', .052],
  ['US Northern Brewer', .058],
  ['US Saaz', .030],
  ['Warrior', .173],
  ['Willamette', .093],
  ['Idaho 7', .100],
  ['Challenger', .075],
]

/*This will be a set by the user and then every function that 
needs to use BBLs or gallons. The variable "gallons" will be 
either true or false. If false then volume is selected as BBLs.
There will be a Gallons and BBLs option and which ever is clicked
will set the variable gallons to true or false.
*/
var barrels = false;
var gallons = false;
var liters = false;
var quarts = false;
var plato = false;
var specificGravity = false;
var pounds = false;
var kilograms = false;
var fahrenheit = false;
var celsius = false;
var twoToOne = false;
var threeToOne = false;
var fourToOne = false;
var stepDoughIn = false;
var stepBetaGluc = false;
var stepProtein = false;
var stepBetaAmy = false;
var stepSach = false;
var stepMashOut = false;
var decoctionDoughIn = false;
var decoctionBetaGluc = false;
var decoctionProtein = false;
var decoctionBetaAmy = false;
var decoctionSach = false;
var decoctionMashOut = false;
var finalizedStepMashSteps = false;
var finalizedDecoctionMashSteps = false;
var stepRaiseSteam = false;
var stepRaiseWater = false;
var mashOutYes = false;
var mashOutNo = false;


var volume=0;                         //desired finished volume to fermenter  
var OG=0;                             //original gravity
var FG=0;                             //final gravity
var ABV=0;
var BHE = 0;                          //this should be a percentage
var evaporationRate = 0;              //this should be a percentage;
var waterGrainRatio = 0;              //this is a decimal and is listed as gallons per pound
var waterWeightBBL = 258;             //this is the weight of 1 BBL of water
var waterWeightGal = 8.323;           //this is the weight of 1 gal of water
var waterWeightLiters = 2.199;        //this is the weight of 1 liter of water
var standardBatchSize = 0;            //this will determine a dilution amount. Only different from volume if specified by the user
var color = 0;

var mashInWater = 0;                  //total mash water needed
var spargeWater = 0;                  //total sparge water needed
var totalWater = 0;                   //grand total water need to hit Kettle full volume
          
var kettleKOVolume = 0;
var kettleKOGravity = 0;
var grainTotal = 0;
var grainTemp  = 73;
var mashHeatCapacity = 0;
var mashWeight = 0;

var wpDilution = 0;                  //this is a set value of water being added to the WP (most likely 0)
var wpSugarAddition = [0,0];         //set by the user specifying sugar add to kettle at KO. Pos 0: gravity in ˚P; Pos 1:volume as gallons*/
var kettleSugarAddition = [0,0];     //set by the user specifying sugar added gravity added to the kettle. Pos 0: gravity in ˚P; Pos 1:volume as gallons*/
var grainBill = [[0,0,0,0,0,0]];       //multi-dimensional array containing the all the malts that comprise the grain bill and the specs for each
var hopBill = [];                    //contain the all the malts that comprise the hop bill
var dryHopBill = [];                 //contain the all the malts that comprise the dry hop bill
var mashSteps = [[0,0]];              

function ADF (uOG, uFG) {
  if(plato) {
    return (uOG-uFG)/uOG;
  } else if (specificGravity) {
    var newOG = sgToPlato(uOG);
    var newFG = sgToPlato(uFG);
    return (newOG-newFG)/newOG;
  }
}

//This will convert Specific Gravity to ˚P
function sgToPlato (SG) {
  return (258.6*(SG-1))/(1+(SG-1)*.87955);
}

//This will convert ˚P to Specific Gravity
function platoToSG (plato) {
  return 1+(plato/(258.6-(plato*.87955)));
}

function bblToGal (BBL) {
 return BBL*31;
}

function galToBBL (gal) {
 return gal/31;
}

function bblToLiters (BBL) {
  return galToLiters(BBL*31);
}

function galToLiters (gal) {
  return gal*3.78541;
}

function literToGal (liters) {
  return liters/3.78541;
}

function literToBBL(liters) {
  return literToGal(liters)/31;
}

function farToCel(fahrenheit) {
  return (fahrenheit-32)*1.8;
}

function celToFar(celsius) {
  return (celcius*1.8)+32;
}

function calcEvapRate(startVol, finalVol) {
  return (startVol-finalVol)/startVol;
}


function calcBrewhouseEfficiency (volume, gravity, maltPercent, maltWeight, maltExtract, maltMoisture) {
  var tempVol = 0;
  var tempGrav = 0;
  if (plato) {
    tempGrav = platoToSG(gravity);
  } else if (specificGravity) {
    tempGrav = gravity;
  } else {}
  
  if(barrels) {
    tempVol = bblToGal(volume);
    return ((maltPercent/100)*tempVol*waterWeightGal*tempGrav*(gravity/100))/(maltExtract*(1-maltMoisture)*maltWeight);
  } else if (gallons) {
    return ((maltPercent/100)*tempVol*waterWeightGal*tempGrav*(gravity/100))/(maltExtract*(1-maltMoisture)*maltWeight);
  } else if (liters) {
    tempVol = literToGal(volume);
    return ((maltPercent/100)*tempVol*waterWeightGal*tempGrav*(gravity/100))/(maltExtract*(1-maltMoisture)*maltWeight);
  } else {}
}


function ABV (uOG,uFG) {
  if (plato) {
    var ogSG = platoToSG(uOG);
    var fgSG = platoToSG(uFG);
    var ABV = ((ogSG-fgSG)*1.04678)/(.0061773047 +.78614031/fgSG);
  } else if (specificGravity) {
    var ABV = ((uOG-uFG)*1.04678)/(.0061773047 +.78614031/uFG);
  } else {}
  return round(ABV*100, 2);
}

function ABVtoOG (uABV,uFG) {
  var ogSG = 0;
  if (plato) {
    var fgSG = platoToSG(uFG);
    ogSG = (uABV/100*(.7923176147/fgSG)+fgSG*1.04678)/1.04678;
    return sgToPlato(ogSG);
  } else if (specificGravity) {
    ogSG = (uABV/100*(.7923176147/uFG)+uFG*1.04678)/1.04678;
    return ogSG;
  } else {}
}

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function mashVol () {
  if(barrels) {
    return galToBBL(waterGrainRatio*grainTotal);
  } else if (gallons) {
    return waterGrainRatio*grainTotal;
  } else if (liters) {
    return galToLiters(waterGrainRatio*grainTotal);
  } else {}
}

function totalMinWater () {
  var full = kettleFullVol();
  if(barrels) {
    return full+galToBBL(grainTotal*0.115)+(full*0.02);
  } else if (gallons) {
    return full+(grainTotal*0.115)+(full*0.02);
  } else if (liters) {
    return full+galToLiters(grainTotal*0.115)+(full*0.02);
  } else {}
}

function spargeVol () {
  return totalMinWater()-mashVol();
}

/*This function will give the dilution amount if the Volume target is bigger than the 
standard batch size*/
function kettleDilution () {
  if (volume-kettleKOVol()===wpDilution) {
    return 0;
  } else {
    return volume-kettleKOVol();
  }
}

function kettleKOVol () {
  //Note sugar addition is using gallons
  if(barrels) {
    return volume-(volume-standardBatchSize)-wpDilution-galToBBL(wpSugarAddition[1]);
  } else if (gallons) {
     return volume-(volume-standardBatchSize)-wpDilution-wpSugarAddition[1];
  } else if (liters) {
     return volume-(volume-standardBatchSize)-wpDilution-galToLiters(wpSugarAddition[1]);
  } else {}
}

function kettleKOGrav () {
  var platoOG = 0;
  if (barrels) {
    if (plato) {
      return (volume*OG-galToBBL(wpSugarAddition[1])*wpSugarAddition[0])/kettleKOVol();
    } else if (specificGravity) {
      platoOG = sgToPlato(OG);
      return (volume*platoOG-galToBBL(wpSugarAddition[1])*wpSugarAddition[0])/kettleKOVol();
    } else {}
    
  } else if (gallons) {
    if (plato) {
      return (volume*OG-wpSugarAddition[1]*wpSugarAddition[0])/kettleKOVol();
    } else if (specificGravity) {
      platoOG = sgToPlato(OG);
      return (volume*platoOG-wpSugarAddition[1]*wpSugarAddition[0])/kettleKOVol();
    } else {}
    
  } else if (liters) {
    if (plato) {
      return (volume*OG-galToLiters(wpSugarAddition[1])*wpSugarAddition[0])/kettleKOVol();
    } else if (specificGravity) {
      platoOG = sgToPlato(OG);
      return (volume*platoOG-galToLiters(wpSugarAddition[1])*wpSugarAddition[0])/kettleKOVol();
    } else {}
    
  } else {}
}

function kettleFullVol() {
  return kettleKOVol()/(1-(evaporationRate/100));
}


function kettleFullGrav () {
  if (barrels) {
    return (kettleKOGrav()-galToBBL(kettleSugarAddition[0]))*(1-(evaporationRate/100));
  } else if (gallons) {
    return (kettleKOGrav()-kettleSugarAddition[0])*(1-(evaporationRate/100));
  } else if (liters) {
    return (kettleKOGrav()-galToLiters(kettleSugarAddition[0]))*(1-(evaporationRate/100));
  } else {}
}

function wortWeight () {     
  var kettleFG = 0; 
  if (barrels) {
    if (plato) {
      kettleFG = platoToSG(kettleFullGrav()); //putting the gravity into Specific Gravity
      return kettleFullVol()*kettleFG*waterWeightBBL;
    } else if (specificGravity) {
      kettleFG = kettleFullGrav(); //keeping the the gravity as Specific Gravity
      return kettleFullVol()*kettleFG*waterWeightBBL;
    } else {}
    
  } else if (gallons) {
    if (plato) {
      kettleFG = platoToSG(kettleFullGrav()); //putting the gravity into Specific Gravity
      return kettleFullVol()*kettleFG*waterWeightGal;
    } else if (specificGravity) {
      kettleFG = kettleFullGrav(); //keeping the the gravity as Specific Gravity
      return kettleFullVol()*kettleFG*waterWeightGal;
    } else {}
    
  } else if (liters) {
    if (plato) {
      kettleFG = platoToSG(kettleFullGrav()); //putting the gravity into Specific Gravity
      return kettleFullVol()*kettleFG*waterWeightLiters;
    } else if (specificGravity) {
      kettleFG = kettleFullGrav(); //keeping the the gravity as Specific Gravity
      return kettleFullVol()*kettleFG*waterWeightLiters;
    } else {}
    
  } else {}
}

function extractNeeded () {       
  var weightWort = wortWeight();
  return weightWort*(kettleFullGrav()/100);
}

function autoCalcGrain() {
  var extract = extractNeeded();
  var wort = wortWeight();
  var sum = 0;
  for(var i=0; i<grainBill.length; i++) {
     sum += grainBill[i][1]*(1-grainBill[i][2])*grainBill[i][4];
  }
  return extract/(BHE*sum);
}


function calcBeerColor () {
  var numerator = 0;
  for (var i=0; i<grainBill.length; i++ ) {
    numerator += grainBill[i][3]*grainBill[i][5];
  }
  if (barrels) { 
    return 1.49*(((numerator)/(volume*31))*0.69);
  } else if (gallons) {
    return 1.49*(((numerator)/(volume))*.69);
  } else if (liters) {
    return 1.49*(((numerator)/(litersToGal(volume)))*.69);
  } else {}
}

function weightOfMashWater() {
  var weight = 0;
  if(barrels) {
    weight = mashInWater*waterWeightBBL;
  } else if (gallons) {
    weight = mashInWater*waterWeightGal;
  } else if (liters) {
    weight = mashInWater*waterWeightLiters;
  } else {}
  return weight;
}

function strikeWaterTemp(restTemp) {
  return ((((0.4*grainTotal)+weightOfMashWater())*restTemp)-(0.4*grainTotal*grainTemp))/weightOfMashWater();
}

function calcMashHeatCapacity () {
  return ((0.4*grainTotal)+weightOfMashWater())/(grainTotal+weightOfMashWater());
}

function stepWaterAdditionVolume (currentTemp, targetTemp) {
  var boilingWaterWeight = (calcMashHeatCapacity()*mashWeight*(targetTemp - currentTemp))/(212-targetTemp);
  if(barrels) {
    return (boilingWaterWeight/waterWeightBBL)/.96;
  } else if (gallons) {
    return (boilingWaterWeight/waterWeightGal)/.96;
  } else if (liters) {
    return (boilingWaterWeight/waterWeightLiters)/.96;
  } else {}
}

function decoctionVolume (currentTemp, targetTemp) {
  if(fahrenheit) {
    return (mashInWater*(targetTemp-currentTemp))/(194-currentTemp);
  } else if (celsius) {
    return (mashInWater*(targetTemp-currentTemp))/(90-currentTemp);
  } else {}
}




function main() {
    $('.BBL').on('click', function () {
      if(!barrels) {
        barrels=true;
        gallons=false;
        liters=false;
        $('.gal').hide();
        $('.liters').hide();
        $('.BBL').animate({left: '4%'}, 1);
        $('.BBL').addClass('active');
      } else {
        barrels=false;
        $('.gal').show();
        $('.liters').show();
        $('.BBL').animate({left: '0%'}, 1);
        $('.BBL').removeClass('active');
      }
    });
  
    $('.gal').on('click', function () {
      if(!gallons) {
        gallons=true;
        barrels=false;
        liters=false;
        $('.BBL').hide();
        $('.liters').hide();
        $('.gal').animate({left: '4%'}, 1);
        $('.gal').addClass('active');
      } else {
        gallons=false;
        $('.BBL').show();
        $('.liters').show();
        $('.gal').animate({left: '0%'}, 1);
        $('.gal').removeClass('active');
      }
    });
  
    $('.liters').on('click', function () {
      if(!liters) {
        liters=true;
        barrels=false;
        gallons=false;
        $('.gal').hide();
        $('.BBL').hide();
        $('.liters').animate({left: '4%'}, 1);
        $('.liters').addClass('active');
      } else {
        liters=false;
        $('.gal').show();
        $('.BBL').show();
        $('.liters').animate({left: '0%'}, 1);
        $('.liters').removeClass('active');
      }
    });
    

  $('.plato').on('click', function () {
    if(!plato) {
      plato=true;
      specificGravity=false;
      $('.specGrav').hide();
      $('.plato').animate({right: '25%'},1);
      $('.plato').addClass('active');
    } else {
      plato=false;
      $('.specGrav').show();
      $('.plato').animate({right: '0%'},1);
      $('.plato').removeClass('active');
    }
  });
  
  $('.specGrav').on('click', function () {
    if(!specificGravity) {
      specificGravity=true;
      plato=false;
      $('.plato').hide();
      $('.specGrav').animate({left: '10%'},1);
      $('.specGrav').addClass('active');
    } else {
      specificGravity=false;
      $('.plato').show();
      $('.specGrav').animate({left: '0%'},1);
      $('.specGrav').removeClass('active');
    }
  });
  
  
  $('.pounds').on('click', function () {
    $(this).addClass('active');
    if(!pounds) {
      pounds = true;
      kilograms = false;
      $('.kilograms').hide();
      $('.pounds').animate({right: '15%'}, 1);
      $('.pounds').addClass('active');
    } else {
      pounds = false;
      $('.kilograms').show();
      $('.pounds').animate({right: '0%'}, 1);
      $('.pounds').removeClass('active');
    }
  });  
  
  $('.kilograms').on('click', function () {
    $(this).addClass('active');
    if(!kilograms) {
      kilograms=true;
      pounds=false;
      $('.pounds').hide();
      $('.kilograms').animate({left: '19%'}, 1);
      $('.kilograms').addClass('active');
    } else {
      kilograms = false;
      $('.pounds').show();
      $('.kilograms').animate({left: '0%'}, 1);
      $('.kilograms').removeClass('active');
    }
  });
  
  $('.fahrenheit').on('click', function () {
    if(!fahrenheit) {
      fahrenheit = true;
      celsius = false;
      $('.celsius').hide();
      $('.fahrenheit').animate({right: '11%'}, 1);
      $('.fahrenheit').addClass('active');
    } else {
      fahrenheit = false;
      $('.celsius').show();
      $('.fahrenheit').animate({right: '0%'}, 1);
      $('.fahrenheit').removeClass('active');
    }
  });
  
  $('.celsius').on('click', function () {
    if(!celsius) {
      celsius = true;
      fahrenheit = false;
      $('.fahrenheit').hide();
      $('.celsius').animate({left: '23%'}, 1);
      $('.celsius').addClass('active');
    } else {
      celsius = false;
      $('.fahrenheit').show();
      $('.celsius').animate({left: '0%'}, 1);
      $('.celsius').removeClass('active');
    }
  });


  $('#volumeValueLabel').hide();
  $('#ABVLabel').hide();
  $('#finalGravityValueLabel').hide();
  $('#ogSGLabel').hide();  
  $('#ADFvalLabel').hide();
  
  $(document).on('change', '.gravity', function() {
    if($('input[name=ABV]').val()!='' && $('input[name=FG]').val()!='') {
      ABV = $('input[name=ABV]').val();
      FG = $('input[name=FG]').val();
      if (plato) {
        OG = round(ABVtoOG(ABV,FG),1);
        $('#ogSG').attr('value',OG);
      } else if (specificGravity) {
        OG = round(ABVtoOG(ABV,FG),3);
        $('#ogSG').attr('value',OG);
      } else {}
        
      kettleKOGravity = round(platoToSG(kettleKOGrav()),3);
      $('#kKOG').text(kettleKOGravity).change();
      
      var ADFcalc = round(ADF(OG, FG) * 100, 2);
      $('#ADFval').attr('value', ADFcalc);
    } else {
      $('#kKOG').text('');
      $('#ogSG').text('--');
      $('#ADFval').text('--');
    }
    
    
    if($('input[name=Volume]').val()!='') {
      volume = $('input[name=Volume]').val();
      standardBatchSize = volume;
      if(barrels) {
        $('#kKOV').text(round(kettleKOVol(),1)).change();
      } else if (gallons) {
        $('#kKOV').text(round(kettleKOVol(),1)).change();
      }else if (liters) {
        $('#kKOV').text(round(kettleKOVol(),1)).change();
      }
      
      $('#volumeValue').addClass('active');
      $('#volumeValueLabel').show(); 
      if(barrels) {
        $('#volumeValueLabel').text('BBL').change();
      } else if (gallons) {
        $('#volumeValueLabel').text('gal').change();
      } else if (liters) {
        $('#volumeValueLabel').text('L').change();
      } else {}
      
    } else {
      $('#kKOV').text('');
      $('#volumeValue').removeClass('active');
      $('#volumeValueLabel').hide(); 
    }
    
    if($('input[name=ABV]').val()!='') {
      if($('input[name=ABV]').val() < 1) {
        alert("Please list the ABV as a whole number. For example, 7.5% ABV should be typed as 7.5");
        $('#ABV').attr("value", "--"); 
      } else {}
      $('#ABV').addClass('active');
      $('#ABVLabel').show(); 
      $('#ABVLabel').text('%').change();
    } else {
      $('#ABV').removeClass('active');
      $('#ABVLabel').hide(); 
      $('#ADFval').attr('value', '');
      $('#ogSG').attr('value','');
      OG=0;
    }
    
    
    if($('input[name=FG]').val() != '') {
      $('#finalGravityValue').addClass('active');
      $('#finalGravityValueLabel').show();
      $('#ogSG').addClass('active');
      $('#ogSGLabel').show();  
      $('#ADFval').addClass('active');
      $('#ADFvalLabel').show();
      $('#ADFvalLabel').text('%').change();
      if(plato) {
        $('#finalGravityValueLabel').text('\u00B0P').change();
        $('#ogSGLabel').text('\u00B0P').change();
      } else if (specificGravity) {
        $('#finalGravityValueLabel').text('SG').change();
        $('#ogSGLabel').text('SG').change();
      } else {}
    } else {
      $('#finalGravityValue').removeClass('active');
      $('#finalGravityValueLabel').hide(); 
      $('#ogSG').removeClass('active');
      $('#ogSGLabel').hide(); 
      $('#ADFval').removeClass('active'); 
      $('#ADFvalLabel').hide();
      $('#ADFval').attr('value', '');
      $('#ogSG').attr('value','');
      OG=0;
    }
  });
  


  $('#volumeValue').on('click', function () {
    if(!barrels && !gallons && !liters) {
      alert("Please select your Volume Units before proceeding");
    } else {}
  });
  
  $('#finalGravityValue').on('click', function () {
    if(!plato && !specificGravity) {
      alert("Please select your Gravity Units before proceeding");
    } else {}
  });
  
  $('#ERLabel').hide();
  $(document).on('change', '#ER', function() {
    if($('input[name=evapRate]').val()!='') {
      evaporationRate=$('input[name=evapRate]').val();
      $('#ER').addClass('active');
      $('#ERLabel').show();
      $('#ERLabel').text('%').change();
      if (barrels) {
        $('#kFV').text(round(kettleFullVol(),1)).change(); 
        $('#kFG').text(round(kettleFullGrav(),1)).change();
        $('#startVol').attr("value", round(kettleFullVol(),0));
        $('#finalVol').attr("value", round(kettleKOVol(),0));
      } else if (gallons) {
        $('#kFV').text(round(kettleFullVol(),1)).change(); 
        $('#kFG').text(round(kettleFullGrav(),1)).change();
      } else if (liters) {
        $('#kFV').text(round(kettleFullVol(),1)).change(); 
        $('#kFG').text(round(kettleFullGrav(),1)).change();
      } else {}
    } else {
      $('#kFG').text('');
      $('#kFV').text('');
    }
  });
  

  $("#modalER").hide();
  
  $(document).on('click', '#modalERLink', function() {
    $("#modalER").show();
    $("#modalER").css("display", "block");
  });
  
  $(document).on('click', '.close', function() {
    $("#modalER").hide();
  });

  $(document).on('change', '.modalERVolumes', function() {
    if($('input[name=startVol]').val()!='' && $('input[name=finalVol]').val()!='') {
      var startVolume = $('input[name=startVol]').val();
      var endVolume = $('input[name=finalVol]').val();
      evaporationRate = calcEvapRate(startVolume, endVolume)*100;
      $('#modalEROutput').text(round(evaporationRate,1)).change();
      $('#ER').attr("value", round(evaporationRate,1)).change();
    } else {
      $('#modalEROutput').text("--");
    }
  });
  
  
  
  $('.twoTo1').on('click', function () {
    if(!twoToOne) {
      twoToOne = true;
      threeToOne = false;
      fourToOne = false;
      waterGrainRatio = .240;
      $('.threeTo1').hide();
      $('.fourTo1').hide();
      $('.twoTo1').animate({left: '24%'}, 1);
      $('.twoTo1').addClass('active');
    } else {
      twoToOne = false;
      $('.threeTo1').show();
      $('.fourTo1').show();
      $('.twoTo1').animate({left: '0%'}, 1);
      $('.twoTo1').removeClass('active');
    }
  });
  
  $('.threeTo1').on('click', function () {
    if(!threeToOne) {
      threeToOne = true;
      fourToOne = false;
      twoToOne = false;
      waterGrainRatio = .359;
      $('.fourTo1').hide();
      $('.twoTo1').hide();
      $('.threeTo1').animate({left: '24%'},1);
      $('.threeTo1').addClass('active');
    } else {
      threeToOne = false;
      $('.fourTo1').show();
      $('.twoTo1').show();
      $('.threeTo1').animate({left: '0%'},1);
      $('.threeTo1').removeClass('active');
    }
  });
  
  $('.fourTo1').on('click', function () {
    if(!fourToOne) {
      fourToOne = true;
      twoToOne = false;
      threeToOne = false;
      waterGrainRatio = .479;
      $('.twoTo1').hide();
      $('.threeTo1').hide();
      $('.fourTo1').animate({left: '24%'}, 1);
      $('.fourTo1').addClass('active');
    } else {
      fourToOne = false;
      $('.twoTo1').show();
      $('.threeTo1').show();
      $('.fourTo1').animate({left: '0%'}, 1);
      $('.fourTo1').removeClass('active');
    }
  }); 

  $('#BHELabel').hide();
  $(document).on('change', '#BHE', function() {  
    if($('input[name=brewHouseEfficiency]').val()!="") {
      BHE=$('input[name=brewHouseEfficiency]').val()/100;
      $('#BHE').addClass('active');
      $('#BHELabel').show();
      $('#BHELabel').text('%').change();
    } else {}
  });
  
  $("#modalBHE").hide();
  
  $(document).on('click', '#modalBHELink', function() {
    $("#modalBHE").show();
    $("#modalBHE").css("display", "block");
  });
  
  $(document).on('click', '.close', function() {
    $("#modalBHE").hide();
  });
 

  $(document).on('change', '.modalBHE', function() {
    if($('select[name=modalMalt]').val()!='' && $('input[name=modalFKG]').val()!='' && $('input[name=modalFKV]').val()!='' && $('input[name=modalBaseMaltUsed').val()!='' && $('input[name=modalBaseMaltPercent').val()!='') {
      var tempBHE = 0;
      for (var i=0; i<baseMaltList.length; i++) {
        if(baseMaltList[i][0]===$('select[name=modalMalt]').val()) {
          var maltExtract = baseMaltList[i][1];
          var maltMoisture = baseMaltList[i][2];
          var volume = $('input[name=modalFKV]').val();
          var gravity = $('input[name=modalFKG]').val();
          var maltPercent = $('input[name=modalBaseMaltPercent').val();
          var maltWeight = $('input[name=modalBaseMaltUsed').val();
          tempBHE = calcBrewhouseEfficiency(volume, gravity, maltPercent, maltWeight, maltExtract, maltMoisture);
        } else {}
      }
      $('#modalBHEOutput').text(round(tempBHE*100,1)).change(); 
      $('#BHE').attr("value", round(tempBHE*100,1)).change();
    } else {}
  });

  
  $(document).on('change', '#maltForm1', function() {
    if($('select[name=malt1]').val()!='') {
      for(var i=0; i<maltList.length; i++ ) {
        if(maltList[i][0]===$('select[name=malt1]').val()) {
          grainBill[0]=maltList[i];
        } else {}
      }
    }
    if($('input[name=percent1]').val()!='') {
      var one = round($('input[name=percent1]').val()/100,2);
      grainBill[0][4]=one;
    } else {}
  });

  $(document).on('change', '#maltForm2', function() {  
    if($('select[name=malt2]').val()!='') {
      for(var i=0; i<maltList.length; i++ ) {
        if(maltList[i][0]===$('select[name=malt2]').val()) {
          if(grainBill.length===1) {
            grainBill.push([0,0,0,0,0,0]);
          } else {}
          grainBill[1]=maltList[i];
        } else {}
      }
    }
    if($('input[name=percent2]').val()!='') {
      var two = round($('input[name=percent2]').val()/100,2);
      grainBill[1][4]=two;
    } else {}
  });

 $(document).on('change', '#maltForm3', function() {  
    if($('select[name=malt3]').val()!='') {
      for(var i=0; i<maltList.length; i++ ) {
        if(maltList[i][0]===$('select[name=malt3]').val()) {
          if(grainBill.length===2) {
            grainBill.push([0,0,0,0,0,0]);
          } else {}
          grainBill[2]=maltList[i];
        } else {}
      }
    }
    if($('input[name=percent3]').val()!='') {
      var three = round($('input[name=percent3]').val()/100,2);
      grainBill[2][4]=three;
    } else {}
  });
  
  $(document).on('change', '#maltForm4', function() { 
    if($('select[name=malt4]').val()!='') {
      for(var i=0; i<maltList.length; i++ ) {
        if(maltList[i][0]===$('select[name=malt4]').val()) {
          if(grainBill.length===3) {
            grainBill.push([0,0,0,0,0,0]);
          } else {}
          grainBill[3]=maltList[i];
        } else {}
      }
    }
    if($('input[name=percent4]').val()!='') {
      var four = round($('input[name=percent4]').val()/100,2);
      grainBill[3][4]=four;
    } else {}
  });
  
  $(document).on('change', '#maltForm5', function() {
    if($('select[name=malt5]').val()!='') {
      for(var i=0; i<maltList.length; i++ ) {
        if(maltList[i][0]===$('select[name=malt5]').val()) {
          if(grainBill.length===4) {
            grainBill.push([0,0,0,0,0,0]);
          } else {}
          grainBill[4]=maltList[i];
        } else {}
      }
    }
    if($('input[name=percent5]').val()!='') {
      var five = round($('input[name=percent5]').val()/100,2);
      grainBill[4][4]=five;
    } else {}
  });
  
  $(document).on('change', '#maltForm6', function() {
    if($('select[name=malt6]').val()!='') {
      for(var i=0; i<maltList.length; i++ ) {
        if(maltList[i][0]===$('select[name=malt6]').val()) {
          if(grainBill.length===5) {
            grainBill.push([0,0,0,0,0,0]);
          } else {}
          grainBill[5]=maltList[i];
        } else {}
      }
    }
    if($('input[name=percent6]').val()!='') {
      var six = round($('input[name=percent6]').val()/100,2);
      grainBill[5][4]=six;
    } else {}
  });
  
  $(document).on('change', '#maltForm7', function() {
    if($('select[name=malt7]').val()!='') {
      for(var i=0; i<maltList.length; i++ ) {
        if(maltList[i][0]===$('select[name=malt7]').val()) {
          if(grainBill.length===6) {
            grainBill.push([0,0,0,0,0,0]);
          } else {}
          grainBill[6]=maltList[i];
        } else {}
      }
    }
    if($('input[name=percent7]').val()!='') {
      var seven = round($('input[name=percent7]').val()/100,2);
      grainBill[6][4]=seven;
    } else {}
  });
  
  $(document).on('change', '#maltForm8', function() {
    if($('select[name=malt8]').val()!='') {
      for(var i=0; i<maltList.length; i++ ) {
        if(maltList[i][0]===$('select[name=malt8]').val()) {
          if(grainBill.length===7) {
            grainBill.push([0,0,0,0,0,0]);
          } else {}
          grainBill[7]=maltList[i];
        } else {}
      }
    }
    if($('input[name=percent8]').val()!='') {
      var eight = round($('input[name=percent8]').val()/100,2);
      grainBill[7][4]=eight;
    } else {}
  });
  
  $(document).on('change', '#maltForm9', function() {
    if($('select[name=malt9]').val()!='') {
      for(var i=0; i<maltList.length; i++ ) {
        if(maltList[i][0]===$('select[name=malt9]').val()) {
          if(grainBill.length===8) {
            grainBill.push([0,0,0,0,0,0]);
          } else {}
          grainBill[8]=maltList[i];
        } else {}
      }
    }
    if($('input[name=percent9]').val()!='') {
      var nine = round($('input[name=percent9]').val()/100,2);
      grainBill[8][4]=nine;
    } else {}
  });
    
  $(document).on('change', '#maltForm10', function() {
    if($('select[name=malt10]').val()!='') {
      for(var i=0; i<maltList.length; i++ ) {
        if(maltList[i][0]===$('select[name=malt10]').val()) {
          if(grainBill.length===9) {
            grainBill.push([0,0,0,0,0,0]);
          } else {}
          grainBill[9]=maltList[i];
        } else {}
      }
    }
    if($('input[name=percent10]').val()!='') {
      var ten = round($('input[name=percent10]').val()/100,2);
      grainBill[9][4]=ten;
    } else {}
  });
  
  $(document).on('change', '#maltForm11', function() {
    if($('select[name=malt11]').val()!='') {
      for(var i=0; i<maltList.length; i++ ) {
        if(maltList[i][0]===$('select[name=malt11]').val()) {
          if(grainBill.length===10) {
            grainBill.push([0,0,0,0,0,0]);
          } else {}
          grainBill[10]=maltList[i];
        } else {}
      }
    }
    if($('input[name=percent11]').val()!='') {
      var eleven = round($('input[name=percent11]').val()/100,2);
      grainBill[10][4]=eleven;
    } else {}
  });
  
  $(document).on('change', '#maltForm12', function() {
    if($('select[name=malt12]').val()!='') {
      for(var i=0; i<maltList.length; i++ ) {
        if(maltList[i][0]===$('select[name=malt12]').val()) {
          if(grainBill.length===11) {
            grainBill.push([0,0,0,0,0,0]);
          } else {}
          grainBill[11]=maltList[i];
        } else {}
      }
    }
    if($('input[name=percent12]').val()!='') {
      var twelve = round($('input[name=percent12]').val()/100,2);
      grainBill[11][4]=twelve;
    } else {}
  });

  $(document).on('change', '#maltForm13', function() {
    if($('select[name=malt13]').val()!='') {
      for(var i=0; i<maltList.length; i++ ) {
        if(maltList[i][0]===$('select[name=malt13]').val()) {
          if(grainBill.length===12) {
            grainBill.push([0,0,0,0,0,0]);
          } else {}
          grainBill[12]=maltList[i];
        } else {}
      }
    }
    if($('input[name=percent13]').val()!='') {
      var thirteen = round($('input[name=percent13]').val()/100,2);
      grainBill[12][4]=thirteen;
    } else {}
  });
  
  $(document).on('change', '#maltForm14', function() {
    if($('select[name=malt14]').val()!='') {
      for(var i=0; i<maltList.length; i++ ) {
        if(maltList[i][0]===$('select[name=malt14]').val()) {
          if(grainBill.length===13) {
            grainBill.push([0,0,0,0,0,0]);
          } else {}
          grainBill[13]=maltList[i];
        } else {}
      }
    }
    if($('input[name=percent14]').val()!='') {
      var fourteen = round($('input[name=percent14]').val()/100,2);
      grainBill[13][4]=fourteen;
    } else {}
  });

  
  for(var i=0; i < maltList.length; i++) {
    var value = maltList[i][0];
    $('#malt1Options').append('<option>'+value+'</option>');
    $('#malt2Options').append('<option>'+value+'</option>');
    $('#malt3Options').append('<option>'+value+'</option>');
    $('#malt4Options').append('<option>'+value+'</option>');
    $('#malt5Options').append('<option>'+value+'</option>');
    $('#malt6Options').append('<option>'+value+'</option>');
    $('#malt7Options').append('<option>'+value+'</option>');
    $('#malt8Options').append('<option>'+value+'</option>');
    $('#malt9Options').append('<option>'+value+'</option>');
    $('#malt10Options').append('<option>'+value+'</option>');
    $('#malt11Options').append('<option>'+value+'</option>');
    $('#malt12Options').append('<option>'+value+'</option>');
    $('#malt13Options').append('<option>'+value+'</option>');
    $('#malt14Options').append('<option>'+value+'</option>');
  }
  
  for(var i=0; i < baseMaltList.length; i++) {
    var value = baseMaltList[i][0];
      $('#modalMaltOptions').append('<option>'+value+'</option>');
  }

  $('#maltForm2').hide();
  $('#maltForm3').hide();
  $('#maltForm4').hide();
  $('#maltForm5').hide();
  $('#maltForm6').hide();
  $('#maltForm7').hide();
  $('#maltForm8').hide();
  $('#maltForm9').hide();
  $('#maltForm10').hide();
  $('#maltForm11').hide();
  $('#maltForm12').hide();
  $('#maltForm13').hide();
  $('#maltForm14').hide();
  var maltCounter=2;
  
  $('#maltAdd').on('click', function () {
    if(maltCounter===2) {
      $('#maltForm2').show();
      maltCounter++;
    } else if (maltCounter===3) {
      $('#maltForm3').show();
      maltCounter++;
    } else if (maltCounter===4) {
      $('#maltForm4').show();
      maltCounter++;
    } else if (maltCounter===5) {
      $('#maltForm5').show();
      maltCounter++;
    } else if (maltCounter===6) {
      $('#maltForm6').show();
      maltCounter++;
    } else if (maltCounter===7) {
      $('#maltForm7').show();
      maltCounter++;
    } else if (maltCounter===8) {
      $('#maltForm8').show();
      maltCounter++;
    } else if (maltCounter===9) {
      $('#maltForm9').show();
      maltCounter++;
    } else if (maltCounter===10) {
      $('#maltForm10').show();
      maltCounter++;
    } else if (maltCounter===11) {
      $('#maltForm11').show();
      maltCounter++;
    } else if (maltCounter===12) {
      $('#maltForm12').show();
      maltCounter++;
    } else if (maltCounter===13) {
      $('#maltForm13').show();
      maltCounter++;
    } else if (maltCounter===14) {
      $('#maltForm14').show();
      maltCounter++;
    } else {
      alert("14 malts is overkill. Please keep your grain bill to 14 malts or less.");
    }
  });
  
  $('#maltRemove').on('click', function () {
    if(maltCounter===15) {
      $('#maltForm14').hide();
      maltCounter--;
    } else if (maltCounter===14) {
      $('#maltForm13').hide();
      maltCounter--;
    } else if (maltCounter===13) {
      $('#maltForm12').hide();
      maltCounter--;
    } else if (maltCounter===12) {
      $('#maltForm11').hide();
      maltCounter--;
    } else if (maltCounter===11) {
      $('#maltForm10').hide();
      maltCounter--;
    } else if (maltCounter===10) {
      $('#maltForm9').hide();
      maltCounter--;
    } else if (maltCounter===9) {
      $('#maltForm8').hide();
      maltCounter--;
    } else if (maltCounter===8) {
      $('#maltForm7').hide();
      maltCounter--;
    } else if (maltCounter===7) {
      $('#maltForm6').hide();
      maltCounter--;
    } else if (maltCounter===6) {
      $('#maltForm5').hide();
      maltCounter--;
    } else if (maltCounter===5) {
      $('#maltForm4').hide();
      maltCounter--;
    } else if (maltCounter===4) {
      $('#maltForm3').hide();
      maltCounter--;
    } else if (maltCounter===3) {
      $('#maltForm2').hide();
    } else {}
  });

  
  for(var i=0; i < hopList.length; i++) {
    var value = hopList[i][0];
    $('#hopOneSelect').append('<option>'+value+'</option>');
   /* $('#hopTwoSelect').append('<option>'+value+'</option>');
    $('#hopThreeSelect').append('<option>'+value+'</option>');
    $('#hopFourSelect').append('<option>'+value+'</option>');
    $('#hopFiveSelect').append('<option>'+value+'</option>');
    $('#hopSixSelect').append('<option>'+value+'</option>');
    $('#hopSevenSelect').append('<option>'+value+'</option>');
    $('#hopEightSelect').append('<option>'+value+'</option>');
    $('#hopNineSelect').append('<option>'+value+'</option>');
    $('#hopTenSelect').append('<option>'+value+'</option>');
    $('#hopElevenSelect').append('<option>'+value+'</option>');
    $('#hopTwelveSelect').append('<option>'+value+'</option>');
    $('#hopThirteenSelect').append('<option>'+value+'</option>');
    $('#hopFourteenSelect').append('<option>'+value+'</option>');*/
  }
  
  
  $(document).on('click', '#calcGrainBill', function() {
    var grainPercents = 0;
    for(var i=0; i<grainBill.length; i++) {
      grainPercents += grainBill[i][4];
    }
    if(grainPercents<1) {
      alert('Your grain bill is not complete. Please make sure all percentages add up to 100%, and then click "Calculate Grain Bill"');
    } else if (grainPercents>1) {
      alert('Your grain bill percentages are greater than 100%. Please correct and then click "Calculate Grain Bill"');
    } else {
      grainTotal = round(autoCalcGrain(),0);
      $('#gBT').text(grainTotal).change();
      
      if($('select[name=malt1]').val()!='') {
        var individualOne = round(grainBill[0][4]*grainTotal,0);
        grainBill[0][5]=individualOne;
        $('#grainWeight1').text(individualOne).change();
      } else {}
    
      if($('select[name=malt2]').val()!='') {
        var individualTwo = round(grainBill[1][4]*grainTotal,0);
        grainBill[1][5]=individualTwo;
        $('#grainWeight2').text(individualTwo).change();
      } else {}

      if($('select[name=malt3]').val()!='') {
        var individualThree = round(grainBill[2][4]*grainTotal,0);
        grainBill[2][5]=individualThree;
        $('#grainWeight3').text(individualThree).change();
      } else {}
    
      if($('select[name=malt4]').val()!='') {
        var individualFour = round(grainBill[3][4]*grainTotal,0);
        grainBill[3][5]=individualFour;
        $('#grainWeight4').text(individualFour).change();
      } else {}
    
      if($('select[name=malt5]').val()!='') {
        var individualFive = round(grainBill[4][4]*grainTotal,0);
        grainBill[4][5]=individualFive;
        $('#grainWeight5').text(individualFive).change();
      } else {}
    
      if($('select[name=malt6]').val()!='') {
        var individualSix = round(grainBill[5][4]*grainTotal,0);
        grainBill[5][5]=individualSix;
        $('#grainWeight6').text(individualSix).change();
      } else {}
    
      if($('select[name=malt7]').val()!='') {
        var individualSeven = round(grainBill[6][4]*grainTotal,0);
        grainBill[6][5]=individualSeven;
        $('#grainWeight7').text(individualSeven).change();
      } else {}
    
      if($('select[name=malt8]').val()!='') {
        var individualEight = round(grainBill[7][4]*grainTotal,0);
        grainBill[7][5]=individualEight;
        $('#grainWeight8').text(individualEight).change();
      } else {}
    
      if($('select[name=malt9]').val()!='') {
        var individualNine = round(grainBill[8][4]*grainTotal,0);
        grainBill[8][5]=individualNine;
        $('#grainWeight9').text(individualNine).change();
      } else {}
    
      if($('select[name=malt10]').val()!='') {
        var individualTen = round(grainBill[9][4]*grainTotal,0);
        grainBill[9][5]=individualTen;
        $('#grainWeightTen').text(individualTen).change();
      } else {}
    
      if($('select[name=malt11]').val()!='') {
        var individualEleven = round(grainBill[10][4]*grainTotal,0);
        grainBill[10][5]=individualEleven;
        $('#grainWeight11').text(individualEleven).change();
      } else {}
    
      if($('select[name=malt12]').val()!='') {
        var individualTwelve = round*(grainBill[11][4]*grainTotal,0);
        grainBill[11][5]=individualTwelve;
        $('#grainWeight12').text(individualTwelve).change();
      } else {}
    
      if($('select[name=malt13]').val()!='') {
        var individualThirteen = round(grainBill[12][4]*grainTotal,0);
        grainBill[12][5]=individualThirteen;
        $('#grainWeight13').text(individualThirteen).change();
      } else {}
    
      if($('select[name=malt14]').val()!='') {
        var individualFourteen = round(grainBill[13][4]*grainTotal,0);
        grainBill[13][5]=individualFourteen;
        $('#grainWeight14').text(individualFourteen).change();
      } else {}
      
      color = round(calcBeerColor(),1);
      $('#colorVal').text(color).change();
    
      mashInWater = mashVol();
      totalWater = totalMinWater();
      spargeWater = spargeVol();
      mashHeatCapacity = calcMashHeatCapacity();
      mashWeight = grainTotal + weightOfMashWater();
      
      if(mashInWater != 0) {
        $('#infusionMashInVol').text(round(mashInWater,0)).change();
        
        $('#stepMashInVolValue').addClass('active');
        $('#stepMashInVolValue').attr('value', round(mashInWater,0));
        $('#stepMashInVolValueLabel').show();
        
        $('#decoctionMashInVolValue').addClass('active');
        $('#decoctionMashInVolValue').attr('value', round(mashInWater,0));
        $('#decoctionMashInVolValueLabel').show();
        
        if(barrels) {
          $('#stepMashInVolValueLabel').text('BBL').change();
          $('#decoctionMashInVolValueLabel').text('BBL').change();
        } else if (gallons) {
          $('#stepMashInVolValueLabel').text('gal').change();
          $('#decoctionMashInVolValueLabel').text('gal').change();
        } else if (liters) {
          $('#stepMashInVolValueLabel').text('L').change();
          $('#decoctionMashInVolValueLabel').text('L').change();
        } else {}
      } else {}
    }
  });
  
  $('#infusionProfile').hide();
  $('#stepProfile').hide();
  $('#decoctionProfile').hide();
  
  var infusionOpen = false;
  var stepOpen = false;
  var decoctionOpen = false;
  
  $('#titleInfusionMash').on('click', function () {
    $('#stepProfile').hide();
    $('#decoctionProfile').hide();
    $(this).toggleClass('active');
    
    if($('#titleStepMash').hasClass('active') === true) {
      $('#titleStepMash').removeClass('active');
    } else {}
    
    if($('#titleDecoctionMash').hasClass('active') === true) {
      $('#titleDecoctionMash').removeClass('active');
    } else {}

    $('#infusionProfile').slideToggle(400);
    
  });
  
  $('#titleStepMash').on('click', function () {
    $('#infusionProfile').hide();
    $('#decoctionProfile').hide();
    $(this).toggleClass('active');
    mashSteps=[[0,0]];
   
    if($('#titleInfusionMash').hasClass('active') === true) {
      $('#titleInfusionMash').removeClass('active');
    } else {}
    
    if($('#titleDecoctionMash').hasClass('active') === true) {
      $('#titleDecoctionMash').removeClass('active');
    } else {} 
    
    $('#stepProfile').slideToggle(400);
    
  });
  
  $('#titleDecoctionMash').on('click', function () {
    $('#infusionProfile').hide();
    $('#stepProfile').hide();
    $(this).toggleClass('active');
    mashSteps=[[0,0]];
    
    if($('#titleStepMash').hasClass('active') === true) {
      $('#titleStepMash').removeClass('active');
    } else {}

    if($('#titleInfusionMash').hasClass('active') === true) {
      $('#titleInfusionMash').removeClass('active');
    } else {}
    
    $('#decoctionProfile').slideToggle(400);
  });
  
  $(document).on('change', '#infusionSachRestTemp', function () {
    var restTempSach = $('input[name=infusionSachRestTemp]').val();
    $('#infusionStrikeWaterVal').text(round(strikeWaterTemp(restTempSach),0)).change();
  });
  
  $('#mashOutYes').on('click', function() {
    if(!mashOutYes) {
      mashOutYes = true;
      $('#mashOutNo').hide();
      $(this).addClass('active');
      $(this).animate({left: "2em"}, 1);
      $('#mashOutValue').attr("value", "172").change();
    } else {
      mashOutYes = false;
      $('#mashOutNo').show();
      $(this).removeClass('active');
      $(this).animate({left: '0em'}, 1);
      $('#mashOutValue').attr("value", "Temperature").change();
    }
  });
  
  $('#mashOutNo').on('click', function() {
    if(!mashOutNo) {  
      mashOutNo = true;
      $('#mashOutYes').hide()
      $('#mashOutValue').hide();
      $(this).addClass('active');
      $(this).animate({left: "2em"}, 1);
      $('#mashOutValue').attr("value", "--").change();
    } else {
      mashOutNo = false;
      $('#mashOutYes').show();
      $('#mashOutValue').show();
      $(this).animate({left: '0em'}, 1);
      $(this).removeClass('active');
      $('#mashOutValue').attr("value", "Temperature").change();
    }
  });
  
  $(document).on('click', '.unitBoxTemp', function() {
    if(fahrenheit) {
      $('#stepDoughInTemp, #decoctionDoughInTemp').text("95 \u00B0F").change();
      $('#stepDoughInTemp, #decoctionDoughInTemp').css("margin-top", "-.5em");
      
      $('#stepBetaGlucTemp, #decoctionBetaGlucTemp').text("113 - 122 \u00B0F").change();
      $('#stepBetaGlucTemp, #decoctionBetaGlucTemp').css("margin-top", "-.5em");
      
      $('#stepProteinTemp, #decoctionProteinTemp').text("130 - 140 \u00B0F").change;
      $('#stepProteinTemp, #decoctionProteinTemp').css("margin-top", "-.5em");
      
      $('#stepBetaAmyTemp, #decoctionBetaAmyTemp').text("140 - 149 \u00B0F").change();
      $('#stepBetaAmyTemp, #decoctionBetaAmyTemp').css("margin-top", "-.5em");
      
      $('#stepSachTemp, #decoctionSachTemp').text("145 - 164 \u00B0F").change();
      $('#stepSachTemp, #decoctionSachTemp').css("margin-top", "-.5em");
      
      $('#stepMashOutTemp, #decoctionMashOutTemp').text("172 \u00B0F").change();
      $('#stepMashOutTemp, #decoctionMashOutTemp').css("margin-top", "-.5em");
    } else if(celsius) {
      $('#stepDoughInTemp, #decoctionDoughInTemp').text("35 \u00B0C").change();
      $('#stepDoughInTemp, #decoctionDoughInTemp').css("margin-top", "-.5em");
      
      $('#stepBetaGlucTemp, #decoctionBetaGlucTemp').text("45 - 50 \u00B0C").change();
      $('#stepBetaGlucTemp, #decoctionBetaGlucTemp').css("margin-top", "-.5em");
      
      $('#stepProteinTemp, #decoctionProteinTemp').text("54 - 60 \u00B0C").change;
      $('#stepProteinTemp, #decoctionProteinTemp').css("margin-top", "-.5em");
      
      $('#stepBetaAmyTemp, #decoctionSachTemp').text("60 - 65 \u00B0C").change();
      $('#stepBetaAmyTemp, #decoctionSachTemp').css("margin-top", "-.5em");
      
      $('#stepSachTemp, #decoctionSachTemp').text("63 - 73 \u00B0C").change();
      $('#stepSachTemp, #decoctionSachTemp').css("margin-top", "-.5em");
      
      $('#stepMashOutTemp, #decoctionMashOutTemp').text("78 \u00B0C").change();
      $('#stepMashOutTemp, #decoctionMashOutTemp').css("margin-top", "-.5em");
    } else {}
  });
  
  
  
  
  
  $('#stepMashClose').hide();
  $('#stepRaises').hide();
  $('.stepTemps').hide();
  $('.stepTimes').hide();
  
  $('#stepMashIn').hide();
  
  $('#stepRaiseVolumesTitle').hide();
  $('#stepRaiseVolumesSubtitle').hide();
  
  $('#stepFromDoughIn').hide();
  $('#stepFromBetaGluc').hide();
  $('#stepFromProtein').hide();
  $('#stepFromBetaAmy').hide();
  $('#stepFromStepSach').hide();
  $('#stepDividerOne').hide();
  $('#stepDividerTwo').hide();
    
  var stepMashCounter = 0;
  
  $('#stepDoughInDiv').on('click', function () {
    if(!finalizedStepMashSteps) {
      if(!stepDoughIn) {
        stepDoughIn = true;
        $('#stepDoughInDiv').addClass('active');
        stepMashCounter++;
      } else {
        stepDoughIn = false;
        $('#stepDoughInDiv').removeClass('active');
        stepMashCounter--;
      }
    } else {}
  });
  
  $('#stepBetaGlucDiv').on('click', function() {
    if(!finalizedStepMashSteps) {
      if(!stepBetaGluc) {
        stepBetaGluc = true;
        $('#stepBetaGlucDiv').addClass('active');
        stepMashCounter++;
      } else {
        stepBetaGluc = false;
        $('#stepBetaGlucDiv').removeClass('active');
        stepMashCounter--;
      }
    } else {}
  });
  
  $('#stepProteinDiv').on('click', function() {
    if(!finalizedStepMashSteps) {  
      if(!stepProtein) {
        stepProtein = true;
        $('#stepProteinDiv').addClass('active');
        stepMashCounter++;
      } else {
        stepProtein = false;
        $('#stepProteinDiv').removeClass('active');
        stepMashCounter--;
      }
    } else {}
  });
  
  $('#stepBetaAmyDiv').on('click', function() {
    if(!finalizedStepMashSteps) {
      if(!stepBetaAmy) {
        stepBetaAmy = true;
        $('#stepBetaAmyDiv').addClass('active');
        stepMashCounter++;
      } else {
        stepBetaAmy = false;
        $('#stepBetaAmyDiv').removeClass('active');
        stepMashCounter--;
      }
    } else {}
  });
  
  $('#stepSachDiv').on('click', function () {
    if(!finalizedStepMashSteps) {  
      if(!stepSach) {
        stepSach = true;
        $('#stepSachDiv').addClass('active');
        stepMashCounter++;
      } else {
        stepSach = false;
        $('#stepSachDiv').removeClass('active');
        stepMashCounter--;
      }
    } else {}
  });
  
  $('#stepMashOutDiv').on('click', function() {
    if(!finalizedStepMashSteps) {
      if(!stepMashOut) {
        stepMashOut = true;
        $('#stepMashOutDiv').addClass('active');
        stepMashCounter++;
      } else {
        stepMashOut = false;
        $('#stepMashOutDiv').removeClass('active');
        stepMashCounter--;
      }
    } else {}
  });
  
  $('#stepMashButton').on('click', function() {
    finalizedStepMashSteps = true;
    if(!stepDoughIn && !stepBetaGluc && !stepProtein && !stepBetaAmy && !stepSach && !stepMashOut) {
      alert('You must select your mash steps before clicking this button. Please make your selections, and then click the button');
      finalizedStepMashSteps = false;
    } else if(!stepSach) {
      alert('You must at least select the Sacchrification step. If you only want to mash with a Sacchrification step, please select Infusion Mash and proceed with that mash profile.');
      finalizedStepMashSteps = false;
      $('#stepDoughInDiv').removeClass('active');
      stepDoughIn = false;
      $('#stepBetaGlucDiv').removeClass('active');
      stepBetaGluc = false;
      $('#stepProteinDiv').removeClass('active');
      stepProtein = false;
      $('#stepBetaAmyDiv').removeClass('active');
      stepBetaAmy = false;
      $('#stepMashOutDiv').removeClass('active');
      stepMashOut = false;
      stepMashCounter = 0;
    } else if(!stepDoughIn && !stepBetaGluc && !stepProtein && !stepBetaAmy && stepSach && !stepMashOut){
      alert('If you only want to use the Sacchrification Step, please click on Infusion Mash and proceed with that mash profile.');
      finalizedStepMashSteps = false;
      stepSach = false;
      $('#stepSachDiv').removeClass('active');
    } else {}
    
    var stepDivWidth = 0;
    if(stepMashCounter ===2) {
      stepDivWidth = 49.3/stepMashCounter;
    }else if(stepMashCounter ===3){
      stepDivWidth = 49/stepMashCounter;
    }else if(stepMashCounter ===4){
      stepDivWidth = 48.6/stepMashCounter;
    }else if(stepMashCounter ===5){
      stepDivWidth = 48.35/stepMashCounter;
    }else{
      stepDivWidth = 48/stepMashCounter;
    }

    if(finalizedStepMashSteps) {
      $('#stepMashButton').hide();
      $('#stepProfileTitle').text('Enter In Your Step Temperatures').change();
      $('#stepMashClose').show();
      $('#stepRaises').show();
      $('#stepMashIn').show();
      $('#stepDividerOne').show();
    } else {}
    
    if(stepSach) {
      $('#stepSach').css('width', stepDivWidth+'em');
      $('#stepSachSetpoint').css('width', stepDivWidth/2.5+'em');
      $('#stepSachTime').css('width', stepDivWidth/2.5+'em');
      $('#stepSachDiv').removeClass('active');
      $('#stepSachTemp').hide();
      $('#stepSachSetpoint').show();
      $('#stepSachTime').show();
      mashSteps[0][0] = 'Sach Rest';
      mashSteps.push([0,0]);
      if(stepDoughIn) {
        $('#stepDoughIn').css('width', stepDivWidth+'em');
        $('#stepDoughInSetpoint').css('width', stepDivWidth/2.5+'em');
        $('#stepDoughInTime').css('width', stepDivWidth/2.5+'em');
        $('#stepDoughInDiv').removeClass('active');
        $('#stepDoughInTemp').hide();
        $('#stepDoughInSetpoint').show();
        $('#stepDoughInTime').show();
        mashSteps.push([0,0]);
        mashSteps[1][0] = 'Dough In';
      } else { 
        $('#stepDoughIn').hide();
      }
    
      if(stepBetaGluc) {
        $('#stepBetaGluc').css('width', stepDivWidth+'em');
        $('#stepBetaGlucSetpoint').css('width', stepDivWidth/2.5+'em');
        $('#stepBetaGlucTime').css('width', stepDivWidth/2.5+'em');
        $('#stepBetaGlucDiv').removeClass('active');
        $('#stepBetaGlucTemp').hide();
        $('#stepBetaGlucSetpoint').show();
        $('#stepBetaGlucTime').show();
        if(mashSteps.length === 2) {
          mashSteps[1][0] = 'Beta Gluc';
          mashSteps.push([0,0]);
        } else if (mashSteps.length === 3) {
          mashSteps[2][0] = 'Beta Gluc';
          mashSteps.push([0,0]);
        } else{}
      } else {
        $('#stepBetaGluc').hide();
      }
    
      if(stepProtein) {
        $('#stepProtein').css('width', stepDivWidth+'em');
        $('#stepProteinSetpoint').css('width', stepDivWidth/2.5+'em');
        $('#stepProteinTime').css('width', stepDivWidth/2.5+'em');
        $('#stepProteinDiv').removeClass('active');
        $('#stepProteinTemp').hide();
        $('#stepProteinSetpoint').show();
        $('#stepProteinTime').show();
        if(mashSteps.length === 2) {
          mashSteps[1][0] = 'Protein';
          mashSteps.push([0,0]);
        } else if(mashSteps.length === 3) {
          mashSteps[2][0] = 'Protein';
          mashSteps.push([0,0]);
        } else if(mashSteps.length === 4) {
          mashSteps[3][0] = 'Protein';
          mashSteps.push([0,0]);
        } else {}
      } else {
        $('#stepProtein').hide();
      }
    
      if(stepBetaAmy) {
        $('#stepBetaAmy').css('width', stepDivWidth+'em');
        $('#stepBetaAmySetpoint').css('width', stepDivWidth/2.5+'em');
        $('#stepBetaAmyTime').css('width', stepDivWidth/2.5+'em');
        $('#stepBetaAmyDiv').removeClass('active');
        $('#stepBetaAmyTemp').hide();
        $('#stepBetaAmySetpoint').show();
        $('#stepBetaAmyTime').show();
        if(mashSteps.length === 2) {
          mashSteps[1][0] = 'Beta Amy';
          mashSteps.push([0,0]);
        } else if (mashSteps.length === 3) {
          mashSteps[2][0] = 'Beta Amy';
          mashSteps.push([0,0]);
        } else if (mashSteps.length === 4) {
          mashSteps[3][0] = 'Beta Amy';
          mashSteps.push([0,0]);
        } else if (mashSteps.length === 5) {
          mashSteps[4][0] = 'Beta Amy';
          mashSteps.push([0,0]);
        } else {}
      } else {
        $('#stepBetaAmy').hide();
      }
    
      if(stepMashOut) {
        $('#stepMashOut').css('width', stepDivWidth+'em');
        $('#stepMashOutSetpoint').css('width', stepDivWidth/2.5+'em');
        $('#stepMashOutTime').css('width', stepDivWidth/2.5+'em');
        $('#stepMashOutDiv').removeClass('active');
        $('#stepMashOutTemp').hide();
        $('#stepMashOutSetpoint').show();
        $('#stepMashOutTime').show();
        if(mashSteps.length === 2) {
          mashSteps[1][0] = "Mash Out";
        } else if (mashSteps.length === 3) {
          mashSteps[2][0] = "Mash Out";
        } else if (mashSteps.length === 4) {
          mashSteps[3][0] = "Mash Out";
        } else if (mashSteps.length === 5) {
          mashSteps[4][0] = "Mash Out";
        } else if (mashSteps.length === 6) {
          mashSteps[5][0] = "Mash Out";
        } else {}
      } else {
        $('#stepMashOut').hide();
      }
    } else {}
  });
  
  /*
  $('#stepRaisesSteam').on('click', function() {
    if(!stepRaiseSteam) {
      stepRaiseSteam = true;
      $('#stepRaisesWater').hide();
      $('#stepRaisesSteam').addClass('active');
      $('#stepRaisesSteam').animate({left: "1em"}, 1);
    } else {
      stepRaiseSteam = false;
      $('#stepRaisesWater').show();
      $('#stepRaisesSteam').removeClass('active');
      $('#stepRaisesSteam').animate({left: "0em"}, 1);
    } 
  });
  

  $('#stepRaisesWater').on('click', function() {
    if(!stepRaiseWater) {
      stepRaiseWater = true;
      $('#stepRaisesSteam').hide();
      $('#stepRaisesWater').addClass('active');
      $('#stepRaisesWater').animate({left: "1em"}, 1);
      $('#stepRaiseVolumesTitle').show();
      $('#stepRaiseVolumesSubtitle').show();
      $('#stepDividerTwo').show();
      
      var stepVolumeWidth = 0;
      if(stepMashCounter === 2) {
        stepVolumeWidth = 49.3/stepMashCounter;
      }else if(stepMashCounter === 3){
        stepVolumeWidth = 48/stepMashCounter;
      }else if(stepMashCounter === 4){
        stepVolumeWidth = 48.6/stepMashCounter;
      }else if(stepMashCounter === 5){
        stepVolumeWidth = 48.35/stepMashCounter;
      }else{
        stepVolumeWidth = 48/stepMashCounter;
      }
      
      if(stepDoughIn) {
        $('#stepFromDoughIn').show();
        $('#stepFromDoughIn').css('width', stepVolumeWidth + 'em');
      } else {}
      
      if(stepBetaGluc) {
        $('#stepFromBetaGluc').show();
        $('#stepFromBetaGluc').css('width', stepVolumeWidth + 'em');
      } else{}
      
      if(stepProtein) {
        $('#stepFromProtein').show();
        $('#stepFromProtein').css('width', stepVolumeWidth + 'em');
      } else {}

      if(stepBetaAmy) {
        $('#stepFromBetaAmy').show();
        $('#stepFromBetaAmy').css('width', stepVolumeWidth + 'em');
      } else {}

      if(stepMashOut) {
        $('#stepFromStepSach').show();
        $('#stepFromStepSach').css('width', stepVolumeWidth + 'em');
      } else {}

    } else {
      stepRaiseWater = false;
      $('#stepRaisesSteam').show();
      $('#stepRaisesWater').removeClass('active');
      $('#stepRaisesWater').animate({left: "0em"}, 1);
      $('#stepFromDoughIn').css('width', '');
      $('#stepFromBetaGluc').css('width', '');
      $('#stepFromProtein').css('width', '');
      $('#stepFromBetaAmy').css('width', '');
      $('#stepFromStepSach').css('width','');
      $('#stepRaiseVolumesTitle').hide();
      $('#stepRaiseVolumesSubtitle').hide();
      $('#stepFromDoughIn').hide();
      $('#stepFromBetaGluc').hide();
      $('#stepFromProtein').hide();
      $('#stepFromBetaAmy').hide();
      $('#stepFromStepSach').hide();
      $('#stepDividerTwo').hide();
    } 
  }); */


  
  $('#stepMashClose').on('click', function() {
    finalizedStepMashSteps = false;
    stepMashCounter=0;
    $('#stepProfileTitle').text('Select Your Mash Steps').change();
    $('#stepMashIn').hide();
    $('#stepDividerOne').hide();
    $('#stepDividerTwo').hide();
    $('#stepRaiseVolumesTitle').hide();
    $('#stepRaiseVolumesSubtitle').hide();
    $('#stepStrikeTempValue').attr('value', '');
    mashSteps = [[0,0]];
    
    stepDoughIn = false;
    $('#stepDoughIn').show();
    $('#stepDoughIn').css('width', '');
    $('#stepDoughInTemp').show();
    $('#stepDoughInSetpoint').hide();
    $('#stepDoughInSetpoint').val('');
    $('#stepDoughInSetpointLabel').hide();
    $('#stepDoughInSetpointLabel').val('');
    $('#stepDoughInTime').hide();
    $('#stepDoughInTime').val('');
    $('#stepDoughInTimeLabel').hide();
    $('#stepDoughInTimeLabel').val('');
    
    stepBetaGluc = false;
    $('#stepBetaGluc').show();
    $('#stepBetaGluc').css('width', '');
    $('#stepBetaGlucTemp').show();
    $('#stepBetaGlucSetpoint').hide();
    $('#stepBetaGlucSetpoint').val('');
    $('#stepBetaGlucSetpointLabel').hide();
    $('#stepBetaGlucSetpointLabel').val('');
    $('#stepBetaGlucTime').hide();
    $('#stepBetaGlucTime').val('');
    $('#stepBetaGlucTimeLabel').hide();
    $('#stepBetaGlucTimeLabel').val('');
    
    stepProtein = false;
    $('#stepProtein').show();
    $('#stepProtein').css('width', '');
    $('#stepProteinTemp').show();
    $('#stepProteinSetpoint').hide();
    $('#stepProteinSetpoint').val('');
    $('#stepProteinSetpointLabel').hide();
    $('#stepProteinSetpointLabel').val('');
    $('#stepProteinTime').hide();
    $('#stepProteinTime').val('');
    $('#stepProteinTimeLabel').hide();
    $('#stepProteinTimeLabel').val('');
    
    stepBetaAmy = false;
    $('#stepBetaAmy').show();
    $('#stepBetaAmy').css('width', '');
    $('#stepBetaAmyTemp').show();
    $('#stepBetaAmySetpoint').hide();
    $('#stepBetaAmySetpoint').val('');
    $('#stepBetaAmySetpointLabel').hide();
    $('#stepBetaAmySetpointLabel').val('');
    $('#stepBetaAmyTime').hide();
    $('#stepBetaAmyTime').val('');
    $('#stepBetaAmyTimeLabel').hide();
    $('#stepBetaAmyTimeLabel').val('');
    
    stepSach = false;
    $('#stepSach').show();
    $('#stepSach').css('width', '');
    $('#stepSachTemp').show();
    $('#stepSachSetpoint').hide();
    $('#stepSachSetpoint').val('');
    $('#stepSachSetpointLabel').hide();
    $('#stepSachSetpointLabel').val('');
    $('#stepSachTime').hide();
    $('#stepSachTime').val('');
    $('#stepSachTimeLabel').hide();
    $('#stepSachTimeLabel').val('');
    
    stepMashOut = false;
    $('#stepMashOut').show();
    $('#stepMashOut').css('width', '');
    $('#stepMashOutTemp').show();
    $('#stepMashOutSetpoint').hide();
    $('#stepMashOutSetpoint').val('');
    $('#stepMashOutSetpointLabel').hide();
    $('#stepMashOutSetpointLabel').val('');
    $('#stepMashOutTime').hide();
    $('#stepMashOutTime').val('');
    $('#stepMashOutTimeLabel').hide();
    $('#stepMashOutTimeLabel').val('');
    
    $('#stepMashClose').hide();
    $('#stepRaises').hide();
    $('#stepMashButton').show();
    
    $('#stepFromDoughIn').hide();
    $('#stepFromBetaGluc').hide();
    $('#stepFromProtein').hide();
    $('#stepFromBetaAmy').hide();
    $('#stepFromStepSach').hide();
    
    if(stepRaiseSteam) {
      stepRaiseSteam = false;
      $('#stepRaisesWater').show();
      $('#stepRaisesSteam').removeClass('active');
      $('#stepRaisesSteam').animate({left: "0em"}, 1);
      $('#stepFromDoughIn').css('width', '');
      $('#stepFromBetaGluc').css('width', '');
      $('#stepFromProtein').css('width', '');
      $('#stepFromBetaAmy').css('width', '');
      $('#stepFromStepSach').css('width','');
    } else {}
    
    if(stepRaiseWater) {
      stepRaiseWater = false;
      $('#stepRaisesSteam').show();
      $('#stepRaisesWater').removeClass('active');
      $('#stepRaisesWater').animate({left: "0em"}, 1);
      $('#stepFromDoughIn').css('width', '');
      $('#stepFromBetaGluc').css('width', '');
      $('#stepFromProtein').css('width', '');
      $('#stepFromBetaAmy').css('width', '');
      $('#stepFromStepSach').css('width','');
    } else {}
  });
  
$('#stepDoughInSetpointLabel').hide();
$(document).on('change', '#stepDoughInSetpoint', function() {
  if($('input[name=stepDoughInSetpoint]').val() != '') {
    mashSteps[1][1] = $('input[name=stepDoughInSetpoint]').val();
    $('#stepStrikeTempValue').text(round(strikeWaterTemp(mashSteps[1][1]),0)).change();
    
    $('#stepDoughInSetpoint').addClass('active');
    $('#stepDoughInSetpointLabel').show(); 
    
    $('#stepStrikeTempValue').attr('value', round(strikeWaterTemp(mashSteps[1][1]),0));
    $('#stepStrikeTempValue').addClass('active');
    $('#stepStrikeTempValueLabel').show();
      
    if(fahrenheit) {
      $('#stepDoughInSetpointLabel').text('\u00B0F').change();
      $('#stepStrikeTempValueLabel').text('\u00B0F').change();
    } else if (celsius) {
      $('#stepDoughInSetpointLabel').text('\u00B0C').change();
      $('#stepStrikeTempValueLabel').text('\u00B0C').change();
    } else {}
  } else {
    $('#stepDoughInSetpoint').removeClass('active');
    $('#stepDoughInSetpointLabel').hide(); 
  }
});

$('#stepDoughInTimeLabel').hide();
$(document).on('change', '#stepDoughInTime', function() {
  if($('input[name=stepDoughInTime]').val() != '') {
    $('#stepDoughInTime').addClass('active');
    $('#stepDoughInTimeLabel').show(); 
    $('#stepDoughInTimeLabel').text('min').change();
  } else {
    $('#stepDoughInTime').removeClass('active');
    $('#stepDoughInTimeLabel').hide(); 
  }
});


$('#stepBetaGlucSetpointLabel').hide(); 
$(document).on('change', '#stepBetaGlucSetpoint', function() {
  if($('input[name=stepBetaGlucSetpoint]').val() != '') {
    $('#stepBetaGlucSetpoint').addClass('active');
    $('#stepBetaGlucSetpointLabel').show(); 
    if(fahrenheit) {
      $('#stepBetaGlucSetpointLabel').text('\u00B0F').change();
    } else if (celsius) {
      $('#stepBetaGlucSetpointLabel').text('\u00B0C').change();
    } else {}
    
    var betaGlucCounter = 0;
    for(var i=0; i<mashSteps.length; i++) {
      if(mashSteps[i][0] === 'Beta Gluc') {
        break;
      } else {betaGlucCounter++;}
    }
    if(betaGlucCounter === 1) {
      mashSteps[1][1] = $('input[name=stepBetaGlucSetpoint]').val();
      $('#stepStrikeTempValue').attr('value', round(strikeWaterTemp(mashSteps[1][1]),0));
      $('#stepStrikeTempValue').addClass('active');
      $('#stepStrikeTempValueLabel').show();
      if(fahrenheit) {
        $('#stepStrikeTempValueLabel').text('\u00B0F').change();
      } else if (celsius) {
        $('#stepStrikeTempValueLabel').text('\u00B0C').change();
      } else {}
      
    } else if(betaGlucCounter === 2) {
      mashSteps[2][1] = $('input[name=stepBetaGlucSetpoint]').val();
      alert(mashSteps[2][1]);
      $('#stepFromDoughInValue').text(round(stepWaterAdditionVolume(mashSteps[1][1], mashSteps[2][1]), 0)).change();
    } else {}  
  } else {
    $('#stepBetaGlucSetpoint').removeClass('active');
    $('#stepBetaGlucSetpointLabel').hide(); 
  }
});

$('#stepBetaGlucTimeLabel').hide();
$(document).on('change', '#stepBetaGlucTime', function() {
  if($('input[name=stepBetaGlucTime]').val() != '') {
    $('#stepBetaGlucTime').addClass('active');
    $('#stepBetaGlucTimeLabel').show(); 
    $('#stepBetaGlucTimeLabel').text('min').change();
  } else {
    $('#stepBetaGlucTime').removeClass('active');
    $('#stepBetaGlucTimeLabel').hide(); 
  }
});



$('#stepProteinSetpointLabel').hide(); 
$(document).on('change', '#stepProteinSetpoint', function() {
  if($('input[name=stepProteinSetpoint]').val() != '') {
    $('#stepProteinSetpoint').addClass('active');
    $('#stepProteinSetpointLabel').show(); 
    if(fahrenheit) {
      $('#stepProteinSetpointLabel').text('\u00B0F').change();
    } else if (celsius) {
      $('#stepProteinSetpointLabel').text('\u00B0C').change();
    } else {}
    
    var proteinCounter = 0;
    for(var i=0; i<mashSteps.length; i++) {
      if(mashSteps[i][0] === 'Protein') {
        break; 
      } else {proteinCounter++;}
    }
    
    if(proteinCounter===1) {
      mashSteps[1][1] = $('input[name=stepProteinSetpoint]').val();
      alert(mashSteps[1][1]);
      $('#stepStrikeTempValue').attr('value', round(strikeWaterTemp(mashSteps[1][1]),0));
      $('#stepStrikeTempValue').addClass('active');
      $('#stepStrikeTempValueLabel').show();
      if(fahrenheit) {
        $('#stepStrikeTempValueLabel').text('\u00B0F').change();
      } else if (celsius) {
        $('#stepStrikeTempValueLabel').text('\u00B0C').change();
      } else {}
    } else if(proteinCounter===2) {
      mashSteps[2][1] = $('input[name=stepProteinSetpoint]').val();    
      if(mashSteps[1][0] === 'Dough In') {
        $('#stepFromDoughInValue').text(round(stepWaterAdditionVolume(mashSteps[1][1], mashSteps[2][1]), 0)).change();
      } else if (mashSteps[1][0] === 'Beta Gluc') {
         $('#stepFromBetaGlucValue').text(round(stepWaterAdditionVolume(mashSteps[1][1], mashSteps[2][1]), 0)).change();
      } else {}  
    } else if(proteinCounter===3) {
      mashSteps[3][1] = $('input[name=stepProteinSetpoint]').val();
      $('#stepFromBetaGlucValue').text(round(stepWaterAdditionVolume(mashSteps[2][1], mashSteps[3][1]), 0)).change();
    } else {}
  } else {
    $('#stepProteinSetpoint').removeClass('active');
    $('#stepProteinSetpointLabel').hide(); 
  }
});

$('#stepProteinTimeLabel').hide();
$(document).on('change', '#stepProteinTime', function() {
  if($('input[name=stepProteinTime]').val() != '') {
    $('#stepProteinTime').addClass('active');
    $('#stepProteinTimeLabel').show(); 
    $('#stepProteinTimeLabel').text('min').change();
  } else {
    $('#stepProteinTime').removeClass('active');
    $('#stepProteinTimeLabel').hide(); 
  }
});



$('#stepBetaAmySetpointLabel').hide(); 
$(document).on('change', '#stepBetaAmySetpoint', function() {
  if($('input[name=stepBetaAmySetpoint]').val() != '') {
    $('#stepBetaAmySetpoint').addClass('active');
    $('#stepBetaAmySetpointLabel').show(); 
    if(fahrenheit) {
      $('#stepBetaAmySetpointLabel').text('\u00B0F').change();
    } else if (celsius) {
      $('#stepBetaAmySetpointLabel').text('\u00B0C').change();
    } else {}
    
    var betaAmyCounter = 0;
    for(var i=0; i<mashSteps.length; i++) {
      if(mashSteps[i][0] === 'Beta Amy') {
        break; 
      } else {betaAmyCounter++;}
    }
    
    if(betaAmyCounter === 1) {
      mashSteps[1][1] = $('input[name=stepBetaAmySetpoint]').val();
      $('#stepStrikeTempValue').attr('value', round(strikeWaterTemp(mashSteps[1][1]),0));
      $('#stepStrikeTempValue').addClass('active');
      $('#stepStrikeTempValueLabel').show();
      if(fahrenheit) {
        $('#stepStrikeTempValueLabel').text('\u00B0F').change();
      } else if (celsius) {
        $('#stepStrikeTempValueLabel').text('\u00B0C').change();
      } else {}
    } else if(betaAmyCounter === 2) {
      mashSteps[2][1] = $('input[name=stepBetaAmySetpoint]').val();
      if (mashSteps[1][0] === 'Dough In') {
        $('#stepFromDoughInValue').text(round(stepWaterAdditionVolume(mashSteps[1][1], mashSteps[2][1]), 0)).change();
      } else if (mashSteps[1][0] === 'Beta Gluc') {
        $('#stepFromBetaGlucValue').text(round(stepWaterAdditionVolume(mashSteps[1][1], mashSteps[2][1]), 0)).change();
      } else if (mashSteps[1][0] === 'Protein') {
        $('#stepFromProteinValue').text(round(stepWaterAdditionVolume(mashSteps[1][1], mashSteps[2][1]), 0)).change();
      } else {}
    } else if(betaAmyCounter === 3) {
      mashSteps[3][1] = $('input[name=stepBetaAmySetpoint]').val();
      if (mashSteps[2][0] === 'Beta Gluc') {
        $('#stepFromBetaGlucValue').text(round(stepWaterAdditionVolume(mashSteps[2][1], mashSteps[3][1]), 0)).change();
      } else if (mashSteps[2][0] === 'Protein') {
        $('#stepFromProteinValue').text(round(stepWaterAdditionVolume(mashSteps[2][1], mashSteps[3][1]), 0)).change();
      } else {}
    } else if(betaAmyCounter === 4) {
      mashSteps[4][1] = $('input[name=stepBetaAmySetpoint]').val();
      $('#stepFromProteinValue').text(round(stepWaterAdditionVolume(mashSteps[3][1], mashSteps[4][1]), 0)).change();
    } else {}
  } else {
    $('#decoctionBetaAmySetpoint').removeClass('active');
    $('#decoctionBetaAmySetpointLabel').hide(); 
  }
});

$('#stepBetaAmyTimeLabel').hide();
$(document).on('change', '#stepBetaAmyTime', function() {
  if($('input[name=stepBetaAmyTime]').val() != '') {
    $('#stepBetaAmyTime').addClass('active');
    $('#stepBetaAmyTimeLabel').show(); 
    $('#stepBetaAmyTimeLabel').text('min').change();
  } else {
    $('#stepBetaAmyTime').removeClass('active');
    $('#stepBetaAmyTimeLabel').hide(); 
  }
});


$('#stepSachSetpointLabel').hide(); 
$(document).on('change', '#stepSachSetpoint', function() {
  if($('input[name=stepSachSetpoint]').val() != '') {
    $('#stepSachSetpoint').addClass('active');
    $('#stepSachSetpointLabel').show(); 
    if(fahrenheit) {
      $('#stepSachSetpointLabel').text('\u00B0F').change();
    } else if (celsius) {
      $('#stepSachSetpointLabel').text('\u00B0C').change();
    } else {}
    mashSteps[0][1] = $('input[name=stepSachSetpoint]').val();
    var position = mashSteps.length-2;
    if(position === 0) {
      position = mashSteps.length-1;
    } else {}
    var targetStep = mashSteps[position][0];
    if(targetStep === 'Dough In') {
      $('#stepFromDoughInValue').text(round(stepWaterAdditionVolume(mashSteps[position][1], mashSteps[0][1]), 0)).change();
    } else if (targetStep === 'Beta Gluc') {
      $('#stepFromBetaGlucValue').text(round(stepWaterAdditionVolume(mashSteps[position][1], mashSteps[0][1]), 0)).change();
    } else if (targetStep === 'Protein') {
      $('#stepFromProteinValue').text(round(stepWaterAdditionVolume(mashSteps[position][1], mashSteps[0][1]), 0)).change();
    } else if (targetStep === 'Beta Amy') {
      $('#stepFromBetaAmyValue').text(round(stepWaterAdditionVolume(mashSteps[position][1], mashSteps[0][1]), 0)).change();
    } else{}
  } else {
    $('#stepSachSetpoint').removeClass('active');
    $('#stepSachSetpointLabel').hide(); 
  }
});

$('#stepSachTimeLabel').hide();
$(document).on('change', '#stepSachTime', function() {
  if($('input[name=stepSachTime]').val() != '') {
    $('#stepSachTime').addClass('active');
    $('#stepSachTimeLabel').show(); 
    $('#stepSachTimeLabel').text('min').change();
  } else {
    $('#stepSachTime').removeClass('active');
    $('#stepSachTimeLabel').hide(); 
  }
});



$('#stepMashOutSetpointLabel').hide(); 
$(document).on('change', '#stepMashOutSetpoint', function() {
  if($('input[name=stepMashOutSetpoint]').val() != '') {
    $('#stepMashOutSetpoint').addClass('active');
    $('#stepMashOutSetpointLabel').show(); 
    if(fahrenheit) {
      $('#stepMashOutSetpointLabel').text('\u00B0F').change();
    } else if (celsius) {
      $('#stepMashOutSetpointLabel').text('\u00B0C').change();
    } else {}
    
    var stepMashOutCounter = 0;
    for(var i=0; i<mashSteps.length; i++) {
      if(mashSteps[i][0] === 'Mash Out') {
        break; 
      } else {stepMashOutCounter++;}
    }
    if(stepMashOutCounter === 1) {
      mashSteps[1][1] = $('input[name=stepMashOutSetpoint]').val();
      $('#stepFromStepSachValue').text(round(stepWaterAdditionVolume(mashSteps[0][1], mashSteps[1][1]), 0)).change();
    } else if(stepMashOutCounter === 2) {
      mashSteps[2][1] = $('input[name=stepMashOutSetpoint]').val();
      $('#stepFromStepSachValue').text(round(stepWaterAdditionVolume(mashSteps[0][1], mashSteps[2][1]), 0)).change();
    } else if(stepMashOutCounter === 3) {
      mashSteps[3][1] = $('input[name=stepMashOutSetpoint]').val();
      $('#stepFromStepSachValue').text(round(stepWaterAdditionVolume(mashSteps[0][1], mashSteps[3][1]), 0)).change();
    } else if(stepMashOutCounter === 4) {
      mashSteps[4][1] = $('input[name=stepMashOutSetpoint]').val();
      $('#stepFromStepSachValue').text(round(stepWaterAdditionVolume(mashSteps[0][1], mashSteps[4][1]), 0)).change();
    } else if(stepMashOutCounter === 5) {
      mashSteps[5][1] = $('input[name=stepMashOutSetpoint]').val();
      $('#stepFromStepSachValue').text(round(stepWaterAdditionVolume(mashSteps[0][1], mashSteps[5][1]), 0)).change();
    } else {}
  } else {
    $('#stepMashOutSetpoint').removeClass('active');
    $('#stepMashOutSetpointLabel').hide(); 
  }
});

$('#stepMashOutTimeLabel').hide();
$(document).on('change', '#stepMashOutTime', function() {
  if($('input[name=stepMashOutTime]').val() != '') {
    $('#stepMashOutTime').addClass('active');
    $('#stepMashOutTimeLabel').show(); 
    $('#stepMashOutTimeLabel').text('min').change();
  } else {
    $('#stepMashOutTime').removeClass('active');
    $('#stepMashOutTimeLabel').hide(); 
  }
});






  $('#decoctionMashClose').hide();
  $('.decoctionStepTemps').hide();
  $('.decoctionStepTimes').hide();
  
  $('#decoctionMashIn').hide();
  $('#decoctionDividerOne').hide();
  $('#decoctionDividerTwo').hide();
  
  $('#decoctionRaiseVolumesTitle').hide();
  
  $('#decoctionStepFromDoughIn').hide();
  $('#decoctionStepFromBetaGluc').hide();
  $('#decoctionStepFromProtein').hide();
  $('#decoctionStepFromBetaAmy').hide();
  $('#decoctionStepFromStepSach').hide();
  $('#decoctionStepDividerOne').hide();
  $('#decoctionStepDividerTwo').hide();

  var decoctionMashCounter = 0;
  
  $('#decoctionDoughInDiv').on('click', function () {
    if(!finalizedDecoctionMashSteps) {
      if(!decoctionDoughIn) {
        decoctionDoughIn = true;
        $('#decoctionDoughInDiv').addClass('active');
        decoctionMashCounter++;
      } else {
        decoctionDoughIn = false;
        $('#decoctionDoughInDiv').removeClass('active');
        decoctionMashCounter--;
      }
    } else {}
  });

  $('#decoctionBetaGlucDiv').on('click', function() {
    if(!finalizedDecoctionMashSteps) {
      if(!decoctionBetaGluc) {
        decoctionBetaGluc = true;
        $('#decoctionBetaGlucDiv').addClass('active');
        decoctionMashCounter++;
      } else {
        decoctionBetaGluc = false;
        $('#decoctionBetaGlucDiv').removeClass('active');
        decoctionMashCounter--;
      }
    } else {}
  });
  
  $('#decoctionProteinDiv').on('click', function() {
    if(!finalizedDecoctionMashSteps) {  
      if(!decoctionProtein) {
        decoctionProtein = true;
        $('#decoctionProteinDiv').addClass('active');
        decoctionMashCounter++;
      } else {
        decoctionProtein = false;
        $('#decoctionProteinDiv').removeClass('active');
        decoctionMashCounter--;
      }
    } else {}
  });
  
  $('#decoctionBetaAmyDiv').on('click', function() {
    if(!finalizedDecoctionMashSteps) {
      if(!decoctionBetaAmy) {
        decoctionBetaAmy = true;
        $('#decoctionBetaAmyDiv').addClass('active');
        decoctionMashCounter++;
      } else {
        decoctionBetaAmy = false;
        $('#decoctionBetaAmyDiv').removeClass('active');
        decoctionMashCounter--;
      }
    } else {}
  });
  
  $('#decoctionSachDiv').on('click', function() {
    if(!finalizedDecoctionMashSteps) {  
      if(!decoctionSach) {
        decoctionSach = true;
        $('#decoctionSachDiv').addClass('active');
        decoctionMashCounter++;
      } else {
        decoctionSach = false;
        $('#decoctionSachDiv').removeClass('active');
        decoctionMashCounter--;
      }
    } else {}
  });
  
  $('#decoctionMashOutDiv').on('click', function() {
    if(!finalizedDecoctionMashSteps) {
      if(!decoctionMashOut) {
        decoctionMashOut = true;
        $('#decoctionMashOutDiv').addClass('active');
        decoctionMashCounter++;
      } else {
        decoctionMashOut = false;
        $('#decoctionMashOutDiv').removeClass('active');
        decoctionMashCounter--;
      }
    } else {}
  });
  
  $('#decoctionStrikeTempValueLabel').hide();
  $('#decoctionMashInVolValueLabel').hide();
  
  $('#decoctionMashButton').on('click', function() {
    finalizedDecoctionMashSteps = true;
    if(!decoctionDoughIn && !decoctionBetaGluc && !decoctionProtein && !decoctionBetaAmy && !decoctionSach && !decoctionMashOut) {
      alert('You must select your mash steps before clicking this button. Please make your selections, and then click the button');
      finalizedDecoctionMashSteps = false;
    } else if(!decoctionSach) {
      alert('You must at least select the Sacchrification step. If you only want to mash with a Sacchrification step, please select Infusion Mash and proceed with that mash profile.');
      finalizedDecoctionMashSteps = false;
      $('#decoctionDoughInDiv').removeClass('active');
      decoctionDoughIn = false;
      $('#decoctionBetaGlucDiv').removeClass('active');
      decoctionBetaGluc = false;
      $('#decoctionProteinDiv').removeClass('active');
      decoctionProtein = false;
      $('#decoctionBetaAmyDiv').removeClass('active');
      decoctionBetaAmy = false;
      $('#decoctionMashOutDiv').removeClass('active');
      decoctionMashOut = false;
      decoctionMashCounter = 0;
    } else if (!decoctionDoughIn && !decoctionBetaGluc && !decoctionProtein && !decoctionBetaAmy && decoctionSach && !decoctionMashOut) {
      alert('If you only want to use the Sacchrification Step, please click on Infusion Mash and proceed with that mash profile.');
      finalizedDecoctionMashSteps = false;
      decoctionSach = false;
      $('#decoctionSachDiv').removeClass('active');
    } else {}
    
    if(decoctionMashCounter > 3) {
      alert('Decoction Mashes can be conducted in one, two, or three rests (referred to as Single, Double, and Triple Decoction Mash regimes). If you do more than 3 decoctions, you run the risk of denaturing your enzymes and not producing a fermentable wort.');
      finalizedDecoctionMashSteps = false;
      $('#decoctionDoughInDiv').removeClass('active');
      decoctionDoughIn = false;
      $('#decoctionBetaGlucDiv').removeClass('active');
      decoctionBetaGluc = false;
      $('#decoctionProteinDiv').removeClass('active');
      decoctionProtein = false;
      $('#decoctionBetaAmyDiv').removeClass('active');
      decoctionBetaAmy = false;
      $('#decoctionSachDiv').removeClass('active');
      decoctionSach = false;
      $('#decoctionMashOutDiv').removeClass('active');
      decoctionMashOut = false;
      decoctionMashCounter = 0;
    } else {}
    
    var decoctionDivWidth = 0;
    if(decoctionMashCounter ===2) {
      decoctionDivWidth = 49.1/decoctionMashCounter;
    }else if(decoctionMashCounter ===3){
      decoctionDivWidth = 48.8/decoctionMashCounter;
    }else if(decoctionMashCounter ===4){
      decoctionDivWidth = 48.5/decoctionMashCounter;
    }else if(decoctionMashCounter ===5){
      decoctionDivWidth = 48.15/decoctionMashCounter;
    }else{
      decoctionDivWidth = 47.85/decoctionMashCounter;
    }
    
    if(finalizedDecoctionMashSteps) {
      $('#decoctionMashButton').hide();
      $('#decoctionProfileTitle').text('Enter In Your Step Temperatures').change();
      $('#decoctionMashClose').show();
      $('#decoctionMashIn').show();
      $('#decoctionDividerOne').show();
      $('#decoctionRaiseVolumesTitle').show();
      $('#decoctionDividerTwo').show();
    } else {}
    
    if(decoctionSach) {
      $('#decoctionSach').css('width', decoctionDivWidth+'em');
      $('#decoctionSachSetpoint').css('width', decoctionDivWidth/2.5+'em');
      $('#decoctionSachTime').css('width', decoctionDivWidth/2.5+'em');
      $('#decoctionSachDiv').removeClass('active');
      $('#decoctionSachTemp').hide();
      $('#decoctionSachSetpoint').show();
      $('#decoctionSachTime').show();
      mashSteps[0][0] = 'Sach Rest';
      mashSteps.push([0,0]);
      if(decoctionDoughIn) {
        $('#decoctionDoughIn').css('width', decoctionDivWidth+'em');
        $('#decoctionDoughInSetpoint').css('width', decoctionDivWidth/2.5+'em');
        $('#decoctionDoughInTime').css('width', decoctionDivWidth/2.5+'em');
        $('#decoctionDoughInDiv').removeClass('active');
        $('#decoctionDoughInTemp').hide();
        $('#decoctionDoughInSetpoint').show();
        $('#decoctionDoughInTime').show();
        mashSteps.push([0,0]);
        mashSteps[1][0] = 'Dough In';
      } else{
        $('#decoctionDoughIn').hide();
      }
      
      if(decoctionBetaGluc) {
        $('#decoctionBetaGluc').css('width', decoctionDivWidth+'em');
        $('#decoctionBetaGlucSetpoint').css('width', decoctionDivWidth/2.5+'em');
        $('#decoctionBetaGlucTime').css('width', decoctionDivWidth/2.5+'em');
        $('#decoctionBetaGlucDiv').removeClass('active');
        $('#decoctionBetaGlucTemp').hide();
        $('#decoctionBetaGlucSetpoint').show();
        $('#decoctionBetaGlucTime').show();
        if(mashSteps.length === 2) {
          mashSteps[1][0] = 'Beta Gluc';
          mashSteps.push([0,0]);
        } else if (mashSteps.length === 3) {
          mashSteps[2][0] = 'Beta Gluc';
          mashSteps.push([0,0]);
        } else{}
      } else {
        $('#decoctionBetaGluc').hide();
      }
      
      if(decoctionProtein) {
        $('#decoctionProtein').css('width', decoctionDivWidth+'em');
        $('#decoctionProteinSetpoint').css('width', decoctionDivWidth/2.5+'em');
        $('#decoctionProteinTime').css('width', decoctionDivWidth/2.5+'em');
        $('#decoctionProteinDiv').removeClass('active');
        $('#decoctionProteinTemp').hide();
        $('#decoctionProteinSetpoint').show();
        $('#decoctionProteinTime').show();
        if(mashSteps.length === 2) {
          mashSteps[1][0] = 'Protein';
          mashSteps.push([0,0]);
        } else if(mashSteps.length === 3) {
          mashSteps[2][0] = 'Protein';
          mashSteps.push([0,0]);
        } else if(mashSteps.length === 4) {
          mashSteps[3][0] = 'Protein';
          mashSteps.push([0,0]);
        } else {}
      } else {
        $('#decoctionProtein').hide();
      }
      
      if(decoctionBetaAmy) {
        $('#decoctionBetaAmy').css('width', decoctionDivWidth+'em');
        $('#decoctionBetaAmySetpoint').css('width', decoctionDivWidth/2.5+'em');
        $('#decoctionBetaAmyTime').css('width', decoctionDivWidth/2.5+'em');
        $('#decoctionBetaAmyDiv').removeClass('active');
        $('#decoctionBetaAmyTemp').hide();
        $('#decoctionBetaAmySetpoint').show();
        $('#decoctionBetaAmyTime').show();
        if(mashSteps.length === 2) {
          mashSteps[1][0] = 'Beta Amy';
          mashSteps.push([0,0]);
        } else if (mashSteps.length === 3) {
          mashSteps[2][0] = 'Beta Amy';
          mashSteps.push([0,0]);
        } else if (mashSteps.length === 4) {
          mashSteps[3][0] = 'Beta Amy';
          mashSteps.push([0,0]);
        } else if (mashSteps.length === 5) {
          mashSteps[4][0] = 'Beta Amy';
          mashSteps.push([0,0]);
        } else {}
      } else {
        $('#decoctionBetaAmy').hide();
      }
      
      if(decoctionMashOut) {
        $('#decoctionMashOut').css('width', decoctionDivWidth+'em');
        $('#decoctionMashOutSetpoint').css('width', decoctionDivWidth/2.5+'em');
        $('#decoctionMashOutTime').css('width', decoctionDivWidth/2.5+'em');
        $('#decoctionMashOutDiv').removeClass('active');
        $('#decoctionMashOutTemp').hide();
        $('#decoctionMashOutSetpoint').show();
        $('#decoctionMashOutTime').show();
        if(mashSteps.length === 2) {
          mashSteps[1][0] = "Mash Out";
        } else if (mashSteps.length === 3) {
          mashSteps[2][0] = "Mash Out";
        } else if (mashSteps.length === 4) {
          mashSteps[3][0] = "Mash Out";
        } else if (mashSteps.length === 5) {
          mashSteps[4][0] = "Mash Out";
        } else if (mashSteps.length === 6) {
          mashSteps[5][0] = "Mash Out";
        } else {}
      } else {
        $('#decoctionMashOut').hide();
      }
    } else {}

      
    var decoctionVolumeWidth = 0;
    if(decoctionMashCounter === 2) {
      decoctionVolumeWidth = 49.3/decoctionMashCounter;
    }else if(decoctionMashCounter === 3){
      decoctionVolumeWidth = 48/decoctionMashCounter;
    }else if(decoctionMashCounter === 4){
      decoctionVolumeWidth = 48.6/decoctionMashCounter;
    }else if(stepMashCounter === 5){
      decoctionVolumeWidth = 48.35/decoctionMashCounter;
    }else{
      decoctionVolumeWidth = 48/decoctionMashCounter;
    }
      
    if(decoctionDoughIn) {
      $('#decoctionStepFromDoughIn').show();
      $('#decoctionStepFromDoughIn').css('width', decoctionVolumeWidth + 'em');
    } else {}
      
    if(decoctionBetaGluc) {
      $('#decoctionStepFromBetaGluc').show();
      $('#decoctionStepFromBetaGluc').css('width', decoctionVolumeWidth + 'em');
    } else{}

    if(decoctionProtein) {
      $('#decoctionStepFromProtein').show();
      $('#decoctionStepFromProtein').css('width', decoctionVolumeWidth + 'em');
    } else {}
    
    if(decoctionBetaAmy) {
      $('#decoctionStepFromBetaAmy').show();
      $('#decoctionStepFromBetaAmy').css('width', decoctionVolumeWidth + 'em');
    } else {}
    
    if(decoctionMashOut) {
      $('#decoctionStepFromStepSach').show();
      $('#decoctionStepFromStepSach').css('width', decoctionVolumeWidth + 'em');
    } else {}
  });
  
$('#decoctionDoughInSetpointLabel').hide();
$('#decoctionDoughInTimeLabel').hide();

$('#decoctionBetaGlucSetpointLabel').hide();
$('#decoctionBetaGlucTimeLabel').hide(); 

$('#decoctionProteinSetpointLabel').hide();
$('#decoctionProteinTimeLabel').hide();

$('#decoctionBetaAmySetpointLabel').hide(); 
$('#decoctionBetaAmyTimeLabel').hide(); 

$('#decoctionSachSetpointLabel').hide();
$('#decoctionSachTimeLabel').hide();

$('#decoctionMashOutSetpointLabel').hide();
$('#decoctionMashOutTimeLabel').hide(); 

$('#decoctionStepFromDoughInValueLabel').hide();

$(document).on('change', '#decoctionDoughInSetpoint', function() {
  if($('input[name=decoctionDoughInSetpoint]').val != '') {
    $('#decoctionDoughInSetpoint').addClass('active');
    $('#decoctionDoughInSetpointLabel').show(); 
    
    mashSteps[1][1] = $('input[name=decoctionDoughInSetpoint]').val();
    $('#decoctionStrikeTempValue').attr('value', round(strikeWaterTemp(mashSteps[1][1]),0));
    $('#decoctionStrikeTempValue').addClass('active');
    $('#decoctionStrikeTempValueLabel').show();
    
    if(fahrenheit) {
      $('#decoctionDoughInSetpointLabel').text('\u00B0F').change();
      $('#decoctionStrikeTempValueLabel').text('\u00B0F').change();
    } else if (celsius) {
      $('#decoctionDoughInSetpointLabel').text('\u00B0C').change();
      $('#decoctionStrikeTempValueLabel').text('\u00B0C').change();
    } else {}
  } else {
    $('#decoctionDoughInSetpoint').removeClass('active');
    $('#decoctionDoughInSetpointLabel').hide(); 
  }
});


$(document).on('change', '#decoctionDoughInTime', function() {
  if($('input[name=decoctionDoughInTime]').val != '') {
    $('#decoctionDoughInTime').addClass('active');
    $('#decoctionDoughInTimeLabel').show(); 
    $('#decoctionDoughInTimeLabel').text('min').change();
  } else {
    $('#decoctionDoughInTime').removeClass('active');
    $('#decoctionDoughInTimeLabel').hide(); 
  }
});



$(document).on('change', '#decoctionBetaGlucSetpoint', function() {
  if($('input[name=decoctionBetaGlucSetpoint]').val() != '') {
    $('#decoctionBetaGlucSetpoint').addClass('active');
    $('#decoctionBetaGlucSetpointLabel').show(); 
    if(fahrenheit) {
      $('#decoctionBetaGlucSetpointLabel').text('\u00B0F').change();
    } else if (celsius) {
      $('#decoctionBetaGlucSetpointLabel').text('\u00B0C').change();
    } else {}
    
    var decoctionBetaGlucCounter = 0;
    for(var i=0; i<mashSteps.length; i++) {
      if(mashSteps[i][0] === 'Beta Gluc') {
        break;
      } else {decoctionBetaGlucCounter++;}
    }
    if(decoctionBetaGlucCounter === 1) {
      mashSteps[1][1] = $('input[name=decoctionBetaGlucSetpoint]').val();
      $('#decoctionStrikeTempValue').attr('value', round(strikeWaterTemp(mashSteps[1][1]),0));
      $('#decoctionStrikeTempValue').addClass('active');
      $('#decoctionStrikeTempValueLabel').show();
      if(fahrenheit) {
        $('#decoctionStrikeTempValueLabel').text('\u00B0F').change();
      } else if (celsius) {
        $('#decoctionStrikeTempValueLabel').text('\u00B0C').change();
      } else {}
      
    } else if(decoctionBetaGlucCounter === 2) {
      mashSteps[2][1] = $('input[name=decoctionBetaGlucSetpoint]').val();
      $('#decoctionStepFromDoughInValue').attr('value', round(decoctionVolume(mashSteps[1][1], mashSteps[2][1]),0) );
      $('#decoctionStepFromDoughInValue').addClass('active');
      $('#decoctionStepFromDoughInValueLabel').show();
      if(barrels) {
        $('#decoctionStepFromDoughInValueLabel').text('BBL').change();
      } else if (gallons) {
        $('#decoctionStepFromDoughInValueLabel').text('gal').change();
      } else if (liters) {
        $('#decoctionStepFromDoughInValueLabel').text('L').change();
      } else{}
      
    } else {}

  } else {
    $('#decoctionBetaGlucSetpoint').removeClass('active');
    $('#decoctionBetaGlucSetpointLabel').hide(); 
  }
});


$(document).on('change', '#decoctionBetaGlucTime', function() {
  if($('input[name=decoctionBetaGlucTime]').val != '') {
    $('#decoctionBetaGlucTime').addClass('active');
    $('#decoctionBetaGlucTimeLabel').show(); 
    $('#decoctionBetaGlucTimeLabel').text('min').change();
  } else {
    $('#decoctionBetaGlucTime').removeClass('active');
    $('#decoctionBetaGlucTimeLabel').hide(); 
  }
});




$(document).on('change', '#decoctionProteinSetpoint', function() {
  if($('input[name=decoctionProteinSetpoint]').val() != '') {
    $('#decoctionProteinSetpoint').addClass('active');
    $('#decoctionProteinSetpointLabel').show(); 
    if(fahrenheit) {
      $('#decoctionProteinSetpointLabel').text('\u00B0F').change();
    } else if (celsius) {
      $('#decoctionProteinSetpointLabel').text('\u00B0C').change();
    } else {}
    
    var decoctionProteinCounter = 0;
    for(var i=0; i<mashSteps.length; i++) {
      if(mashSteps [i][0] === 'Protein') {
        break;
      } else {decoctionProteinCounter++;}
    }
    
    if(decoctionProteinCounter === 1) {
      mashSteps[1][1] = $('input[name=decoctionProteinSetpoint]').val();
      $('#decoctionStrikeTempValue').attr('value', round(strikeWaterTemp(mashSteps[1][1]),0));
      $('#decoctionStrikeTempValue').addClass('active');
      $('#decoctionStrikeTempValueLabel').show();
      if(fahrenheit) {
        $('#decoctionStrikeTempValueLabel').text('\u00B0F').change();
      } else if (celsius) {
        $('#decoctionStrikeTempValueLabel').text('\u00B0C').change();
      } else {}
      
    } else if(decoctionProteinCounter === 2) {
      mashSteps[2][1] = $('input[name=decoctionProteinSetpoint]').val();
      if(mashSteps[1][0] === 'Dough In') {
        $('#decoctionStepFromDoughInValue').attr('value', round(decoctionVolume(mashSteps[1][1], mashSteps[2][1]),0) );
        $('#decoctionStepFromDoughInValue').addClass('active');
        $('#decoctionStepFromDoughInValueLabel').show();
        if(barrels) {
          $('#decoctionStepFromDoughInValueLabel').text('BBL').change();
        } else if (gallons) {
          $('#decoctionStepFromDoughInValueLabel').text('gal').change();
        } else if (liters) {
          $('#decoctionStepFromDoughInValueLabel').text('L').change();
        } else{}
      } else if (mashSteps[1][0] === 'Beta Gluc') {
        $('#decoctionStepFromBetaGlucValue').attr('value', round(decoctionVolume(mashSteps[1][1], mashSteps[2][1]), 0));
        $('#decoctionStepFromBetaGlucValue').addClass('active');
        $('#decoctionStepFromBetaGlucValueLabel').show();
        if(barrels) {
          $('#decoctionStepFromBetaGlucValueLabel').text('BBL').change();
        } else if (gallons) {
          $('#decoctionStepFromBetaGlucValueLabel').text('gal').change();
        } else if (liters) {
          $('#decoctionStepFromBetaGlucValueLabel').text('L').change();
        } else{}
      } else {}
    } else {}

  } else {
    $('#decoctionProteinSetpoint').removeClass('active');
    $('#decoctionProteinSetpointLabel').hide(); 
  }
});


$(document).on('change', '#decoctionProteinTime', function() {
  if($('input[name=decoctionProteinTime]').val != '') {
    $('#decoctionProteinTime').addClass('active');
    $('#decoctionProteinTimeLabel').show(); 
    $('#decoctionProteinTimeLabel').text('min').change();
  } else {
    $('#decoctionProteinTime').removeClass('active');
    $('#decoctionProteinTimeLabel').hide(); 
  }
});




$(document).on('change', '#decoctionBetaAmySetpoint', function() {
  if($('input[name=decoctionBetaAmySetpoint]').val() != '') {
    $('#decoctionBetaAmySetpoint').addClass('active');
    $('#decoctionBetaAmySetpointLabel').show(); 
    if(fahrenheit) {
      $('#decoctionBetaAmySetpointLabel').text('\u00B0F').change();
    } else if (celsius) {
      $('#decoctionBetaAmySetpointLabel').text('\u00B0C').change();
    } else {}
    
    var decoctionBetaAmyCounter = 0;
    for (var i=0; i<mashSteps.length; i++) {
      if(mashSteps[i][0] === 'Beta Amy') {
        break;
      } else{decoctionBetaAmyCounter++}
    }
    
    alert(decoctionBetaAmyCounter);
    
    if(decoctionBetaAmyCounter === 1) {
      mashSteps[1][1] = $('input[name=decoctionBetaAmySetpoint]').val();
      $('#decoctionStrikeTempValue').attr('value', round(strikeWaterTemp(mashSteps[1][1]),0));
      $('#decoctionStrikeTempValue').addClass('active');
      $('#decoctionStrikeTempValueLabel').show();
      if(fahrenheit) {
        $('#decoctionStrikeTempValueLabel').text('\u00B0F').change();
      } else if (celsius) {
        $('#decoctionStrikeTempValueLabel').text('\u00B0C').change();
      } else {}
      
    } else if (decoctionBetaAmyCounter === 2) {
      mashSteps[2][1] = $('input[name=decoctionBetaAmySetpoint]').val();
      if(mashSteps[1][0] === 'Dough In') {
        $('#decoctionStepFromDoughInValue').attr('value', round(decoctionVolume(mashSteps[1][1], mashSteps[2][1]),0) );
        $('#decoctionStepFromDoughInValue').addClass('active');
        $('#decoctionStepFromDoughInValueLabel').show();
        if(barrels) {
          $('#decoctionStepFromDoughInValueLabel').text('BBL').change();
        } else if (gallons) {
          $('#decoctionStepFromDoughInValueLabel').text('gal').change();
        } else if (liters) {
          $('#decoctionStepFromDoughInValueLabel').text('L').change();
        } else{}
      } else if (mashSteps[1][0] === 'Beta Gluc') {
        $('#decoctionStepFromBetaGlucValue').attr('value', round(decoctionVolume(mashSteps[1][1], mashSteps[2][1]), 0));
        $('#decoctionStepFromBetaGlucValue').addClass('active');
        $('#decoctionStepFromBetaGlucValueLabel').show();
        if(barrels) {
          $('#decoctionStepFromBetaGlucValueLabel').text('BBL').change();
        } else if (gallons) {
          $('#decoctionStepFromBetaGlucValueLabel').text('gal').change();
        } else if (liters) {
          $('#decoctionStepFromBetaGlucValueLabel').text('L').change();
        } else{}
      } else if (mashSteps[1][0] === 'Protein') {
        $('#decoctionStepFromProteinValue').attr('value', round(decoctionVolume(mashSteps[1][1], mashSteps[2][1]), 0));
        $('#decoctionStepFromProteinValue').addClass('active');
        $('#decoctionStepFromProteinValueLabel').show();
        if(barrels) {
          $('#decoctionStepFromProteinValueLabel').text('BBL').change();
        } else if (gallons) {
          $('#decoctionStepFromProteinValueLabel').text('gal').change();
        } else if (liters) {
          $('#decoctionStepFromProteinValueLabel').text('L').change();
        } else{}
      } else {}
    } else {}
    
  } else {
    $('#decoctionBetaAmySetpoint').removeClass('active');
    $('#decoctionBetaAmySetpointLabel').hide(); 
  }
});


$(document).on('change', '#decoctionBetaAmyTime', function() {
  if($('input[name=decoctionBetaAmyTime]').val != '') {
    $('#decoctionBetaAmyTime').addClass('active');
    $('#decoctionBetaAmyTimeLabel').show(); 
    $('#decoctionBetaAmyTimeLabel').text('min').change();
  } else {
    $('#decoctionBetaAmyTime').removeClass('active');
    $('#decoctionBetaAmyTimeLabel').hide(); 
  }
});


 
$(document).on('change', '#decoctionSachSetpoint', function() {
  if($('input[name=decoctionSachSetpoint]').val() != '') {
    $('#decoctionSachSetpoint').addClass('active');
    $('#decoctionSachSetpointLabel').show(); 
    if(fahrenheit) {
      $('#decoctionSachSetpointLabel').text('\u00B0F').change();
    } else if (celsius) {
      $('#decoctionSachSetpointLabel').text('\u00B0C').change();
    } else {}
    
    mashSteps[0][1] = $('input[name=decoctionSachSetpoint]').val();
    var decoctionPosition = mashSteps.length-2;
    if(decoctionPosition === 0) {
      decoctionPosition = mashSteps.length-1;
    } else {}
    
    var decoctionTargetStep = mashSteps[decoctionPosition][0];
    if(decoctionTargetStep === 'Dough In') {
      $('#decoctionStepFromDoughInValue').attr('value', round(decoctionVolume(mashSteps[decoctionPosition][1], mashSteps[0][1]),0) );
      $('#decoctionStepFromDoughInValue').addClass('active');
      $('#decoctionStepFromDoughInValueLabel').show();
      if(barrels) {
        $('#decoctionStepFromDoughInValueLabel').text('BBL').change();
      } else if (gallons) {
        $('#decoctionStepFromDoughInValueLabel').text('gal').change();
      } else if (liters) {
        $('#decoctionStepFromDoughInValueLabel').text('L').change();
      } else{}
    } else if (decoctionTargetStep === 'Beta Gluc') {
      $('#decoctionStepFromBetaGlucValue').attr('value', round(decoctionVolume(mashSteps[decoctionPosition][1], mashSteps[0][1]), 0));
        $('#decoctionStepFromBetaGlucValue').addClass('active');
        $('#decoctionStepFromBetaGlucValueLabel').show();
        if(barrels) {
          $('#decoctionStepFromBetaGlucValueLabel').text('BBL').change();
        } else if (gallons) {
          $('#decoctionStepFromBetaGlucValueLabel').text('gal').change();
        } else if (liters) {
          $('#decoctionStepFromBetaGlucValueLabel').text('L').change();
        } else{}
    } else if (decoctionTargetStep === 'Protein') {
      $('#decoctionStepFromProteinValue').attr('value', round(decoctionVolume(mashSteps[decoctionPosition][1], mashSteps[0][1]), 0));
      $('#decoctionStepFromProteinValue').addClass('active');
      $('#decoctionStepFromProteinValueLabel').show();
      if(barrels) {
        $('#decoctionStepFromProteinValueLabel').text('BBL').change();
      } else if (gallons) {
        $('#decoctionStepFromProteinValueLabel').text('gal').change();
      } else if (liters) {
        $('#decoctionStepFromProteinValueLabel').text('L').change();
      } else{}
    } else if (decoctionTargetStep === 'Beta Amy') {
      $('#decoctionStepFromBetaAmyValue').attr('value', round(decoctionVolume(mashSteps[decoctionPosition][1], mashSteps[0][1]), 0));
      $('#decoctionStepFromBetaAmyValue').addClass('active');
      $('#decoctionStepFromBetaAmyValueLabel').show();
      if(barrels) {
        $('#decoctionStepFromBetaAmyValueLabel').text('BBL').change();
      } else if (gallons) {
        $('#decoctionStepFromBetaAmyValueLabel').text('gal').change();
      } else if (liters) {
        $('#decoctionStepFromBetaAmyValueLabel').text('L').change();
      } else{}
    } else{}    
  } else {
    $('#decoctionSachSetpoint').removeClass('active');
    $('#decoctionSachSetpointLabel').hide(); 
  }
});


$(document).on('change', '#decoctionSachTime', function() {
  if($('input[name=decoctionSachTime]').val != '') {
    $('#decoctionSachTime').addClass('active');
    $('#decoctionSachTimeLabel').show(); 
    $('#decoctionSachTimeLabel').text('min').change();
  } else {
    $('#decoctionSachTime').removeClass('active');
    $('#decoctionSachTimeLabel').hide(); 
  }
});




$(document).on('change', '#decoctionMashOutSetpoint', function() {
  if($('input[name=decoctionMashOutSetpoint]').val() != '') {
    $('#decoctionMashOutSetpoint').addClass('active');
    $('#decoctionMashOutSetpointLabel').show(); 
    if(fahrenheit) {
      $('#decoctionMashOutSetpointLabel').text('\u00B0F').change();
    } else if (celsius) {
      $('#decoctionMashOutSetpointLabel').text('\u00B0C').change();
    } else {}
    
    var decoctionStepMashOutCounter = 0;
    for(var i=0; i<mashSteps.length; i++) {
      if (mashSteps[i][0] === 'Mash Out') {
        break;
      } else {decoctionStepMashOutCounter++;}
    }
    
    if(decoctionStepMashOutCounter === 1) {
      mashSteps[1][1] = $('input[name=decoctionMashOutSetpoint]').val();
      $('#decoctionStepFromStepSachValue').attr('value', round(decoctionVolume(mashSteps[0][1], mashSteps[1][1]), 0));
      $('#decoctionStepFromStepSachValue').addClass('active');
      $('#decoctionStepFromStepSachValueLabel').show();
      if(barrels) {
        $('#decoctionStepFromStepSachValueLabel').text('BBL').change();
      } else if (gallons) {
        $('#decoctionStepFromStepSachValueLabel').text('gal').change();
      } else if (liters) {
        $('#decoctionStepFromStepSachValueLabel').text('L').change();
      } else{}
    } else if(decoctionStepMashOutCounter === 2) {
      mashSteps[2][1] = $('input[name=decoctionMashOutSetpoint]').val();
      $('#decoctionStepFromStepSachValue').attr('value', round(decoctionVolume(mashSteps[0][1], mashSteps[2][1]), 0));
      $('#decoctionStepFromStepSachValue').addClass('active');
      $('#decoctionStepFromStepSachValueLabel').show();
      if(barrels) {
        $('#decoctionStepFromStepSachValueLabel').text('BBL').change();
      } else if (gallons) {
        $('#decoctionStepFromStepSachValueLabel').text('gal').change();
      } else if (liters) {
        $('#decoctionStepFromStepSachValueLabel').text('L').change();
      } else{}
    } else {}
  } else {
    $('#decoctionMashOutSetpoint').removeClass('active');
    $('#decoctionMashOutSetpointLabel').hide(); 
  }
});


$(document).on('change', '#decoctionMashOutTime', function() {
  if($('input[name=decoctionMashOutTime]').val != '') {
    $('#decoctionMashOutTime').addClass('active');
    $('#decoctionMashOutTimeLabel').show(); 
    $('#decoctionMashOutTimeLabel').text('min').change();
  } else {
    $('#decoctionMashOutTime').removeClass('active');
    $('#decoctionMashOutTimeLabel').hide(); 
  }
});
  
  
  $('#decoctionMashClose').on('click', function() {
    finalizedDecoctionMashSteps = false;
    decoctionMashCounter=0;
    $('#decoctionProfileTitle').text('Select Your Mash Steps').change();
    $('#decoctionMashIn').hide();
    $('#decoctionDividerOne').hide();
    $('#decoctionDividerTwo').hide();
    $('#decoctionRaiseVolumesTitle').hide();
    $('#decoctionStrikeTempValue').attr('value', '');
    $('#decoctionStrikeTempValue').removeClass('active');
    $('#decoctionStrikeTempValueLabel').hide();
    mashSteps = [[0,0]];
    
    decoctionDoughIn = false;
    $('#decoctionDoughIn').show();
    $('#decoctionDoughIn').css('width', '');
    $('#decoctionDoughInTemp').show();
    $('#decoctionDoughInSetpoint').hide();
    $('#decoctionDoughInSetpoint').val('');
    $('#decoctionDoughInSetpoint').removeClass('active');
    $('#decoctionDoughInSetpointLabel').hide();
    $('#decoctionDoughInTime').hide();
    $('#decoctionDoughInTime').val('');
    $('#decoctionDoughInTime').removeClass('active');
    $('#decoctionDoughInTimeLabel').hide();
    $('#decoctionStepFromDoughInValue').removeClass('active');
    $('#decoctionStepFromDoughInValue').attr('value', '');
    $('#decoctionStepFromDoughInValueLabel').hide();
    
    decoctionBetaGluc = false;
    $('#decoctionBetaGluc').show();
    $('#decoctionBetaGluc').css('width', '');
    $('#decoctionBetaGlucTemp').show();
    $('#decoctionBetaGlucSetpoint').hide();
    $('#decoctionBetaGlucSetpoint').val('');
    $('#decoctionBetaGlucSetpoint').removeClass('active');
    $('#decoctionBetaGlucSetpointLabel').hide();
    $('#decoctionBetaGlucTime').hide();
    $('#decoctionBetaGlucTime').val('');
    $('#decoctionBetaGlucTime').removeClass('active');
    $('#decoctionBetaGlucTimeLabel').hide();
    $('#decoctionStepFromBetaGlucValue').removeClass('active');
    $('#decoctionStepFromBetaGlucValue').attr('value', '');
    $('#decoctionStepFromBetaGlucValueLabel').hide();
    
    decoctionProtein = false;
    $('#decoctionProtein').show();
    $('#decoctionProtein').css('width', '');
    $('#decoctionProteinTemp').show();
    $('#decoctionProteinSetpoint').hide();
    $('#decoctionProteinSetpoint').val('');
    $('#decoctionProteinSetpoint').removeClass('active');
    $('#decoctionProteinSetpointLabel').hide();
    $('#decoctionProteinTime').hide();
    $('#decoctionProteinTime').val('');
    $('#decoctionProteinTime').removeClass('active');
    $('#decoctionProteinTimeLabel').hide();
    $('#decoctionStepFromProteinValue').removeClass('active');
    $('#decoctionStepFromProteinValue').attr('value', '');
    $('#decoctionStepFromProteinValueLabel').hide();
    
    decoctionBetaAmy = false;
    $('#decoctionBetaAmy').show();
    $('#decoctionBetaAmy').css('width', '');
    $('#decoctionBetaAmyTemp').show();
    $('#decoctionBetaAmySetpoint').hide();
    $('#decoctionBetaAmySetpoint').val('');
    $('#decoctionBetaAmySetpoint').removeClass('active');
    $('#decoctionBetaAmySetpointLabel').hide();
    $('#decoctionBetaAmyTime').hide();
    $('#decoctionBetaAmyTime').val('');
    $('#decoctionBetaAmyTime').removeClass('active');
    $('#decoctionBetaAmyTimeLabel').hide();
    $('#decoctionStepFromBetaAmyValue').removeClass('active');
    $('#decoctionStepFromBetaAmyValue').attr('value', '');
    $('#decoctionStepFromBetaAmyValueLabel').hide();
        
    decoctionSach = false;
    $('#decoctionSach').show();
    $('#decoctionSach').css('width', '');
    $('#decoctionSachTemp').show();
    $('#decoctionSachSetpoint').hide();
    $('#decoctionSachSetpoint').val('');
    $('#decoctionSachSetpoint').removeClass('active');
    $('#decoctionSachSetpointLabel').hide();
    $('#decoctionSachTime').hide();
    $('#decoctionSachTime').val('');
    $('#decoctionSachTime').removeClass('active');
    $('#decoctionSachTimeLabel').hide();
    $('#decoctionStepFromStepSachValue').removeClass('active');
    $('#decoctionStepFromStepSachValue').attr('value', '');
    $('#decoctionStepFromStepSachValueLabel').hide();
    
    decoctionMashOut = false;
    $('#decoctionMashOut').show();
    $('#decoctionMashOut').css('width', '');
    $('#decoctionMashOutTemp').show();
    $('#decoctionMashOutSetpoint').hide();
    $('#decoctionMashOutSetpoint').val('');
    $('#decoctionMashOutSetpoint').removeClass('active');
    $('#decoctionMashOutSetpointLabel').hide();
    $('#decoctionMashOutTime').hide();
    $('#decoctionMashOutTime').val('');
    $('#decoctionMashOutTime').removeClass('active');
    $('#decoctionMashOutTimeLabel').hide();
    
    $('#decoctionMashClose').hide();
    $('#decoctionMashButton').show();
    
    $('#decoctionStepFromDoughIn').hide();
    $('#decoctionStepFromBetaGluc').hide();
    $('#decoctionStepFromProtein').hide();
    $('#decoctionStepFromBetaAmy').hide();
    $('#decoctionStepFromStepSach').hide();
  });
}




  
$(document).ready(main);

