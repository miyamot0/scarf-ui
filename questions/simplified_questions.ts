import { QuestionObjectHolder } from '@/questions/types/QuestionTypes'

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
        QuestionType: 'YesNoNotPossible',
    },
    {
        Category: 'DV Measurement',
        QuestionID: 'DV_Measurement_7',
        QuestionStem: 'What is the context for data collection?',
        QuestionInstruction:
            'Context bound (CB): Data are collected in intervention contexts, or in contexts that are very similar to intervention (e.g., have the same implementer/social partners, seettings, materials, and interactions). \nPartially context bound (PCB): Data are collected in contexts that are similar to intervention, including at least one of the same: implementer/social partners, materials, and interactions (e.g., given an intervention involving system of least prompts in a research context with a researcher, a partially context bound variable could be one measured in a context with a teacher in a classroom, if the teacher is using system of least prompts)\nGeneralized (G): Data are collected in contexts that are dissimilar from intervention in that none of the following are the same: implementer/social partners, materials, and interactions. \nFor more information about boundedness, read this article: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9552805/',
        QuestionType: 'CbPcbG',
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
        QuestionType: 'YIntOnlyYBothNo',
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

export const ExternalValidityQuestions: QuestionObjectHolder[] = [
    {
        Category: 'Social Validity',
        QuestionID: 'Social_Validity_1',
        QuestionStem:
            'Do you have a research question related to the measurement of social validity? If not, score "N/A" for remaining items in this section.',
        QuestionInstruction:
            "Social validity measurement includes assessments of shareholder beliefs about the acceptability and/or importance of goals, outcomes and/or procedures of the study. Shareholders could include anyone impacted by the intervention, including individuals receiving intervention or those they are connected to (e.g., parents, teachers, administrators). Shareholders could also include community members who may have some indirect connection to a study's participants or knowledge about the study's goals, outcomes, and/or procedures (e.g., asking speech-language therapists about the acceptability of a language intervention or importance of its outcomes).",
        QuestionType: 'YesNo',
    },
    {
        Category: 'Social Validity',
        QuestionID: 'Social_Validity_2',
        QuestionStem:
            'Do authors provide evidence that the dependent variable is important to the participants themselves, to other shareholders, or to the community? Or do they engage in direct behaviors prior to the study that increase the likelihood of a socially valid dependent variable (e.g., DV was selected by participants).',
        QuestionInstruction:
            'Examples: Dependent variable was selected based on pre-intervention shareholder or participant interview; direct or indirect shareholders complete post-intervention questionnaire or interview with content related to importance of goal selection. Credit is not provided if authors argue for the  importance of the dependent variable in the introduction.',
        QuestionType: 'YesNoNotApplicable',
    },
    {
        Category: 'Social Validity',
        QuestionID: 'Social_Validity_3',
        QuestionStem:
            "Do authors provide evidence that the intervention is acceptable to the participants themselves, to other shareholders, or to the community? Or do they engage in direct behaviors prior to the study that increase the likelihood of a socially valid intervention (e.g., intervention was adapted prior to the study based on a teacher's request for improving feasibility).",
        QuestionInstruction:
            'Examples: Non-participating shareholders rate the intervention, as seen in a video, as acceptable and feasible for use in their context; child participant is directly offered opportunities to select intervention contexts versus non-intervention contexts; continued use of intervention by typical agents is measured after study completion; direct or indirect shareholders complete questionnaire or interview with content related to intervention acceptability.',
        QuestionType: 'YesNoNotApplicable',
    },
    {
        Category: 'Social Validity',
        QuestionID: 'Social_Validity_4',
        QuestionStem:
            'Do authors provide evidence that the change in behavior is valuable to the participants themselves, to other shareholders, or to the community?',
        QuestionInstruction:
            'Examples: Naïve raters identify differences between conditions (e.g., without information about which of two videos is the intervention context, a rater determines that child behavior is more acceptable in intervention video when compared to baseline video); direct or indirect shareholders complete questionnaire or interview with content related to value of behavior change.',
        QuestionType: 'YesNoNotApplicable',
    },
    {
        Category: 'Social Validity',
        QuestionID: 'Social_Validity_5',
        QuestionStem:
            'Is at least one of social validity measures used unlikely to be subject to social desirability bias?',
        QuestionInstruction:
            'N/A: No social validity measures. No: Interviews/ questionnaires/surveys that are conducted by implementing personnel (or unreported personnel). Yes: Interviews/ questionnaires/surveys that are conducted by non-implementing personnel (i.e., researchers who are not actively involved in treatment), naïve raters (e.g., non-participating shareholders who report on acceptability), direct preference assessments of participants who are implementing intervention (e.g., confirmation that they continued intervention after study completion but not verbal reports that they will do so) or participants receiving intervention (e.g., a child offered opportunities to select intervention and non-intervention contexts), explicit report that procedures or goals were targeted based on stakeholder report.',
        QuestionType: 'YesNoNotApplicable',
    },
    {
        Category: 'Generality & Boundedness',
        QuestionID: 'Generality_Boundedness_1',
        QuestionStem:
            'Is implementation in a relevant typical setting applicable to your research question (e.g., in homes, schools, or community settings)? If "No", report NA for the next row.',
        QuestionInstruction:
            'Identify specifically what settings are of interest (e.g., homes, schools, community, clinical offices)',
        QuestionType: 'YesNo',
    },
    {
        Category: 'Generality & Boundedness',
        QuestionID: 'Generality_Boundedness_2',
        QuestionStem:
            'Does implementation occur in a relevant typical setting?',
        QuestionInstruction: '',
        QuestionType: 'YesNoNotApplicable',
    },
    {
        Category: 'Generality & Boundedness',
        QuestionID: 'Generality_Boundedness_3',
        QuestionStem:
            'Is implementation by a relevant endogenous implementer applicable to your research question (e.g., implementation by teachers rather than researchers)?  If "No", report N/A for the next row.',
        QuestionInstruction:
            "Endogenous = typically present in the participant's typical environments. Identify specifically what implementers are of interest according to your research quesionts (e.g., teachers, caregivers, therapists).",
        QuestionType: 'YesNo',
    },
    {
        Category: 'Generality & Boundedness',
        QuestionID: 'Generality_Boundedness_4',
        QuestionStem:
            'Are conditions conducted by an endogenous implementer applicable to your research question?',
        QuestionInstruction:
            'Generally, if authors describe implementers using vague terms (e.g., therapist, implementer, interventionist), no credit is given for this question.',
        QuestionType: 'YesNoNotApplicable',
    },
    {
        Category: 'Generality & Boundedness',
        QuestionID: 'Generality_Boundedness_5',
        QuestionStem:
            'Do you have another generalization question?  If "No", report NA for the next row.',
        QuestionInstruction:
            'These questions might include generalization to materials, social partners, activities (stimulus generalization) or generalization to dependent variables that you are not considering a primary outcome (response generalization).',
        QuestionType: 'YesNo',
    },
    {
        Category: 'Generality & Boundedness',
        QuestionID: 'Generality_Boundedness_6',
        QuestionStem:
            'Did authors assess generalization that is relevant to your other generalization question? (i.e., what you specified before).',
        QuestionInstruction: '',
        QuestionType: 'YesNoNotApplicable',
    },
    {
        Category: 'Generality & Boundedness',
        QuestionID: 'Generality_Boundedness_7',
        QuestionStem: 'How were generalization outcomes measured?',
        QuestionInstruction:
            'If multiple types of generalization were measured (e.g., with different materials and implementers), and the measurement occurrences differed for each, report the most rigorous measurement here (e.g., single case design). SCD = Throughout the study (in the context of the single case design, with at least three data points per condition). Intermittent = In each primary comparison condition, but with fewer than three data points per condition. Pre/post = Before and after intervention. Post Only = After intervention only or some other measurement. None = No measurement. N/A = no generalization questions were asked',
        QuestionType: 'GeneralizationOutcomes',
    },
    {
        Category: 'Maintenance',
        QuestionID: 'Maintenance_1',
        QuestionStem:
            'Do you have a research question about whether maintenance of behavior occurred when intervention was removed? If not, score "N/A" for remaining items in this section.',
        QuestionInstruction:
            'Maintenance is not always applicable. For example, when we use withdrawal (A-B-A-B) designs, we implicitly expect that intervention removal will immediately results in behavior returning to baseline levels. In this case, it may not be reasonable to assess whether studies measure maintenance.',
        QuestionType: 'YesNo',
    },
    {
        Category: 'Maintenance',
        QuestionID: 'Maintenance_2',
        QuestionStem:
            'Was maintenance of behavior change assessed when the intervention was removed?',
        QuestionInstruction:
            'Note that authors sometimes refer to a condition as “maintenance” even though intervention is still in place (see Ledford et al., 2021 for a discussion of this in relation to interruption and redirection procedures). For example, in an intervention where teachers are taught to implement an intervention, a “maintenance” condition might refer to a final condition where teachers do not receive coaching but children are still receiving the intervention. In this case, teacher behaviors would be scored a "yes" (i.e., the coaching had been removed), but child behavior would be scored a "no" (i.e., the teacher intervention was still in place). For some cases would be selected when maintenance occurs for some but not all tiers in a multiple baseline or multiple probe design.',
        QuestionType: 'YesNoNotApplicable',
    },
    {
        Category: 'Maintenance',
        QuestionID: 'Maintenance_3',
        QuestionStem: 'How long was the maintenance period?',
        QuestionInstruction:
            'N/A = no maintenance question. Imm/UC = Maintenance is measured immediately after intervention cessation, or latency to maintenance measurement is unclear. Other options: The most distal maintenance data point (e.g., if maintenance data are collected 10 days after intervention is completed, select ≥1 week). For multiple baseline designs, select the most distal data point across all tiers.',
        QuestionType: 'MaintenancePeriod',
    },
]

export const ReportingQuestions: QuestionObjectHolder[] = [
    {
        Category: 'Reporting',
        QuestionID: 'Reporting_1',
        QuestionStem:
            'Do authors report demographic information (gender, race, age) and disability status (if relevant)?',
        QuestionInstruction:
            'Decisions on specific information necessary for a “yes” score here should be made prior to review (e.g., specific disability eligibility, medical diagnosis, information about special education services). Explicate what data are required for "yes", "no", and "partial" codes.',
        QuestionType: 'YesNoPartial',
    },
    {
        Category: 'Reporting',
        QuestionID: 'Reporting_2',
        QuestionStem:
            'Do authors report information relevant to current performance in domains related to the study?',
        QuestionInstruction:
            'Decisions on specific information necessary for a “yes” score here should be made prior to review (e.g., description of typical social interactions or a formal social skills assessment if the study focuses on social skill intervention; description of functional behavioral assessment if the study focuses on challenging behavior). Explicate what data are required for "yes", "no", and "partial" codes.',
        QuestionType: 'YesNoPartial',
    },
    {
        Category: 'Reporting',
        QuestionID: 'Reporting_3',
        QuestionStem: 'Do authors report relevant inclusion criteria?',
        QuestionInstruction:
            'Decisions on specific information necessary for a “yes” score here should be made prior to review. These criteria should include characteristics necessary to benefit from study participation.',
        QuestionType: 'YesNoPartial',
    },
    {
        Category: 'Reporting',
        QuestionID: 'Reporting_4',
        QuestionStem: 'Do authors report relevant recruitment information?',
        QuestionInstruction:
            'Decisions on specific information necessary for a “yes” score here should be made prior to review. Generally, it should include the population from which participants were recruited (e.g., elementary-aged children with Down syndrome) locations from which participants were recruited (e.g., children who attended a private school for autistic children were recruited), and/or methods by which participants were recruited (e.g., researchers recruited participants by providing flyers to parents via local pediatricians).',
        QuestionType: 'YesNoPartial',
    },
    {
        Category: 'Reporting',
        QuestionID: 'Reporting_5',
        QuestionStem: 'Do authors adequately define dependent variables?',
        QuestionInstruction:
            'Decisions on specific information necessary for a “yes” score here should be made prior to review. Could a naïve reader determine the presence of absence of behavior based on definitions, examples, and/or non-examples?',
        QuestionType: 'YesNoPartial',
    },
    {
        Category: 'Reporting',
        QuestionID: 'Reporting_6',
        QuestionStem: 'Do authors adequately describe measurement system used?',
        QuestionInstruction:
            'Decisions on specific information necessary for a “yes” score here should be made prior to review. For example do authors describe data collection, including the system used (e.g., momentary time sampling, timed event recording), how data were collected (e.g., in situ, via video), and by whom (e.g., endogenous implementer, graduate student observer).',
        QuestionType: 'YesNoPartial',
    },
    {
        Category: 'Reporting',
        QuestionID: 'Reporting_7',
        QuestionStem:
            'Do authors describe role and training of data collectors?',
        QuestionInstruction:
            'Decisions on specific information necessary for a “yes” score here should be made prior to review. At minimum, authors should describe the relation of data collectors to participants (e.g., researcher who was unfamiliar to participants prior to study, classroom teacher of participants) and how data collectors were trained.',
        QuestionType: 'YesNoPartial',
    },
    {
        Category: 'Reporting',
        QuestionID: 'Reporting_8',
        QuestionStem:
            'Are procedures for both primary comparison conditions adequately described?',
        QuestionInstruction:
            'Decisions on specific information necessary for a “yes” score here should be prior to review. Are procedures described with replicable precision? Fidelity checklists may be helpful for determining exact procedures for each condition.',
        QuestionType: 'YesNoPartial',
    },
    {
        Category: 'Reporting',
        QuestionID: 'Reporting_9',
        QuestionStem:
            'Are the frequency and duration of conditions well described?',
        QuestionInstruction:
            'Decisions on specific information necessary for a “yes” score here should be made prior to review. Do authors report how long sessions occurred (e.g., 20 min), how often they occurred (e.g., weekly), and what opportunities to respond were present during sessions (if applicable)?',
        QuestionType: 'YesNoPartial',
    },
    {
        Category: 'Reporting',
        QuestionID: 'Reporting_10',
        QuestionStem:
            'Is setting described for both primary comparison conditions (i.e., if relevant: location, individuals in environment, physical characteristics)?',
        QuestionInstruction:
            'Decisions on specific information necessary for a “yes” score here should be made prior to review. Do authors describe the aspects of setting critical for replication.',
        QuestionType: 'YesNoPartial',
    },
    {
        Category: 'Reporting',
        QuestionID: 'Reporting_11',
        QuestionStem:
            'Do authors describe qualifications of implementers, or describe what skills and training were necessary for intervention implementation?',
        QuestionInstruction:
            'Decisions on specific information necessary for a “yes” score here should be made prior to review. Authors should describe implementers with enough detail that naïve readers could understand contexts for replication (e.g., training, education, years of experience).',
        QuestionType: 'YesNoPartial',
    },
    {
        Category: 'Reporting',
        QuestionID: 'Reporting_12',
        QuestionStem:
            'Do authors describe demographic characteristics of implementers?',
        QuestionInstruction:
            'Decisions on specific information necessary for a “yes” score here should be made prior to review. Authors should describe implementers with enough detail that naïve readers could understand contexts for replication (e.g., age, race, ethnicity, languages spoken).',
        QuestionType: 'YesNoPartial',
    },
    {
        Category: 'Reporting',
        QuestionID: 'Reporting_13',
        QuestionStem:
            'Do authors adequately describe which implementer behaviors are measured for fidelity assessments?',
        QuestionInstruction:
            'Is fidelity described well enough that reviewers could replicate procedures and assessment? This may include narrative description and/or inclusion of fidelity tables or forms (including those shared in readily-available supplemental materials). Explicate what data are required for "yes", "no", and "partial" codes.',
        QuestionType: 'YesNoPartial',
    },
]

export const OutcomesQuestions: QuestionObjectHolder[] = [
    {
        Category: 'Outcomes',
        QuestionID: 'Outcomes_1',
        QuestionStem:
            'Is the dependent variable for this design the primary dependent variable, or a secondary dependent variable?',
        QuestionInstruction:
            'Primary dependent variable: Variable on which decisions were made for this design. For example, when teaching teachers to implement an intervention with fidelity, and measuring teacher and child behaviors, teacher fidelity is often the primary variable on which decisions are made.\nSecondary dependent variable: Any non-primary variable. (e.g., generalization measure, corollary measure, exploratory measure, measure that changes secondary to the primary variable such as child change secondary to adult fidelity).\nHistorically, authors have poorly reported which variables are primary versus secondary. It might be helpful to have rules for designating primary when not explicitly reported. For example, when both fidelity (implementer) and resulting behavior (participant) data are collected in the context of a single case design, you might designate fidelity as the primary variable and the participant’s resulting behavior as secondary.',
        QuestionType: 'PrimarySecondaryUnknown',
    },
    {
        Category: 'Outcomes',
        QuestionID: 'Outcomes_2',
        QuestionStem:
            'Do authors list a criterion for ending intervention or is there another apparent “ideal”?  If not, select "N/A" for the next question.',
        QuestionInstruction:
            'For example, do authors list a growth, learning, or mastery criterion? For example, the ideal might be 100% correct for academic interventions, while an engagement criterion might be at least 80% on-task behavior in a session.',
        QuestionType: 'YesNo',
    },
    {
        Category: 'Outcomes',
        QuestionID: 'Outcomes_3',
        QuestionStem: 'If there is a criterion or ideal, was it met?',
        QuestionInstruction:
            'For designs with multiple potential responses (e.g., multiple baseline across participants, multiple probe across behaviors), select "yes" if criteria were met for a majority (more than half) of potential demonstrations or specify how you determined whether criterion was met in the colum to the right and report this in your written reports.',
        QuestionType: 'YesNoNotApplicable',
    },
    {
        Category: 'Outcomes',
        QuestionID: 'Outcomes_4',
        QuestionStem:
            'For this variable, how would you characterize the change between conditions, using visual analysis?',
        QuestionInstruction:
            'Countertherapeutic = Changes in this behavior were in a direction that suggests worsening (e.g., increased challenging beahvior, decreased engagement) for most or all potential demonstrations. Null = There were no consistent changes in this behavior, suggesting no impact of intervention on behavior occurrence for most or all potential demonstrations. Inconsistent = Some null or countertherapeutic impacts occurred, with some weak or strong effects. Weak = No null or countertherapeutic effects, but at least one effect was "weak," including changes that are unexpectedly delayed, small with overlapping data between conditions, or variable with overlapping data between conditions. Strong = Therapeutic effects occurred for all potential demonstrations. See design-specific examples on "Visual Analysis Examples" tab. Inconsistent is NOT APPLICABLE for ATD/AATD.',
        QuestionType: 'ConditionChangeCharacterization',
    },
    {
        Category: 'Outcomes',
        QuestionID: 'Outcomes_5',
        QuestionStem:
            'If maintenance was measured for this variable, how would you characterize maintained outcomes?',
        QuestionInstruction:
            'Countertherapeutic = Maintenance data suggest worsening in comparison to baseline for most or all potential demonstrations. Null = Maintenance data suggest data are similar to baseline for most or all potential demonstrations. Inconsistent = At least one potential demonstration shows null or countertherapeutic impacts, with some weak or strong effects. Weak = No null or countertherapeutic effects, but at least one effect was "weak," including maintenance data that are improved relative to baseline but that are worse or worsening compared to intervention data. Strong = Maintenance data that show clear improvements relative to baseline and that are similar to intervention levels for all potential demonstrations.',
        QuestionType: 'ConditionChangeCharacterizationNA',
    },
    {
        Category: 'Outcomes',
        QuestionID: 'Outcomes_6',
        QuestionStem:
            'If generalization was measured in relation to this variable, how would you characterize generalized outcomes?',
        QuestionInstruction:
            'Countertherapeutic = Generalization data collected during or after intervention implementation are worse than those data collected during or before baseline. Null = There were no consistent changes in this behavior between pre/baseline data collection and during/post intervention, suggesting no impact of intervention on behavior occurrence for most or all potential demonstrations. Inconsistent/Unclear = some null or countertherapeutic impacts occurred, with some weak or strong effects or data were only collected post-intervention so comparisons are not possible. Weak = No null or countertherapeutic effects, but at least one effect was "weak," including small or variable changes in generalized data between pre/baseline and post/intervention. Strong = Consistent and clear differences between pre/baseline and post/intervention data for all potential demonstrations for generalization outcomes..',
        QuestionType: 'ConditionChangeCharacterizationNA',
    },
]
