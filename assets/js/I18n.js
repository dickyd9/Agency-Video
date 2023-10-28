const defaultLocale = "en"
let locale

document.addEventListener("DOMContentLoaded", () => {
  setLocale(defaultLocale)
  bindLocaleSwitcher(defaultLocale)
})
// ...
// Whenever the user selects a new locale, we
// load the locale's translations and update
// the page
function bindLocaleSwitcher(initialValue) {
  const switcher = document.querySelector("[data-i18n-switcher]")
  switcher.value = initialValue
  switcher.onchange = (e) => {
    // Set the locale to the selected option[value]
    setLocale(e.target.value)
  }
}

const translations = {
  id: {
    "app-title": "Website Sa",
    lead: "Selamat Datang Di Website Saya",
  },

  en: {
    "app-title": "My Website",
    lead: "Welcome to my Website",
  },
}

document.addEventListener("DOMContentLoaded", () => {
  document
    // Find all elements that have the key attribute
    .querySelectorAll("[data-i18n-key]")
    .forEach(translateElement)
})
// Replace the inner text of the given HTML element
// with the translation in the active locale,
// corresponding to the element's data-i18n-key
function translateElement(element) {
  const key = element.getAttribute("data-i18n-key")
  const translation = translations[locale][key]
  element.innerText = translation
}
