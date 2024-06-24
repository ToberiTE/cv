const translations = {
  se: {
    loc: `<i class="fas fa-map-marker-alt"></i> Örnsköldsvik, Sverige`,
    a_h2: "Erfarenhet",
    a_h4_1: "AFRY, Systemutvecklare.",
    a_ul_1_li_1:
      "Webbutveckling i ProTAK, en programvara för produktionsoptimering.",
    a_ul_1_li_2:
      "Utvecklade BI rapport lösning åt kund för att förenkla redovisning av produktionsdata.",
    a_ul_1_li_3:
      "Arbete med modernisering av komponenter från KnockoutJS till ReactJS och diverse supportärenden.",
    a_h4_2: "Flexeurope, Teknikinformatör",
    a_ul_2_li_1:
      "Slutförde arbete med författande av programvarumanualer för äldre och fram till aktuella versioner.",
    a_ul_2_li_2:
      "Systemkonfiguration och test av funktionalitet i programvara för att möjliggöra dokumentation.",
    a_h4_3: "CoreIT, Systemutvecklare",
    a_ul_3_li_1:
      "Utvecklade webbapplikation för kunder att prenumerera på driftinformation om företagstjänster.",
    a_ul_3_li_2: "Vidareutveckling av applikation för projekthantering.",
    a_h4_4: "Projekt",
    a_ul_4_li_1:
      "Nätverksskanner för att skanna. visualisera nätverk och visa detaljer om anslutna enheter.",
    a_h4_5: "Projekt",
    a_ul_5_li_1:
      "Applikation för att visualisera data och med stöd av ML skapa prognoser. Meddela mig om åtkomst.",
    b_h2: "Certifieringar",
    c_h2: "Kompetenser",
    c_span_1: "Språk",
    c_span_2: "Ramverk",
    c_span_3: "Tekniker & Verktyg",
    c_span_4: "Övriga",
    other_skills: `
    Generativ AI,
    Automation,
    Dataanalys,
    Datavisualisering,
    Datamigrering,
    Agila metoder,
    Funktionsanalys,
    Testning,
    Teknisk dokumentation,
    Systemkonfiguration,
    Cybersäkerhet,
    Nätverksinfrastruktur`,
    d_h2: "Utbildning",
    d_h4_1: "Yrkeshögskoleexamen",
    d_p_1: "Systemutvecklare .NET",
    e_h2: "Övrigt",
    e_p_1: "Körkort B",
    e_p_2: "Engelska, flytande.",
  },
  en: {
    loc: `<i class="fas fa-map-marker-alt"></i> Ornskoldsvik, Sweden`,
    a_h2: "Experience",
    a_h4_1: "AFRY, Software Developer.",
    a_ul_1_li_1:
      "Web development in ProTAK, a software for production optimization.",
    a_ul_1_li_2:
      "Developed BI report solution for client to enable simpler reporting of production data.",
    a_ul_1_li_3:
      "Work with modernization of components from KnockoutJS to ReactJS and various support matters.",
    a_h4_2: "Flexeurope, Technical Writer",
    a_ul_2_li_1:
      "Completed work on writing software manuals for older and up to current versions.",
    a_ul_2_li_2:
      "System configuration and testing of software functionality to enable documentation.",
    a_h4_3: "CoreIT, Software Developer",
    a_ul_3_li_1:
      "Developed web application for customers to subscribe to recieve operational information for business services.",
    a_ul_3_li_2: "Development of application for managing projects.",
    a_h4_4: "Project",
    a_ul_4_li_1:
      "Network scanner for scanning, visualizing networks and viewing details about connected devices.",
    a_h4_5: "Project",
    a_ul_5_li_1:
      "Application for visualizing data and with support of ML create forecasts. Notify me about access.",
    b_h2: "Certifications",
    c_h2: "Skills",
    c_span_1: "Languages",
    c_span_2: "Frameworks",
    c_span_3: "Technologies & Tools",
    c_span_4: "Other",
    other_skills: `
    Generative AI,
    Automation,
    Data analysis,
    Data visualization,
    Data migration,
    Agile methods,
    Functional analysis,
    Testing,
    Technical writing,
    System configuration,
    Cybersecurity,
    Network infrastructure`,
    d_h2: "Education",
    d_h4_1: "HVE Diploma",
    d_p_1: "Software Developer .NET",
    e_h2: "Other",
    e_p_1: "Drivers license",
    e_p_2: "Swedish, native.",
  },
};

let currentLang = "se";

const btn = document.getElementById("switchLangBtn");

btn.onclick = function (e) {
  e.preventDefault();
  currentLang = currentLang === "se" ? "en" : "se";
  document.querySelector("html").lang = currentLang;
  translatePage(currentLang);
  btn.title = currentLang === "se" ? "View in English" : "Visa på Svenska";
  if (!isDarkTheme) {
    currentLang === "se"
      ? (themeBtn.title = "Växla till mörkt tema")
      : (themeBtn.title = "Switch to dark theme");
  } else {
    currentLang === "se"
      ? (themeBtn.title = "Växla till ljust tema")
      : (themeBtn.title = "Switch to light theme");
  }
};

function translatePage(lang) {
  document.querySelectorAll("[data-t]").forEach((el) => {
    const key = el.getAttribute("data-t");
    el.innerHTML = translations[lang][key];
  });
}
