<script setup>

 
const props = defineProps({
    cols: Number,
    gap: Number,
    smCols:Number,
    smGap:Number,
    mdCols:Number,
    mdGap:Number,
    lgCols:Number,
    lgGap:Number,
    xlCols:Number,
    xlGap:Number,
    xlxlCols:Number,
    xlxlGap:Number,
})


function getClass(){

     
    let class_array=["grid"]

    if (props.cols){
        class_array.push("grid-cols-"+props.cols)
    }else{
        class_array.push("grid-cols-1")
    }

    if (props.gap){
        class_array.push("gap-"+props.gap)
    }else{
        class_array.push("gap-5")
    }

    if (props.smCols){
        class_array.push("sm:grid-cols-"+props.smCols)
    } 

    if (props.smGap){
        class_array.push("sm:gap-"+props.smGap)
    } 

    if (props.mdCols){
        class_array.push("md:grid-cols-"+props.mdCols)
    } 

    if (props.mdGap){
        class_array.push("md:gap-"+props.mdGap)
    } 

    if (props.lgCols){
        class_array.push("lg:grid-cols-"+props.lgCols)
    } 

    if (props.lgGap){
        class_array.push("lg:gap-"+props.lgGap)
    } 

    if (props.xlCols){
        class_array.push("xl:grid-cols-"+props.xlCols)
    } 

    if (props.xlGap){
        class_array.push("xl:gap-"+props.xlGap)
    } 

    if (props.xlxlCols){
        class_array.push("2xl:grid-cols-"+props.xlxlCols)
    } 

    if (props.xlxlGap){
        class_array.push("2xl:gap-"+props.xlxlGap)
    } 

    return class_array
}

let class_array=getClass()

</script> 


<template>
    <div  :class=class_array>
        <slot></slot>
    </div>
</template>
 
