// image_saver.test.ts
import { FigureOutputExport } from '../image_saver'
import { JSDOM } from 'jsdom'

describe('FigureOutputExport', () => {
    let container: SVGSVGElement
    let svgElement: SVGSVGElement
    let ref: React.RefObject<SVGSVGElement>
    let dom: JSDOM

    beforeEach(() => {
        // Create a new DOM for each test
        dom = new JSDOM(
            '<svg id="container"><svg id="svg-element"><svg></svg></svg></svg>'
        )
        container = dom.window.document.querySelector(
            '#container'
        ) as SVGSVGElement
        svgElement = dom.window.document.querySelector(
            '#svg-element'
        ) as SVGSVGElement

        container.appendChild(svgElement)

        ref = { current: svgElement }
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('should throw an error if SVG element is not found', () => {
        //@ts-expect-error
        ref.current = null
        expect(() => FigureOutputExport('svg', 'test', ref)).toThrow(
            'SVG Element not found'
        )
    })

    it.skip('should create a link element and trigger a click event if SVG element is found', () => {
        // TODO: Figure out how to test this
        FigureOutputExport('svg', 'test', ref)
        const linkElement = container.querySelector('a')
        expect(linkElement).not.toBeNull()
    })
})
