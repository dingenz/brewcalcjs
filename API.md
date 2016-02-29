## Functions

<dl>
<dt><a href="#gravityAreometer">gravityAreometer(gravityPlato, gravityTemperature)</a> ⇒ <code>number</code></dt>
<dd><p>Converts gravity in plato (taken by an 20 °C aerometer) into gravity in percent</p>
</dd>
<dt><a href="#gravitySpecificGravity">gravitySpecificGravity(specificGravity)</a> ⇒ <code>number</code></dt>
<dd><p>Converts specific gravity into gravity in percent</p>
</dd>
<dt><a href="#originalGravityRefractometer">originalGravityRefractometer(originalGravityBrix, factor)</a> ⇒ <code>number</code></dt>
<dd><p>Converts original gravity in brix into gravity in percent</p>
</dd>
<dt><a href="#finalGravityRefractometer">finalGravityRefractometer(originalGravity, finalGravityBrix)</a> ⇒ <code>number</code></dt>
<dd><p>Converts final gravity in brix into gravity in percent</p>
</dd>
<dt><a href="#actualFinalGravity">actualFinalGravity(originalGravity, finalGravity)</a> ⇒ <code>number</code></dt>
<dd><p>Calculates actual final gravity</p>
</dd>
<dt><a href="#densityBeer">densityBeer(finalGravity)</a> ⇒ <code>number</code></dt>
<dd><p>Calculates density of beer</p>
</dd>
<dt><a href="#densityWort">densityWort(originalGravity)</a> ⇒ <code>number</code></dt>
<dd><p>Calculates density of wort</p>
</dd>
<dt><a href="#alcoholLevelMass">alcoholLevelMass(originalGravity, actualFinalGravity)</a> ⇒ <code>number</code></dt>
<dd><p>Calculates alcohol level weight percent</p>
</dd>
<dt><a href="#alcoholLevelVolume">alcoholLevelVolume(alcoholLevelMass, densityBeer)</a> ⇒ <code>number</code></dt>
<dd><p>Calculates alcohol level volume percent</p>
</dd>
<dt><a href="#apparentFermentationLevel">apparentFermentationLevel(originalGravity, finalGravity)</a> ⇒ <code>number</code></dt>
<dd><p>Calculates apparent fermentation level</p>
</dd>
<dt><a href="#actualFermentationLevel">actualFermentationLevel(originalGravity, actualFinalGravity)</a> ⇒ <code>number</code></dt>
<dd><p>Calculates actual fermentation level</p>
</dd>
<dt><a href="#calorificValueCalorie">calorificValueCalorie(alcoholLevelMass, actualFinalGravity, beerVolume, densityBeer)</a> ⇒ <code>number</code></dt>
<dd><p>Calculates calorific value in calories</p>
</dd>
<dt><a href="#calorificValueJoule">calorificValueJoule(calorificValueCalorie)</a> ⇒ <code>number</code></dt>
<dd><p>Calculates calorific value in joule</p>
</dd>
<dt><a href="#sparklingLevelFermentedWort">sparklingLevelFermentedWort(fermentationTemperature)</a> ⇒ <code>number</code></dt>
<dd><p>Calculates sparkling level of fermented wort</p>
</dd>
<dt><a href="#additionalSugarPerLiter">additionalSugarPerLiter(targetSparkling, sparklingLevelFermentedWort)</a> ⇒ <code>number</code></dt>
<dd><p>Calculates additional table sugar (saccharose) per liter</p>
</dd>
<dt><a href="#additionalGlucosePerLiter">additionalGlucosePerLiter(additionalSugarPerLiter)</a> ⇒ <code>number</code></dt>
<dd><p>Calculates additional glucose per liter</p>
</dd>
<dt><a href="#alcoholLevelVolumeSugar">alcoholLevelVolumeSugar(additionalSugarPerLiter)</a> ⇒ <code>number</code></dt>
<dd><p>Calculates alcohol level volume percent per sugar</p>
</dd>
<dt><a href="#finalGravityBeforeFilling">finalGravityBeforeFilling(finalGravity, additionalSugarPerLiter, densityBeer)</a> ⇒ <code>number</code></dt>
<dd><p>Calculates final gravity before filling</p>
</dd>
<dt><a href="#extractSpeisePerLiter">extractSpeisePerLiter(originalGravity, finalGravity, densityWort)</a> ⇒ <code>number</code></dt>
<dd><p>Calculate extract of speise per liter</p>
</dd>
<dt><a href="#speisePerLiter">speisePerLiter(additionalSugarPerLiter, extractSpeisePerLiter)</a> ⇒ <code>number</code></dt>
<dd><p>Calculates speise per liter</p>
</dd>
<dt><a href="#capacityBrewhouseYield">capacityBrewhouseYield(originalGravity, densityWort, capacity, malt)</a> ⇒ <code>number</code></dt>
<dd><p>Calculates capacity brewhouse yield</p>
</dd>
<dt><a href="#barleyMaltVolume">barleyMaltVolume(massBarleyMalt)</a> ⇒ <code>number</code></dt>
<dd><p>Calculates barley malt volume</p>
</dd>
<dt><a href="#wheatMaltVolume">wheatMaltVolume(massWheatMalt)</a> ⇒ <code>number</code></dt>
<dd><p>Calculates wheat malt volume</p>
</dd>
<dt><a href="#cylinderVolume">cylinderVolume(cylinderRadius, cylinderHeight)</a> ⇒ <code>number</code></dt>
<dd><p>Calculates cylinder volume</p>
</dd>
<dt><a href="#pressureKeg">pressureKeg(sparklingLevel, kegTemperature)</a> ⇒ <code>number</code></dt>
<dd><p>Calculate pressure in keg</p>
</dd>
<dt><a href="#ruleOfThree">ruleOfThree(firstRatio, secondRatio, firstValue, secondValue)</a> ⇒ <code>number</code></dt>
<dd><p>Rule of Three</p>
</dd>
<dt><a href="#blendingCross">blendingCross(firstRatio, secondRatio, firstValue, secondValue, targetValue)</a> ⇒ <code>number</code></dt>
<dd><p>Blending cross</p>
</dd>
<dt><a href="#convertUnit">convertUnit(inputUnit, outputUnit, value)</a> ⇒ <code>number</code></dt>
<dd><p>Converts units</p>
</dd>
</dl>

