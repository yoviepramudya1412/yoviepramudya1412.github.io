<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.1.0/StyledLayerDescriptor.xsd" version="1.1.0" xmlns:ogc="http://www.opengis.net/ogc" xmlns:se="http://www.opengis.net/se" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xlink="http://www.w3.org/1999/xlink">
  <NamedLayer>
    <se:Name>LokasiBandara_PT</se:Name>
    <UserStyle>
      <se:Name>LokasiBandara_PT</se:Name>
      <se:FeatureTypeStyle>
        <se:Rule>
          <se:Name>Bukan</se:Name>
          <se:Description>
            <se:Title>Bukan</se:Title>
          </se:Description>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>REMARK</ogc:PropertyName>
              <ogc:Literal>Bukan</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <se:PointSymbolizer>
            <!--QgsMarkerSymbolLayer RasterMarker not implemented yet-->
          </se:PointSymbolizer>
        </se:Rule>
        <se:Rule>
          <se:Name>Khusus</se:Name>
          <se:Description>
            <se:Title>Khusus</se:Title>
          </se:Description>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>REMARK</ogc:PropertyName>
              <ogc:Literal>Khusus</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <se:PointSymbolizer>
            <!--QgsMarkerSymbolLayer RasterMarker not implemented yet-->
          </se:PointSymbolizer>
        </se:Rule>
        <se:Rule>
          <se:Name>Sekunder</se:Name>
          <se:Description>
            <se:Title>Sekunder</se:Title>
          </se:Description>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>REMARK</ogc:PropertyName>
              <ogc:Literal>Sekunder</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <se:PointSymbolizer>
            <!--QgsMarkerSymbolLayer RasterMarker not implemented yet-->
          </se:PointSymbolizer>
        </se:Rule>
        <se:Rule>
          <se:Name>Tersier</se:Name>
          <se:Description>
            <se:Title>Tersier</se:Title>
          </se:Description>
          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>REMARK</ogc:PropertyName>
              <ogc:Literal>Tersier</ogc:Literal>
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
