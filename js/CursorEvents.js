AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function () {
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
    this.handleClickEvent();
    
  },

  handlePlacesListState: function () {
    const id = this.el.getAttribute("id");
    const placesId = ["taj-mahal", "budapest", "new-york-city", "eiffel-tower"];
    if (placesId.includes(id)) {
      const placeContainer = document.querySelector("#places-container");
      placeContainer.setAttribute("cursor-listener", {
        selectedItemId: id,
      });
      this.el.setAttribute("material", {
        color: "#D76B30",
        opacity: 1,
      });
    }
  },
  handleMouseEnterEvents: function () {
    // Mouse Enter Events
    this.el.addEventListener("mouseenter", () => {
      this.handlePlacesListState();
    });
  },
  handleMouseLeaveEvents: function () {
    // Mouse Leave Events
    this.el.addEventListener("mouseleave", () => {
      const {selectedItemId} = this.data;
      if (selectedItemId){
        const element = document.querySelector(`#${selectedItemId}`)
        const id = element.getAttribute("id")
        if (id == selectedItemId){
          element.setAttribute("material",{
            color:"#0077CC",opacity:1})
        }
      }

    })
    
  },
  handleClickEvent:function(){
    this.el.addEventListener("click",(evt)=>{
      console.log("click")
      const placesContainer = document.querySelector("#places-container")
      const {state} = placesContainer.getAttribute("tour")
      if(state==="places-list"){
        const id = this.el.getAttribute("id")
        const places_id = ["taj-mahal","budapest","new-york-city","eiffel-tower"]
        if(places_id.includes(id)){
          placesContainer.setAttribute("tour",{state:"view",selectedCard:id})
        }
      }
    })
  }
});
