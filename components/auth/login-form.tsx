"use client"
import * as z from "zod";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";

import { CardWrapper } from "./card-wrapper"
import { 
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";




export const LoginForm = () => {
    const form  = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })
    return(
        <CardWrapper 
        headerLabel="Welcome Back"
        backButtonLabel="Don't have an account?"
        backButtonHref="/auth/register"
        showSocial
        >
            <Form {...form}>
                <form 
                onSubmit={form.handleSubmit(() => {})}
                className="space-y-6">
                    <div className="space-y-4">
                        <FormField 
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input 
                                    {...field}
                                    placeholder="jhon.doe@gmail.com"
                                    type="email"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />

                        <FormField 
                        control={form.control}
                        name="password"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input 
                                    {...field}
                                    placeholder="******"
                                    type="password"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}

                        />
                    </div>
                </form>
            </Form>
        </CardWrapper>
    )
}