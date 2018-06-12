
  function FR() {
    chrome.tabs.executeScript({file: 'content.js'});
  }

  document.addEventListener('DOMContentLoaded', function() {
      let openRajaTab = document.getElementById('schools')
      openRajaTab.addEventListener('click', function() {
        chrome.tabs.create({ url: 'http://www.rajaleidja.ee/korgkoolid' })

      })
    })


    document.getElementById('wordRep').addEventListener('click', FR);
