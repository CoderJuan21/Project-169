AFRAME .registerComponent("markerhandler",{
    init:async function(){ 
this.el.addEventListener("markerFound",()=>{
    console.log("marker is found")
    this.handleMarkerFound()
} )
this.el.addEventListener("markerLost",()=>{
    console.log("marker is lost")
    this.handleMarkerLost()
})
    },
    handleMarkerFound:function(){
        var buttondiv = document.getElementById("button-div")
        buttondiv.style.display = "flex"
        var ratingbutton = document.getElementById("desc-button")
        var orderbutton = document.getElementById("order-button")

        ratingbutton.addEventListener("click",function(){
            swal({
                icon:"https://www.dwu.ac.pg/clt/images/RATES-pinnaclebowl.jpg",
                title:"Order Button",
                text:"work in progress"
            }) 
        })
        orderbutton.addEventListener("click",function(){
            swal({
                icon:"data:image/jpeg;base64,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",
                title:"Thanks for ordering!!!!!",
                text:"Your toy will be delivered soon>:("
            }) 
        })
    },
    handleMarkerLost:function(){
        var buttondiv = document.getElementById("button-div")
        buttondiv.style.display = "none"
    }

})