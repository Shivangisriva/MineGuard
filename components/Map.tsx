"use client";

import { MapContainer, TileLayer, Polygon, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type Region = {
  id: number;
  name: string;
  coords: [number, number][];
};

type Props = {
  tempValues: { [key: number]: number };
  rainfallValues: { [key: number]: number };
  frostValues: { [key: number]: number };
  selectedRegion: number | null;
  setSelectedRegion: (id: number) => void;
};

const GevraMap = ({
  tempValues,
  rainfallValues,
  frostValues,
  selectedRegion,
  setSelectedRegion,
}: Props) => {
  const regions: Region[] = [
    { id: 1, name: "Region 1", coords: [[22.340, 82.650],[22.340, 82.665],[22.330, 82.665],[22.330, 82.650]] },
    { id: 2, name: "Region 2", coords: [[22.340, 82.665],[22.340, 82.680],[22.330, 82.680],[22.330, 82.665]] },
    { id: 3, name: "Region 3", coords: [[22.330, 82.650],[22.330, 82.665],[22.320, 82.665],[22.320, 82.650]] },
    { id: 4, name: "Region 4", coords: [[22.330, 82.665],[22.330, 82.680],[22.320, 82.680],[22.320, 82.665]] },
  ];

  // --- temperature color ---
  const getTempColor = (temp: number) => {
    if (temp <= 40) return "rgba(255,255,255,0)"; // transparent
    if (temp <= 60) return "yellow";
    if (temp <= 80) return "orange";
    return "red";
  };

  // --- rainfall color ---
  const getRainfallColor = (rainfall: number) => {
    if (rainfall === 0) return "rgba(0,0,0,0)"; // transparent
    if (rainfall <= 40) return "rgba(0,0,255,0.6)"; // blue
    if (rainfall <= 80) return "rgba(255,0,0,0.6)"; // red
    return "rgba(139,0,0,0.6)"; // dark red
  };

  // --- frost color ---
  const getFrostColor = (frost: number) => {
    // clamp 0–5
    const f = Math.min(Math.max(frost, 0), 5);
    const ratio = f / 5; // 0 = blue, 1 = red
    const r = Math.round(0 + ratio * 255);
    const g = 0;
    const b = Math.round(255 - ratio * 255);
    return `rgba(${r},${g},${b},0.6)`;
  };

  // --- final region color ---
  const getRegionColor = (regionId: number) => {
    const temp = tempValues?.[regionId] ?? 40;
    const rainfall = rainfallValues?.[regionId] ?? 0;
    const frost = frostValues?.[regionId] ?? 0;

    if (selectedRegion === regionId) {
      // ❄️ frost overrides everything if > 0
      if (frost > 0) return getFrostColor(frost);
      // 🌧️ rainfall overrides temp if > 0
      if (rainfall > 0) return getRainfallColor(rainfall);
      // 🌡️ otherwise temperature
      return getTempColor(temp);
    }

    // not selected → transparent
    return "rgba(0,0,0,0)";
  };

  return (
    <MapContainer center={[22.330, 82.665]} zoom={15} className="h-[600px] w-full">
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles © Esri — Source: Esri, Maxar, Earthstar Geographics"
      />

      {regions.map((region) => (
        <Polygon
          key={region.id}
          positions={region.coords}
          pathOptions={{
            color: selectedRegion === region.id ? "green" : "transparent", // border highlights selection
            weight: 2,
            fillColor: getRegionColor(region.id),
          }}
          eventHandlers={{ click: () => setSelectedRegion(region.id) }}
        >
          <Tooltip sticky>{region.name}</Tooltip>
        </Polygon>
      ))}
    </MapContainer>
  );
};

export default GevraMap;
