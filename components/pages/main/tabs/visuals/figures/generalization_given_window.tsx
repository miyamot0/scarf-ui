import {
    ResponsiveContainer,
    XAxis,
    YAxis,
    ZAxis,
    Tooltip,
    Scatter,
    ScatterChart,
} from 'recharts'
import { CommonVisualOutput } from '../visuals_view'
import { SymbolType } from 'recharts/types/util/types'
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuSeparator,
    ContextMenuTrigger,
} from '@/components/ui/context-menu'
import { dbAtom } from '@/atoms/db_atom'
import { database_reducer } from '@/atoms/reducers/reducer'
import { useReducerAtom } from 'jotai/utils'
import { useEffect, useRef } from 'react'
import { FigureOutputExport } from '@/lib/image_saver'
import { ScatterChartIcon } from 'lucide-react'

// @ts-ignore
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white border border-black p-2 rounded dark:text-black">
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
    height,
}: {
    Data: CommonVisualOutput[]
    shape: SymbolType
    size: number
    height: number
}) {
    const [state, dispatch] = useReducerAtom(dbAtom, database_reducer)
    const ref = useRef(null)

    const data_published = Data.filter(
        (s: CommonVisualOutput) => s.Type === 'Journal' && s.Generalized >= 0
    ).map((record) => ({
        x: record.GeneralizationRigor,
        y: record.Generalized,
        id: record.ID,
        label: record.Tag,
        z: size,
    }))

    const data_unpublished = Data.filter(
        (s) => s.Type === 'Unpublished' && s.Generalized >= 0
    ).map((record) => ({
        x: record.GeneralizationRigor,
        y: record.Outcome,
        id: record.ID,
        label: record.Tag,
        z: size,
    }))

    useEffect(() => {
        if (state.FigureRef3) return

        dispatch({
            type: 'load_ref',
            payload: { number: 3, ref: ref },
        })
    }, [dispatch, state.FigureRef3])

    return (
        <ContextMenu>
            <ContextMenuTrigger>
                <ResponsiveContainer width="100%" height={height}>
                    <ScatterChart
                        style={{ background: 'white' }}
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
                <ContextMenuLabel>Figure Export</ContextMenuLabel>
                <ContextMenuSeparator />
                <ContextMenuItem
                    onClick={() =>
                        FigureOutputExport(
                            'svg',
                            'SCARF_Generalization_Given_Duration',
                            state.FigureRef3
                        )
                    }
                >
                    <ScatterChartIcon className="w-5 h-5 mr-2" />
                    Save as SVG
                </ContextMenuItem>

                <ContextMenuItem
                    onClick={() =>
                        FigureOutputExport(
                            'webp',
                            'SCARF_Generalization_Given_Duration',
                            state.FigureRef3
                        )
                    }
                >
                    <ScatterChartIcon className="w-5 h-5 mr-2" />
                    Save as WebP
                </ContextMenuItem>

                <ContextMenuItem
                    onClick={() =>
                        FigureOutputExport(
                            'png',
                            'SCARF_Generalization_Given_Duration',
                            state.FigureRef3
                        )
                    }
                >
                    <ScatterChartIcon className="w-5 h-5 mr-2" />
                    Save as PNG
                </ContextMenuItem>

                <ContextMenuItem
                    onClick={() =>
                        FigureOutputExport(
                            'jpeg',
                            'SCARF_Generalization_Given_Duration',
                            state.FigureRef3
                        )
                    }
                >
                    <ScatterChartIcon className="w-5 h-5 mr-2" />
                    Save as JPEG
                </ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    )
}
