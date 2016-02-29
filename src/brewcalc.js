/*!
 * BrewCalc.js version 1.0
 * 
 * Copyright 2016 Thorsten Schleppi
 * Released under the MIT license.
 * 
 * Dependency: Smooth.js version 0.1.7
 */

/*global Smooth*/
var BrewCalc = (function (Smooth) {
    'use strict';
    var SI_IMPERIAL_GALLON = 4.54609,
        SI_US_GALLON = 3.785411784,
        //                       0 °P, 1 °P, 1 °P, 2 °P, 3 °P, 4 °P, 5 °P, 6 °P, 7 °P, 8 °P, 9 °P, 11 °P, 12 °P, 13 °P, 14 °P, 15 °P, 16 °P, 17 °P, 18 °P, 19 °P, 20 °P, 21 °P, 22 °P, 23 °P, 24 °P, 25 °P, 26 °P, 27 °P, 28 °P, 29 °P
        smooth05C = new Smooth([-0.48, 0.51, 1.49, 2.48, 3.46, 4.43, 5.41, 6.38, 7.35, 8.33, 9.30, 10.28, 11.27, 12.26, 13.25, 14.25, 15.25, 16.25, 17.25, 18.24, 19.24, 20.22, 21.20, 22.17, 23.14, 24.12, 25.10, 26.10, 27.10, 28.10], {
            scaleTo: [0, 29]
        }),
        smooth10C = new Smooth([-0.38, 0.60, 1.59, 2.58, 3.57, 4.56, 5.54, 6.53, 7.52, 8.51, 9.50, 10.49, 11.48, 12.48, 13.47, 14.47, 15.46, 16.46, 17.46, 18.45, 19.44, 20.43, 21.42, 22.40, 23.39, 24.38, 25.37, 26.37, 27.36, 28.36], {
            scaleTo: [0, 29]
        }),
        smooth15C = new Smooth([-0.23, 0.77, 1.76, 2.76, 3.75, 4.75, 5.74, 6.74, 7.73, 8.73, 9.73, 10.73, 11.72, 12.72, 13.72, 14.72, 15.71, 16.71, 17.71, 18.70, 19.70, 20.69, 21.68, 22.68, 23.67, 24.67, 25.67, 26.67, 27.66, 28.66], {
            scaleTo: [0, 29]
        }),
        smooth20C = new Smooth([0.00, 1.00, 2.00, 3.00, 4.00, 5.00, 6.00, 7.00, 8.00, 9.00, 10.00, 11.00, 12.00, 13.00, 14.00, 15.00, 16.00, 17.00, 18.00, 19.00, 20.00, 21.00, 22.00, 23.00, 24.00, 25.00, 26.00, 27.00, 28.00, 29.00], {
            scaleTo: [0, 29]
        }),
        smooth25C = new Smooth([0.29, 1.30, 2.30, 3.31, 4.31, 5.31, 6.31, 7.31, 8.31, 9.31, 10.32, 11.32, 12.32, 13.32, 14.33, 15.33, 16.33, 17.34, 18.34, 19.35, 20.35, 21.36, 22.36, 23.36, 24.36, 25.36, 26.37, 27.37, 28.38, 29.38], {
            scaleTo: [0, 29]
        }),
        smooth30C = new Smooth([0.66, 1.67, 2.67, 3.68, 4.68, 5.68, 6.68, 7.68, 8.68, 9.68, 10.68, 11.69, 12.69, 13.70, 14.70, 15.71, 16.71, 17.72, 18.73, 19.74, 20.75, 21.76, 22.76, 23.76, 24.76, 25.77, 26.77, 27.78, 28.79, 29.79], {
            scaleTo: [0, 29]
        }),
        smooth35C = new Smooth([1.09, 2.09, 3.09, 4.09, 5.09, 6.09, 7.10, 8.10, 9.10, 10.11, 11.11, 12.12, 13.13, 14.13, 15.14, 16.14, 17.15, 18.16, 19.17, 20.18, 21.19, 22.20, 23.20, 24.21, 25.21, 26.21, 27.22, 28.22, 29.23, 30.24], {
            scaleTo: [0, 29]
        }),
        smooth40C = new Smooth([1.56, 2.56, 3.56, 4.56, 5.56, 6.57, 7.57, 8.57, 9.58, 10.59, 11.60, 12.60, 13.61, 14.62, 15.62, 16.62, 17.63, 18.64, 19.65, 20.66, 21.68, 22.68, 23.68, 24.69, 25.69, 26.69, 27.69, 28.70, 29.70, 30.71], {
            scaleTo: [0, 29]
        }),
        smooth45C = new Smooth([2.09, 3.09, 4.10, 5.10, 6.10, 7.10, 8.11, 9.11, 10.11, 11.12, 12.12, 13.13, 14.13, 15.13, 16.14, 17.14, 18.15, 19.15, 20.16, 21.18, 22.19, 23.20, 24.20, 25.21, 26.20, 27.20, 28.20, 29.20, 30.21, 31.21], {
            scaleTo: [0, 29]
        }),
        smooth50C = new Smooth([2.67, 3.68, 4.68, 5.68, 6.69, 7.69, 8.69, 9.69, 10.69, 11.69, 12.69, 13.69, 14.69, 15.69, 16.69, 17.70, 18.71, 19.72, 20.73, 21.74, 22.75, 23.75, 24.76, 25.75, 26.75, 27.74, 28.74, 29.74, 30.75, 31.76], {
            scaleTo: [0, 29]
        }),
        smooth55C = new Smooth([3.29, 4.29, 5.29, 6.29, 7.29, 8.29, 9.29, 10.29, 11.29, 12.30, 13.30, 14.31, 15.31, 16.31, 17.31, 18.31, 19.32, 20.33, 21.33, 22.34, 23.35, 24.35, 25.34, 26.33, 27.33, 28.32, 29.32, 30.32, 31.32, 32.33], {
            scaleTo: [0, 29]
        }),
        smooth60C = new Smooth([3.94, 4.94, 5.94, 6.93, 7.93, 8.93, 9.93, 10.93, 11.94, 12.95, 13.96, 14.96, 15.96, 16.96, 17.96, 18.96, 19.96, 20.96, 21.97, 22.97, 23.97, 24.96, 25.95, 26.94, 27.93, 28.92, 29.92, 30.92, 31.93, 32.93], {
            scaleTo: [0, 29]
        }),
        smooth65C = new Smooth([4.63, 5.63, 6.62, 7.62, 8.61, 9.61, 10.61, 11.61, 12.62, 13.62, 14.62, 15.62, 16.62, 17.61, 18.61, 19.61, 20.61, 21.61, 22.61, 23.61, 24.61, 25.60, 26.58, 27.57, 28.53, 29.55, 30.54, 31.54, 32.54, 33.54], {
            scaleTo: [0, 29]
        }),
        smooth70C = new Smooth([5.36, 6.35, 7.34, 8.34, 9.33, 10.33, 11.32, 12.32, 13.32, 14.32, 15.31, 16.31, 17.30, 18.29, 19.29, 20.28, 21.28, 22.28, 23.28, 24.27, 25.27, 26.25, 27.24, 28.22, 29.21, 30.19, 31.19, 32.18, 33.18, 34.17], {
            scaleTo: [0, 29]
        }),
        smooth75C = new Smooth([6.12, 7.11, 8.10, 9.09, 10.08, 11.07, 12.07, 13.06, 14.06, 15.05, 16.04, 17.03, 18.02, 19.01, 19.99, 20.99, 21.98, 22.98, 23.97, 24.97, 25.96, 26.94, 27.92, 28.90, 29.88, 30.86, 31.85, 32.84, 33.84, 34.83], {
            scaleTo: [0, 29]
        }),
        smooth80C = new Smooth([6.91, 7.89, 8.88, 9.87, 10.86, 11.85, 12.85, 13.84, 14.83, 15.82, 16.80, 17.78, 18.76, 19.74, 20.73, 21.72, 22.71, 23.70, 24.70, 25.68, 26.67, 27.64, 28.62, 29.59, 30.57, 31.55, 32.54, 33.53, 34.52, 35.51], {
            scaleTo: [0, 29]
        }),
        smooth85C = new Smooth([7.74, 8.82, 9.70, 10.68, 11.67, 12.66, 13.64, 14.63, 15.61, 16.60, 17.58, 18.55, 19.53, 20.51, 21.49, 22.47, 23.46, 24.44, 25.43, 26.41, 27.39, 28.36, 29.33, 30.30, 31.28, 32.26, 33.25, 34.23, 35.22, 36.20], {
            scaleTo: [0, 29]
        }),
        smooth90C = new Smooth([8.59, 9.56, 10.54, 11.52, 12.50, 13.48, 14.46, 15.45, 16.42, 17.40, 18.38, 19.35, 20.33, 21.30, 22.27, 23.24, 24.22, 25.19, 26.17, 27.15, 28.13, 29.10, 30.70, 31.04, 32.02, 32.99, 33.97, 34.96, 35.94, 36.92], {
            scaleTo: [0, 29]
        }),
        smooth95C = new Smooth([9.46, 10.43, 11.41, 12.38, 13.36, 14.34, 15.31, 16.29, 17.26, 18.23, 19.21, 20.17, 21.14, 22.10, 23.06, 24.02, 24.99, 25.96, 26.94, 27.91, 28.89, 29.86, 30.83, 31.80, 32.77, 33.74, 34.72, 35.70, 36.68, 37.65], {
            scaleTo: [0, 29]
        }),
        smoothGravity = function (gravity, temperature) {
            var s = new Smooth([smooth05C(gravity), smooth10C(gravity), smooth15C(gravity), smooth20C(gravity), smooth25C(gravity), smooth30C(gravity), smooth35C(gravity), smooth40C(gravity), smooth45C(gravity), smooth50C(gravity), smooth55C(gravity), smooth60C(gravity), smooth65C(gravity), smooth70C(gravity), smooth75C(gravity), smooth80C(gravity), smooth85C(gravity), smooth90C(gravity), smooth95C(gravity)], {
                scaleTo: [5, 95]
            });
            return s(temperature);
        },
        smoothSparklingLevel = new Smooth([3.20, 3.00, 2.80, 2.60, 2.45, 2.30, 2.15, 2.00, 1.90, 1.75, 1.65, 1.60], {
            scaleTo: 22
        });

    return {
        /**
         * Converts gravity in plato (taken by an 20 °C aerometer) into gravity in percent
         * @param   {number} gravityPlato       °Plato
         * @param   {number} gravityTemperature °C
         * @returns {number} %
         */
        gravityAreometer: function (gravityPlato, gravityTemperature) {
            return smoothGravity(gravityPlato, gravityTemperature);
        },
        /**
         * Converts specific gravity into gravity in percent
         * @param   {number} specificGravity SG
         * @returns {number} %
         */
        gravitySpecificGravity: function (specificGravity) {
            return (-1 * 616.868) + (1111.14 * specificGravity) - (630.272 * Math.pow(specificGravity, 2)) + (135.997 * Math.pow(specificGravity, 3));
        },
        /**
         * Converts original gravity in brix into gravity in percent
         * @param   {number} originalGravityBrix °Brix
         * @param   {number} factor              float
         * @returns {number} %
         */
        originalGravityRefractometer: function (originalGravityBrix, factor) {
            return originalGravityBrix / factor;
        },
        /**
         * Converts final gravity in brix into gravity in percent
         * @param   {number} originalGravity  %
         * @param   {number} finalGravityBrix °Brix
         * @returns {number} %
         */
        finalGravityRefractometer: function (originalGravity, finalGravityBrix) {
            var specificWeight = 1.001843 - 0.002318474 * originalGravity - 0.000007775 * Math.pow(originalGravity, 2) - 0.000000034 * Math.pow(originalGravity, 3) + 0.005740000 * finalGravityBrix + 0.000033440 * Math.pow(finalGravityBrix, 2) + 0.000000086 * Math.pow(finalGravityBrix, 3);
            return 668.72 * specificWeight - 463.37 - 205.347 * Math.pow(specificWeight, 2);
        },
        /**
         * Calculates actual final gravity
         * @param   {number} originalGravity %
         * @param   {number} finalGravity    %
         * @returns {number} %
         */
        actualFinalGravity: function (originalGravity, finalGravity) {
            return 0.1808 * originalGravity + 0.8192 * finalGravity;
        },
        /**
         * Calculates density of beer
         * @param   {number} finalGravity %
         * @returns {number} g/ml
         */
        densityBeer: function (finalGravity) {
            return 261.1 / (261.53 - finalGravity);
        },
        /**
         * Calculates density of wort
         * @param   {number} originalGravity %
         * @returns {number} g/ml
         */
        densityWort: function (originalGravity) {
            return 261.1 / (261.53 - originalGravity);
        },
        /**
         * Calculates alcohol level weight percent
         * @param   {number} originalGravity    %
         * @param   {number} actualFinalGravity %
         * @returns {number} % mas
         */
        alcoholLevelMass: function (originalGravity, actualFinalGravity) {
            return (originalGravity - actualFinalGravity) / (2.0665 - 0.010665 * originalGravity);
        },
        /**
         * Calculates alcohol level volume percent
         * @param   {number} alcoholLevelMass % mas
         * @param   {number} densityBeer      g/ml
         * @returns {number} % vol
         */
        alcoholLevelVolume: function (alcoholLevelMass, densityBeer) {
            return alcoholLevelMass * densityBeer / 0.7894;
        },
        /**
         * Calculates apparent fermentation level
         * @param   {number} originalGravity %
         * @param   {number} finalGravity    %
         * @returns {number} %
         */
        apparentFermentationLevel: function (originalGravity, finalGravity) {
            return 100 * (1 - finalGravity / originalGravity);
        },
        /**
         * Calculates actual fermentation level
         * @param   {number} originalGravity    %
         * @param   {number} actualFinalGravity %
         * @returns {number} %
         */
        actualFermentationLevel: function (originalGravity, actualFinalGravity) {
            return 100 * (1 - actualFinalGravity / originalGravity);
        },
        /**
         * Calculates calorific value in calories
         * @param   {number} alcoholLevelMass   g/l
         * @param   {number} actualFinalGravity %
         * @param   {number} beerVolume         l
         * @param   {number} densityBeer        g/l
         * @returns {number} kcal
         */
        calorificValueCalorie: function (alcoholLevelMass, actualFinalGravity, beerVolume, densityBeer) {
            return (6.9 * alcoholLevelMass + 4 * (actualFinalGravity - 0.1)) * 10 * beerVolume * densityBeer;
        },
        /**
         * Calculates calorific value in joule
         * @param   {number} calorificValueCalorie kcal
         * @returns {number} kJ
         */
        calorificValueJoule: function (calorificValueCalorie) {
            return calorificValueCalorie * 4.18684;
        },
        /**
         * Calculates sparkling level of fermented wort
         * @param   {number} fermentationTemperature °C
         * @returns {number} g/l
         */
        sparklingLevelFermentedWort: function (fermentationTemperature) {
            return fermentationTemperature >= 100 ? 0 : smoothSparklingLevel(fermentationTemperature);
        },
        /**
         * Calculates additional table sugar (saccharose) per liter
         * @param   {number} targetSparkling             g/l
         * @param   {number} sparklingLevelFermentedWort g/l
         * @returns {number} g/l
         */
        additionalSugarPerLiter: function (targetSparkling, sparklingLevelFermentedWort) {
            return 2 * (targetSparkling - sparklingLevelFermentedWort);
        },
        /**
         * Calculates additional glucose per liter
         * @param   {number} additionalSugarPerLiter g/l
         * @returns {number} g/l
         */
        additionalGlucosePerLiter: function (additionalSugarPerLiter) {
            return 1.1578 * additionalSugarPerLiter;
        },
        /**
         * Calculates alcohol level volume percent per sugar
         * @param   {number} additionalSugarPerLiter g/l
         * @returns {number} % vol
         */
        alcoholLevelVolumeSugar: function (additionalSugarPerLiter) {
            return additionalSugarPerLiter / 2 / 1.6 / 0.7894 / 10;
        },
        /**
         * Calculates final gravity before filling
         * @param   {number} finalGravity            %
         * @param   {number} additionalSugarPerLiter g/l
         * @param   {number} densityBeer             g/ml
         * @returns {number} %
         */
        finalGravityBeforeFilling: function (finalGravity, additionalSugarPerLiter, densityBeer) {
            return finalGravity + (additionalSugarPerLiter / (8.192 * densityBeer));
        },
        /**
         * Calculate extract of speise per liter
         * @param   {number} originalGravity %
         * @param   {number} finalGravity    %
         * @param   {number} densityWort     g/ml
         * @returns {number} g/l
         */
        extractSpeisePerLiter: function (originalGravity, finalGravity, densityWort) {
            return (originalGravity - finalGravity) * 8.192 * densityWort;
        },
        /**
         * Calculates speise per liter
         * @param   {number} additionalSugarPerLiter g/l
         * @param   {number} extractSpeisePerLiter   g/l
         * @returns {number} ml/l
         */
        speisePerLiter: function (additionalSugarPerLiter, extractSpeisePerLiter) {
            return 1000 * additionalSugarPerLiter / (extractSpeisePerLiter - additionalSugarPerLiter);
        },
        /**
         * Calculates capacity brewhouse yield
         * @param   {number} originalGravity %
         * @param   {number} densityWort     g/ml
         * @param   {number} capacity        l
         * @param   {number} malt            kg
         * @returns {number} %
         */
        capacityBrewhouseYield: function (originalGravity, densityWort, capacity, malt) {
            return originalGravity * densityWort * capacity * 0.96 / malt;
        },
        /**
         * Calculates barley malt volume
         * @param   {number} massBarleyMalt kg
         * @returns {number} l
         */
        barleyMaltVolume: function (massBarleyMalt) {
            return massBarleyMalt * 1000 / 570;
        },
        /**
         * Calculates wheat malt volume
         * @param   {number} massWheatMalt kg
         * @returns {number} l
         */
        wheatMaltVolume: function (massWheatMalt) {
            return massWheatMalt * 1000 / 670;
        },
        /**
         * Calculates cylinder volume
         * @param   {number} cylinderRadius cm
         * @param   {number} cylinderHeight cm
         * @returns {number} l
         */
        cylinderVolume: function (cylinderRadius, cylinderHeight) {
            return Math.PI * Math.pow(cylinderRadius, 2) * cylinderHeight / 1000;
        },
        /**
         * Calculate pressure in keg
         * @param   {number} sparklingLevel g/l
         * @param   {number} kegTemperature °C
         * @returns {number} bar
         */
        pressureKeg: function (sparklingLevel, kegTemperature) {
            return sparklingLevel / smoothSparklingLevel(kegTemperature) - 1;
        },
        /**
         * Rule of Three
         * @param   {?number} firstRatio  n
         * @param   {?number} secondRatio n
         * @param   {?number} firstValue  n
         * @param   {?number} secondValue n
         * @returns {number}  n
         */
        ruleOfThree: function (firstRatio, secondRatio, firstValue, secondValue) {
            if (firstRatio === null) {
                return secondRatio * secondValue / firstValue;
            } else if (secondRatio === null) {
                return firstRatio * firstValue / secondValue;
            } else if (firstValue === null) {
                return secondValue * secondRatio / firstRatio;
            } else if (secondValue === null) {
                return firstValue * firstRatio / secondRatio;
            }
        },
        /**
         * Blending cross
         * @param   {?number} firstRatio  n
         * @param   {?number} secondRatio n
         * @param   {number}  firstValue  n
         * @param   {number}  secondValue n
         * @param   {number}  targetValue n
         * @returns {number}  n
         */
        blendingCross: function (firstRatio, secondRatio, firstValue, secondValue, targetValue) {
            if (firstRatio === null) {
                return secondRatio * (targetValue - secondValue) / (firstValue - targetValue);
            } else if (secondRatio === null) {
                return firstRatio * (firstValue - targetValue) / (targetValue - secondValue);
            }
        },
        gallonImperial: SI_IMPERIAL_GALLON,
        gallonUS: SI_US_GALLON,
        /**
         * Converts units
         * @param   {string} inputUnit  string
         * @param   {string} outputUnit string
         * @param   {number} value      n
         * @returns {number} n
         */
        convertUnit: function (inputUnit, outputUnit, value) {
            var factor;
            switch (inputUnit + '|' + outputUnit) {
            case 'bar|psi':
                factor = 1 / 0.0689475729;
                break;
            case '°C|°F':
                factor = (value * 1.8 + 32) / value;
                break;
            case '°C|K':
                factor = (value + 273.15) / value;
                break;
            case 'dr.|kg':
                factor = 0.001771845195312500;
                break;
            case 'EBC|°L':
                factor = ((value * 0.508 + 0.76) / 1.3546) / value;
                break;
            case 'EBC|SRM':
                factor = 0.508;
                break;
            case '°F|°C':
                factor = ((value - 32) / 1.8) / value;
                break;
            case '°F|K':
                factor = ((value + 459.67) / 1.8) / value;
                break;
            case 'Imp.cup|l':
                factor = SI_IMPERIAL_GALLON / 16;
                break;
            case 'Imp.fl.oz.|l':
                factor = SI_IMPERIAL_GALLON / 160;
                break;
            case 'Imp.gal.|l':
                factor = SI_IMPERIAL_GALLON;
                break;
            case 'Imp.gi.|l':
                factor = SI_IMPERIAL_GALLON / 32;
                break;
            case 'Imp.pt.|l':
                factor = SI_IMPERIAL_GALLON / 8;
                break;
            case 'Imp.qt.|l':
                factor = SI_IMPERIAL_GALLON / 4;
                break;
            case 'K|°C':
                factor = (value - 273.15) / value;
                break;
            case 'K|°F':
                factor = (value * 1.8 - 459.67) / value;
                break;
            case 'kg|dr.':
                factor = 1 / 0.001771845195312500;
                break;
            case 'kg|oz.':
                factor = 1 / 0.028349523125;
                break;
            case 'kg|pd.':
            case 'kg|lb.':
                factor = 1 / 0.453592370;
                break;
            case 'l|Imp.cup':
                factor = 16 / SI_IMPERIAL_GALLON;
                break;
            case 'l|Imp.fl.oz.':
                factor = 160 / SI_IMPERIAL_GALLON;
                break;
            case 'l|Imp.gal.':
                factor = 1 / SI_IMPERIAL_GALLON;
                break;
            case 'l|Imp.gi.':
                factor = 32 / SI_IMPERIAL_GALLON;
                break;
            case 'l|Imp.pt.':
                factor = 8 / SI_IMPERIAL_GALLON;
                break;
            case 'l|Imp.qt.':
                factor = 4 / SI_IMPERIAL_GALLON;
                break;
            case 'l|US.cup':
                factor = 16 / SI_US_GALLON;
                break;
            case 'l|US.fl.oz.':
                factor = 128 / SI_US_GALLON;
                break;
            case 'l|US.gal':
                factor = 1 / SI_US_GALLON;
                break;
            case 'l|US.gi.':
                factor = 32 / SI_US_GALLON;
                break;
            case 'l|US.pt.':
                factor = 8 / SI_US_GALLON;
                break;
            case 'l|US.qt.':
                factor = 4 / SI_US_GALLON;
                break;
            case '°L|EBC':
                factor = ((1.3546 * value - 0.76) * 1.97) / value;
                break;
            case 'oz.|kg':
                factor = 0.028349523125;
                break;
            case '%|SG':
                factor = (1 + value / (258.6 - 227.1 / 258.2 * value)) / value;
                break;
            case 'pd.|kg':
            case 'lb.|kg':
                factor = 0.453592370;
                break;
            case 'psi|bar':
                factor = 0.0689475729;
                break;
            case 'SG|%':
                factor = ((-1 * 616.868) + (1111.14 * value) - (630.272 * Math.pow(value, 2)) + (135.997 * Math.pow(value, 3))) / value;
                break;
            case 'SRM|EBC':
                factor = 1.97;
                break;
            case 'US.cup|l':
                factor = SI_US_GALLON / 16;
                break;
            case 'US.fl.oz.|l':
                factor = SI_US_GALLON / 128;
                break;
            case 'US.gal.|l':
                factor = SI_US_GALLON;
                break;
            case 'US.gil.|l':
                factor = SI_US_GALLON / 32;
                break;
            case 'US.pt.|l':
                factor = SI_US_GALLON / 8;
                break;
            case 'US.qt|l':
                factor = SI_US_GALLON / 4;
                break;
            }
            return value * factor;
        }
    };
}(Smooth));