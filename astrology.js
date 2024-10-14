// ## Settings #############################
(function (astrology) {
  //Scale of symbols
  astrology.SYMBOL_SCALE = 1;
  astrology.AXIS_FONT_SIZE = 16;
  astrology.CHART_SIZE = 600;
  // BG color
  astrology.COLOR_BACKGROUND = "transparent";
  // Color of planet's symbols
  astrology.POINTS_COLOR = "#b5c7cc";
  // Size of description text next to the planet: angle, retrograde, dignities, ...
  astrology.POINTS_TEXT_SIZE = 20;
  // Points strength of lines
  astrology.POINTS_STROKE = 1.8;

  // Font color of signs symbols
  astrology.SIGNS_COLOR = "#797979";

  // Signs strength of lines
  astrology.SIGNS_STROKE = 1.1;

  // Chart margin
  astrology.MARGIN = 80; //px

  // Chart Padding
  astrology.PADDING = 18; //px

  astrology.ID_CHART = "astrology";
  astrology.ID_CHART_STATIC = "astrology-static";
  // Radix chart element ID
  astrology.ID_RADIX = "radix";
  astrology.ID_RADIX_STATIC = "radix-static";

  // Transit chart element ID
  astrology.ID_TRANSIT = "transit";

  // Aspects wrapper element ID
  astrology.ID_ASPECTS = "aspects";

  // Aspects wrapper element ID
  astrology.ID_POINTS = "planets";

  // Signs wrapper element ID
  astrology.ID_SIGNS = "signs";

  // Circles wrapper element ID
  astrology.ID_CIRCLES = "circles";

  // Axis wrapper element ID
  astrology.ID_AXIS = "axis";

  // Cusps wrapper element ID
  astrology.ID_CUSPS = "cusps";

  // Cusps wrapper element ID
  astrology.ID_RULER = "ruler";

  // Background wrapper element ID
  astrology.ID_BG = "bg";

  // Color of circles in charts
  astrology.CIRCLE_COLOR = "#797979";

  astrology.PLANE_POINT_COLOR = "#797979";

  // Circles strength of lines
  astrology.CIRCLE_STRONG = 1.5;

  // Color of lines in charts
  astrology.LINE_COLOR = "#797979";

  // radius / INDOOR_CIRCLE_RADIUS_RATIO
  astrology.INDOOR_CIRCLE_RADIUS_RATIO = 1.9;

  // radius / INNERMOST_CIRCLE_RADIUS_RATIO
  astrology.INNERMOST_CIRCLE_RADIUS_RATIO = 9;

  // radius - radius/INNER_CIRCLE_RADIUS_RATIO
  astrology.INNER_CIRCLE_RADIUS_RATIO = 5;

  astrology.OUTER_CIRCLE_RADIUS_RATIO = 3.5;

  astrology.UNIVERSE_TEXT_RATIO = 8;

  // ( radius / astrology.INNER_CIRCLE_RADIUS_RATIO ) / astrology.RULER_RADIUS
  astrology.RULER_RADIUS = 6;

  astrology.RULER_RADIUS_1 = 0.51;

  // Points
  astrology.SYMBOL_SUN = "Sun";
  astrology.SYMBOL_MOON = "Moon";
  astrology.SYMBOL_MERCURY = "Mercury";
  astrology.SYMBOL_VENUS = "Venus";
  astrology.SYMBOL_MARS = "Mars";
  astrology.SYMBOL_JUPITER = "Jupiter";
  astrology.SYMBOL_SATURN = "Saturn";
  astrology.SYMBOL_URANUS = "Uranus";
  astrology.SYMBOL_NEPTUNE = "Neptune";
  astrology.SYMBOL_PLUTO = "Pluto";
  astrology.SYMBOL_CHIRON = "Chiron";
  astrology.SYMBOL_LILITH = "Lilith";
  astrology.SYMBOL_NNODE = "NNode";
  astrology.SYMBOL_SNODE = "SNode";
  astrology.SYMBOL_ASRISING = "Ascendant";
  astrology.SYMBOL_DC = "Descendant";

  // Axis
  astrology.SYMBOL_AS = "As";
  astrology.SYMBOL_DS = "Ds";
  astrology.SYMBOL_MC = "Mc";
  astrology.SYMBOL_IC = "Ic";

  astrology.SYMBOL_AXIS_FONT_COLOR = "#797979";
  astrology.SYMBOL_AXIS_STROKE = 1.6;

  // Cusps
  astrology.SYMBOL_CUSP_1 = "1";
  astrology.SYMBOL_CUSP_2 = "2";
  astrology.SYMBOL_CUSP_3 = "3";
  astrology.SYMBOL_CUSP_4 = "4";
  astrology.SYMBOL_CUSP_5 = "5";
  astrology.SYMBOL_CUSP_6 = "6";
  astrology.SYMBOL_CUSP_7 = "7";
  astrology.SYMBOL_CUSP_8 = "8";
  astrology.SYMBOL_CUSP_9 = "9";
  astrology.SYMBOL_CUSP_10 = "10";
  astrology.SYMBOL_CUSP_11 = "11";
  astrology.SYMBOL_CUSP_12 = "12";

  // Cusps strength of lines
  astrology.CUSPS_STROKE = 1;
  astrology.CUSPS_FONT_COLOR = "#797979";

  //Signs
  astrology.SYMBOL_ARIES = "Aries";
  astrology.SYMBOL_TAURUS = "Taurus";
  astrology.SYMBOL_GEMINI = "Gemini";
  astrology.SYMBOL_CANCER = "Cancer";
  astrology.SYMBOL_LEO = "Leo";
  astrology.SYMBOL_VIRGO = "Virgo";
  astrology.SYMBOL_LIBRA = "Libra";
  astrology.SYMBOL_SCORPIO = "Scorpio";
  astrology.SYMBOL_SAGITTARIUS = "Sagittarius";
  astrology.SYMBOL_CAPRICORN = "Capricorn";
  astrology.SYMBOL_AQUARIUS = "Aquarius";
  astrology.SYMBOL_PISCES = "Pisces";
  astrology.SYMBOL_SIGNS = [
    astrology.SYMBOL_ARIES,
    astrology.SYMBOL_TAURUS,
    astrology.SYMBOL_GEMINI,
    astrology.SYMBOL_CANCER,
    astrology.SYMBOL_LEO,
    astrology.SYMBOL_VIRGO,
    astrology.SYMBOL_LIBRA,
    astrology.SYMBOL_SCORPIO,
    astrology.SYMBOL_SAGITTARIUS,
    astrology.SYMBOL_CAPRICORN,
    astrology.SYMBOL_AQUARIUS,
    astrology.SYMBOL_PISCES,
  ];

  // http://www.rapidtables.com/web/color/html-color-codes.htm
  astrology.COLOR_ARIES = "#ffffff";
  astrology.COLOR_TAURUS = "#ffffff";
  astrology.COLOR_GEMINI = "#ffffff";
  astrology.COLOR_CANCER = "#ffffff";
  astrology.COLOR_LEO = "#ffffff";
  astrology.COLOR_VIRGO = "#ffffff";
  astrology.COLOR_LIBRA = "#ffffff";
  astrology.COLOR_SCORPIO = "#ffffff";
  astrology.COLOR_SAGITTARIUS = "#ffffff";
  astrology.COLOR_CAPRICORN = "#ffffff";
  astrology.COLOR_AQUARIUS = "#ffffff";
  astrology.COLOR_PISCES = "#ffffff";
  astrology.COLORS_SIGNS = [
    astrology.COLOR_ARIES,
    astrology.COLOR_TAURUS,
    astrology.COLOR_GEMINI,
    astrology.COLOR_CANCER,
    astrology.COLOR_LEO,
    astrology.COLOR_VIRGO,
    astrology.COLOR_LIBRA,
    astrology.COLOR_SCORPIO,
    astrology.COLOR_SAGITTARIUS,
    astrology.COLOR_CAPRICORN,
    astrology.COLOR_AQUARIUS,
    astrology.COLOR_PISCES,
  ];

  astrology.COLOR_SUN = "#231f20";
  astrology.COLOR_MOON = "#231f20";
  astrology.COLOR_MARS = "#231f20";
  astrology.COLOR_MERCURY = "#231f20";
  astrology.COLOR_JUPITER = "#231f20";
  astrology.COLOR_VENUS = "#231f20";
  astrology.COLOR_SATURN = "#231f20";
  astrology.COLOR_URANUS = "#231f20";
  astrology.COLOR_NEPTUNE = "#231f20";
  astrology.COLOR_PLUTO = "#231f20";
  astrology.COLOR_CHIRON = "#231f20";
  astrology.COLOR_NODE = "#231f20";

  // 0 degree is on the West
  astrology.SHIFT_IN_DEGREES = 180;

  // No fill, only stroke
  astrology.STROKE_ONLY = false;

  // Planets collision circle radius for astrology.SYMBOL_SCALE = 1
  // Scaling changes the collision radius
  astrology.COLLISION_RADIUS = 10; //px

  // Aspects
  astrology.ASPECTS = {
    conjunction: { degree: 0, orbit: 10, color: "rgb(222, 88, 246)" },
    sextile: { degree: 60, orbit: 6, color: "rgb(248, 158, 58)" },
    square: { degree: 90, orbit: 8, color: "rgb(131, 179, 107)" },
    trine: { degree: 120, orbit: 8, color: "rgb(113, 232, 250)" },
    opposition: { degree: 180, orbit: 10, color: "rgb(75, 101, 248)" },
  };

  astrology.WHOLE_ASPECTS = {
    conjunction: {
      house_diff: 0,
      house_diff_1: 0,
      orbit: 10,
      color: "rgb(222, 88, 246)",
    },
    sextile: {
      house_diff: 2,
      house_diff_1: 10,
      orbit: 10,
      color: "rgb(248, 158, 58)",
    },
    square: {
      house_diff: 3,
      house_diff_1: 9,
      orbit: 10,
      color: "rgb(131, 179, 107)",
    },
    trine: {
      house_diff: 4,
      house_diff_1: 8,
      orbit: 10,
      color: "rgb(113, 232, 250)",
    },
    opposition: {
      house_diff: 6,
      house_diff_1: 6,
      orbit: 10,
      color: "rgb(75, 101, 248)",
    },
  };

  // Dignities
  astrology.DIGNITIES_RULERSHIP = "r";
  astrology.DIGNITIES_DETRIMENT = "d";
  astrology.DIGNITIES_EXALTATION = "e";
  astrology.DIGNITIES_EXACT_EXALTATION = "E";
  astrology.DIGNITIES_FALL = "f";

  // Source: Aleister Crowley
  astrology.DIGNITIES_EXACT_EXALTATION_DEFAULT = [
    { name: "Sun", position: 19, orbit: 2 }, // 19 Arise
    { name: "Moon", position: 33, orbit: 2 }, //3 Taurus
    { name: "Mercury", position: 155, orbit: 2 }, //15 Virgo
    { name: "Venus", position: 357, orbit: 2 }, //27 Pisces
    { name: "Mars", position: 298, orbit: 2 }, //28 Capricorn
    { name: "Jupiter", position: 105, orbit: 2 }, //15 Cancer
    { name: "Saturn", position: 201, orbit: 2 }, //21 Libra
    { name: "NNode", position: 63, orbit: 2 }, //3 Geminy
  ];

  // 0 - 4
  astrology.ANIMATION_CUSPS_ROTATION_SPEED = 2;

  astrology.DEBUG = false;
})((window.astrology = window.astrology || {}));

