function addGUI(){
    // GUIパラメータ
    let guiCtrl = function(){
        this.Hex_height = 0.28;
        this.time = 0.001;
 
    };

    gui = new dat.GUI();
    guiObj = new guiCtrl();
    const building = gui.addFolder('building');
    building.add(guiObj, 'Hex_height', 0.001, 2.001);
    building.add(guiObj, 'time', 0.001, 10.001);

    gui.open();
    
    return guiObj;
}