const templateScripts = [
  '/libs/popper/js/popper.min.js',
  '/libs/jquery/js/jquery.min.js',
  '/libs/bootstrap/js/bootstrap.min.js',
  '/libs/slick/js/slick.min.js',
  '/libs/mmenu/js/jquery.mmenu.all.min.js',
  '/assets/js/app.js',
]

declare global {
  interface Window {
    __mojuriScriptsLoaded?: boolean
  }
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existed = document.querySelector(`script[data-mojuri-script="${src}"]`)
    if (existed) {
      resolve()
      return
    }

    const script = document.createElement('script')
    script.src = src
    script.async = false
    script.dataset.mojuriScript = src
    script.onload = () => resolve()
    script.onerror = () => reject(new Error(`Không tải được script: ${src}`))
    document.body.appendChild(script)
  })
}

export async function loadTemplateScripts() {
  for (const src of templateScripts) {
    await loadScript(src)
  }
  window.__mojuriScriptsLoaded = true
}

export function refreshTemplateEffects() {
  window.dispatchEvent(new Event('resize'))

  const anyWindow = window as unknown as { jQuery?: (selector: string | Document) => unknown }
  if (typeof anyWindow.jQuery === 'function') {
    const jq = anyWindow.jQuery as any
    try {
      jq(document).trigger('ready')
    } catch {
      // Template jQuery plugins may already be initialized. Ignore duplicate init errors.
    }
  }
}
