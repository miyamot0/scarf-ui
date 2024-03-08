import { useForm } from 'react-hook-form'
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
import { useToast } from '@/components/ui/use-toast'
import { dbAtom, database_reducer } from '@/atoms/db_atom'
import { useReducerAtom } from 'jotai/utils'
import {
    QuestionCategoryDVMeasurement,
    StudyObject,
} from '@/types/QuestionTypes'
import { StudyInternalValiditySchema } from './study_internal_validity_schema'
import { ScarfQuestionsIVDependentMeasures } from '@/assets/scarf_questions'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { OptionsYesNo } from '../inputs/select_options'

export function StudyInternalValidityForm({ study }: { study?: StudyObject }) {
    const { toast } = useToast()
    const [, dispatch] = useReducerAtom(dbAtom, database_reducer)
    const form = useForm<z.infer<typeof StudyInternalValiditySchema>>({
        resolver: zodResolver(StudyInternalValiditySchema),
    })

    function onSubmit(values: z.infer<typeof StudyInternalValiditySchema>) {
        if (!study) throw new Error('Study should not be undefined')

        /*
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
        */

        toast({
            title: 'TODO: Updated in DB',
            description: 'TODO',
            duration: 2000,
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {ScarfQuestionsIVDependentMeasures.map((question) => {
                    return (
                        <FormField
                            key={question.QuestionID}
                            control={form.control}
                            name={
                                question.QuestionID as QuestionCategoryDVMeasurement
                            }
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        {question.QuestionStem}
                                    </FormLabel>
                                    <FormControl>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {OptionsYesNo.map((option) => {
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
