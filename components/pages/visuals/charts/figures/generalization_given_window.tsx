import {
    ResponsiveContainer,
    XAxis,
    YAxis,
    ZAxis,
    Tooltip,
    Scatter,
    ScatterChart,
} from 'recharts'
import { CommonVisualOutput } from '../../visuals_view'
import { SymbolType } from 'recharts/types/util/types'
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from '@/components/ui/context-menu'
import { saveReferenceToSVG } from '@/lib/image_saver'
import { useCallback } from 'react'
import FileSaver from 'file-saver'
import { useCurrentPng } from 'recharts-to-png'

// @ts-ignore
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white border border-black p-2 rounded">
                <p>{`Study: ${payload[0].payload.label}`}</p>
                <p>{`Rigor of Generalization: ${Math.round(
                    payload[0].payload.x
                )}`}</p>
                <p>{`Generalized Outcome Strength: ${Math.round(
                    payload[1].value
                )}`}</p>
            </div>
        )
    }

    return null
}

export function GeneralizationGivenWindow({
    Data,
    shape,
    size,
}: {
    Data: CommonVisualOutput[]
    shape: SymbolType
    size: number
}) {
    const [getPng, { ref }] = useCurrentPng()

    const handlePNGDownload = useCallback(async () => {
        const png = await getPng()

        // Verify that png is not undefined
        if (png) {
            // Download with FileSaver
            FileSaver.saveAs(png, 'SCARF_Generalization_Given_Duration.png')
        }
    }, [getPng])

    const data_published = Data.filter(
        (s: CommonVisualOutput) => s.Type === 'Journal' && s.Generalized > 0
    ).map((record) => ({
        x: record.GeneralizationRigor,
        y: record.Generalized,
        id: record.ID,
        label: record.Tag,
        z: size,
    }))

    const data_unpublished = Data.filter(
        (s) => s.Type === 'Unpublished' && s.Generalized > 0
    ).map((record) => ({
        x: record.GeneralizationRigor,
        y: record.Outcome,
        id: record.ID,
        label: record.Tag,
        z: size,
    }))

    return (
        <ContextMenu>
            <ContextMenuTrigger>
                <ResponsiveContainer width="100%" height={400}>
                    <ScatterChart
                        ref={ref}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 125,
                        }}
                    >
                        <XAxis
                            type="number"
                            dataKey="x"
                            name="IV Indicators"
                            tick={{ fill: 'black' }}
                            tickLine={{ stroke: 'black' }}
                            tickMargin={5}
                            label={{
                                value: 'Rigor of Generalization Measurement',
                                position: 'middle',
                                dy: 25,
                                fill: 'black',
                            }}
                            domain={['dataMin-0.5', 'dataMax+0.5']}
                            axisLine={{ stroke: 'black' }}
                            ticks={[0, 1, 2, 3]}
                            tickFormatter={(value) => {
                                switch (value) {
                                    case 0:
                                        return 'Post Only'
                                    case 1:
                                        return 'Pre/Post'
                                    case 2:
                                        return 'Intermittent'
                                    case 3:
                                        return 'Single Case Data'
                                    default:
                                        return 'Post Only'
                                }
                                return ''
                            }}
                        />
                        <YAxis
                            type="number"
                            dataKey="y"
                            name="Strength"
                            tick={{ fill: 'black' }}
                            tickLine={{ stroke: 'black' }}
                            tickMargin={5}
                            label={{
                                value: 'Generalization',
                                position: 'middle',
                                angle: -90,
                                dx: -125,
                                fill: 'black',
                            }}
                            domain={['dataMin-0.5', 'dataMax+0.5']}
                            axisLine={{ stroke: 'black' }}
                            ticks={[0, 1, 2, 3, 4]}
                            tickFormatter={(value) => {
                                switch (value) {
                                    case 0:
                                        return 'Counter-Therapeutic'
                                    case 1:
                                        return 'Null'
                                    case 2:
                                        return 'Inconsistent'
                                    case 3:
                                        return 'Weak'
                                    case 4:
                                        return 'Strong'
                                }
                                return ''
                            }}
                        />
                        <ZAxis type="number" dataKey="z" range={[size, size]} />
                        <Tooltip
                            // @ts-ignore
                            content={<CustomTooltip />}
                        />
                        <Scatter
                            name="Published Literature"
                            data={data_published}
                            fill="#59ACF2"
                            shape={shape}
                            stroke="black"
                            opacity={0.8}
                        />
                        <Scatter
                            name="Gray Literature"
                            data={data_unpublished}
                            fill="#556270"
                            shape={shape}
                            stroke="black"
                            opacity={0.8}
                        />
                    </ScatterChart>
                </ResponsiveContainer>
            </ContextMenuTrigger>
            <ContextMenuContent>
                <ContextMenuItem
                    onClick={() =>
                        saveReferenceToSVG(
                            ref,
                            'SCARF_Generalization_Given_Duration.svg'
                        )
                    }
                >
                    Save as SVG
                </ContextMenuItem>

                <ContextMenuItem onClick={handlePNGDownload}>
                    Save as PNG
                </ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    )
}
