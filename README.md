# How to implement i18n in React Applications 

Here's a full guide how to add internalization in your React Projects. 

## Step 1: Installation
Open terminal and run this command - 
```
npm install i18next react-i18next i18next-browser-languagedetector i18next-http-backend
```

## Step 2: Creat *i18n.js* files in direct *src* folder
Go to src folder and direct child create i18n.js files and put it, this code. 
```
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18next
  .use(Backend)           // Lazily loads JSON files from /public/locales/
  .use(LanguageDetector)  // Detects browser language automatically
  .use(initReactI18next)  // Connects i18next to React
  .init({
    debug: true,
    fallbackLng: "en",

    // Default namespace (used when you don't specify one)
    defaultNS: "common",

    backend: {
      // Template: /locales/{language}/{namespace}.json
      // Example:  /locales/en/home.json
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

```
## Step 3: Create *Locals* folder inside *Public* Folder 
Create **locals** folder inside Public folder and inside locals folder create folde like **en** and **hi**. 
Inside en folder - make pages for examples - **about.json**, **home.json**, **common.json**. And store it json content like for examples - 
### Inside about.json Files in en folder
```
{
  "title": "About Studentoo",
  "subtitle": "Empowering students to learn smarter, not harder.",
  "mission_title": "Our Mission",
  "mission_body": "Studentoo is a learning platform built to make education accessible and engaging for every student. We provide quizzes, study tools, and community support to help you succeed.",
  "team_title": "Our Team",
  "team_body": "We are a passionate team of educators and developers who believe that the right tools can transform learning.",
  "vision_title": "Our Vision",
  "vision_body": "A world where every student has access to quality education, regardless of location or background."
}
```
### Inside common.json Files in en folder
```
{
  "nav_home": "Home",
  "nav_quiz": "Quiz",
  "nav_login": "Login",
  "nav_about": "About Us",
  "btn_submit": "Submit",
  "btn_cancel": "Cancel",
  "btn_back": "Go Back",
  "lang_en": "English",
  "lang_hi": "Hindi"
}
```

Make same as **hi** folder for hindi translations. And make same folders like **about.json**, **home.json**, **common.json**. And store it json content like for examples - 
### Inside about.js files in hi folder
```
{
  "title": "Studentoo के बारे में",
  "subtitle": "छात्रों को स्मार्ट तरीके से सीखने के लिए सशक्त बनाना।",
  "mission_title": "हमारा मिशन",
  "mission_body": "Studentoo एक शिक्षण प्लेटफ़ॉर्म है जो हर छात्र के लिए शिक्षा को सुलभ और आकर्षक बनाने के लिए बनाया गया है।",
  "team_title": "हमारी टीम",
  "team_body": "हम शिक्षकों और डेवलपर्स की एक जुनूनी टीम हैं जो मानते हैं कि सही उपकरण सीखने को बदल सकते हैं।",
  "vision_title": "हमारी दृष्टि",
  "vision_body": "एक ऐसी दुनिया जहाँ हर छात्र को स्थान या पृष्ठभूमि की परवाह किए बिना गुणवत्तापूर्ण शिक्षा तक पहुँच हो।"
}
```
### Inside common.js files in hi folder
```
{
  "nav_home": "होम",
  "nav_quiz": "क्विज़",
  "nav_login": "लॉगिन",
  "nav_about": "हमारे बारे में",
  "btn_submit": "जमा करें",
  "btn_cancel": "रद्द करें",
  "btn_back": "वापस जाएं",
  "lang_en": "English",
  "lang_hi": "हिन्दी"
}
```

## Step 3: Import *i18n.js* files inside *main.jsx* file.
```
import "./i18n.js"; //For languages internationalizatio
```

## Step 4: Use it with the help of useTranslation() hook 
Go to any page which you want. For example go to home page. Initilize hook. 
```
  const { t } = useTranslation("home"); // loads /locales/{lang}/home.json
```
And below use it. 
```
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <h2>{t("secondary_title")}</h2>
      <p>{t("secondary_description")}</p>
    </div>
```

## Step 5: Make dropdown in *Header.jsx* files. 
Change languages using changeLanguage() methods. 
```
 i18n.changeLanguage()
```
### For Examples: Header.jsx 
```
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation("common"); // loads /locales/{lang}/common.json

  const handleOnChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="header">
      <NavLink to="/"><p>{t("nav_home")}</p></NavLink>
      <NavLink to="/quiz"><p>{t("nav_quiz")}</p></NavLink>
      <NavLink to="/login"><p>{t("nav_login")}</p></NavLink>
      <NavLink to="/about-us"><p>{t("nav_about")}</p></NavLink>

      <select name="" id="" onChange={handleOnChange}>
        <option value="en">{t("lang_en")}</option>
        <option value="hi">{t("lang_hi")}</option>
      </select>
    </div>
  );
};

export default Header;
```
## Step 6. Run command npm run dev and check it.
