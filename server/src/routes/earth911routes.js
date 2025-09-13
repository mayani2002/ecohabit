import { Router } from "express";
import {
  getLocationDetails,
  getPostalData,
  searchLocations,
  getCentersDetail,
} from "../controller/earth911controller.js";
const earth911Router = Router();

/* Recycle Centes. */
const recyclingCentersPrefix = "/recyclingcenters";

earth911Router.get(
  `${recyclingCentersPrefix}/getPostalData/country/:country/postal/:postal/id/:id`,
  getPostalData
);
earth911Router.get(
  `${recyclingCentersPrefix}/getLocationDetails/:locId/id/:id`,
  getLocationDetails
);
earth911Router.get(
  `${recyclingCentersPrefix}/searchLocations/log/:log/lat/:lat/id/:id`,
  searchLocations
);
earth911Router.get(
  `${recyclingCentersPrefix}/country/:country/postal/:postal/id/:id`,
  getCentersDetail
);

export default earth911Router;
