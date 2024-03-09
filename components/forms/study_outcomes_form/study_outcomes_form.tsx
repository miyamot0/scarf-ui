import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { dbAtom, database_reducer } from '@/atoms/db_atom'
import { useReducerAtom } from 'jotai/utils'
import { QuestionObjectHolder, StudyObject } from '@/types/QuestionTypes'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { GetSelectOptionsFromTag } from '../inputs/select_options'
import { StudyOutcomesSchema } from './study_outcomes_schema'

export function StudyOutcomesForm({ study }: { study?: StudyObject }) {
    const [, dispatch] = useReducerAtom(dbAtom, database_reducer)

    const form = useForm<z.infer<typeof StudyOutcomesSchema>>({
        resolver: zodResolver(StudyOutcomesSchema),
        defaultValues: {
            Outcomes_1: study?.Outcomes.Questions.find(
                (q) => q.QuestionID === 'Outcomes_1'
            )?.Response,
            Outcomes_2: study?.Outcomes.Questions.find(
                (q) => q.QuestionID === 'Outcomes_2'
            )?.Response,
            Outcomes_3: study?.Outcomes.Questions.find(
                (q) => q.QuestionID === 'Outcomes_3'
            )?.Response,
            Outcomes_4: study?.Outcomes.Questions.find(
                (q) => q.QuestionID === 'Outcomes_4'
            )?.Response,
            Outcomes_5: study?.Outcomes.Questions.find(
                (q) => q.QuestionID === 'Outcomes_5'
            )?.Response,
            Outcomes_6: study?.Outcomes.Questions.find(
                (q) => q.QuestionID === 'Outcomes_6'
            )?.Response,
        },
    })

    function onSubmit(values: z.infer<typeof StudyOutcomesSchema>) {
        if (!study) throw new Error('Study should not be undefined')

        let questions = study.Outcomes.Questions

        let t: keyof QuestionObjectHolder

        // @ts-ignore
        for (t in values) {
            questions = questions.map((q) => {
                if (q.QuestionID === t) {
                    const keyTyped = t as keyof typeof values
                    q.Response = values[keyTyped]
                }
                return q
            })
        }

        const updated_study = {
            ...study,
            Outcomes: {
                ...study.Outcomes,
                Questions: questions,
                Status: 'Completed',
            },
        } satisfies StudyObject

        dispatch({
            type: 'update_study',
            payload: { study_id: study.StudyID, updatedData: updated_study },
        })
    }

    function manual_overrides(question: QuestionObjectHolder, value: string) {
        if (question.QuestionID === 'Outcomes_2' && value === 'No') {
            form.setValue('Outcomes_3', 'N/A')
            form.trigger('Outcomes_3')
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {study?.Outcomes.Questions.map((question) => {
                    return (
                        <FormField
                            key={question.QuestionID}
                            control={form.control}
                            // @ts-ignore
                            name={question.QuestionID}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        {question.QuestionStem}
                                    </FormLabel>
                                    <FormControl>
                                        <Select
                                            onValueChange={(value) => {
                                                field.onChange(value)
                                                manual_overrides(
                                                    question,
                                                    value
                                                )
                                            }}
                                            defaultValue={field.value}
                                            value={field.value}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {GetSelectOptionsFromTag(
                                                    question.QuestionType
                                                ).map((option) => {
                                                    return (
                                                        <SelectItem
                                                            key={option}
                                                            value={option}
                                                        >
                                                            {option}
                                                        </SelectItem>
                                                    )
                                                })}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )
                })}

                <Button type="submit" size={'lg'} className="w-full">
                    Update Study
                </Button>
            </form>
        </Form>
    )
}