// ## SVG #####################
(function (astrology) {
  var context;

  /**
   * SVG tools.
   *
   * @class
   * @public
   * @constructor
   * @param {String} elementId - root DOM Element
   * @param {int} width
   * @param {int} height
   */
  astrology.SVG = function (elementId, width, height, chartId) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttributeNS(
      "http://www.w3.org/2000/xmlns/",
      "xmlns:xlink",
      "http://www.w3.org/1999/xlink"
    );
    svg.setAttribute("style", "position: relative; overflow: hidden;");
    svg.setAttribute("version", "1.1");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    document.getElementById(elementId).appendChild(svg);

    /*var style = document.createElement("style");
        style.appendChild(document.createTextNode("@import url('https://fonts.googleapis.com/css?family=Cormorant+Infant&display=swap')"));
        svg.appendChild(style);*/

    var wrapper = document.createElementNS(svg.namespaceURI, "g");
    wrapper.setAttribute("id", chartId);
    svg.appendChild(wrapper);

    this.DOMElement = svg;
    this.root = wrapper;
    this.width = width;
    this.height = height;
    astrology.chart_width = width;
    context = this;
  };

  /**
   * Get a required symbol.
   *
   * @param {String} name
   * @param {int} x
   * @param {int} y
   *
   * @return {SVG g}
   */
  astrology.SVG.prototype.getSymbol = function (name, x, y, size, houseId) {
    switch (name) {
      case astrology.SYMBOL_SUN:
        return sun(x, y, size, houseId);
      case astrology.SYMBOL_MOON:
        return moon(x, y, size, houseId);
      case astrology.SYMBOL_MERCURY:
        return mercury(x, y, size, houseId);
      case astrology.SYMBOL_VENUS:
        return venus(x, y, size, houseId);
      case astrology.SYMBOL_MARS:
        return mars(x, y, size, houseId);
      case astrology.SYMBOL_JUPITER:
        return jupiter(x, y, size, houseId);
      case astrology.SYMBOL_SATURN:
        return saturn(x, y, size, houseId);
      case astrology.SYMBOL_URANUS:
        return uranus(x, y, size, houseId);
      case astrology.SYMBOL_NEPTUNE:
        return neptune(x, y, size, houseId);
      case astrology.SYMBOL_PLUTO:
        return pluto(x, y, size, houseId);
      case astrology.SYMBOL_CHIRON:
        return chiron(x, y, size, houseId);
      case astrology.SYMBOL_LILITH:
        return lilith(x, y, size, houseId);
      case astrology.SYMBOL_NNODE:
        return nnode(x, y, size, houseId);
      case astrology.SYMBOL_SNODE:
        return snode(x, y, size, houseId);
      case astrology.SYMBOL_ARIES:
        return aries(x, y);
      case astrology.SYMBOL_TAURUS:
        return taurus(x, y);
      case astrology.SYMBOL_GEMINI:
        return gemini(x, y);
      case astrology.SYMBOL_CANCER:
        return cancer(x, y);
      case astrology.SYMBOL_LEO:
        return leo(x, y);
      case astrology.SYMBOL_VIRGO:
        return virgo(x, y);
      case astrology.SYMBOL_LIBRA:
        return libra(x, y);
      case astrology.SYMBOL_SCORPIO:
        return scorpio(x, y);
      case astrology.SYMBOL_SAGITTARIUS:
        return sagittarius(x, y);
      case astrology.SYMBOL_CAPRICORN:
        return capricorn(x, y);
      case astrology.SYMBOL_AQUARIUS:
        return aquarius(x, y);
      case astrology.SYMBOL_PISCES:
        return pisces(x, y);
      case astrology.SYMBOL_AS:
        return ascendant(x, y);
      case astrology.SYMBOL_ASRISING:
        return ascendant_rising(x, y, size, houseId);
      case astrology.SYMBOL_DC:
        return descendant(x, y, size, houseId);
      case astrology.SYMBOL_DS:
        return descendant(x, y);
      case astrology.SYMBOL_MC:
        return mediumCoeli(x, y, size, houseId);
      case astrology.SYMBOL_IC:
        return immumCoeli(x, y, size, houseId);
      case astrology.SYMBOL_CUSP_1:
        return number1(x, y);
      case astrology.SYMBOL_CUSP_2:
        return number2(x, y);
      case astrology.SYMBOL_CUSP_3:
        return number3(x, y);
      case astrology.SYMBOL_CUSP_4:
        return number4(x, y);
      case astrology.SYMBOL_CUSP_5:
        return number5(x, y);
      case astrology.SYMBOL_CUSP_6:
        return number6(x, y);
      case astrology.SYMBOL_CUSP_7:
        return number7(x, y);
      case astrology.SYMBOL_CUSP_8:
        return number8(x, y);
      case astrology.SYMBOL_CUSP_9:
        return number9(x, y);
      case astrology.SYMBOL_CUSP_10:
        return number10(x, y);
      case astrology.SYMBOL_CUSP_11:
        return number11(x, y);
      case astrology.SYMBOL_CUSP_12:
        return number12(x, y);
      default:
        var unknownPoint = this.circle(x, y, 8);
        unknownPoint.setAttribute("stroke", "#ffff00");
        unknownPoint.setAttribute("stroke-width", 1);
        unknownPoint.setAttribute("fill", "#ff0000");
        return unknownPoint;
    }
  };
  function createSymbol(
    x,
    y,
    size,
    houseDegree,
    xShift,
    yShift,
    sizeScale1,
    sizeScale2,
    contentCallback
  ) {
    x = Math.round(x + xShift * astrology.SYMBOL_SCALE);
    y = Math.round(y + yShift * astrology.SYMBOL_SCALE);

    var wrapper = document.createElementNS(context.root.namespaceURI, "g");

    if (size) {
      wrapper.setAttribute(
        "transform",
        `translate(${x},${y}) scale(${astrology.SYMBOL_SCALE - sizeScale1})`
      );
    } else if (houseDegree) {
      var rotation =
        houseDegree > 180
          ? (houseDegree * Math.PI) / 180 + 2
          : (-houseDegree * Math.PI) / 180;
      wrapper.setAttribute(
        "transform",
        `translate(${x},${y}) scale(${
          astrology.SYMBOL_SCALE - sizeScale2
        }) rotate(${rotation})`
      );
    } else {
      wrapper.setAttribute(
        "transform",
        `translate(${x},${y}) scale(${astrology.SYMBOL_SCALE - sizeScale2})`
      );
    }

    contentCallback(wrapper);
    return wrapper;
  }

  function createPath(wrapper, d, attributes = {}) {
    var path = document.createElementNS(context.root.namespaceURI, "path");
    path.setAttribute("d", d);
    Object.entries(attributes).forEach(([key, value]) =>
      path.setAttribute(key, value)
    );
    wrapper.appendChild(path);
    return path;
  }

  function createExtraSpace(wrapper, cx, cy, r) {
    var base = document.createElementNS(context.root.namespaceURI, "circle");
    base.setAttribute(
      "style",
      "fill:transparent !important;stroke-width:0!important"
    );
    base.setAttribute("cx", cx);
    base.setAttribute("cy", cy);
    base.setAttribute("r", r);
    base.setAttribute("class", "planets-extra-space");
    wrapper.appendChild(base);
  }

  function createText(wrapper, text, pathId) {
    var textElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    var textPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "textPath"
    );
    textPath.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "xlink:href",
      pathId
    );
    textPath.appendChild(document.createTextNode(text));
    textElement.appendChild(textPath);
    wrapper.appendChild(textElement);
  }

  /*
   * Sun path
   * @private
   *
   * @param {int} x
   * @param {int} y
   *
   * @return {SVG g}
   */

  function sun(x, y, size, houseId) {
    return createSymbol(
      x,
      y,
      size,
      houseId,
      -20,
      -20,
      1.12,
      1.16,
      function (wrapper) {
        createExtraSpace(wrapper, -110, -125, 100);
        createPath(wrapper, "M58.72,149.42c.78.2.37-.12.72.48h-.72Z", {
          style: "fill:#fbbd46;fill-rule:evenodd;stroke-width:0.46px",
        });
        createPath(
          wrapper,
          "M3.28,186.38c.78.2.37-.12.72.48H2.8v-.24C3.22,186.47,3,186.57,3.28,186.38Z",
          {
            style: "fill:#fbbd46;fill-rule:evenodd;stroke-width:0.46px",
          }
        );
        createPath(
          wrapper,
          "M161.44,14.78h.48C161.63,15.16,161.82,15.07,161.44,14.78Zm28.8,124.32-.48-7c-.67-2.53-1.43-5.67-2.16-7.92V122.3c-.92-3.42-.72-7.23-1.68-10.8a301.4,301.4,0,0,0-13.44-39.12c-.89-2.11-1.11-4.25-2.16-6.24-.5-1-1.61-1.74-2.16-2.64-.77-1.29-.89-2.6-1.68-3.84-.63-1-2.18-2.25-3.36-3.84a14.62,14.62,0,0,0-2.4-3.12V52c-1.43-.21-1.71-.88-1.68-1.92-.82.2-.61.12-1,.72-.41-.16-.23-.05-.48-.24.36-.27-.09-.3.48-.72-.87-2.26-3.2-3.45-5.28-5-1.52-1.17-3.71-3.91-5.76-5.28s-4.14-2-6-3.36-4.15-3.61-7.2-3.84v-.72c-2.69-1.22-5.38-2.53-7.68-3.6s-4.54,0-6.24-1.68c-1.38-.06-2.29-.2-2.4.48a41.56,41.56,0,0,1-6-1.2c-3.09.63-8.16,1.12-11.76,1.92l-4.8.24c-2.25.65-5.35,1.81-7.68,2.64s-5,.45-7,1.68c-1,.62-1.91,1.94-2.88,2.64-3.34,2.39-6.71,4.35-10.08,6.72-1.78,1.24-2.28,4-4.56,4.8v.72c-2.72.53-3.21,3.63-4.32,5l-1.2.48a1.26,1.26,0,0,1,0,1.44c-1.52,1.57-2.25,4.23-3.6,6.72-1,1.78-2.56,3.54-3.6,5.28l-2.16,5.76c-2.48,4.84-5.4,9.68-7.44,14.4-.61,1.41-.57,3.62-1,4.56-.06.15-.66.7-.72,1-.14.63.55.82.48,1l-.72.48a1.4,1.4,0,0,1,0,1.44h-.48c-.74,1.37.32,2.2-1,3.36l.48.48c-.26.18-.22.15-.72.24.25.73-.05.72.48,1.2-.36.58-1.22,1.08-1.44,1.68-.66,1.74,0,4.17-.48,6-.48,1.68-1.38,3.66-1.92,5.28-.41,1.24-.16,2.4-.72,3.6a34.64,34.64,0,0,0-3.12,9.36c-.07.54.43.69.48,1l-.24.24c-.32,1.43.48,1.71.24,3.12a4.34,4.34,0,0,1-.72,1.92,1.23,1.23,0,0,1,.72,1,2.87,2.87,0,0,0-.72,1.68v3.36a19.71,19.71,0,0,1,.72,4.56V148c1.48,5.63,1.48,12.14,3.12,17.76,1.17,4,2.69,8.23,4.08,11.76.66,1.67-.08,2.78.72,4.56.16.35.8.44,1,.72.5.87.31,2.13.48,2.64s1.18,1.51,1.44,2.16a25.38,25.38,0,0,0,1.92,4.56c.52.83,1.61,1.17,2.16,1.92,2.51,3.39,4.2,6,7.2,8.88a8.15,8.15,0,0,1,2.16.48c.9.7.49,1.5,1.92,1.92-.25.19-.06.09-.48.24.63.52.71.29,1.44.24.51.48.55,1.57,1.2,1.92.48.25.7-.24,1-.24.26.24,0,.67.24,1,.1.12,2.53.49,2.88,2.16,1.44-.37,2.1.5,3.6.72v1.2l.48-.48c.85.13.25.12.72.48s1.78.33,2.4.72c.18.25.15.22.24.72.66.16.39-.15.48.48.57-.21.4-.09.72-.48.47.36,2.82,2.33,4.08,2.16l.48-.48c.59.4,1.13,1.39,1.68,1.68.15.07,2.61,0,3.36.48.18.1.49.85.72,1,.53.24.64-.5,1.2,0v.72c.26.23,1.66.32,2.4.72.23.12.54.85.72,1H87a13.46,13.46,0,0,1,1.92,1.2c.42.25,1.41-.68,2.16.48,0,0,.94-.06.48-.24l-.24-.24c3.54.94,5.32,1.67,8.64,1.44a14,14,0,0,0,2.88,1.2l2.88-.24c.31.1.59.64,1,.72a8.62,8.62,0,0,1,1.92-1c.67-.16,1.07.41,1.44.48a28.73,28.73,0,0,0,3.84-1c.25.41,0,0,0,.48,2.12-.41,5.58-1.35,8.64-2.16s5.67-.47,8.4-1.44c1.9-.68,4.13-1.94,6-2.64l3.12-.48c1.87-.78,3.42-2.36,5-3.36l4.56-1.44c.9-.79,1.53-2.05,2.64-2.64,1.32-.71,2.68-.81,3.84-1.68.82-.62,1.3-2.11,2.16-2.64l.72.24c.81-1.07,1.36-2.56,2.4-3.36a22.48,22.48,0,0,0,3.36-2.64c1-1.24,1.47-2.72,2.4-4.08,1.12-1.64,3.4-2.53,4.56-4.08,1.62-2.17,2.69-4,4.08-6.24a10.29,10.29,0,0,1,.72-2.4c1.18-1.7,2.9-3.86,2.88-6,1.12-.22,1.31-.77,1.68-1.68h1c-.62-4,3-7.51,4.56-11.28,1-2.36,1.07-4.74,1.92-7.2.8-2.31,2-4.86,2.64-7.44C192.08,146.42,190.88,141.62,190.24,139.1ZM175.6,169.82c-4,8-10.3,14.56-16.32,20.64a48.83,48.83,0,0,0-3.6,4.8c-1.49,1.94-4.34,3-6.24,4.56-.86.71-1.51,2-2.4,2.64a54.27,54.27,0,0,1-10.56,6.48c-3.29,1.41-6.66,2.89-9.84,4.08-3.89,1.45-8.27,1-12.48,2.16a22.4,22.4,0,0,1-8.4.24H101.2a70,70,0,0,1-14.64-5.28c-1.24-.63-4.58-2.66-5.28-2.4H81l.24-.48H81c-.76-.86-1.94-.47-3.12-1s-1.78-1.57-2.64-2.16l-6-1.44c-4.19-1.82-7.26-5-10.8-7.44-2-1.4-4.8-2.61-6.24-4.56-2.37-3.21-3.32-6.62-5.28-10.32-.7-1.32-1.88-2.6-2.64-3.84-.87-1.43-.76-3.44-1.44-5-.5-1.19-1.53-2.57-1.92-3.84-.8-2.64-1.26-5-1.92-7.44v-2.4l-.72-.72c-.13-.84.55-.38.72-.72.61-1.22-.1-3.36-.24-3.6.07-1.57,0-2.07-1.2-2.4.5-.73.56-.36.48-1.2a3.65,3.65,0,0,0,1.2.24c-.3-.44-1.21-1.27-1.2-1.92s.32-1-.24-1.68c.3-.24.29.05.72-.24,0,0-1-1.92-.48-3.12.34-.89-.3-2.06,0-3.36.21-.93.38-.9,1.2-1.68-.73-.61.3-5.69-.72-7,.6-.13.21-.05,1,0-.57-1.49-.19-1.06,0-2.64-.49-.1-.46-.06-.72-.24s.43-1,.72-1.44a10.18,10.18,0,0,1,.24-2.88c0-1.25-.15-1.37.48-1.44a16,16,0,0,1,0-3.6l.72-.48.24-3.6.72-.24c-.87-.81.55-.86.72-1.2s-.31-2-.24-2.16a9.29,9.29,0,0,1,.48-1.2h.48c.23-.63-.64-.55-.48-1s.75-.43,1-.72c-.4-.65.08-.87.24-1.44.73-2.67,0-5.29.72-7.68.53-1.65,1.77-3.06,2.4-4.56l.72-3.36c.52-1.48,1.58-3.18,2.16-4.56l.72-3.12c.58-1.38,2-5.31,2.88-6.24s1.36-.83,1.44-2.64c1-.2.66-.31,1.44-.24-.21-.57-.09-.4-.48-.72.1-.5.06-.47.24-.72.41-.25,0,0,.48,0a17.21,17.21,0,0,0,.48-2.64c.6-.16.13-.07.72,0-.24-2,2-3.81,3.12-5.28.48-.65.28-1.13.72-1.92l1.44-1.44.48.24a15.07,15.07,0,0,1,.72-2.64c.6-1.08,1.82-1.38,2.16-2.88,3.07-.62,4-4.23,6.24-5.76a52,52,0,0,1,6-3.36l2.4-2.4c.75-.51,1.63-.49,2.4-1s1.3-1.27,1.92-1.68c2-1.35,6-1.38,7.68-2.88.37-.06.78.65,1.68.48a14.45,14.45,0,0,0,2.16-1.2c.44-.18,1.17.52,1.92.24l.72-.72c.65-.18.86.62,1.44.48l1-1c1.41-.78,3.91.08,4.56.48.94,0,3-1.61,3.84.48.93-.39,1.3-.9,2.16-1.2a4.23,4.23,0,0,0,1.2,1.44c.33.39,1.6-.74,2.16-.48v.48l1,.48c.84.14.39-.56.72-.72l3.6.48-.24.72c.75-.13.76-.25,1-.24h.72l-.24.72c.41-.16.24-.05.48-.24,1,.18,1,.11,1.2,1a3.24,3.24,0,0,1,2.88-.24c.88.43,1.93,1.84,2.64,2.16l1.2-.24.24.72,2.16.24c.47.23.57,1.12,1,1.44,1.29,1,2.15.23,2.88,1.92l.48-.48c1,.9,1.46,2.15,2.64,2.88l-.48.48c.52.91.15-.28,1.2.24L143,51.74h1.44c1,.72,1,1.95,1.68,3.12s2.49,2,3.6,2.88a46.6,46.6,0,0,1,4.56,5c.51.74.49,1.63,1,2.4,1,1.6,2.37,3.2,3.36,4.8s1.2,3.48,2.16,5.28c.39.72,1.33,1.34,1.68,2.16.81,1.88,1,3.3,1.92,5C167,87.85,170.59,93,173,98.78c.87,2.12.33,4.62,1.2,7,.67,1.79,1.59,3.94,2.16,6v2.4c.58,2.3.31,5.07,1,7.68C180.07,133.05,180.33,160.43,175.6,169.82ZM114.88,42.38h.48v.24C114.94,42.47,115.13,42.57,114.88,42.38Zm14.88,6a3.46,3.46,0,0,1-.24,1.2l-.48-.24-.24-.72.24-.24Zm-.48,24.24c.39.32.27.15.48.72H129Zm-20.64,55v1c1.9-.36,3.82,1.7,3.84,4.08-1.15,1.52-1.56,3.8-3.12,4.32-.59.19-1.45-.43-2.16-.24a11.24,11.24,0,0,1-3.6.72c-1.52-2.22-3.88-3.12-3.36-6.24,1.52-.24.1-.26,1-1.2l1.2-.24,1-1.44c.79-.51,1.15.31,1.92,0l.24-.72C106.37,127,107.78,127.48,108.64,127.58Zm7.44,23c.27.39.43.25,0,.48Zm-10.8,38.64c.19.24.09.06.24.48h-.24Z",
          {
            style: "fill:#fabc46;",
            transform: "rotate(180)",
          }
        );
      }
    );
  }
  /*
   * Moon path
   * @private
   *
   * @param {int} x
   * @param {int} y
   *
   * @return {SVGPathElement} path
   */
  function moon(x, y, size, houseId) {
    return createSymbol(
      x,
      y,
      size,
      houseId,
      -10,
      -20,
      1.15,
      1.16,
      function (wrapper) {
        createExtraSpace(wrapper, -90, -125, 100);
        createPath(
          wrapper,
          "M160.49,204.86c.2.24.09.06.24.48h-.24Zm-30-91-.72-.24c.13-.74.52-.61.48-1.2s-.6-2.58-.24-3.6a10.77,10.77,0,0,0,.72-1.92c0-.51-.61-1.41-.72-1.92-.25-1.21.35-1.8.48-2.64.33-2.18-1.43-5.22-.72-6.72,0,0-.05-1-.24-.48l-.24.24c.16-1,.05-1,.48-1.68-.5-.16-.43,0-.72-.24h-.24c.26-.19.22-.15.72-.24-.08-.86,0-.8-.48-1.2.17-.66-.15-.39.48-.48-.17-1.09-.66-2.38-.72-2.88-.28-.2-.4-.2-1-.24.36-.6.3-.45,1.2-.48a13.58,13.58,0,0,0-.48-2.16s.06-.95.24-.48l.24.24c-2-8.29-4.43-19.79-8.16-25-.46-.22-.17-.1-.72,0a16.25,16.25,0,0,0-2.4-4.8c-.6-.16-.13-.07-.72,0-.45-1-1-1.59-1-2.4h-.72c.06-2.9-1.3-3.51-2.88-3.6l.24-.24c-.27-.63-.15-.31-1-.48-.09-1-.41-.76.24-1.2-.27-.41-1.87-.77-2.64-1-.13-1-.7-1.58-.24-2.4v-.48a3,3,0,0,1-1,.24c-.28-2.13-1.19-.73-2.16-1.68-.39-.38-.38-1-.72-1.44s-1-.56-1.44-1l.24-.72s-.85.24-1.2,0-.3-.66-.24-1a2.63,2.63,0,0,0-1.44-.24,3.64,3.64,0,0,1-1-2.16c-.39-.65,0-.25-.72-.24l.24-.24c-.39-.65,0-.25-.72-.24a3.71,3.71,0,0,1-.24-1.2c-.19.24-.09.06-.24.48-1.23-.22-3.06-2.13-2.88-3.12-.77.21-.37-.13-.72.48-.63-.39-.26,0-.24-1a2.83,2.83,0,0,0-.72.48,3.91,3.91,0,0,1-1-.24c.1-.86-.12-.63.48-.72C92.8,29,89.14,28.54,87.77,27h-.48l.24-.24c-.35-.83-1.44-.41-2.4-1.2A28.24,28.24,0,0,0,79.37,22c-1.46-.63-3-.38-4.32-1.2-.11-.08-.27-.64-.48-.72h-2.4c-.82-.31-1.23-1.38-2.16-1.68-2.35-.79-5.68-.6-8.16-.48l-1.68.24c-3.85-.83-11.18-1.64-14.4-.48L41,17.42a9.49,9.49,0,0,0-1,.24v.48l-1.92-.24c-1,.26-2.81.31-4.08.72a32.29,32.29,0,0,0-6.48,2.64c-1.48.92-2.91,2.38-5,2.64a35,35,0,0,1-.24,3.84c1.24,1.38,6.43,5.06,6.48,7.2L29,34.7c.21.1,5,4.8,5,4.8a2.53,2.53,0,0,1,.24,1.44l.48-.24-.24.24c.16.55,4.55,4,4.08,4.8.4.64,0,.24.72.24v.24c.12.23.63.72.72,1s-.28.92-.24,1c.39.34.36-.31.72,0l1.2,1.2c-.37.43-.2.34-1,.48l.24.24c.34.18.42,0,1-.24,1.16,1.76,1.78,3.14,3.36,4.32-.21.77.13.37-.48.72l.24.24c.15.18,0,.06.24,0,1.48.33,1,1.83,2.4,2.88-.16.65.15.38-.48.48.16.41,0,.23.24.48.39.23,0,0,.72,0,.35,1.43,1.53,2.19,2.4,3.6a6.75,6.75,0,0,1,.24,2.16c.83.81,1.43.28,1.68,2.16,1,.26.5,0,.48,1.2.2-.25.09-.06.24-.48a10.71,10.71,0,0,1,1.92,1.68l-.24.48c2.68,2.68,1.91,3.35,3.84,6.24l.24.24V76c-.06-.24.07-.11-.24-.24V75.5l.72.24a6.4,6.4,0,0,1,.24,2.16,4.53,4.53,0,0,1,1,.48c.27.35.92,2,.48,2.64.29.69.09.19.72.48a2.05,2.05,0,0,1-.24,1.2v.48h1A34.09,34.09,0,0,0,65,89.42c-.21.86-.14.73-1,1,.51,1.1.79,3.07,1.68,3.84-.1.86.13.62-.48.72.21.56.09.39.48.72-.1.86.13.62-.48.72,0,.68-.17.35,0,.72s.61,0,1-.24h.48v.24c-.92.49-.12.61-1.44.72v.48l.72-.24c.12.54.21.26,0,.72.29.69.09.19.72.48a2.73,2.73,0,0,1-.48,1c.18.74.33,0,.24.72.6-.36.38-.1.48-1h.24a4.77,4.77,0,0,1,0,1.92c-.18-.26-.15-.23-.24-.72h-.48l-.24.24c.19.93.23.59.24,1.2.56-.06.68-.05,1-.24h.24a2.05,2.05,0,0,1-.24,1.2c.4.64,0,.24.72.24,0,3.25-.12,6.43,1.2,8.16-.05,1.07.14.89-.48,1a18.2,18.2,0,0,1-.72,9.12,6.5,6.5,0,0,0,.24,2.64,6.08,6.08,0,0,1-.48,3.12l.24,1.2-.72.24a5.52,5.52,0,0,0-.48,3.36v.24l-.48-.24c-.09.78.2,1.49-.48,1.92.25.19.06.09.48.24-.21.77.13.37-.48.72.32.58-.11.17.48.48-.71,1.12-.21,3.62-.72,4.56-.1.86.13.62-.48.72.13.93-.22,1.87.24,2.16-.16.54-1.18,4.7-2.16,5.28l.48.48c-.27.55-.22.43-.72.72,0,1.23.07,1.3,1.2,1.44-.37.63-1.12.55-1.68,1-.76,1.48-.69,4.82-1.92,6.48,0,0,.51,1.21.24,1.68v.48h-.72a1.87,1.87,0,0,1-.48,1.44c-.31.93-.57.75-1.2.72a4.72,4.72,0,0,1-1,3.6c-.41.24,0,0-.48,0-.61,1.64-.54,2.32-2.64,4.08.63.6-2.64,6.24-2.64,6.24-.41.24,0,0-.48,0,.2,1.2-1.95,6-2.88,7-.38.75-.15.29-1,.24.32.58-.11.17.48.48-.43.64-.25.27-.24,1.44H47s.43.6.24,1c-.08.15-5,5.47-5,5.52-.51.55-.09.24-.72.24-.59,1.41-1.92,2-1.92,3.12-.59.15-.38.09-1,0,.08.8.23.59-.24,1.2a27.08,27.08,0,0,1-3.6,3.36c.83.9-2.4,2.88-2.4,2.88-.19.54.31,1-.24,1.68s-1.72,1-1.92,1.44h-.48c-.46.19.48.24.48.24-.6,1.07-.52,1.62-1.44,3.12-.3.49-1.66,1.3-1.92,1.68l-.24,1.68-1,.48c-.07.11.24.71.24.72C25.62,216,24,217.58,23,217.58a7.17,7.17,0,0,1,.24,2.64,3.74,3.74,0,0,0,2.16.72l.24.24c.11.74,1.73,2,2.64,2.4h1.92c3.24.91,7.07,1.36,10.56,2.16h5c7.6,1.94,23.49.28,28.56-3.12,1.09-.73,2-2.15,3.12-2.88,2-1.35,4.43-1.86,6.24-3.36.4-.33.4-1,.72-1.44a27.54,27.54,0,0,1,3.36-3.12c1.7-1.16,3.59-1.75,4.8-3.36s2-3.62,4.08-4.32a3.1,3.1,0,0,1-.24-1c1.93-.27,3.38-2.42,3.6-3.12.42-.64,0-.34.72-.24-.1-.86.13-.63-.48-.72v-.72c.75.14.59,0,1,.48a6.38,6.38,0,0,0,1.92-3.12,39.63,39.63,0,0,0,5-6.48c.65-1,.6-2.22,1.2-3.36,1.09-2.08,2.71-1.41,2.64-4.56.5.09.47.06.72.24H113c-.11-.86.13-.61-.48-1,1.12-1.08.93-2.36,2.16-2.4-.15-.42,0-.24-.24-.48,0,0,.06-1,.24-.48l.24.24c-.31-1.91,3.14-7.08,2.88-7.2,0-1.3-.15-1.59.48-1.68a3.17,3.17,0,0,1,.48-2.88c0-1.24.07-1.31,1.2-1.44-.2-.75.2-.65,0-1.2v-.72s.94.05.48.24l-.24.24c.73-.24,1.07-1.28,1.2-2.4.42.15.24,0,.48.24.29-.4-.14-.47,0-.72s.87-.33,1-.48l-.24-2.64,1.44-1-.24-1c.45-1.27.27-2,1-2.88-.26-.19-.22-.15-.72-.24v-.72l1.2.24a1.58,1.58,0,0,0-.72-1.2c.32-.55.52-.38,1-.72a4.66,4.66,0,0,0,.72-2.88c.25-.23.49-.06,1-.48l.24-.24a2.78,2.78,0,0,0-1-.24l.24-.24c.51-.55.09-.25.72-.24a17.3,17.3,0,0,1,0-3.6c.2.24.09.06.24.48h.24c-.24-1.31-.61-3.34-.24-4.08,0,0,0-1-.24-.48l-.24.24c0-1.4-.08-1.69.72-1.68-.2-1-.35-1.33.72-1.68-.34-.82-1-2.06-.72-2.64,0,0,.06-.95.24-.48l.24.24c0-.84.78-2.92,0-4.08,0-1.62.38-1.46,1.2-2.16.28-.44,0-1.1.72-1.92l-1-.72a15.09,15.09,0,0,0,1.2-2.64c.09-.59-.9-1.5-1-2.16-.06-.82.8-1.26,1-1.68S130.33,114.43,130.49,113.9Zm-7.44,8.16a34.06,34.06,0,0,0-1,7.44c-.6.15-.13.07-.72,0,.23,1.93.77,4.36-.48,6.48h-.48c-.24.51.32.7.24,1h-.48c-.25.83.26,1.29-.24,1.92v.48h-.72c-.09,1,.06.89-.72,1.2.25.65.35.52.72,1,0,0-1.91,5.12-2.16,6-.54,1.95.16,2.27-.48,4.08-.19.54-1,1-1.2,1.44l.24,1.2-.48.24c-.2.73,0,1.81-.48,2.88-.19.39-1.09,1-1.2,1.44s.61.93,0,1.92a6,6,0,0,0-1,1.44c-.33,1.36.39,2.11-.24,3.6a36.58,36.58,0,0,0-1.92,4.56h-.72c.08.85,0,.8.48,1.2-.46.25-.28.07-1,0,0,.95-.16.25.24,1a59.5,59.5,0,0,0-3.6,5h-.72c-.28,2.95-2.72,4.21-3.84,6.72h-.72a4.87,4.87,0,0,0,.24,1.44,9.41,9.41,0,0,0-3.6,5.52h-1c0,.72.18.66,0,1-.28,1.16-.83.74-1.44,1.44s-.31,2.58-2.16,2.16c-.33.39-.13,1.08-.48,1.44a5.47,5.47,0,0,1-2.16,1.2c-1.4,1.5-3.59,4.48-5.52,4.56-.36.49-.26,1.55-.72,1.92-.73.59-1.94.56-2.64,1.2l-.24,1h-1a15,15,0,0,0-2.64,2.64c-.39.27-.13,0,0,.48-1,.32-.56.7-1.2,1.2s-1.75.26-2.4.72c-.39.27,0,.83-.72,1.2l-3.12.24-.48,1c-.59.4-.75-.29-1.2,0a33.52,33.52,0,0,1-8.88,3.84,33.7,33.7,0,0,1-9.36.48c-.63.42-.33,0-.24.72a12,12,0,0,1-1.92-.24s-.94-.06-.48-.24l.24-.24c-2.44.05-5.18.35-6-.72-.31.13-.17.08-.24.24v.24c-.58-.12-.58,0-1.2.24-.48-.48-1-.63-1.44-1.2-.18.25-.15.22-.24.72-.79-.67-.31-.51-1.68-.48a2.61,2.61,0,0,0,0-1.68,5.06,5.06,0,0,0,1-.48l.24-.24h-.24v-.24l.24.24c.75-.5.47-1.9,1-2.64,1.4-2.11,4.13-3.47,5.28-5.76l-.72-.24v-.24c.57.21.4.09.72.48,1-.17,1.18-.35,1.44-1.2h.24c.12-.67-.14-.27-.48-.48.4-.65,0-.25.72-.24.91-1.65,2-4.5,2.88-5.52v-.24l.48.24v-.24a11,11,0,0,0,2.16-2.4l-.24-.72c.26-.29,1-.15,1.2-.48,2.07-2.71,2.85-6,4.32-9.36a28.34,28.34,0,0,1,3.36-5l.72-2.16c.76-1.7,2.17-3.37,2.88-5,.43-1,.29-1.88.72-2.88.83-1.91,2.71-3.9,3.36-5.76.36-1-.23-1.88,0-2.64s.8-.92,1-1.92h.72a2.64,2.64,0,0,1,.48-2.4h.48l-.24-1.2c.19-.63,1-1.22,1.2-1.68s-.41-.75,0-1.44c.07-.11.67-.27.72-.48.16-.63-.33-.36-.48-.72,1.54-1.66,3.31-10.39,3.36-14.4.5-.1.47-.06.72-.24.31-.75-1.12-1.52.24-2.16l-.48-.48c.36-.6-.06-.28.72-.48-.55-2.18.54-1.84,1-3.36.3-1.09-.35-2.38-.24-2.88a62.7,62.7,0,0,0,1.2-6.48c.24-2.13-1-4.37.24-5.52-.22-.52-.21-.35-.48-.72-.37-.68.65-2.39.48-3.36,0-.28-.64-.62-.72-1,.45-.52.46-.91.48-1.92h-.72c.22-.61.17-1.11.72-1.44-.18-.91-.27-.68-.72-1.2s.48-4.32.48-4.32c-.29-.8-.63-.74-1-1.44,0,0-1-.1-.48-.24,1.1-.34.2-3.3.24-4.32H76c.27-.87-.24-6.48-.24-6.48-.31-.85-1.77-1.92-1.44-3.36l.48-.24c.11-.67-.63-1-.72-1.44,0-.24.48-.67.24-1.2l-.72-.24c-.55-1,0-2.64-.24-3.12-.46-1.19-1.57-2.17-2.16-3.12-.18-.31.21-1,0-1.44l-1.68-1.68-.24-1.44c-.41-1-1.48-2.16-1.92-3.12l-.24-1.68-.72-.24.24-.48c-.18-.4-1-1.29-1.2-1.68l-.24-1.92c-.2-.33-1.08-.74-1.44-1.44a35.11,35.11,0,0,0-2.88-5.28l-4.8-4.8C54.84,51,53.93,49,52.49,47.42l-.24-.24v.24c-.5-.56-1.17-2.57-1.92-3.6-.87-1.19-3.74-4-4.8-4.08,0-.05.25-.59,0-1a21.57,21.57,0,0,0-2.4-2.16c-.39-.42-.32-1.28-.72-1.68,0,0-.88.37-1.2,0-.53-.63,0-1.53-.24-1.92-1.19-2-3.74-2.43-4.08-5.28h-.72c.4-.74.66-.74.72-1.92h-.72v-.24c2.56-.77,5.14-1.56,7-2.16,1.19-.4,2.83.91,4.32.48.09,0,.76-.69,1-.72a5.4,5.4,0,0,1,1.68.48l3.6-.24.48.48c.65-.52,2.95.53,4.56.48,4.69-.15,8.71,1.72,13.2,2.4.16.6.07.13,0,.72a3.58,3.58,0,0,1,1.2-.24c.6.35.28-.06.48.72a14.27,14.27,0,0,1,2.88,0v1c2.34-.31,2,1,3.36,1.68a32.29,32.29,0,0,1,13,10.56,13.25,13.25,0,0,0,2.64,1.92c1.35,1,2.16,2.68,3.36,3.84.48.45,1.42.28,1.92.72.86.75.81,2.65,1.44,3.36l1.44.48s.72,1.68.72,1.68l1.2.24.48,1c.64.63,1.63.94,2.16,1.68,1,1.35,2,2.73,2.88,4.08.46.71.41,1.76,1,2.4.27.3,1,0,1,0,.51.6-.22,1.9.24,2.64s1.66,1.34,2.16,2.16c2.12,3.43,3,6.83,4.32,10.32.67,1.81.08,3.27,1.44,4.32-1.24.93-.56,2.46.24,3.36-.35.59.06.28-.72.48.17.85.41.55.48.72l-.24,3.36c.94,2,1.25,7,1.92,9.84l-.24,8.88a7.72,7.72,0,0,1,.48,2.4Zm-18.48,13.2h.48v.48h-.48Z",
          {
            style: "fill:#a7d6f3;",
            transform: "rotate(180)",
          }
        );
      }
    );
  }

  /*
   * Mercury path
   * @private
   *
   * @param {int} x
   * @param {int} y
   *
   * @return {SVGPathElement} path
   */

  function mercury(x, y, size, houseId) {
    return createSymbol(
      x,
      y,
      size,
      houseId,
      -20,
      -20,
      1.14,
      1.16,
      function (wrapper) {
        createExtraSpace(wrapper, -90, -125, 100);
        createPath(
          wrapper,
          "M138.79,133.1c-.13-1-.29-4.58-.72-6.48v-3.84c-1.68-6.93-1.42-16.66-4.8-22.56l-.24-2.4a61,61,0,0,0-8.4-12.72c-1.11-1.32-3.3-2.17-4.56-3.84-.66-.88-1-1.74-1.68-2.64-1.43-1.93-4.88-4.15-7-6.24C110,71,109.54,69.51,107.11,69c.49-.27.43-.13,1,0-.31-.59.12-.17-.48-.48.21-1.51.86-1.23,1-2.88.42.15.24,0,.48.24.64-.2.41-1.12,1-1.92.42-.25,0,0,.48,0,1-2.36,2.72-4.57,3.6-6.24V57.5l.48-2.16c.71-.69.94-.17,1-1.68h.72a12.74,12.74,0,0,0-.24-1.44c.1-.17.85-.56,1-.72.81-1.15,1.47-4.58,1.92-6l-.24-1.2h.48c-.24-.37.86-4.27,1.2-5,.66-1.46-.18-3.08.48-4.32h.48c.5-1.11-.44-2.27,0-3.6.18-.55.89-.84,1-1,.51-.88-.17-2.67,0-3.12s1-.58,1.2-1c-.4-.67.34-1.11,0-2.16a9.09,9.09,0,0,0-1.2-1.92,9.29,9.29,0,0,0-2.88-.24c-.35.36-1.14.57-1.44,1-1,1.3-1.64,3.92-2.16,5.52l-.24,2.88c-.15.4-.82,1-1,1.44V34.7c-.18.52-1,1-1.2,1.44-.45.79,0,2.13,0,2.64-1.22,2.11-.93,5.56-1.92,7.92-1.91,4.57-3.81,9.29-6.48,13.2-.22.33-1,.43-1.2.72l-.24,1.68c-.13.2-1.56,2.31-1.68,2.4l-.72-.24c-.53.4-1,1.19-1.68,1.44-1.56.53-3.38-.62-4.32-1a19.36,19.36,0,0,0-7.2-1,22.53,22.53,0,0,0-5.52.72H75.91c-1.25.31-3.52-.18-5,.24-2.13.58-4.66.85-6,1.44-.72.31-3.51,1.2-3.36,1.92-1.24.59-1.92-.37-2.88.72-1.29,0-.8-.19-1.2-.48-.39-.44-2-1-2.88-1.68-.55-.43-.89-1.47-1.44-1.92a21.64,21.64,0,0,1-2.88-2.16v-.72c-.25-.28-.94-.21-1.2-.48l-.24-1-1-.24c-.35-.26-.4-.94-.72-1.2l-.72.24a19.11,19.11,0,0,1-1-2.16h-.72c-.36-1.74-2-1.74-2.88-2.88v-.72c-.22-.32-1-.64-1.2-1V52c-.37-.49-.77-1.15-1.2-1.68H39v-1c-1-1.75-2.83-3.24-3.6-5.28-1.13-3-1.55-6.14-3.36-7.68.4-.2,0-3.84,0-3.84-.34-1.1-1.37-2.11-1.68-3.36-.85.07-1.22.25-1.44.24a6.27,6.27,0,0,0-2.4.48c.08,1.09-.35,4,.24,5.76.38,1.13,1.33,2.54,1.68,3.6.61,1.85.28,3.58,1,5.28.57,1.4,1.74,2.09,2.64,3.12-.24.47,1.67,3.56,1.68,3.6v1.2c.22.49,1,1.1,1.2,1.68v1.2c.15.2.8.24,1,.48,1,1.47,1.33,3.18,2.4,4.56s3.09,2,4.08,3.36c.85,1.12,1.11,2.42,1.92,3.6.26.37,1.16.47,1.44.72a11.6,11.6,0,0,1,1.44,2.64c.5.09.47.06.72.24h.48l-.24.24c.15.65.92,1,1.68,1.44-1.34,2-6.07,3.49-8.16,5l-1.44,1.92c-.6.61-1.54.83-2.16,1.44-.86.84-1.19,2.12-1.92,3.12l-2.16,1.92c-.38.53-.34,1.12-.72,1.68-.95,1.39-2.6,2.44-3.36,4.08a44.59,44.59,0,0,0-2.16,5.76V99c-3,7.74-6.52,22-6.24,31.2.14,4.56-2,10.63-.72,16.08,1.07,4.61,1.2,10,2.64,14.4,1.35,4.08,3,8,4.56,11.76.77,1.91.67,3.89,1.44,5.76,1.14,2.74,2.92,5,4.32,7.44.69,1.18.74,2.46,1.44,3.6,1.18,1.9,3,3.32,4.32,5a8.46,8.46,0,0,0,1.44,1.92c2.16,1.57,4.13,3,6.24,4.56,1.2.89,2.1,2.24,3.6,2.88a110.45,110.45,0,0,0,14.4,4.56c3.71,1,7.22.88,10.8,1.68,0,2,.84,7.51-.48,9.36-.26.55-.22.43-.72.72-.83.81-10,.14-10.8.72-.6.28-.69.61-1.2,1a14.15,14.15,0,0,0,0,3.12c2.11.95,2,0,3.84.24,1.12.16,1.7,1,3.12.72,1.6-.36,5.09-1,6-.48.58.22.38.26,1,.48l-.24.24s1,5.93,1.2,6.72c.24,1.05-.22,2.39.24,3.12v6c1.14-.16,1.51.18,2.64.48.54-.46,1.2-.7,1.68-1.2.9-1.15.72-3.5.72-5.52,0-4.05.77-7.08.72-10.56,1.88.18,5.21-.58,7.68,0,.28.06,1.29.58,1.68.48.94-.24,2-1.24,2.88-1.68a20.53,20.53,0,0,0,.24-4.56c-4.44,0-7.82.24-12.48.24,0-2.89-2-8.08-.48-10.08s3.2-1.71,5.76-2.64c4.58-1.66,9.73-2.94,13.92-5,1.32-.66,2.56-2.1,3.84-2.88s2.64-.73,4.08-1.44c.76-.38,1.08-1.4,1.68-1.92l.72.24c.66-.36,1.5-1.49,1.44-1.92h1c.66-.38.88-1.45,1.44-1.92a41.58,41.58,0,0,0,6.48-6.72c.58-.81.64-1.79,1.2-2.64.69-1,2.08-2,2.64-3.12l.24-2.16c.32-.59,1.68-1.88,1.92-2.4l1.2-5.28c1-2.43,2.33-5.07,3.36-7.68l.48-2.4c0-.22-.68-.14-.48-.72l.72-.24v-2.16c.48-1.14,1.72-1.88.72-3.36l.48-.48h.72c0-1.25-.15-1.37.48-1.44-.32-1.85.52-4.74,1-6.72.12-.54-.29-1-.24-1.2.51-2.07.41-1.2-.48-2.88.64-1.39,1.06-2.94,1.44-3.84C138.5,135.45,138.93,134.07,138.79,133.1Zm-8.16,9.6a11.27,11.27,0,0,1-1.2,3.12,44.75,44.75,0,0,1-.24,5.76c-.1.16-.63.43-.72.72-.5,1.62.28,2.31-1,3.12.32.58-.11.17.48.48-1.8,8.07-5.4,18.31-9.84,24.72-1.21,1.74-3.54,2.6-5,4.08a37.32,37.32,0,0,1-6.24,5.52c-1.93,1.2-3.67,1.26-5.28,2.4A64.69,64.69,0,0,1,80.23,202a35.54,35.54,0,0,1-10.08-.24c-1.56-.48-2.93-1.67-4.32-2.16-.72-.26-1.44.07-1.68,0-.45-.15-1.21-1-1.68-1.2l-1.92-.24c-.71-.31-1.61-1.34-2.4-1.68-3.75-1.66-6.22-1.84-9.12-4.56-1.29-.05-.8-.19-1.2-.48-.3-.45-.11,0-.48.24-1.37-1.93-2-1.24-3.6-2.4.73-.58-1.08-1.55-1.44-1.92l-1.68-1.44v-1c-.16.2-1.57-.8-1.92-1.2.36-.58-.35-1.37-1-1.68.4-.65,0-.25.72-.24l-.24-.48c-.6-.16-.13-.07-.72,0C29.33,164.13,24,132.85,31,109.58c.67-2.2.59-4.26,1.44-6.24s1.94-3.37,2.4-5c.78-2.8,1.33-6.19,4.08-7.68V89.9c1.56-.32,2-1.66,3.12-2.4v-.72c2.94-.57,4.88-3.51,7-5,.11-.08.54.25,1,0,.81-.49,1.61-1.43,2.4-1.92,2.29-1.42,5.28-1.54,7.92-2.64,1.2-.5,2.65-1.47,3.84-1.92,2-.77,4-.12,6.48-.72,2-.5,4.26-.73,5.76-1,.46-.07.15.21.24.48a5.38,5.38,0,0,0,2.88-.48s.95,0,.48.24l-.24.24a45.19,45.19,0,0,1,20.64,2.88l2.4.48a74.89,74.89,0,0,1,8.64,7c1.8,1.53,4.79,2.37,6.72,4.32,1.51,1.51,2.3,4.81,3.36,6,.28.39,0,.13.48,0l.48.72-.48-.24c.93,3.1,4.42,6.2,5.76,9.6a30.74,30.74,0,0,1,1,4.08v2.88c.61,2.11,1.6,4.13,2.16,6.48,1.17,4.84.06,20.06-.72,22.8C130,141.73,130.74,142.22,130.63,142.7ZM54.79,128.54h1V129h-.24C55.33,128.85,55,128.7,54.79,128.54Zm4.32,13.2c.82.22.75.09,1,1h-.48c-.24-.2-.06-.09-.48-.24ZM40.63,163.1c.3.37.16.12,0,.48-.24.19-.06.08-.48.24v-.48C40.57,163.19,40.39,163.29,40.63,163.1Zm57.12,10.08a7.83,7.83,0,0,1,1.92.24v.48h-.24C99,173.58,98.17,173.55,97.75,173.18ZM47.11,190.94h.48v.24C47.17,191,47.36,191.13,47.11,190.94ZM9.19,204.86c.2.24.09.06.24.48H9.19Z",
          {
            style: "fill:#3cc0d5;fill-rule:evenodd;",
            transform: "rotate(180)",
          }
        );
      }
    );
  }

  /*
   * Venus path
   * @private
   *
   * @param {int} x
   * @param {int} y
   *
   * @return {SVGPathElement} path
   */
  function venus(x, y, size, houseId) {
    return createSymbol(
      x,
      y,
      size,
      houseId,
      -20,
      -20,
      1.14,
      1.16,
      function (wrapper) {
        createExtraSpace(wrapper, -90, -125, 100);
        createPath(
          wrapper,
          "M97.62,22.2c.4.5.5.5,1.2.7A2,2,0,0,0,97.62,22.2Zm1.4.5a2,2,0,0,0,.2.7v-.2l.2-.2A1.38,1.38,0,0,0,99,22.7Zm2.4.5c0,.7-.2.3,0,.7v.2c.2-.2.1-.1.2-.5h.2l-.2-.2Zm41,70.1c-.5-.2-.2-.1-.7,0,.5-2.1,0-1.8-.2-3.6-.1-.8.2-.4.5-.7-.6-.8-.2-1.4-.2-2.2l-.5-.5c.7-.3-.4-3.9-.2-4.8a12.75,12.75,0,0,1,.7-1.2,8.16,8.16,0,0,1-1-1.9,2.37,2.37,0,0,1,.5-1.4c-1.7-2.1-1.9-5.3-2.6-7.2-.6-1.7.2-3.2-.5-5-.1-.3-.5-.3-.7-.5.7-.9,0-1.2-.2-1.9s.2-1.3-.5-2.2V60c.2.1.3.2.5.2-.1-.7,0-.7-.2-1v-.5h-.7V57a3,3,0,0,1-1,.2c.2-.6.3-.4.5-1a10.3,10.3,0,0,1-1.7-3.1c-.2-.1-.3-.2-.5-.2v.2a17.66,17.66,0,0,1-1.7-4.6l-.2.2a2.71,2.71,0,0,1-1.2-2.2h-1c-.4-2.2-2-2.3-2.2-4.8-.6.3-.2-.1-.5.5-.5-.3-1.1-2.7-1.7-3.8-.3.3-1.4-1.6-1.7-1.9l-.2-.2v.2c-.7-.4.2-.1-.2-.7-.1-.1-2.6-2-2.9-2.2v-.7h-.7l.5-.5c-.6-.3-.2.1-.5-.5a2,2,0,0,0-.7.2h-.7c.4-.6,0-.2.7-.2-.5-.8-1.2-.9-1.4-1.9-.4.2-.2,0-.5.2-.5-.3-.4-.5-.7-1V29h-.5l.5.5-.7.7a3.2,3.2,0,0,1-.2-1.9c-2.1-.3-4.5-1.4-5.3-2.6-.6.3-.2-.1-.5.5-.3-.1-.2-.1-.2-.2-.2-1.1-.2-.1-.5-1h-.7c.3.6-.1.2.5.5-.3.2-.2.2-.7.2-.3-1.4-1.4-1.3-2.4-1.2-.2-.6-.1-.1,0-.7-.7-.1-.8-.1-1.2-.5-.3.5-.1.3,0,1-1.2-.2-.5-.1-1-.7-.5-.2-.2-.1-.7,0a2.51,2.51,0,0,1-.2-1c-2,.2-2.3-.6-3.8-1,0,0-3.5.7-3.6.7v-.2c-.4-.3.1-.3.2-.7H95c-.2,0-.2.3-.7.5-.5-.6-7.2-.6-7.4-.5v-.2h-.2l.5-.5v-.5c-1,.2-1,.7-1.7,0h-.7a1.85,1.85,0,0,1,.2.7c-.8-.7-1.2-.7-2.6-.7v.7c-.6-.4-.3.1-.5-.7-.8.2-.3.3-.7.7-1.3-1.3-10,.4-12.2,1-1,.2-2.5-.4-3.1-.2l-.5.5h-.5v-.5c-.9.2-.6.6-1.4,1a5,5,0,0,0-1.2-.2,29.4,29.4,0,0,0-6.5,2.6c-.7.4-1.1,1.6-1.7,1.9h-1a17.67,17.67,0,0,0-1.7,1.2,1.85,1.85,0,0,0-.7-.2c-.3.1-.6,1.2-1.2,1.7-1.2.8-2.1.8-2.9,1.9v.7a1.85,1.85,0,0,0-.7-.2c-1.3.8-2.1,2.8-3.1,4.3-2.4,3.4-5.5,6.5-7.7,10.3h-.2c-.5.1.5.2.5.2v.5l-.2-.2c-2.3,1.2-2.5,4.7-3.4,6.7-.5,1.3-1.8,2.7-2.4,4.1-1.4,3.3-2.2,7.2-3.4,10.6-.5,1.6-1.4,7.2-1.7,7.4.5.6.1.2.7.2-.4.6,0,.3-.7.2a1.45,1.45,0,0,0,.7,1c-.3.2-.2.2-.7.2-.1,1.2-.7,4.6-1.4,5.5v.7l.5-.5.2.2c-.9,1.2-1,2.6-1.7,4.3a2.51,2.51,0,0,0,1,.2v.2a3,3,0,0,1-1,.2,5.26,5.26,0,0,1-.2,1.9s.1.9.2.5l.2-.2c-1.5,4.4-1,11.6-2.4,14.6-.3.6.3,2.1.5,2.4-.4.3-.4.4-.7,1h-.2v.4h.5a57.7,57.7,0,0,1-.5,6.7v.7c.7-.5,0-.2,1-.2-.3.2-.2.2-.7.2,0,1.6-.3,2.5-1.2,3.1.4.6-.1.3.7.5a3.73,3.73,0,0,1,.2-1.2h.2c-.4,1.3,0,1.9-.2,3.8a1.85,1.85,0,0,1,.7-.2l.2.2c-.3.3-1.1,1.7-.7,2.4.1.9-.1.6.5.7-.3.6.1.2-.5.5.2.6.2.9.7,1.2v.2c-.4-.2-.2,0-.5-.2-.5.6.3.3-.5.7.3.7.1.6,1,.7-.2.2-.1.1-.5.2.2.2.1.1.5.2-.2.5-.2.3-.5.7-.1.1.2.9.2,1.9.2-.2.1-.1.2-.5,0,0,.5,2.7.2,3.1.4.6,0,.3,1,.2a4.67,4.67,0,0,1-.5,1v.5c.6-.2.4-.1.7-.5.6.9.9,2.5,1.9,3.6-.2,1.2-.6,1.4.2,2.4.3.5,0,.2.5.2.4.5.3.7.2,1.2.4.4,1.2.3,1.4,1a9.85,9.85,0,0,0-.2,1.7c.3.6,1.2.6.7,1.4.3.5,0,.2.5.2a5.77,5.77,0,0,1,.7,2.6c.5-.2.3-.2.7-.5l.2.2c-.2.2-.1.1-.5.2v.7l.5-.5h.2a5.41,5.41,0,0,0,0,2.2h.7a1.85,1.85,0,0,1-.2-.7c.2.1.3.2.5.2-.2.6-.1.4-.5.7.1.8.2.7.5,1.2h1c.1,1.2.3.5.7,1,.9.5.4,1.1.7,1.7.5.3.3.1,1,0,.2,1.1.3,2.6,1,3.4,1.6,1.3,6.1,5.9,6,8.2.4-.2.2,0,.5-.2,1.4.4.4,1.9,2.6,2.2-.2.4,0,.2-.2.5a3.13,3.13,0,0,0,1,.5c-.2.2-.1.1-.5.2v.5c.4.2.2,0,.5.2l.5-.5a13,13,0,0,1,2.6,1,44.37,44.37,0,0,0,6.5,3.4c5.6,2.4,11.7,3.7,17.5,5.5,3.2,1,6.6.3,9.1,2.2,1,0,1.3-.1,1.7.5a10.1,10.1,0,0,0-.2,3.4c.4,1.4,1,6,.5,7,.4.6,0,.3.7.2-.5,1.3-.9,3.6-.5,4.3v.5c-1.4-.4-4.1.4-5.8.7a7.18,7.18,0,0,1-1.7-.2c-1.1,0-2.8.2-3.4.2-.8,0-2.5.8-2.6.7a9.67,9.67,0,0,1-1.2-.7c-.9-.2-2.7,1.1-3.4,1-1.3.6-.5,2.6-1.7,2.9a2.2,2.2,0,0,0,.5,1.2c1.4,1.1,3.3,0,5,.5,1.5.4,3.6-.4,5-1,3.1.8,5.9-.7,9.4-.5.1,1.2-.4,2.7-.2,3.6a9.16,9.16,0,0,1,.2,3.4,3,3,0,0,0-.2,1.7c.2.9,1,4.6.7,6.2a6.49,6.49,0,0,0-.2,2.9,16.1,16.1,0,0,1,.5,5c-.3,2.8,1.9,3.8.7,6-.1,1-.2,1.8.5,2.2a4.57,4.57,0,0,0,2.6,0c1-.4,1.4-.7,1.4-1.4.7.1.5.2,1,0,.2-.4,0,0,0-.7l.2-.2h1c-.2-1.3-.8-1.9,0-2.4-.3-.6.1-.2-.5-.5v-.5c-.2.3-.2.2-.2.7h-.2a9.21,9.21,0,0,1,.7-2.2,2.9,2.9,0,0,1-.2-2.4v-1c-.6.4-.3-.1-.5.7h-.2V225c-.2-.3,0-.2,0-1a1.85,1.85,0,0,0,.7.2c-.1-.7-.5-8.2-.2-8.6,0,0-.1-.9-.2-.5l-.2.2c.1-1-.9-11.1-1-11.3v-.7c.6.4.3.4.5,1.2.6-.4,1.2-1.2,1.9-1.4,1-.3,2.4.3,3.1.2a31.07,31.07,0,0,0,4.6-1h2.6c1.7-.5,3.1-1.5,4.8-1.4a4.78,4.78,0,0,1,.5-1.9c-.4-.6.1-.3-.7-.5-.1-1.5-.6-1.5-1.7-1.9-.9-.4-2.7.8-3.8.7l-1-.5a1.85,1.85,0,0,0-.2.7,28.17,28.17,0,0,1-5.3.5c-.1,0-.7-.4-1.2-.2a3.46,3.46,0,0,1-1.2.7c-1.4.3-2.2-.5-3.1,0h-.7s.1-.9.2-.5l.2.2a11.75,11.75,0,0,1,0-1.9c-.5-.5-.5-.1-.7-.7h-.2c.4-.8.2-.3,1-.2-.3-.7-.6-.3-1-.7l-.2-7a1,1,0,0,1,.2-.7c0-1.2-.1-1.1.7-1a2.1,2.1,0,0,0-.7-1.4s.1-.9.2-.5l.2.2a1.85,1.85,0,0,1-.2-.7c1.2-.4,2.7.2,3.6-.7.9.1.6-.1.7.5.9-.4,2.9-1.4,3.4-.7,0,0,.9-.1.5-.2l-.2-.2c1.6-.1,2.4,0,3.4-1l.5.5c.4-.1,1.2-.6,1.7-.7a9.85,9.85,0,0,0,1.7.2c.9-.3,2.7-1.2,3.6-1,.8-.3.5,0,.5-.7,2.5.4,4.2-1.1,5.8-2.9.5.6,1.6,0,1.9-.2a4.73,4.73,0,0,0,2.2-2.6c.5.2.3.2.7.5.5-1.5,2.6-2.5,3.8-3.4-.3-.2,1.9-3.8,1.9-3.8v-1c.6-1.1,1.8-1.1,1.7-2.4a8.66,8.66,0,0,1,1,.2c.5-1.3,4.5-5.6,4.1-7.2.7-.9,2.4-2.3,1.4-2.9.3-.2.2-.2.7-.2a15.37,15.37,0,0,0,.7-4.3h.7a32.51,32.51,0,0,1,1.7-4.6v-1.4c.3-.7,1.5-2,1.7-2.9.1-.6-.6-.8-.5-1.2a18.2,18.2,0,0,1,1-2.9c.3-.9.3-1.9,1.4-2.2-.2-.4,0-.2-.2-.5.2-.7-.1-.4.5-.5-.1-.9.1-.6-.5-.7.1-.2,2.1-8.6,1.7-9.1.5-.2.2-.1.7,0a2.54,2.54,0,0,0-.2-1.9v-.2c.2.1.3.2.5.2a2,2,0,0,1,.7-1.9c-.4-.6,0-.3-1-.2.2-.2.5-.3.7-.5.7-1.1.5-4.1.5-5.3a2.51,2.51,0,0,0-1-.2,7.67,7.67,0,0,0,.5-1.7v-.5c.6.4.3.2.2,1.2h.2a2.24,2.24,0,0,0-.2-2.2,8,8,0,0,0,.5-3.1c.1-.8-.7-.2-.5-1,.1-.3.6-.3.7-.5-.8-.9.1-5.1.2-6C142.42,98.3,141.22,94.5,142.42,93.3Zm-5.7-2h-1c.1,1.5.5,3.6,0,4.6.1.8.2.7.5,1.2-.2-.1-.3-.2-.5-.2.1.8.2.8,0,1.2.3.2.2.2.7.2-.4.7-.5,1.5-1,1.9.4.6,0,.3.7.2-.7,1-.9,2.7-1,4.8h.7c-.9,1.9-1.2,5.8-1.2,7.2a12.25,12.25,0,0,1,.2,1.9c-.4,1-1.1,3.8-1.4,5-.1.5.4,1.5,0,2.4-.6,1.4-2.6,4.4-1.4,5.8a5.13,5.13,0,0,0-1.4,3.6c-.1.2-.8.5-1,.7v1.4c-.4.9-.9,1.6-1.2,2.4a15,15,0,0,0-.2,2.2c-.5.8-1,1-1.4,1.9-1.5,3.5-1.8,6.9-3.6,9.8-1.7,2.7-3.7,5.4-5.5,7.9-2.4,3.5-4.1,6.9-7.4,9.4-2.1,1.6-4,3.7-6.2,5-1.1.7-2.2.3-2.4,1.9-.2-.3-.2-.2-.2-.7-2.1.9-6.7,2.3-8.4,4.1-1.2-1.2-5.1.3-6,.5-.7.1-.5-.6-1.2-.5s-5.7,1-5.8,1c-1.9-.4-6.2-.7-7.9-1.4-2.3-1-4.7-1.9-7-1.7v-.7s-.9.1-.5.2l.2.2c-1.1-.5-3-2-4.3-1.2-.2-.4,0,0,0-.7-.6.1-.7,0-1,.2-.2-.3-.2-.2-.2-.7a7.71,7.71,0,0,1-2.9-1c-.2-.3-.2-.2-.2-.7-2.6-.5-5.3-2.7-7.4-4.3-.8-.6-1.8-.6-2.6-1.2.1-.2.2-.3.2-.5l-.7-.7c-1.2-.9-2.3-1.1-3.6-1.9-1-.6-1.8-2.3-2.6-3.1-.4-.2-.8-.5-1.2-.7a31.16,31.16,0,0,0-.7-3.1,9.29,9.29,0,0,0-1-.5c-.1-.1.3-1,0-1.4a1.23,1.23,0,0,0-1.2-.7,9.85,9.85,0,0,1-.2-1.7h-.5v-1a1.85,1.85,0,0,0-.7-.2,15,15,0,0,1-.2-2.2l-1.2-1.2c-.3-.6.1-.8,0-1.2-.2-.9-1.6-2.4-1.9-3.4a5,5,0,0,0,.2-1.2c-.2.1-.3.2-.5.2a3,3,0,0,0,.2-1H30c-.1-.2.1-1.9,0-2.2h-.2c-.2-.7.1-.4-.5-.5.3-1-.9-3.3-1.4-4.3.7-1.8-1.6-9.2-1.9-10.8-.4-1.8.1-5.5-1-6.7,1.1-1.3.3-6.3.5-7a7.45,7.45,0,0,0-.2-3.4c-.4-.2,0,0-.7,0,.2-1,.7-2.8.2-3.1.3-.8,0-.5.7-.5-.1-1.1-.2-2.2-.2-3.4.2.3.2.2.2.7.2-.2.3-.8.5-1,0,0-.1-.9-.2-.5l-.2.2c-.2-.9-.3-1.1.2-1.9-.2-.7.1-.4-.5-.5.3-.4.1-.3.7-.5-.3-.6.1-.2-.5-.5V93c.6.4.2.3.7.2.1-.3-.6-.9-.2-1.9l.7-.7a13,13,0,0,0,.7-4.1c.2.2.1.1.2.5h.2a3.8,3.8,0,0,0-.5-1.7c.4-.2,0,0,.7,0-.2-.9-.1-1.4-.2-1.7.3-.2.4-.2,1-.2-.2-.6-.3-.4-.5-1.2H29c-.2-.5-.2-.3-.5-.7a3,3,0,0,1,1-.2c.1-.6,0-.7.2-1-.4-.6-.1-.4-1-.5a6.85,6.85,0,0,0,1.7-1.7c.6-1.4.2-2.7.7-4.3.7-2.2,3.1-5.7,2.2-7.2a2.51,2.51,0,0,1,1-.2c-.4-.6.1-.3-.7-.5a2.2,2.2,0,0,1,1.2-.5c-.2-.8-.2-.5-.5-1a27.59,27.59,0,0,1,1.4-3.8,1.85,1.85,0,0,1,.7-.2,5,5,0,0,1-.2-1.2,36.65,36.65,0,0,1,1.4-3.6c.6-.1.2,0,1,0-.1-.2-.7-.9-.7-1a27.73,27.73,0,0,1,2.2-2.9,9.06,9.06,0,0,1,.5-2.2c.5-.8,2.1-1.6,1.7-2.6v-.2c.2.1.3.2.5.2v-.2c1.2-.6,1.3-2.6,2.4-3.1-.3-.6.1-.2-.5-.5.4-.4,1.1-.5,1.4-1,.5-.8.4-1.9,1-2.6,1.4-1.8,3.7-2.6,5.5-4.1.3-.4,0-.4.2-.7v-.2c.2.3.2.2.2.7h.5a5.76,5.76,0,0,0,.2-1c1.7-2.4,5-1.9,8.2-3.1,1.1-.4,1.7-1.3,3.1-1.4a2,2,0,0,1,.2-.7l.2-.2c.2.6.1.1,0,.7,1.4,0,2.1-.3,2.2-1,1.1-.2,2.6-.6,3.6-.7a7.84,7.84,0,0,0,1.4.2c1.3-.3,3.1-1.2,4.6-1.4s3.8.4,4.8-.2c.2.3.2.2.2.7.9-.1.5-.2,1-.5.3.3,5.3,1,5.5,1s.9-.5,1.4-.2v.5h1.4v.5c.5.2,2.2-.4,2.6-.2.2.2.3.5.5.7.5.2.7-.3,1-.2a15.73,15.73,0,0,1,1.9,1.2h2.6c.9.3,1,.9,1.9,1.2,1.3.4,3.4.1,4.6.7a19.23,19.23,0,0,0,2.6,1.7c.7,0,.2-.1.5-.5h.2v1c1.3.2,2.2,1.3,2.9,1,.6.3,5,5.3,5,5.3h.7a3.31,3.31,0,0,0,.5,1.9h.7v.7c1,0,1,.5,2.2.7l-.2.2v.5c.4-.2.2,0,.5-.2.5.7.3,1.4.7,2.2a8.65,8.65,0,0,0,1,.7c.2.8.5,1.6.7,2.4a1.85,1.85,0,0,0,.7.2c.9,1.6.4,2.4,1.2,3.8h.5c.4.7.3,1.9.7,2.6a1.85,1.85,0,0,0,.7.2,3.8,3.8,0,0,0,.2,1.7,1.85,1.85,0,0,0,.7.2v1.2a5.49,5.49,0,0,0,1.9,2.9c-.2.2-.1.1-.5.2.5.8.5,2.5,1,3.4.1,1,0,.7.7.7-.4,1.3.5,4.6,1.2,5.8.2.3-.4,1.2-.2,1.9.4,2,.6,4.4,1.4,6,.3.5-.3,4.4.2,5.3v.2c.2-.1.3-.2.5-.2l-.5.5a3.42,3.42,0,0,0,.7,1.9c-.5.8-.3,1.2-.2,2.9.5-.2.3-.2.7-.5l.2.2A1.46,1.46,0,0,1,136.72,91.3Zm-22.3-62.6v.5h.2v-.5Zm-47.3.2c-.1.2-.2.3-.2.5C67.32,29.1,67.12,28.9,67.12,28.9ZM56.32,33h.5v.2C56.32,33.1,56.52,33.2,56.32,33Zm-1.2.7c.2.2.1.1.2.5h-.2Zm-3.4,2c.2.2.1.1.5.2C52,35.7,52.12,35.8,51.72,35.7ZM32.82,68.1v.5H33v-.5Zm101.5,8.8v.5h.2v-.5ZM22.42,85.6v.5h.5v-.5Zm5.3.7c.2.2.1.1.2.5h-.2Zm-2.1,9.6c.3.4.2.5,0,1Zm-.3,3.4c.2.2.1.1.2.5h-.2Zm-.2,4c.2.2.1.1.2.5h-.2Zm0,1c.2.2.1.1.2.5h-.2Zm-5.5,8.6-.2.2c-.5.2.5.2.5.2C19.62,113,19.82,113.2,19.62,112.9Zm-.3,12a2,2,0,0,0,.2.7v-.7Zm120,30h.5v.2C139.42,155,139.62,155.1,139.32,154.9Zm-98.6,6.3v.5h.2v-.5Zm47,16.5c.4.2.3.2.7,0Zm12.7,4.1h.5v.2C100.52,181.9,100.72,182,100.42,181.8Z",
          {
            style: "fill:#ff6bc5;fill-rule:evenodd;",
            transform: "rotate(180)",
          }
        );
      }
    );
  }
  /*
   * Mars path
   * @private
   *
   * @param {int} x
   * @param {int} y
   *
   * @return {SVGPathElement} path
   */
  function mars(x, y, size, houseId) {
    return createSymbol(
      x,
      y,
      size,
      houseId,
      -20,
      -20,
      1.12,
      1.16,
      function (wrapper) {
        createExtraSpace(wrapper, -90, -125, 100);
        createPath(
          wrapper,
          "M104.65,35.2h.5v.2C104.65,35.3,104.85,35.4,104.65,35.2Zm81.6-8.7c-.2-.9-.4-.8-.7-1.4a58,58,0,0,0-7.7,1.7c-3.1.8-5.9.3-8.9,1.2-1.1.3-2.4,1.1-3.4,1.4.4.8.2,1.3.5,2.2,1,.4,3.9.4,4.8,1a3.09,3.09,0,0,1,1.9.5c-.1.8-.1,1-.5,1.4-.2,2-3.7,3.2-5,5a29.93,29.93,0,0,1-7.2,7c-.8.9-1.6,1.8-2.4,2.6-1.3,1-2.6,1.6-3.8,2.6a1.85,1.85,0,0,0-.2.7c-1.4,1.1-3.1,2.1-3.8,3.1-.3.2-.5,0-1,.5h-.2c-.5.1.5.2.5.2-.3.2-.2.2-.7.2v.7a8.66,8.66,0,0,1-1-.2l-.2.2s0,.6.1.6c-.5.4-.8.3-1.3,1.1-2.3-.1-2.7-1.5-4.1-2.4a60,60,0,0,1-6.2-4.8,15.05,15.05,0,0,0-1-1.7c-.7-.5-1.5-.5-2.2-1-1-.8-.1-1.1-1.4-1.7v-.7c-1.5-.3-1.7-1.5-2.6-2.4-.7.5-1.8-.8-2.4-1.2a20,20,0,0,1-2.6-1c-1.8-1-2.8-1.8-4.6-2.6-1.3-.6-3.7-2.7-5.3-1.4-.3-.1-.2-.1-.2-.2s-6.9-2.6-8.2-2.4-4.6-1.4-6-1.2c-.4.1-1.6.7-2.2.5-.2-.1-.9-.9-1.2-1s-6.4.6-7.2.7-1.5-.5-1.9-.5a19.91,19.91,0,0,0-5.5.7c-1.3.5-2.6-.2-3.4.2,0,0-.9-.1-.5-.2l.2-.2a5.36,5.36,0,0,0-3.1,1.7c-.5-.1-1.1-1.2-1.9-.7a1.85,1.85,0,0,0-.2.7H69a8.47,8.47,0,0,1-1.7,1c-.7.1-.9-.6-1.2-.5s-.9.8-1.2,1h-2.6a9.35,9.35,0,0,0-1.9,1.4c-.8.6-3.2.7-3.6.7-1.5.2-5.7,2-6.2,1.7-.9.1-.6-.1-.7.5a28,28,0,0,1-4.6,1.2c-.2.7-6.8,3.9-8.2,5-1,1.2-2.1,2.4-3.1,3.6-1.8,1.8-4.2,3.2-5.8,5.3a148.69,148.69,0,0,0-8.6,12.2c-3.5,5.7-5.1,13.7-7.2,20.6-.9,3.1-.6,5.7-1.4,8.9-.8,2.8-1.4,6.5-2.2,9.1v3.6c-.3,1.2-.4,3.1-.7,4.3v12.5c-2.2,9.5-.2,21.8,1.7,29.5.1,1.1.2,2.2.2,3.4.6,2.6,1.3,5.9,1.9,8.4v2.4c1.6,5.2,4,10.2,6,14.9,1.3,3,2.1,6.1,3.8,8.6.8,1.2,2.1,1.9,3.1,2.9l6.5,6.5c1.6,1.2,3.5,1.6,5.3,2.6,1.1.7,2.2,2,3.4,2.6a9.85,9.85,0,0,0,1.7.2c1.3.5,2.9,1.4,4.1,1.9,1,.4,4,.3,4.3.5,1.3.6,2.4,2.3,3.8,2.9,5.1,2.2,10.6,3.3,16.3,4.8a34.81,34.81,0,0,0,15.4.2h1.7a34.49,34.49,0,0,1,3.4-1.9c2.1-.8,3.8-.8,6-1.4,2.7-.8,5.4-2.1,7.9-3.1,1.9-.8,3.7-1,5.5-1.9,1.3-.7,2.4-2.1,3.6-2.9,2.5-1.5,5.2-2.4,7.4-4.1.3-.2.2-.6.5-1a21.09,21.09,0,0,1,3.6-3.1c1.3-.9,2.8-1.4,4.1-2.4,2.3-1.6,3.6-4.5,5.3-6.7l5-5c1.2-1.2,4.8-4.1,4.3-5.8.8-.3,1.2-.2,1.7-.5.9-.7.9-1.8,1.4-2.9l1.4-1.4c.9-1.3,1.4-3.2,2.2-4.6.1-.2,1-1.7,1-1.7a1.85,1.85,0,0,0-.7-.2c.4-.2.3-.2.7,0,2-2.6,2.7-7.8,4.1-11,2.1-4.8,4.5-9.3,6-14.6.6-2.2.7-4.6,1.2-6.7v-4.3a27.82,27.82,0,0,0,.7-10.8c.2-2.5.3-5,.5-7.4-.3-1.2-.9-3.2-1.2-5a49.86,49.86,0,0,0,0-5.5c-.3-1.8-1.6-4-2.2-5.5s-.4-2.9-1-4.6c-.5-1.5-1.4-3.3-1.9-4.8-.3-2.2-.6-4.5-1-6.7-1.3-4.1-3.7-8-5.5-11.5-.5-1.4-1-2.9-1.4-4.3-.3-.2-.2-.2-.7-.2a2,2,0,0,1,.2-.7c-.3-.2-.2-.2-.7-.2V65h.7v-.7c2.1-.9,5.3-5.8,7.4-7.9a89.52,89.52,0,0,1,8.9-7.4c1.3-1,2.7-4,4.1-5,2.2-1.7,4-2.6,5.5-5a2.29,2.29,0,0,1,1.4.5c0,1.3-.1,2.4.5,3.1,0,0-.1.9-.2.5l-.2-.2a11.84,11.84,0,0,0,.2,2.6c.5,1.1,1.2.8,1,2.4l.2-.2c2.9-.4,2.2-3.9,3.1-6.2.6-1.6,1.9-3.2,2.6-4.8.4-.8,0-1.7.5-2.6a1.85,1.85,0,0,1,.7-.2,5,5,0,0,1-.2-1.2c.2-.4,1-1,1.2-1.4C186.45,29.5,185.55,27.8,186.25,26.5Zm-38.9,31.2.2-.2-.2.2ZM151,96.9c.2,2.3.3,4.6.5,7,2.3,8.8,2.4,25.4.7,33.1-.3,1.6.5,3,.2,4.3-.8,4.5-.6,8-1.9,10.6-.3.6-.5.6-1.2.7.3.6-.1.2.5.5-.3.6.1.2-.5.5a9.29,9.29,0,0,1,.5,1c-.2-.1-.3-.2-.5-.2.2.4,0,.2.2.5-.3.6-.5.6-1.2.7.2.9,0,.7.7,1-.2.4-1,.9-1,1-.5.9.6,1.4-.7,2.9.4.6-.1.3.7.5-.4.6,0,.3-.7.2v1h-.7a2.86,2.86,0,0,1-1.4,2.4c.2.5.2.3.5.7-.7.4-.6.4-1.4.2v1h.7c-.3.8-.6.6-.7,1.7a1.85,1.85,0,0,0-.7-.2c-.3.7-1,2.9-1.2,3.1s-1.2.6-1.4,1a1.85,1.85,0,0,1,.2.7c-.4.7-1,1.1-1.2,2.2a2.51,2.51,0,0,0-1-.2c.1,2.7-2.5,4.1-3.8,6-.5.7-.2,1.4-.7,1.9h-.7c-1.1,1.1-.7,2.8-2.4,2.6v1.2c-1.4.1-5.5,5.1-7,6.5s-3.8,2.7-5.5,4.1a20.22,20.22,0,0,1-2.9,1,16,16,0,0,1-6,3.4c-.5.2-.3.2-.7-.2-.5.6-1.1,1.7-1.9,1.9-1,.3-.9-.3-1.4,0h-.2c-.5.1.5.2.5.2-.5,1.3-2.6,1.6-3.6,2.4-.2-.4,0-.2-.2-.5l-.2-.2c-.3.4-.1.3-.7.5v.7c-2.6.5-2.7,1.8-5,2.6-2,.7-3.2.3-4.6,1.4-1.2-.9-5.4,1.5-7.7,1.4-.5,0-2.6-.6-3.1-.5-.9.2-4.7,1-5.5.7-.6-.2-1.6-.8-2.4-1a19.42,19.42,0,0,1-2.4.2,12.13,12.13,0,0,1-1.4-.5c.1-.2.2-.3.2-.5-.8-.3-1.2.6-1.7.5-1.2-.3-2.6-1.3-3.8-1.7-1.8-.5-3-.3-4.6-1-2.1-.9-4.2-2.7-6.5-3.6a3,3,0,0,1-1,.2c-.6-.2-3.2-.9-3.8-1.2-.3-.2-.7-.8-1.2-1a5,5,0,0,1-1.2.2c-.6-.3.1-.6-.7-.7H45c.1-.2.2-.3.2-.5H45c-.6-1.1-1.6-.8-2.6-1.4s-2.1-2-3.1-2.6c-.7-.4-.9.2-1.4,0a10.63,10.63,0,0,1-3.6-3.4c-.6.4-.3-.1-.5.7h-.7c.1-.5.2-.3,0-.7.4-.2,0,0,.7,0-.7-1.9-3-1.6-4.1-2.9h-.2c-.5-.1.5-.2.5-.2-.4-1.3-.8-.5-1.7-1.2-.3-.3.1-.1.2-.7l-.5-.5c-.3,0-.1-.2-.5.2-.9-.9-2-2.4-1.9-3.6a2.51,2.51,0,0,0-1-.2c-.2-3.1-2.6-5.5-1.9-7.7h-.2l-.2-.2v.2c-.4-.5.3-.7-1-1l.5-.5c-1.2-.8-.8-1.4-1.2-1.9,0,0-.1-.9-.2-.5l-.2.2a2,2,0,0,0-.2-1.2c.4-.6-.1-.3.7-.5V171a1.85,1.85,0,0,1-.7.2c.3-1.5-.4-1.5-.7-2.6-.1-.2.1-2.4,0-2.6a1.85,1.85,0,0,0-.7-.2c-.2-.4.7,0,.5-.7-.2-.9-1-1.7-1.4-2.9-.1-.4.3-.2.5-.2,0-.2-.5-.6-.5-.7a1.85,1.85,0,0,0,.2-.7c-.2-.2-.5-.3-.7-.5v-1.9c-.1-.4-.9-1.2-1-1.7s.2-.1.5-.2c-.2-.8-.3-1.6-.5-2.4a1.85,1.85,0,0,0-.7-.2c-.3-.8.4-3.8.2-4.6-.4-2.6-.8-4.6-1.2-6.2-.7-3,.6-6.8-.7-8.9.5-.5.4-.5,1-.7v-.5h-.5c1.7-1.7-.9-8.3,1.4-11.3-.6-.7.3-1.2,0-1.9h-.5c.8-1-.2-1.6,0-2.6.5-2.5.9-4.9,1.4-7a1.85,1.85,0,0,1-.2-.7c.2-.2.5-.3.7-.5.3-.8,0-4.5,0-4.6s.7-.2.7-.5c.2-.6.4-3.3.5-3.6a1.85,1.85,0,0,0,.2-.7H18c.4-.6-.1-.3.7-.5-.3-.9.1-1.8-.2-2.9.6-.1.2,0,1,0-.3-1-.1-.7-.5-1.9.5-.8,1.3-.6.5-1.7.4-.2,0,0,.7,0,.1-2.5,1.4-4.2,1-5.3.3-.5.3-.4.7-.7.7-1.1-.3-1.9.2-2.9.2-.3,1-.4,1.2-.7a10.54,10.54,0,0,0,.5-2.6,48.29,48.29,0,0,1,3.6-8.4c1.9-3,5.3-4.5,7.4-7.2,1.5-1.8,2.5-4.3,4.3-5.8,2.7-2.1,7.5-5.8,10.6-7.2,2.7-1.2,5.7-1.5,8.6-2.6,4.1-1.6,9.1-3.6,13.4-4.8,4.5-1.3,12.2-.5,17.5-.5,8.3,0,18.1.6,24,3.1,2.8,1.2,4.9,3.2,7.2,4.8a57.31,57.31,0,0,1,15.1,13.9l2.2,2.2c1.3,1.9,1.9,3.8,3.1,5.8l1.4,1.4a59.69,59.69,0,0,1,6,10.8C149.25,89.1,150.05,93.1,151,96.9Zm-6.5,10.8h.5v.5C144.25,108,144.45,108.3,144.45,107.7Zm-3.8,20.1c.2.2.1.1.2.5h-.2Zm7.2,20.9a2,2,0,0,1,.7.2h-.2c-.2.2-.1.1-.5.2ZM39.05,170.8c.2.2.1.1.2.5h-.2Z",
          {
            style: "fill:#d37c6c;fill-rule:evenodd;",
            transform: "rotate(180)",
          }
        );
      }
    );
  }
  /*
   * Jupiter path
   * @private
   *
   * @param {int} x
   * @param {int} y
   *
   * @return {SVGPathElement} path
   */
  function jupiter(x, y, size, houseId) {
    return createSymbol(
      x,
      y,
      size,
      houseId,
      -20,
      -20,
      1.12,
      1.16,
      function (wrapper) {
        createExtraSpace(wrapper, -70, -125, 100);
        createPath(
          wrapper,
          "M65.81,47.9a8.66,8.66,0,0,0,1-.2,1.85,1.85,0,0,0-.2.7c1.8.1,7,6.9,7.4,7.9-.6.1-.3-.2-.5.5,1,.4.6.8,1.2,1.7,1-.1.7,1.3,1.2,2.4,1.5,3.4.1,5.6,0,9.1h-.7c-.4,2.6-.6.8-.2,3.4-.8,0-1,0-1,1.4.6.3.2-.1.5.5a1.85,1.85,0,0,0-.7-.2c-.3,1.6-.7,1.6-.5,3.1-1.2,0-1.3,1.3-1,2.9-.9,0-1.9,1.3-1.9,2.6a27.93,27.93,0,0,0-.7,4.6h-.5c-.2-.2-.1-.1-.5-.2a1.71,1.71,0,0,1,0,1.4c-.7,0-1.1.1-1.4.5,1.3,1.8-3.6,5.8-3.4,9.4-.8.2-.4-.1-.7.5.6.3.3-.1.5.7-.8.3,0,.4-1.4.5-.4.4-.2.3-1,.5,0,.6-.1.3-.2,1.2.8,0,.4-.1,1,0a1.85,1.85,0,0,1,.2.7c-.6.3-.6,1-.7,1.7-1,.4-1.6.3-1.7,1.4.2.3.2.4.2,1h-.5v.2c-.2-.1-.3-.2-.5-.2-.1,1.1-1.9,1.6-2.4,2.9a4.23,4.23,0,0,1,.5.7c-.6.3-.4.5-.7,1-.2-.1,0-.3-.5-.2v.2s1,.1.5.2h-.2a8.81,8.81,0,0,1-1.4.7c-.1,1.3-.4,1.2-.2,2.4-.6.1-.3-.2-.5.5.5-.1.3-.2.7,0-2.6,1.6-4.7,5.3-6,8.2-.5,0-.9-.4-1.2.2v1.9c-.7,1.8-2.5,3.9-3.6,5.5-4,5.7-8.1,10.9-12,17.3-1.4,2.3-4.8,5.8-5,8.9h-1v1c-.5.1-.8.2-1,1.2.2.2.1.1.2.5,0,0-2.1,1.5-1.4,2.2-1.5,1.1-1.9.6-2.2,3.1a2,2,0,0,0-1.2.2c.6.3.3-.1.5.7h-1.2a7.54,7.54,0,0,0-1,2.4c.6-.1.1-.2.7,0-.2.2-.1.1-.5.2-.4.3-.4,0-.7.2.5.3.5.2.7.7h-.2c-.3.2-.2.1-.7.2-.2-.8.1-.4-.5-.7,0,.6-.3.6-.5,1.7.7,0,.3-.2.7,0,.2.2.1.1.2.5-.8,0-.1.5-1,1a4.23,4.23,0,0,0-.7-.5,4.68,4.68,0,0,1-.2,1.7h.5l-.2-.2c-.5-.2.5-.2.5-.2v.7c-.3.5-.1.5,0,1.2-.5-.1-.3-.2-.7,0,.2.2.1.1.2.5a2.43,2.43,0,0,0-1.2,0l.2.2a2.2,2.2,0,0,0,1.2.5v-.7a8.66,8.66,0,0,0,1-.2v.5c-.2.3-.1.2-.2.7a20.89,20.89,0,0,0,5,0c.1,0,.5-.5.7-.5a48.78,48.78,0,0,1,5.5,1.2c1.7.4,5.8-.6,7.4-.7,4.5-.4,10.2-.3,15.1-1.4,1.7.1,3.4.2,5,.2,2.4-.6,4.9-.8,7.2-1.4a28.25,28.25,0,0,0,2.9.2c2.5-.7,6.8-.6,9.6-1.2h3.1c2.8-.6,6.5-.2,9.6-1a65.33,65.33,0,0,1,7.2-1,28.49,28.49,0,0,1,3.1,1.2c.3-.6.4-.5,1-.7-.7-1.4.4-5.7-.7-7h.5c.2-.3.1-.8.2-1-.6-.3-.2.1-.5-.5.6-.3.7-2.1.5-2.4-.6-.5-.3.3-.7-.5.6-1,0-9.9-.5-12-1.4-6.4-1-13.6-2.4-20.2-.6-2.9.6-5.5-.5-7.7a29.36,29.36,0,0,0,0-8.4c.6-.1.4.1.5-1-.8,0-.3.4-.7-.2.5-.7.3-2.7.2-3.8-.8-.2-.4.1-.7-.5l.5-.7-.7-1.2c-.3-1.2,1-1.7.5-3.1h-.5a27.75,27.75,0,0,1,0-2.9c.4-2.3-.5-8.9-1.4-12.2-.7-2.6-.4-9.2-.5-12.5,1.7.1,3.1.1,3.4-.7h-.2c.1-.2.2-.3.2-.5.9.7,1,.6,1.9.2a1.85,1.85,0,0,0-.2.7h.7a35.72,35.72,0,0,0,1.7,5.5c.7,2.2-.3,2.9.7,4.6a3.71,3.71,0,0,0-.2,1.9c.2.2.6-.3.5.2-.2.8-1,1.5-.7,2.6.4,1.7.7,2.4.5,3.8l.2-.2c.2-.5.2.5.2.5-.5.8.1,1.3.5,1.9h-.5c-.2-.4,0-.2-.2-.5.1.9-.2,1.5-.2,3.6.5.3.3.4.5,1.2l-.2-.2c-.2-.5-.2.5-.2.5,1.1.8.1,2.4.5,3.4h.5c.5.9.8,9.2.5,10.1a19.28,19.28,0,0,1,1.2,4.6,4.64,4.64,0,0,1-.2,1.4,13.65,13.65,0,0,0,.7,2.9h-1a2,2,0,0,0,.2.7c.3-.2.2-.1.7-.2.1,1.1.2,2.2.2,3.4h-.7c.2.8-.1.4.5.7l.2-.2v1.2c-.6.4-.2.3,0,1.2-.6.1-.4-.1-.5.7.6.1.4-.1.5.7l-.2-.2c-.2-.5-.2.5-.2.5.9.6-1.6,2.3-.2,3.6.1.1.6.1.7.2a3.77,3.77,0,0,0-.2,2.2h.7c.3.7.5.7.2,1.2s-.3-.2-.5.5c.6.3.5.5.7,1.2-.2-.1-.3-.2-.5-.2v.2c1.1,1.7.6,7.8,1,9.8-.7,0-.6-.2-.7,1l.2-.2c.2-.5.2.5.2.5-.7,1,.1,2.8.5,3.6a1.91,1.91,0,0,0-1,.5c.6.7.7,1.9,1,3.6-.6.1-.3-.2-.5.5l.2-.2c.2-.5.2.5.2.5-.6,1.4,1.2,8.3.5,10.6.9,0,.6-.5,1,.5-.6.1-.4-.1-.5.7,1.8,1.1,5.6.8,8.4.7,1.5-1,4.2-.3,6.2-.7,3-.6,6.9-.7,9.6-1.4a28.25,28.25,0,0,1,2.9-.2,9.27,9.27,0,0,1,1.4,1.4l.5-.5c-.1,1.8,1.6,1.4,2.6,2.6a2.29,2.29,0,0,0,0,1.2c.1.2.8.4.2.7h1v1.2c-.2-.1-.3-.2-.5-.2v.2a2.76,2.76,0,0,1,.2,1.4c-.7,0-.5-.3-.7.7.2.2.1.1.2.5-1,.1,0,.3-1,.7h-1.9c-2.4.6-5.6.7-8.2,1.2-1.2.2-3.2-.3-4.3-.2-2.6.2-5.4.5-8.2,1-.7.1-1.2-.8-1.9-.5,0,0-.4.7-.5.7-1.7.7-4.1,0-5.3,1,.2.2.1.1.2.5-.2-.1-.3-.2-.5-.2v.2c.7,1.1,0,3.5.2,5,.7,3.8,2.1,11.8,1.2,15.6-.4,1.7.5,1.6.2,2.6.6.1.3-.2.5.5-1.5,1-.6,4.1-.7,5.8-.3,3.5,1.7,11.2.2,13.4.1,1-.3,3.2-1,3.6-1.4-1.1-1.4.6-2.6.5-1.8-.2-1.4-1.7-4.3-1-.2-.4,0-.2-.2-.5.5-.8.2-.9,0-2.2l.2.2c.2.5.2-.5.2-.5-.7-.4-.5-8.5-.5-10.8V198.8c0-3,.3-5.4-.2-7.7v-4.8c-.2-.7-.8-2-1-2.6-.4-1.3.5-1.8-1-2.4-2-1.3-5.7.6-7.7.2a14.36,14.36,0,0,0-4.6.2c-3,.1-5.9.2-8.9.2a39.83,39.83,0,0,1-6,1.2,51.7,51.7,0,0,0-7.2.7c-3,.7-7.4,0-10.3.5a19.42,19.42,0,0,0-2.4-.2c-3.4.8-7.6.6-10.8,1.4-2.3.6-9.5,1.1-11,0-2.6.7-8.1,1.2-11.8.2-1.8-.6-3.5-1.3-5.3-1.9a9.39,9.39,0,0,0-2.6-1.4,3.73,3.73,0,0,1,.2-1.2c-1.8-.2-1.7-1-3.4-.7,0-2.3-1.2-2.5-1.4-3.8h.2c.2.4,0,.2.2.5v-1c-1-.7.9-6.2,1.7-8.2,1.3-3.2,3.5-5.5,5.3-8.2,2-3,3.7-6.3,5.5-9.4,1-1.6,2.6-5.7,3.8-6,.2-2.5,2.2-3.5,3.4-5a49.2,49.2,0,0,0,2.6-4.3c1.4-2.2,3-4.1,4.3-6.2,1-1.6,1.5-3.8,2.9-5a18,18,0,0,0,2.9-2.6c2.5-3.7,4.2-7.8,7-10.6-.2-.3-.1-.2-.2-.7a2,2,0,0,0,.7-.2c1.5-1.5,1.8-4,3.1-5.8,1.7-2.3,4.6-5.8,5-9.4a2,2,0,0,0,.7-.2,9.5,9.5,0,0,0,1-1.7c-.4-.3-.3-.2-.5-.7a1.85,1.85,0,0,0,.7.2c.6-4.6,5.6-7.9,5-12.5l.2.2c.2.5.2-.5.2-.5-.6-1.2,1.2-3.8,1.7-5,1.2-3.3,1.5-9.8.2-13.4-.6-1.8-2.5-3.2-3.6-4.6-.9-1.1-2.2-3.5-3.4-5-.6-.9-1.8-1-2.6-1.7-2.3-1.6-3.7-4.6-6-6.2-.9-.6-2.2-.6-3.1-1.2l-3.6-3.6a32.07,32.07,0,0,1-3.1-1.9c-3.1-2.7-4.8-6.1-9.4-7.4.2-.8-.6-2.2-.2-3.4a5.84,5.84,0,0,0,.7-1.9c1-.1,1.8-.9,3.1-.5,2.3.8,4.9,4,7,5.3,1,.6,1.9.8,2.9,1.4.6.4,1.2,1.3,1.9,1.7,1.2.6,2.3.5,3.4,1.2,3.3,2.2,6,5.4,9.1,7.7C59,42.2,65.31,45.3,65.81,47.9Zm109.4,136.8c.2.2.1.1.5.2C175.51,184.7,175.71,184.9,175.21,184.7Z",
          {
            style: "fill:#ac75da;fill-rule:evenodd;",
            transform: "rotate(180)",
          }
        );
      }
    );
  }

  /*
   * Saturn path
   * @private
   *
   * @param {int} x
   * @param {int} y
   *
   * @return {SVGPathElement} path
   */
  function saturn(x, y, size, houseId) {
    return createSymbol(
      x,
      y,
      size,
      houseId,
      -10,
      -20,
      1.14,
      1.18,
      function (wrapper) {
        createExtraSpace(wrapper, -50, -125, 100);
        createPath(
          wrapper,
          "M11.05,85.3c.2.2.1.1.2.5h-.2Zm20.4-35.2c-.2.8.1.4-.5.7-.3-.4-.2-.3-.7-.5v.2c.8,1,.2,1.7,0,2.9.7,0,.5-.3.7.7h-.2c-.2-.4,0-.2-.2-.5-.5,4.6,0,5.7,0,10.3V82.4c1,4.3,1.2,9.9,1.7,14.4.4,3.6-1,6.9.2,10.1.4-.2.2,0,.5-.2.8-.8,3.6-5,3.8-6.7a2,2,0,0,0,.7-.2c-.2-.3-.1-.2-.2-.7a2,2,0,0,0,.7-.2c1.9-2,4.3-8,6.5-9.1v-1h.7a5,5,0,0,0,.2-1.2,2.24,2.24,0,0,0,1.9-1c.3-.4.4-.7.2-1.7.8,0,2.3-.2,2.4-1.7,2.9,0,4.4-.2,7,0,.4,1.5,1.4,2.8,1,4.3h.7c-.1,1-.2,2.1-.2,3.1.3,1.5,1,3.2.5,4.8,1,0,.7-.5,1,.5-.5.9,0,2.6-.2,3.8-.5,2.9.6,6.1.7,8.9,0,1.2,0,2.8-.7,3.4a8.65,8.65,0,0,1,.7,1,18.8,18.8,0,0,1-.2,4.1c-.2.9.4,1.6.2,3.4-.5,5.8.4,13.3,1.7,19.2h-.2c-.3-.4-.2-.3-.7-.5v.2c.4.5.3.4.2,1,.7-.1.3-.4.7.2-.1.1.3,1.1.2,1.2-.3.5-.7.1-.5.7.6.5.3-.3.7.5a7.12,7.12,0,0,0-.7,3.4,2,2,0,0,1,.7.2c.2.3.1.2.2.7-.9.6-.1,4.4.2,5.5.6,1.9.5,5,1,6.7v4.3c.2.6.6.8.5,1.4-.2,1.9,1,3.3.2,4.8a1.85,1.85,0,0,1,.7-.2,4.25,4.25,0,0,0,.5,1.7h-.7c.1.7,1.1,4.5,1,4.8a6.27,6.27,0,0,0-.7,2.2c2.1,1.4,2.5,5,1.9,7.7h.2c.2-.4,0-.2.2-.5v1c-.8,0-.3-.4-.7.2,1.4,1.1.1.9.5,1.9.2.2.5.3.7.5.2,2.2.3,4.5.5,6.7,1.5,4.6,4.1,8.4,6.5,12a12.23,12.23,0,0,1,1,2.4,5,5,0,0,0-.2,1.2c.4.8,1.7,1.7,2.2,2.4,1.2,1.8,2,5,3.6,5.5l.2-.2a5.14,5.14,0,0,0,1.4,3.1c.2-.1.3-.2.5-.2a1.85,1.85,0,0,0-.2.7l1,1c.2.6-.3,2.3-.2,2.4.2.4.3,0,.5.7a9.77,9.77,0,0,1-4.6-.5v-.7c-3.5-1.1-6.6-5.6-8.2-8.4-.5-.8-1.6-1.4-2.2-2.2s-.5-2-1.2-2.6c-.2.1-.3.2-.5.2a3,3,0,0,0,.2-1c-.2-.5-.7-.2-1-.5a9.58,9.58,0,0,1,0-1.7c-.3-.4-1.2-.7-1.4-1.2-.2-1-.5-2.1-.7-3.1-.3-.8-1-2.7-1.4-3.6h-.5c-.2-.4-.2-3.1-.5-4.1-.6-2.2-3.7-10.7-3.1-12.5a2,2,0,0,1-.7-.2c.9-1-.7-3.6-.7-5.3-.1-2.4-1.1-6.1-1.7-9.1-.4-2.3.8-4.6.2-7.2s-.1-7.1-1.2-11.3a28.25,28.25,0,0,0,.2-2.9c-.4-1.7-.6-4.3-1.2-5.8v-5.8c-.2-2.2-.3-5.7-1-7s.3-4.2.5-4.8a10.73,10.73,0,0,1,0-3.1c.1-3.4.3-7.9-.7-11.5-.4-1.6,0-4.8.5-5.3-1.4-1.4.2-3.3-.7-5.5h-.5a30.55,30.55,0,0,1,.2-5.3,4,4,0,0,1-1-1.2,2,2,0,0,0,.7-.2c-1-.8-1.4-3.6-1.4-5.3h-.7c-1.2,2.1-3.7,3.3-5,5.3-.2.5-.3,1-.5,1.4-.6.8-1.9,1.5-2.4,2.4a7.84,7.84,0,0,0-.2,1.4,65.15,65.15,0,0,0-5.5,7.2c-.7,1.1-2.3,6.4-3.1,6.7-.3.2-.4.2-1,.2-.1.8-.6,1.1-.5,1.7.2.1.3.2.5.2a6.4,6.4,0,0,1,0,2.4h-.5v.5c.1.6.9,3.1,1,3.8s-1,1.4-.7,2.9a47.53,47.53,0,0,1,.5,12.2c-.3,2.4,1.1,5.3.5,7.2h.7v1h-.2s0-.9-.2-.5v.5c-.1.2,0,.5,0,1.2.5.1.3-.2.5.2a6.16,6.16,0,0,0-.2,4.3,1.85,1.85,0,0,0,.7.2c.3.7-.5,2.9-.5,2.9l-.2.2a7.06,7.06,0,0,1,1,4.3,21.49,21.49,0,0,0-.5,3.4c.2.4.5.1.7,1-.5-.1-.3-.2-.7,0,1,.6.5,1.8.5,3.4-.1,2.2.9,6.7,1.2,9.6h-1.2v1c-1.9.1-2.8.4-4.8.5-.1-.6-.2-.5-1.4-.5V176c.2-.5.1-.3,0-1a3.73,3.73,0,0,0-1.2-.2c-.7-6-.8-14,0-18,.3-.4-.5-.2-.5-.2.1-1.2.2-2.4.2-3.6-.7-3.2-.1-6.9,0-10.1a13.32,13.32,0,0,0-.5-1.9,17.41,17.41,0,0,1,0-4.6,21.72,21.72,0,0,0-.7-2.4,7.84,7.84,0,0,0,.2-1.4c-.2-1.8-.1-4.1-.2-6.2v-3.6a37.49,37.49,0,0,1-.5-13.7v-8.2c-.2-.8-.8-1.7-1-2.4a7.59,7.59,0,0,1,.2-3.1c.3-1.4,0-6.2,0-7.4.3-.5-.4-.1-.5-.2v-.2c0-.3-.1-3.6,0-4.1.6-2.2.2-5.6,1-8.2.3-.9-.5-2.9-.2-4.1s1.3-2.5.2-3.6c.9-1.2.7-4,.5-6.2.7.1.3.4.7-.2-.6-.5-.7-.8-.7-1.9a2,2,0,0,0,.7-.2c-.9-.8-.6-2.1-.5-3.6h-.7c.1-.8.4-.9.5-1.2a16.08,16.08,0,0,1,0-2.2c-.5-.1-.3.2-.5-.2a2.29,2.29,0,0,0-.2-2.6c-.3-.2-.2-.1-.7-.2-.9.5-3.5-.3-4.6,0-.1.2-.2.3-.2.5-1.1.3-2.4-.6-3.4-.7-1.3-.1-3,.3-4.6.2a15,15,0,0,0-2.2-.2c-.5.2-.6.6-1.4.7a7.05,7.05,0,0,1-.2-2.6,2.92,2.92,0,0,0,.5-1.4c-.6-.1-.3.2-.5-.5.7-.6.6-1.6,1.2-2.2,1-1,3.5-.8,5.5-.7,1.2.8,8.4.9,10.1,1,0-.6.1-.5,1-.7v-.2c-1.1.1-1,.3-1.7.7v-.5c3-2.4,1.4-5.7.5-9.4.8.2.5.2,1,.5V31.7c-.4-.7-.4-2.5-.5-3.8-.6-.1-.3.2-.5-.5.4-1,.1-2.7.2-4.1h-.7v-.7c1.8-.6.3-1.3,1.4-2.2.4.9,1.6,1.2,2.4,1.7v-.2c.1-.2,0-.2,1-.2.3.5.3.4.7.7-.1.7.4.8.7,1.4.7,1.6-.7,4.9-.2,6.2h.5a3,3,0,0,0-.2,1s.7.3.7.5c.7,1.9-.1,6.1-.2,7.4-.2.1.7.4.7.5.3.7-.3.7-.5,1v.2c.7.2.9.2,1.2.7a2,2,0,0,0-1.2.2c.2.6-.2.4,0,1,1.1.8,6.4.4,7.9-.5,0,1.1-.4.9,1,1,1.4.9,9,1,10.3.5V44c-.9,1.2-.4,3.3,0,5-1.7.2-5.3.8-7.9.2-1-.2-3.1-.8-4.3-.5-2.2.5-5.4,1-7.2,1.2v.2Zm-6.2-9.9c.2.2.1.1.2.5h-.2Zm40.8,137.5h.5v.2C66.05,177.8,66.25,177.9,66.05,177.7Zm1.2,32.9c.2.2.1.1.2.5h-.2Z",
          {
            style:
              "fill: #ff6bc5;stroke-width: 2px !important;stroke: #ff6bc5;",
            transform: "rotate(180)",
          }
        );
      }
    );
  }

  /*
   * Uranus path
   * @private
   *
   * @param {int} x
   * @param {int} y
   *
   * @return {SVGPathElement} path
   */
  function uranus(x, y, size, houseDegree) {
    return createSymbol(
      x,
      y,
      size,
      houseDegree,
      -10,
      -20,
      1.12,
      1.16,
      (wrapper) => {
        createExtraSpace(wrapper, -60, -125, 100);

        createPath(
          wrapper,
          "M44.54,40.2c.2.2.1.1.2.5h-.2Zm40.1,2.4c.2.2.1.1.2.5h-.2ZM43.34,57.5V58h.5v-.5Zm14.9.2a2,2,0,0,0,.2.7v-.7Zm-14.9,3.2c.2.3.1.2.2.7H43v-.2A2.19,2.19,0,0,0,43.34,60.9Zm2.6,66h.5v.2C46,126.9,46.24,127.1,45.94,126.9Zm69.9,52.3c.3-.4.1-.3.7-.5-.4-.8-.2-.3-1-.2a9.79,9.79,0,0,1,.5-1.9c-.4-.6,0-.3-.7-.2.2-.9.7-.7,0-1.2.2-.7-.1-.4.5-.5a7.84,7.84,0,0,1-.2-1.4c-.2.3-.2.2-.2.7-.9-.6,0-1.1-1-1.7v-1c.2.3.2.2.2.7h.2c-.1-1-.1-1-.7-1.4.2-.8.3-.6.5-1.4.3-.2-1.5-4.4-.2-5.3-.2-.5.1-.2-.5-.2-.1-.4.1-1.5,0-1.7s-.5-.3-.7-.5c-.2-.8.5-.3.2-1-.2.1-.1-.1-.2.2a2.76,2.76,0,0,1-.2-1.4c-.5.1-.3.2-.7,0h-.2c.3-.6.2-.5,1-.7-.5-1.9-2-3.1-2.9-4.6s-1-3-1.9-4.3-2.2-1.9-3.1-2.9c-1.2-1.2-1.8-2.9-3.1-4.1-.1-.2,0-.1-.2,0-.2-.1-.3-.4-.5-1h-.7c-.5-2.4-4.7-3.3-4.8-5.3h-.7a2,2,0,0,0-.2-.7c-.3-.4-.3.1-.7.2-.5-.8-1-.6-1.7-1.2a1.85,1.85,0,0,0,.2-.7h-.7c-.4-.3-.4-.9-.7-1.2s-1.2-.3-1.4-.7a3,3,0,0,0,.2-1l-2.2-.2a17.41,17.41,0,0,1-1.4-1.2,9.68,9.68,0,0,1-1.2.2v-.7c-1.3.4-3.5-1.2-4.8-1.7a10.77,10.77,0,0,0-2.2-.2c-.6-.3-1.4-1.1-2.2-1.2s-1.6.5-2.2.2c-1.7-.7-5.4-1-6.5-.5-.7-.2-.2-.3-1-.7-.2-.4-.6.3-.7.7h-1c.2-.6.1,0,.5-.5.4-.2-.4-.5-.7-.7v-.5c.6.4.2.3.7.2.3-.2.2-.1,0-.5-.4-.8-.9-4.1-.5-4.8.3-.4,0-.2,0-.5-.1-1.2.1-2-.5-2.6,0-1.5.2-1.8.5-2.2s-.1-.8-.5-1.2c.3-.6.2-.5,1-.7-.2-.5-.4-.9-.2-1.2-.2-.5.1-.2-.5-.2.2-.9.6-.8,0-1.2.4-.6-.1-.3.7-.5-1-2.1.2-4-1-5.8.2-.5-.1-.2.5-.2a18.32,18.32,0,0,0-.7-1.7v-.2c.2.1.3.2.5.2a6.51,6.51,0,0,1,.2-4.8,9.33,9.33,0,0,1,.2-5.5c-.2-.5.1-.2-.5-.2.3-.7.7-.5,0-1,.4-.6,0-.2.7-.2-.9-1.7,0-2.4-.7-3.8.2-.7-.1-.4.5-.5,0-.7-.2-.3,0-.7-.1-1.1.1-.9-.5-1a6.3,6.3,0,0,0,0-2.4h.7c-.4-.6.1-.3-.7-.5a14,14,0,0,0,0-4.1h.7c-.3-.7-.7-.5,0-1-.2-.7.1-.4-.5-.5.4-.8,0-1.9.5-2.6-.4-.6.1-.3-.7-.5a10.11,10.11,0,0,0,.2-3.1h.7c-.4-.6.1-.3-.7-.5,0-1.9.2-2.6,1-3.6-.6-.2-.1-.1-.7,0,.1-.7.3-.9,0-1.4.4-.6,0-.3.7-.2a1.45,1.45,0,0,0-.7-1v-.5c.5.2.3.2.7.5.2-.5-.1-.2.5-.2-.2-.6-.6-1.9-.7-2.2v-.2c.2.1.3.2.5.2v-.2h.2c.5-.1-.5-.2-.5-.2.1-1.1.4-1.1,1.2-1.4.2-.4.1-.2.5,0a1.85,1.85,0,0,0,.2-.7h1c-.1-.2-.2-.3-.2-.5,1.9.5,4.8-.4,7.2-1a5,5,0,0,1,1.9.2,8,8,0,0,0,2.6-.2c1.2-.2,1.7.3,2.6-.2l.2.2c-.3.6-.6.5-1.7.5.6.6,1.9.6,2.2,1s-.2.8,0,1.2c-.3.8,0,.5-.7.5.2,1,.1.9,1.2,1.4-.2.5.1.2-.5.2.7,2,1.9,4.9,2.6,7.7.3,1.1-.1,2.5,0,3.1.3,1,1.3.8,1.2,1.7.3.7.1.2.7.5-.2.2-.1.1-.5.2a4.23,4.23,0,0,0,.7.5c-.1,1,0,1.2-.5,1.4.2.4,0,.2.2.5.4.3.1-.3.5,0,1.2.1.6,0,1,.7-.6-.2-.4-.3-1-.5l-.2.2c.8,1.2,1.6.6,2.2,2.2l-.5-.5a2.51,2.51,0,0,0-.2,1,2,2,0,0,0,.7-.2h1c-.1,0-.3.6-.2,1s2,1.4,2.6,2.2c.6-.3.2.1.5-.5.2.2.3.5.5.7,1,.8,10.4,1.8,11.8,1.4,1.2-.3,2.1-1.1,3.4-1-.4-1-.7-2.4,0-2.9-.3-.5,0-.2-.5-.2-.6-.3-.4-.4-1-.7v-.2h1c-.2-1.2-.4-1.5-.2-1.9v-.5c-.9.1-.6-.1-.7.5a5.26,5.26,0,0,1-2.6-.5h-.2c-.5-.1.5-.2.5-.2v-.2a15.86,15.86,0,0,1-7.2-.7c-.9-.3-1.4-.8-2.2-.7-.6-1-1.4-1.1-1.4-2.2-.4.2-.2,0-.5.2-.8-1.3-.8-3.4-3.4-4.1.3-.6-.1-.2.5-.5-.4-.6.1-.3-.7-.5.4-.6,0-.2.7-.2a13.74,13.74,0,0,1-1.7-9.6c.2-1.3-.7-2.7,0-3.8-.2-.5.1-.2-.5-.2.2-.7-.1-.4.5-.5-.9-3.3.7-6,.2-10.6.7-1.2,1.7-2.1,1.4-3.4s2.4-2.5,1.7-3.8V35c.2.1.3.2.5.2a3,3,0,0,1-.2-1c.6-.2.4-.1,1,0-.2-.4,0-.2-.2-.5a51.41,51.41,0,0,1,6.5-4.8,1.93,1.93,0,0,1,2.6.2h.5c-.3-.7,0-.5-.7-.7.5-1.1,1.9-2.8,1.7-4.1-.2-.6-.4-.3-1-1-.2.3-.2.2-.2.7l-.2-.2a4,4,0,0,1-1.2-2.2,24,24,0,0,1-4.3.7,1.85,1.85,0,0,1,.2.7c-.9-.1,0,.2-.7.5-.5.2-1.1-.3-1.2-.2-.1.4.2.5.2.5a7.44,7.44,0,0,1-3.8,1.2l.5.5c-1.4,1.3-1.8,1.7-3.1,3.1-.3.2-.2.2-.7.2-.1,2.5-2.5,9.3-3.6,10.1.4.6-.1.3.7.5-.3.9-.3.7-1,.7.2.6.1.4.5.7-.3.6-.5.5-1,1-.3.4-.2.4.2.7-.3.6.1.2-.5.5a6.87,6.87,0,0,0,.5,1.7c-.2-.1-.3-.2-.5-.2l-.2.2c.2.5-.1.2.5.2-.3.6.1.2-.5.5.5.6.1.2.7.2-.8,1.2-1.2,1-1,2.9-.7.1-1.1.4-1.7,0-.6.2,0,.1-.5.5-.2-.1-.1.1-.2-.2-.9.2-.8,0-1,1-1.4-.3-3.1-.4-3.4.2,0,0-.9-.1-.5-.2l.2-.2c-.7.1-1.3.4-1.9,0-.9.1-.6-.1-.7.5-.8.2-8.8.2-9.4-.2a1.85,1.85,0,0,0-.7-.2c-.8-4,.2-10-.7-14.2-.4-1.8.6-4.5,0-5.5V25c-1.3.8-2-.4-3.1,0-.6.2-.6.8-1.7,1-.1.9.1,1.1-.5,1.4.3.2.2.2.7.2-.8,1.1.3,1.3-.2,2.9-.1.2-.7.4-.7.5-.2.3.6,1.3.7,1.4-.4.6.1.3-.7.5.5,1.3.8,4.1.5,4.6-.1,1,0,.7-.7.7.3,1.6.8,10.2-1,12.2-.3.2.1,0,.2.2v.2c-.9.2-1.9,0-2.4.2H55l.5-.5v-.2c-.6.2-1.2.6-1.7.7-1.1.3-2.4-.2-2.9,0-.6-.4-.3.1-.5-.7-.6.2-.4.1-.7.5h-.2c.3.2.2.2.7.2-.9.4-1-.5-1.9.2h-.2c.1-.2.2-.3.2-.5h-.2v-.2c.2.1.3.2.5.2V50h-.5a2.51,2.51,0,0,0-.2,1,2.8,2.8,0,0,0-2.2,0,4.73,4.73,0,0,0-1.2-.7c.3-1-.1-.5,1-.5-.2-.6-.1-.5,0-1.2-.6-.2-.1-.1-.7,0,.4-1.4-.1-1.1-.5-2.6-.3-1.2.3-3.3.5-4.3.3-1.7-.7-3-.5-4.8.2-1.4-1.2-2,.2-2.9-.3-.2-.4-.2-1-.2.3-.9-.4-3.7-1.2-5-1.2-2.1-7.6-9.1-9.8-9.8-1.6-.6-3.3,1.1-4.3-.2a2.09,2.09,0,0,0-1.7.7c-.3.6-.8,3.3.5,4.3-.3.7-.1.2-.7.5v.2c2.5.8,4.6.7,6.2,2.4.2.5.1.2,0,.7,1.8.5,1.8,1.2,2.9,2.9.7,1.1,2.1,1.9,2.6,3.1,1.5,3.4.2,5.8,1.2,8.9-.2-.1-.3-.2-.5-.2,1.6,6.6-2.1,24-7.4,28.1-2.2,1.7-2.8,3.4-7,3.4.2,1.1.9,1.6,0,2.2.4.9,1.2,1,1.7,1.9a15.64,15.64,0,0,1,3.1.2v1c.7-.3.9-.6,1.7,0H31c.1-.5-.1-.3-.2-.5a3.94,3.94,0,0,1,1.4-.5c.3-.3,0-.8.5-1a9.85,9.85,0,0,0,1.7.2c.4-.2.9-.9,1.4-1.2a1.7,1.7,0,0,0,0-1,2.51,2.51,0,0,1,1-.2v-.7H37c.3-.2.2-.2.7-.2v-.7a1.85,1.85,0,0,0,.7.2c-.2-2.3,1.2-4.3,1.9-5.3V68c.2.1.3.2.5.2V68c.5-.4.5-.5.5-1.4a1.85,1.85,0,0,0,.7.2,2,2,0,0,0-.2-.7c.2-.8.2-.5.5-1h.5c-.3-.2-.2-.2-.7-.2v-.2c.5-.2.4,0,.7-.2a16.15,16.15,0,0,0,.2-3.1c.5-.7.3-.3,1-.2-.1-.6.3-3,.2-3.1.3-.3.7-.4,1-.7h.7c-.3.4-.1.3-.7.5v.5a3.13,3.13,0,0,0,1-.5c.2-.3-.1-.3.2-.7.5-1,10.3-.3,12-.5-.3.6.1.2-.5.5.4.6-.1.3.7.5-.3.3-.9.4-.5.7.1,1.1-.1.9.5,1-.3.4-.1.3-.7.5v.2c.6.4,0,.2.7.2l-.7.7a9,9,0,0,1,.2,3.4c-.8,1.4,1.6,7.4.5,9.4v.5h-.7V75a1.85,1.85,0,0,1,.7-.2l.2.2c-.2.8-.3.7-1.2,1,.3.7.2.7,1,1-.2.7-.2,1.4-.7,1.7.2.7-.1.4.5.5.2.7.1,1.6.7,1.9-.3,1.3-.9.8-1.2,2.4h.7c0,.9.2,1.3,0,1.7v1a2.51,2.51,0,0,0-1-.2v.7h.7c.1.5.5,1.2.2,1.9H58c-.2.7.7.4.2,1.2.2.5-.1.2.5.2a4.16,4.16,0,0,0,.2,1.7c-.2.8-.2-.1-.5.7-.3.6.4,1,.2,1.7-.1.4-1,.5-.5.7V95c-.2-.1-.3-.2-.5-.2v.5h.7c-.2.8-.2.8-.7,1.2.2.5-.1.2.5.2-.3.6.1.2-.5.5.2.4,0,.2.2.5v.2c.2-.1.3-.2.5-.2-.4.4-.2.3-1,.5.7,1.2,1.3,4.3.5,5.5.2.5-.1.2.5.2-.1.7.2,1-.7,1.4.2.2.1.1.5.2-.2.5.1.2-.5.2.4,1.8.8,4.4-.2,5.8.2.5-.1.2.5.2a3.46,3.46,0,0,1-.7,1.2c.2.5-.1.2.5.2-.1,1.9.6,4.3-.2,5.8-.3.2-.2.2-.7.2.2,1,.1.5,1,.7-.1.7-.4,1.1,0,1.7-.4.6,0,.3-.7.2.2.9,0,.7.7,1-.2.7.1.4-.5.5a7.07,7.07,0,0,0,.2,1.2c-.1,1.8-1.1,1-1.9,2.6a9.34,9.34,0,0,1-2.4.2c-.6-.1-1.4-.7-2.4-.5s-2.8.9-3.6.5c-.6.4-.3,0-.2.7-1.5-.2-1.5.5-2.9,0-.2.6-.1.1,0,.7-1.8,0-3.5,1.2-5.3,1.9-4.6,1.8-13.8,9.3-14.6,12-.1.3-.1.2-.2.2-.8.4-1.5,2.8-2.9,3.4v1c-1.6.4-1.9,2.6-2.9,4.3-.3.6-1.2,1-1.4,1.7v1.4a1.85,1.85,0,0,1-.7.2,12.25,12.25,0,0,0-.2,1.9c-.8,2-1.6,5-2.9,6.7.2.2.1.1.5.2-.3.7-.1.2-.7.5.3.6.2.4.7.7-.3,1.2-.8,3.9-1.2,4.1.5.6.1.2.7.2v.7h-.7c.2.8-.4,2.1-.2,2.4-.1,1.4,0,1-1,1.2.4.6.1.4,1,.5-.2.6-.1.4-.5.7,0,1.6.1,1.5-1,1.7.3.9.6,1,1.2,1-.1,1.5-.8,2.7-.2,3.8-.4.6.1.3-.7.5.4,1.3.9,2.6-.5,3.4.3.5.7.6,1,1.2h.2c.1.5-.1.3-.2.5-.1,1.2-.2,1.2-1.2,1.4l.2.2c.3.2.3.1.7-.2h.2c0,.6-.6,1.4-.5,1.7a1.85,1.85,0,0,0,.7.2,3,3,0,0,0-.2,1c.3,1,0,3,1,3.8-.3.4-.1,0-.5.2.2.7-.1.4.5.5a5.77,5.77,0,0,0,1.7,4.1c-.1.9-.1.2-.5.7-.2.2.2.6.5,1h-.5v.5c.7,0,.3-.2.7,0s.5.4,1,.7c-.2.2-.1.1-.5.2,0,1.1.2,2.3,1.7,2.4a1.85,1.85,0,0,0-.2.7h.5c.2-.6.1-.1,0-.7.2.1.3.2.5.2-.1.9,0,.8-.5,1.2,1.1,1.7,3.2,2.9,4.3,4.6,1.3,2,2.7,4.4,4.6,5.8.6.4,1.5.6,1.9,1.2,1.3,1.7,2.9,3.9,4.8,5a12.83,12.83,0,0,0,2.9,1.4h1.2a22.05,22.05,0,0,0,2.9,2.2,2,2,0,0,1,1.7,0c-.1.2-.2.3-.2.5.5.3,1.6,0,1.7,0,.2.2-.1.8.2,1,.9.6,1.9,0,2.6.2.4.1.4.5,1,.7v.5c.2.5.2-.5.2-.5.6.4.2,0,.2.7l.2-.2c1.5,0,1.7.1,1.7,1,3.6-.2,9.2,2.6,13.2,1.4.2.6.1.1,0,.7,3.2-.4,14.5,1.2,16.3,0,1.2,0,1.1.1,1-.7a4.86,4.86,0,0,0,1.4.2c1-.2.7-.4.7-1,.9.1.2.1.7.5a18.32,18.32,0,0,0,3.4-.7l1-1a19.42,19.42,0,0,0,2.4.2c1-.3,2-1.4,2.9-1.9,2-1.2,4.3-1.1,5.8-2.4h.2c.5-.1-.5-.2-.5-.2.2-.6.5-.9.7-1.4.8.2.5.2,1,.5a10.53,10.53,0,0,1,4.3-3.8c-.3-.6.1-.2-.5-.5a1.78,1.78,0,0,1,1.9-1.9l-.2-.2c.5-1,1.1-.6,1.7-1l.2-.2a2.51,2.51,0,0,0-1-.2v-.5c1.1.3,1.2.5,1.9,0,0-.2.1-.2-.5-.5v-.5l.5.5h.5a2.76,2.76,0,0,0-.5-1.2v-.2c.2-.5.4-.1.7,0a1.85,1.85,0,0,1-.2-.7c.4-.5,1-1.7,1.2-1.9.3-.6.3-.4,1.2-.5v-.7h.7l-.7-.7v-.5c.4.3.3.2.5.2h.5c-.4-.6.1-.3-.7-.5.7-1.4,1.4-3.1,2.9-3.8v-.5c-.8.2-.4-.1-.7.5h-.2v-1a9.85,9.85,0,0,0,1.7.2v-1l-.2.2a2,2,0,0,1-.7-.2c.2-.2,0-.5.2-1v-1.4c.2.2.1.1.2.5h.5v-.5a2.51,2.51,0,0,0-1-.2v-.2c.6-.1,1.3-.2,1.4-.2,0-.2.1-.2-.5-.5v-.7c.2.3.2.2.2.7h.7c-.3-1.9,2.8-10,1-12.5.2-.7-.1-.4.5-.5-.2-1-.7-1.1,0-1.9-.2-.5.1-.2-.5-.2,0-1.4,0-1,1-1-.3-.8,0-.5-.7-.5.2-.4,0-.2.2-.5-.2-.5.1-.2-.5-.2.1-.9.4-1.3,0-1.9.4-.8.3-.1.7-.5s-.2-.3.2-.5C116.14,179.1,116.54,179.4,115.84,179.2Zm-7.2,5.3c1,5.1-1.5,14.3-3.8,19-.5.9-.2,2-.7,2.9-1.6,2.7-4.5,4.4-6.7,6.5-.5.5-.7,1.4-1.2,1.9-1.3,1.4-2.5,1.8-4.1,2.9-.9,1-1.8,1.9-2.6,2.9-7.6,5.2-21.3,4.6-31.2,1.9-1.7-.5-3.1.3-4.6,0a31.68,31.68,0,0,1-4.8-1c-1.1-.3-2.1-1.3-3.1-1.7-1.5-.6-2.8-.6-4.3-1.2a33.82,33.82,0,0,1-5.5-3.4c-2.1-1.3-4.2-2.1-6-3.6-.4-.6-.8-1.1-1.2-1.7-.6-.4-1.5-.6-1.9-1.2-6-7.7-10.6-24.3-7.2-38.6.9-3.7.3-7.5,1.4-10.8,1.2-3.7,3.4-6.2,5.3-9.1,2.7-4.2,4.9-9.6,8.9-12.5,1-.7,2.2-.6,3.4-1.2,1.4-.7,3.1-2,4.6-2.6a35.78,35.78,0,0,1,18-2.2c2.1.4,4.7-.7,7.2,0s8.7,2.1,9.8,1.9c.2.4,0,0,0,.5,1,.1,1.6.5,2.2.2.2.4,0,0,0,.5.4.2.2,0,.5.2.3-.5.1-.4,0-1,2.6,1.7,4.5,3.9,7.4,4.3l-.2.2c.4.9.8,1,1.4,1-.2.8.1.4-.5.7,1,1.3,2.9,1.4,2.6,3.6,1-.1.8.1,1.9.2.2.8.1.6.7,1-.2.2-.1.1-.5.2.3.8.1.5.7.5-.2.4,0,.2-.2.5.6,1.5,2.3,1.4,3.4,2.6-.4.6.5,1.2,1,1.7.3.2.2.2.7.2a2,2,0,0,0,.2.7c.3.8.6,0,1.2.7,1.2,1.5.8,3.1,2.6,4.6-.1.9,0,.8-.5,1.2a3.76,3.76,0,0,0,1.4,1.4c-.3.4-.3.2-.5.7,1,.9,1.2,2.4,2.2,2.9a4.23,4.23,0,0,1-.5.7c.4.6.1.4,1,.5-.1,1.4.5.9,1,1.9.2.4-.6.4,0,1.4-.5.2-.4,0-.7.2h-.2v.2h1a72.89,72.89,0,0,0,1.4,8.9C109.44,179.5,108,181.8,108.64,184.5Zm-44.7-37.7h.5c-.1.2-.2.3-.2.5a1.85,1.85,0,0,1-.7.2C63.64,147.3,63.84,147,63.94,146.8Zm-22.1,9.1h.5l-.2.2a4.23,4.23,0,0,1-.7.5v-.5C41.84,156,41.64,156.1,41.84,155.9Zm16.1,25.7h.5v.2C58,181.7,58.24,181.8,57.94,181.6Zm-47.3,3.1c.2.2.1.1.5.2C10.94,184.7,11.14,184.9,10.64,184.7Zm49,2.4c.3.4.4.3,0,.5Zm-7,7h.5v.2C52.74,194.1,52.94,194.3,52.64,194.1Zm25,.7h.5v.5h-.5Zm-6.7,4.8c.8.2.4-.1.7.5C71,199.9,71.24,200,70.94,199.6Zm-.5.5h.5v.2C70.54,200.1,70.64,200.3,70.44,200.1Zm1.2,6.9h.5v.2C71.74,207.1,71.84,207.2,71.64,207Zm37.2,3.4v.5h.5v-.5Z",
          {
            style:
              "fill:#76cfe6;fill-rule:evenodd;stroke-width: 2px !important;stroke: #76cfe6;",
            transform: "rotate(180)",
          }
        );
      }
    );
  }

  /*
   * Neptune path
   * @private
   *
   * @param {int} x
   * @param {int} y
   *
   * @return {SVGPathElement} path
   */
  function neptune(x, y, size, houseId) {
    return createSymbol(
      x,
      y,
      size,
      houseId,
      -10,
      -20,
      1.12,
      1.16,
      function (wrapper) {
        createExtraSpace(wrapper, -80, -125, 100);
        createPath(
          wrapper,
          "M47.22,131.7v1c1,0,.6.7,1.2,1.2.3-.2.4-.2,1-.2,0,.6,0,.7.2,1,.4,1,.7.5,1,1.2-.2.3-.2.4-.2,1,.5,0,.7-.2,1,.5.1.2-.1.1.2.2a6.12,6.12,0,0,0,1.2.5l-.2.2c-.5.2.5.2.5.2.2.2,8.2,4.3,8.4,4.3,0,.5-.2.1,0,.5,1.2.8,6.9,1.1,7.4,1v.5c-.2.2-.1.1-.2.5h1c.7-.7,1-.2,2.2,0a1.91,1.91,0,0,1,.5-1c-.2-.7-.2-.1-.5-.5-.1-.2.7-1.3.2-1.9.3-.3.6.1.5-.7a59.88,59.88,0,0,0-1.7-7c-.3-.9.4-3.9.7-5.8a58.25,58.25,0,0,0-.2-7.2,1.85,1.85,0,0,0-.7-.2s.5-4.2.5-5.3c-.2.1-.3.2-.5.2v-.2c-.2-.2-.1-.1-.2-.5.6-.1.5-.2.5-1.4-.5-1.1.6-1.6.2-3.1-.1-.4-.5-2.3-.5-2.4.1-.5,1.1-1.8.7-2.9h-.5c-.1-.1.3-.5.2-1a14.58,14.58,0,0,0-.7-1.9c.7.1.3.4.7-.2.3-.4.5-1.1.7-1.4-.7-.3-.4,0-.7-.7.7-.1.5-1.2.5-2.6-.6-.3-.7-.3-1-1h.5l.5.5v-1c-.7-.3-.4,0-.7-.7.6-.1.4.1.5-.7.3-.6-.4-.7-.2-1.4a12.57,12.57,0,0,0,0-6.7h.5c.2.4,0,.2.2.5v-1c-.5-.3-.2-2.8,0-3.8-.5-.1-1.7-.5-1.2-.7s.5-.1,1.2,0v-1h-.7a3.34,3.34,0,0,1,.5-1.2c-.6-.3-.4.2-.7-.5.4-.3.3-.2.5-.7-.7,0-.3.2-.7,0l-.2-.2c1-.6.1-2.7,0-3.8-.5-.1-.3.2-.5-.2.8-1.2-.4-8.8,0-10.8a38.14,38.14,0,0,0,.5-6.7c-.1-.7-.7-.6-.5-1.7.8-4.4.2-10.3.2-15.1V32.5c-.3-1.2-1.2-2.6-1.4-3.6-.1-.6.2-.6.2-1,.1-1.2-.2-1.2-.5-2.2,1.1-.2.7-.5,1.4-1,1.2.6,2.4-.2,3.1-.5s.9.4,1.2.5a9.85,9.85,0,0,1,1.7-.2c.7,2,.3,5.7.2,8.2.8,1.4-.5,7.3,0,9.6,1.1,4.6-.1,10.8,1,15.4-.1,1.5-.2,3-.2,4.6,1.4,5.9,1.1,10.8,1,16.1.7.1.5.8.5,2.2a46.38,46.38,0,0,0,1,8.4h-.7a111.26,111.26,0,0,1,.7,14.6c0,1.2.2,5,0,6a7.73,7.73,0,0,0-.2,3.1c1.1,4.4.8,6.9,1.2,9.4-.5.1-.3-.2-.5.2h.2c.6.5.6-.2.7,1.2a4.73,4.73,0,0,1-1.2.7v.2c.8,0,.3-.4.7.2-.4.8.6,2.1,0,3.6.6.1.3-.2.5.5.2.3.2.4.2,1l-.2.2c-.2-.1-.3-.2-.5-.2v.2c.5.4.7.4.5,1s-.1-.1-.5.5c1,.8,1.1,4,.7,5.5.5.1.3-.2.5.2a11.22,11.22,0,0,0,0,2.6,7.7,7.7,0,0,0,.7,1.9,12.51,12.51,0,0,0-.5,2.9c.2.2.6-.3.5.2v.2c0,.1-.5.3-.7,1,1.2.2,0,.3,1.4.5.6.3,1.7-.4,2.6-.7h1.9a22.22,22.22,0,0,0,8.4-4.6c-.2-.5-.1-.2,0-.7.8.2.6-.1,1.2,0a1.85,1.85,0,0,1-.2-.7c.9.3,1.1,0,1.9-.2a1.85,1.85,0,0,1-.2-.7c.2.1.3.2.5.2a1.85,1.85,0,0,1-.2-.7c1.5-.1,1.3-1.8,2.2-2.4l.2.2c0-.8-.4-.3.2-.7.2.2.1.1.5.2.2-1.5,1.5-2,1.7-2.6-.6-.3-.2.1-.5-.5,1,0,.8.5,1-.7-.2-.2-.1-.1-.2-.5.6.1.1.2.7,0a1.85,1.85,0,0,1-.2-.7c1.7.1,2.1-2.6,2.6-2.9l.2.2v-.2c-.4-.3.6-.7,1-1-.6-.3-.2.1-.5-.5.9-.5,3-2,3.1-2.6-.2-.2-.1-.1-.2-.5.6.1.1.2.7,0,.3-.8.3-.6.2-1.4.2.1.3.2.5.2a1.85,1.85,0,0,1-.2-.7c.5.1.3.2.7,0,.5-.7-.2-.8.5-1.2l.2.2v-.7c.8-.2.4.1.7-.5-.2-.2-.1-.1-.2-.5h.2c.2.2.1.1.5.2v-.2s-1-.1-.5-.2h.2c.3-.2.3-.1,1-.2a8.66,8.66,0,0,1,.2-1c-.6-.1-.3.2-.5-.5.7-.2.7-.1,1-.7l-.7-.7c1.1,0,.5-.2,1.2.2v-.5a1.09,1.09,0,0,1,.2-1.2c.2-.2.8-.3,1-.5-.4-.4-.3-.2-.5-1h.7a2,2,0,0,0-.2-1.2,2,2,0,0,1-.2.7,7.84,7.84,0,0,0,.2-1.4c-.5-.1-.3.2-.5-.2l.2-.2c.2.1.3.2.5.2v-.2c.2-.3.1-.2.2-.7.2.1.3.2.5.2a1.85,1.85,0,0,1-.2-.7c1.3-.2.2-.1.5-1.2.2.1.3.2.5.2.3-.6.5-1.3.2-1.7.2-.2.6-.4.7-.7a9.85,9.85,0,0,1-.2-1.7c1.5-1.7,1-3.5,2.2-6.7,2-5.7,3.9-15,3.1-21.6.6-.1.3.2.5-.5-.5-.1-.3.2-.5-.2a5.42,5.42,0,0,0,.2-2.6c.7,0,.1.2.7-.2-.2-1.2,0-1,.2-2.4h-.5c-.2.2-.1.1-.5.2.1-.6.1-.2,0-1a2,2,0,0,0,1-1l-.2-.2a1.85,1.85,0,0,1-.7.2v-.7c.6-.1.3.2.5-.5-.2-.2-.1-.1-.2-.5.6-.1.5,0,.5-1.2-.8-.1-.5-2.5-.5-4.1,1.3-1.5-.3-5.7,1-7.9a1.85,1.85,0,0,1,.7-.2,2.9,2.9,0,0,0-.5-2.4h.7a5,5,0,0,0,.2-1.2h-.7l.2-.2c0-.7.3-.7.5-1.9-.5-.1-.3.2-.5-.2l.2-.2c-.5-.1-.3.2-.5-.2l.2-.2c.6-.1.4.1.5-.7-.2-.2-.1-.1-.2-.5.6-.1.4.1.5-.7h-.7v-.7h.5c.3-.6-.7-2.1-.5-2.4.5-.6.7.1,1-1-.5-.4-.6-.4-.7-1.2.8-.2.4.1.7-.5-.5-.3-1.1-2.6-.7-4.3s-.3-4.2.2-6.5a26.3,26.3,0,0,0,1-3.6c1.8,0,4.3-.1,5-.5s0-.1.5-.7a2.5,2.5,0,0,1,1,2.4c1,1.7.3,7.2-.2,8.4-.1.1.6,4.8.7,5.3-.9.1-.6-.1-1,.5.7.5.3.5,0,1.2.5.1.3-.2.5.2-.6,1,.4,2.5,0,3.8.5.1.3-.2.5.2a17.77,17.77,0,0,0-.5,4.6c.6.1.5,0,.5,1.2-.4.5-.3,7.2,0,8.6-.2-.1-.3-.2-.5-.2v.2c.6,1,0,4.3.2,5.5-.6.1-.5.2-.5,1.4.8,1.3-.4,3.4.2,5.5-.9,0-.8,1-1,2.2.6,0,.3-.1,1,.2v.5h-.5c-.2-.4,0-.2-.2-.5v.7c.2.2.1.1.2.5-.2-.1-.3-.2-.5-.2v.2c.6,1,.2,2.9,0,4.1.6.1.3-.2.5.5-.9,0-.6-.3-.7.7.5.1.3-.2.5.2a11.29,11.29,0,0,0,0,2.6c-1.1,1.5-.5,4-.2,5.3-.2-.1-.3-.2-.5-.2v.2c.1.4-.6.8-1,1.9-.4,1.3.2,3.1,0,3.8s-1,1.5-1.2,2.2a9.85,9.85,0,0,1,.2,1.7,12.24,12.24,0,0,0-1,4.1c-.2-.1-.3-.2-.5-.2v.2c.6,1.2-.9,2.7-1.2,3.4a12.38,12.38,0,0,0-1,4.3c-.7,0-.6-.2-.7,1,.5.3.3,0,.2.5a3,3,0,0,0-1,2.6c.2.2.1.1.2.5-.6-.1-.2-.1-1,0,0,3.9-2.7,7.1-4.3,9.6-2,3.1-4.1,7.2-6,9.6-.7.8-2,1.5-2.6,2.4s-.9,2.3-1.9,2.9c-.7.4-1.6.3-2.2.7.2.2.1.1.2.5-.5.1-.3-.2-.5.2h-.2c.1.2.2.3.2.5h-.2c-1.1,1.1-2.9,1.5-4.1,2.4-1.9,1.4-2.5,3.9-5.3,4.6a5,5,0,0,0-.2,1.2c-.8.3-4.2,1.4-4.3,1.4-.4.3-.7,1.2-1.2,1.4s-1.3.2-1.7.5c.1.2.3,0,.2.5h-.2c-.5-.4-6.7,1.1-7.4,1.7.1.2.3,0,.2.5h-.2c-.2-.2-.1-.1-.5-.2-.2,1.1-.9,1.2-1.2,2.2-.7,2.1.1,5.9.5,7.4v4.6c.5,2.3.8,5.9,1,7.4l-.2.2c-.5-.1-.3-.2-.7,0,.2.2.1.1.2.5h.2c.3-.4.2-.3.7-.5v.5l.2.2c-.9.1-.6-.1-1,.5l.5.5.5-.5c0,.7-.2.7,0,1s.1.1.5.2c.1-.2.2-.3.2-.5-.5.1-.3.2-.7,0,.2-.2.3-.5.5-.7a7.42,7.42,0,0,0,2.6,1.4c.9-.7,1.3-.3,2.2,0,.1-.6-.1-.4,1-.5.4.2.8,0,1.7,0l-.2.2c-.5.2.5.2.5.2.5-.8,3.3-.6,4.6-.5,4.5.6,13.9-.1,20.6,0,.2,1.2.6.8,1,1.4v3.8c-.8.5-.8.9-2.2,1-1.3-.9-3.5-.5-4.8-.2,0-.5.2-.1,0-.5-1.7,1.2-3.3.6-5,0-.1.6.1.4-1,.5,0-.5.2-.1,0-.5-1.1.7-1.6-.3-2.9.2-.2.2-.3.5-.5.7-.4.2-.2-.3-.2-.5-.6-.1-.4.4-.7.5,0,0-2.2-.7-2.4-.7-2.4.7-3.1.4-5.8.5.2.6.1.5,0,1.2l-.2-.2c-.5-.4.2-.3-.5-.5-.3-.2-.4-.2-1-.2.1.2.2.3.2.5s-4.6,0-6.2,0a1.85,1.85,0,0,1,.2.7,2.65,2.65,0,0,0-1.7.5c.5,1,0,5.9.2,8.2a14.12,14.12,0,0,1-.2,5c-.3,1.2.6,2.8.5,4.3a86.55,86.55,0,0,0,.7,14.2h-1a2,2,0,0,1-1.2.2v-.7c-1.4.2-1.9.8-3.1,1.4-1,0-2.3-.1-3.4,0,.2-2.6-1.1-7-.5-11.3,0-.1.5-6.2.5-6.2-.1-.2-.5.2-.5-.5.1-5.1.3-9.7-.7-14.9.6-.1.3.2.5-.5h-.5c-.2.2-.1.1-.5.2v-.5c.4-.2.2,0,.5-.2-4.2-.8-6.5-.9-9.6,0a6.84,6.84,0,0,0-2.4-.7l.2-.2c.5-.2-.5-.2-.5-.2l-.2-.2c0,.9.3.6-.7.7-1,.6-2.3-.5-3.6-.5-4-.1-10.2.3-14.6.2-.3-.5-.7-.6-1-1.2.2-.1.3-.2.5-.2l-.2-.2c-1.2-.7.5-3.1.5-3.1h-.7l.2-.2c-.1-.6-.2-.4,0-1,2.3.8,5.4-.1,7.9.5,5.5,1.2,8.7.3,14.2.2,0,.5-.2.1,0,.5a16.66,16.66,0,0,1,1.9-.5c.1.6-.1.4.7.5.8-.6,4.7-.5,7-.5a1.85,1.85,0,0,0,.2-.7c-.7-.3-.5-.1-.7-1h.5c.3.6-.1.2.5.5v-1.2c-.4-.2-.3-1.8-.5-2.6-.5-.1-.3.2-.5-.2.2-.3.1-.2.2-.7-.6-.1-.5,0-.5-1.2h.5c.2.1.1.2.2,0s.1-.1.2-.5c-.8-.3-1-.2-1.2-1.2,1.9-1.2,0-3.4.5-6.2.6-3.7-.2-6.4-.5-9.4.2.1.3.2.5.2-.5-.7-.4,0-.7-.7l.2-.2c-3-.3-4.4-1.3-7.2-2.2a11.5,11.5,0,0,0-3.8.2l-.7-.7c-.5-.2-.6.2-1,.2h-.5c-1.6-.4-4.8-2.4-6.5-1.7v-.7h-1.7c-.5-1.3-1.2-.9-2.6-1.7,0-.5.2-.1,0-.5-.2.2-.1.1-.5.2-.1-.6.2-.3-.5-.5,0,.7.3.5-.7.7v-.2a4.23,4.23,0,0,0,.5-.7,3,3,0,0,1-1,.2v-.7c.5-.1.3.2.5-.2a1.85,1.85,0,0,0-.7-.2,4,4,0,0,0-2.9-1v-.5c.4-.2.2,0,.5-.2-1.2-.1-3-.9-3.1-2.2h-1c-.3-.8-.9-1.2-1.4-2.2-.8-.1-1,0-1.2-.2l-.2-.2c.6-.3.2.1.5-.5h-.7c-.2.2-.1.1-.5.2v-.5l.5-.5a1.85,1.85,0,0,0-.7-.2c-.4-.2,0,0-.7,0,0-2.1-1.6-1.8-2.4-3.1a7.84,7.84,0,0,1-.2-1.4c-.5-.8-1.7-1.5-1.9-2.2.2-.2-1.2-1.6-1.7-2.4-.2-.7-.5-1.4-.7-2.2-.7,0-.4.4-1-.2.6-.3.2.1.5-.5h-.7v-1.2c-.5,0-1,0-1.2-.5.2-.5.1-.2,0-.7-.6-.1-.4.1-.5-1,.2-.3.2-.4.2-1-.9-.1-.8-.6-1.7-1.2-.1-.2.3-.7,0-1.2-.4-.7-.5.4-.7-.5a1.6,1.6,0,0,0-.5-2.2c-.2-.1-.1.1-.2-.2.3-.5.2-.7,0-1.2-.8.1-.6.5-1-.2.6-.9-.5-2.7-.7-2.9-.4.2,0,0-.7,0a1.25,1.25,0,0,0-.7-1.7c-.3.6.1.2-.5.5v-.5c.6-.5.3-1.4.5-1.7-.6-.6-.7,0-1-.7.8-1.2-.6-2.8-.7-3.4.6-.4.4-.3.5-1.2-.9,0-.6.3-.7-.7.3-.4-.1-1.6-.5-2.4-.2.1-.3.2-.5.2v-.2a2,2,0,0,1-.2-1.2c-.3-.5-.1-.4.2-1.2a2.94,2.94,0,0,1-1-1.2c.2-.4,0,0,0-.7.6-.1.3.2.5-.5-.5-.1-.3.2-.5-.2.2-.3.2-.4.2-1-.6-.3-.4.2-.7-.5.5-.8-1.1-1.6-1.4-3.6.5-.3.5-.3.7-1-.6-.1-1,.1-1.4-.2a3.54,3.54,0,0,0,.7-2.2c-.6.1-.1.2-.7,0a2.51,2.51,0,0,0,.2-1c-.5-.1-.3.2-.5-.2.5-.8-.6-2.9-1-3.8-.7,0-.3.2-.7,0-.2-.2-.1-.1-.2-.5,1-.5.8-1.1.7-3.1-.7,0-.1.2-.7-.2a34.77,34.77,0,0,0,.5-3.6c-.5-.1-.3.2-.5-.2.3-.5.1-.8,0-1.4.6-.1.4.1.5-1h-.2c-.2.2-.1.1-.5.2v-.5c.8-.5.3-.6,0-1.2a2,2,0,0,0,.5-1.7c-.6-.4-.8-.4-1-1.2.9-.2.7.2,1-.7-.8,0-.4.3-.7-.5.2.1.3.2.5.2V66c.2-.2.1-.1.2-.5-.8,0-.3.4-.7-.2.6-1-.1-2.8-.2-3.8-.3-2.2.3-4.9.2-7.2-.1-1-.2-2.1-.2-3.1.4-1.8,1.2-7,.7-9.1a19.15,19.15,0,0,1-.5-4.1c.1-.2.9-1.5,1-1.7a9.34,9.34,0,0,0-.2-2.4c1-1.4,1.1-6.8,1-8.2-.1-.7.9-.6.7-1.4a9.76,9.76,0,0,1-.7-1.7c.7.1.3.4.7-.2-.2-.4,0,0,0-.7a51.14,51.14,0,0,0,5.8-.7c0,.2-.1,5.6,0,6l.7.5c.1.4-.9,2.2-1,2.6.2.7.5,1.4.7,2.2-.5.1-.3-.2-.5.2a27.53,27.53,0,0,0-.5,3.4h.2a4.23,4.23,0,0,1,.5-.7v5.5a22.36,22.36,0,0,0-.5,3.1c.7.1.5.8.5,2.2a1.85,1.85,0,0,1-.7.2v1.9H20c.1.2-.5.5-.2,1h.5c.6,1.3-.5,2.1-.5,2.6l.2.5c-.2-.1-.3-.2-.5-.2v.2a2.76,2.76,0,0,1,.5,1.2c-.8-.1-.7-.2-.7,1,.9,0,.5-.4.7.5a15.63,15.63,0,0,0-.2,4.6c.2,3.2-.2,8.4.5,11.5.5,2.4-.1,4,.5,6.5s1.6,4.6,2.2,7c.2.7-.3,1.7,0,2.9s.9,2.8,1.2,4.1v2.2c.3,1,1.1,2,1.4,2.9.5,1.3.2,2.4.7,3.6,1.3,3,3.6,5.4,3.8,8.9.6-.1.1-.2.7,0-.2.4-.6.4-.2.7s.4,0,.7.2c.3.6-.4,1,0,1.7a1.85,1.85,0,0,0,.7.2c.3.5.7,2.4.2,2.6,1.8,1.4,2.5,3,3.4,4.8v1.2c.4.2.8.5,1.2.7.3.5-.3.5,0,1,.3.2.8-.1,1,0,.8.5,1.1,1.9,1.7,2.6s1.3.9,1.9,1.4c1.3,1,2,2.7,3.4,3.6-.3.4-.3.2-.5.7a6.53,6.53,0,0,1,1.4,0C45.52,131.1,45.62,131.6,47.22,131.7ZM11.92,80.5c.2.2.1.1.2.5h-.2Zm59.5,12.8v.5h.2v-.5ZM17.92,99a2,2,0,0,0,.2.7V99Z",
          {
            style:
              "fill:#568fad;fill-rule:evenodd;stroke-width: 2px !important;stroke: #568fad;",
            transform: "rotate(180)",
          }
        );
      }
    );
  }
  /*
   * Pluto path
   * @private
   *
   * @param {int} x
   * @param {int} y
   *
   * @return {SVGPathElement} path
   */
  function pluto(x, y, size, houseId) {
    return createSymbol(
      x,
      y,
      size,
      houseId,
      -20,
      -20,
      1.12,
      1.16,
      function (wrapper) {
        createExtraSpace(wrapper, -80, -125, 100);
        createPath(
          wrapper,
          "M134.52,16.7h.7a48.86,48.86,0,0,0,.5,5.5c.1.7-.5,1.7-.2,3.1a31.22,31.22,0,0,1,0,11.8,8.82,8.82,0,0,0,.2,2.9,3.43,3.43,0,0,1-.5,2.2c-.4,1.5.3,3.4.5,4.3a9.89,9.89,0,0,1-.7,2.6c-.2.9.3,2.2.2,2.9-.6-.3-.1-.4-.7-.2-.5.6-.3.5-.2,1.4h.7a5,5,0,0,1,.2,1.2H135c-.4-.4-.2-.3-1-.5v.5a6.61,6.61,0,0,1,.7,4.1c-.1.2-.7.8-.7,1-.3,1.2.4,7.1.7,7.7H134v1l-.2.2h-.7c0,1,0,1,.5,1.4,0,0-.8,1.2-.5,1.7s.9.4,1.2,1.4c.1.2-.1,1.2,0,1.9a15.05,15.05,0,0,0-1.7,1c.2.5.3,1,.5,1.4a2.67,2.67,0,0,0-.5,2.2h.5v.5c-.1.4-1.1,1.4-1.2,1.7a12.25,12.25,0,0,1,.2,1.9c-.3,1.2-.6,2.3-1,3.8h.7c.2-.8-.1-.4.5-.7l.2.2a6.87,6.87,0,0,0-.5,1.7h-.7a14.57,14.57,0,0,1,.5,3.8h-.7l-.5.5c.1,1.4-.3,1.1-.7,2.2s1.1,3,.5,4.8c-.4,1.3-1,2-1.2,3.6h-.7c.1,1.2.6,1.4.7,2.2.2,1.1-.5.7-.7,1.2-.3.9.6,1,.5,1.9a38.44,38.44,0,0,1-1.4,3.6c-.3,1,.8,1.5.7,1.7a3.88,3.88,0,0,0-.7,3.1l.5.5a15.45,15.45,0,0,1-1.2,2.2c-.1,1.4-.2,2.9-.2,4.3-.6,2.2-.2,4.9-1,7.2,0,.1-.7.7-.7.7-.2.4.7,1.4.2,2.6-.2.1-.3.2-.5.2a9.85,9.85,0,0,1,.2,1.7l-.7.7c-.2.5.3.7.2,1l-.7.7c-.1.3.5,2,.2,2.6-.1.3-.9.9-1,1.2s.3,1.1,0,1.7c0,.1-.7.3-.7.5a3,3,0,0,1,.2,1h-.5a12.25,12.25,0,0,1,.2,1.9,1.85,1.85,0,0,1-.7.2c-.2.5.3.7.2,1l-.7.7c-.3,1,.3,2.3,0,3.4-.2.7-1,1-1.2,1.4a18.57,18.57,0,0,0-.5,3.4h-.7c.1,3.7-1.7,6.1-2.9,9.1h-.7v1c.8.2.4-.1.7.5h-.7c-.1,1.9-1,2.2-1.4,3.6h-.7v1c-2,.7-1.5,2.9-3.8,3.1a2,2,0,0,1-.2.7c-.6.6-1.1.5-1.9,1a23.07,23.07,0,0,0-1.4,1.9c-1.4,1.1-4.8,3-6.5,2.9a2,2,0,0,1-.2.7c-.7-.2-2.7.9-3.6,1.2-.3.1-2-.4-2.9,0-3.1,1.5-7.5,2.2-10.8,3.6-.4,1,0,2-.2,3.1a24.91,24.91,0,0,0-.7,7.7c2.8-.1,5.1-.8,7.4.2.2-.9,0-.8,1-1,.4.4.5.3.7,1,.9,1.3.5,5.7.2,6.2-2,1.6-7.7-.1-9.4,1.2-.3.4-.2,1-.2,1.7-1.1,1.6,1.2,6.8-.5,9.1a22.38,22.38,0,0,1-3.6,1.4c-.9-.6-1.7,0-2.6-.7-.4-.7-.3-2.5-.2-3.6.7-1.1.1-5.4,0-7.9a5.21,5.21,0,0,0-1.4-.2c-.7.5-2.7.2-4.1.2a9.29,9.29,0,0,0-.5-1,9.85,9.85,0,0,0,.2-1.7c-.2-.2-.5-.3-.7-.5-.3-.9.6-.5.5-1.2s-1-1.5-1.2-2.6h3.6c.3-.1.9-.9,1.4-1a14.75,14.75,0,0,1,2.4.5c.3-2.9,1.4-9.4.5-11.8-1.4-.5-2.6-1.2-3.8-1.7h-1.4c-.7-.3-2.1-1-3.1-1.4h-1.2c-1.1-.5-3.1-2.2-4.1-2.6a12.25,12.25,0,0,0-1.9-.2c-.8-.4-4.2-2.3-4.6-2.6h-.2v-.7c-.9-1-2.8.1-3.4-1.9-2.8-.3-4.8-3-6.7-4.3h-1c-2-1.2-4.8-6.1-6.2-8.2-2.1-2.9-5.1-5.5-7.2-8.4-1-1.4-.7-4.5-1.9-5.3l-.2.2a16.82,16.82,0,0,0-.7-2.4,3,3,0,0,1-1,.2c-.1-1.6-1.1-2.7-1.7-3.8-.4-.9-.1-1.6-.5-2.6a52.53,52.53,0,0,1-2.2-5.5v-2.6a37.42,37.42,0,0,1-1.2-4.8c-.1-.9.8-.9.5-1.7a1.85,1.85,0,0,0-.7-.2V123a61.13,61.13,0,0,1-.5-8.6c.1-.9-.4-1.2-.5-1.7-.3-1.2.4-3.2.2-4.1-.1-.5-.5-.7-.5-1s-.2-1.7-.2-1.7h.5c.3-.9-.8-6.4-1-7.4-.1-.6.4-.4.5-.7V91.6a19,19,0,0,1,0-7.9c-.5-.3-.5-.2-.7-.7,1.2-1.2-.5-8.6,0-10.8,1.4-6.2-.5-14.5.5-21.1.2-1.1-.4-3.9,0-5.8a7.16,7.16,0,0,0-.2-2.2,28.25,28.25,0,0,0,.2-2.9c.1-2.1-.6-3.9-.2-5.8a24.62,24.62,0,0,1-.2-2.6c0-3.2-.5-8.8,0-11,.3-1.1.1-1.9,1-2.4,1.1,1.1,1.3-.3,2.9,0a10.91,10.91,0,0,1,3.1,1.4,3.77,3.77,0,0,1,.2,2.2c.4,1-.7,3.8-.5,4.8.2.1.3.2.5.2a12.25,12.25,0,0,0-.2,1.9,8.45,8.45,0,0,0,.5,1.7c.1,1-.2,3.2,0,4.3-.1,1.3-.2,2.6-.2,3.8.7,3.3.3,8,0,12.2a55.25,55.25,0,0,0,.5,8.4c.4,2.5-.6,5.3-.2,8.2a58,58,0,0,1,0,12.5c.2.7.3,1.4.5,2.2a12.43,12.43,0,0,1-.5,4.1c-.2.9.4,2.4.5,3.1a19.53,19.53,0,0,1-.2,3.8c-.6,3.3.1,8.4.5,10.6.2,1.4-.1,3.7-.5,4.1-.1.8.4.9.5,1.9a38.75,38.75,0,0,0,.7,7.4v2.9c.3,1.2,1.6,4.1,1.2,5.5a1.75,1.75,0,0,0-.5,1h.7c0,1.6.1,2.2,0,3.6h.7c.2,1.5.3,5.1,1.2,5.8-.1.2-1,1-.5,1.7.1.2,1,.3,1.2.5s1.6,5.9,1.7,6.2a2,2,0,0,1,.7.2c1.5,1.7,2.2,6.1,3.6,8.2,1.7,2.5,3.9,4,5,7.2.6-.2.4-.6.7-.2,1.1,1.2,1.5,3.1,2.6,4.3a32.64,32.64,0,0,0,3.6,2.9c.8.5,1.7.4,2.4,1s1.3,1.9,2.2,2.4c1.2.8,2.4.9,3.6,1.7a1.85,1.85,0,0,1,.2.7c.9.6,4.1,1,5.3,1.4.1.6-.1.4.7.5.7.5,1.7.5,2.4,1,.2.3.2.4.2,1h.7v-1h1c.4,1,1.1,1.5,2.6,1.4.3.2.4.2,1,.2v.7a22.48,22.48,0,0,1,2.6,0c.2.6.2.9.7,1.2.4-.6,2.7-.7,3.8-.5,2.7.6,4.1,1.2,7.2,0,1.1-.1,2.2-.2,3.4-.2,7.9-2.3,15.8-6.1,20.2-12,1.9-2.6,3.1-6.3,4.1-9.8.1-1.1.2-2.2.2-3.4,1.3-4.5,2.9-9.6,4.1-14.4.5-2-.2-4.8.5-6.7,1.4-4.1,1.7-9.3,3.4-14.4v-5.3c.6-1.7.8-4,1.4-5.5v-1.4a1.85,1.85,0,0,1,.7-.2,19.42,19.42,0,0,1-.2-2.4c.2-.7.8-2.1,1-2.6.3-1-.4-3.5,0-4.3.9-2,0-3.6.7-6,.1-.2.7-.8.7-1,.3-1.1-.5-2.3,0-3.8.1-.4.8-.5.7-1.2-.1-1-.7-4.9,0-7.2.4-1.5.1-4.4.7-6.7.3-1.1.8-1.8,1-2.9-.6-.4-.6-.4-.7-1.4.5-.5.8-3.3.7-5a7.84,7.84,0,0,1-.2-1.4c.7-2.7.2-6.4.7-9.4a2,2,0,0,1-.7-.2c1.3-1.3.1-6.8.7-9.8,0,0,.7-6.1.5-6.7-.2-.1-.3-.2-.5-.2-.1-.6,0-2.3,0-3.1.2-1.4.3-2.7.5-4.1-.1-2.5-.3-5,.5-7.2,1.6-.1,4.5-.3,5.3-.7C134.42,17.2,134.42,17.2,134.52,16.7Zm-16.4,68.4a19.42,19.42,0,0,1-.2-2.4,60.8,60.8,0,0,0,0-7.4c-.7-3.7,1.3-8.1-.7-10.8,0-1.1-.1-1.1.7-1.4-.8-2.9,0-6.2-.7-9.1a12.25,12.25,0,0,0,.2-1.9c-.1-.6-.8-1.3-1-1.7s.3-.7.2-1a17.38,17.38,0,0,0-1-1.9c-.3-.9.1-1.7,0-2.2-.4-1.6-1.7-3.2-2.4-4.6-.4-.7-1-3.5-1.4-3.8a3,3,0,0,1-1,.2c-.4-.3-.6-1.2-1-1.7-.4-.2-.8-.5-1.2-.7-1.9-2.5-4.8-7.2-8.4-7.7v-.7c-2.4-.5-4.3-2.8-6.5-3.6-2-.8-3.3-.2-4.3-1.7-.6.2-.4.1-.7.5-.6-.4-.3.1-.5-.7-1.8.2-5.6-.7-7.9-1.2-.9-.2-2.1.1-2.6-.5a6.12,6.12,0,0,1-.5-1.2H77a7.84,7.84,0,0,1,.2,1.4c-9.8,0-17.8,2.3-22.3,8.2-1.1,1.4-2.7,1.7-3.4,3.6-.2.3-.2.4-.2,1-1.8.4-2.3,2.8-3.1,4.3-.2.4-1,.6-1.2,1-.9,1.5-.8,3.3-1.7,4.8-.2.4-.9.6-1.2,1-1.3,1.8-2.2,5.6-2.2,8.4h-.7a52.55,52.55,0,0,1-1.9,11c-.5,1.5,0,3.4-.2,4.3-.4,1.9-1,4.1-1.4,5.5s-.4,7.1,0,7.4c-.3.7-.4.8-1.2,1,.5,1.5.1,1.8-.2,2.9.1,1,.2,2.1.2,3.1-.1.5-.2,2.8-.2,2.9h-.5a9.85,9.85,0,0,1,.2,1.7l-.5,1c.2.4.3.8.5,1.2.1,1.3-.7,3.8-.2,5.5a8.65,8.65,0,0,1,.7,1.7,19.42,19.42,0,0,0-.2,2.4,9.29,9.29,0,0,0,1,.5c.5,1,.4,2.7.7,3.6a19.42,19.42,0,0,1,.2,2.4c.6,1.9,2.1,5.1,3.1,6,.3.2.2.2.7.2-.1.6,0,.7-.2,1,.2,1.2.6.9,1,1.9a5,5,0,0,0,1.2.2c.3,1.4,1.1,1.7,1.4,3.1a8.66,8.66,0,0,0,1-.2c.2.6.1.1,0,.7h.7c.3,2.2,2.2,3,3.6,4.1.5.3.6,1,1,1.4s1.2.5,1.7,1c1.3,1.2,2.4,2.9,3.8,3.8,1.6,1,3.8,1,4.8,2.2.7-.1.6,0,1-.5.9.2.7.4,1.2,1,.5.2.6,0,1.2-.2.2.6.1.1,0,.7,1.7-.1,2.4.8,3.6-.2.6.4.3-.1.5.7,3.2-.1,6.2.2,7.9,1.2.4-.2.8-.8,1.2-1,2.2-.8,5-.1,6.5-1a4.26,4.26,0,0,0,3.4.2l.7-.7c1.2-.3,2,1,3.6.2a1.85,1.85,0,0,0,.2-.7c1.5-.9,4.8-1,6.5-1.9a38.91,38.91,0,0,0,5-4.1c.5-.5.5-1.3,1-1.9,1.4-2,3.4-4.4,4.3-6.7.8-1.9,1.1-3.7,1.9-5.5a37.18,37.18,0,0,0,1.9-3.4v-2.6h.5c.7-1,.6-2.1.5-3.8h.7c1.2-5,3-12,2.2-16.1C117.22,87.5,117.92,85.8,118.12,85.1Zm-5.7-15.4c-.1.9.1.6-.5.7v.5c.6.4,0,.2.7.2a15.43,15.43,0,0,0,0,7.7c-.6-.3-.2.1-.5-.5h-.5c.3,1.2.6,2.9-.5,3.8.3.2.2.2.7.2-.2.6-.5.4-.7.7-.8,1.4.2,2.8-.5,3.8.3.4.3.2.5.7a25,25,0,0,1-.2,3.6c-.1.1-.7.4-.7.5-.1,1.5-.2,3-.2,4.6-1.4,3.5-2.3,7.6-3.8,10.8-1.1,2.2-1.4,4.1-2.4,6.5-.3.6-1.3,1.4-1.4,1.9-.1.3.1,2,0,2.2a3,3,0,0,1-1,.2c-.4.5-.1,1.4-.5,1.9-.4.2-.8.5-1.2.7-.4.5-.1,1.1-.5,1.7a1.85,1.85,0,0,0-.7-.2,3,3,0,0,0-.2,1c-.5.2-1,.3-1.4.5a10.59,10.59,0,0,1-1,1.2c-1.5,1.1-3.5,1.9-5,2.9-1-.5-2.9,1-3.6,1.7-.5-.6-4.8,1.2-5.5,1.4-1.6-.4-4.2.9-5.5.5-.4-.1-1.1-.8-1.7-1-1.7-.6-6.7.1-9.4-1a28.24,28.24,0,0,1-5.3-3.1c-.9-1-1.8-1.9-2.6-2.9-.8-.5-1.6-.4-2.4-1a15.05,15.05,0,0,0-1-1.7c-.3.3-1.3-.6-1.7-1a49.08,49.08,0,0,1-4.6-5v-1l-1.2-1.2c-.2-.5.3-.7.2-1s-.8-.5-1-.7v-1.4c-.2-.2-1.1-.3-1.2-.5a3,3,0,0,0,.2-1c-.3-.7-1.4-1.8-1.7-2.6v-1.9a27.42,27.42,0,0,1-1-8.6c0-2.1,1-5.6-.7-6.2.3-1,0-.5,1-.5a25,25,0,0,0-.7-4.1c.6-.2.1-.1.7,0,.6-7.1,1.2-13.6,2.9-19.2.1-1.3.2-2.6.2-3.8.2-.6.8-1.6,1-2.2a19.42,19.42,0,0,1-.2-2.4,1.85,1.85,0,0,1,.7-.2c.1-.2,0-3.7.2-4.3.6-1.7,1.6-2.7,1.9-4.3.2-.7-.3-1.7.2-2.6.8-1.5,3.1-3.5,3.4-5.5h1a15.39,15.39,0,0,1,1.7-3.1,3,3,0,0,1,1-.2c.6-.6.4-1.8,1-2.4a33.47,33.47,0,0,1,8.2-5.8c2-.7,5.1-.3,6.2-.5,1.9-.3,6-1.5,8.9-.7,2.2.6,4.1,1.9,6.2,2.6,3.6,1.3,8.3,2.1,10.3,5,.6-.3.2.1.5-.5a7.64,7.64,0,0,1,3.1,3.6c.2-.3.2-.2.2-.7.7.4.4,1.3,1,1.7,4.1,2.9,7.7,9.4,9.1,14.9.6,2.2.5,9.6.5,9.6v1.2c.4-.2.2,0,.5-.2h.5a2.09,2.09,0,0,1-.7,1.7c0,1.3.2,1.4,1.2,1.7C112.42,68.1,111.92,68.9,112.42,69.7Zm22.1.3c-.1.4.2.3-.5.5v-.2A2.19,2.19,0,0,0,134.52,70Zm-1,6c.2.2.1.1.2.5h-.2Zm-21.6.5c.2.2.1.1.2.5h-.2Zm-26.4,35c.1.1.5.1.2.5C85.52,111.9,85,111.6,85.52,111.5Zm-24.7,93.1h.5v.5h-.5Z",
          {
            style:
              "fill:#222222;fill-rule:evenodd;stroke-width: 2px !important;stroke: #222222;",
            transform: "rotate(180)",
          }
        );
      }
    );
  }

  /*
   * Chiron path
   * @private
   *
   * @param {int} x
   * @param {int} y
   *
   * @return {SVGPathElement} path
   */
  function chiron(x, y, size, houseId) {
    return createSymbol(
      x,
      y,
      size,
      houseId,
      -10,
      -20,
      1.12,
      1.16,
      function (wrapper) {
        createExtraSpace(wrapper, -60, -125, 100);
        createPath(
          wrapper,
          "M102.7,164.8l-2.4-7.2-.5.5c-2.2-10-6.6-17.5-12-25L84.7,130c-1.8-2.5-3.7-5.1-6-6.5-.7-.2-1.4-.3-2.2-.5a14.13,14.13,0,0,0-3.4-1.9H71.4a23.26,23.26,0,0,1-2.6-1.7,7,7,0,0,1-2.9,0c-1.1-.4-1.5-1.1-3.1-1.2.1-.9,0-.8.5-1.2-.3-.2-.2-.2-.7-.2,0-1.4-.2-6.2.2-7.4,0-.1.7-.5.7-.5.2-.6-.7-3.9-.2-5.5.8-2.9-.1-9.9-.5-13.2a7.56,7.56,0,0,1,0-2.6c.1-.1.7.2.5-.2-.2-.1-.3-.2-.5-.2-.2-.6.7-1.9.7-1.9H63c-.6-2.5.7-8.3-.2-9.4v-.2c.2.1.3.2.5.2a2.2,2.2,0,0,0-.5-1.2c.4-.6.1-.4,1-.5a5.24,5.24,0,0,1-.7-2.4h.7c.4.8.9,1.2.2,1.7l.2.2v.2c.2-.1.3-.2.5-.2v.2c.9.5-.1.1.2,1,.2-.4,1,.2,1.2.5v.7c.4.5,1.3.7,1.7,1.2a6.45,6.45,0,0,1,.7,1.9,15.37,15.37,0,0,1,1.9,1.7c.5.7.5,1.5,1,2.2h.5a7.84,7.84,0,0,1,.2,1.4c.3.5,1.1,1.1,1.4,1.7a1.85,1.85,0,0,0-.2.7c.2.2.8.2,1,.5.4.7.3,1.1.7,1.9.3-.4.8.2,1,.5a12.8,12.8,0,0,1,.5,1.7c.4.4,1.3.5,1.7,1s1.4,2.6,1.7,3.1v1.2h.5a3.25,3.25,0,0,1,1,2.4l.2-.2c1,.3,1.4,2.1,2.9,2.9,1.1.5,3.6.2,4.1.5,1.2-.4,1.3-1.2,2.6-1.4-.1-3.3-2.1-4.5-3.6-6.7v-1a7.84,7.84,0,0,0-1.4-.2c-.3-.4.4-.9-.2-1.9-.3-.5-1,.1-1.4-.2s-.3-1.1-.7-1.7c-.4-.2-.8-.3-1.2-.5-.1-.2-.4-2.4-.5-2.6-.7,0-.3-.2-.7,0,0,0-.9-.1-.5-.2-.2-1.6-.6-.4-1.2-1.4a3,3,0,0,0,.2-1c-.2-.2-.8.1-1-.2-.2-.5.3-1.5,0-1.7a27.72,27.72,0,0,1-5.5-6.5c-.8-1.3-.9-2.6-1.7-3.8-1.1-1.6-3-3-4.1-4.6-.3-.5-.3-1.4-.7-1.7s-.9.1-1.2-.2c-.4-.6-.3-1.4-.7-1.9v-.2c-.2.1-.3.2-.5.2v-.2c-.1-.1.2-.8.5-1.2.3-.2.3.1.7-.2H66c-.3-.2-.2-.2-.7-.2,1.1-1.1,1.6-1.4,1.9-2.9h.7c.2-.8.3-.6.5-1.4a1.85,1.85,0,0,0,.7.2c-.2-.4,0-.2-.2-.5.2-1.1.7-1.2,1.2-1.9h.7c0-.7.2-.7,0-1,.3-1.4,1.4-1.2,1.9-2.4h.7a5.43,5.43,0,0,0,0-2.2c.2-.2.1-.1.2-.5h.7a4.23,4.23,0,0,1-.5.7V50H74c.8-1.4,2.1-2.4,2.4-3.8.7-.1.6,0,1-.5.3-.2-.1,0-.2-.2v-.2a5.06,5.06,0,0,0,2.2-2.9h.7v-.7h.7a22.68,22.68,0,0,1,1.7-3.1c1.4-1.2,3.1-1.4,3.1-3.4a5,5,0,0,1,1.2-.2c.5-2,2.3-2.9,2.9-4.6.3-.7-.3-.7,0-1.2-.3-.2-.2-.2-.7-.2.7-1.2,2-1.4.7-2.9v-.2c-.2.1-.3.2-.5.2v-.2c0-.3-.2-.1.2-.5v-.5a2.48,2.48,0,0,1-1.7,0c-1.5,2.9-4.7,4.6-6.5,7.2-.4.5-.1,1.1-.2,1.2s-.5.3-.7.5a1.85,1.85,0,0,1,.2.7h-.7c-.6.6-.7,1.7-1.2,2.4l-2.9,2.9a5,5,0,0,0-.2,1.2c-.5.5-1.7.4-2.2,1v1c-.8.9-1.9,1.2-2.2,3.1H69.9a10.83,10.83,0,0,1-.5,1.9c-.4.6-1.3.9-1.7,1.4-.8,1-.9,2.1-1.7,3.1-.1.1-1.2.7-1.2.7l.2.2c-.8.5-.6-.1-1.2.5.5.5,0,.9-.2,1.4-.4.2-.2,0-.5.2h-1c1-3.1-.3-6.8,1-8.6-.1-1.6-1.2-4.9-.5-6-.2-.7.1-.4-.5-.5.3-1.6,1.1-9.3.2-9.8,0-1.3-.2-1.8.5-1.9-.3-.6.1-.2-.5-.5.4-.6,0-.2.7-.2-.1-1,.5-2.7.2-3.4-.2-.2-.5-.3-.7-.5-.3-.8.8-1.3.5-1.9a2.7,2.7,0,0,1-.5-1.9,7.16,7.16,0,0,1-4.3.2,3,3,0,0,1-1.7,1.4c.1,1.8-.3,3.3,0,4.8a42.93,42.93,0,0,1,.7,5c0,1.6-.8,4-.2,5-.6.3-.2-.1-.5.5s.4,4.2,0,5.8c-1.3,5.8.5,13.2-.2,17.3a11.69,11.69,0,0,0,.7,5.8c-.2.6-.1,0-.5.5-.9,1.4.6,2.9-.2,4.3.2.5-.1.2.5.2-1,5.2.4,12.3-.7,19.7-.1.7.3,3.4.2,3.8-.6,3,.8,8.8-.2,9.4.1.9.2.7,1,1-.2.8-.5.9-.7,1.4a12.75,12.75,0,0,1,0,3.4c-.1,1.5.1,3.1-.7,3.8.4.6,0,.2.7.2-.2.4,0,.2-.2.5v.2h.7c-.2,1.7-.6,1.9-.7,3.6-.8.1-.9.3-1.4,0-.6.1-.6.8-1.4.5-.7.3-.2.1-.5.7a19.05,19.05,0,0,0-2.4,0v.7c-3.2,1.1-3.2,1.8-6.5,2.2l.2.2c-.1.5-1.1.8-1.7.7a1.85,1.85,0,0,1,.2.7c-.5.2-1-.3-1.2-.2-.5.2-.7,1.2-1.2,1.4H39.1c-.7.4-1.1,1.6-1.7,2.2-.1-.1-.9-.3-1.2,0s0,1.2,0,1.2c-.5.2-1,.3-1.4.5a5,5,0,0,0-.2,1.2c-.7.8-1-.1-1.2,1.4a1.85,1.85,0,0,0-.7-.2,3.53,3.53,0,0,1-2.2,2.6v.7c-1.4.4-1.1,1.6-2.2,2.2a3.24,3.24,0,0,1,0,1.7c-2.8.6-2.5,4.1-3.8,6.2a15.39,15.39,0,0,0-1.7,3.1c-.1.4.3.9,0,1.7-.2-.1-.3-.2-.5-.2V151c-.1.1-.9.4-1,.5a5,5,0,0,1,.2,1.2c-.3.9-1.1,2.3-1.4,3.1-.1,1-.2,2.1-.2,3.1-.8,2.2-1.7,3.8-2.4,6.2s1,5.9.2,7c.3.2.2.2.7.2a10.72,10.72,0,0,1-1,2.2c.3.2.2.2.7.2v.7h.7c-.5.7-.3,3.4-.2,5,1.2.1,1.4,2.8,1,4.8s2.7,7.4,2.4,10.1a2.51,2.51,0,0,1,1-.2c-.1,1.2.2,1.5-.2,1.9.2.5-.1.2.5.2l-.5.5c.2.4.6.6,1.2,1-.3,1,0,1.4-.5,1.9,1.2,1.2,1.8,4.1,2.4,5.8a15,15,0,0,1,.2,2.2,41,41,0,0,0,2.2,4.1c2.4,3.9,7.6,9.6,11.8,11.5,3.2,1.4,6.4,1.6,10.1,2.6s13.6,2.2,16.6-.5c.7.2.4-.1.5.5,1.4-.4,3.4-1.7,4.6-1,.8-.2.4.1.5-.7.9.1,1.3-.3,1.9,0h.2v-1.2h1v.7c1.3-.4,3.6-2.5,4.8-1.9.2-.4,0-.6.2-1h1.7c.8-.4,0-.1.5-.7a12.81,12.81,0,0,1,3.6-1.4c.1-.9,0-.8.5-1.2v-.5c.2.2.3.8.5,1v.2c.2-.4.2-.3,0-.7v-.2a1.85,1.85,0,0,0,.7.2c.3-.3.4-1,.7-1.2s.7.1,1-.2-.1-.8.2-1a1.85,1.85,0,0,0,.7.2c-.1-1.2.6-2,1.4-2.9.5-.7.5-.1,1.2-.5,1.3-.3.9-1.2,2.2-1.9v-.7h.7c.4-2.3,2-4,2.9-6,1.5-3.4,2.3-7.4,3.4-11,.1-1.2.2-2.4.2-3.6A56.1,56.1,0,0,0,102.7,164.8Zm-7.9,30.7c-.5,1.6-.2,3.5-1,4.8-.2.3-.8.3-1,.5-.5.7-.2,2-.7,2.6a9.29,9.29,0,0,1-1,.5c-.8,1.2-.4,2.1-1.7,2.2-.6,1-.4,1.4-1.2,2.2-1.5,1.5-3.4,2-4.6,3.8h-1c-.2,1.4-1.5,1.9-2.9,2.2v.5c-.2.5-.2-.5-.2-.5-1.2,1.5-3.2,3.4-5.5,3.6-.8.1-.4-.6-1.2-.2-.9.1-.2.1-.7.5-1.4,1-4.7.5-6.2,1-.3.1-1,.7-1.2.7a5,5,0,0,0-1.2-.2,1.85,1.85,0,0,0-.2.7c-1.2-.7-4.2-.2-6.5-.2a24.15,24.15,0,0,1-8.2-1.4c-.5-.2-1.3.3-1.4.2-.3-.1-.5-.8-.7-1a29.65,29.65,0,0,0-3.6-1.2c-.4-1.8-4-2.1-4.8-4.1a1.85,1.85,0,0,0-.7-.2c0,.1.1.8-.2.5-.8-.8,0-.7-1.2-.7.2-.5.2-.3.5-.7a15.05,15.05,0,0,1-1.7-1h-.5a11.16,11.16,0,0,0,0-2.6l-1.2-1.2c-.4-.9-.2-1.9-.7-2.6-.2-.3-1-.6-1.2-1-.1-.2.5-.5.2-1,0-.1-.7-.3-.7-.5-.3-.8.4-1.7.2-2.2s-1.3-.9-1.4-1.7c-.1-.5.8-.8.5-1.7-.1-.3-1-.7-1.2-1-.5-.8-.6-3.5-.7-4.3a3,3,0,0,0,.2-1c-.2-.8-1-1-1.2-2.4h.7c-.6-1.4-1.9-3.8-.7-4.8-.4-.8-.2-.3-1-.2a18.58,18.58,0,0,0-.7-4.6l.5-.5c-.1-.5-.6-.7-.5-1.4.1-.3.6-.4.5-1-.3-.3-.5-.1-.5-.5,0-1.3.3-3.8-.5-4.6.2-.7-.1-.4.5-.5v-3.6c.5-1.9,1.8-3.6,1.2-5.5a5.76,5.76,0,0,1,1-.2c.2-.5-.1-1.9.7-2.4-.3-.6-.2-.4-.7-.7a3.46,3.46,0,0,1,1.2-.7c-.2-2.7,1.4-6.4,2.9-8.9.5-.9.2-2,.7-2.9.4-.2.8-.5,1.2-.7.3-.6-.1-1.7,0-1.9.3-.5.5-.1.7-1H35c-.2-.4,0-.2-.2-.5v-.5c.4.2.2,0,.5.2.6-.8.4-2,1-2.9a1.85,1.85,0,0,1,.7-.2v-.7a1.85,1.85,0,0,1,.7-.2,5,5,0,0,0,1-2.2c1.1-.2,1.3-.5,2.2-.2.6-2.2,8.3-7.6,11-7.2a1.85,1.85,0,0,1-.2-.7h.5c.6-.4.3.2.7,0,0,0,.9-.1.5-.2l-.2-.2c.5.1,6.1-1.3,7.2-.7v.5a4.16,4.16,0,0,1,2.2-.2,64.23,64.23,0,0,1,7,3.1c.6-.4.2,0,.2-.7H70a2.51,2.51,0,0,1,.2,1h1.9c.2.4,0,0,0,.5h1a2,2,0,0,0,.2.7v.2c.2-.1.3-.2.5-.2.2.6.1.1,0,.7,3.2.2,3.6,3,6.5,3.6a2.68,2.68,0,0,0,.7,1.7v.2c.2-.1.3-.2.5-.2v.2c.6.6-.2,1,.5,1.7,1.7,2,5.2,6.1,7,10.3,1.6,4,3,8.7,4.8,11.5v.2c.5.1.3-.1.5-.2C99.9,167.3,97.7,186,94.8,195.5Z",
          {
            style:
              "fill:#e0617b;fill-rule:evenodd;stroke-width: 1.5px !important;stroke: #e0617b;",
            transform: "rotate(180)",
          }
        );
      }
    );
  }
  /*
   * Lilith path
   * @private
   *
   * @param {int} x
   * @param {int} y
   *
   * @return {SVGPathElement} path
   */
  function lilith(x, y, size) {
    // center symbol
    var xShift = 2; //px
    var yShift = 4; //px
    x = Math.round(x + xShift * astrology.SYMBOL_SCALE);
    y = Math.round(y + yShift * astrology.SYMBOL_SCALE);

    var wrapper = document.createElementNS(context.root.namespaceURI, "g");

    if (size) {
      wrapper.setAttribute(
        "transform",
        "translate(" +
          x +
          "," +
          y +
          ") scale(" +
          (astrology.SYMBOL_SCALE - 1.14) +
          ")"
      );
    } else {
      wrapper.setAttribute(
        "transform",
        "translate(" +
          x +
          "," +
          y +
          ") scale(" +
          (astrology.SYMBOL_SCALE - 1.18) +
          ")"
      );
    }

    var node = document.createElementNS(context.root.namespaceURI, "path");
    node.setAttribute(
      "d",
      "m" +
        x +
        ", " +
        y +
        " -2.525435,-1.12853 -1.464752,-1.79539 -0.808138,-2.20576 0.151526,-2.05188 0.909156,-1.5389 1.010173,-1.02593 0.909157,-0.56427 1.363735,-0.61556 m 2.315327,-0.39055 -1.716301,0.54716 -1.7163,1.09431 -1.1442,1.64146 -0.572102,1.64146 0,1.64146 0.572102,1.64147 1.1442,1.64145 1.7163,1.09432 1.716301,0.54715 m 0,-11.49024 -2.2884,0 -2.288401,0.54716 -1.716302,1.09431 -1.144201,1.64146 -0.5721,1.64146 0,1.64146 0.5721,1.64147 1.144201,1.64145 1.716302,1.09432 2.288401,0.54715 2.2884,0 m -4.36712,-0.4752 0,6.44307 m -2.709107,-3.41101 5.616025,0"
    );
    node.setAttribute("stroke", astrology.POINTS_COLOR);
    node.setAttribute("stroke-width", astrology.POINTS_STROKE);
    node.setAttribute("fill", "none");
    wrapper.appendChild(node);

    return wrapper;
  }

  /*
   * NNode path
   * @private
   *
   * @param {int} x
   * @param {int} y
   *
   * @return {SVGPathElement} path
   */
  function nnode(x, y, size, houseId) {
    return createSymbol(
      x,
      y,
      size,
      houseId,
      -20,
      -20,
      1.12,
      1.16,
      function (wrapper) {
        createExtraSpace(wrapper, -90, -125, 100);

        createPath(
          wrapper,
          "M175,180.6c-.4-.6,0-.3-.7-.2-.6-1.5,0-3.8-.2-5a11.39,11.39,0,0,1-.7-2.2,1.85,1.85,0,0,1,.7-.2c-.3-.2-.2-.2-.7-.2a9.2,9.2,0,0,0-.2-1.9c.3-.3.5-.2,1-.2-.2-.4,0-.2-.2-.5-.5-.2-.3-.2-.7.2-.5-.8-.1-2-1-2.9.4-.6,0-.2.7-.2-.3-.6-1.2-1.2-1.7-1.7,0-.9,0-1,.5-1.4v-.5h-1.2l-1-1V162l.2.2c.6.2,0,.1.5.5v.2h.5v-.5c-.2-.2-.5-.8-.7-1a3,3,0,0,1-1,.2c-.4-.3-.2-1.2-.2-1.2-.5-.4-1.3-.5-1.7-1-1.2-1.4-1.2-2.6-3.1-3.1l.7-.7a17.71,17.71,0,0,1-4.3-1.9,8.65,8.65,0,0,1-.7-1,5,5,0,0,1-1.2.2c-1.8-.5-5-1.4-7.7-.5-.7.2-.8.6-1.9.7.2-.8.2-.5.5-1l-.5-.5h-.5a9.85,9.85,0,0,0-.2,1.7c-1.9.2-2.5,1.2-4.8,1.2v.7l-.2.2h-.7c.3-.8.3-1.3.7-1.7.4-.8.3-.1.7-.5.2-.1.3-.2.5-.2-.2-.5.1-.2-.5-.2.1-.9.4-1.6.2-1.9.4-.6.1-.4,1-.5-.3-.2-.2-.2-.7-.2,1.1-1.1.3-1,1-1.9v-.2c.2.1.3.2.5.2.1-1.2,0-1.8,1-2.2-.5-.9-.9-1.6,0-2.6.1-.2.2-.3.2-.5a2,2,0,0,1,.7.2h.5v-.5l-.2-.2h-1c.1-1.2.2-4.4,1-4.8-.4-.6.1-.3-.7-.5.2-.6.3-.2.5-.5,0,0-.5-2.3-.5-2.4s.4,0,.5-1.2l.5.5h.5c-.2-.6-.4-1.3-.7-1.4.2-1.1.3-.3.7-1.2.6-.2-.2-.4-.5-.5a25,25,0,0,0,.7-2.6,1.85,1.85,0,0,0,.7.2,40.31,40.31,0,0,1-.2-4.6,1.85,1.85,0,0,0,.2-.7h-.5v-.5c.6.3.2-.1.5.5h.2c-.2-1.4-.2-3.6.7-4.1-.3-.6-.4-.4-.7-1h-.2c.2-.8.2.1.5-.7h.2c-.4-.6,0-.2-.7-.2.3-.6.5-.2,0-.7.2-.8-.1-.4.7-.5l-.2-.2c-.2-.5.1-.2-.5-.2,0-1.1.1-1.2.7-1.7-.3-.6-.5-.1-1-1-.2-.5.2-.8,1-1l-.2-.2v-.5h-.7a1.82,1.82,0,0,1,1-1.7v-.5a3.13,3.13,0,0,0-1,.5c-.2-.8.6-1.9,0-2.9.4-.6,0-.3.7-.2-.2-.4,0-.2-.2-.5V105c-.2-.5-.2.5-.2.5h-.2c-.1-1.2,0-1.5,1-2.2v-.5a4.61,4.61,0,0,1-1,.5l-.2-.2c.1-.8.2-.8,0-1.2,0-1.7.4-1.2,1-2.4-.6-.2-.1-.1-.7,0l-.2-.2c.2-1.2,0-.8,1-.7-.4-.8-.8-.6-1-1.7h.7c-1-1.2-1.4-9.5-2.4-13.2V81.5c-.6-1.8-1.4-2.9-1.2-3.8-.2-.5.1-.2-.5-.2.3-1.8-.1-4.3-1.2-4.8.2-.8-.1-.4.7-.5-.7-1.4-1.6-1.8-2.4-2.9-.4-.6-.1-1.3-.5-1.9-1.9-3.3-4.2-7.1-6-10.6-.7-1.4-2-5.2-3.4-5-.5-.7.3-.8,0-1.7-.3-.7-1.1-.5-1.4-1a3,3,0,0,0,.2-1c-.2-.4-.9-.4-1.2-.7-.8-.8-1.3-2.1-2.2-2.9-.5-.2-1-.3-1.4-.5l-1.4-1.4c-1.6-1-3.1-1.3-4.8-2.2-10.8-5.5-27.1-8.7-41-4.8H78.4a71.5,71.5,0,0,0-19.2,8.6c-1.8,1.2-4.4,4.6-7,4.1-1.4.9-2.5,2.6-3.8,3.6-2.3,1.7-4.9,2.9-6.2,5.5a16.61,16.61,0,0,0-1,3.6,1.85,1.85,0,0,1-.7.2c-1.1,1.6-1.3,6.8-3.4,7.4.7,1.1.4,1.7.7,2.9h-.2c-.1.2,0,.1-.2,0h-.5a40.11,40.11,0,0,1-.7,7.7c-.2.2-.5.3-.7.5-.1.4.5,1.2.5,1.4.1.8-.4,2.7-.5,4.1a2.44,2.44,0,0,1-1.2,0c-.2.4,0,.2-.2.5a7.46,7.46,0,0,0,1.2.7c-.2,2.7-1,6.3-1.4,8.6s.4,4.3-1.2,5.5v.2c.5.1.3-.1.5-.2.2.3.2.2.2.7h-.7l.2.2c.2.5-.1.2.5.2-.2.6.3.8.2,1.2a8.66,8.66,0,0,0-.2,1h-.5v.5h.5c-.2.9,0,.7-.7,1,1.4,3.2,0,7.4.7,9.8.5,1.5.1,5-.5,5.5.3.2.2.2.7.2-.2.9,0,1.6-.2,1.9-.4.6.1.3-.7.5v.5c.9-.1.6.1,1-.5h.2a1.45,1.45,0,0,1-.7,1c.4,1,1,3.2.5,4.3v1.2c-.2-.2-.1-.1-.2-.5H33c.3.7,0,.5.7.7-.2.6-.2,1.1-.5,1.4.3.2.2.2.7.2,0,.8.3,3-.2,3.8.2.5-.1.2.5.2-.2,3.5,1.1,5.8,1,8.9-.1,1.4,1.4,3.1.5,4.3.3.5,0,.2.5.2.6,1-.2,1.3.7,1.7v.5c-1.1-.2-2-.5-3.1-.7a12.25,12.25,0,0,1-1.9.2c-.3-.1-.7-.6-1.2-.5-2.3.3-5.2,1.3-7.2,1.2-1.1.6-1.6,1.3-3.4,1.4v.7a38.06,38.06,0,0,0-7.2,3.8c-1.2.9-1.2,2.9-2.9,3.4a14,14,0,0,1-1.2,5.5c-.4.6.1.3-.7.5.2.2.1.1.5.2-.1,1,.2.7-.7.7.3.6-.1.2.5.5-.3.7-.6,1.4-1,2.2a9.63,9.63,0,0,1,0,3.8c-.7,1.9-1.4,11.7.2,15.6a8.65,8.65,0,0,1,.7,1c.5,1.6.1,3.6,1,5,1,1.7,3.1,4.8,3.1,7.2h.7c-.2.2-.1.1-.5.2.4.3,3.3,1.8,3.6,1.9l-.5.5c.4.3.9-.2,1.4.2.2.2.2.8.5,1,1.9,1.1,10,2.6,13.2,1.7.8-.2,1.9-1,2.6-1.2a15,15,0,0,1,2.2-.2c.6-.3,1.6-1.9,2.6-1.7l.2.2c.4-.2.6-1.1,1-1.4a4.8,4.8,0,0,0,1.7-.5h.2c.4-.3,1-1.5,1.7-1.9.2.1.1-.1.2.2,5.2-6.5,5.7-13.2,8.4-21.6.2-.7-.3-1.6-.2-1.9a31.72,31.72,0,0,0,.2-5.3c-.2-1.8-1.1-4.6-1-6l-.2-.2a1.85,1.85,0,0,0,.7.2c-.3-.7-.2,0-.7-.5a1.85,1.85,0,0,0,.2-.7c-.2.1-.3.2-.5.2a43,43,0,0,0-2.2-11c-1.1-4.1-2-10-2.9-13.4s.4-6-.2-8.9c-.5-2.2.2-5-.5-7.4-.6-2.2-.4-5.5-.2-7.9-.1-1.2-.2-2.4-.2-3.6a5.81,5.81,0,0,0,.2-2.4,3.57,3.57,0,0,1-.2-1.9c.5-2.1.4-8.4.2-10.8-.4-8.4,1-17.6,3.4-23.8.8-2.1,3.4-8.7,3.1-9.4.4-.6,0-.3.7-.2a7.5,7.5,0,0,1,.2-2.2c.4-.1,1.6-.2,1.9-.5h.2c-.3-.2-.2-.2-.7-.2.2-.7.4-.7,1.2-.7a10.29,10.29,0,0,0,.5-2.2,8.66,8.66,0,0,1,1,.2c.1-.6,0-.2,0-1,.4.2.2,0,.5.2.5-.2.9-.9,1-1s0-.8.2-1.2v-.2c.3.5.1.3,0,1,.7-.4.7-.7,1.9-.7.1-1.2.5-1.4,1.4-1.7.3-.2.4-.2,1-.2v-.7c.4.2.2,0,.5.2h.7c-.3-.6.1-.2-.5-.5.5-.2.2-.1.7,0v-1c1.2-.1,1.5-.4,1.9-1.2.2.4,0,0,0,.7a4.23,4.23,0,0,0,.7-.5h.2c-.1-.2-.2-.3-.2-.5h.2c1.1-1.3.8,0,1.7-.5.2-.4.3-.8.5-1.2.4-.2,1,.2,1.7-.2,1.7-1.1,3.1-3,5-3.8a12.72,12.72,0,0,1,3.8-.7c.3,0,.6.4,1.2.2,1-.2,2.5-.7,3.6-1,4.2-1,9.2.4,11-.5a57.24,57.24,0,0,1,8.9,1.4c1.2.3,1.9.3,2.2,0,2.3-.4,3.1,1.5,4.3,1a4.23,4.23,0,0,0,.5.7c.3.4.1,0,.5-.2.2.2.1.1.5.2-.3.5-.3.2-.5,1,4.9.6,6.7,3.1,9.8,5.3,1.5,1,3.5,1.4,4.6,2.9.9,1.2,1.3,2.4,2.2,3.6,2.5,3.3,6,6.3,8.2,9.8,2.8,4.6,4.2,13.7,4.8,19.7,0,.4-.2,1.8-.2,2.6,0,3.1.5,5.5,0,7.7-.4,1.7-.9,4.1-.7,5s-1.7,4-1,5.3c-.4.2-.3.2-.7,0h-.2v1c.6-.3.2.1.5-.5h.2a5.74,5.74,0,0,1-1.2,4.1c1.2,1-.1,2.2-.5,3.1v.7h.5a4.08,4.08,0,0,1,.2.7,5.7,5.7,0,0,0,0,2.6v.2a5,5,0,0,0-1.2-.2v.7c.4-.2.2,0,.5-.2h.2c-.3,1.1.7,1.6.5,2.6s-1.1,2.3-1.2,3.1.5,2,.2,3.1c-.4,1.5-.8,4.3-1.7,5.5v.2a73,73,0,0,1-.7,7.4c-.5,2.3.8,6.1,0,7.4a21.63,21.63,0,0,0-1.4,7,44.19,44.19,0,0,1-1.4,11.5c-.2,1,.3,2.6.2,3.1-.1,2.7-.2,4-1.2,5.8,0,.3.6.5.7,1,.3,1.4-.8,6.2,0,8.6,1.1,3.3,2.2,7.8,3.8,10.6.2.7.3,1.4.5,2.2.4.7,1.2,1.9,1.7,2.6l-.2.2c.2.4,1.9.8,2.6,1.4l.7.7c-.1.2-.2.3-.2.5.5.3.6-.4,1.2,0a22.05,22.05,0,0,0,2.9,2.2c1.6.6,9.5,1.1,11.5.5a22.38,22.38,0,0,0,9.4-5,1.85,1.85,0,0,0,.7.2v-.7c.2-.2,1.3-1.1,1.4-1.2a1.85,1.85,0,0,0,.7.2,1.85,1.85,0,0,1-.2-.7,9.73,9.73,0,0,0,3.6-6h.7a4.6,4.6,0,0,1,1.2-3.4c-.4-.4,0-2.5.2-3.4.3-1.1,1.3-3.6,1.7-5C174.6,182.9,172.7,181.9,175,180.6ZM43.2,173.9v.7c.2-.1.3-.2.5-.2a1.45,1.45,0,0,1-.7,1,2.57,2.57,0,0,0,.2,1.4v.2s.9-.1.5-.2l-.2-.2c.4-.2.2,0,.5-.2h.2c-.6,1.8.5,3.9,0,5.8s-.7,3.9-1.2,5.5-1.3,2.5-1.4,3.8a7.84,7.84,0,0,1-1.4.2c.1,1-.1.9.5,1.2-.3.3-1.2.4-1.4.7s-.1,1-.2,1.2v.2c-.2-.1-.3-.2-.5-.2v.2c-.8.4-.3.2-.2,1a3.4,3.4,0,0,1-1.4-.2c-.2.2-.1.1-.5.2v1c.5-.2.3-.2.7-.5l.2.2a17.41,17.41,0,0,1-1.2,1.4c-.8.3-.8.3-2.4.2.3.2.2.2.7.2-.7.5-1.4.2-2.2,1h-.5c.5.3.4.1,1,0a32.08,32.08,0,0,1-4.3,1.7c-.6.1-1-.4-1.7,0h-.5l.5.5c-.8-.2-.8-.1-1-1-.6.4-.3-.1-.5.7a2.57,2.57,0,0,1-1.4-.2c-1.2,0-1.2.1-1.4-1-.7.4-5.1-1.8-6-2.4s-1.2-1.6-1.9-2.2v-1.2h-.7c-.2-2.9-1.7-5.3-2.4-8.2-.7-2.7.3-4.2.2-6.2-.7.5-.4.5-.2,1.2H11a5.26,5.26,0,0,0-.2-1.9c.3-.2.4-.2,1-.2-.4-.6,0-.2-.7-.2.3-1.8,1.1-5.3.5-6.2v-.2c.2.1.3.2.5.2.4-1.1.6-1.5,1-2.6.3-.9-.5-2-.2-2.4.7-1,1-.3,1-1.4v-.7c-.2.2-.1.1-.2.5h-.2c.4-1.6,2.2-3,2.9-3.6.4,0,.2.1.7.5.3-.6.4-.7.2-1.2a5.89,5.89,0,0,1,1.4-.7c.4-.3.1,0,0-.5h.2c.2-.1.5,0,1.2,0v-.7c2.4-.4,4.5-1.6,6.7-2.2,2.2.1,4.3.2,6.5.2.7.8.7.4.7,1.4l.7-.7.2.2c-.2.2-.1.1-.5.2.3.5.3.2.5,1,.2-.2.3-.8.5-1v.2c.2-.1.3-.2.5-.2a9.29,9.29,0,0,1,.5,1c-.2-.1-.3-.2-.5-.2.4,1.2.7-.1.7,1.4l.7-.7c.3.3.2.7,1,1.2.4.6.2.3,1.2.2l-1,1,.2.2v.2c.6-.4.3.1.5-.7h.2a1.83,1.83,0,0,0,.7,1l-.5.5c.4.6-.1.3.7.5-.2.5.1.2-.5.2v.7a1.7,1.7,0,0,0,1,0c.5,1.7.3,3.2,1,4.6.2.6.3.4,1,.7a5.3,5.3,0,0,1-.2,2.6c.2.2.1.1.2.5Zm125.1,12.2c-.2.5-1,1.2-1.2,1.7-.5,1.1-.3,1.9-1,2.6-.1,1.1.1.9-.5,1l-.2.2c.2.5-.1.2.5.2a19.21,19.21,0,0,1-3.4,5c-.3.3-1.2.4-1.4.7-.4.5-.2,1.3-.7,1.7-1.6,1.2-3.1.8-4.1,2.2-.6-.3-.2.1-.5-.5-1,.1-.7-.2-.7.7a5.21,5.21,0,0,0-1.4-.2v.7a7.13,7.13,0,0,0-2.9.2h-.5c.2.2.1.1.5.2-.3.2-.4.2-1,.2a2,2,0,0,0-.2-.7l-.2-.2a2.51,2.51,0,0,0-.2,1c-1.7-.6-3.1-.7-4.1-1.4-.8-.3-.5-.1-.5-.7-1.2.1-1.3-.2-2.2-.7-3.9-2.4-3.2-2.1-5-6.5-.5-1.1-2-2.9-.5-3.8-.4-.6,0-.3-1-.2.3-1.1-1.6-3.3,0-4.3-.3-.2-.7-.5-1-.7.1-1.1.2-1.3,1-1.7-.2-1.1-.2-.5-.2-1.4h-.5l-.2.2a5,5,0,0,1,.2,1.2H135c-.1-.7-.1-1.6-.2-1.9a2,2,0,0,1,1.2-.2v-.5h-1c0-2.3.3-4.6,1-5.5h.5c.1-.2.2-3.5.2-3.6.7-.9.7-2.6,1.4-4.1a19.58,19.58,0,0,1,3.1-4.1c.2-.2.3-.5.5-.7.6.2.5.6.7.2,1.4-.1,1.4-.6,1.4-1.4a6,6,0,0,0,1.9,0c.2-.6.1-.1,0-.7.4.4.3.2.5,1a3,3,0,0,1,1-.2c-.2-.2-.3-.5-.5-.7a16.72,16.72,0,0,1,13,.2c1.7.8,2.7,3,4.3,3.4-.2.2-.1.1-.5.2v.7a3,3,0,0,1,1-.2c-.2.2-.1.1-.5.2l.2.2c.1.2,0,.1.2,0,.6.3-.2.3.5.5v.5c-.6-.3-.4-.2-.7-.7h-.5l.2.2c.3.8.6.9,1.7,1,.5,1.9.9,2.4,1,4.1.2-.3.2-.2.2-.7.3.4.3.9.7,1.2-.4.6,0,.2-.7.2v1.2a2.51,2.51,0,0,1,1-.2v.7a1.85,1.85,0,0,0-.7-.2c.4.8.5.2.7.5C168.9,174.7,169.5,183.2,168.3,186.1Zm-25.7-24.4c0,.5-.1.2.5.2v-.2ZM12.3,169.3c-.1.2-.2.3-.2.5C12.4,169.5,12.3,169.3,12.3,169.3Zm31.2,8.4c.6.3.2-.1.5.5-.2.5-.1.2,0,.7h-.5Zm52.8,3.9c.2.2.1.1.2.5h-.2ZM0,138.6H.5v.2C.1,138.7.3,138.8,0,138.6Z",
          {
            style: "fill:#c93995;fill-rule:evenodd;",
            transform: "rotate(180)",
          }
        );
      }
    );
  }

  /*
   * SNode path
   * @private
   *
   * @param {int} x
   * @param {int} y
   *
   * @return {SVGPathElement} path
   */
  function snode(x, y, size, houseId) {
    return createSymbol(
      x,
      y,
      size,
      houseId,
      houseId && houseId >= 5 && houseId <= 8 ? -10 : -9,
      houseId && houseId >= 5 && houseId <= 8 ? -8 : -9,
      1.14,
      1.18,
      function (wrapper) {
        createPath(
          wrapper,
          "M4.69,12.34a3.93,3.93,0,0,0,2.39,1.13,10,10,0,1,0,17.83,0,3.93,3.93,0,0,0,2.4-1.13,4,4,0,1,0-5.66,0,8,8,0,1,1-11.32,0l0,0v0a4,4,0,1,0-5.67,0ZM23.07,8.1a2,2,0,1,1,0,2.83A2,2,0,0,1,23.07,8.1Zm-17,0A2,2,0,0,1,9,10.91l0,0h0A2,2,0,0,1,6.1,8.1Z",
          {
            "stroke-width": "0.46px",
            stroke: astrology.COLOR_NODE,
            fill: astrology.COLOR_NODE,
          }
        );

        createExtraSpace(wrapper, 15, 15, 17);
      }
    );
  }

  /**
   * Draw Ascendant Rising
   */
  function ascendant_rising(x, y, size) {
    return createSymbol(
      x,
      y,
      size,
      null,
      -20,
      -25,
      1.2,
      1.18,
      function (wrapper) {
        createExtraSpace(wrapper, -90, -125, 70);

        createPath(
          wrapper,
          "M52.84,166.2v-.7c1.8-1.4,4.4-5,6-7,.7-.9,2-1.5,2.6-2.4,3.3-4.4,7.3-8.2,10.8-12.5,1.6-2,5.6-4.3,5.8-7.4-.2-.2-.1-.1-.2-.5h-.5c-2.5-1.8-9.9-.1-13.7-1-2.6-.6-6.3.4-9.1-.2-1.8-.4-4.6.2-6.7-.2-2.6-.6-5.7.1-8.6-.5-3.3-.7-7.4-.6-10.6-1v-.5c1.9-.2,4.8-.3,6.7-.7,3.4-.7,7.7.4,10.8-.2,2.9-.6,6.6.3,9.1-.2H60a65.41,65.41,0,0,0,8.9-.7c2.9-.6,6.5,0,8.9-.5a3.8,3.8,0,0,0,.5-1.7,137.18,137.18,0,0,1-9.6-11.8c-1.2-1.6-3.5-2.7-3.8-5.3h.7c.7,1.1,2.1,1.6,3.1,2.4a29.56,29.56,0,0,1,2.4,2.6,82,82,0,0,0,7.4,5.8c1.6,1.2,1.7,2.6,4.6,2.6a3.59,3.59,0,0,1,.7-1c.5-14.2,1-28.3,1.4-42.5,0-4-.3-9.2.5-12.7.3-1.3-.2-2,.7-2.6v1.4c1.5,2.5-.1,11.5.7,15.1.4,2-.3,5.1.2,7.4,1.3,5.9.4,13.4,1,19.7.3,2.8-.3,6.2.2,8.6.4,1.8-.1,4.2.2,5.8a3.2,3.2,0,0,0,2.2.7,24.88,24.88,0,0,1,4.3-3.6c.8-.6,1.4-1.8,2.2-2.4,3.3-2.6,6.3-5.3,9.6-7.9,2.2-1.7,3.7-4.7,6.7-5.5v.5a46.75,46.75,0,0,0-4.8,6c-.8,1-2.1,1.7-2.9,2.6-2,2.6-4,4.8-6,7.4-1,1.3-5.7,5.4-6,6.7-.3,1.7,1.4,1.7,2.9,1.7,2,1.2,8.6-.1,11.3.5,3.5.8,7.7-.4,11.5.5,4.1.9,10.4.5,14.9.5,2.8,0,12.9-.1,13.7,1.2-16.9,1.1-36.2,1.8-53.5,2.6a2.94,2.94,0,0,0-.7,1.7,118.59,118.59,0,0,1,9.4,10.6c3.2,3.8,7,7,10.1,11,2.5,3.3,8.3,7.2,9.8,11h-.5c-1.1-1.5-4.9-4.1-6.5-5.3s-2.8-3.3-4.3-4.6c-4.7-3.9-8.8-8.3-13.7-12-2.2-1.7-5.7-6.8-8.6-7.2l-.7.7c-.7,1-.5,3.1-.5,4.8,0,2.4.3,8.1-.2,10.6-.7,3.4-.4,8.9-.5,12.5v4.3c-.8,3.6.4,8.3-.5,12.2-.4,1.8.2,4.6-.2,6.7a61.58,61.58,0,0,0-.7,10.6H86v-1.2c-1.7-2.8.2-13.3-.7-17.5-.7-3.1.5-7.4-.2-10.8-.4-1.8.2-4.6-.2-6.7-1.7-8,.3-18.1-1.4-25.9H83c-.3-.2-.4-.2-1-.2a72.44,72.44,0,0,1-8.4,7.2c-1,.8-1.7,2.1-2.6,2.9-3.7,3-6.9,6.2-10.6,9.1C58.14,161.8,56,165.6,52.84,166.2Z",
          {
            style:
              "fill:#174CE9;fill-rule:evenodd;stroke-width: 2px !important;stroke: #174CE9;",
            transform: "rotate(180)",
          }
        );
      }
    );
  }

  /**
   * Draw Descendant
   */
  function descendant(x, y, size, houseId) {
    const xShift = houseId && houseId >= 5 && houseId <= 8 ? -20 : -8;
    const yShift = houseId && houseId >= 5 && houseId <= 8 ? -62 : 0;

    return createSymbol(
      x,
      y,
      size,
      houseId,
      xShift,
      yShift,
      1.25,
      1.45,
      function (wrapper) {
        createExtraSpace(wrapper, -45, -130, 40);

        createPath(
          wrapper,
          "M73.18,129.3c-5.5-1.7-16.3-3.2-20.2-6.2-2.1-1.7-1.8-4.4-2.9-7.2-2.5-6.5-3.1-14.6-6-20.9h-1.4c-1.5,3.1-1.6,6.6-2.6,10.3-.6,2.3-1.7,5.3-2.4,7.7-.9,3.4-1,7.7-3.1,9.8-3.1,3.2-16.1,5.4-21.4,7-2.6.8-8.3.6-7,3.8,6.5,1.4,12.7,3.1,18.7,4.8,4.2,1.2,8.2,1.2,10.3,4.3,1.1,1.7,1,3.5,1.7,5.8,1.4,4.5,2.8,9.9,4.3,14.4.9,2.7.7,4.5,1.9,6.7,2.8-.4,2.3-4.3,3.1-6.7,1.8-5.7,3.3-17,6.5-21.1,1.6-2,4.4-2,7.2-2.9,4.1-1.2,8.7-2.6,12.7-3.8,2.6-.8,5.6-.9,7.7-2.2v-1.7C79.88,130.3,74.48,129.7,73.18,129.3Zm-21.35,8.8c-3,2.4-4.1,8.3-6.5,11.5-3-.2-4.2-7.3-5.8-9.6-2.5-3.7-8.4-4.6-12.2-7a2.57,2.57,0,0,1,.2-1.4c.9-1.8,7.2-3,9.1-4.3,4.1-2.8,4.2-8.9,7.4-12.5h1.2c2.2,3.4,3.4,9,6.5,11.5s7.8,2.9,10.6,5.5C62,134.3,53.93,136.5,51.83,138.1Z",
          {
            style:
              "fill:#cc7db4;fill-rule:evenodd;stroke-width: 0.1px !important;",
            transform: "rotate(180)",
          }
        );
      }
    );
  }

  /*
   * Aries symbol path
   * @private
   *
   * @param {int} x
   * @param {int} y
   *
   * @return {SVGPathElement} path
   */
  function aries(x, y) {
    return createSymbol(
      x,
      y,
      null,
      null,
      -10,
      -2,
      -0.3,
      -0.3,
      function (wrapper) {
        createPath(
          wrapper,
          "M.63,5.37a.63.63,0,0,0,.63-.64A3.41,3.41,0,0,1,4.73,1.38,3.41,3.41,0,0,1,8,4.73v9.81a.63.63,0,1,0,1.26,0V4.73a3.38,3.38,0,0,1,6.75,0,.63.63,0,1,0,1.26,0A4.68,4.68,0,0,0,12.65,0a4.62,4.62,0,0,0-4,2.36A4.58,4.58,0,0,0,2.31.64,4.73,4.73,0,0,0,0,4.73.63.63,0,0,0,.63,5.37Z",
          {
            style: "fill: #616161;stroke: #616161;stroke-width: 0px;",
          }
        );

        createText(wrapper, "Aries", "#aries-name");
      }
    );
  }

  /*
   * Taurus symbol path
   * @private
   *
   * @param {int} x
   * @param {int} y
   *
   * @return {SVGPathElement} path
   */
  function taurus(x, y) {
    return createSymbol(
      x,
      y,
      null,
      null,
      -5,
      -7,
      -0.3,
      -0.3,
      function (wrapper) {
        createPath(
          wrapper,
          "M13.38.9a.79.79,0,0,0-1.57,0A5.06,5.06,0,0,1,6.63,5.84,5.07,5.07,0,0,1,1.69.9.78.78,0,0,0,.13.9a6.65,6.65,0,0,0,3.5,5.85,6.63,6.63,0,1,0,6.24,0A6.63,6.63,0,0,0,13.38.9ZM11.81,12.59A5.06,5.06,0,1,1,6.75,7.53h0A5.06,5.06,0,0,1,11.81,12.59Z",
          {
            style: "fill: #616161;stroke: #616161;stroke-width: 0px;",
          }
        );
      }
    );
  }

  /*
   * Gemini symbol path
   * @private
   *
   * @param {int} x
   * @param {int} y
   *
   * @return {SVGPathElement} path
   */
  function gemini(x, y) {
    return createSymbol(
      x,
      y,
      null,
      null,
      -3,
      -9,
      -0.3,
      -0.3,
      function (wrapper) {
        createPath(
          wrapper,
          "M9.81,3.11a8.37,8.37,0,0,0,2.57-1.75.74.74,0,0,0-.07-1,.74.74,0,0,0-1,0,7,7,0,0,1-10,0,.75.75,0,0,0-1,0,.75.75,0,0,0,0,1A8.63,8.63,0,0,0,2.89,3.11V15.43A8.68,8.68,0,0,0,.32,17.18a.75.75,0,0,0,0,1,.75.75,0,0,0,1,0,7.06,7.06,0,0,1,10,0h0a.73.73,0,0,0,1-.14.75.75,0,0,0,0-.88,8.49,8.49,0,0,0-2.57-1.75V3.11ZM8.35,14.94a8.45,8.45,0,0,0-4,0V3.61a8.45,8.45,0,0,0,4,0Z",
          {
            style: "fill: #616161;stroke: #616161;stroke-width: 0px;",
          }
        );
      }
    );
  }

  /*
   * Cancer symbol path
   * @private
   *
   * @param {int} x
   * @param {int} y
   *
   * @return {SVGPathElement} path
   */
  function cancer(x, y) {
    return createSymbol(
      x,
      y,
      null,
      null,
      -6,
      -10,
      -0.3,
      -0.3,
      function (wrapper) {
        createPath(
          wrapper,
          "M15.22,4a.62.62,0,1,0,.87-.87A10.56,10.56,0,0,0,1.24,3,3.17,3.17,0,1,0,4,2.47,9.34,9.34,0,0,1,15.22,4ZM5.11,5.53A1.94,1.94,0,1,1,1.92,4.05.47.47,0,0,0,2,4H2a1.93,1.93,0,0,1,2.7.42,2,2,0,0,1,.37,1.15Z",
          {
            style: "fill: #616161;stroke: #616161;stroke-width: 0px;",
          }
        );
        createPath(
          wrapper,
          "M.2,14a10.56,10.56,0,0,0,14.85.07,3.17,3.17,0,1,0-4.45-.56,3.11,3.11,0,0,0,1.68,1.11A9.32,9.32,0,0,1,1.07,13.12.62.62,0,0,0,.19,14h0Zm11-2.43a1.94,1.94,0,1,1,3.87,0A2,2,0,0,1,14.36,13a.5.5,0,0,0-.12.08h0a1.93,1.93,0,0,1-2.7-.41,2,2,0,0,1-.37-1.15Z",
          {
            style: "fill: #616161;stroke: #616161;stroke-width: 0px;",
          }
        );
      }
    );
  }

  /*
   * Leo symbol path
   * @private
   *
   * @param {int} x
   * @param {int} y
   *
   * @return {SVGPathElement} path
   */
  function leo(x, y) {
    return createSymbol(
      x,
      y,
      null,
      null,
      -14,
      -12,
      -0.3,
      -0.3,
      function (wrapper) {
        createPath(
          wrapper,
          "M3.78,14.79A3.77,3.77,0,0,0,7.49,11V4.31a2.7,2.7,0,0,1,2.62-2.76,2.69,2.69,0,0,1,2.62,2.76v9.17a4.08,4.08,0,0,0,8.16,0,.73.73,0,0,0-1.46,0,2.63,2.63,0,0,1-5.25,0V4.31A4.16,4.16,0,0,0,10.11.09,4.16,4.16,0,0,0,6,4.31v3.6a3.62,3.62,0,0,0-2.26-.8,3.84,3.84,0,0,0,0,7.67Zm0-6.23a2.38,2.38,0,0,1,0,4.76,2.38,2.38,0,0,1,0-4.76Z",
          {
            style: "fill: #616161;stroke: #616161;stroke-width: 0px;",
          }
        );
      }
    );
  }

  /*
   * Virgo symbol path
   * @private
   *
   * @param {int} x
   * @param {int} y
   *
   * @return {SVGPathElement} path
   */
  function virgo(x, y) {
    return createSymbol(
      x,
      y,
      null,
      null,
      -12,
      -12,
      -0.3,
      -0.3,
      function (wrapper) {
        createPath(
          wrapper,
          "M12.69.07A3,3,0,0,0,10.3,1.25,3,3,0,0,0,6.05.7a2.81,2.81,0,0,0-.54.55A3,3,0,0,0,.07,3.11a.64.64,0,0,0,.64.64.63.63,0,0,0,.64-.64,1.76,1.76,0,0,1,3.51,0V9.79a.65.65,0,1,0,1.29,0V3.11a1.75,1.75,0,1,1,3.5,0V9.79a.65.65,0,1,0,1.29,0V3.11a1.76,1.76,0,0,1,3.51,0v9.47L11.73,15.3a.64.64,0,0,0,.91.91l1.94-1.94a3,3,0,0,0,5.83-.85.65.65,0,0,0-1.29,0,1.69,1.69,0,0,1-3.38,0v-.3l4-4a3.6,3.6,0,0,0-4-5.84V3.11A3.05,3.05,0,0,0,12.69.07Zm4.48,4.21a2.31,2.31,0,0,1,1.64,3.94l-3.08,3.09V4.78A2.23,2.23,0,0,1,17.17,4.28Z",
          {
            style: "fill: #616161;stroke: #616161;stroke-width: 0px;",
            stroke: astrology.SIGNS_COLOR,
            "stroke-width": astrology.SIGNS_STROKE,
            fill: "none",
          }
        );
      }
    );
  }

  /*
   * Libra symbol path
   * @private
   *
   * @param {int} x
   * @param {int} y
   *
   * @return {SVGPathElement} path
   */

  function libra(x, y) {
    return createSymbol(
      x,
      y,
      null,
      null,
      -14,
      -10,
      -0.3,
      -0.3,
      function (wrapper) {
        createPath(
          wrapper,
          "M.84,15.53H17.59a.74.74,0,0,0,.74-.74.75.75,0,0,0-.74-.75H.84a.76.76,0,0,0-.75.75A.75.75,0,0,0,.84,15.53Z",
          {
            style:
              "fill: #616161;stroke: #fff;stroke-miterlimit: 10;stroke-width: 0.19px;",
          }
        );
        createPath(
          wrapper,
          "M.84,12.09h4a.74.74,0,0,0,.75-.74.75.75,0,0,0-.22-.53,5.41,5.41,0,1,1,7.65,0,.75.75,0,0,0,0,1.06.74.74,0,0,0,.53.21h4a.74.74,0,0,0,.74-.74.75.75,0,0,0-.74-.75H15.1a6.9,6.9,0,1,0-11.77,0H.84a.76.76,0,0,0-.75.75A.75.75,0,0,0,.84,12.09Z",
          {
            style:
              "fill: #616161;stroke: #fff;stroke-miterlimit: 10;stroke-width: 0.19px;",
          }
        );
      }
    );
  }

  /*
   * Scorpio symbol path
   * @private
   *
   * @param {int} x
   * @param {int} y
   *
   * @return {SVGPathElement} path
   */
  function scorpio(x, y) {
    return createSymbol(
      x,
      y,
      null,
      null,
      -12,
      -6,
      -0.3,
      -0.3,
      function (wrapper) {
        createPath(
          wrapper,
          "M.7,3.53a.62.62,0,0,0,.62-.62,1.57,1.57,0,1,1,3.13,0V9A.63.63,0,1,0,5.7,9V2.91a1.57,1.57,0,1,1,3.13,0V9a.62.62,0,0,0,.62.63A.63.63,0,0,0,10.07,9V2.91a1.57,1.57,0,1,1,3.13,0v9.41a3,3,0,0,0,6,0l.3.3a.63.63,0,1,0,.89-.88L19,10.37a.64.64,0,0,0-.89,0l-1.37,1.37a.63.63,0,0,0,0,.88.61.61,0,0,0,.88,0l.31-.3a1.73,1.73,0,0,1-3.46,0V2.91a2.81,2.81,0,0,0-5-1.76A2.8,2.8,0,0,0,5.52.71a3.05,3.05,0,0,0-.44.44A2.8,2.8,0,0,0,1.13.74a2.83,2.83,0,0,0-1,2.17A.63.63,0,0,0,.7,3.53Z",
          {
            style: "fill: #616161;stroke: #616161;stroke-width: 0px;",
          }
        );
      }
    );
  }
  /*
   * Sagittarius symbol path
   * @private
   *
   * @param {int} x
   * @param {int} y
   *
   * @return {SVGPathElement} path
   */
  function sagittarius(x, y) {
    return createSymbol(
      x,
      y,
      null,
      null,
      -12,
      -6,
      -0.3,
      -0.3,
      function (wrapper) {
        createPath(
          wrapper,
          "M13.75,10.29A.87.87,0,0,0,15,10.15v0l5-6.54h0A.61.61,0,0,0,20,3.41l0-.05a.65.65,0,0,0,0-.13V3.16a.66.66,0,0,0,0-.14V3A.91.91,0,0,0,20,2.58l0,0a.52.52,0,0,0-.1-.11l-.05,0-.11-.08-.05,0-.18-.08h0l-8-1.92A.87.87,0,1,0,11,2l.1,0L16.2,3.21,5.3,7.1,4.17,3.92a.88.88,0,1,0-1.65.59h0L3.66,7.69.82,8.7a.88.88,0,0,0,.59,1.65l2.84-1,1.13,3.18A.88.88,0,0,0,7,11.93L5.89,8.75l10.9-3.89L13.58,9.08A.87.87,0,0,0,13.75,10.29Z",
          {
            style:
              "fill: #616161;stroke: #fff;stroke-miterlimit: 10;stroke-width: 0.48px;",
          }
        );
      }
    );
  }

  /*
   * Capricorn symbol path
   * @private
   *
   * @param {int} x
   * @param {int} y
   *
   * @return {SVGPathElement} path
   */
  function capricorn(x, y) {
    return createSymbol(
      x,
      y,
      null,
      null,
      -9,
      -9,
      -0.3,
      -0.3,
      function (wrapper) {
        createPath(
          wrapper,
          "M6.37,16.35a.71.71,0,0,0-.16,1,.72.72,0,0,0,1,.17L10.72,15a3.3,3.3,0,1,0,1.43-2.79V3.49a3.36,3.36,0,0,0-6-2.06,3.36,3.36,0,0,0-6,2.06.72.72,0,0,0,1.43,0,1.94,1.94,0,1,1,3.88,0h0v7.4a.71.71,0,1,0,1.42,0V3.49a1.95,1.95,0,0,1,3.89,0h0v9.72Zm5.79-1.44v-.25a1.65,1.65,0,0,1,.07-.32,1.89,1.89,0,1,1-.08.68.37.37,0,0,0,0-.11Z",
          {
            style: "fill: #616161;stroke: #616161;stroke-width: 0px;",
          }
        );
      }
    );
  }

  /*
   * Aquarius symbol path
   * @private
   *
   * @param {int} x
   * @param {int} y
   *
   * @return {SVGPathElement} path
   */
  function aquarius(x, y) {
    return createSymbol(
      x,
      y,
      null,
      null,
      -14,
      -5,
      -0.3,
      -0.3,
      function (wrapper) {
        createPath(
          wrapper,
          "M1.23,12.8l2.7-2.72L6.64,12.8a.66.66,0,0,0,.94,0h0l2.69-2.72L13,12.8a.67.67,0,0,0,.95,0h0l2.7-2.72,2.7,2.72a.66.66,0,0,0,.94-.09.68.68,0,0,0,0-.86L17.09,8.66a.67.67,0,0,0-.95,0h0l-2.7,2.72L10.75,8.66a.67.67,0,0,0-.95,0h0L7.1,11.38,4.41,8.66a.67.67,0,0,0-1,0h0L.29,11.85a.68.68,0,0,0,0,1,.66.66,0,0,0,1,0Z",
          {
            style: "fill: #616161;stroke: #616161;stroke-width: 0px;",
          }
        );
        createPath(
          wrapper,
          "M1.24,4.44,4,1.72,6.69,4.44a.68.68,0,0,0,.95,0h0l2.71-2.72,2.72,2.72a.68.68,0,0,0,.95,0h0l2.71-2.72,2.72,2.72a.67.67,0,0,0,.95-1L17.22.29a.68.68,0,0,0-.95,0h0L13.55,3,10.83.29a.68.68,0,0,0-.95,0h0L7.16,3,4.44.29a.68.68,0,0,0-1,0h0L.29,3.49a.67.67,0,0,0,1,1Z",
          {
            style: "fill: #616161;stroke: #616161;stroke-width: 0px;",
          }
        );
      }
    );
  }

  /*
   * Pisces symbol path
   * @private
   *
   * @param {int} x
   * @param {int} y
   *
   * @return {SVGPathElement} path
   */
  function pisces(x, y) {
    return createSymbol(
      x,
      y,
      null,
      null,
      -8,
      -8,
      -0.3,
      -0.3,
      function (wrapper) {
        createPath(
          wrapper,
          "M16.1,7.62a.74.74,0,0,0-.74-.74H12.41A8.8,8.8,0,0,1,15,1.39a.74.74,0,0,0-1.05-1,10.24,10.24,0,0,0-3,6.54H5.28a10.18,10.18,0,0,0-3-6.54.74.74,0,0,0-1,1A8.79,8.79,0,0,1,3.8,6.88H.87a.74.74,0,0,0-.75.74.75.75,0,0,0,.75.75H3.79a8.76,8.76,0,0,1-2.54,5.48.75.75,0,0,0,0,1.06.74.74,0,0,0,1,0,10.27,10.27,0,0,0,3-6.55h5.65a10.26,10.26,0,0,0,3,6.55A.75.75,0,0,0,15,13.85a8.72,8.72,0,0,1-2.55-5.48h2.94a.75.75,0,0,0,.75-.74Z",
          {
            style: "fill: #616161;stroke: #616161;stroke-width: 0px;",
          }
        );
      }
    );
  }

  /**
   * Draw As symbol
   */
  function ascendant(x, y) {
    return createSymbol(x, y, null, null, 12, -2, 0, 0, function (wrapper) {
      createPath(
        wrapper,
        "m -0.563078,-1.1261527 -1.689228,-0.5630765 -1.689229,0 -1.68923,0.5630765 -0.563076,1.1261527 0.563076,1.12615272 1.126154,0.56307636 2.815381,0.56307635 1.126152,0.56307647 0.563078,1.1261526 0,0.5630763 -0.563078,1.1261528 -1.689228,0.5630764 -1.689229,0 -1.68923,-0.5630764 -0.563076,-1.1261528 m -6.756916,-10.135374 -4.504611,11.8246032 m 4.504611,-11.8246032 4.504611,11.8246032 m -7.3199925,-3.94153457 5.6307625,0",
        {
          stroke: astrology.SYMBOL_AXIS_FONT_COLOR,
          "stroke-width": astrology.SYMBOL_AXIS_STROKE * astrology.SYMBOL_SCALE,
          fill: "none",
        }
      );
    });
  }

  /**
   * Draw Ds symbol
   */

  /*function descendant(x, y) {
        // center symbol
        var xShift = 22; //px
        var yShift = -1; //px
        x = Math.round(x + (xShift * astrology.SYMBOL_SCALE));
        y = Math.round(y + (yShift * astrology.SYMBOL_SCALE));

        var wrapper = document.createElementNS(context.root.namespaceURI, "g");
        wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");

        var node = document.createElementNS(context.root.namespaceURI, "path");
        node.setAttribute("d", "m " + x + ", " + y + " -0.5625,-1.125 -1.6875,-0.5625 -1.6875,0 -1.6875,0.5625 -0.5625,1.125 0.5625,1.125 1.125,0.5625 2.8125,0.5625 1.125,0.5625 0.5625,1.125 0,0.5625 -0.5625,1.125 -1.6875,0.5625 -1.6875,0 -1.6875,-0.5625 -0.5625,-1.125 m -11.25,-10.125 0,11.8125 m 0,-11.8125 3.9375,0 1.6875,0.5625 1.125,1.125 0.5625,1.125 0.5625,1.6875 0,2.8125 -0.5625,1.6875 -0.5625,1.125 -1.125,1.125 -1.6875,0.5625 -3.9375,0");
        node.setAttribute("stroke", astrology.SYMBOL_AXIS_FONT_COLOR);
        node.setAttribute("stroke-width", (astrology.SYMBOL_AXIS_STROKE * astrology.SYMBOL_SCALE));
        node.setAttribute("fill", "none");
        wrapper.appendChild(node);

        return wrapper;
    };*/

  /**
   * Draw MC symbol
   */
  function mediumCoeli(x, y, size, houseDegree) {
    const xShift =
      houseDegree > 180
        ? houseDegree > 300
          ? -5
          : 5
        : houseDegree > 240
        ? -3
        : -5;
    const yShift = 0;

    return createSymbol(
      x,
      y,
      size,
      houseDegree,
      xShift,
      yShift,
      1.2,
      1.25,
      function (wrapper) {
        createExtraSpace(wrapper, -90, -130, 70);

        createPath(
          wrapper,
          "M73.18,129.3c-5.5-1.7-16.3-3.2-20.2-6.2-2.1-1.7-1.8-4.4-2.9-7.2-2.5-6.5-3.1-14.6-6-20.9h-1.4c-1.5,3.1-1.6,6.6-2.6,10.3-.6,2.3-1.7,5.3-2.4,7.7-.9,3.4-1,7.7-3.1,9.8-3.1,3.2-16.1,5.4-21.4,7-2.6.8-8.3.6-7,3.8,6.5,1.4,12.7,3.1,18.7,4.8,4.2,1.2,8.2,1.2,10.3,4.3,1.1,1.7,1,3.5,1.7,5.8,1.4,4.5,2.8,9.9,4.3,14.4.9,2.7.7,4.5,1.9,6.7,2.8-.4,2.3-4.3,3.1-6.7,1.8-5.7,3.3-17,6.5-21.1,1.6-2,4.4-2,7.2-2.9,4.1-1.2,8.7-2.6,12.7-3.8,2.6-.8,5.6-.9,7.7-2.2v-1.7C79.88,130.3,74.48,129.7,73.18,129.3Zm-21.35,8.8c-3,2.4-4.1,8.3-6.5,11.5-3-.2-4.2-7.3-5.8-9.6-2.5-3.7-8.4-4.6-12.2-7a2.57,2.57,0,0,1,.2-1.4c.9-1.8,7.2-3,9.1-4.3,4.1-2.8,4.2-8.9,7.4-12.5h1.2c2.2,3.4,3.4,9,6.5,11.5s7.8,2.9,10.6,5.5C62,134.3,53.93,136.5,51.83,138.1Z",
          {
            style:
              "fill:#EA77DF;fill-rule:evenodd;stroke-width: 2px !important;stroke: #EA77DF;",
            transform: "rotate(180)",
          }
        );
      },
      function (wrapper) {
        if (!size && houseDegree > 180) {
          wrapper.setAttribute(
            "transform",
            wrapper.getAttribute("transform") +
              ` rotate(${(houseDegree * Math.PI) / 180 + 2})`
          );
        } else if (!size) {
          wrapper.setAttribute(
            "transform",
            wrapper.getAttribute("transform") +
              ` rotate(${(-houseDegree * Math.PI) / 180})`
          );
        }
      }
    );
  }

  /**
   * Draw IC symbol
   */

  function immumCoeli(x, y, size) {
    return createSymbol(
      x,
      y,
      size,
      null,
      -2,
      -2,
      size ? 1.25 : 0.5,
      0.5,
      function (wrapper) {
        const fSize = size ? 11 : 13;
        createText(wrapper, "IC", x, y, {
          stroke: "rgb(35, 31, 32)",
          "stroke-width": "0.6",
          "font-size": fSize,
          "font-weight": "bold",
          "font-family": "GothamRegular",
          "dominant-baseline": "central",
        });
      }
    );
  }

  function number(num, x, y, xShift, yShift) {
    x = Math.round(x + xShift * astrology.SYMBOL_SCALE);
    y = Math.round(y + yShift * astrology.SYMBOL_SCALE);

    var wrapper = document.createElementNS(context.root.namespaceURI, "g");
    wrapper.setAttribute(
      "transform",
      "translate(" +
        -x * (astrology.SYMBOL_SCALE - 1) +
        "," +
        -y * (astrology.SYMBOL_SCALE - 1) +
        ") scale(" +
        astrology.SYMBOL_SCALE +
        ")"
    );

    var text = document.createElementNS(context.root.namespaceURI, "text");
    text.setAttribute("x", x);
    text.setAttribute("y", y);
    text.setAttribute(
      "style",
      "font-size:65px !important;font-family:numberFont !important;stroke:#F37BFE;fill:#F37BFE;"
    );
    text.setAttribute("font-family", "GothamRegular");
    text.setAttribute("dominant-baseline", "central");
    text.appendChild(document.createTextNode(num));
    text.setAttribute(
      "transform",
      "translate(" +
        -x * (astrology.SYMBOL_SCALE - 1) +
        "," +
        -y * (astrology.SYMBOL_SCALE - 1) +
        ") scale(" +
        astrology.SYMBOL_SCALE +
        ")"
    );
    return text;
  }
  function number1(x, y) {
    return number("1", x, y, -45, 20);
  }
  function number2(x, y) {
    return number("2", x, y, -40, 35);
  }
  function number3(x, y) {
    return number("3", x, y, -14, 37);
  }
  function number4(x, y) {
    return number("4", x, y, 3, 37);
  }
  function number5(x, y) {
    return number("5", x, y, 25, 30);
  }
  function number6(x, y) {
    return number("6", x, y, 30, 18);
  }
  function number7(x, y) {
    return number("7", x, y, 30, -5);
  }
  function number8(x, y) {
    return number("8", x, y, 25, -25);
  }
  function number9(x, y) {
    return number("9", x, y, 8, -30);
  }
  function number10(x, y) {
    return number("10", x, y, -18, -36);
  }
  function number11(x, y) {
    return number("11", x, y, -45, -30);
  }
  function number12(x, y) {
    return number("12", x, y, -55, 0);
  }

  /**
   * Draw circular sector
   *
   * @param {int} x - circle x center position
   * @param {int} y - circle y center position
   * @param {int} radius - circle radius in px
   * @param {int} a1 - angleFrom in degree
   * @param {int} a2 - angleTo in degree
   * @param {int} thickness - from outside to center in px
   *
   * @return {SVGElement} segment
   *
   * @see SVG Path arc: https://www.w3.org/TR/SVG/paths.html#PathData
   */
  astrology.SVG.prototype.segment = function segment(
    x,
    y,
    radius,
    a1,
    a2,
    thickness,
    lFlag,
    sFlag
  ) {
    // @see SVG Path arc: https://www.w3.org/TR/SVG/paths.html#PathData
    var LARGE_ARC_FLAG = lFlag || 0;
    var SWEET_FLAG = sFlag || 0;

    a1 = (((astrology.SHIFT_IN_DEGREES - a1) % 360) * Math.PI) / 180;
    a2 = (((astrology.SHIFT_IN_DEGREES - a2) % 360) * Math.PI) / 180;

    var segment = document.createElementNS(context.root.namespaceURI, "path");
    segment.setAttribute(
      "d",
      "M " +
        (x + thickness * Math.cos(a1)) +
        ", " +
        (y + thickness * Math.sin(a1)) +
        " l " +
        (radius - thickness) * Math.cos(a1) +
        ", " +
        (radius - thickness) * Math.sin(a1) +
        " A " +
        radius +
        ", " +
        radius +
        ",0 ," +
        LARGE_ARC_FLAG +
        ", " +
        SWEET_FLAG +
        ", " +
        (x + radius * Math.cos(a2)) +
        ", " +
        (y + radius * Math.sin(a2)) +
        " l " +
        (radius - thickness) * -Math.cos(a2) +
        ", " +
        (radius - thickness) * -Math.sin(a2) +
        " A " +
        thickness +
        ", " +
        thickness +
        ",0 ," +
        LARGE_ARC_FLAG +
        ", " +
        1 +
        ", " +
        (x + thickness * Math.cos(a1)) +
        ", " +
        (y + thickness * Math.sin(a1))
    );
    segment.setAttribute("fill", "none");
    return segment;
  };

  /**
   * Draw line in circle
   *
   * @param {int} x1
   * @param {int} y2
   * @param {int} x2
   * @param {int} y2
   * @param {String} color - HTML rgb
   *
   * @return {SVGElement} line
   */
  astrology.SVG.prototype.line = function line(x1, y1, x2, y2, color) {
    var line = document.createElementNS(context.root.namespaceURI, "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);

    return line;
  };

  astrology.SVG.prototype.dashedLine = function dashedLine(
    x1,
    y1,
    x2,
    y2,
    color
  ) {
    var line = document.createElementNS(context.root.namespaceURI, "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke-dasharray", "1px, 5px");
    line.setAttribute("stroke-linecap", "square");

    return line;
  };

  astrology.SVG.prototype.arowHeadLine = function arowHeadLine(
    x1,
    y1,
    x2,
    y2,
    color
  ) {
    var line = document.createElementNS(context.root.namespaceURI, "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);

    line.setAttribute("stroke", astrology.LINE_COLOR);
    line.setAttribute(
      "stroke-width",
      astrology.SYMBOL_AXIS_STROKE * astrology.SYMBOL_SCALE
    );

    line.setAttribute("marker-end", "url(#arrowhead" + color + ")");

    return { line: line };
  };

  /**
   * Draw a circle
   *
   * @param {int} cx
   * @param {int} cy
   * @param {int} radius
   *
   * @return {SVGElement} circle
   */
  astrology.SVG.prototype.circle = function circle(cx, cy, radius) {
    var circle = document.createElementNS(context.root.namespaceURI, "circle");
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", radius);
    circle.setAttribute("fill", "none");
    return circle;
  };

  /**
   * Draw a text
   *
   * @param {String} text
   * @param {int} x
   * @param {int} y
   * @param {String} size - etc. "13px"
   * @param {String} color - HTML rgb
   *
   * @return {SVGElement} text
   */
  astrology.SVG.prototype.text = function text(txt, x, y, size, color) {
    var text = document.createElementNS(context.root.namespaceURI, "text");
    var tspan = document.createElementNS(context.root.namespaceURI, "tspan");
    text.setAttribute("x", x);
    text.setAttribute("y", y);
    text.setAttribute("font-size", size);
    text.setAttribute("fill", color);
    text.setAttribute("font-family", "numberFont !important");
    text.setAttribute("dominant-baseline", "central");
    text.appendChild(document.createTextNode(txt));
    tspan.setAttribute("class", "planetDegree");
    tspan.appendChild(document.createTextNode("°"));
    text.appendChild(tspan);
    text.setAttribute(
      "transform",
      "translate(" +
        -x * (astrology.SYMBOL_SCALE - 1) +
        "," +
        -y * (astrology.SYMBOL_SCALE - 1) +
        ") scale(" +
        astrology.SYMBOL_SCALE +
        ")"
    );
    return text;
  };
})((window.astrology = window.astrology || {}));