<a name="gravityAreometer"></a>
## gravityAreometer(gravityPlato, gravityTemperature) ⇒ <code>number</code>
Converts gravity in plato (taken by an 20 °C aerometer) into gravity in percent

**Kind**: global function  
**Returns**: <code>number</code> - %  

| Param | Type | Description |
| --- | --- | --- |
| gravityPlato | <code>number</code> | °Plato |
| gravityTemperature | <code>number</code> | °C |

<a name="gravitySpecificGravity"></a>
## gravitySpecificGravity(specificGravity) ⇒ <code>number</code>
Converts specific gravity into gravity in percent

**Kind**: global function  
**Returns**: <code>number</code> - %  

| Param | Type | Description |
| --- | --- | --- |
| specificGravity | <code>number</code> | SG |

<a name="originalGravityRefractometer"></a>
## originalGravityRefractometer(originalGravityBrix, factor) ⇒ <code>number</code>
Converts original gravity in brix into gravity in percent

**Kind**: global function  
**Returns**: <code>number</code> - %  

| Param | Type | Description |
| --- | --- | --- |
| originalGravityBrix | <code>number</code> | °Brix |
| factor | <code>number</code> | float |

<a name="finalGravityRefractometer"></a>
## finalGravityRefractometer(originalGravity, finalGravityBrix) ⇒ <code>number</code>
Converts final gravity in brix into gravity in percent

**Kind**: global function  
**Returns**: <code>number</code> - %  

| Param | Type | Description |
| --- | --- | --- |
| originalGravity | <code>number</code> | % |
| finalGravityBrix | <code>number</code> | °Brix |

<a name="actualFinalGravity"></a>
## actualFinalGravity(originalGravity, finalGravity) ⇒ <code>number</code>
Calculates actual final gravity

**Kind**: global function  
**Returns**: <code>number</code> - %  

| Param | Type | Description |
| --- | --- | --- |
| originalGravity | <code>number</code> | % |
| finalGravity | <code>number</code> | % |

<a name="densityBeer"></a>
## densityBeer(finalGravity) ⇒ <code>number</code>
Calculates density of beer

**Kind**: global function  
**Returns**: <code>number</code> - g/ml  

| Param | Type | Description |
| --- | --- | --- |
| finalGravity | <code>number</code> | % |

<a name="densityWort"></a>
## densityWort(originalGravity) ⇒ <code>number</code>
Calculates density of wort

**Kind**: global function  
**Returns**: <code>number</code> - g/ml  

