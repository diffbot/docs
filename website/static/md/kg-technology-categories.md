---
id: kg-technology-categories-list
title: Technology Categories
onPageNav: false
---

The list below outlines all possible categories that may be returned within the `technographics` attribute in Organization entity types. A list of all categories may also be accessed as their own entity type (`type:TechnologyCategory`) or found in the `technologyCategories` attribute in its parent `type:Technology`. See the DQL examples below for more color.

```python
# To find organizations that use "Assisted Living Software"
type:Organization technographics.categories:"Assisted Living Software"
```

```python
# To find all technologies associated with the technology category "Real Estate Agency Software"
type:Technology technologyCategories:"Real Estate Agency Software"
```

| Primary Category    | Secondary Category | Tertiary Category                   |  Quaternary Category |
| ------------------- | ------------------ | ----------------------------------- | ---- |
{{ #technologyCategories }}
|  {{ name }}         |                   |   |  |
{{ #children }}
|          |  {{ name }}                 |  |  |
{{ #children }}
|          |                  | {{ name }}  |  |
{{ #children }}
|          |                  |   | {{ name }} |
{{ /children }}
{{ /children }}
{{ /children }}
{{ /technologyCategories }}


<style>
/* Hides the Right-Hand Secondary Nav for a Full Width Industry Table */
.onPageNav {
    display: none;
}
/* Hides the Unnecessary Prev/Next Buttons for this Reference Doc */
.docs-prevnext {
    display: none;
}
</style>