---
id: api-product-normalized-specs
title: Product API: Normalized Specs
sidebar_label: Product API: Normalized Specs
---

<div id="docBody">


<div class="tabbable">



<div class="tab-content">
<div class="tab-pane active" id="v3">
<p>The <code>normalizedSpecs</code> field returns a product's automatically standardized/sanitized specifications, if a specs table and/or similar elements are detected on a page. Numeric values for many specifications are normalized into a standard units.</p>
<h3 id="request">Data Returned</h3>

<p>Each key will return an array of values. Single-value specifications will contain a single-element array. For each value, the following possible fields will be returned:</p>

<table class="controls table table-bordered" id="fields" border="0" cellpadding="5">
<thead><tr>
<th>Field</th>
<th>Description</th>
</tr></thead>

<tbody>
<tr>
<td class=""><code>cleanLiteral</code></td>
<td class=" default"><div>A sanitized version of the text string.</div></td>
</tr>
<tr>
<td class=""><code>unit</code></td>
<td class=" default"><div>Normalized output unit, if applicable, per below table.</div></td>
</tr>
<tr>
<td class=""><code>value</code></td>
<td class=" default"><div>Normalized output value, if applicable, according to the <code>unit</code>.</div></td>
</tr>
</tbody>
</table>

<h3 id="sampleresponse">Example Response</h3>
<div class="indent">
  

```text
"normalizedSpecs_beta": {
  "color": [
    {
      "unit": "rgbHex",
      "cleanLiteral": "Fluorescent Pink",
      "value": "FF1493"
    },
    {
      "unit": "rgbHex",
      "cleanLiteral": "Soft White",
      "value": "E0E4DF"
    },
    {
      "unit": "rgbHex",
      "cleanLiteral": "Diffbot Blue",
      "value": "112532"
    },
  ],
  "dataCapacity": [
    {
      "unit": "KILOBYTE",
      "cleanLiteral": "1.0 TB",
      "value": 1073741824
    }
  ],
  "minOperatingTemperature": [
    {
      "unit": "CELSIUS",
      "cleanLiteral": "32.0 F",
      "value": -0.00000799999999756551
    }
  ],
  "shippingDepth": [
    {
      "unit": "METER",
      "cleanLiteral": "5.6 in",
      "value": 0.1422
    }
  ],
  "shippingWeight": [
    {
      "unit": "KILOGRAM",
      "cleanLiteral": "0.3 lb",
      "value": 0.1361
    }
  ] ,
  "sku": [
    {
      "cleanLiteral": "A8237"
    }
  ]
}
```


</div>

<h3>List of Normalized Keys</h3>

