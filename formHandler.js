import { Loader } from "https://cdn.pika.dev/google-maps";
const STATIC_FORM_DATA = {
  email: "user@mail.com",
  name: "first last",
  date: "24",
  month: "11",
  year: "2020",
  hour: "5",
  minutes: "45",
  day: "pm",
  place: "Sfântu Gheorghe, Romania",
  locality: "Sfântu Gheorghe",
  state: "Covasna County",
  country: "Romania",
  address: "Sfântu Gheorghe Sfantu Gheorghe CV",
  lat: 45.8609375,
  long: 25.7885796,
};

function modifyStyleForImg() {
  return `@font-face {
    font-family: GothamRMedium;
    src: url(//cdn.shopify.com/s/files/1/1582/1903/t/7/assets/OfficialHeavenlyBodiesFont-Regular.eot?v=3156783750659878182);
    }
    @font-face {
    font-family: numberFont;
    src: url(//cdn.shopify.com/s/files/1/1582/1903/t/7/assets/P22DeaScr.eot?v=8092603526512991313);
    font-display: swap;
    }

    text {
    font-family: 'numberFont', sans-serif !important;
    stroke: #231f20;
    stroke-width: 0px;
    font-weight: normal !important;
    position: relative;
    }
    text tspan {
    font-family: 'GothamRMedium', sans-serif !important;
    stroke: #231f20;
    stroke-width: 0.6px;
    font-weight: normal !important;
    }
    body{width:650px}
    text tspan.planetDegree {
    color: #231f20;
    stroke: #231f20;
    stroke-width: 0;
    display: block;
    font-size: 14px;
    }`;
}

function makeHandler(autoc) {
  return function () {
    const place = autoc.getPlace();
    console.log(place);

    let address = "";
    for (let i = 0; i < place.address_components.length; i++) {
      let addressType = place.address_components[i].types[0];
      if (addressType == "administrative_area_level_1") {
        const result = place.address_components[i].long_name;
        // window.state = result;
        STATIC_FORM_DATA.state = result;
      }
      if (addressType == "country") {
        const result = place.address_components[i].long_name;
        // window.country = result;
        STATIC_FORM_DATA.country = result;
      }
      if (addressType == "locality") {
        const result = place.address_components[i].long_name;
        // window.locality = result;
        STATIC_FORM_DATA.locality = result;
      }
    }

    // window.lat = place.geometry.location.lat();
    // window.long = place.geometry.location.lng();
    STATIC_FORM_DATA.lat = place.geometry.location.lat();
    STATIC_FORM_DATA.long = place.geometry.location.lng();

    if (place.address_components) {
      address = [
        (place.address_components[0] &&
          place.address_components[0].short_name) ||
          "",
        (place.address_components[1] &&
          place.address_components[1].short_name) ||
          "",
        (place.address_components[2] &&
          place.address_components[2].short_name) ||
          "",
      ].join(" ");
    }
    STATIC_FORM_DATA.address = address;
  };
}

/**
 * Update form input.
 *
 * @param {HTMLInputElement} inp - The input element.
 * @param {String} value - The input value.
 * @returns {void}
 */
const updateFormInput = (inp, value) => {
  inp.value = value ? value : "";
  inp.dispatchEvent(new Event("change", { bubbles: true }));
};