| Param | Type | Description |
| --- | --- | --- |
| originalGravity | <code>number</code> | % |

<a name="alcoholLevelMass"></a>
## alcoholLevelMass(originalGravity, actualFinalGravity) ⇒ <code>number</code>
Calculates alcohol level weight percent

**Kind**: global function  
**Returns**: <code>number</code> - % mas  

| Param | Type | Description |
| --- | --- | --- |
| originalGravity | <code>number</code> | % |
| actualFinalGravity | <code>number</code> | % |

<a name="alcoholLevelVolume"></a>
## alcoholLevelVolume(alcoholLevelMass, densityBeer) ⇒ <code>number</code>
Calculates alcohol level volume percent

**Kind**: global function  
**Returns**: <code>number</code> - % vol  

| Param | Type | Description |
| --- | --- | --- |
| alcoholLevelMass | <code>number</code> | % mas |
| densityBeer | <code>number</code> | g/ml |

<a name="apparentFermentationLevel"></a>
## apparentFermentationLevel(originalGravity, finalGravity) ⇒ <code>number</code>
Calculates apparent fermentation level

**Kind**: global function  
**Returns**: <code>number</code> - %  

| Param | Type | Description |
| --- | --- | --- |
| originalGravity | <code>number</code> | % |
| finalGravity | <code>number</code> | % |

<a name="actualFermentationLevel"></a>
## actualFermentationLevel(originalGravity, actualFinalGravity) ⇒ <code>number</code>
Calculates actual fermentation level

**Kind**: global function  
**Returns**: <code>number</code> - %  

| Param | Type | Description |
| --- | --- | --- |
| originalGravity | <code>number</code> | % |
| actualFinalGravity | <code>number</code> | % |

<a name="calorificValueCalorie"></a>
## calorificValueCalorie(alcoholLevelMass, actualFinalGravity, beerVolume, densityBeer) ⇒ <code>number</code>
Calculates calorific value in calories

**Kind**: global function  
**Returns**: <code>number</code> - kcal  

| Param | Type | Description |
| --- | --- | --- |
| alcoholLevelMass | <code>number</code> | g/l |
| actualFinalGravity | <code>number</code> | % |
| beerVolume | <code>number</code> | l |
| densityBeer | <code>number</code> | g/l |

<a name="calorificValueJoule"></a>
## calorificValueJoule(calorificValueCalorie) ⇒ <code>number</code>
Calculates calorific value in joule

**Kind**: global function  
**Returns**: <code>number</code> - kJ  

| Param | Type | Description |
| --- | --- | --- |
| calorificValueCalorie | <code>number</code> | kcal |

<a name="sparklingLevelFermentedWort"></a>
## sparklingLevelFermentedWort(fermentationTemperature) ⇒ <code>number</code>
Calculates sparkling level of fermented wort

**Kind**: global function  
**Returns**: <code>number</code> - g/l  

| Param | Type | Description |
| --- | --- | --- |
| fermentationTemperature | <code>number</code> | °C |

<a name="additionalSugarPerLiter"></a>
## additionalSugarPerLiter(targetSparkling, sparklingLevelFermentedWort) ⇒ <code>number</code>
Calculates additional table sugar (saccharose) per liter

**Kind**: global function  
**Returns**: <code>number</code> - g/l  

| Param | Type | Description |
| --- | --- | --- |
| targetSparkling | <code>number</code> | g/l |
| sparklingLevelFermentedWort | <code>number</code> | g/l |

<a name="additionalGlucosePerLiter"></a>
## additionalGlucosePerLiter(additionalSugarPerLiter) ⇒ <code>number</code>
Calculates additional glucose per liter

**Kind**: global function  
**Returns**: <code>number</code> - g/l  

| Param | Type | Description |
| --- | --- | --- |
| additionalSugarPerLiter | <code>number</code> | g/l |

<a name="alcoholLevelVolumeSugar"></a>
## alcoholLevelVolumeSugar(additionalSugarPerLiter) ⇒ <code>number</code>
Calculates alcohol level volume percent per sugar

**Kind**: global function  
**Returns**: <code>number</code> - % vol  

| Param | Type | Description |
| --- | --- | --- |
| additionalSugarPerLiter | <code>number</code> | g/l |

<a name="finalGravityBeforeFilling"></a>
## finalGravityBeforeFilling(finalGravity, additionalSugarPerLiter, densityBeer) ⇒ <code>number</code>
Calculates final gravity before filling

**Kind**: global function  
**Returns**: <code>number</code> - %  

