/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { authAPI } from "@/apiResponse/auth";
import { useAppProvider } from "@/app/providers/useAppProvider";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  LoginRequest,
  LoginRequestType,
} from "@/schemaValidations/auth.schema";

export function LoginForm() {
  const { accessToken, setAccessToken } = useAppProvider();
  // 1. Define your form.
  const form = useForm<LoginRequestType>({
    resolver: zodResolver(LoginRequest),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: LoginRequestType) {
    const result = await authAPI.login(values);
    setAccessToken(result.payload.accessToken || "");
    await authAPI.authServer(result.payload);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full font-bold">
          Đăng nhập
        </Button>
        <Button type="button" variant="outline" className="w-full">
          Đăng nhập với Google
        </Button>
        {accessToken && <p>Access Token: {accessToken}</p>}
      </form>
    </Form>
  );
}
