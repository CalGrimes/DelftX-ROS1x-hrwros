
"use strict";

let AGVControl = require('./AGVControl.js')
let SubmitTray = require('./SubmitTray.js')
let ConveyorBeltControl = require('./ConveyorBeltControl.js')
let PopulationControl = require('./PopulationControl.js')
let GetMaterialLocations = require('./GetMaterialLocations.js')
let VacuumGripperControl = require('./VacuumGripperControl.js')

module.exports = {
  AGVControl: AGVControl,
  SubmitTray: SubmitTray,
  ConveyorBeltControl: ConveyorBeltControl,
  PopulationControl: PopulationControl,
  GetMaterialLocations: GetMaterialLocations,
  VacuumGripperControl: VacuumGripperControl,
};
