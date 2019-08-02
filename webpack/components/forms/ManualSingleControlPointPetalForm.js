import React from 'react';
import SliderInput from "../controls/SliderInput";
import { FormGroup } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const ManualSingleControlPointPetalForm = props => (
    <FormGroup>
        <Grid container>
            <Grid item>
                <SliderInput
                    min={1}
                    max={3000}
                    name={`Outer Radius (px)`}
                    description={`Radius of the point where the petal will terminate.`}
                    value={props.outerRadius}
                    updateValue={props.updateOuterRadius}
                />
            </Grid>
            <Grid item>
                <SliderInput
                    min={1}
                    max={1400}
                    name={`Inner Radius (px)`}
                    description={`Radius of the point where the petal will originate.`}
                    value={props.innerRadius}
                    updateValue={props.updateInnerRadius}
                />
            </Grid>
            <Grid item>
                <SliderInput
                    min={-1000}
                    max={1000}
                    name={`X Left Control Point (px)`}
                    description={`Offset in pixels of the x coordinate of the control point. The control point is placed relative to the inner point of the petal.`}
                    value={props.innerXLeftControl}
                    updateValue={props.updateInnerXLeftControl}
                />
            </Grid>
            <Grid item>
                <SliderInput
                    min={-1000}
                    max={1000}
                    name={`X Right Control Point (px)`}
                    description={`Offset in pixels of the x coordinate of the control point. The control point is placed relative to the inner point of the petal.`}
                    value={props.innerXRightControl}
                    updateValue={props.updateInnerXRightControl}
                />
            </Grid>
            <Grid item>
                <SliderInput
                    min={-1000}
                    max={1000}
                    name={`Y Left Control Point (px)`}
                    description={`Offset in pixels of the y coordinate of the control point. The control point is placed relative to the inner point of the petal.`}
                    value={props.innerYLeftControl}
                    updateValue={props.updateInnerYLeftControl}
                />
            </Grid>
            <Grid item>
                <SliderInput
                    min={-1000}
                    max={1000}
                    name={`Y Right Control Point (px)`}
                    description={`Offset in pixels of the y coordinate of the control point. The control point is placed relative to the inner point of the petal.`}
                    value={props.innerYRightControl}
                    updateValue={props.updateInnerYRightControl}
                />
            </Grid>
            <Grid item>
                <SliderInput
                    min={0}
                    max={500}
                    name={`Inner Gap (px)`}
                    description={`How far apart the base points of each petal are.`}
                    value={props.innerGap}
                    updateValue={props.updateInnerGap}
                />
            </Grid>
            <Grid item>
                <SliderInput
                    min={0}
                    max={500}
                    name={`Outer Gap (px)`}
                    description={`How far apart the base points of each petal are.`}
                    value={props.outerGap}
                    updateValue={props.updateOuterGap}
                />
            </Grid>
            <Grid item>
                <SliderInput
                    min={1}
                    max={36}
                    name={`Axes`}
                    description={`Number of axes to draw the petals on.`}
                    value={props.axes}
                    updateValue={props.updateAxes}
                />
            </Grid>
            <Grid item>
                <SliderInput
                    min={0}
                    max={360}
                    name={`Rotation (degrees)`}
                    description={`Rotate the ring by a set amount of degrees`}
                    value={props.rotation}
                    updateValue={props.updateRotation}
                />
            </Grid>
        </Grid>
    </FormGroup>
);

export default ManualSingleControlPointPetalForm;