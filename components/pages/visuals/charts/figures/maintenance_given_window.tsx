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

// @ts-ignore
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white border border-black p-2 rounded">
                <p>{`Study: ${payload[0].payload.label}`}</p>
                <p>{`Period of Maintenance: ${payload[0].payload.x}`}</p>
                <p>{`Maintenance Outcome Strength: ${payload[1].value}`}</p>
            </div>
        )
    }

    return null
}

export function MaintenanceGivenWindow({
    Data,
}: {
    Data: CommonVisualOutput[]
}) {
    const data_published = Data.filter(
        (s: CommonVisualOutput) => s.Type === 'Journal'
    ).map((record) => ({
        x: record.MaintenanceWindow,
        y: record.Maintained,
        id: record.ID,
        label: record.Tag,
        z: 20,
    }))

    const data_unpublished = Data.filter((s) => s.Type === 'Unpublished').map(
        (record) => ({
            x: record.MaintenanceWindow,
            y: record.Outcome,
            id: record.ID,
            label: record.Tag,
            z: 20,
        })
    )

    return (
        <ResponsiveContainer width="100%" height={400}>
            <ScatterChart
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
                        value: 'Period of Maintenance',
                        position: 'middle',
                        dy: 25,
                        fill: 'black',
                    }}
                    domain={['dataMin-0.5', 'dataMax+0.5']}
                    axisLine={{ stroke: 'black' }}
                    ticks={[0, 1, 2, 3, 4]}
                    tickFormatter={(value) => {
                        switch (value) {
                            case 0:
                                return 'Immediate/Unclear'
                            case 1:
                                return '>= 1 Week'
                            case 2:
                                return '>= 2 Weeks'
                            case 3:
                                return '>= 1 Month'
                            default:
                                return 'Immediate/Unclear'
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
                        value: 'Maintenance',
                        position: 'middle',
                        angle: -90,
                        dx: -125,
                        fill: 'black',
                    }}
                    color="black"
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
                <ZAxis type="number" dataKey="z" range={[60, 400]} />
                <Tooltip
                    // @ts-ignore
                    content={<CustomTooltip />}
                />
                <Scatter
                    name="Published Literature"
                    data={data_published}
                    fill="#59ACF2"
                />
                <Scatter
                    name="Gray Literature"
                    data={data_unpublished}
                    fill="#556270"
                />
            </ScatterChart>
        </ResponsiveContainer>
    )
}
