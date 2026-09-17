import { useEffect, useRef } from "react";
import { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } from "./model/ymaps3";

import "./style.css";

const POINTS = [
  {
    coordinates: [37.562083, 55.819828] as [number, number],
    title: "Филиал №1",
  },
  {
    coordinates: [37.572037, 55.842085] as [number, number],
    title: "Филиал №2",
  },
  {
    coordinates: [37.566332, 55.862176] as [number, number],
    title: "Филиал №3",
  },
  {
    coordinates: [37.537074, 55.885287] as [number, number],
    title: "Филиал №4",
  },
  {
    coordinates: [37.477049, 55.840144] as [number, number],
    title: "Филиал №5",
  },
];

function Fillial() {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new YMap(mapContainerRef.current, {
      location: {
        center: [37.53, 55.845],
        zoom: 12,
      },
    });

    map.addChild(new YMapDefaultSchemeLayer({}));
    map.addChild(new YMapDefaultFeaturesLayer({}));

    POINTS.forEach((point) => {
      const markerElement = document.createElement("div");

      markerElement.className = "map-marker";
      markerElement.textContent = "📍";

      const marker = new YMapMarker(
        {
          coordinates: point.coordinates,
        },
        markerElement,
      );

      map.addChild(marker);
    });

    return () => {
      map.destroy();
    };
  }, []);
  return (
    <section className="Filial">
      <span className="filial_text">Наши филиалы</span>

      <div className="grid_filial">
        <div className="grid-item">1</div>
        <div className="grid-item">2</div>
        <div className="grid-item">3</div>
        <div className="grid-item">4</div>

        <div className="grid-item">
          <div
            ref={mapContainerRef}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>

        <div className="grid-item">6</div>
      </div>
    </section>
  );
}

export default Fillial;