<table class="controls table table-bordered" border="0" cellpadding="5">
<thead>
<tr>
<th>Normalized Key</th>
<th>Type</th>
<th>Normalized Value Unit</th>
</tr>
</thead>
<tr>
<td><code>armLength</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>audioJackDiameter</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>batteryCapacity</code></td>
<td>numeric</td>
<td>coulomb</td>
</tr>
<tr>
<td><code>bookFormat</code></td>
<td>string</td>
<td>n/a</td>
</tr>
<tr>
<td><code>brand</code></td>
<td>string</td>
<td>n/a</td>
</tr>
<tr>
<td><code>busClockFrequency</code></td>
<td>numeric</td>
<td>hertz</td>
</tr>
<tr>
<td><code>bust</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>dataCapacity</code></td>
<td>numeric</td>
<td>kilobyte</td>
</tr>
<tr>
<td><code>chest</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>circumference</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>clockFrequency</code></td>
<td>numeric</td>
<td>hertz</td>
</tr>
<tr>
<td><code>color</code></td>
<td>string</td>
<td>rgb hex value</td>
</tr>
<tr>
<td><code>condition</code></td>
<td>string</td>
<td>n/a</td>
</tr>
<tr>
<td><code>copyingSpeed</code></td>
<td>numeric</td>
<td>pageperminute</td>
</tr>
<tr>
<td><code>cordLength</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>countryOfOrigin</code></td>
<td>string</td>
<td>n/a</td>
</tr>
<tr>
<td><code>dataReadSpeed</code></td>
<td>numeric</td>
<td>kilobytepersecond</td>
</tr>
<tr>
<td><code>dataTransmissionSpeed</code></td>
<td>numeric</td>
<td>kilobytepersecond</td>
</tr>
<tr>
<td><code>dataWriteSpeed</code></td>
<td>numeric</td>
<td>kilobytepersecond</td>
</tr>
<tr>
<td><code>depth</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>diameter</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>fileSize</code></td>
<td>numeric</td>
<td>kilobyte</td>
</tr>
<tr>
<td><code>focalLength</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>fuelConsumptionCity</code></td>
<td>numeric</td>
<td>literperkilometer</td>
</tr>
<tr>
<td><code>fuelConsumptionCombined</code></td>
<td>numeric</td>
<td>literperkilometer</td>
</tr>
<tr>
<td><code>fuelConsumptionHighway</code></td>
<td>numeric</td>
<td>literperkilometer</td>
</tr>
<tr>
<td><code>gender</code></td>
<td>string</td>
<td>n/a</td>
</tr>
<tr>
<td><code>genre</code></td>
<td>string</td>
<td>n/a</td>
</tr>
<tr>
<td><code>gpuFrequencyClock</code></td>
<td>numeric</td>
<td>hertz</td>
</tr>
<tr>
<td><code>heel</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>height</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>hips</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>impedance</code></td>
<td>numeric</td>
<td>OHM</td>
</tr>
<tr>
<td><code>inkColor</code></td>
<td>string</td>
<td>n/a</td>
</tr>
<tr>
<td><code>innerDiameter</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>inputVoltage</code></td>
<td>numeric</td>
<td>volt</td>
</tr>
<tr>
<td><code>inseam</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>language</code></td>
<td>string</td>
<td>n/a</td>
</tr>
<tr>
<td><code>length</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>lensDiameter</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>lensWidth</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>material</code></td>
<td>string</td>
<td>n/a</td>
</tr>
<tr>
<td><code>maxFocalLength</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>maxFrequencyResponse</code></td>
<td>numeric</td>
<td>hertz</td>
</tr>
<tr>
<td><code>maxWeight</code></td>
<td>numeric</td>
<td>kilogram</td>
</tr>
<tr>
<td><code>maxWeightCapacity</code></td>
<td>numeric</td>
<td>kilogram</td>
</tr>
<tr>
<td><code>maxOperatingTemperature</code></td>
<td>numeric</td>
<td>celsius</td>
</tr>
<tr>
<td><code>maxStorageTemperature</code></td>
<td>numeric</td>
<td>celsius</td>
</tr>
<tr>
<td><code>memoryClockFrequency</code></td>
<td>numeric</td>
<td>hertz</td>
</tr>
<tr>
<td><code>mileage</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>minFocalLength</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>minFrequencyResponse</code></td>
<td>numeric</td>
<td>hertz</td>
</tr>
<tr>
<td><code>minWeight</code></td>
<td>numeric</td>
<td>kilogram</td>
</tr>
<tr>
<td><code>minWeightCapacity</code></td>
<td>numeric</td>
<td>kilogram</td>
</tr>
<tr>
<td><code>minOperatingTemperature</code></td>
<td>numeric</td>
<td>celsius</td>
</tr>
<tr>
<td><code>minStorageTemperature</code></td>
<td>numeric</td>
<td>celsius</td>
</tr>
<tr>
<td><code>mpn</code></td>
<td>string</td>
<td>n/a</td>
</tr>
<tr>
<td><code>neck</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>operating_temperature</code></td>
<td>numeric</td>
<td>celsius</td>
</tr>
<tr>
<td><code>opticalWaveLength</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>outerDiameter</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>outputVoltage</code></td>
<td>numeric</td>
<td>volt</td>
</tr>
<tr>
<td><code>power</code></td>
<td>numeric</td>
<td>watt</td>
</tr>
<tr>
<td><code>powerConsumption</code></td>
<td>numeric</td>
<td>watt</td>
</tr>
<tr>
<td><code>powerConsumptionIdle</code></td>
<td>numeric</td>
<td>watt</td>
</tr>
<tr>
<td><code>powerDeveloped</code></td>
<td>numeric</td>
<td>watt</td>
</tr>
<tr>
<td><code>powerRMS</code></td>
<td>numeric</td>
<td>watt</td>
</tr>
<tr>
<td><code>printSpeedBlack</code></td>
<td>numeric</td>
<td>pageperminute</td>
</tr>
<tr>
<td><code>printSpeedColor</code></td>
<td>numeric</td>
<td>pageperminute</td>
</tr>
<tr>
<td><code>printSpeedCombined</code></td>
<td>numeric</td>
<td>pageperminute</td>
</tr>
<tr>
<td><code>processorCache</code></td>
<td>numeric</td>
<td>kilobyte</td>
</tr>
<tr>
<td><code>processorClockFrequency</code></td>
<td>numeric</td>
<td>hertz</td>
</tr>
<tr>
<td><code>publisher</code></td>
<td>string</td>
<td>n/a</td>
</tr>
<tr>
<td><code>ramSize</code></td>
<td>numeric</td>
<td>kilobyte</td>
</tr>
<tr>
<td><code>refreshRate</code></td>
<td>numeric</td>
<td>hertz</td>
</tr>
<tr>
<td><code>resolutionX</code></td>
<td>numeric</td>
<td>n/a</td>
</tr>
<tr>
<td><code>resolutionY</code></td>
<td>numeric</td>
<td>n/a</td>
</tr>
<tr>
<td><code>screenDiagonal</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>shippingDepth</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>shippingHeight</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>shippingLength</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>shippingWeight</code></td>
<td>numeric</td>
<td>kilogram</td>
</tr>
<tr>
<td><code>shippingWidth</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>shoulders</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>sku</code></td>
<td>string</td>
<td>n/a</td>
</tr>
<tr>
<td><code>sleeveLength</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>style</code></td>
<td>string</td>
<td>n/a</td>
</tr>
<tr>
<td><code>subtitlesLanguage</code></td>
<td>string</td>
<td>n/a</td>
</tr>
<tr>
<td><code>supportedRamSize</code></td>
<td>numeric</td>
<td>kilobyte</td>
</tr>
<tr>
<td><code>thermalDesignPower</code></td>
<td>numeric</td>
<td>watt</td>
</tr>
<tr>
<td><code>waist</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>warrantyDuration</code></td>
<td>numeric</td>
<td>second</td>
</tr>
<tr>
<td><code>waterResistance</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>weight</code></td>
<td>numeric</td>
<td>kilogram</td>
</tr>
<tr>
<td><code>weightCapacity</code></td>
<td>numeric</td>
<td>kilogram</td>
</tr>
<tr>
<td><code>wheelDiameter</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
<tr>
<td><code>width</code></td>
<td>numeric</td>
<td>meter</td>
</tr>
</table>

</div>


</div>


</div>






</div>