import "./style.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { fromLonLat, transform } from "ol/proj.js";
import OSM from "ol/source/OSM";
import Feature from "ol/Feature.js";
import { Point } from "ol/geom";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";

import { db } from "./config";
import { ref, onValue } from "firebase/database";

let longitude;
let latitude;

const starCountRef = ref(db, "users/");
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  // console.log(data.user1.lat);
  // console.log(data.user1.lon);
  longitude = data.user1.lon;
  latitude = data.user1.lat;
 

  const map = new Map({
    target: "map",
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    view: new View({
      center: fromLonLat([longitude, latitude]),
      zoom: 8,
    }),
  });

  var markerLocation = fromLonLat([longitude, latitude]);

  var markerFeature = new Feature({
    geometry: new Point(markerLocation),
    name: "My Marker",
    description: "This is a marker",
  });

  var markerLayer = new VectorLayer({
    source: new VectorSource({
      features: [markerFeature],
    }),
    style: new Style({
      image: new Icon({
        src: "./assets/placeholder.png",
        anchor: [0.5, 1],
        scale: 0.15,
      }),
    }),
  });

  map.addLayer(markerLayer);

  // window.setInterval(() => {
  //   markerFeature.getGeometry().setCoordinates(fromLonLat([longitude, latitude]));
  //   console.log(longitude)
  //   console.log(latitude)
  // }, 5000);
  
 
});