| Param | Type | Description |
| --- | --- | --- |
| finalGravity | <code>number</code> | % |
| additionalSugarPerLiter | <code>number</code> | g/l |
| densityBeer | <code>number</code> | g/ml |

<a name="extractSpeisePerLiter"></a>
## extractSpeisePerLiter(originalGravity, finalGravity, densityWort) ⇒ <code>number</code>
Calculate extract of speise per liter

**Kind**: global function  
**Returns**: <code>number</code> - g/l  

| Param | Type | Description |
| --- | --- | --- |
| originalGravity | <code>number</code> | % |
| finalGravity | <code>number</code> | % |
| densityWort | <code>number</code> | g/ml |

<a name="speisePerLiter"></a>
## speisePerLiter(additionalSugarPerLiter, extractSpeisePerLiter) ⇒ <code>number</code>
Calculates speise per liter

**Kind**: global function  
**Returns**: <code>number</code> - ml/l  

| Param | Type | Description |
| --- | --- | --- |
| additionalSugarPerLiter | <code>number</code> | g/l |
| extractSpeisePerLiter | <code>number</code> | g/l |

<a name="capacityBrewhouseYield"></a>
## capacityBrewhouseYield(originalGravity, densityWort, capacity, malt) ⇒ <code>number</code>
Calculates capacity brewhouse yield

**Kind**: global function  
**Returns**: <code>number</code> - %  

| Param | Type | Description |
| --- | --- | --- |
| originalGravity | <code>number</code> | % |
| densityWort | <code>number</code> | g/ml |
| capacity | <code>number</code> | l |
| malt | <code>number</code> | kg |

<a name="barleyMaltVolume"></a>
## barleyMaltVolume(massBarleyMalt) ⇒ <code>number</code>
Calculates barley malt volume

**Kind**: global function  
**Returns**: <code>number</code> - l  

| Param | Type | Description |
| --- | --- | --- |
| massBarleyMalt | <code>number</code> | kg |

<a name="wheatMaltVolume"></a>
## wheatMaltVolume(massWheatMalt) ⇒ <code>number</code>
Calculates wheat malt volume

**Kind**: global function  
**Returns**: <code>number</code> - l  

| Param | Type | Description |
| --- | --- | --- |
| massWheatMalt | <code>number</code> | kg |

<a name="cylinderVolume"></a>
## cylinderVolume(cylinderRadius, cylinderHeight) ⇒ <code>number</code>
Calculates cylinder volume

**Kind**: global function  
**Returns**: <code>number</code> - l  

| Param | Type | Description |
| --- | --- | --- |
| cylinderRadius | <code>number</code> | cm |
| cylinderHeight | <code>number</code> | cm |

<a name="pressureKeg"></a>
## pressureKeg(sparklingLevel, kegTemperature) ⇒ <code>number</code>
Calculate pressure in keg

**Kind**: global function  
**Returns**: <code>number</code> - bar  

| Param | Type | Description |
| --- | --- | --- |
| sparklingLevel | <code>number</code> | g/l |
| kegTemperature | <code>number</code> | °C |

<a name="ruleOfThree"></a>
## ruleOfThree(firstRatio, secondRatio, firstValue, secondValue) ⇒ <code>number</code>
Rule of Three

**Kind**: global function  
**Returns**: <code>number</code> - n  

| Param | Type | Description |
| --- | --- | --- |
| firstRatio | <code>number</code> | n |
| secondRatio | <code>number</code> | n |
| firstValue | <code>number</code> | n |
| secondValue | <code>number</code> | n |

<a name="blendingCross"></a>
## blendingCross(firstRatio, secondRatio, firstValue, secondValue, targetValue) ⇒ <code>number</code>
Blending cross

**Kind**: global function  
**Returns**: <code>number</code> - n  

| Param | Type | Description |
| --- | --- | --- |
| firstRatio | <code>number</code> | n |
| secondRatio | <code>number</code> | n |
| firstValue | <code>number</code> | n |
| secondValue | <code>number</code> | n |
| targetValue | <code>number</code> | n |

<a name="convertUnit"></a>
## convertUnit(inputUnit, outputUnit, value) ⇒ <code>number</code>
Converts units

**Kind**: global function  
**Returns**: <code>number</code> - n  

| Param | Type | Description |
| --- | --- | --- |
| inputUnit | <code>string</code> | string |
| outputUnit | <code>string</code> | string |
| value | <code>number</code> | n |

