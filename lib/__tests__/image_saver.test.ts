// image_saver.test.ts
import { JSDOM } from 'jsdom'
import { ExtractRelevantImage, FigureOutputExportNew } from '../image_saver'
import { RefObject } from 'react'

describe('ExtractRelevantImage', () => {
    it('should return the first image element found', () => {
        const dom = new JSDOM(
            '<!DOCTYPE html><body><div class="recharts-responsive-container"><svg class="recharts-surface"></svg></div></body></html>',
            {
                contentType: 'text/html',
                includeNodeLocations: true,
            }
        )

        const body = dom.window.document.querySelector('body')!
        const container = body.querySelector('.recharts-responsive-container')!

        const container_mut = container as HTMLDivElement

        const ref = {
            current: container_mut,
        } as RefObject<HTMLDivElement>

        const result = ExtractRelevantImage(ref)
        expect(result).not.toBe(undefined)
        expect(result).not.toBe(null)
    })
})

describe('FigureOutputExportNew', () => {
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

    it('should throw an error if Ref is no good', () => {
        const dom = new JSDOM(
            '<!DOCTYPE html><body><div class="recharts-responsive-container"><svg class="recharts-surface"></svg></div></body></html>',
            {
                contentType: 'text/html',
                includeNodeLocations: true,
            }
        )

        const body = dom.window.document.querySelector('body')!
        const container = body.querySelector('.recharts-responsive-container')!

        const container_mut = container as HTMLDivElement

        const ref = {
            current: null,
        } as RefObject<HTMLDivElement>

        expect(() =>
            FigureOutputExportNew('svg', 'test', ExtractRelevantImage(ref))
        ).toThrow('Ref is null')
    })

    it('should throw an error if SVG element is not found', () => {
        const dom = new JSDOM(
            '<!DOCTYPE html><body><div class="recharts-responsive-container"></div></body></html>',
            {
                contentType: 'text/html',
                includeNodeLocations: true,
            }
        )

        const body = dom.window.document.querySelector('body')!
        const container = body.querySelector('.recharts-responsive-container')!

        const container_mut = container as HTMLDivElement

        const ref = {
            current: container_mut,
        } as RefObject<HTMLDivElement>

        expect(() =>
            FigureOutputExportNew('svg', 'test', ExtractRelevantImage(ref))
        ).toThrow('SVG Element not found')
    })

    it('should create a link element and trigger a click event if SVG element is found', () => {
        const dom = new JSDOM(
            '<!DOCTYPE html><body><div class="recharts-responsive-container"><svg class="recharts-surface"></svg></div></body></html>',
            {
                contentType: 'text/html',
                includeNodeLocations: true,
            }
        )

        const body = dom.window.document.querySelector('body')!
        const container = body.querySelector('.recharts-responsive-container')!

        const container_mut = container as HTMLDivElement

        const ref = {
            current: container_mut,
        } as RefObject<HTMLDivElement>

        FigureOutputExportNew('svg', 'test', ExtractRelevantImage(ref))
        FigureOutputExportNew('png', 'test', ExtractRelevantImage(ref))
        FigureOutputExportNew('webp', 'test', ExtractRelevantImage(ref))
        FigureOutputExportNew('jpeg', 'test', ExtractRelevantImage(ref))
    })
})
