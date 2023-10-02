const toggleButton = document.getElementById('button')
const flexContainer = document.querySelector('.camera-button')

toggleButton.addEventListener('click', function () {
  if (flexContainer.style.justifyContent === 'flex-start') {
    flexContainer.style.justifyContent = 'flex-end'
    flexContainer.style.background = '#120B48'
  } else {
    flexContainer.style.justifyContent = 'flex-start'
    flexContainer.style.background = 'gray'
  }
})

const toggleAudioButton = document.getElementById('audio-button')
const flexAudioContainer = document.querySelector('.audio-button')

toggleAudioButton.addEventListener('click', function () {
  if (flexAudioContainer.style.justifyContent === 'flex-start') {
    flexAudioContainer.style.justifyContent = 'flex-end'
    flexAudioContainer.style.background = '#120B48'
  } else {
    flexAudioContainer.style.justifyContent = 'flex-start'
    flexAudioContainer.style.background = 'gray'
  }
})

// const shareButton = document.getElementById('record-start-button')

// shareButton.addEventListener('click', async () => {
//   try {
//     const stream = await navigator.mediaDevices.getDisplayMedia({ video: true })
//   } catch (error) {
//     console.error('Error accessing screen sharing:', error)
//   }
// })

document.addEventListener('DOMContentLoaded', () => {
  const startRecordingButton = document.querySelector(
    'button#record-start-button'
  )

  startRecordingButton.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: 'request_recording' },
        function (response) {
          if (!chrome.runtime.lastError) {
            console.log(response)
          } else {
            console.log(chrome.runtime.lastError, 'error line 14')
          }
        }
      )
    })
  })
})

// const start = async () => {
//   const stream = await navigator.mediaDevices.getDisplayMedia({
//     video: {
//       mediaSource: 'screen',
//     },
//   })
// }

// start()
