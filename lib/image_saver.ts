import ReactDOM from 'react-dom'

export function saveReferenceToSVG(
    ref: React.RefObject<React.Component>,
    filename: string
) {
    if (!ref.current) return

    let chartSVG = ReactDOM.findDOMNode(ref.current) as Element

    let svgURL = new XMLSerializer().serializeToString(chartSVG)
    let svgBlob = new Blob([svgURL], {
        type: 'image/svg+xml;charset=utf-8',
    })

    const urlToBlob = window.URL.createObjectURL(svgBlob)

    const a = document.createElement('a')
    a.style.setProperty('display', 'none')
    document.body.appendChild(a)
    a.href = urlToBlob
    a.download = filename
    a.click()
    window.URL.revokeObjectURL(urlToBlob)
    a.remove()
}