function createChart() {
  var name = document.querySelector("#fname").value || STATIC_FORM_DATA.name;
  var place = document.querySelector("#place").value || STATIC_FORM_DATA.place;
  var date =
    parseInt($("#datefielddd").val()) || parseInt(STATIC_FORM_DATA.date);
  var month =
    parseInt($("#datefieldmm").val()) || parseInt(STATIC_FORM_DATA.month);
  var year =
    parseInt($("#datefieldyy").val()) || parseInt(STATIC_FORM_DATA.year);
  var hour =
    parseInt($("#timefieldhh").val()) || parseInt(STATIC_FORM_DATA.hour);
  var minutes =
    parseInt($("#timefieldmm").val()) || parseInt(STATIC_FORM_DATA.minutes);
  var email = $("#emailfield").val() || STATIC_FORM_DATA.email;
  var day = "am" || STATIC_FORM_DATA.day;
  var re = /\S+@\S+\.\S+/;

  // var d = new Date(year date,month);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var monthName = monthNames[month - 1];
  if (monthName) {
    document.querySelector(".date-data").innerText =
      monthName.toLowerCase() + " " + date + "th," + " " + year;
  }
  if (hour) {
    if ($("#pm").is(":checked")) {
      day = "pm";
    } else {
      day = "am";
    }
  }

  if (hour && minutes >= 0 && day) {
    document.querySelector(".time-data").innerText =
      hour + ":" + number(minutes) + " " + day;
    document.querySelector(".date-name").innerText =
      "the birth chart of " + name.toLowerCase();

    if (STATIC_FORM_DATA.locality && STATIC_FORM_DATA.state) {
      document.querySelector(".place-data").innerText =
        STATIC_FORM_DATA.locality.toLowerCase() +
        "," +
        " " +
        STATIC_FORM_DATA.state.toLowerCase();
    }
    if (STATIC_FORM_DATA.locality && !STATIC_FORM_DATA.state) {
      document.querySelector(".place-data").innerText =
        STATIC_FORM_DATA.locality.toLowerCase();
    }
    if (!STATIC_FORM_DATA.locality && STATIC_FORM_DATA.state) {
      document.querySelector(".place-data").innerText =
        STATIC_FORM_DATA.state.toLowerCase();
    }
    if (!STATIC_FORM_DATA.locality && !STATIC_FORM_DATA.state) {
      document.querySelector(".place-data").innerText = "   ";
    }

    if (!STATIC_FORM_DATA.country) {
      CrispyToast.error("Please select location from the suggestion");
      // return;
    }

    document.querySelector(".country-data").innerText =
      STATIC_FORM_DATA.country.toLowerCase();
  }

  function number(n) {
    return n > 9 ? "" + n : "0" + n;
  }

  var validation = false;
  var dateError = " ";
  if (isNaN(date) || isNaN(month) || isNaN(year)) {
    dateError = "Please enter a date";
  } else if (date > 31 || date < 1) {
    dateError = "Wrong date format";
  } else if (
    (month == 4 || month == 6 || month == 9 || month == 11) &&
    date == 31
  ) {
    dateError = "Wrong date format";
  } else if (month == 2) {
    var isleap = year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
    if (date > 29 || (date == 29 && !isleap)) dateError = "Wrong date format";
  } else if (month > 12 || month < 1) {
    dateError = "Wrong month format";
  } else if (year > 2050 || year < 1900) {
    dateError = "Wrong year format";
  } else {
    dateError = false;
  }

  if (!(name.length > 3)) {
    document.querySelector(".errortext").innerText = "Invalid Name";
  } else if (!(place.length > 1)) {
    document.querySelector(".errortext").innerText = "Invalid Place";
  } else if (dateError != false) {
    document.querySelector(".errortext").innerText = dateError;
  } else if (Number.isNaN(hour)) {
    document.querySelector(".errortext").innerText = "Invalid Hour";
  } else if (!(hour > 0 && hour <= 12)) {
    document.querySelector(".errortext").innerText =
      "Enter Hour is less than 12";
  } else if (!(minutes >= 0 && minutes <= 59)) {
    document.querySelector(".errortext").innerText = "Invalid Minute";
  } else if (!re.test(email)) {
    document.querySelector(".errortext").innerText = "Invalid Email";
  } else if ($("#styled-checkbox-1").prop("checked") == false) {
    document.querySelector(".errortext").innerText =
      "Please check the checkbox";
  } else {
    document.querySelector(".errortext").innerText = " ";
    validation = true;
  }

  if (validation == true) {
    var request = new XMLHttpRequest();
    const mailListId = "eb01520a-8cae-48d9-8211-c61befb5d39b";
    const apiKey = "46c4cbf1-d6bd-4aa9-ac9c-fd113004a72e";

    request.open(
      "POST",
      "https://api.moosend.com/v3/subscribers/" +
        mailListId +
        "/subscribe.json?apikey=" +
        apiKey
    );

    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Accept", "application/json");

    request.onreadystatechange = function () {
      if (this.readyState === 4) {
      }
    };

    var body = {
      Email: email,
      HasExternalDoubleOptIn: false,
    };

    request.send(JSON.stringify(body));

    document.querySelector(".export_button").style = "display:block";
    document.querySelector("div.form-section").style = "display:none";
    jQuery(".heaven-title").css("display", "none");

    document.querySelector("#chart-results").style = "display:block";
    // jQuery(".chart-image").css("display","none");
    //                 if ($('#pm').is(':checked')) {
    //                     hour = hour + 12;
    //                 }
    if (day === "pm" && hour < 12) {
      hour = hour + 12;
    }
    if (day === "am" && hour === 12) {
      hour = 0;
    }

    var lat = STATIC_FORM_DATA.lat;
    var long = STATIC_FORM_DATA.long;
    $("#cover-spin").show(0);
    var dates = month + "-" + date + "-" + year;
    var data = { latitude: lat, longitude: long, date: dates };

    function ajaxCall(apiName, data) {
      $("#cover-spin").show(0);
      var userId = "605788";
      var apiKey = "aebefb6e8d4f9cede602a2e32c1de34c";

      var request = $.ajax({
        url: "https://json.astrologyapi.com/v1/" + apiName,
        method: "POST",
        dataType: "json",
        headers: {
          authorization: "Basic " + btoa(userId + ":" + apiKey),
          "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
      });

      return request.then(
        function (resp) {
          return resp;
        },
        function (err) {
          return err;
        }
      );
    }

    ajaxCall("timezone_with_dst", data).then(function (response) {
      var tzone = response.timezone;

      //                     if (!tzone) {
      //                         var tzone = 1;
      //                     }

      var reqData = {
        day: date,
        month: month,
        year: year,
        hour: hour,
        min: minutes,
        lat: STATIC_FORM_DATA.lat,
        lon: STATIC_FORM_DATA.long,
        tzone: tzone,
        house_type: "placidus",
        aspect_filter: "SPARK6",
      };

      var ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
      ];
      var tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
      ];
      var teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
      ];

      function convert_tens(num) {
        if (num < 10) return ones[num];
        else if (num >= 10 && num < 20) return teens[num - 10];
        else {
          return tens[Math.floor(num / 10)] + " " + ones[num % 10];
        }
      }

      function convert(num) {
        if (num == 0) return "zero";
        else return convert_tens(num);
      }

      var modalData = [
        {
          planets: [],
          planets_in_house: [],
          house_reports: [],
          sign_reports: [],
        },
        {
          planets: [],
          planets_in_house: [],
          house_reports: [],
          sign_reports: [],
        },
        {
          planets: [],
          planets_in_house: [],
          house_reports: [],
          sign_reports: [],
        },
        {
          planets: [],
          planets_in_house: [],
          house_reports: [],
          sign_reports: [],
        },
        {
          planets: [],
          planets_in_house: [],
          house_reports: [],
          sign_reports: [],
        },
        {
          planets: [],
          planets_in_house: [],
          house_reports: [],
          sign_reports: [],
        },
        {
          planets: [],
          planets_in_house: [],
          house_reports: [],
          sign_reports: [],
        },
        {
          planets: [],
          planets_in_house: [],
          house_reports: [],
          sign_reports: [],
        },
        {
          planets: [],
          planets_in_house: [],
          house_reports: [],
          sign_reports: [],
        },
        {
          planets: [],
          planets_in_house: [],
          house_reports: [],
          sign_reports: [],
        },
        {
          planets: [],
          planets_in_house: [],
          house_reports: [],
          sign_reports: [],
        },
        {
          planets: [],
          planets_in_house: [],
          house_reports: [],
          sign_reports: [],
        },
      ];
      var house = [
        "First",
        "Second",
        "Third",
        "Fourth",
        "Fifth",
        "Sixth",
        "Seventh",
        "Eighth",
        "Ninth",
        "Tenth",
        "Eleventh",
        "Twelfth",
      ];
      var zodiac = [
        "Aries",
        "Taurus",
        "Gemini",
        "Cancer",
        "Leo",
        "Virgo",
        "Libra",
        "Scorpio",
        "Sagittarius",
        "Capricorn",
        "Aquarius",
        "Pisces",
      ];

      function getPlanetData(planets, name) {
        var name = [name];

        var result = planets.filter(function (itm) {
          return name.indexOf(itm.name) > -1;
        });
        return result;
      }

      function getAspectsData(aspects, name) {
        var name = [name];

        var result = aspects.filter(function (itm) {
          return name.indexOf(itm.aspecting_planet) > -1;
        });

        return result;
      }

      function getSignImage(sign) {
        switch (sign) {
          case "Aries":
            // code block
            return "//lilyashwell.myshopify.com/cdn/shop/t/34/assets/aries-symbol.png?v=137129187621399908431642669879";
          case "Virgo":
            // code block
            return "//lilyashwell.myshopify.com/cdn/shop/t/34/assets/virgo-symbol.png?v=61129829803208872531642670003";
          case "Pisces":
            // code block
            return "//lilyashwell.myshopify.com/cdn/shop/t/34/assets/pisces-symbol.png?v=162464721917795717831642669971";
          case "Gemini":
            // code block
            return "//lilyashwell.myshopify.com/cdn/shop/t/34/assets/gemeni-symbol.png?v=33947642300093570201642669910";
          case "Sagittarius":
            // code block
            return "//lilyashwell.myshopify.com/cdn/shop/t/34/assets/sagittarius-symbol.png?v=118214010179170795821642669988";
          case "Capricorn":
            // code block
            return "//lilyashwell.myshopify.com/cdn/shop/t/34/assets/capricorn-symbol.png?v=121392575723275806491642669897";
          case "Scorpio":
            return "//lilyashwell.myshopify.com/cdn/shop/t/34/assets/scorpio-symbol.png?v=3552167623772599771642669990";

          case "Libra":
            return "//lilyashwell.myshopify.com/cdn/shop/t/34/assets/libra-symbol.png?v=115105286088754046261642669934";
          case "Aquarius":
            return "//lilyashwell.myshopify.com/cdn/shop/t/34/assets/aquarius-symbol.png?v=165960345985660459661642669878";

          case "Leo":
            return "//lilyashwell.myshopify.com/cdn/shop/t/34/assets/leo-symbol.png?v=41815679801090574341642669930";

          case "Taurus":
            return "//lilyashwell.myshopify.com/cdn/shop/t/34/assets/taurus-symbol.png?v=102323783614772606861642669996";

          case "Cancer":
            return "//lilyashwell.myshopify.com/cdn/shop/t/34/assets/cancer-symbol.png?v=53715716830203975001642669895";

          default:
            return "";
          // code block
        }
      }

      // Returns A promiss
      ajaxCall("general_ascendant_report/tropical", reqData).then(function (
        response
      ) {
        var ascendantData = { sign: response.ascendant };
        ajaxCall("western_horoscope", reqData).then(
          function (resp) {
            //                         getAspectsData

            var planets = resp.planets;
            var aspects = resp.aspects;

            var moonAspects = getAspectsData(aspects, "Mars");

            var sunData = getPlanetData(planets, "Sun");

            var moonData = getPlanetData(planets, "Moon");
            var marsData = getPlanetData(planets, "Mars");
            var mercuryData = getPlanetData(planets, "Mercury");
            var jupiterData = getPlanetData(planets, "Jupiter");
            var venusData = getPlanetData(planets, "Venus");
            var saturnData = getPlanetData(planets, "Saturn");
            var uranusData = getPlanetData(planets, "Uranus");
            var neptuneData = getPlanetData(planets, "Neptune");
            var plutoData = getPlanetData(planets, "Pluto");
            var nodeData = getPlanetData(planets, "Node");
            var chironData = getPlanetData(planets, "Chiron");
            var midHeavenData = zodiac[getSignNumber(resp.midheaven)];

            var sunAspects = getAspectsData(aspects, "Sun");
            var moonAspects = getAspectsData(aspects, "Moon");
            var marsAspects = getAspectsData(aspects, "Mars");
            var mercuryAspects = getAspectsData(aspects, "Mercury");
            var jupiterAspects = getAspectsData(aspects, "Jupiter");
            var venusAspects = getAspectsData(aspects, "Venus");
            var saturnAspects = getAspectsData(aspects, "Saturn");
            var uranusAspects = getAspectsData(aspects, "Uranus");
            var neptuneAspects = getAspectsData(aspects, "Neptune");
            var plutoAspects = getAspectsData(aspects, "Pluto");
            var nodeAspects = getAspectsData(aspects, "Node");
            var chironAspects = getAspectsData(aspects, "Chiron");
            var ascendantAspects = getAspectsData(aspects, "Ascendant");
            var midheavenAspects = getAspectsData(aspects, "Midheaven");

            //$(".sun-zodiac-image").attr("src","second.jpg");

            if (sunData) {
              jQuery(".sun-zodiac-sign").html(
                sunData[0].sign.toLowerCase() + " in"
              );
              jQuery(".sun-zodiac-house").html(
                "house " + convert(sunData[0].house) + "."
              );
              var image = getSignImage(sunData[0].sign);
              jQuery(".sun-zodiac-image").attr("src", image);
            }
            if (moonData) {
              jQuery(".moon-zodiac-sign").html(
                moonData[0].sign.toLowerCase() + " in"
              );
              jQuery(".moon-zodiac-house").html(
                "house " + convert(moonData[0].house) + "."
              );
              var image = getSignImage(moonData[0].sign);
              jQuery(".moon-zodiac-image").attr("src", image);
            }
            if (marsData) {
              jQuery(".mars-zodiac-sign").html(
                marsData[0].sign.toLowerCase() + " in"
              );
              jQuery(".mars-zodiac-house").html(
                "house " + convert(marsData[0].house) + "."
              );
              var image = getSignImage(marsData[0].sign);
              jQuery(".mars-zodiac-image").attr("src", image);
            }
            if (mercuryData) {
              jQuery(".mercury-zodiac-sign").html(
                mercuryData[0].sign.toLowerCase() + " in"
              );
              jQuery(".mercury-zodiac-house").html(
                "house " + convert(mercuryData[0].house) + "."
              );
              var image = getSignImage(mercuryData[0].sign);
              jQuery(".mercury-zodiac-image").attr("src", image);
            }
            if (jupiterData) {
              jQuery(".jupiter-zodiac-sign").html(
                jupiterData[0].sign.toLowerCase() + " in"
              );
              jQuery(".jupiter-zodiac-house").html(
                "house " + convert(jupiterData[0].house) + "."
              );
              var image = getSignImage(jupiterData[0].sign);
              jQuery(".jupiter-zodiac-image").attr("src", image);
            }
            if (venusData) {
              jQuery(".venus-zodiac-sign").html(
                venusData[0].sign.toLowerCase() + " in"
              );
              jQuery(".venus-zodiac-house").html(
                "house " + convert(venusData[0].house) + "."
              );
              var image = getSignImage(venusData[0].sign);
              jQuery(".venus-zodiac-image").attr("src", image);
            }
            if (saturnData) {
              jQuery(".saturn-zodiac-sign").html(
                saturnData[0].sign.toLowerCase() + " in"
              );
              jQuery(".saturn-zodiac-house").html(
                "house " + convert(saturnData[0].house) + "."
              );
              var image = getSignImage(saturnData[0].sign);
              jQuery(".saturn-zodiac-image").attr("src", image);
            }
            if (uranusData) {
              jQuery(".uranus-zodiac-sign").html(
                uranusData[0].sign.toLowerCase() + " in"
              );
              jQuery(".uranus-zodiac-house").html(
                "house " + convert(uranusData[0].house) + "."
              );
              var image = getSignImage(uranusData[0].sign);
              jQuery(".uranus-zodiac-image").attr("src", image);
            }
            if (neptuneData) {
              jQuery(".neptune-zodiac-sign").html(
                neptuneData[0].sign.toLowerCase() + " in"
              );
              jQuery(".neptune-zodiac-house").html(
                "house " + convert(neptuneData[0].house) + "."
              );
              var image = getSignImage(neptuneData[0].sign);
              jQuery(".neptune-zodiac-image").attr("src", image);
            }
            if (plutoData) {
              jQuery(".pluto-zodiac-sign").html(
                plutoData[0].sign.toLowerCase() + " in"
              );
              jQuery(".pluto-zodiac-house").html(
                "house " + convert(plutoData[0].house) + "."
              );
              var image = getSignImage(plutoData[0].sign);
              jQuery(".pluto-zodiac-image").attr("src", image);
            }
            if (nodeData) {
              jQuery(".node-zodiac-sign").html(
                nodeData[0].sign.toLowerCase() + " in"
              );
              jQuery(".node-zodiac-house").html(
                "house " + convert(nodeData[0].house) + "."
              );
              var image = getSignImage(nodeData[0].sign);
              jQuery(".node-zodiac-image").attr("src", image);
            }
            if (chironData) {
              jQuery(".chiron-zodiac-sign").html(
                chironData[0].sign.toLowerCase() + " in"
              );
              jQuery(".chiron-zodiac-house").html(
                "house " + convert(chironData[0].house) + "."
              );
              var image = getSignImage(chironData[0].sign);
              jQuery(".chiron-zodiac-image").attr("src", image);
            }
            if (ascendantData) {
              jQuery(".ascendant-zodiac-sign").html(
                ascendantData.sign.toLowerCase() + " in"
              );

              var image = getSignImage(ascendantData.sign);
              jQuery(".ascendant-zodiac-image").attr("src", image);
            }
            if (midHeavenData) {
              jQuery(".midheaven-zodiac-sign").html(
                midHeavenData.toLowerCase() + " in"
              );

              var image = getSignImage(midHeavenData);
              jQuery(".midheaven-zodiac-image").attr("src", image);
            }

            if (sunAspects.length > 0) {
              jQuery(".sun-aspects").html("");
              jQuery(".sun-aspects-2").html("");
              for (var i = sunAspects.length - 1; i >= 0; i--) {
                if (sunAspects[i].aspected_planet == "Part of Fortune") {
                  continue;
                }
                if (i % 2 == 0) {
                  jQuery(".sun-aspects").append(
                    '<span class="content-wrap">' +
                      sunAspects[i].type.toLowerCase() +
                      " " +
                      sunAspects[i].aspected_planet.toLowerCase() +
                      "</span>"
                  );
                } else {
                  jQuery(".sun-aspects-2").append(
                    '<span class="content-wrap"> ' +
                      sunAspects[i].type.toLowerCase() +
                      " " +
                      sunAspects[i].aspected_planet.toLowerCase() +
                      "</span>"
                  );
                }
              }
            } else {
              document.querySelector(".sun-col").style = "display:none";
            }
            if (moonAspects.length > 0) {
              jQuery(".moon-aspects").html("");
              jQuery(".moon-aspects-2").html("");

              for (var i = moonAspects.length - 1; i >= 0; i--) {
                if (moonAspects[i].aspected_planet == "Part of Fortune") {
                  continue;
                }
                if (i % 2 == 0) {
                  jQuery(".moon-aspects").append(
                    '<span class="content-wrap"> ' +
                      moonAspects[i].type.toLowerCase() +
                      " " +
                      moonAspects[i].aspected_planet.toLowerCase() +
                      "</span>"
                  );
                } else {
                  jQuery(".moon-aspects-2").append(
                    '<span class="content-wrap"> ' +
                      moonAspects[i].type.toLowerCase() +
                      " " +
                      moonAspects[i].aspected_planet.toLowerCase() +
                      "</span>"
                  );
                }
              }
            } else {
              document.querySelector(".moon-col").style = "display:none";
            }
            if (marsAspects.length > 0) {
              jQuery(".mars-aspects").html("");
              jQuery(".mars-aspects-2").html("");

              for (var i = marsAspects.length - 1; i >= 0; i--) {
                if (marsAspects[i].aspected_planet == "Part of Fortune") {
                  continue;
                }
                if (i % 2 == 0) {
                  if (marsAspects[i].aspected_planet == "Part of Fortune") {
                    continue;
                  }
                  jQuery(".mars-aspects").append(
                    '<span class="content-wrap"> ' +
                      marsAspects[i].type.toLowerCase() +
                      " " +
                      marsAspects[i].aspected_planet.toLowerCase() +
                      "</span>"
                  );
                } else {
                  if (marsAspects[i].aspected_planet == "Part of Fortune") {
                    continue;
                  }
                  jQuery(".mars-aspects-2").append(
                    '<span class="content-wrap"> ' +
                      marsAspects[i].type.toLowerCase() +
                      " " +
                      marsAspects[i].aspected_planet.toLowerCase() +
                      "</span>"
                  );
                }
              }
            } else {
              document.querySelector(".mars-col").style = "display:none";
            }
            if (mercuryAspects.length > 0) {
              jQuery(".mercury-aspects-2").html("");
              jQuery(".mercury-aspects").html("");
              for (var i = mercuryAspects.length - 1; i >= 0; i--) {
                if (mercuryAspects[i].aspected_planet == "Part of Fortune") {
                  continue;
                }

                if (i % 2 == 0) {
                  jQuery(".mercury-aspects").append(
                    '<span class="content-wrap"> ' +
                      mercuryAspects[i].type.toLowerCase() +
                      " " +
                      mercuryAspects[i].aspected_planet.toLowerCase() +
                      "</span>"
                  );
                } else {
                  jQuery(".mercury-aspects-2").append(
                    '<span class="content-wrap"> ' +
                      mercuryAspects[i].type.toLowerCase() +
                      " " +
                      mercuryAspects[i].aspected_planet.toLowerCase() +
                      "</span>"
                  );
                }
              }
            } else {
              document.querySelector(".mercury-col").style = "display:none";
            }
            if (jupiterAspects.length > 0) {
              jQuery(".jupiter-aspects").html("");
              jQuery(".jupiter-aspects-2").html("");
              for (var i = jupiterAspects.length - 1; i >= 0; i--) {
                if (jupiterAspects[i].aspected_planet == "Part of Fortune") {
                  continue;
                }
                if (i % 2 == 0) {
                  jQuery(".jupiter-aspects").append(
                    '<span class="content-wrap"> ' +
                      jupiterAspects[i].type.toLowerCase() +
                      " " +
                      jupiterAspects[i].aspected_planet.toLowerCase() +
                      "</span>"
                  );
                } else {
                  jQuery(".jupiter-aspects-2").append(
                    '<span class="content-wrap"> ' +
                      jupiterAspects[i].type.toLowerCase() +
                      " " +
                      jupiterAspects[i].aspected_planet.toLowerCase() +
                      "</span>"
                  );
                }
              }
            } else {
              document.querySelector(".jupiter-col").style = "display:none";
            }
            if (venusAspects.length > 0) {
              jQuery(".venus-aspects").html("");
              jQuery(".venus-aspects-2").html("");
              for (var i = venusAspects.length - 1; i >= 0; i--) {
                if (venusAspects[i].aspected_planet == "Part of Fortune") {
                  continue;
                }
                if (i % 2 == 0) {
                  jQuery(".venus-aspects").append(
                    '<span class="content-wrap"> ' +
                      venusAspects[i].type.toLowerCase() +
                      " " +
                      venusAspects[i].aspected_planet.toLowerCase() +
                      "</span>"
                  );
                } else {
                  jQuery(".venus-aspects-2").append(
                    '<span class="content-wrap"> ' +
                      venusAspects[i].type.toLowerCase() +
                      " " +
                      venusAspects[i].aspected_planet.toLowerCase() +
                      "</span>"
                  );
                }
              }
            } else {
              document.querySelector(".venus-col").style = "display:none";
            }
            if (saturnAspects.length > 0) {
              jQuery(".saturn-aspects").html("");
              jQuery(".saturn-aspects-2").html("");

              for (var i = saturnAspects.length - 1; i >= 0; i--) {
                if (saturnAspects[i].aspected_planet == "Part of Fortune") {
                  continue;
                }

                if (i % 2 == 0) {
                  jQuery(".saturn-aspects").append(
                    '<span class="content-wrap"> ' +
                      saturnAspects[i].type.toLowerCase() +
                      " " +
                      saturnAspects[i].aspected_planet.toLowerCase() +
                      "</span>"
                  );
                } else {
                  jQuery(".saturn-aspects-2").append(
                    '<span class="content-wrap"> ' +
                      saturnAspects[i].type.toLowerCase() +
                      " " +
                      saturnAspects[i].aspected_planet.toLowerCase() +
                      "</span>"
                  );
                }
              }
            } else {
              document.querySelector(".saturn-col").style = "display:none";
            }
            if (uranusAspects.length > 0) {
              jQuery(".uranus-aspects").html("");
              jQuery(".uranus-aspects-2").html("");
              for (var i = uranusAspects.length - 1; i >= 0; i--) {
                if (uranusAspects[i].aspected_planet == "Part of Fortune") {
                  continue;
                }
                if (i % 2 == 0) {
                  jQuery(".uranus-aspects").append(
                    '<span class="content-wrap"> ' +
                      uranusAspects[i].type.toLowerCase() +
                      " " +
                      uranusAspects[i].aspected_planet.toLowerCase() +
                      "</span>"
                  );
                } else {
                  jQuery(".uranus-aspects-2").append(
                    '<span class="content-wrap"> ' +
                      uranusAspects[i].type.toLowerCase() +
                      " " +
                      uranusAspects[i].aspected_planet.toLowerCase() +
                      "</span>"
                  );
                }
              }
            } else {
              document.querySelector(".uranus-col").style = "display:none";
            }
            if (neptuneAspects.length > 0) {
              jQuery(".neptune-aspects").html("");
              jQuery(".neptune-aspects-2").html("");

              for (var i = neptuneAspects.length - 1; i >= 0; i--) {
                if (neptuneAspects[i].aspected_planet == "Part of Fortune") {
                  continue;
                }
                if (i % 2 == 0) {
                  jQuery(".neptune-aspects").append(
                    '<span class="content-wrap"> ' +
                      neptuneAspects[i].type.toLowerCase() +
                      " " +
                      neptuneAspects[i].aspected_planet.toLowerCase() +
                      "</span>"
                  );
                } else {
                  jQuery(".neptune-aspects-2").append(
                    '<span class="content-wrap"> ' +
                      neptuneAspects[i].type.toLowerCase() +
                      " " +
                      neptuneAspects[i].aspected_planet.toLowerCase() +
                      "</span>"
                  );
                }
              }
            } else {
              document.querySelector(".neptune-col").style = "display:none";
            }
            if (plutoAspects.length > 0) {
              jQuery(".pluto-aspects").html("");
              jQuery(".pluto-aspects-2").html("");

              for (var i = plutoAspects.length - 1; i >= 0; i--) {
                if (plutoAspects[i].aspected_planet == "Part of Fortune") {
                  continue;
                }
                if (i % 2 == 0) {
                  jQuery(".pluto-aspects").append(
                    '<span class="content-wrap"> ' +
                      plutoAspects[i].type.toLowerCase() +
                      " " +
                      plutoAspects[i].aspected_planet.toLowerCase() +
                      "</span>"
                  );
                } else {
                  jQuery(".pluto-aspects-2").append(
                    '<span class="content-wrap"> ' +
                      plutoAspects[i].type.toLowerCase() +
                      " " +
                      plutoAspects[i].aspected_planet.toLowerCase() +
                      "</span>"
                  );
                }
              }
            } else {
              document.querySelector(".pluto-col").style = "display:none";
            }
            // if (nodeAspects) {
            //   jQuery(".node-aspects").html("");
            //     for (var i = nodeAspects.length - 1; i >= 0; i--) {
            //         if(i % 2 == 0){
            //             jQuery(".node-aspects-2").append('<span class="content-wrap">- '+ nodeAspects[i].type.toLowerCase() + ' ' +  nodeAspects[i].aspected_planet.toLowerCase()+'</span>');

            //         }else{
            //             jQuery(".node-aspects").append('<span class="content-wrap">- '+ nodeAspects[i].type.toLowerCase() + ' ' +  nodeAspects[i].aspected_planet.toLowerCase()+'</span>');

            //         }
            //     }
            // }
            if (chironAspects.length > 0) {
              jQuery(".chiron-aspects").html("");
              jQuery(".chiron-aspects-2").html("");
              for (var i = chironAspects.length - 1; i >= 0; i--) {
                if (chironAspects[i].aspected_planet == "Part of Fortune") {
                  continue;
                }
                if (i % 2 == 0) {
                  jQuery(".chiron-aspects").append(
                    '<span class="content-wrap"> ' +
                      chironAspects[i].type.toLowerCase() +
                      " " +
                      chironAspects[i].aspected_planet.toLowerCase() +
                      "</span>"
                  );
                } else {
                  jQuery(".chiron-aspects-2").append(
                    '<span class="content-wrap"> ' +
                      chironAspects[i].type.toLowerCase() +
                      " " +
                      chironAspects[i].aspected_planet.toLowerCase() +
                      "</span>"
                  );
                }
              }
            } else {
              document.querySelector(".chiron-col").style = "display:none";
            }
            if (midheavenAspects) {
              jQuery(".midheaven-aspects").html("");
              jQuery(".midheaven-aspects-2").html("");

              for (var i = midheavenAspects.length - 1; i >= 0; i--) {
                if (midheavenAspects[i].aspected_planet == "Part of Fortune") {
                  continue;
                }
                if (i % 2 == 0) {
                  jQuery(".midheaven-aspects").append(
                    '<span class="content-wrap"> ' +
                      midheavenAspects[i].type.toLowerCase() +
                      " " +
                      midheavenAspects[i].aspected_planet.toLowerCase() +
                      "</span>"
                  );
                } else {
                  jQuery(".midheaven-aspects-2").append(
                    '<span class="content-wrap"> ' +
                      midheavenAspects[i].type.toLowerCase() +
                      " " +
                      midheavenAspects[i].aspected_planet.toLowerCase() +
                      "</span>"
                  );
                }
              }
            }
            if (midheavenAspects.length < 1) {
              document.querySelector(".mid-heaven-col").style = "display:none";
            }
            if (Object.getOwnPropertyNames(midheavenAspects).length === 0) {
              document.querySelector(".midheaven-col").style = "display:none";
            }
            if (ascendantAspects.length > 0) {
              jQuery(".ascendant-aspects").html("");
              jQuery(".ascendant-aspects-2").html("");
              for (var i = ascendantAspects.length - 1; i >= 0; i--) {
                if (ascendantAspects[i].aspected_planet == "Part of Fortune") {
                  continue;
                }
                if (i % 2 == 0) {
                  jQuery(".ascendant-aspects").append(
                    '<span class="content-wrap"> ' +
                      ascendantAspects[i].type.toLowerCase() +
                      " " +
                      ascendantAspects[i].aspected_planet.toLowerCase() +
                      "</span>"
                  );
                } else {
                  jQuery(".ascendant-aspects-2").append(
                    '<span class="content-wrap"> ' +
                      ascendantAspects[i].type.toLowerCase() +
                      " " +
                      ascendantAspects[i].aspected_planet.toLowerCase() +
                      "</span>"
                  );
                }
              }
            } else {
              document.querySelector(".ascendant-col").style = "display:none";
            }

            var correctedPlanetDegrees = {
              Sun: [],
              Moon: [],
              Mars: [],
              Mercury: [],
              Jupiter: [],
              Venus: [],
              Saturn: [],
              Uranus: [],
              Neptune: [],
              Pluto: [],
              NNode: [],
              Chiron: [],
              Ascendant: [],
              Mc: [],
            };
            var ascendantInHouse = {
              house: 0,
              start_degree: resp.houses[0].degree,
              end_degree: resp.houses[1].degree,
              planet_name: "Ascendant",
              planet_degree: resp.ascendant,
              speed: 0,
            };

            var MCHouse = getHouseNumber(
              resp.houses,
              zodiac[getSignNumber(resp.midheaven)]
            );
            var McInHouse = {
              house: reqData.house_type === "whole_sign" ? MCHouse : 9,
              start_degree:
                reqData.house_type === "whole_sign"
                  ? resp.houses[MCHouse].degree
                  : resp.houses[9].degree,
              end_degree:
                reqData.house_type === "whole_sign"
                  ? resp.houses[parseInt(MCHouse) + 1].degree
                  : resp.houses[10].degree,
              planet_name: "Mc",
              planet_degree: resp.midheaven,
              speed: 0,
            };

            modalData[0]["planets_in_house"].push(ascendantInHouse);
            modalData[0]["planets"].push("Ascendant");
            modalData[McInHouse.house]["planets_in_house"].push(McInHouse);
            modalData[McInHouse.house]["planets"].push("Mc");
            for (var i = 0; i < resp.houses.length; i++) {
              modalData[i]["house_name"] = house[resp.houses[i].house - 1];
              modalData[i]["sign_name"] = resp.houses[i].sign;
              modalData[resp.planets[i].house - 1]["planets"].push(
                resp.planets[i].name
              );

              var planetsInHouse = {
                house: resp.planets[i].house - 1,
                start_degree: resp.houses[resp.planets[i].house - 1].degree,
                end_degree: resp.houses[fix(12, resp.planets[i].house)].degree,
                planet_name: resp.planets[i].name,
                planet_degree: resp.planets[i].full_degree,
                speed: resp.planets[i].speed,
              };

              modalData[resp.planets[i].house - 1]["planets_in_house"].push(
                planetsInHouse
              );
            }

            modalData.map(function (currentValue, index, arr) {
              currentValue.planets_in_house.sort(function (a, b) {
                return (
                  parseFloat(a.planet_degree) - parseFloat(b.planet_degree)
                );
              });

              correctedDegrees(currentValue);

              for (var i = 0; i < currentValue.planets_in_house.length; i++) {
                if (
                  currentValue.planets_in_house[i]["planet_name"] === "Node"
                ) {
                  correctedPlanetDegrees["NNode"].push(
                    currentValue.planets_in_house[i]["corrected_degree"]
                  );
                  correctedPlanetDegrees["NNode"].push(
                    currentValue.planets_in_house.length
                  );
                  correctedPlanetDegrees["NNode"].push(
                    currentValue.planets_in_house[i].house
                  );
                  correctedPlanetDegrees["NNode"].push(
                    currentValue.planets_in_house[i].speed
                  );
                } else {
                  correctedPlanetDegrees[
                    currentValue.planets_in_house[i]["planet_name"]
                  ].push(currentValue.planets_in_house[i]["corrected_degree"]);
                  correctedPlanetDegrees[
                    currentValue.planets_in_house[i]["planet_name"]
                  ].push(currentValue.planets_in_house.length);
                  correctedPlanetDegrees[
                    currentValue.planets_in_house[i]["planet_name"]
                  ].push(currentValue.planets_in_house[i].house);
                  correctedPlanetDegrees[
                    currentValue.planets_in_house[i]["planet_name"]
                  ].push(currentValue.planets_in_house[i].speed);
                }
              }

              return arr[index];
            });

            var data = {
              planets: {
                Sun: [resp.planets[0].full_degree, resp.planets[0].speed],
                Moon: [resp.planets[1].full_degree, resp.planets[1].speed],
                Mars: [resp.planets[2].full_degree, resp.planets[2].speed],
                Mercury: [resp.planets[3].full_degree, resp.planets[3].speed],
                Jupiter: [resp.planets[4].full_degree, resp.planets[4].speed],
                Venus: [resp.planets[5].full_degree, resp.planets[5].speed],
                Saturn: [resp.planets[6].full_degree, resp.planets[6].speed],
                Uranus: [resp.planets[7].full_degree, resp.planets[7].speed],
                Neptune: [resp.planets[8].full_degree, resp.planets[8].speed],
                Pluto: [resp.planets[9].full_degree, resp.planets[9].speed],
                NNode: [resp.planets[10].full_degree, resp.planets[10].speed],
                Chiron: [resp.planets[11].full_degree, resp.planets[11].speed],
                Ascendant: [resp.ascendant, 0],
                Mc: [resp.midheaven, 0],
              },
              corrected_planets: correctedPlanetDegrees,
              aspect_planets: {},
              cusps: [
                resp.houses[0].degree,
                resp.houses[1].degree,
                resp.houses[2].degree,
                resp.houses[3].degree,
                resp.houses[4].degree,
                resp.houses[5].degree,
                resp.houses[6].degree,
                resp.houses[7].degree,
                resp.houses[8].degree,
                resp.houses[9].degree,
                resp.houses[10].degree,
                resp.houses[11].degree,
              ],
            };

            var windowSize = $(window).width();

            var scale = 1;
            var isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;

            if (windowSize <= 1900 && isMac) {
              var scale = 0.5;
            }

            if ((windowSize) => 1440) {
              var chartSize = 650;
            }
            if (windowSize <= 1439 && windowSize >= 767) {
              var chartSize = 500;
            }
            if (windowSize <= 768 && windowSize >= 320) {
              var chartSize = $(window).width() - 100;
              var scale = 0.5;
            }
            var chartSize = 650;
            var settings = {
              COLOR_BACKGROUND: "#bbdefb", // Background color
              POINTS_COLOR: "#4c4c4c", //planets color
              SIGNS_COLOR: "#4c4c4c", //Sign color
              COLOR_ARIES: "#4c4c4c",
              COLORS_SIGNS: [
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
                "#ffffff",
              ],
              MARGIN: chartSize / 40,
            };

            var isWholeSign = false;

            if (reqData["house_type"] === "whole_sign") {
              isWholeSign = true;
            }

            // document.body.innerHTML += '';

            var radix = new astrology.Chart(
              "schart",
              chartSize,
              chartSize,
              settings
            );

            radix.radix(data, isWholeSign);

            var radixStatic = new astrology.Chart(
              "schart-static",
              chartSize,
              chartSize,
              settings,
              isStatic
            );

            radixStatic.radix(data, false, true);

            setTimeout(function () {
              document.querySelector("#astrology-radix-planets").style.display =
                "block";

              // svgAsPngUri(
              //   document.getElementById("astrologyStatic"),
              //   {
              //     modifyCss: modifyStyle,
              //     encoderOptions: 1,
              //     scale: scale
              //   }
              // ).then(
              //   uri => (document.querySelector("#img").src = uri),
              $("#cover-spin").hide(0);
              // );
            }, 1000);
          },
          function (err) {
            //error
          }
        );
      });

      function modifyStyle() {
        return `@font-face {
    font-family: GothamRMedium;

    src: url(//cdn.shopify.com/s/files/1/1582/1903/t/7/assets/OfficialHeavenlyBodiesFont-Regular.eot?v=3156783750659878182);

    }
    @font-face {
    font-family: numberFont;
    src: url(//cdn.shopify.com/s/files/1/1582/1903/t/7/assets/P22DeaScr.eot?v=8092603526512991313);

    font-display: swap;
    }

    text {
    font-family: 'numberFont', sans-serif !important;
    stroke: #231f20;
    stroke-width: 0px;
    font-weight: normal !important;
    position: relative;
    }
    text tspan {
    font-family: 'GothamRMedium', sans-serif !important;
    stroke: #231f20;
    stroke-width: 0.6px;
    font-weight: normal !important;
    }
    body{width:650px}
    text tspan.planetDegree {
    color: #231f20;
    stroke: #231f20;
    stroke-width: 0;
    display: block;
    font-size: 14px;
    }`;
      }

      function correctedDegrees(planetsData) {
        switch (planetsData.planets_in_house.length) {
          case 1:
          case "1":
            if (
              Math.abs(
                planetsData.planets_in_house[0].start_degree -
                  planetsData.planets_in_house[0].planet_degree
              ) <= 5
            ) {
              planetsData.planets_in_house[0].corrected_degree =
                parseInt(planetsData.planets_in_house[0].start_degree) + 4;
            } else if (
              Math.abs(
                planetsData.planets_in_house[0].end_degree -
                  planetsData.planets_in_house[0].planet_degree
              ) <= 5 ||
              Math.abs(
                planetsData.planets_in_house[0].end_degree -
                  planetsData.planets_in_house[0].planet_degree
              ) >= 355
            ) {
              planetsData.planets_in_house[0].corrected_degree =
                parseInt(planetsData.planets_in_house[0].end_degree) - 6;
            } else {
              planetsData.planets_in_house[0].corrected_degree = parseInt(
                planetsData.planets_in_house[0].planet_degree
              );
            }

            break;

          case 2:
          case "2":
            if (
              Math.abs(
                planetsData.planets_in_house[0].start_degree -
                  planetsData.planets_in_house[0].planet_degree
              ) <= 5
            ) {
              planetsData.planets_in_house[0].corrected_degree =
                parseInt(planetsData.planets_in_house[0].start_degree) + 4;
            } else if (
              Math.abs(
                planetsData.planets_in_house[0].end_degree -
                  planetsData.planets_in_house[0].planet_degree
              ) <= 5
            ) {
              planetsData.planets_in_house[0].corrected_degree =
                parseInt(planetsData.planets_in_house[0].end_degree) - 5;
            } else {
              planetsData.planets_in_house[0].corrected_degree = parseInt(
                planetsData.planets_in_house[0].planet_degree
              );
            }
            if (
              Math.abs(
                planetsData.planets_in_house[1].start_degree -
                  planetsData.planets_in_house[1].planet_degree
              ) <= 5
            ) {
              planetsData.planets_in_house[1].corrected_degree =
                parseInt(planetsData.planets_in_house[1].start_degree) + 4;
            } else if (
              Math.abs(
                planetsData.planets_in_house[1].end_degree -
                  planetsData.planets_in_house[1].planet_degree
              ) <= 5 ||
              Math.abs(
                planetsData.planets_in_house[1].end_degree -
                  planetsData.planets_in_house[1].planet_degree
              ) >= 355
            ) {
              planetsData.planets_in_house[1].corrected_degree =
                parseInt(planetsData.planets_in_house[1].end_degree) - 5;
            } else {
              planetsData.planets_in_house[1].corrected_degree = parseInt(
                planetsData.planets_in_house[1].planet_degree
              );
            }

            if (
              Math.abs(
                parseInt(planetsData.planets_in_house[0].planet_degree) -
                  parseInt(planetsData.planets_in_house[1].planet_degree)
              ) <= 10
            ) {
              if (
                Math.abs(
                  parseInt(planetsData.planets_in_house[0].planet_degree) -
                    parseInt(planetsData.planets_in_house[1].start_degree)
                ) >
                Math.abs(
                  parseInt(planetsData.planets_in_house[0].planet_degree) -
                    parseInt(planetsData.planets_in_house[1].end_degree)
                )
              ) {
                planetsData.planets_in_house[0].corrected_degree =
                  planetsData.planets_in_house[0].end_degree - 15;
                planetsData.planets_in_house[1].corrected_degree =
                  planetsData.planets_in_house[1].end_degree - 5;
              } else {
                planetsData.planets_in_house[0].corrected_degree =
                  planetsData.planets_in_house[0].start_degree + 10;
                planetsData.planets_in_house[1].corrected_degree =
                  planetsData.planets_in_house[1].start_degree + 20;
              }
            }

            break;

          case 3:
          case "3":
            planetsData.planets_in_house[0]["corrected_degree"] =
              parseInt(planetsData.planets_in_house[0].start_degree) + 7;
            planetsData.planets_in_house[1]["corrected_degree"] =
              parseInt(planetsData.planets_in_house[0].start_degree) + 16;
            planetsData.planets_in_house[2]["corrected_degree"] =
              parseInt(planetsData.planets_in_house[0].start_degree) + 24;

            break;

          case 4:
          case "4":
            planetsData.planets_in_house[0]["corrected_degree"] =
              parseInt(planetsData.planets_in_house[0].start_degree) + 4;
            planetsData.planets_in_house[1]["corrected_degree"] =
              parseInt(planetsData.planets_in_house[0].start_degree) + 10;
            planetsData.planets_in_house[2]["corrected_degree"] =
              parseInt(planetsData.planets_in_house[0].start_degree) + 18;
            planetsData.planets_in_house[3]["corrected_degree"] =
              parseInt(planetsData.planets_in_house[0].start_degree) + 25;

            break;

          case 5:
          case "5":
            planetsData.planets_in_house[0]["corrected_degree"] =
              parseInt(planetsData.planets_in_house[0].start_degree) + 4;
            planetsData.planets_in_house[1]["corrected_degree"] =
              parseInt(planetsData.planets_in_house[0].start_degree) + 9;
            planetsData.planets_in_house[2]["corrected_degree"] =
              parseInt(planetsData.planets_in_house[0].start_degree) + 15;
            planetsData.planets_in_house[3]["corrected_degree"] =
              parseInt(planetsData.planets_in_house[0].start_degree) + 20;
            planetsData.planets_in_house[4]["corrected_degree"] =
              parseInt(planetsData.planets_in_house[0].start_degree) + 25;

            break;

          case 6:
          case "6":
            planetsData.planets_in_house[0]["corrected_degree"] =
              parseInt(planetsData.planets_in_house[0].start_degree) + 3;
            planetsData.planets_in_house[1]["corrected_degree"] =
              parseInt(planetsData.planets_in_house[0].start_degree) + 7;
            planetsData.planets_in_house[2]["corrected_degree"] =
              parseInt(planetsData.planets_in_house[0].start_degree) + 12;
            planetsData.planets_in_house[3]["corrected_degree"] =
              parseInt(planetsData.planets_in_house[0].start_degree) + 17;
            planetsData.planets_in_house[4]["corrected_degree"] =
              parseInt(planetsData.planets_in_house[0].start_degree) + 22;
            planetsData.planets_in_house[5]["corrected_degree"] =
              parseInt(planetsData.planets_in_house[0].start_degree) + 27;

            break;

          case 7:
          case "7":
            planetsData.planets_in_house[0]["corrected_degree"] =
              parseInt(planetsData.planets_in_house[0].start_degree) + 2;
            planetsData.planets_in_house[1]["corrected_degree"] =
              parseInt(planetsData.planets_in_house[0].start_degree) + 6;
            planetsData.planets_in_house[2]["corrected_degree"] =
              parseInt(planetsData.planets_in_house[0].start_degree) + 10;
            planetsData.planets_in_house[3]["corrected_degree"] =
              parseInt(planetsData.planets_in_house[0].start_degree) + 15;
            planetsData.planets_in_house[4]["corrected_degree"] =
              parseInt(planetsData.planets_in_house[0].start_degree) + 19;
            planetsData.planets_in_house[5]["corrected_degree"] =
              parseInt(planetsData.planets_in_house[0].start_degree) + 23;
            planetsData.planets_in_house[6]["corrected_degree"] =
              parseInt(planetsData.planets_in_house[0].start_degree) + 27;

            break;

          default:
            break;
        }
        return planetsData;
      }

      function fix(fixNum, d) {
        while (d >= fixNum) {
          d -= fixNum;
        }

        while (d < 0) {
          d += fixNum;
        }

        return d;
      }

      function ajaxCall(apiName, data) {
        $("#cover-spin").show(0);
        var userId = "605788";
        var apiKey = "aebefb6e8d4f9cede602a2e32c1de34c";

        var request = $.ajax({
          url: "https://json.astrologyapi.com/v1/" + apiName,
          method: "POST",
          dataType: "json",
          headers: {
            authorization: "Basic " + btoa(userId + ":" + apiKey),
            "Content-Type": "application/json",
          },
          data: JSON.stringify(data),
        });

        return request.then(
          function (resp) {
            return resp;
          },
          function (err) {
            return err;
          }
        );
      }
      function getHouseNumber(houses, sign) {
        for (var i = 0; i < houses.length; i++) {
          if (houses[i].sign === sign) {
            return houses[i].house - 1;
          }
        }
      }

      function getSignNumber(deg) {
        let num = 0;

        while (deg >= 30.0) {
          deg -= 30;
          num++;
        }
        if (num === 12) num = 0;
        return num;
      }
    });
  }
}

