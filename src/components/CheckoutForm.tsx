"use client";

import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { trpc } from "../app/_trpc/client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

type Props = {};

const CheckoutForm = (props: Props) => {
  const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  );

  const formSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters",
    }),
    email: z.string().email({
      message: "Invalid email address",
    }),
    phoneNumber: z.string().regex(phoneRegex, {
      message: "Invalid number",
    }),
    address: z.string().min(5, {
      message: "Invalid address",
    }),
    zipCode: z.number().min(3, {
      message: "Invalid zip code",
    }),
    city: z.string().min(2, {
      message: "Invalid city name",
    }),
    country: z.string().min(2, {
      message: "Invalid country name",
    }),
    paymentMethod: z.enum(["e-money", "cash"], {
      required_error: "You need to select a payment method",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {};

  return (
    <div className="mt-12 px-6">
      <h1 className="text-[1.75rem] leading-[0.0625rem] font-bold">CHECKOUT</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} action="">
          <section className="flex flex-col gap-6">
            <h2 className="mt-8 text-[#D87D4A] text-[0.8125rem] leading-[1.5625rem] tracking-[0.05806rem] font-bold uppercase">
              Billing details
            </h2>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-[0.56rem]">
                  <FormLabel className="text-[0.75rem] leading-normal tracking-[-0.01338rem] font-bold">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="text-[0.875rem] font-bold leading-normal tracking-[-0.01563rem] py-[1.15rem] px-6 border-[#CFCFCF] rounded-[0.5rem] placeholder:text-black/40"
                      placeholder="Alexei Ward"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-[0.56rem]">
                  <FormLabel className="text-[0.75rem] leading-normal tracking-[-0.01338rem] font-bold">
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="text-[0.875rem] font-bold leading-normal tracking-[-0.01563rem] py-[1.15rem] px-6 border-[#CFCFCF] rounded-[0.5rem] placeholder:text-black/40"
                      placeholder="alexei@mail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="space-y-[0.56rem]">
                  <FormLabel className="text-[0.75rem] leading-normal tracking-[-0.01338rem] font-bold">
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="text-[0.875rem] font-bold leading-normal tracking-[-0.01563rem] py-[1.15rem] px-6 border-[#CFCFCF] rounded-[0.5rem] placeholder:text-black/40"
                      placeholder="+1 202-555-0136"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </section>
          <section className="flex flex-col gap-6">
            <h2 className="mt-8 text-[#D87D4A] text-[0.8125rem] leading-[1.5625rem] tracking-[0.05806rem] font-bold uppercase">
              shippiing info
            </h2>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="space-y-[0.56rem]">
                  <FormLabel className="text-[0.75rem] leading-normal tracking-[-0.01338rem] font-bold">
                    Your address
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="text-[0.875rem] font-bold leading-normal tracking-[-0.01563rem] py-[1.15rem] px-6 border-[#CFCFCF] rounded-[0.5rem] placeholder:text-black/40"
                      placeholder="1137 Williams Avenue"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem className="space-y-[0.56rem]">
                  <FormLabel className="text-[0.75rem] leading-normal tracking-[-0.01338rem] font-bold">
                    ZIP Code
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="text-[0.875rem] font-bold leading-normal tracking-[-0.01563rem] py-[1.15rem] px-6 border-[#CFCFCF] rounded-[0.5rem] placeholder:text-black/40"
                      placeholder="10001"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="space-y-[0.56rem]">
                  <FormLabel className="text-[0.75rem] leading-normal tracking-[-0.01338rem] font-bold">
                    City
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="text-[0.875rem] font-bold leading-normal tracking-[-0.01563rem] py-[1.15rem] px-6 border-[#CFCFCF] rounded-[0.5rem] placeholder:text-black/40"
                      placeholder="New York"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="space-y-[0.56rem]">
                  <FormLabel className="text-[0.75rem] leading-normal tracking-[-0.01338rem] font-bold">
                    Country
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="text-[0.875rem] font-bold leading-normal tracking-[-0.01563rem] py-[1.15rem] px-6 border-[#CFCFCF] rounded-[0.5rem] placeholder:text-black/40"
                      placeholder="United States"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </section>
          <section className="flex flex-col gap-4">
            <h2 className="mt-8 text-[#D87D4A] text-[0.8125rem] leading-[1.5625rem] tracking-[0.05806rem] font-bold uppercase">
              Payment Details
            </h2>
            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem className="space-y-4">
                  <FormLabel className="text-[0.75rem] leading-normal tracking-[-0.01338rem] font-bold">
                    Payment Method
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="gap-4"
                    >
                      <FormItem
                        className={`px-4 py-[1.13rem] border rounded-[0.5rem] ${
                          field.value === "e-money"
                            ? "border-[#D87D4A]"
                            : "border-[#CFCFCF] "
                        }`}
                      >
                        <FormControl>
                          <RadioGroupItem
                            value="e-money"
                            className={`peer ${
                              field.value === "e-money"
                                ? "text-[#D87D4A]"
                                : "text-white "
                            }`}
                          />
                        </FormControl>
                        <FormLabel className="text-[0.875rem] leading-normal tracking-[-0.01563rem] font-bold ml-4">
                          e-Money
                        </FormLabel>
                      </FormItem>
                      <FormItem className={`px-4 py-[1.13rem] border rounded-[0.5rem] ${
                          field.value === "cash"
                            ? "border-[#D87D4A]"
                            : "border-[#CFCFCF] "
                        }`}>
                        <FormControl>
                          <RadioGroupItem value="cash"
                            className={`peer ${
                              field.value === "cash"
                                ? "text-[#D87D4A]"
                                : "text-white "
                            }`}/>
                        </FormControl>
                        <FormLabel className="text-[0.875rem] leading-normal tracking-[-0.01563rem] font-bold ml-4">
                          Cash on Delivery
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </section>
        </form>
      </Form>
    </div>
  );
};

export default CheckoutForm;
