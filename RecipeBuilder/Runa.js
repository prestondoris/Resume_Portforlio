/*This will be a set by the user and then every function that 
needs to use BBLs or gallons. The variable "gallons" will be 
either true or false. If false then volume is selected as BBLs.
There will be a Gallons and BBLs option and which ever is clicked
will set the variable gallons to true or false.
*/
var gallons = false;

//These are the user inputs
var volume=0; //desired finished volume to fermenter
var OG=0; //original gravity
var FG=0; //final gravity
var BHE = 0; //this should be a percentage
var evapRate = 0; //this should be a percentage;
var waterGrainRatio = 0; //this is a decimal and is listed as gallons per pound


/*malt specs
Position 1: malt name
Position 2: % extract
Position 3: % moisture
Position 4: color
*/
var rahr = [
  ['Rahr Premium Pilsner', 0.805, 0.04, 1.8],
  ['Rahr Old World Pilsner', 0.79, 0.04, 1.8],
  ['Rahr 2-Row', 0.816, 0.046, 1.9],
  ['Rahr 6-Row', 0.79, 0.042, 2.3],
  ['Rahr Pale Ale Malt', 0.79, 0.045, 3.5],
  ['Rahr Red Wheat', 0.85, 0.45, 3.3],
  ['Rahr White Wheat', 0.85, 0.45, 3.3]
];

var crisp = [
  ['Crisp Finest Marris Otter', 0.815, 0.035, 3.0],
  ['Crisp Extra Pale Marris Otter', 0.815, 0.045, 1.8],
  ['Crisp Best Ale Malt', 0.82, 0.035, 3.0],
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
  ['Crisp Light Munich Malt', 0.790, 0.045, 9.0],
  ['Crisp Dark Munich Malt', 0.79, .045, 20.0],
  ['Crisp Cara Gold', 0.76, .065, 6.5],
  ['Crisp Cara Malt', 0.76, .060, 12.5],
  ['Crisp Light Crystal', 0.76, 0.032, 45],
  ['Crisp Crystal 60˚L', 0.76, 0.032, 60],
  ['Crisp Crystal 77˚L', 0.76, 0.032, 77],
  ['Crisp Extra Dark Crystal 120˚L', 0.76, 0.032, 120],
  ['Crisp Amber Malt', 0.80, 0.032, 28.5],
  ['Crisp Brown Malt', 0.765, 0.03, 65],
  ['Crisp Pale Chocolate Malt', 0.67, 0.03, 225],
  ['Crisp Chocolate Malt', 0.67, 0.03, 450],
  ['Crisp Roasted Barley', 0.65, 0.03, 555],
  ['Crisp Black Malt', 0.65, 0.03, 605],
];

var weyermann = [
  ['Weyermann Abbey Malt', 0.75, 0.045, 17.5],
  ['Weyermann Acidulated Malt', 0.805, 0.07, 2.8],
  ['Weyermann Barke Munich Malt', 0.78, 0.04, 7.7],
  ['Weyermann Barke Pilsner Malt', 0.805, 0.05, 1.8],
  ['Weyermann Barke Vienna Malt', .079, 0.055, 3.4],
  ['Weyermann Beech Smoked Barley Malt', 0.77, 0.05, 2.7],
  ['Weyermann Bioland Beech Smoked Barley Malt', 0.77, 0.05, 2.7],
  ['Weyermann Bioland Carafa', 0.65, ],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];

/*this is a variable that will determine a dilution amount and is only different from 
volume if specified by the user
*/
var standardBatchSize = volume; 


var wpDilution = 0; //this is a set value of water being added to the WP (most likely 0)
var wpSugarAddition = [0,0]; 
//this is an array set by the user specifying sugar added gravity added to the kettle
//First value is the gravity in ˚P and the second is the volume as gallons

var kettleSugarAddition = [0,0]; 
//this is an array set by the user specifying sugar added gravity added to the kettle
//First value is the gravity in ˚P and the second is the volume as gallons

//These are values used for calculations
var waterWeightBBL = 258; //this is the weight of 1 BBL of water
var waterWeightGal = 8.323; //this is the weight of 1 gal of water

//This array will contain the all the malts that comprise the grain bill
var grainBill = [];
var hopBill = [];
var dryHopBill = [];

/*This array wil contain the weights of each malt. Each position will correspond to the
same position in grainBill.
*/
var grainWeights = [];
var hopBillWeights = [];
var dryHopBillWeights = [];


//This rounds to however many decimals specified
function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}


//This will convert ˚P to Specific Gravity
function platoToSG (plato) {
  return 1+(plato/(258.6-(plato*.87955)));
}


//This will convert Specific Gravity to ˚P
function sgToPlato (SG) {
  return (258.6*(SG-1))/(1+(SG-1)*.87955);
}


//This will calculate the ABV of the beer
function ABV (uOG,uFG) {
  //OG and FG are supplied as Plato values
  var ogSG = platoToSG(uOG);
  var fgSG = platoToSG(uFG);
  var ABV = ((ogSG-fgSG)*1.04678)/(.0061773047 +.78614031/fgSG);
  return round(ABV*100, 2);
}


//This function will give the Volume of water to add to the mash tun.
function mashVol (WGR, grainBillTotal) {
  //WGR is Water to grist ratio and is supplied as gallons of water per pound of grain.
  //grainBillTotal is supplied as pounds
  var volumeMash = WGR*grainBillTotal;
  if (gallons) {
    return round(mashVolume,1);
  } else {
    return round(mashVolume/31,1);
  }
}


function ADF (uOG, uFG) {
  return (uOG-uFG)/uOG;
}


function kettleKOVol () {
  var koVolume = 0;
  //Note sugar addition is using gallons
  
  if (gallons) {
    koVolume = volume-(volume-standardBatchSize)-wpDilution-wpSugarAddition[1];
  } else {
    koVolume = volume-(volume-standardBatchSize)-wpDilution-(wpSugarAddition[1]/31);
  }
  
  return round(koVolume,0);
}


/*This function will give the dilution amount if the Volume target is bigger than the 
standard batch size*/
function kettleDilution () {
  if (round(volume-kettleKOVol(),1)=wpDilution) {
    return 0;
  } else {
    return volume-kettleKOVol();
  }
}


function kettleKOGrav () {
  return (volume*OG-(wpSugarAddition[1]/31)*wpSugarAddition[0])/kettleKOVol();
}


function kettleFullVol () {
  return kettleKOVol()/(1-evapRate);
}


function KettleFullGrav () {
  return (kettleKOGrav()-kettleSugarAddition[0])*(1-evapRate);
}


function totalMinWater (grainBillTotal) {
  return kettleFullVol()+(grainBillTotal*0.115/31)+kettleFullVolume()*0.02
}


function spargeVol () {
  return totalMinWater()-mashVol();
}






