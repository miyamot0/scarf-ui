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
import { StudyObject } from '@/types/QuestionTypes'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { GetSelectOptionsFromTag } from '../inputs/select_options'
import { QuestionObjectHolder } from '@/assets/simplified_questions'
import { StudyExternalValiditySchema } from './study_external_validity_schema'

export function StudyExternalValidityForm({ study }: { study?: StudyObject }) {
    const [, dispatch] = useReducerAtom(dbAtom, database_reducer)

    const form = useForm<z.infer<typeof StudyExternalValiditySchema>>({
        resolver: zodResolver(StudyExternalValiditySchema),
        defaultValues: {},
    })

    function onSubmit(values: z.infer<typeof StudyExternalValiditySchema>) {
        if (!study) throw new Error('Study should not be undefined')

        let questions = study.ExternalValidity.Questions

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
            ExternalValidity: {
                ...study.ExternalValidity,
                Questions: questions,
                Status: 'Completed',
            },
        } satisfies StudyObject

        dispatch({
            type: 'update_study',
            payload: { study_id: study.StudyID, updatedData: updated_study },
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {study?.ExternalValidity.Questions.map((question) => {
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
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
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
