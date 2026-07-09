"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form as FormComp,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addCostumer } from "@/services/notion";
import { toast } from "@/components/ui/use-toast";
import { useLanguage } from "@/app/language.context";
import { getContent } from "@/lib/i18n";

const formSchema = z.object({
  full_name: z.string().min(2, {
    message: "Full name must have at least 2 characters"
  }),
  email: z.string().email(),
  phone_number: z.string().min(10, {
    message: "Phone number must have at least 10 digits"
  }),
  message: z.string().min(10, {
    message: "Message must have at least 10 characters"
  }),
});

export type Costumer = z.infer<typeof formSchema>;

export default function Form() {
  const { language } = useLanguage();
  const content = getContent(language);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await addCostumer(values);
    toast({
      title: content.contact.toastTitle,
      description: content.contact.toastDescription,
    })
    form.reset()
  }
  return (
    <FormComp {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5   p-6 sm:p-8 md:p-12  border ">
      <div className="flex flex-col items-center gap-2 text-center mb-8 md:mb-12">
        <span className="block sub-title text-base sm:text-base">
          {content.contact.formSubtitle}
        </span>
        <span className="block title text-2xl sm:text-2xl">
          {content.contact.formTitle}
        </span>
      </div>
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{content.contact.formLabels.fullName}</FormLabel>
              <FormControl>
                <Input placeholder={content.contact.formPlaceholder.fullName} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{content.contact.formLabels.email}</FormLabel>
              <FormControl>
                <Input placeholder={content.contact.formPlaceholder.email} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{content.contact.formLabels.phoneNumber}</FormLabel>
              <FormControl>
                <Input placeholder={content.contact.formPlaceholder.phone} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{content.contact.formLabels.message}</FormLabel>
              <FormControl>
                <textarea 
                  placeholder={content.contact.formPlaceholder.message}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="sm" >
          {content.contact.formLabels.submit}
        </Button>

        {/* Social Links */}
        <div className="flex flex-col items-center gap-4 pt-6 border-t mt-6">
          <span className="text-sm font-semibold text-neutral-700">
            {content.contact.socialLabel}
          </span>
          <div className="flex items-center gap-4">
            <a href={content.social.instagram} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><circle cx="17.5" cy="6.5" r="1.5"></circle></svg>
            </a>
          </div>
        </div>
      </form>
    </FormComp>
  );
}