// ## CHART ###################################
(function (astrology) {
  /**
   * Displays astrology charts (both dynamic and static).
   *
   * @class
   * @public
   * @constructor
   * @param {String} elementId - root DOMElement
   * @param {int} width
   * @param {int} height
   * @param {Object} settings
   * @param {boolean} isStatic - whether to create a static chart
   */
  astrology.Chart = function (
    elementId,
    width,
    height,
    settings,
    isStatic = false
  ) {
    const config = astrology;

    if (settings) {
      Object.assign(config, settings);
    }

    if (elementId && !document.getElementById(elementId)) {
      const selector = isStatic ? ".chart-image-static" : ".chart-image";
      const paper = document.querySelector(selector);
      paper.setAttribute("id", elementId);
    }

    const svgId = isStatic ? config.ID_CHART_STATIC : config.ID_CHART;
    this.paper = new astrology.SVG(elementId, width, height, svgId);

    this.cx = this.paper.width / 2;
    this.cy = this.paper.height / 2;
    this.radius = this.paper.height / 2 - config.MARGIN;
    this.isStatic = isStatic;

    config.CHART_SIZE = width;

    return this;
  };

  /**
   * Display radix horoscope
   *
   * @param {Object} data
   * * @param {boolean} isWholeSign
   * @example
   *    {
   *		"points":{"Moon":[0], "Sun":[30],  ... },
   *		"cusps":[300, 340, 30, 60, 75, 90, 116, 172, 210, 236, 250, 274]
   *	}
   *
   * @see https://github.com/Kibo/AstroWebService
   *
   * @return {astrology.Radix} radix
   */
  astrology.Chart.prototype.radix = function (data, isWholeSign) {
    //data.planets.Descendant[0] = astrology.utils.fix(360, data.planets.Descendant[0] + 180);
    //data.planets.Ic[0] = astrology.utils.fix(360, data.planets.Ic[0] + 180);
    //data.planets.SNode[0] = astrology.utils.fix(360, data.planets.NNode[0] + 180);

    var radix = new astrology.Radix(
      this.paper,
      this.cx,
      this.cy,
      this.radius,
      data,
      this.isStatic
    );

    radix.drawBg();
    radix.drawCircles();
    radix.drawUniverse();
    radix.drawCusps();
    radix.drawPoints();
    radix.drawAxis();
    radix.drawInnerRuler();
    if (this.isStatic) {
      radix.aspects();
    } else {
      var $input = document.querySelectorAll(".planets");

      for (var i = 0; i < $input.length; i++) {
        (function (i) {
          $input[i].addEventListener("mouseover", function (e) {
            $(this).addClass("planet-hover");
          });
          $input[i].addEventListener("mouseout", function (e) {
            $(this).removeClass("planet-hover");
          });
          $input[i].addEventListener("mousedown", function (e) {
            var el = document.getElementById("astrology-radix-aspects");

            if (el) {
              var parent = el.parentNode;
              parent.removeChild(el);
            }

            data.aspect_planets = [];
            data.aspect_planets[this.getAttribute("data")] =
              data.planets[this.getAttribute("data")];

            radix.aspects(data.aspect_planets, isWholeSign);
          });
        })(i);
      }
    }

    return radix;
  };

  /**
   * Scale chart
   *
   * @param {int} factor
   */
  astrology.Chart.prototype.scale = function (factor) {
    this.paper.root.setAttribute(
      "transform",
      "translate(" +
        -this.cx * (factor - 1) +
        "," +
        -this.cy * (factor - 1) +
        ") scale(" +
        factor +
        ")"
    );
  };

  /**
   * Draw the symbol on the axis.
   * For debug only.
   *
   */
  astrology.Chart.prototype.calibrate = function calibrate() {
    var positions, circle, line;
    var startRadius = 60;

    var planets = [
      "Sun",
      "Moon",
      "Mercury",
      "Venus",
      "Mars",
      "Jupiter",
      "Saturn",
      "Uranus",
      "Neptune",
      "Pluto",
      "Chiron",
      "Lilith",
      "NNode",
      "SNode",
    ];

    for (var i = 0; i < planets.length; i++) {
      positions = astrology.utils.getPointPosition(
        this.cx,
        this.cy,
        this.radius * 2,
        i * 30
      );

      line = this.paper.line(this.cx, this.cy, positions.x, positions.y);
      line.setAttribute("stroke", astrology.LINE_COLOR);
      this.paper.root.appendChild(line);

      circle = this.paper.circle(
        this.cx,
        this.cy,
        startRadius + startRadius * i
      );
      circle.setAttribute("stroke", astrology.LINE_COLOR);
      circle.setAttribute("stroke-width", 1);
      this.paper.root.appendChild(circle);
    }

    for (var n = 0, ln = planets.length; n < ln; n++) {
      var radius = startRadius + startRadius * n;

      for (var i = 0; i < 12; i++) {
        positions = astrology.utils.getPointPosition(
          this.cx,
          this.cy,
          radius,
          i * 30
        );

        circle = this.paper.circle(
          positions.x,
          positions.y,
          astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE
        );
        circle.setAttribute("stroke", "red");
        circle.setAttribute("stroke-width", 1);
        this.paper.root.appendChild(circle);

        this.paper.root.appendChild(
          this.paper.getSymbol(planets[n], positions.x, positions.y)
        );
      }
    }

    return this;
  };
})((window.astrology = window.astrology || {}));

