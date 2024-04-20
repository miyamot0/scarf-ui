import { useForm } from 'react-hook-form'
import { StudyDetailsSchema } from './study_planning_schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { dbAtom } from '@/atoms/db_atom'
import { useReducerAtomLocal as useReducerAtom } from '@/components/hooks/useReducerAtomLocal'
import { database_reducer } from '@/atoms/reducers/reducer'
import { toast } from 'sonner'
import { PlanningState } from '@/questions/types/PlanningStateTypes'
import { PlanningQuestions } from '@/questions/simplified_questions'
import { Textarea } from '@/components/ui/textarea'

export function StudyPlanningForm({ planning }: { planning?: PlanningState }) {
    const [state, dispatch] = useReducerAtom(dbAtom, database_reducer)
    const form = useForm<z.infer<typeof StudyDetailsSchema>>({
        resolver: zodResolver(StudyDetailsSchema),
        defaultValues: { ...planning },
    })

    function onSubmit(values: z.infer<typeof StudyDetailsSchema>) {
        /*
        if (!study) throw new Error('Study should not be undefined')

        const updated_study: StudyObject = {
            ...study,
            StudyTag: values.code,
            StudyAuthors: values.authors,
            StudyTitle: values.title,
            StudyJournal: values.journal,
            StudyYear: values.year,
        }

        dispatch({
            type: 'update_study',
            payload: { study_id: study.StudyID, updatedData: updated_study },
        })

        toast('Study Data Updated.', {
            description: 'Inspect the main table to review current progress.',
            duration: 2000,
            dismissible: true,
        })
        */
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {state.ReviewPlans.Questions.map((question) => {
                    const questionStem = question.QuestionStem
                    const questionInstruction = question.QuestionInstruction

                    return (
                        <FormField
                            key={question.QuestionID}
                            control={form.control}
                            // @ts-ignore
                            name={question.QuestionID}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{questionStem}</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="" {...field} />
                                    </FormControl>

                                    <FormDescription>
                                        {questionInstruction}
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )
                })}

                <Button type="submit" size={'lg'} className="w-full">
                    Update Review
                </Button>
            </form>
        </Form>
    )
}
