<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1.1.0" xmlns:se="http://www.opengis.net/se" xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.1.0/StyledLayerDescriptor.xsd">
  <NamedLayer>
    <se:Name>bandara_pt</se:Name>
    <UserStyle>
      <se:Name>bandara_pt</se:Name>
      <se:FeatureTypeStyle>
        <se:Rule>
          <se:Name>Bandar Udara Khusus</se:Name>
          <se:Description>
            <se:Title>Bandar Udara Khusus</se:Title>
          </se:Description>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>catatan</ogc:PropertyName>
              <ogc:Literal>Bandar Udara Khusus</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <se:PointSymbolizer>
            <!--QgsMarkerSymbolLayer RasterMarker not implemented yet-->
          </se:PointSymbolizer>
        </se:Rule>
        <se:Rule>
          <se:Name>Pusat Penyebaran Sekunder</se:Name>
          <se:Description>
            <se:Title>Pusat Penyebaran Sekunder</se:Title>
          </se:Description>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>catatan</ogc:PropertyName>
              <ogc:Literal>Pusat Penyebaran Sekunder</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <se:PointSymbolizer>
            <!--QgsMarkerSymbolLayer RasterMarker not implemented yet-->
          </se:PointSymbolizer>
        </se:Rule>
        <se:Rule>
          <se:Name>Pusat Penyebaran Tersier</se:Name>
          <se:Description>
            <se:Title>Pusat Penyebaran Tersier</se:Title>
          </se:Description>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>catatan</ogc:PropertyName>
              <ogc:Literal>Pusat Penyebaran Tersier</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <se:PointSymbolizer>
            <!--QgsMarkerSymbolLayer RasterMarker not implemented yet-->
          </se:PointSymbolizer>
        </se:Rule>
      </se:FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
