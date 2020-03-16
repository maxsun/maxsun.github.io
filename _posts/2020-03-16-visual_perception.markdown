---
layout: post
title: "Visual Info Processing in the Brain"
---

# Visual Information Processing

Notes from Berkeley's *Psych c126; Perception*.

## The Eye

![eyeball](/assets/image/eyeball.jpeg)

The **Cornea** is a transparent window into the eyeball -- it functions as the main boundary between the rest of the eyeball and the outside world. The Cornea performs the majority of light refraction in the eye, focusing light onto the retina.

The **Lens** is a transparent structure in the eye which enables fine-tuning of the light in the eye. The lens sits in a watery substance controlled by  muscles which allow it to be adjusted to focus light appropriately.

The **Iris** is the colored part of the eye made up of muscles surrounding the pupil, which allows the eye to regulate the amount of light entering the eye by expanding and contracting the pupil.

The **Pupil** is the opening in the center of the Iris, where light enters the eye.

The **Retina** is the light sensitive membrane on the back of the eye which picks-up the light focused through the lens and transmits the information to the brain via the optic nerve.

The **Fovea** is the main focal point in the Retina, where the majority of light is focused. The Fovea contains the majority of Cones and almost no Rods, making it ideal for perceiving colored light, during the day.

## Rods & Cones

![retina diagram](/assets/image/retina.jpeg)

Rods & Cones are the main types of [photoreceptor](https://en.wikipedia.org/wiki/Photoreceptor_cell) cells in the retina.

**Rods** are primarily sensitive to low light and black & white colors. There are ~100 million Rods in the eye, distributed mostly in the periphery of the eye, away from the Fovea.

**Cones** come in 3 variations: Red, Green, and Blue. Each type of Cone responds differently to certain frequencies of light. There are  ~6 million Cones in the Retina, mostly packed into the Fovea.

**Scotopic Vision** refers to vision in low-light, **Photopic Vision** refers to vision in day light.

The optic nerve exits the eye at the **Optic Disk** in the retina. This produces a **Blind Spot**, where no receptors can exist (because the nerve is blocking their space).

![rods & cones distribution](/assets/image/rods_and_cones_distribution.jpeg)

## Ganglion Cells

**Ganglion Cells** aggregate visual information received from photoreceptor cells via bipolar & amacrine cells (other types of cells in the retina). 

The axons of Ganglion Cells form the Optic Nerve, forwarding the processed information further into the brain.

While Rods & Cones respond to light they come in direct contact with, Ganglion cells respond to circular fields of contrasting light -- either light in the center and dark surrounding, or vice-versa:

![ganglion receptor fields](/assets/image/ganglion_rf.jpeg)

**On-center** receptive fields the fire in response to an increase in light intensity in the center. **Off-center** fields fire in response to decreased light intensity in the center.

## LGN Receptive Fields

The **Lateral Geniculate Nucleus** (LGN) is a structure in the Thalamus, which receives information from the Retinal Ganglion Cells, and sends processed information to the Visual Cortex. There is a LGN in both the right and left hemispheres, but each side only receives information from one half of the visual field.

![eyes to lgn diagram](/assets/image/eyes_to_lgn_pathway.jpeg)

The LGN contains organized Ganglion Cells and their corresponding circular receptive fields. Additionally, the cells in the LGN retain the positional information of information; adjacent cells in the retina have adjacent receptive fields in the LGN.

## Simple Cells

A **Simple Cell** is a type of cell in the Visual Cortex whose response is sensitive to the orientation and position of input visual information. Simple Cells aggregate information from LGN Cells such that they respond selectively to bars of certain orientations.

![simple cell response](/assets/image/simple_cell_response.jpeg)

Simple Cells were discovered by **Hubel & Wiesel**, who mapped the receptive field of a simple cell using electrodes, and discovered orientation selectivity.

Hubel & Wiesel suggested that Complex Cells were constructed by combining nearby simple cells of the same orientation. Consequently, a Complex cell would be capable of responding to regions containing patterns of both light and dark regions. Simple Cells, in contrast, would have distinct inhibitory (off) and excitatory (on) regions. Further, they suggest that *all* of vision is ultimately grounded on these Simple Cell "line detectors".

An **Orientation Tuning Curve** represents the response of a Simple Cell to a range of orientations:

 ![orientation tuning curve](/assets/image/orientation_curve.jpeg)

## Complex Cells

**Complex Cells** are sensitive to orientation, but not necessarily position. Complex Cells aggregate Simple Cells, making their "on" and "off" regions non-fixed. In other words, Complex Cells use information from Simple Cells to detect if anything within an area has a certain orientation. Additionally, Complex Cells are capable of responding to both light and dark orientated bars. Simple complex cells respond primarily to movement in a certain direction.

![complex cell response](/assets/image/complex_cell_response.jpeg)

## Hypercomplex Cells

**Hypercomplex Cells**, also called **End-stopped Cells**,  are cells in V1 receptive to orientation and length. Like Complex Cells, these cells respond to orientation in any location, but Hypercomplex Cells also respond to relative length of the stimulus. Hypercomplex Cells also respond to movement in a specific direction.

![hypercomplex cell response](/assets/image/hypercomplex_cell_response.jpeg)

## Orientation Column

**Orientation Columns** are vertical structures in the V1 mostly composed of Complex Cells responding to the same orientation input. Essentially, they are aggregations of Complex Cells corresponding to nearby areas on the retina. Coloring the surface of V1 according to Orientation Columns reveals a "pinwheel" distribution. The stars in the image below represent regions where all orientations are represented around a single focal point.

![orientation column map](/assets/image/orientation_columns.png)

At each focal point (represented by the stars in the image above), Orientation Columns for all orientations are present:

![orientation column phase](/assets/image/orientation_column_phase.jpeg)

## Ocular Dominance Slabs

**Ocular Dominance Slabs** are striped regions in the V1 (perpendicular to Orientation Columns) that respond specifically to inputs from either eye. If the surface of V1 were colored according to which eye the region responds to, it would produce the following striped image of the Ocular Dominance Slabs:

![ocular dominance stripes](/assets/image/occular_dominance_stripes.png)

 ## Hypercolumns

**Hypercolumns** are areas in the V1 containing all the measurements for one region on the retina. Hypercolumns demonstrate **Retinotopy**; adjacent Hypercolumns correspond to adjacent regions on the retina. The exact physical description of a Hypercolumn is imprecise; it's mainly a theoretical idea of a discrete unit of Orientation Columns and Ocular Dominance Slabs.

![hypercolumn](/assets/image/hypercolumn.jpeg)

## Line Detectors vs Spatial Frequency

When Hubel & Wiesel discovered orientation-selectivity, they suggested that the shapes we perceive are produced by combining line-segments detected by Hypercolumns. However, line-segments cause very binary and exact representations of information -- something is either "on" or "off". In reality, our receptive fields have overlapping elements and it's more likely that they process information in a more dynamic way. Modern theories (following DeValois) endorse the idea that **Spatial Frequency** plays a vital role in the representation of visual information. 

![receptor field spatial frequency diagram](/assets/image/receptor_spatial_frequency.png)