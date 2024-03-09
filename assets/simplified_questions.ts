import { QuestionCategory, QuestionType } from '@/types/QuestionTypes'

export type QuestionObjectHolder = {
    Category: QuestionCategory
    QuestionID: string
    QuestionStem: string
    QuestionInstruction: string
    QuestionType: QuestionType
    Response?: string
}

export const InternalValidityQuestions: QuestionObjectHolder[] = [
    {
        Category: 'DV Measurement',
        QuestionID: 'DV_Measurement_1',
        QuestionStem:
            'Do the measured behaviors reasonably represent the construct authors identify as the focus of the intervention?',
        QuestionInstruction:
            'It might be helpful to review the purpose/research questions and determine whether these are aligned with dependent variable definitions and response measurement. If unclear, report "no".',
        QuestionType: 'YesNo',
    },
    {
        Category: 'DV Measurement',
        QuestionID: 'DV_Measurement_2',
        QuestionStem:
            'Do authors use a measurement system that aligns with the dimension of the behavior of interest, and are the data reported in a way that the dimension of interest is represented?',
        QuestionInstruction:
            'Authors may be primarily interested in duration (for behaviors that are non-trivial in length, such as engagement) or count (for behaviors that are trivial in length, such as correctly responding to a question or hitting). Duration behaviors should be reported as the amount or proportion/percent of time spent in the behavior. Count behaviors should be reported as a number, rate, or a proportion/percentage of opportunities. Complex behaviors that could involve count and duration (e.g., classes of challenging behaviors that may include hitting and tantrums) may use either or both. If unclear, report "no".',
        QuestionType: 'YesNo',
    },
    {
        Category: 'DV Measurement',
        QuestionID: 'DV_Measurement_3',
        QuestionStem: 'Do authors collect reliability data?',
        QuestionInstruction:
            'Yes: Authors collect reliability data (generally referred to as inter observer agreement data).\n \nNo: Authors do not collect data OR data collection is unclear or unreported.',
        QuestionType: 'YesNo',
    },
    {
        Category: 'DV Measurement',
        QuestionID: 'DV_Measurement_4',
        QuestionStem:
            'Do authors collect reliability data in both conditions, and for a sufficient number of sessions?',
        QuestionInstruction:
            'Yes: Authors collect reliability data in both conditions, for a sufficient number of sessions (For example, authors collect data in baseline and intervention conditions for each tier in a multiple baseline design).\n \nNo: Authors do not collect data, do not collect sufficient data OR data collection is unclear or unreported.\n \nReviewers should determine what is adequate prior to beginning coding (see "Initial Questions" tab) and specify in the column to the right. Appropriate frequency depends on complexity of behavior and measurement contexts. For example, measurement engagement in an early childhood classroom is more complex than measuring correct responding in a research room. Thus, lower frequency might be appropriate in the latter case. \n\nHistorically, minimum data collection for 20-33% of sessions have been suggested as acceptable.',
        QuestionType: 'YesNo',
    },
    {
        Category: 'DV Measurement',
        QuestionID: 'DV_Measurement_5',
        QuestionStem:
            'Do reliability data suggest confidence in measurement of outcomes?',
        QuestionInstruction:
            'Yes: Authors collect reliability data with sufficiently high levels of agreement or evidence that disagreement does not impact functional relation determination (e.g., data from both observers are graphed and both have data patterns that show clear change).\n \nNo: Authors do not collect data or levels of agreement and/or rigor of method (e.g., gross agreement when point by point would be appropriate) are low enough to undermine confidence in data.\n \nAuthors of reviews should determine what is adequate prior to beginning coding. Appropriate agreement levels depend on complexity of behavior and measurement contexts. For example, measurement engagement in an early childhood classroom is more complex than measuring correct responding in a research room. Thus, higher agreement might be appropriate in the latter case. Prior to the review, reviewers should determine whether global agreement measures across dependent variables (e.g., an average of 90% agreement, but collapsed across challenging behavior, engagement, and academic responding) is sufficient here and specify in the column to the right.',
        QuestionType: 'YesNo',
    },
    {
        Category: 'DV Measurement',
        QuestionID: 'DV_Measurement_6',
        QuestionStem:
            'Do authors use naïve coders as a safeguard against measurement bias?',
        QuestionInstruction:
            'Yes: Authors use coders who are naïve to study condition and/or expected outcomes.\n \nNo: Coders are aware of study conditions and expected outcomes.\n \nNot Possible: Due to the nature of the intervention, it is not possible to blind coders (e.g., it is apparent even to naïve personnel when intervention is implemented due to differences in materials or interactions). For example, if the intervention is use of visual supports, blinding of personnel is not possible becuase visual supports may be necssarily included in intervention conditions.',
        QuestionType: 'YesNo',
    },
    {
        Category: 'DV Measurement',
        QuestionID: 'DV_Measurement_7',
        QuestionStem: 'What is the context for data collection?',
        QuestionInstruction:
            'Context bound (CB): Data are collected in intervention contexts, or in contexts that are very similar to intervention (e.g., have the same implementer/social partners, seettings, materials, and interactions). \nPartially context bound (PCB): Data are collected in contexts that are similar to intervention, including at least one of the same: implementer/social partners, materials, and interactions (e.g., given an intervention involving system of least prompts in a research context with a researcher, a partially context bound variable could be one measured in a context with a teacher in a classroom, if the teacher is using system of least prompts)\nGeneralized (G): Data are collected in contexts that are dissimilar from intervention in that none of the following are the same: implementer/social partners, materials, and interactions. \nFor more information about boundedness, read this article: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9552805/',
        QuestionType: 'YesNo',
    },
    {
        Category: 'Design Appropriateness',
        QuestionID: 'Design_Appropriateness_1',
        QuestionStem:
            'Is the design appropriate for answering the research question?',
        QuestionInstruction:
            'Note: a design can be appropriate for answering a research question that does not align with YOUR research question. For example, a study using an A-B-A-B design for assessing engagement might include secondary data on number of reading comprehension questions answered correctly. For engagement, the A-B-A-B design is appropriate. For reading comprehension (a non-reversible dependent variable), the design is inappropriate.',
        QuestionType: 'YesNo',
    },
    {
        Category: 'Design Appropriateness',
        QuestionID: 'Design_Appropriateness_2',
        QuestionStem:
            'Do at least three potential demonstrations of effect exist?',
        QuestionInstruction:
            'Potential demonstrations include changes between relevant conditions. All changes should be between identical conditions.\n \nSequential introduction and withdrawal designs (e.g., A-B-A-B) should include alternation of two conditions for a minimum of four phases with no additional conditions intermixed. For example, an A-B-A-B design meets this criterion (comparison between A and B) as does an A-B-C-A-C-A  (comparisons between C and A) but the following designs do not: A-B-C-A-C, A-B-C-D, A-B-A-C.\n \nTime lagged designs (e.g., multiple baseline, multiple probe) should include at least 3 tiers with sufficiently different start points and baseline lengths (authors of reviews should determine acceptable start points & baseline lengths, given their research questions). See this article: https://link.springer.com/article/10.1007/s40614-022-00326-1\n \nRapid iterative alternation designs (e.g., ATD, AATD) should include rapid alternation of the conditions of interest. If research questions are related to effectiveness in relation to baseline, an ongoing baseline or control condition is required. For example, an ATD design with alternating “B” and “C” conditions without an ongoing, alternating “A” condition is not sufficient for answering a question about the effectiveness of “B” or “C” in comparison to baseline, but would be sufficient for answering a question about the effectiveness of "B" in comparison to "C.',
        QuestionType: 'YesNo',
    },
    {
        Category: 'Design Appropriateness',
        QuestionID: 'Design_Appropriateness_3',
        QuestionStem:
            'Are there sufficient data points such that threats to internal validity are mitigated?',
        QuestionInstruction:
            'Generally report “yes” if changes/differences in data between conditions intervention can be reasonably attributed to intervention and report “no” if more data are needed because (a) baseline data weren’t sufficiently stable prior to introduction, resulting in difficulty determining what data patterns might have been in the absence of condition change, (b) insufficient data in intervention phases preclude confidence that behavior change was due to condition changes. Generally, fewer data collection occasions are required when data are stable and/or at floor or ceiling levels. Only report "no" if more data are needed to help make a determination; that is, lack of difference in data between conditions is not a reason for a "no" here.',
        QuestionType: 'YesNo',
    },
    {
        Category: 'Design Appropriateness',
        QuestionID: 'Design_Appropriateness_4',
        QuestionStem: 'Do authors report all collected data?',
        QuestionInstruction:
            'This may be rarely reported, but you should report “no” when authors measure multiple variables and omit reporting of one or more variables, even if they report one or more variables that are the focus of your review. Report "no" for all designs in a study if any additional variables should be reported in that study. Report "yes" if all variables are reported (either in the manuscript or in readily-available supplementary materials) or if it is not possible to determine.',
        QuestionType: 'YesNo',
    },
    {
        Category: 'Fidelity',
        QuestionID: 'Fidelity_1',
        QuestionStem:
            'Do authors measure fidelity of condition implementation?',
        QuestionInstruction:
            'Implementation fidelity data may be referred to as procedural fidelity or treatment integrity. Fidelity of condition implementation refers to the measurement of behaviors of implementers in study conditions and the extent to which they match procedural descriptions. Note that in studies where implementer behavior is a primary dependent variable, this generally meets criterion for fidelity measurement. For example, if your research question is about child behavior change during naturalistic interventions, and authors report both caregiver and child behavior in single case designs, the caregiver behavior variable may appropriately serve as fidelity measurement for the child dependent variable. If your research question is about parent behavior change, the implementation fidelity data needed would be training behaviors (e.g., whether researchers trained parents in a way that matched intended procedures).',
        QuestionType: 'YesNo',
    },
    {
        Category: 'Fidelity',
        QuestionID: 'Fidelity_2',
        QuestionStem:
            'Do authors measure fidelity of implementation including the theorized "active ingredients" and/or important variables that should remain consistent across conditions?',
        QuestionInstruction:
            'Prior to conducting the review, you can establish what types of behaviors should be measured and how they should be measured. For example, if you are interested in reviewing adult-directed teaching procedures (e.g., constant time delay, system of least prompts), you may establish that direct observation and trial-by-trial recording is needed to establish fidelity (rather than a yes/no session-based checklist). In some cases, counts are used rather than the typical percentages fidelity. For example, if you are interesting in reviewing inteventions assessing the impact of teacher praise, the rate of teacher praise statements in baseline and intervention may be a reasonable measure of fidelity. If you cannot determine what behaviors were measured, you should report "no" here. If "active ingredients" and control variables were only measured in one condition (e.g., fidelity was measured only in intervention, but not in baseline), you should report "no" here.',
        QuestionType: 'YesNo',
    },
    {
        Category: 'Fidelity',
        QuestionID: 'Fidelity_3',
        QuestionStem:
            'Do authors measure fidelity of implementation with sufficient safeguards for biased reporting?',
        QuestionInstruction:
            'Generally, self-report ratings of fidelity are subject to bias but there are situations in which they may be acceptable (e.g., interest in home-based implementation of intervention in the absence of researchers). When fidelity is particularly likely to be subject to bias or complicated to measure, agreement data may be collected to increase confidence in assessment. Prior to conducting the review, you should establish whether self-report ratings are acceptable and whether agreement data are required for a "yes"  response to this question.',
        QuestionType: 'YesNo',
    },
    {
        Category: 'Fidelity',
        QuestionID: 'Fidelity_4',
        QuestionStem:
            'Do authors measure fidelity of implementation on a sufficient number of opportunities to confidently draw conclusions?',
        QuestionInstruction:
            'Generally, researchers conduct fidelity assessments for a given percentage of sessions in each condition (e.g., previous researchers have suggested 20-33% as minimum benchmarks). Given the context of your review (e.g., considerations of feasibility and likelihood/importance of fidelity failures), you should determine the benchmarks prior to conducting the review.',
        QuestionType: 'YesNo',
    },
    {
        Category: 'Fidelity',
        QuestionID: 'Fidelity_5',
        QuestionStem:
            'Does fidelity meet your pre-established standard of acceptability?',
        QuestionInstruction:
            'Historically, 80-90% accurate implementation was a typical benchmark but there may be reasons to have lower or higher standards given the specific context of a review (e.g., complex interventions delivered long-term by endogenous implementers may typically have lower fidelity than short-term, researcher-delivered interventions)',
        QuestionType: 'YesNo',
    },
]
