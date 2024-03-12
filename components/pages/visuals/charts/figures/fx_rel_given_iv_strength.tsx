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
    ContextMenuLabel,
    ContextMenuSeparator,
    ContextMenuTrigger,
} from '@/components/ui/context-menu'
import { dbAtom } from '@/atoms/db_atom'
import { database_reducer } from '@/atoms/reducers/reducer'
import { useReducerAtom } from 'jotai/utils'
import { FigureOutputExport } from '@/lib/image_saver'
import { useEffect, useRef } from 'react'
import { ScatterChartIcon } from 'lucide-react'

// @ts-ignore
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white border border-black p-2 rounded">
                <p>{`Study: ${payload[0].payload.label}`}</p>
                <p>{`Indicators of IV: ${Math.round(payload[0].payload.x)}`}</p>
                <p>{`Strength of Relation: ${Math.round(payload[1].value)}`}</p>
            </div>
        )
    }

    return null
}

export function VisualFunctionalRelationGivenIV({
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
        (s: CommonVisualOutput) => s.Type === 'Journal'
    ).map((record) => ({
        x: record.IV,
        y: record.Outcome,
        id: record.ID,
        label: record.Tag,
        z: size,
    }))

    const data_unpublished = Data.filter((s) => s.Type === 'Unpublished').map(
        (record) => ({
            x: record.IV,
            y: record.Outcome,
            id: record.ID,
            label: record.Tag,
            z: size,
        })
    )

    useEffect(() => {
        dispatch({
            type: 'load_ref',
            payload: { number: 1, ref: ref },
        })
    }, [dispatch])

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
                                value: 'Indicators of Internal Validity',
                                position: 'middle',
                                dy: 25,
                                fill: 'black',
                            }}
                            axisLine={{ stroke: 'black' }}
                            domain={['dataMin-0.5', 'dataMax+0.5']}
                            ticks={[
                                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
                                14, 15,
                            ]}
                        />
                        <YAxis
                            type="number"
                            dataKey="y"
                            name="Strength"
                            tick={{ fill: 'black' }}
                            tickLine={{ stroke: 'black' }}
                            tickMargin={5}
                            label={{
                                value: 'Functional Relation',
                                position: 'middle',
                                angle: -90,
                                dx: -125,
                                fill: 'black',
                            }}
                            axisLine={{ stroke: 'black' }}
                            domain={['dataMin-0.5', 'dataMax+0.5']}
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
                            stroke="black"
                            shape={shape}
                            opacity={0.8}
                        />
                        <Scatter
                            name="Gray Literature"
                            data={data_unpublished}
                            fill="#556270"
                            stroke="black"
                            shape={shape}
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
                            'SCARF_Functional_Relation_Given_IV',
                            state.FigureRef1
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
                            'SCARF_Functional_Relation_Given_IV',
                            state.FigureRef1
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
                            'SCARF_Functional_Relation_Given_IV',
                            state.FigureRef1
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
                            'SCARF_Functional_Relation_Given_IV',
                            state.FigureRef1
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
