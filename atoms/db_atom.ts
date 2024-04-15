import { atom } from 'jotai'
import { GlobalStateType } from '@/questions/types/GlobalStateType'

export const DefaultStartingValue: GlobalStateType = {
    DialogState: {
        dialog_type: undefined,
        study: undefined,
    },
    DisplayState: 'instructions',
    Studies: [],
    Loaded: undefined,
}

export const DefaultStartingValueExpanded = {
    DialogState: {
        dialog_type: undefined,
        study: undefined,
    },
    DisplayState: 'instructions',
    Studies: [
        {
            StudyID: '79691207-fc42-4c2f-aa46-40ce299def07',
            StudyTag: '001',
            StudyAuthors: 'Study 1 Authors',
            StudyTitle: 'Study Title',
            StudyJournal: 'Study Journal',
            StudyYear: 1995,
            InternalValidity: {
                Status: 'Completed',
                Questions: [
                    {
                        QuestionID: 'DV_Measurement_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_4',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_5',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_6',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'DV_Measurement_7',
                        Response: 'Context Bound',
                    },
                    {
                        QuestionID: 'Design_Appropriateness_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Design_Appropriateness_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Design_Appropriateness_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Design_Appropriateness_4',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Fidelity_1',
                        Response: 'Yes, Intervention Only',
                    },
                    {
                        QuestionID: 'Fidelity_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Fidelity_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Fidelity_4',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Fidelity_5',
                        Response: 'Yes',
                    },
                ],
            },
            ExternalValidity: {
                Status: 'Completed',
                Questions: [
                    {
                        QuestionID: 'Social_Validity_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Social_Validity_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Social_Validity_3',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Social_Validity_4',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Social_Validity_5',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_3',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_4',
                        Response: 'N/A',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_5',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_6',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_7',
                        Response: 'Post Only',
                    },
                    {
                        QuestionID: 'Maintenance_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Maintenance_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Maintenance_3',
                        Response: 'Immediately after Cessation',
                    },
                ],
            },
            Reporting: {
                Status: 'Completed',
                Questions: [
                    {
                        QuestionID: 'Reporting_1',
                        Response: 'Partial',
                    },
                    {
                        QuestionID: 'Reporting_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_4',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Reporting_5',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_6',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_7',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_8',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_9',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_10',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_11',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Reporting_12',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Reporting_13',
                        Response: 'Yes',
                    },
                ],
            },
            Outcomes: {
                Status: 'Completed',
                Questions: [
                    {
                        QuestionID: 'Outcomes_1',
                        Response: 'Primary',
                    },
                    {
                        QuestionID: 'Outcomes_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Outcomes_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Outcomes_4',
                        Response: 'Strong',
                    },
                    {
                        QuestionID: 'Outcomes_5',
                        Response: 'Weak',
                    },
                    {
                        QuestionID: 'Outcomes_6',
                        Response: 'Weak',
                    },
                ],
            },
            PublicationType: 'Journal',
        },
        {
            StudyID: 'c9691207-fc42-4c2f-aa46-40ce299def07',
            StudyTag: '001',
            StudyAuthors: 'Study 1 Authors',
            StudyTitle: 'Study Title',
            StudyJournal: 'Study Journal',
            StudyYear: 1995,
            InternalValidity: {
                Status: 'Completed',
                Questions: [
                    {
                        QuestionID: 'DV_Measurement_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_4',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_5',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_6',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'DV_Measurement_7',
                        Response: 'Context Bound',
                    },
                    {
                        QuestionID: 'Design_Appropriateness_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Design_Appropriateness_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Design_Appropriateness_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Design_Appropriateness_4',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Fidelity_1',
                        Response: 'Yes, Intervention Only',
                    },
                    {
                        QuestionID: 'Fidelity_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Fidelity_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Fidelity_4',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Fidelity_5',
                        Response: 'Yes',
                    },
                ],
            },
            ExternalValidity: {
                Status: 'Completed',
                Questions: [
                    {
                        QuestionID: 'Social_Validity_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Social_Validity_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Social_Validity_3',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Social_Validity_4',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Social_Validity_5',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_3',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_4',
                        Response: 'N/A',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_5',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_6',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_7',
                        Response: 'Post Only',
                    },
                    {
                        QuestionID: 'Maintenance_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Maintenance_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Maintenance_3',
                        Response: 'Immediately after Cessation',
                    },
                ],
            },
            Reporting: {
                Status: 'Completed',
                Questions: [
                    {
                        QuestionID: 'Reporting_1',
                        Response: 'Partial',
                    },
                    {
                        QuestionID: 'Reporting_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_4',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Reporting_5',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_6',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_7',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_8',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_9',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_10',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_11',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Reporting_12',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Reporting_13',
                        Response: 'Yes',
                    },
                ],
            },
            Outcomes: {
                Status: 'Completed',
                Questions: [
                    {
                        QuestionID: 'Outcomes_1',
                        Response: 'Primary',
                    },
                    {
                        QuestionID: 'Outcomes_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Outcomes_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Outcomes_4',
                        Response: 'Strong',
                    },
                    {
                        QuestionID: 'Outcomes_5',
                        Response: 'Weak',
                    },
                    {
                        QuestionID: 'Outcomes_6',
                        Response: 'Weak',
                    },
                ],
            },
            PublicationType: 'Journal',
        },
        {
            StudyID: 'd9691207-fc42-4c2f-aa46-40ce299def07',
            StudyTag: '001',
            StudyAuthors: 'Study 1 Authors',
            StudyTitle: 'Study Title',
            StudyJournal: 'Study Journal',
            StudyYear: 1995,
            InternalValidity: {
                Status: 'Completed',
                Questions: [
                    {
                        QuestionID: 'DV_Measurement_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_4',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_5',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_6',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'DV_Measurement_7',
                        Response: 'Context Bound',
                    },
                    {
                        QuestionID: 'Design_Appropriateness_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Design_Appropriateness_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Design_Appropriateness_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Design_Appropriateness_4',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Fidelity_1',
                        Response: 'Yes, Intervention Only',
                    },
                    {
                        QuestionID: 'Fidelity_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Fidelity_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Fidelity_4',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Fidelity_5',
                        Response: 'Yes',
                    },
                ],
            },
            ExternalValidity: {
                Status: 'Completed',
                Questions: [
                    {
                        QuestionID: 'Social_Validity_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Social_Validity_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Social_Validity_3',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Social_Validity_4',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Social_Validity_5',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_3',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_4',
                        Response: 'N/A',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_5',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_6',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_7',
                        Response: 'Post Only',
                    },
                    {
                        QuestionID: 'Maintenance_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Maintenance_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Maintenance_3',
                        Response: 'Immediately after Cessation',
                    },
                ],
            },
            Reporting: {
                Status: 'Completed',
                Questions: [
                    {
                        QuestionID: 'Reporting_1',
                        Response: 'Partial',
                    },
                    {
                        QuestionID: 'Reporting_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_4',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Reporting_5',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_6',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_7',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_8',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_9',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_10',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_11',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Reporting_12',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Reporting_13',
                        Response: 'Yes',
                    },
                ],
            },
            Outcomes: {
                Status: 'Completed',
                Questions: [
                    {
                        QuestionID: 'Outcomes_1',
                        Response: 'Primary',
                    },
                    {
                        QuestionID: 'Outcomes_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Outcomes_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Outcomes_4',
                        Response: 'Strong',
                    },
                    {
                        QuestionID: 'Outcomes_5',
                        Response: 'Weak',
                    },
                    {
                        QuestionID: 'Outcomes_6',
                        Response: 'Weak',
                    },
                ],
            },
            PublicationType: 'Journal',
        },
        {
            StudyID: 'e9691207-fc42-4c2f-aa46-40ce299def07',
            StudyTag: '001',
            StudyAuthors: 'Study 1 Authors',
            StudyTitle: 'Study Title',
            StudyJournal: 'Study Journal',
            StudyYear: 1995,
            InternalValidity: {
                Status: 'Completed',
                Questions: [
                    {
                        QuestionID: 'DV_Measurement_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_4',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_5',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_6',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'DV_Measurement_7',
                        Response: 'Context Bound',
                    },
                    {
                        QuestionID: 'Design_Appropriateness_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Design_Appropriateness_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Design_Appropriateness_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Design_Appropriateness_4',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Fidelity_1',
                        Response: 'Yes, Intervention Only',
                    },
                    {
                        QuestionID: 'Fidelity_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Fidelity_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Fidelity_4',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Fidelity_5',
                        Response: 'Yes',
                    },
                ],
            },
            ExternalValidity: {
                Status: 'Completed',
                Questions: [
                    {
                        QuestionID: 'Social_Validity_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Social_Validity_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Social_Validity_3',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Social_Validity_4',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Social_Validity_5',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_3',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_4',
                        Response: 'N/A',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_5',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_6',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_7',
                        Response: 'Post Only',
                    },
                    {
                        QuestionID: 'Maintenance_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Maintenance_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Maintenance_3',
                        Response: 'Immediately after Cessation',
                    },
                ],
            },
            Reporting: {
                Status: 'Completed',
                Questions: [
                    {
                        QuestionID: 'Reporting_1',
                        Response: 'Partial',
                    },
                    {
                        QuestionID: 'Reporting_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_4',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Reporting_5',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_6',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_7',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_8',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_9',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_10',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_11',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Reporting_12',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Reporting_13',
                        Response: 'Yes',
                    },
                ],
            },
            Outcomes: {
                Status: 'Completed',
                Questions: [
                    {
                        QuestionID: 'Outcomes_1',
                        Response: 'Primary',
                    },
                    {
                        QuestionID: 'Outcomes_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Outcomes_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Outcomes_4',
                        Response: 'Strong',
                    },
                    {
                        QuestionID: 'Outcomes_5',
                        Response: 'Weak',
                    },
                    {
                        QuestionID: 'Outcomes_6',
                        Response: 'Weak',
                    },
                ],
            },
            PublicationType: 'Journal',
        },
        {
            StudyID: 'f9691207-fc42-4c2f-aa46-40ce299def07',
            StudyTag: '001',
            StudyAuthors: 'Study 1 Authors',
            StudyTitle: 'Study Title',
            StudyJournal: 'Study Journal',
            StudyYear: 1995,
            InternalValidity: {
                Status: 'Completed',
                Questions: [
                    {
                        QuestionID: 'DV_Measurement_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_4',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_5',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_6',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'DV_Measurement_7',
                        Response: 'Context Bound',
                    },
                    {
                        QuestionID: 'Design_Appropriateness_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Design_Appropriateness_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Design_Appropriateness_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Design_Appropriateness_4',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Fidelity_1',
                        Response: 'Yes, Intervention Only',
                    },
                    {
                        QuestionID: 'Fidelity_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Fidelity_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Fidelity_4',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Fidelity_5',
                        Response: 'Yes',
                    },
                ],
            },
            ExternalValidity: {
                Status: 'Completed',
                Questions: [
                    {
                        QuestionID: 'Social_Validity_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Social_Validity_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Social_Validity_3',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Social_Validity_4',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Social_Validity_5',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_3',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_4',
                        Response: 'N/A',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_5',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_6',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_7',
                        Response: 'Post Only',
                    },
                    {
                        QuestionID: 'Maintenance_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Maintenance_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Maintenance_3',
                        Response: 'Immediately after Cessation',
                    },
                ],
            },
            Reporting: {
                Status: 'Completed',
                Questions: [
                    {
                        QuestionID: 'Reporting_1',
                        Response: 'Partial',
                    },
                    {
                        QuestionID: 'Reporting_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_4',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Reporting_5',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_6',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_7',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_8',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_9',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_10',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_11',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Reporting_12',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Reporting_13',
                        Response: 'Yes',
                    },
                ],
            },
            Outcomes: {
                Status: 'Completed',
                Questions: [
                    {
                        QuestionID: 'Outcomes_1',
                        Response: 'Primary',
                    },
                    {
                        QuestionID: 'Outcomes_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Outcomes_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Outcomes_4',
                        Response: 'Strong',
                    },
                    {
                        QuestionID: 'Outcomes_5',
                        Response: 'Weak',
                    },
                    {
                        QuestionID: 'Outcomes_6',
                        Response: 'Weak',
                    },
                ],
            },
            PublicationType: 'Journal',
        },
        {
            StudyID: 'f9691207-fc42-4c2f-aa46-40ce299def07-unpublished',
            StudyTag: '001',
            StudyAuthors: 'Study 1 Authors',
            StudyTitle: 'Study Title',
            StudyJournal: '',
            StudyYear: 1995,
            InternalValidity: {
                Status: 'Completed',
                Questions: [
                    {
                        QuestionID: 'DV_Measurement_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_4',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_5',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_6',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'DV_Measurement_7',
                        Response: 'Context Bound',
                    },
                    {
                        QuestionID: 'Design_Appropriateness_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Design_Appropriateness_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Design_Appropriateness_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Design_Appropriateness_4',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Fidelity_1',
                        Response: 'Yes, Intervention Only',
                    },
                    {
                        QuestionID: 'Fidelity_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Fidelity_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Fidelity_4',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Fidelity_5',
                        Response: 'Yes',
                    },
                ],
            },
            ExternalValidity: {
                Status: 'Completed',
                Questions: [
                    {
                        QuestionID: 'Social_Validity_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Social_Validity_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Social_Validity_3',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Social_Validity_4',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Social_Validity_5',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_3',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_4',
                        Response: 'N/A',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_5',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_6',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_7',
                        Response: 'Post Only',
                    },
                    {
                        QuestionID: 'Maintenance_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Maintenance_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Maintenance_3',
                        Response: 'Immediately after Cessation',
                    },
                ],
            },
            Reporting: {
                Status: 'Completed',
                Questions: [
                    {
                        QuestionID: 'Reporting_1',
                        Response: 'Partial',
                    },
                    {
                        QuestionID: 'Reporting_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_4',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Reporting_5',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_6',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_7',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_8',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_9',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_10',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_11',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Reporting_12',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Reporting_13',
                        Response: 'Yes',
                    },
                ],
            },
            Outcomes: {
                Status: 'Completed',
                Questions: [
                    {
                        QuestionID: 'Outcomes_1',
                        Response: 'Primary',
                    },
                    {
                        QuestionID: 'Outcomes_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Outcomes_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Outcomes_4',
                        Response: 'Strong',
                    },
                    {
                        QuestionID: 'Outcomes_5',
                        Response: 'Weak',
                    },
                    {
                        QuestionID: 'Outcomes_6',
                        Response: 'Weak',
                    },
                ],
            },
            PublicationType: 'Unpublished',
        },
        {
            StudyID: 'f9691207-fc42-4c2f-aa46-40ce299def07-g1',
            StudyTag: '001',
            StudyAuthors: 'Study 1 Authors',
            StudyTitle: 'Study Title',
            StudyJournal: 'Study Journal',
            StudyYear: 1995,
            InternalValidity: {
                Status: 'Completed',
                Questions: [
                    {
                        QuestionID: 'DV_Measurement_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_4',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_5',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'DV_Measurement_6',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'DV_Measurement_7',
                        Response: 'Context Bound',
                    },
                    {
                        QuestionID: 'Design_Appropriateness_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Design_Appropriateness_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Design_Appropriateness_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Design_Appropriateness_4',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Fidelity_1',
                        Response: 'Yes, Intervention Only',
                    },
                    {
                        QuestionID: 'Fidelity_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Fidelity_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Fidelity_4',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Fidelity_5',
                        Response: 'Yes',
                    },
                ],
            },
            ExternalValidity: {
                Status: 'Completed',
                Questions: [
                    {
                        QuestionID: 'Social_Validity_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Social_Validity_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Social_Validity_3',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Social_Validity_4',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Social_Validity_5',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_3',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_4',
                        Response: 'N/A',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_5',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_6',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Generality_Boundedness_7',
                        Response: 'Post Only',
                    },
                    {
                        QuestionID: 'Maintenance_1',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Maintenance_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Maintenance_3',
                        Response: 'Immediately after Cessation',
                    },
                ],
            },
            Reporting: {
                Status: 'Completed',
                Questions: [
                    {
                        QuestionID: 'Reporting_1',
                        Response: 'Partial',
                    },
                    {
                        QuestionID: 'Reporting_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_4',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Reporting_5',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_6',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_7',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_8',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_9',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_10',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Reporting_11',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Reporting_12',
                        Response: 'No',
                    },
                    {
                        QuestionID: 'Reporting_13',
                        Response: 'Yes',
                    },
                ],
            },
            Outcomes: {
                Status: 'Completed',
                Questions: [
                    {
                        QuestionID: 'Outcomes_1',
                        Response: 'Primary',
                    },
                    {
                        QuestionID: 'Outcomes_2',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Outcomes_3',
                        Response: 'Yes',
                    },
                    {
                        QuestionID: 'Outcomes_4',
                        Response: 'N/A',
                    },
                    {
                        QuestionID: 'Outcomes_5',
                        Response: 'N/A',
                    },
                    {
                        QuestionID: 'Outcomes_6',
                        Response: 'N/A',
                    },
                ],
            },
            PublicationType: 'Journal',
        },
    ],
}

export const dbAtom = atom<GlobalStateType>(DefaultStartingValue)
