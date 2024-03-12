import { StudyObject } from '@/questions/types/QuestionTypes'
import { Column, ColumnDef, Row } from '@tanstack/react-table'
import { DataTableColumnHeader } from '../general/study_column_header'
import {
    ExternalValidityQuestionDefault,
    InternalValidityQuestionDefault,
    OutcomesQuestionDefault,
    ReportingQuestionDefault,
} from '@/questions/questions_defaults'

const empirical_cols_1 = InternalValidityQuestionDefault.Questions.map(
    (question) => {
        return {
            accessorKey: question.QuestionID,
            header: ({ column }: { column: Column<StudyObject, unknown> }) => (
                <DataTableColumnHeader
                    column={column}
                    title={question.QuestionID}
                />
            ),
            cell: ({ row }: { row: Row<StudyObject> }) => (
                <span>
                    {
                        row.original.InternalValidity.Questions.find(
                            (q) => q.QuestionID === question.QuestionID
                        )?.Response
                    }
                </span>
            ),
        }
    }
)

const empirical_cols_2 = ExternalValidityQuestionDefault.Questions.map(
    (question) => {
        return {
            accessorKey: question.QuestionID,
            header: ({ column }: { column: Column<StudyObject, unknown> }) => (
                <DataTableColumnHeader
                    column={column}
                    title={question.QuestionID}
                />
            ),
            cell: ({ row }: { row: Row<StudyObject> }) => (
                <span>
                    {
                        row.original.ExternalValidity.Questions.find(
                            (q) => q.QuestionID === question.QuestionID
                        )?.Response
                    }
                </span>
            ),
        }
    }
)

const empirical_cols_3 = ReportingQuestionDefault.Questions.map((question) => {
    return {
        accessorKey: question.QuestionID,
        header: ({ column }: { column: Column<StudyObject, unknown> }) => (
            <DataTableColumnHeader
                column={column}
                title={question.QuestionID}
            />
        ),
        cell: ({ row }: { row: Row<StudyObject> }) => (
            <span>
                {
                    row.original.Reporting.Questions.find(
                        (q) => q.QuestionID === question.QuestionID
                    )?.Response
                }
            </span>
        ),
    }
})

const empirical_cols_4 = OutcomesQuestionDefault.Questions.map((question) => {
    return {
        accessorKey: question.QuestionID,
        header: ({ column }: { column: Column<StudyObject, unknown> }) => (
            <DataTableColumnHeader
                column={column}
                title={question.QuestionID}
            />
        ),
        cell: ({ row }: { row: Row<StudyObject> }) => (
            <span>
                {
                    row.original.Outcomes.Questions.find(
                        (q) => q.QuestionID === question.QuestionID
                    )?.Response
                }
            </span>
        ),
    }
})

export const study_columns: ColumnDef<StudyObject>[] = [
    {
        accessorKey: 'StudyID',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="ID" />
        ),
    },
    {
        accessorKey: 'StudyTag',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Tag" />
        ),
    },
    {
        accessorKey: 'StudyAuthors',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Authors" />
        ),
    },
    {
        accessorKey: 'StudyTitle',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Title" />
        ),
    },
    {
        accessorKey: 'StudyJournal',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Journal" />
        ),
    },
    {
        accessorKey: 'StudyYear',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Year" />
        ),
        cell: ({ row }) => (
            <span>
                {row.original.StudyYear < 0 ? '' : row.original.StudyYear}
            </span>
        ),
    },
    ...empirical_cols_1,
    ...empirical_cols_2,
    ...empirical_cols_3,
    ...empirical_cols_4,
]
