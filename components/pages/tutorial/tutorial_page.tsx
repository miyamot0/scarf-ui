import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Hero } from './views/hero'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

export function TutorialPage() {
    return (
        <div className="flex flex-col gap-y-4">
            <Hero />

            <Card>
                <CardHeader>
                    <CardTitle>Planning and using SCARF-UI</CardTitle>
                    <CardDescription>
                        Guidelines and suggestions regarding the use of SCARF-UI
                        for research
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-y-4">
                    <Accordion type="single" collapsible defaultValue="item-1">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                Step 1. Planning Review and Study Protocols
                            </AccordionTrigger>
                            <AccordionContent>
                                <ol>
                                    <li>
                                        Identify core questions (e.g., specify
                                        goals of evaluating effects, if
                                        questions exist related to maintenance,
                                        related to generalization)
                                    </li>
                                    <li>Identify team and roles</li>
                                    <ul>
                                        <li>
                                            Identify team and roles Primary data
                                            coder
                                        </li>
                                        <li>
                                            Reliability data coder
                                            Mediator/Tie-breaker
                                        </li>
                                    </ul>
                                    <li>
                                        Register study questions, methods,
                                        roles, etc. (Optional)
                                    </li>
                                </ol>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                Step 2. Executing Study/Review Protocol
                            </AccordionTrigger>
                            <AccordionContent>
                                <ol>
                                    <li>
                                        Import studies requiring coding (as
                                        Primary)
                                    </li>
                                    <ul>
                                        <li>
                                            Option 1: Line-by-line (works, not
                                            optimal)
                                        </li>
                                        <li>
                                            Option 2: Bulk study import
                                            (recommended)
                                        </li>
                                    </ul>
                                    <li>
                                        Save imported, but un-coded studies,
                                        export data file for Reliability data
                                        collector
                                    </li>
                                    <li>
                                        Each data collector proceeds
                                        independently
                                    </li>
                                    <ul>
                                        <li>
                                            Code relevant features of each study
                                        </li>
                                        <li>
                                            Code for whether peer-reviewed or
                                            unpublished 'Gray' literature
                                        </li>
                                    </ul>
                                    <li>
                                        Evaluate reliability of coding for all
                                        records using reliability check
                                    </li>
                                    <li>
                                        Handle disagreements consistent with
                                        protocol
                                    </li>
                                </ol>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                Step 3. Summarizing and Interpreting Findings
                            </AccordionTrigger>
                            <AccordionContent>
                                <ol>
                                    <li>
                                        Inspect final results in Raw Data file
                                        to ensure correct entry and coding
                                    </li>
                                    <li>
                                        Visualize the results of SCARF coding in
                                        visuals panel
                                    </li>
                                    <ul>
                                        <li>Edit/tweak figures as necessary</li>
                                        <li>
                                            Jittering may be necessary to avoid
                                            over-plotting
                                        </li>
                                    </ul>
                                </ol>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>
                                Step 4. Exporting Figures and Final Data
                            </AccordionTrigger>
                            <AccordionContent>
                                <ol>
                                    <li>
                                        Save/archive final data sets
                                        (Primary/Reli)
                                    </li>
                                    <li>Export images </li>
                                    <li>Can resize using browser</li>
                                    <li>
                                        Edit markers, marker color/sizes in
                                        browser
                                    </li>
                                    <li>
                                        Save as vector and/or rasterized images
                                    </li>
                                </ol>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>
        </div>
    )
}
