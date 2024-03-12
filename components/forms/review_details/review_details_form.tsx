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
import { dbAtom } from '@/atoms/db_atom'
import { useReducerAtom } from 'jotai/utils'
import { database_reducer } from '@/atoms/reducers/reducer'
import { ReviewDetailsSchema } from './review_details_schema'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Review_Types } from '@/types/ReviewTypes'
import { toast } from 'sonner'

export function ReviewDetailsForm() {
    const [state, dispatch] = useReducerAtom(dbAtom, database_reducer)

    const form = useForm<z.infer<typeof ReviewDetailsSchema>>({
        resolver: zodResolver(ReviewDetailsSchema),
        defaultValues: {
            title: state?.ReviewName,
            type: state?.ReviewType ?? 'Primary',
        },
    })

    function onSubmit(values: z.infer<typeof ReviewDetailsSchema>) {
        dispatch({
            type: 'update_review',
            payload: {
                review_name: values.title,
                review_type: values.type,
            },
        })

        toast('Updated Review Information', {
            description: 'Your data has been saved.',
            duration: 2000,
            dismissible: true,
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Review Title</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormDescription>
                                Give a name to this review file to distinguish
                                it from others
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name={'type'}
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>
                                    Primary or Reliability Coder
                                </FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={(value) => {
                                            field.onChange(value)
                                        }}
                                        defaultValue={field.value}
                                        value={field.value}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Review_Types.map((option) => {
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

                                <FormDescription>
                                    Select whether file is for a primary or
                                    reliability coder
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />

                <Button type="submit" size={'lg'} className="w-full">
                    Update Review
                </Button>
            </form>
        </Form>
    )
}
