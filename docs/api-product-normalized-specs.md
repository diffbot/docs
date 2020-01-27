---
id: api-product-normalized-specs
title: Product API: Normalized Specs
sidebar_label: Product API: Normalized Specs
---

The `normalizedSpecs` field returns a product's automatically standardized/sanitized specifications, if a specs table and/or similar elements are detected on a page. Numeric values for many specifications are normalized into a standard units.

## Data Returned

Each key will return an array of values. Single-value specifications will contain a single-element array. For each value, the following possible fields will be returned:

| Field | Description |
| :---- | :---------- |
| `cleanLiteral` | A sanitized version of the text string. |
| `unit` | Normalized output unit, if applicable, per below table. |
| `value` | Normalized output value, if applicable, according to the `unit`. |

## Example Response

```json
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

## List of Normalized Keys

| Normalized Key | Type | Normalized Value Unit |
| :------------- | :--- | :-------------------- |
| `armLength` | numeric | meter |
| `audioJackDiameter` | numeric | meter |
| `batteryCapacity` | numeric | coulomb |
| `bookFormat` | string | n/a |
| `brand` | string | n/a |
| `busClockFrequency` | numeric | hertz |
| `bust` | numeric | meter |
| `dataCapacity` | numeric | kilobyte |
| `chest` | numeric | meter |
| `circumference` | numeric | meter |
| `clockFrequency` | numeric | hertz |
| `color` | string | rgb hex value |
| `condition` | string | n/a |
| `copyingSpeed` | numeric | pageperminute |
| `cordLength` | numeric | meter |
| `countryOfOrigin` | string | n/a |
| `dataReadSpeed` | numeric | kilobytepersecond |
| `dataTransmissionSpeed` | numeric | kilobytepersecond |
| `dataWriteSpeed` | numeric | kilobytepersecond |
| `depth` | numeric | meter |
| `diameter` | numeric | meter |
| `fileSize` | numeric | kilobyte |
| `focalLength` | numeric | meter |
| `fuelConsumptionCity` | numeric | literperkilometer |
| `fuelConsumptionCombined` | numeric | literperkilometer |
| `fuelConsumptionHighway` | numeric | literperkilometer |
| `gender` | string | n/a |
| `genre` | string | n/a |
| `gpuFrequencyClock` | numeric | hertz |
| `heel` | numeric | meter |
| `height` | numeric | meter |
| `hips` | numeric | meter |
| `impedance` | numeric | OHM |
| `inkColor` | string | n/a |
| `innerDiameter` | numeric | meter |
| `inputVoltage` | numeric | volt |
| `inseam` | numeric | meter |
| `language` | string | n/a |
| `length` | numeric | meter |
| `lensDiameter` | numeric | meter |
| `lensWidth` | numeric | meter |
| `material` | string | n/a |
| `maxFocalLength` | numeric | meter |
| `maxFrequencyResponse` | numeric | hertz |
| `maxWeight` | numeric | kilogram |
| `maxWeightCapacity` | numeric | kilogram |
| `maxOperatingTemperature` | numeric | celsius |
| `maxStorageTemperature` | numeric | celsius |
| `memoryClockFrequency` | numeric | hertz |
| `mileage` | numeric | meter |
| `minFocalLength` | numeric | meter |
| `minFrequencyResponse` | numeric | hertz |
| `minWeight` | numeric | kilogram |
| `minWeightCapacity` | numeric | kilogram |
| `minOperatingTemperature` | numeric | celsius |
| `minStorageTemperature` | numeric | celsius |
| `mpn` | string | n/a |
| `neck` | numeric | meter |
| `operating_temperature` | numeric | celsius |
| `opticalWaveLength` | numeric | meter |
| `outerDiameter` | numeric | meter |
| `outputVoltage` | numeric | volt |
| `power` | numeric | watt |
| `powerConsumption` | numeric | watt |
| `powerConsumptionIdle` | numeric | watt |
| `powerDeveloped` | numeric | watt |
| `powerRMS` | numeric | watt |
| `printSpeedBlack` | numeric | pageperminute |
| `printSpeedColor` | numeric | pageperminute |
| `printSpeedCombined` | numeric | pageperminute |
| `processorCache` | numeric | kilobyte |
| `processorClockFrequency` | numeric | hertz |
| `publisher` | string | n/a |
| `ramSize` | numeric | kilobyte |
| `refreshRate` | numeric | hertz |
| `resolutionX` | numeric | n/a |
| `resolutionY` | numeric | n/a |
| `screenDiagonal` | numeric | meter |
| `shippingDepth` | numeric | meter |
| `shippingHeight` | numeric | meter |
| `shippingLength` | numeric | meter |
| `shippingWeight` | numeric | kilogram |
| `shippingWidth` | numeric | meter |
| `shoulders` | numeric | meter |
| `sku` | string | n/a |
| `sleeveLength` | numeric | meter |
| `style` | string | n/a |
| `subtitlesLanguage` | string | n/a |
| `supportedRamSize` | numeric | kilobyte |
| `thermalDesignPower` | numeric | watt |
| `waist` | numeric | meter |
| `warrantyDuration` | numeric | second |
| `waterResistance` | numeric | meter |
| `weight` | numeric | kilogram |
| `weightCapacity` | numeric | kilogram |
| `wheelDiameter` | numeric | meter |
| `width` | numeric | meter |
