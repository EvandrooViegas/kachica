"use server"
import { Costumer } from "@/app/sections/form";
import notion from "@/lib/notion";

export const addCostumer = async (costumer: Costumer) => {
    const response = await notion.pages.create({
        parent: {
          database_id: '460e13d540b948d3ae0350136b0e058f',
        },
        properties: {
          'Full Name': {
            type: 'title',
            title: [
              {
                type: 'text',
                text: {
                  content: costumer.full_name,
                },
              },
            ],
          },
          'Email': {
            type: 'email',
            email: costumer.email
          },
          'Phone Number': {
            type: 'phone_number',
            phone_number: costumer.phone_number
          },
          'Message': {
            type: 'rich_text',
            rich_text: [{ type: "text", text: { content: costumer.message } }]
          },
          'Lead Type': {
            type: 'select',
            select: {
                name: "Website Form"
            }
          }
        },
      });
}