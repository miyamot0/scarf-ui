import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CalculateAgreement } from '../helpers/reli_scoring'
import { ReliabilityState } from '@/types/ReliabilityState'

export const AgreementStatus = ({ state }: { state: ReliabilityState }) => {
    if (state.primary && state.reliability) {
        const agreement = CalculateAgreement(
            state.primary.Studies,
            state.reliability.Studies
        )

        return (
            <Card>
                <CardHeader>
                    <CardTitle>Agreement Status</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{`Total Percent: ${agreement.TotalPercent}`}</p>
                    <p>{`Internal Validity: ${agreement.IV.Percent}`}</p>
                    <p>{`External Validity: ${agreement.EV.Percent}`}</p>
                    <p>{`Reporting: ${agreement.Reporting.Percent}`}</p>
                    <p>{`Outcomes: ${agreement.Outcomes.Percent}`}</p>
                </CardContent>
            </Card>
        )
    } else {
        return <div></div>
    }
}
