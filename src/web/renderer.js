const wrapper = document.getElementById('wrapper')
const menuGamesLink = document.getElementById('menu_games_link')
const menuReposLink = document.getElementById('menu_repos_link')
const menuDownloadsLink = document.getElementById('menu_downloads_link')
const menuSettingsLink = document.getElementById('menu_settings_link')

const languageId = 'en'
const mainPage = 'games_page'

async function setLanguage(lang) {
  const response = await fetch(`./lang/${lang}.json`)
  const words = await response.json()

  for (let word in words) {
    const element = document.getElementById(word)
    if (element) {
      element.innerText = words[word]
    }
  }
}

function setPage(page_id) {
  const template = document.getElementById(page_id)
  wrapper.innerHTML = ''
  wrapper.appendChild(template.content.cloneNode(true))
}

menuGamesLink.addEventListener('click', () => {
  setPage('games_page')
  setLanguage(languageId)
})
menuReposLink.addEventListener('click', () => {
  setPage('repos_page')
  setLanguage(languageId)
})
menuDownloadsLink.addEventListener('click', () => {
  setPage('downloads_page')
  setLanguage(languageId)
})
menuSettingsLink.addEventListener('click', () => {
  setPage('settings_page')
  setLanguage(languageId)
})

setLanguage(languageId)
setPage(mainPage)
