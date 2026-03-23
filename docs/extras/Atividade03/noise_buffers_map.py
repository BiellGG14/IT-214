"""
Gera um mapa HTML com:
- Poligonos do KML exportado do Google Earth
- Sitios de vertiporto
- Pontos criticos (escolas/hospitais)
- Buffers de 400 m e 600 m

Uso:
  pip install folium
  python noise_buffers_map.py

Saida:
  noise_buffers_python.html
"""

from pathlib import Path
import xml.etree.ElementTree as ET

import folium


BASE_DIR = Path(__file__).resolve().parent
KML_FILE = BASE_DIR / "Mapa sem título.kml"
OUTPUT_HTML = BASE_DIR / "noise_buffers_python.html"


def parse_kml_polygons(kml_path: Path):
    ns = {"kml": "http://www.opengis.net/kml/2.2"}
    tree = ET.parse(kml_path)
    root = tree.getroot()

    polygons = []
    for placemark in root.findall(".//kml:Placemark", ns):
        name_el = placemark.find("kml:name", ns)
        name = name_el.text.strip() if name_el is not None and name_el.text else "Poligono"

        coord_el = placemark.find(
            ".//kml:Polygon/kml:outerBoundaryIs/kml:LinearRing/kml:coordinates", ns
        )
        if coord_el is None or not coord_el.text:
            continue

        points = []
        for chunk in coord_el.text.strip().split():
            parts = chunk.split(",")
            if len(parts) < 2:
                continue
            lon = float(parts[0])
            lat = float(parts[1])
            points.append((lat, lon))

        if points:
            polygons.append({"name": name, "coords": points})

    return polygons


def main():
    polygons = parse_kml_polygons(KML_FILE)

    sites = [
        {
            "id": "A",
            "name": "Aeroporto Internacional de Brasilia (BSB)",
            "coords": (-15.8711, -47.9186),
            "color": "#d62828",
        },
        {
            "id": "B",
            "name": "Plano Piloto (SCS)",
            "coords": (-15.7939, -47.8828),
            "color": "#1d4ed8",
        },
        {
            "id": "C",
            "name": "Aguas Claras",
            "coords": (-15.8372, -48.0193),
            "color": "#15803d",
        },
    ]

    critical_points = [
        {"name": "Hospital de Base do DF", "type": "Hospital", "coords": (-15.7987, -47.8994)},
        {"name": "Hospital Regional de Aguas Claras", "type": "Hospital", "coords": (-15.8361, -48.0212)},
        {"name": "Escola Parque 308 Sul", "type": "Escola", "coords": (-15.8166, -47.9002)},
        {"name": "Colegio Militar de Brasilia", "type": "Escola", "coords": (-15.7724, -47.8884)},
    ]

    m = folium.Map(location=[-15.82, -47.94], zoom_start=11, tiles="OpenStreetMap")

    kml_fg = folium.FeatureGroup(name="Poligonos KML")
    for poly in polygons:
        folium.Polygon(
            locations=poly["coords"],
            color="#0f766e",
            weight=2,
            fill=True,
            fill_opacity=0.18,
            popup=poly["name"],
        ).add_to(kml_fg)
    kml_fg.add_to(m)

    site_fg = folium.FeatureGroup(name="Sitios selecionados")
    for site in sites:
        folium.CircleMarker(
            location=site["coords"],
            radius=7,
            color=site["color"],
            fill=True,
            fill_opacity=0.9,
            popup=f"Sitio {site['id']} - {site['name']}",
        ).add_to(site_fg)
    site_fg.add_to(m)

    critical_fg = folium.FeatureGroup(name="Pontos criticos")
    buffer400_fg = folium.FeatureGroup(name="Buffer 400 m")
    buffer600_fg = folium.FeatureGroup(name="Buffer 600 m")

    for point in critical_points:
        folium.CircleMarker(
            location=point["coords"],
            radius=4,
            color="#111827",
            fill=True,
            fill_opacity=0.9,
            popup=f"{point['type']}: {point['name']}",
        ).add_to(critical_fg)

        folium.Circle(
            location=point["coords"],
            radius=400,
            color="#7c3aed",
            fill=True,
            fill_opacity=0.08,
            weight=2,
        ).add_to(buffer400_fg)

        folium.Circle(
            location=point["coords"],
            radius=600,
            color="#f59e0b",
            fill=True,
            fill_opacity=0.05,
            weight=2,
            dash_array="6 6",
        ).add_to(buffer600_fg)

    critical_fg.add_to(m)
    buffer400_fg.add_to(m)
    buffer600_fg.add_to(m)

    folium.LayerControl(collapsed=False).add_to(m)
    m.save(str(OUTPUT_HTML))
    print(f"Mapa salvo em: {OUTPUT_HTML}")


if __name__ == "__main__":
    main()