const formScriptEl = document.querySelector(
  "#form-context-66f4377590313d7d43f20d7d"
);

// hide form block immediately
if (
  formScriptEl &&
  !document.documentElement.classList.contains("squarespace-damask")
) {
  formScriptEl?.closest(".fe-block")?.setAttribute("hidden", true);
}
const afterDomContentLoaded = async () => {
  const appRoot = document.querySelector('[data-root="app"]');

  if (!appRoot) {
    throw new Error("App root not found");
  }

  const loader = new Loader("AIzaSyC2dy-TF9GaX7a0_6ZuIsxxjrGxePbCPyo", {
    libraries: ["places"],
  });

  const google = await loader.load();

  const options = {
    types: ["(cities)"],
  };

  const mapSuggestionInput = appRoot.querySelector("#place");
  const ac = new google.maps.places.Autocomplete(mapSuggestionInput, options);
  ac.addListener("place_changed", makeHandler(ac));

  const birthChartForm = appRoot.querySelector("#birth_chart");
  birthChartForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
  });
  const birthChartCreateButton = appRoot.querySelector("#astro-button");
  const exportToPdfButton = appRoot.querySelector(".exportToPdf");

  const SS_FORM = formScriptEl.parentElement.querySelector("form");
  SS_FORM.addEventListener("submit", (ev) => {
    ev.preventDefault();
  });

  // createChart();
  birthChartCreateButton?.addEventListener("click", (ev) => {
    const formData = new FormData(birthChartForm);
    const email = appRoot.querySelector("#emailfield").value;
    // const email = appRoot.querySelector("#emailfield").value;
    createChart();
    // sendToMailchimp(email);

    SS_FORM.querySelector('[type="email"]').setAttribute("name", "SQF_EMAIL");
    const SQF_EMAIL = SS_FORM.querySelector('[name="SQF_EMAIL"]');

    const formDataObj = {};
    formData.forEach((value, key) => (formDataObj[key] = value));
    [SQF_EMAIL].forEach((inp) => {
      const normalizedPropName = `${inp.name}`
        .replace("SQF_", "")
        .toLowerCase();

      updateFormInput(inp, formDataObj[normalizedPropName]);
    });
    // console.log(formDataObj);
    // const SS_FORM_DATA = new FormData(SS_FORM);
    // const SSFormDataObj = {};
    // SS_FORM_DATA.forEach((value, key) => (SSFormDataObj[key] = value));
    // console.log(SSFormDataObj);
    SS_FORM?.dispatchEvent(new Event("submit", { bubbles: true }));
  });

  exportToPdfButton?.addEventListener("click", async (ev) => {
    await import(
      "https://cdnjs.cloudflare.com/ajax/libs/save-svg-as-png/1.4.17/saveSvgAsPng.min.js"
    );
    const imgSrcInp = appRoot.querySelector(".chart-image-static>svg");
    const imgSrcOut = appRoot.querySelector(".chartPngFromSvg");

    const uri = await svgAsPngUri(imgSrcInp, {
      modifyCss: modifyStyleForImg,
      encoderOptions: 1,
      scale: 1,
    });

    imgSrcOut.src = uri;

    const { jsPDF } = await import(
      "https://cdn.jsdelivr.net/npm/jspdf@2.5.2/+esm"
    );

    // const doc = new jsPDF("l", "mm", [1200, 1210]);
    // const pdfjs = document.querySelector("#chart-results");

    // doc.html(pdfjs, {
    //   callback: function (doc) {
    //     doc.save("output.pdf");
    //   },
    //   x: 10,
    //   y: 10
    // });
    const html2canvas = await import(
      "https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/+esm"
    );

    const frame = await html2canvas.default(
      document.querySelector("#chart-results"),
      {
        useCORS: true,
        allowTaint: true,
        async onclone(doc, ele) {
          // console.log(doc, ele);
          // sleep for 1 second using promise and then do something
          ele.setAttribute("data-mode", "export");
          // or doc.style.opacity = '1', doc.style.visibility = 'visible' ...
        },
      }
    );
    const imgData = frame.toDataURL("image/jpeg", 1.0);

    console.log(imgData);
    // const pdf = new jsPDF("p", "mm", [1560,2300]);
    const pdf = new jsPDF("p", "pt", [frame.width * 0.75, frame.height * 0.75]);

    pdf.addImage(imgData, "JPEG", 0, 0);
    pdf.save(
      `${appRoot
        .querySelector("#fname")
        .value.trim()
        .replaceAll(" ", "-")}-result.pdf`
    );
    // appRoot.appendChild(frame);
  });
};

document.addEventListener("DOMContentLoaded", afterDomContentLoaded);