// ## Radix chart ###################################
(function (astrology) {
  var context;

  /**
   * Radix charts.
   *
   * @class
   * @public
   * @constructor
   * @param {astrology.SVG} paper
   * @param {int} cx
   * @param {int} cy
   * @param {int} radius
   * @param {Object} data
   */
  astrology.Radix = function (paper, cx, cy, radius, data, isStatic) {
    // Validate data
    var status = astrology.utils.validate(data);
    if (status.hasError) {
      throw new Error(status.messages);
    }

    this.data = data;
    this.paper = paper;
    this.cx = cx;
    this.cy = cy;
    this.radius = radius;
    this.isStatic = isStatic;
    // after calling this.drawPoints() it contains current position of point
    this.locatedPoints = [];
    this.rulerRadius =
      this.radius /
      astrology.INNER_CIRCLE_RADIUS_RATIO /
      astrology.RULER_RADIUS;
    this.pointRadius =
      this.radius -
      (this.radius / astrology.INNER_CIRCLE_RADIUS_RATIO +
        2 * this.rulerRadius +
        astrology.PADDING * astrology.SYMBOL_SCALE);

    //@see astrology.Radix.prototype.aspects()
    //@see astrology.Radix.prototype.setPointsOfInterest()
    this.toPoints = JSON.parse(JSON.stringify(this.data.planets)); // Clone object

    this.shift = 0;
    if (this.data.cusps && this.data.cusps[0]) {
      var deg360 = astrology.utils.radiansToDegree(2 * Math.PI);
      this.shift = deg360 - this.data.cusps[0];
    }

    // preparing wrapper for aspects. It is the lowest layer
    //var divisionForAspects = document.createElementNS(this.paper.root.namespaceURI, "g");
    //divisionForAspects.setAttribute('id', astrology.ID_CHART + "-" + astrology.ID_ASPECTS);
    //this.paper.root.appendChild(divisionForAspects);

    this.universe = document.createElementNS(this.paper.root.namespaceURI, "g");
    this.universe.setAttribute(
      "id",
      isStatic
        ? astrology.ID_CHART_STATIC
        : astrology.ID_CHART + "-" + astrology.ID_RADIX
    );
    this.paper.root.appendChild(this.universe);

    context = this;

    return this;
  };

  /**
   * Draw background
   */
  astrology.Radix.prototype.drawBg = function () {
    var universe = this.universe;
    var wrapper = astrology.utils.getEmptyWrapper(
      universe,
      this.isStatic
        ? astrology.ID_CHART_STATIC
        : astrology.ID_CHART + "-" + astrology.ID_BG
    );

    var LARGE_ARC_FLAG = 1;
    var start = 0; //degree
    var end = 359.99; //degree
    var hemisphere = this.paper.segment(
      this.cx,
      this.cy,
      this.radius - this.radius / astrology.INNER_CIRCLE_RADIUS_RATIO,
      start,
      end,
      this.radius / astrology.INDOOR_CIRCLE_RADIUS_RATIO,
      LARGE_ARC_FLAG
    );
    //hemisphere.setAttribute("fill", astrology.STROKE_ONLY ? "none" : astrology.COLOR_BACKGROUND);
    hemisphere.setAttribute("fill", "transparent");
    wrapper.appendChild(hemisphere);
  };

  /**
   * Draw universe.
   */
  astrology.Radix.prototype.drawUniverse = function () {
    var universe = this.universe;
    var wrapper = astrology.utils.getEmptyWrapper(
      universe,
      this.isStatic
        ? astrology.ID_CHART_STATIC
        : astrology.ID_CHART +
            "-" +
            astrology.ID_RADIX +
            "-" +
            astrology.ID_SIGNS
    );

    //var zodiac_data = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn ', 'Aquarius ', 'Pisces'];
    var zodiac_data = [
      astrology.utils.getSignNumber(this.data.cusps[0]),
      astrology.utils.getSignNumber(this.data.cusps[1]),
      astrology.utils.getSignNumber(this.data.cusps[2]),
      astrology.utils.getSignNumber(this.data.cusps[3]),
      astrology.utils.getSignNumber(this.data.cusps[4]),
      astrology.utils.getSignNumber(this.data.cusps[5]),
      astrology.utils.getSignNumber(this.data.cusps[6]),
      astrology.utils.getSignNumber(this.data.cusps[7]),
      astrology.utils.getSignNumber(this.data.cusps[8]),
      astrology.utils.getSignNumber(this.data.cusps[9]),
      astrology.utils.getSignNumber(this.data.cusps[10]),
      astrology.utils.getSignNumber(this.data.cusps[11]),
    ];

    for (
      var i = 0,
        step = 30,
        start = this.shift,
        len = astrology.COLORS_SIGNS.length;
      i < len;
      i++
    ) {
      var position = astrology.utils.getPointPosition(
        this.cx,
        this.cy,
        this.radius,
        this.shift
      );

      var segment = this.paper.segment(
        this.cx,
        this.cy,
        this.radius,
        start,
        start + step,
        this.radius - this.radius / astrology.INNER_CIRCLE_RADIUS_RATIO
      );

      segment.setAttribute("fill", "red");
      segment.setAttribute(
        "fill",
        astrology.STROKE_ONLY ? "none" : astrology.COLORS_SIGNS[i]
      );
      segment.setAttribute("stroke", "rgba(55,71,79 ,0.6)");
      //segment.setAttribute("stroke", astrology.LINE_COLOR);
      segment.setAttribute(
        "stroke-width",
        astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE
      );
      segment.setAttribute("id", "zodiac-path" + i);
      segment.setAttribute("class", "cusp-attr");
      segment.setAttribute("data", zodiac_data.indexOf(i));

      wrapper.appendChild(segment);

      var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      var textPath = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "textPath"
      );
      var tspan = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "tspan"
      );

      //textPath.setAttribute("transform", "translate(" + (position.x) + "," + (position.y) + ") scale(" + astrology.SYMBOL_SCALE + ")");
      textPath.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        "#zodiac-path" + i
      );

      text.setAttribute("class", "cusp-attr");
      text.setAttribute("data", zodiac_data.indexOf(i));

      textPath.setAttribute("stroke-width", "0.1");
      textPath.setAttribute("stroke", "#231f20");
      textPath.setAttribute("fill", "#231f20");

      var firstHouseSign = astrology.utils.getSignNumber(this.data.cusps[0]);

      var reverseString = [
        firstHouseSign,
        astrology.utils.fix(12, firstHouseSign + 1),
        astrology.utils.fix(12, firstHouseSign + 2),
        astrology.utils.fix(12, firstHouseSign + 3),
        astrology.utils.fix(12, firstHouseSign + 4),
        astrology.utils.fix(12, firstHouseSign + 5),
      ];

      if (reverseString.indexOf(i) >= 0) {
        textPath.setAttribute("x", position.x);
        textPath.setAttribute("y", position.y);
        textPath.setAttribute("text-anchor", "middle");
        textPath.setAttribute("startOffset", "32%");
        tspan.setAttribute("dy", -astrology.chart_width / 32);
        tspan.setAttribute("dx", "6px");

        text.setAttribute("letter-spacing", "3");
      } else {
        textPath.setAttribute("text-anchor", "middle");
        textPath.setAttribute("startOffset", astrology.chart_width / 27);
        //tspan.setAttribute('dy','-25px');
        tspan.setAttribute("dy", -astrology.chart_width / 30);
        tspan.setAttribute("dx", astrology.chart_width / 2);

        text.setAttribute("letter-spacing", "1");
      }
      if (reverseString[0] === i) {
        //tspan.setAttribute('dx','10px');
      }

      /*if(reverseString[0] === i)
            {
                tspan.appendChild(document.createTextNode((astrology.SYMBOL_SIGNS[i].toUpperCase()+ ' RISING')));
                tspan.setAttribute('dx','12px');

                if(i=== 8 || i===9)
                {
                    textPath.setAttribute('font-size', astrology.chart_width/54+'px');
                }
                else
                {
                    textPath.setAttribute('font-size', astrology.chart_width/44+'px');
                }

            }
            else {
                tspan.appendChild(document.createTextNode((astrology.SYMBOL_SIGNS[i].toUpperCase())));
                textPath.setAttribute('font-size', astrology.chart_width/44+'px');

            }*/

      tspan.appendChild(
        document.createTextNode(astrology.SYMBOL_SIGNS[i].toLowerCase())
      );
      textPath.setAttribute("font-size", astrology.chart_width / 18 + "px");

      textPath.appendChild(tspan);
      text.appendChild(textPath);
      wrapper.appendChild(text);

      start += step;
    }
  };

  /**
   * Draw points
   */
  astrology.Radix.prototype.drawPoints = function () {
    if (this.data.planets == null) {
      return;
    }

    var universe = this.universe;
    var wrapper = astrology.utils.getEmptyWrapper(
      universe,
      this.isStatic
        ? astrology.ID_CHART_STATIC
        : astrology.ID_CHART +
            "-" +
            astrology.ID_RADIX +
            "-" +
            astrology.ID_POINTS
    );

    var gap =
      this.radius -
      (this.radius / astrology.INNER_CIRCLE_RADIUS_RATIO +
        this.radius / astrology.INDOOR_CIRCLE_RADIUS_RATIO);
    var step =
      (gap - 2 * (astrology.PADDING * astrology.SYMBOL_SCALE)) /
      Object.keys(this.data.planets).length;

    var pointerRadius =
      this.radius - this.radius / astrology.INNER_CIRCLE_RADIUS_RATIO;

    var startPosition, endPosition;

    for (var planet in this.data.planets) {
      if (this.data.planets.hasOwnProperty(planet)) {
        var position = astrology.utils.getPointPosition(
          this.cx,
          this.cy,
          this.radius - this.radius / astrology.OUTER_CIRCLE_RADIUS_RATIO,
          this.data.planets[planet][0] + this.shift
        );
        var point = {
          name: planet,
          x: position.x,
          y: position.y,
          r: astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE,
          angle: this.data.planets[planet][0] + this.shift,
          pointer: this.data.planets[planet][0] + this.shift,
          degree: this.data.planets[planet][0],
          norm_degree: astrology.utils.fix(30, this.data.planets[planet][0]),
        };
        if (this.locatedPoints.length > 17) {
          this.locatedPoints = [];
        }
        this.locatedPoints = astrology.utils.assemble(
          this.locatedPoints,
          point,
          {
            cx: this.cx,
            cy: this.cy,
            r: this.pointRadius,
          }
        );
      }
    }

    if (astrology.DEBUG)
      console.log("Radix count of points: " + this.locatedPoints.length);
    if (astrology.DEBUG)
      console.log(
        "Radix located points:\n" + JSON.stringify(this.locatedPoints)
      );

    this.locatedPoints.forEach(function (point) {
      // draw pointer
      startPosition = astrology.utils.getPointPosition(
        this.cx,
        this.cy,
        pointerRadius,
        this.data.planets[point.name][0] + this.shift
      );
      endPosition = astrology.utils.getPointPosition(
        this.cx,
        this.cy,
        pointerRadius - this.rulerRadius / 1.4,
        this.data.planets[point.name][0] + this.shift
      );
      var pointer = this.paper.line(
        startPosition.x,
        startPosition.y,
        endPosition.x,
        endPosition.y
      );
      pointer.setAttribute("stroke", astrology.CIRCLE_COLOR);

      var pointerRadius1 = this.radius - this.radius / 2.5;

      if (
        this.data.planets[point.name][2] >= 9 ||
        this.data.planets[point.name][2] <= 3 ||
        this.data.planets[point.name][2] === 0
      ) {
        pointerRadius1 = this.radius - this.radius / 2.7;
      }

      if (astrology.CHART_SIZE <= 600) {
        pointer.setAttribute("stroke-width", 0.5);
      } else {
        pointer.setAttribute("stroke-width", 1.6);
      }

      wrapper.appendChild(pointer);
      var symbol;

      // draw pointer line
      if (
        !astrology.STROKE_ONLY &&
        this.data.planets[point.name][0] + this.shift != point.angle
      ) {
        startPosition = endPosition;
        endPosition = astrology.utils.getPointPosition(
          this.cx,
          this.cy,
          this.pointRadius +
            astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE,
          point.angle
        );
        var line = this.paper.line(
          startPosition.x,
          startPosition.y,
          endPosition.x,
          endPosition.y
        );
        line.setAttribute("stroke", astrology.LINE_COLOR);
        line.setAttribute(
          "stroke-width",
          0.5 * (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE)
        );
        wrapper.appendChild(line);
      }

      startPosition = astrology.utils.getPointPosition(
        this.cx,
        this.cy,
        pointerRadius1,
        this.data.planets[point.name][0] + this.shift
      );
      endPosition = astrology.utils.getPointPosition(
        this.cx,
        this.cy,
        pointerRadius1,
        this.data.planets[point.name][0] + this.shift
      );

      // draw symbol
      var McPosition = astrology.utils.getPointPosition(
        this.cx,
        this.cy,
        pointerRadius,
        this.data.cusps[9] + this.shift
      );
      var AscPosition = astrology.utils.getPointPosition(
        this.cx,
        this.cy,
        pointerRadius - 25,
        this.data.cusps[0] + this.shift
      );

      if (this.data.planets[point.name][1] >= 4) {
        if (point.name === "Mc") {
          startPosition = astrology.utils.getPointPosition(
            this.cx,
            this.cy,
            pointerRadius1,
            this.data.planets[point.name][0] + 2 + this.shift
          );
        } else if (point.name === "Ascendant") {
          startPosition = astrology.utils.getPointPosition(
            this.cx,
            this.cy,
            pointerRadius1 + 5,
            this.data.planets[point.name][0] + this.shift
          );
          symbol = this.paper.getSymbol(
            point.name,
            AscPosition.x,
            AscPosition.y,
            false,
            this.data.planets[point.name][2]
          );
        } else {
          symbol = this.paper.getSymbol(
            point.name,
            point.x,
            point.y,
            true,
            this.data.planets[point.name][2]
          );
        }
      } else {
        if (point.name === "Mc") {
          startPosition = astrology.utils.getPointPosition(
            this.cx,
            this.cy,
            pointerRadius1,
            this.data.planets[point.name][0] + 2 + this.shift
          );
        } else if (point.name === "Ascendant") {
          startPosition = astrology.utils.getPointPosition(
            this.cx,
            this.cy,
            pointerRadius1 + 5,
            this.data.planets[point.name][0] + this.shift
          );
          symbol = this.paper.getSymbol(
            point.name,
            AscPosition.x,
            AscPosition.y,
            false,
            this.data.planets[point.name][2]
          );
        } else {
          symbol = this.paper.getSymbol(
            point.name,
            point.x,
            point.y,
            false,
            this.data.planets[point.name][2]
          );
        }
      }

      var textsToShow = [
        astrology.utils.DMS(this.data.planets[point.name][0]).deg + "",
      ];

      var pointDescriptions;

      if (this.data.planets[point.name][1] >= 4) {
        pointDescriptions = astrology.utils.getDescriptionPosition(
          point,
          textsToShow,
          true,
          this.data.planets[point.name][2]
        );
      } else {
        pointDescriptions = astrology.utils.getDescriptionPosition(
          point,
          textsToShow,
          false,
          this.data.planets[point.name][2]
        );
      }

      pointDescriptions.forEach(function (dsc) {
        if (astrology.CHART_SIZE <= 600) {
          if (point.collision) {
            wrapper.appendChild(
              this.paper.text(
                dsc.text,
                startPosition.x - 5,
                startPosition.y - 10,
                25,
                astrology.POINTS_COLOR
              )
            );
          } else {
            wrapper.appendChild(
              this.paper.text(
                dsc.text,
                startPosition.x,
                startPosition.y,
                25,
                astrology.POINTS_COLOR
              )
            );
          }
        } else {
          if (point.collision) {
            wrapper.appendChild(
              this.paper.text(
                dsc.text,
                startPosition.x - 5,
                startPosition.y - 10,
                30,
                astrology.POINTS_COLOR
              )
            );
          } else {
            wrapper.appendChild(
              this.paper.text(
                dsc.text,
                startPosition.x,
                startPosition.y,
                30,
                astrology.POINTS_COLOR
              )
            );
          }
        }
      }, this);

      if (point.name === "Mc") {
        return;
      }

      symbol.setAttribute(
        "id",
        this.isStatic
          ? astrology.ID_CHART_STATIC
          : astrology.ID_CHART +
              "-" +
              astrology.ID_RADIX +
              "-" +
              astrology.ID_POINTS +
              "-" +
              point.name
      );
      symbol.setAttribute("class", "planets");
      symbol.setAttribute("data", point.name);
      wrapper.appendChild(symbol);
    }, this);
  };

  astrology.Radix.prototype.drawAxis = function () {
    if (this.data.cusps == null) {
      return;
    }

    var universe = this.universe;
    var wrapper = astrology.utils.getEmptyWrapper(
      universe,
      this.isStatic
        ? astrology.ID_CHART_STATIC
        : astrology.ID_CHART +
            "-" +
            astrology.ID_RADIX +
            "-" +
            astrology.ID_AXIS
    );

    var axisRadius =
      this.radius + this.radius / astrology.INNER_CIRCLE_RADIUS_RATIO / 4;

    var AS = 0;
    var IC = 3;
    var DC = 6;
    var MC = 9;
    var overlapLine, startPosition, endPosition, line, lines;

    [AS, IC, DC, MC].forEach(function (i) {
      // overlap
      startPosition = astrology.utils.getPointPosition(
        this.cx,
        this.cy,
        this.radius,
        this.data.cusps[i] + this.shift
      );
      endPosition = astrology.utils.getPointPosition(
        this.cx,
        this.cy,
        axisRadius,
        this.data.cusps[i] + this.shift
      );
      overlapLine = this.paper.line(
        startPosition.x,
        startPosition.y,
        endPosition.x,
        endPosition.y
      );
      overlapLine.setAttribute("stroke", astrology.LINE_COLOR);
      overlapLine.setAttribute(
        "stroke-width",
        astrology.SYMBOL_AXIS_STROKE * astrology.SYMBOL_SCALE
      );
      //wrapper.appendChild(overlapLine);

      // As
      if (i == AS) {
        // Text
        textPosition = astrology.utils.getPointPosition(
          this.cx,
          this.cy,
          axisRadius + 20 * astrology.SYMBOL_SCALE,
          this.data.cusps[i] + this.shift
        );

        var xShift = -5; //px
        var yShift = 0; //px
        var x = textPosition.x;
        var y = textPosition.y;
        x = Math.round(x + xShift * astrology.SYMBOL_SCALE);
        y = Math.round(y + yShift * astrology.SYMBOL_SCALE);

        var text = this.paper.text(
          "AS",
          x,
          y,
          astrology.AXIS_FONT_SIZE,
          astrology.SYMBOL_AXIS_FONT_COLOR
        );
        //wrapper.appendChild(text);
      }

      // Ds
      if (i == DC) {
        // Text
        textPosition = astrology.utils.getPointPosition(
          this.cx,
          this.cy,
          axisRadius + 2 * astrology.SYMBOL_SCALE,
          this.data.cusps[i] + this.shift
        );

        var xShift = 5; //px
        var yShift = 0; //px
        var x = textPosition.x;
        var y = textPosition.y;
        x = Math.round(x + xShift * astrology.SYMBOL_SCALE);
        y = Math.round(y + yShift * astrology.SYMBOL_SCALE);

        var text = this.paper.text(
          "DS",
          x,
          y,
          astrology.AXIS_FONT_SIZE,
          astrology.SYMBOL_AXIS_FONT_COLOR
        );
        //wrapper.appendChild(text);
      }

      // Ic
      if (i == IC) {
        // Text
        textPosition = astrology.utils.getPointPosition(
          this.cx,
          this.cy,
          axisRadius + 10 * astrology.SYMBOL_SCALE,
          this.data.cusps[i] - 2 + this.shift
        );

        var xShift = 5; //px
        var yShift = 0; //px
        var x = textPosition.x;
        var y = textPosition.y;
        x = Math.round(x + xShift * astrology.SYMBOL_SCALE);
        y = Math.round(y + yShift * astrology.SYMBOL_SCALE);

        var text = this.paper.text(
          "IC",
          x,
          y,
          astrology.AXIS_FONT_SIZE,
          astrology.SYMBOL_AXIS_FONT_COLOR
        );
        //wrapper.appendChild(text);
      }

      // Mc
      if (i == MC) {
        // Text
        textPosition = astrology.utils.getPointPosition(
          this.cx,
          this.cy,
          axisRadius - 80,
          this.data.cusps[i] + 2 + this.shift
        );

        var xShift = 3; //px
        var yShift = -3; //px
        var x = textPosition.x;
        var y = textPosition.y;
        x = Math.round(x + xShift * astrology.SYMBOL_SCALE);
        y = Math.round(y + yShift * astrology.SYMBOL_SCALE);

        var symbol = this.paper.getSymbol(
          "Mc",
          x,
          y,
          false,
          this.data.cusps[i]
        );
        //var text = this.paper.text('MC', x, y, astrology.AXIS_FONT_SIZE, astrology.SYMBOL_AXIS_FONT_COLOR);
        symbol.setAttribute(
          "id",
          astrology.ID_CHART +
            "-" +
            astrology.ID_RADIX +
            "-" +
            astrology.ID_POINTS +
            "-Mc"
        );
        symbol.setAttribute("class", "planets");
        symbol.setAttribute("data", "Mc");
        wrapper.appendChild(symbol);
      }
    }, this);
  };

  /**
   * Draw cusps
   */
  astrology.Radix.prototype.drawCusps = function () {
    if (this.data.cusps == null) {
      return;
    }

    var startPosition, endPosition, lines, line, AscLine;
    var universe = this.universe;
    var wrapper = astrology.utils.getEmptyWrapper(
      universe,
      this.isStatic
        ? astrology.ID_CHART_STATIC
        : astrology.ID_CHART +
            "-" +
            astrology.ID_RADIX +
            "-" +
            astrology.ID_CUSPS
    );

    var numbersRadius = this.radius / astrology.RULER_RADIUS;

    var AS = 0;
    var IC = 3;
    var DC = 6;
    var MC = 9;
    var mainAxis = [AS, IC, DC, MC];

    //draw Ascendant line
    /*AscLine = astrology.utils.getDashedLinesPositions(
            this.cx,
            this.cy,
            this.data.planets.Ascendant[0] + this.shift,
            (this.radius) / astrology.INNER_CIRCLE_RADIUS_RATIO * 2.6,
            -(this.radius) / astrology.INNER_CIRCLE_RADIUS_RATIO * 2.6,
            this.pointRadius,
            this.locatedPoints
        );*/

    /*AscLine.forEach(function (line) {

            line = this.paper.dashedLine(line.startX, line.startY, line.endX, line.endY);
            line.setAttribute("stroke", '#231f20');

            if (mainAxis.indexOf(i) != -1) {
                line.setAttribute("stroke-width", (astrology.SYMBOL_AXIS_STROKE * astrology.SYMBOL_SCALE));
                //line.setAttribute("stroke-width", 1.7);
            } else {
                line.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
            }

            wrapper.appendChild(line);

        }, this);*/

    //Cusps
    var extraRadius = 3;

    if (astrology.CHART_SIZE <= 600) {
      extraRadius = 5;
    } else if (astrology.CHART_SIZE > 600 && astrology.CHART_SIZE <= 800) {
      extraRadius = 3;
    } else if (astrology.CHART_SIZE > 800 && astrology.CHART_SIZE <= 900) {
      extraRadius = 0;
    } else if (astrology.CHART_SIZE > 900 && astrology.CHART_SIZE <= 1000) {
      extraRadius = -3;
    } else if (astrology.CHART_SIZE > 1000 && astrology.CHART_SIZE <= 11000) {
      extraRadius = -5;
    } else if (astrology.CHART_SIZE > 1100) {
      extraRadius = 0;
    }

    for (var i = 0, ln = this.data.cusps.length; i < ln; i++) {
      // Draws a dashed line when an point is in the way
      lines = astrology.utils.getDashedLinesPositions(
        this.cx,
        this.cy,
        this.data.cusps[i] + this.shift,
        this.radius / astrology.INNERMOST_CIRCLE_RADIUS_RATIO + extraRadius,
        this.radius - this.radius / astrology.INNER_CIRCLE_RADIUS_RATIO,
        this.pointRadius,
        this.locatedPoints
      );

      lines.forEach(function (line) {
        line = this.paper.line(line.startX, line.startY, line.endX, line.endY);
        line.setAttribute("stroke", astrology.LINE_COLOR);

        if (mainAxis.indexOf(i) != -1) {
          line.setAttribute(
            "stroke-width",
            astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE
          );
        } else {
          line.setAttribute(
            "stroke-width",
            astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE
          );
        }

        wrapper.appendChild(line);
      }, this);

      // Cup number
      var deg360 = astrology.utils.radiansToDegree(2 * Math.PI);
      var startOfCusp = this.data.cusps[i];
      var endOfCusp = this.data.cusps[(i + 1) % 12];
      var gap =
        endOfCusp - startOfCusp > 0
          ? endOfCusp - startOfCusp
          : endOfCusp - startOfCusp + deg360;
      var textPosition = astrology.utils.getPointPosition(
        this.cx,
        this.cy,
        numbersRadius,
        ((startOfCusp + gap / 2) % deg360) + this.shift
      );
      wrapper.appendChild(
        this.paper.getSymbol((i + 1).toString(), textPosition.x, textPosition.y)
      );
      //wrapper.appendChild(this.paper.text((i + 1), textPosition.x, dsc.y, astrology.POINTS_TEXT_SIZE, astrology.POINTS_COLOR));

      var house = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      var segment = this.paper.segment(
        this.cx,
        this.cy,
        this.radius -
          (this.radius / astrology.INNER_CIRCLE_RADIUS_RATIO +
            this.rulerRadius),
        this.data.cusps[i] + this.shift,
        endOfCusp + this.shift,
        this.radius - this.radius / astrology.INDOOR_CIRCLE_RADIUS_RATIO
      );
      segment.setAttribute("fill", "transparent");
      segment.setAttribute("class", "cusp-attr");
      segment.setAttribute("data", house[i]);

      wrapper.appendChild(segment);
    }
  };

  /**
   * Draw aspects
   * @param{Array<Object> | null} customAspects - posible custom aspects to draw;
   */
  astrology.Radix.prototype.aspects = function (
    customAspects,
    isWholeSignHouse
  ) {
    var aspectsList =
      customAspects != null && customAspects
        ? new astrology.AspectCalculator(this.toPoints).radix(
            customAspects,
            isWholeSignHouse,
            this.data.cusps
          )
        : new astrology.AspectCalculator(this.toPoints).radix(
            this.data.planets,
            isWholeSignHouse,
            this.data.cusps
          );

    var universe = this.universe;
    var wrapper = astrology.utils.getEmptyWrapper(
      universe,
      this.isStatic
        ? astrology.ID_CHART_STATIC
        : astrology.ID_CHART +
            "-" +
            astrology.ID_RADIX +
            "-" +
            astrology.ID_ASPECTS
    );
    wrapper.setAttribute("fill", "red");

    var duplicateCheck = [];
    var path = null;

    var svgBody = document.getElementById("astrology-radix-planets");
    svgBody.classList.add("planets-clicked");

    var planets = [
      "Sun",
      "Moon",
      "Mars",
      "Mercury",
      "Jupiter",
      "Venus",
      "Saturn",
      "Uranus",
      "Neptune",
      "Pluto",
      "Chiron",
      "NNode",
      "SNode",
      "Ascendant",
      "Descendant",
      "Mc",
      "Ic",
    ];

    for (var i = 0; i < planets.length; i++) {
      $("#astrology-radix-planets-" + planets[i]).removeClass(
        "planets-deselected"
      );
    }

    var aspectNode = document.getElementById(
      "astrology-radix-planets-" + aspectsList[0].point.name
    );

    aspectNode.classList.remove("planets-deselected");
    aspectNode.classList.add("planets-deselected");

    for (var i = 0, ln = aspectsList.length; i < ln; i++) {
      if (
        (aspectsList[i].point.name == "Ascendant" &&
          aspectsList[i].toPoint.name == "Descendant") ||
        (aspectsList[i].point.name == "Descendant" &&
          aspectsList[i].toPoint.name == "Ascendant")
      ) {
        continue;
      }

      if (
        (aspectsList[i].point.name == "Mc" &&
          aspectsList[i].toPoint.name == "Ic") ||
        (aspectsList[i].point.name == "Ic" &&
          aspectsList[i].toPoint.name == "Mc")
      ) {
        continue;
      }

      if (
        (aspectsList[i].point.name == "SNode" &&
          aspectsList[i].toPoint.name == "NNode") ||
        (aspectsList[i].point.name == "NNode" &&
          aspectsList[i].toPoint.name == "SNode")
      ) {
        continue;
      }

      var element = document.getElementById(
        "astrology-radix-planets-" + aspectsList[i].toPoint.name
      );

      //element.classList.add("planets-deselected");

      var key =
        aspectsList[i].aspect.name +
        "-" +
        aspectsList[i].point.name +
        "-" +
        aspectsList[i].toPoint.name;
      var opositeKey =
        aspectsList[i].aspect.name +
        "-" +
        aspectsList[i].toPoint.name +
        "-" +
        aspectsList[i].point.name;

      if (duplicateCheck.indexOf(opositeKey) == -1) {
        duplicateCheck.push(key);

        var startPoint = astrology.utils.getPointPosition(
          this.cx,
          this.cy,
          this.radius / astrology.INDOOR_CIRCLE_RADIUS_RATIO,
          aspectsList[i].toPoint.position + this.shift
        );
        var endPoint = astrology.utils.getPointPosition(
          this.cx,
          this.cy,
          this.radius / astrology.INDOOR_CIRCLE_RADIUS_RATIO,
          aspectsList[i].point.position + this.shift
        );

        var lines = this.paper.arowHeadLine(
          endPoint.x,
          endPoint.y,
          startPoint.x,
          startPoint.y,
          aspectsList[i].aspect.color
        );
        var line = lines.line;

        line.setAttribute(
          "stroke",
          astrology.STROKE_ONLY
            ? astrology.LINE_COLOR
            : aspectsList[i].aspect.color
        );
        line.setAttribute("stroke-width", 2.2);
        line.setAttribute("class", "custom-aspects-" + i);

        wrapper.appendChild(line);

        path = document.querySelector(".custom-aspects-" + i);
        var lineObj = $(".custom-aspects-" + i).get(0);
        var len = astrology.utils.distance(
          lineObj.x1.baseVal.value,
          lineObj.x2.baseVal.value,
          lineObj.y1.baseVal.value,
          lineObj.y2.baseVal.value
        );

        $(path).css({
          "stroke-dasharray": len + 1,
          "stroke-dashoffset": len + 1,
        });

        $(path).animate({ "stroke-dashoffset": 0 }, 1000, mina.bounce);
      }
    }

    // this
    return context;
  };

  /**
   * Add points of interest for aspects calculation
   * @param {Obect} points, {"As":[0],"Ic":[90],"Ds":[180],"Mc":[270]}
   * @see (astrology.AspectCalculator( toPoints) )
   */
  astrology.Radix.prototype.addPointsOfInterest = function (points) {
    for (point in points) {
      this.toPoints[point] = points[point];
    }

    return context;
  };

  astrology.Radix.prototype.drawInnerRuler = function drawInnerRuler() {
    var universe = this.universe;
    var wrapper = astrology.utils.getEmptyWrapper(
      universe,
      astrology.ID_CHART + "-" + astrology.ID_RADIX + "-" + astrology.ID_RULER
    );

    var rulerRadius = this.radius / astrology.RULER_RADIUS_1;
    var pointRadius =
      this.radius -
      (this.radius / astrology.INNERMOST_CIRCLE_RADIUS_RATIO +
        2 * rulerRadius +
        astrology.PADDING * astrology.SYMBOL_SCALE);

    //var startRadius = 40;
    var startRadius =
      this.radius -
      (this.radius / astrology.INNER_CIRCLE_RADIUS_RATIO + this.pointRadius);
    var rays = astrology.utils.getRulerPositions(
      this.cx,
      this.cy,
      startRadius,
      22,
      this.shift,
      72
    );

    var circle;
    circle = this.paper.circle(this.cx, this.cy, startRadius);
    //circle.setAttribute("stroke", astrology.CIRCLE_COLOR);
    circle.setAttribute("stroke", "#202020");
    circle.setAttribute("stroke-width", 1);
    circle.setAttribute("fill", "transparent");

    wrapper.appendChild(circle);
  };

  astrology.Radix.prototype.drawRuler = function drawRuler() {
    var universe = this.universe;
    var wrapper = astrology.utils.getEmptyWrapper(
      universe,
      this.isStatic
        ? astrology.ID_CHART_STATIC
        : astrology.ID_CHART +
            "-" +
            astrology.ID_RADIX +
            "-" +
            astrology.ID_RULER +
            "-innermost"
    );

    var startRadius =
      this.radius -
      (this.radius / astrology.INNER_CIRCLE_RADIUS_RATIO + this.rulerRadius);
    var rays = astrology.utils.getRulerPositions(
      this.cx,
      this.cy,
      startRadius - 2,
      startRadius + this.rulerRadius - 16,
      this.shift,
      360
    );

    rays.forEach(function (ray) {
      var line = this.paper.line(ray.startX, ray.startY, ray.endX, ray.endY);
      line.setAttribute("stroke", astrology.CIRCLE_COLOR);
      line.setAttribute(
        "stroke-width",
        astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE
      );
      wrapper.appendChild(line);
    }, this);

    var circle;
    circle = this.paper.circle(this.cx, this.cy, startRadius);
    circle.setAttribute("stroke", astrology.CIRCLE_COLOR);
    circle.setAttribute(
      "stroke-width",
      astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE
    );
    wrapper.appendChild(circle);
  };

  /**
   * Draw circles
   */
  astrology.Radix.prototype.drawCircles = function drawCircles() {
    var universe = this.universe;
    var wrapper = astrology.utils.getEmptyWrapper(
      universe,
      this.isStatic
        ? astrology.ID_CHART_STATIC
        : astrology.ID_CHART +
            "-" +
            astrology.ID_RADIX +
            "-" +
            astrology.ID_CIRCLES
    );

    var circle;

    //indoor circle
    circle = this.paper.circle(
      this.cx,
      this.cy,
      this.radius / astrology.INDOOR_CIRCLE_RADIUS_RATIO
    );
    circle.setAttribute("stroke", "#cccccc");
    //circle.setAttribute("stroke-dasharray", "5,5");
    circle.setAttribute("stroke-width", "1");
    circle.setAttribute("fill", "transparent");
    wrapper.appendChild(circle);

    //outdoor circle
    /*circle = this.paper.circle(this.cx, this.cy, this.radius);
        //circle.setAttribute("stroke", astrology.CIRCLE_COLOR);
        //circle.setAttribute("stroke-width", (astrology.CIRCLE_STRONG * astrology.SYMBOL_SCALE));
        circle.setAttribute("stroke", '#888');
        circle.setAttribute("stroke-width", 4);
        circle.setAttribute("fill", 'transparent');
        wrapper.appendChild(circle);*/

    //inner circle
    /*circle = this.paper.circle(this.cx, this.cy, this.radius);
        circle.setAttribute("stroke", '#999');
        circle.setAttribute("stroke-width", 2);
        circle.setAttribute("fill", 'transparent');
        wrapper.appendChild(circle);*/
  };
})((window.astrology = window.astrology || {}));

