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
  const { language, t } = useLanguage();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await addCostumer(values);
    toast({
      title: language === "pt" ? "Obrigado!" : "Thank you!",
      description: language === "pt" 
        ? "Entraremos em contato com você em breve!"
        : "Our time is going to contact you back as soon as possible!",
    })
    form.reset()
  }
  return (
    <FormComp {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5   p-12  border ">
      <div className="flex flex-col items-center gap-2 text-center mb-12">
        <span className="block sub-title">
          {t("Let's Work together", "Vamos Trabalhar Juntos")}
        </span>
        <span className="block title">
          {t(
            "Work with Us and Elevate Your Business",
            "Trabalhe Conosco e Eleve Seu Negócio"
          )}
        </span>
      </div>
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("Full Name", "Nome Completo")}</FormLabel>
              <FormControl>
                <Input placeholder="Jhon Doe" {...field} />
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
              <FormLabel>{t("E-mail", "E-mail")}</FormLabel>
              <FormControl>
                <Input placeholder="jhondoe@gmail.com" {...field} />
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
              <FormLabel>{t("Phone Number", "Número de Telefone")}</FormLabel>
              <FormControl>
                <Input placeholder="+1 (555) 123-4567" {...field} />
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
              <FormLabel>{t("Message", "Mensagem")}</FormLabel>
              <FormControl>
                <textarea 
                  placeholder={t("Tell us about your project...", "Conte-nos sobre seu projeto...")}
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
          {t("Submit", "Enviar")}
        </Button>
      </form>
    </FormComp>
  );
}