// ## Transit chart ###################################
(function (astrology) {
  var context;

  /**
   * Aspects calculator
   *
   * @class
   * @public
   * @constructor
   * @param {Object} points; {"Sun":[0], "Moon":[90], "Neptune":[120], "As":[30]}
   * @param {Object | null } settings
   */
  astrology.AspectCalculator = function (toPoints, settings) {
    if (toPoints == null) {
      throw new Error("Param 'toPoint' must not be empty.");
    }

    this.settings = settings || {};
    this.settings.aspects = (settings && settings.aspects) || astrology.ASPECTS;
    this.settings.whole_aspects =
      (settings && settings.aspects) || astrology.WHOLE_ASPECTS;

    this.toPoints = toPoints;

    context = this;

    return this;
  };

  /**
   * Getter for this.toPoints
   * @see constructor
   *
   * @return {Object}
   */
  astrology.AspectCalculator.prototype.getToPoints = function () {
    return this.this.toPoints;
  };

  /**
   * Radix aspects
   *
   * In radix calculation is the param "points" the same as param "toPoints" in constructor
   * , but without special points such as: As,Ds, Mc, Ic, ...
   *
   * @param {Object} points; {"Sun":[0], "Moon":[90]}
   *
   * @return {Array<Object>} [{"aspect":{"name":"conjunction", "degree":120}"", "point":{"name":"Sun", "position":123}, "toPoint":{"name":"Moon", "position":345}, "precision":0.5}]]
   */
  astrology.AspectCalculator.prototype.radix = function (
    points,
    isWholeSignHouse,
    cusps
  ) {
    if (!points) {
      return [];
    }

    var aspects = [];

    for (var point in points) {
      if (points.hasOwnProperty(point)) {
        for (var toPoint in this.toPoints) {
          if (this.toPoints.hasOwnProperty(toPoint)) {
            if (point != toPoint) {
              for (var aspect in this.settings.whole_aspects) {
                if (isWholeSignHouse) {
                  if (
                    hasAspectWholeSign(
                      points[point][0],
                      this.toPoints[toPoint][0],
                      this.settings.whole_aspects[aspect],
                      cusps[0]
                    )
                  ) {
                    if (
                      aspect === "sextile" &&
                      ((point === "Sun" && toPoint === "Venus") ||
                        (point === "Venus" && toPoint === "Sun"))
                    ) {
                      continue;
                    }

                    aspects.push({
                      aspect: {
                        name: aspect,
                        degree: this.settings.aspects[aspect].degree,
                        orbit: this.settings.aspects[aspect].orbit,
                        color: this.settings.aspects[aspect].color,
                      },
                      point: {
                        name: point,
                        position: points[point][0],
                      },
                      toPoint: {
                        name: toPoint,
                        position: this.toPoints[toPoint][0],
                      },
                      precision: calcPrecision(
                        points[point][0],
                        this.toPoints[toPoint][0],
                        this.settings.aspects[aspect]["degree"]
                      ).toFixed(4),
                    });
                  }
                } else {
                  if (
                    hasAspect(
                      points[point][0],
                      this.toPoints[toPoint][0],
                      this.settings.aspects[aspect]
                    )
                  ) {
                    if (
                      aspect === "sextile" &&
                      ((point === "Sun" && toPoint === "Venus") ||
                        (point === "Venus" && toPoint === "Sun"))
                    ) {
                      continue;
                    }

                    aspects.push({
                      aspect: {
                        name: aspect,
                        degree: this.settings.aspects[aspect].degree,
                        orbit: this.settings.aspects[aspect].orbit,
                        color: this.settings.aspects[aspect].color,
                      },
                      point: {
                        name: point,
                        position: points[point][0],
                      },
                      toPoint: {
                        name: toPoint,
                        position: this.toPoints[toPoint][0],
                      },
                      precision: calcPrecision(
                        points[point][0],
                        this.toPoints[toPoint][0],
                        this.settings.aspects[aspect]["degree"]
                      ).toFixed(4),
                    });
                  }
                }
              }
            }
          }
        }
      }
    }

    return aspects.sort(compareAspectsByPrecision);
  };

  /*
   * @private
   * @param {double} point
   * @param {double} toPoint
   * @param {Array} aspects; [DEGREE, ORBIT]
   */
  function hasAspect(point, toPoint, aspect) {
    var result = false;

    var gap = Math.abs(point - toPoint);

    if (gap > astrology.utils.radiansToDegree(Math.PI)) {
      gap = astrology.utils.radiansToDegree(2 * Math.PI) - gap;
    }

    var orbitMin = aspect["degree"] - aspect["orbit"];
    var orbitMax = aspect["degree"] + aspect["orbit"];

    if (orbitMin <= gap && gap <= orbitMax) {
      result = true;
    }

    return result;
  }

  function hasAspectWholeSign(point, toPoint, aspect, ascendant) {
    var sign = astrology.utils.getSignNumber(point);
    var ascendantId = astrology.utils.getSignNumber(ascendant);
    var toSign = astrology.utils.getSignNumber(toPoint);

    var house = astrology.utils.getHouseFromLagnaAndSign(ascendantId, sign);
    var toHouse = astrology.utils.getHouseFromLagnaAndSign(ascendantId, toSign);

    var result = false;

    var houseDiff = astrology.utils.difference(house, toHouse);

    if (houseDiff === aspect.house_diff || houseDiff === aspect.house_diff_1) {
      result = true;
    }

    return result;
  }

  /*
   * @private
   * @param {Object} pointAngle
   * @param {Object} toPointAngle
   * @param {double} aspectDegree;
   */
  function calcPrecision(point, toPoint, aspect) {
    var gap = Math.abs(point - toPoint);

    if (gap > astrology.utils.radiansToDegree(Math.PI)) {
      gap = astrology.utils.radiansToDegree(2 * Math.PI) - gap;
    }
    return Math.abs(gap - aspect);
  }

  /*
   * Aspects comparator
   * by precision
   * @private
   * @param {Object} a
   * @param {Object} b
   */
  function compareAspectsByPrecision(a, b) {
    return a.precision - b.precision;
  }
})((window.astrology = window.astrology || {}));

// ## UTILS #############################
(function (astrology) {
  astrology.utils = {};

  /**
   * Calculate position of the point on the circle.
   *
   * @param {int} cx - center x
   * @param {int} cy - center y
   * @param {int} radius
   * @param {double} angle - degree
   *
   * @return {Object} - {x:10, y:20}
   */
  astrology.utils.getPointPosition = function (cx, cy, radius, angle) {
    var angleInRadius = ((astrology.SHIFT_IN_DEGREES - angle) * Math.PI) / 180;
    var xPos = cx + radius * Math.cos(angleInRadius);
    var yPos = cy + radius * Math.sin(angleInRadius);
    return { x: xPos, y: yPos };
  };

  astrology.utils.degreeToRadians = function (degree) {
    return (degrees * Math.PI) / 180;
  };

  astrology.utils.radiansToDegree = function (radians) {
    return (radians * 180) / Math.PI;
  };

  /**
   * Calculates positions of the point description
   *
   * @param {Object} point
   * @param {Array<String>} texts
   * @param {Boolean} isPlanetSmall
   *
   * @return {Array<Object>} [{text:"abc", x:123, y:456}, {text:"cvb", x:456, y:852}, ...]
   */
  astrology.utils.getDescriptionPosition = function (
    point,
    texts,
    isPlanetSmall,
    house
  ) {
    var RATION = 1.4;
    var result = [];
    var posX =
      point.x + (astrology.COLLISION_RADIUS / RATION) * astrology.SYMBOL_SCALE;
    var posY = point.y - astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE;

    texts.forEach(function (text, idx) {
      result.push({
        text: text,
        x: posX,
        y:
          posY +
          (astrology.COLLISION_RADIUS / RATION) * astrology.SYMBOL_SCALE * idx,
      });
    }, this);

    return result;
  };

  astrology.utils.getRetroDescriptionPosition = function (
    point,
    texts,
    isPlanetSmall,
    house
  ) {
    var RATION = 1;
    var RATIONY = 1;

    switch (house) {
      case "0":
      case 0:
        RATION = 1;
        RATIONY = -1.9;
        break;

      case "1":
      case 1:
        RATION = 1;
        RATIONY = -1.5;
        break;

      case "2":
      case 2:
        RATION = 1.5;
        RATIONY = -1.2;
        break;

      case "3":
      case 3:
        RATION = 0.9;
        RATIONY = -1.8;
        break;

      case "4":
      case 4:
        RATION = 1;
        RATIONY = -1.5;
        break;

      case "5":
      case 5:
        RATION = 2.5;
        RATIONY = -1.9;
        break;

      case "6":
      case 6:
        RATION = 1.5;
        RATIONY = -1;
        break;

      case "7":
      case 7:
        RATION = 1.5;
        RATIONY = -4.5;
        break;

      case "8":
      case 8:
        RATION = 1.5;
        RATIONY = -1;
        break;

      case "9":
      case 9:
        RATION = 1;
        RATIONY = -2.2;
        break;

      case "10":
      case 10:
        RATION = 1;
        RATIONY = -2.5;
        break;

      case "11":
      case 11:
        RATION = 1;
        RATIONY = -1.3;
        break;

      default:
        RATION = 1;
        RATIONY = 0.5;
        break;
    }

    var result = [];
    var posX =
      point.x + (astrology.COLLISION_RADIUS / RATION) * astrology.SYMBOL_SCALE;
    var posY =
      point.y - (astrology.COLLISION_RADIUS / RATIONY) * astrology.SYMBOL_SCALE;

    texts.forEach(function (text, idx) {
      result.push({
        text: text,
        x: posX,
        y:
          posY +
          (astrology.COLLISION_RADIUS / RATIONY) * astrology.SYMBOL_SCALE * idx,
      });
    }, this);

    return result;
  };

  /**
   * Checks a source data
   * @private
   *
   * @param {Object} data
   * @return {Object} status
   */
  astrology.utils.validate = function (data) {
    var status = { hasError: false, messages: [] };

    if (data == null) {
      status.messages.push("Data is not set.");
      status.hasError = true;
      return status;
    }

    if (data.planets == null) {
      status.messages.push("There is not property 'planets'.");
      status.hasError = true;
    }

    for (var property in data.planets) {
      if (data.planets.hasOwnProperty(property)) {
        if (!Array.isArray(data.planets[property])) {
          status.messages.push(
            "The planets property '" + property + "' has to be Array."
          );
          status.hasError = true;
        }
      }
    }

    if (data.cusps != null && !Array.isArray(data.cusps)) {
      status.messages.push("Property 'cusps' has to be Array.");
      status.hasError = true;
    }

    if (data.cusps != null && data.cusps.length != 12) {
      status.messages.push("Count of 'cusps' values has to be 12.");
      status.hasError = true;
    }

    return status;
  };

  /**
   * Get empty DOMElement with ID
   *
   * @param{String} elementID
   * @param{DOMElement} parent
   * @return {DOMElement}
   */
  astrology.utils.getEmptyWrapper = function (parent, elementID) {
    var wrapper = document.getElementById(elementID);
    if (wrapper) {
      astrology.utils.removeChilds(wrapper);
    } else {
      wrapper = document.createElementNS(
        document.getElementById(
          this.isStatic ? astrology.ID_CHART_STATIC : astrology.ID_CHART
        ).namespaceURI,
        "g"
      );
      wrapper.setAttribute("id", elementID);
      parent.appendChild(wrapper);
    }

    return wrapper;
  };

  /**
   * Remove childs
   *
   * @param{DOMElement} parent
   */
  astrology.utils.removeChilds = function (parent) {
    if (parent == null) {
      return;
    }

    var last;
    while ((last = parent.lastChild)) {
      parent.removeChild(last);
    }
  };

  /**
   * Check circle collision between two objects
   *
   * @param {Object} circle1, {x:123, y:123, r:50}
   * @param {Object} circle2, {x:456, y:456, r:60}
   * @return {boolean}
   */
  astrology.utils.isCollision = function (circle1, circle2) {
    //Calculate the vector between the circles’ center points
    var vx = circle1.x - circle2.x;
    var vy = circle1.y - circle2.y;

    var magnitude = Math.sqrt(vx * vx + vy * vy);

    //circle.radius has been set to astrology.COLLISION_RADIUS;
    var totalRadii = circle1.r + circle2.r;

    return magnitude <= totalRadii;
  };

  /**
   * Places a new point in the located list
   *
   * @param {Array<Object>} locatedPoints, [{name:"Mars", x:123, y:123, r:50, ephemeris:45.96}, {name:"Sun", x:1234, y:1234, r:50, ephemeris:100.96}]
   * @param {Object} point, {name:"Venus", x:78, y:56, r:50, angle:15.96}
   * @param {Object} universe - current universe
   * @return {Array<Object>} locatedPoints
   */
  astrology.utils.assemble = function (locatedPoints, point, universe) {
    // first item
    var isCollision = false;

    if (locatedPoints.length == 0) {
      point.collision = isCollision;
      locatedPoints.push(point);
      return locatedPoints; //================>
    }

    if (
      2 * Math.PI * universe.r -
        2 *
          (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE) *
          (locatedPoints.length + 2) <=
      0
    ) {
      if (astrology.DEBUG)
        console.log(
          "Universe circumference: " +
            2 * Math.PI * universe.r +
            ", Planets circumference: " +
            2 *
              (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE) *
              (locatedPoints.length + 2)
        );
      throw new Error(
        "Unresolved planet collision. Try change SYMBOL_SCALE or paper size."
      );
    }

    locatedPoints.sort(astrology.utils.comparePoints);
    for (var i = 0, ln = locatedPoints.length; i < ln; i++) {
      if (astrology.utils.isCollision(locatedPoints[i], point)) {
        isCollision = true;
        var locatedButInCollisionPoint = locatedPoints[i];
        locatedButInCollisionPoint.index = i;

        if (astrology.DEBUG)
          console.log(
            "Resolve collision: " +
              locatedButInCollisionPoint.name +
              " X " +
              point.name
          );

        break;
      }
    }

    if (isCollision) {
      astrology.utils.placePointsInCollision(locatedButInCollisionPoint, point);

      var newPointPosition = astrology.utils.getPointPosition(
        universe.cx,
        universe.cy,
        universe.r,
        locatedButInCollisionPoint.angle
      );
      locatedButInCollisionPoint.x = newPointPosition.x + 5;
      locatedButInCollisionPoint.y = newPointPosition.y;

      newPointPosition = astrology.utils.getPointPosition(
        universe.cx,
        universe.cy,
        universe.r,
        point.angle
      );
      point.x = newPointPosition.x + 5;
      point.y = newPointPosition.y;

      // remove locatedButInCollisionPoint from locatedPoints
      locatedPoints.splice(locatedButInCollisionPoint.index, 1);

      // call recursive
      locatedPoints = astrology.utils.assemble(
        locatedPoints,
        locatedButInCollisionPoint,
        universe
      );
      locatedPoints = astrology.utils.assemble(locatedPoints, point, universe);
    } else {
      locatedPoints.push(point);
    }
    point.collision = isCollision;
    return locatedPoints;
  };

  /**
   * Sets the positions of two points that are in collision.
   *
   * @param {Object} p1, {..., pointer:123, angle:456}
   * @param {Object} p2, {..., pointer:23, angle:56}
   */
  astrology.utils.placePointsInCollision = function (p1, p2) {
    var step = 1;

    if (
      // solving problems with zero crossing
      (p1.pointer <= p2.pointer &&
        Math.abs(p1.pointer - p2.pointer) <= astrology.COLLISION_RADIUS) ||
      (p1.pointer >= p2.pointer &&
        Math.abs(p1.pointer - p2.pointer) >= astrology.COLLISION_RADIUS)
    ) {
      p1.angle = p1.angle - step;
      p2.angle = p2.angle + step;
    } else {
      p1.angle = p1.angle + step;
      p2.angle = p2.angle - step;
    }

    p1.angle = (p1.angle + 360) % 360;
    p2.angle = (p2.angle + 360) % 360;
  };

  /**
   * Check collision between angle and object
   *
   * @param {double} angle
   * @param {Array<Object>} points, [{x:456, y:456, r:60, angle:123}, ...]
   * @return {boolean}
   */
  astrology.utils.isInCollision = function (angle, points) {
    var deg360 = astrology.utils.radiansToDegree(2 * Math.PI);
    var collisionRadius =
      (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE) / 2;

    var result = false;
    for (var i = 0, ln = points.length; i < ln; i++) {
      if (
        Math.abs(points[i].angle - angle) <= collisionRadius ||
        deg360 - Math.abs(points[i].angle - angle) <= collisionRadius
      ) {
        result = true;
        break;
      }
    }

    return result;
  };

  /**
   * Calculates positions of the dashed line passing through the obstacle.
   *    *
   * @param {double} centerX
   * @param {double} centerY
   * @param {double} angle - line angle
   * @param {double} lineStartRadius
   * @param {double} lineEndRadius
   * @param {double} obstacleRadius
   * @param {Array<Object>} obstacles, [{x:456, y:456, r:60, angle:123}, ...]
   *
   * @return {Array<Object>} [{startX:1, startY:1, endX:4, endY:4}, {startX:6, startY:6, endX:8, endY:8}]
   */
  astrology.utils.getDashedLinesPositions = function (
    centerX,
    centerY,
    angle,
    lineStartRadius,
    lineEndRadius,
    obstacleRadius,
    obstacles
  ) {
    var startPos, endPos;
    var result = [];

    if (astrology.utils.isInCollision(angle, obstacles)) {
      startPos = astrology.utils.getPointPosition(
        centerX,
        centerY,
        lineStartRadius,
        angle
      );
      endPos = astrology.utils.getPointPosition(
        centerX,
        centerY,
        obstacleRadius - astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE,
        angle
      );
      result.push({
        startX: startPos.x,
        startY: startPos.y,
        endX: endPos.x,
        endY: endPos.y,
      });

      // the second part of the line when is space
      if (
        obstacleRadius +
          2 * (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE) <
        lineEndRadius
      ) {
        startPos = astrology.utils.getPointPosition(
          centerX,
          centerY,
          obstacleRadius +
            2 * (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE),
          angle
        );
        endPos = astrology.utils.getPointPosition(
          centerX,
          centerY,
          lineEndRadius,
          angle
        );
        result.push({
          startX: startPos.x,
          startY: startPos.y,
          endX: endPos.x,
          endY: endPos.y,
        });
      }
    } else {
      startPos = astrology.utils.getPointPosition(
        centerX,
        centerY,
        lineStartRadius,
        angle
      );
      endPos = astrology.utils.getPointPosition(
        centerX,
        centerY,
        lineEndRadius,
        angle
      );
      result.push({
        startX: startPos.x,
        startY: startPos.y,
        endX: endPos.x,
        endY: endPos.y,
      });
    }

    return result;
  };

  /**
   * Calculate ruler positions.
   *
   * @param {Double} centerX
   * @param {Double} centerY
   * @param {Double} startRadius
   * @param {Double} endRadius
   * @param {Boolean} startAngle
   * @param {Integer} count
   *
   * @return {Array<Object>} [ {startX:1,startY:2, endX:3, endX:4 }, ...]
   */
  astrology.utils.getRulerPositions = function (
    centerX,
    centerY,
    startRadius,
    endRadius,
    startAngle,
    count
  ) {
    var result = [];

    var rayRadius = endRadius;
    var halfRayRadius =
      startRadius <= endRadius
        ? rayRadius - Math.abs(endRadius - startRadius) / 2
        : rayRadius + Math.abs(endRadius - startRadius) / 2;
    var steps_count = 360;
    var stp = 1;

    if (count) {
      steps_count = count;
    }
    if (count === 72) {
      stp = 12;
    }

    for (i = 0, start = 0, step = stp; i < steps_count; i++) {
      var angle = start + startAngle;
      var startPos = astrology.utils.getPointPosition(
        centerX,
        centerY,
        startRadius,
        angle
      );
      var endPos = astrology.utils.getPointPosition(
        centerX,
        centerY,
        halfRayRadius,
        angle
      );
      result.push({
        startX: startPos.x,
        startY: startPos.y,
        endX: endPos.x,
        endY: endPos.y,
      });

      start += step;
    }

    return result;
  };

  /**
   * Compare two points
   *
   * @param {Object} pointA, {name:"Venus", x:78, y:56, r:50, angle:15.96}
   * @param {Object} pointB, {name:"Mercury", x:78, y:56, r:50, angle:20.26}
   * @return
   */
  astrology.utils.comparePoints = function (pointA, pointB) {
    return pointA.angle - pointB.angle;
  };

  astrology.utils.DMS = function (dec) {
    var $vars = dec.toString().split(".");

    if ($vars[1] === undefined) {
      $vars[1] = "0";
    }

    var $deg = $vars[0],
      $tempma = "0." + $vars[1];
    $tempma = $tempma * 3600;
    var $min = Math.floor($tempma / 60),
      $sec = Math.round($tempma - $min * 60);

    return { deg: $deg % 30, min: $min, sec: $sec };
  };

  astrology.utils.fix = function (fixNum, d) {
    while (d >= fixNum) {
      d -= fixNum;
    }

    while (d < 0) {
      d += fixNum;
    }

    return d;
  };

  astrology.utils.fix12 = function (n) {
    if (n >= 12) {
      n -= 12;
    }
    if (n <= 0) {
      n += 12;
    }
    return n;
  };

  astrology.utils.getSignNumber = function (deg) {
    let num = 0;

    while (deg >= 30.0) {
      deg -= 30;
      num++;
    }
    if (num === 12) num = 0;
    return num;
  };

  astrology.utils.getHouseFromLagnaAndSign = function (lagnaId, signId) {
    var i = 0,
      houseId = 0;

    for (; i < 12; i++) {
      if (lagnaId === signId) {
        return houseId;
      }
      lagnaId = astrology.utils.fix(12, lagnaId + 1);
      houseId++;
    }
  };

  astrology.utils.distance = function (x1, x2, y1, y2) {
    return Math.sqrt((x2 -= x1) * x2 + (y2 -= y1) * y2);
  };

  astrology.utils.isRetrograde = function (speed) {
    return speed < 0;
  };

  astrology.utils.difference = function (a, b) {
    return Math.abs(a - b);
  };
})((window.astrology = window.astrology || {}));
