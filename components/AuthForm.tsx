"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from "@/components/CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Loader } from "lucide-react";

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsLoading(true);
    console.log(values)
    setIsLoading(false);
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
         <Link
            href="/"
            className="flex cursor-pointer items-center gap-1"
          >
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="Makuta logo"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Makuta</h1>
          </Link>

          <div className="flex flex-col gap-1 md:gap-3">
            <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
              {user
                ? "Link Account"
                : type === "sign-in"
                  ? "Sign In"
                  : "Sign Up"
              }
            </h1>
            <p className="text-16 font-normal text-gray-6">
              {user
                ? "Link your account to get started"
                : "Please enter your details to continue"
              }
            </p>
          </div>
      </header>
      {user ? (
        <div className="flex fle-col gap-4">
          {/* PlaidLink */}
        </div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "sign-up" && (
                <>
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      label="First Name"
                      name="firstName"
                      placeholder="Enter your first name"
                    />

                    <CustomInput
                      control={form.control}
                      label="Last Name"
                      name="lastName"
                      placeholder="Enter your last name"
                    />
                  </div>

                  <CustomInput
                    control={form.control}
                    label="Address"
                    name="address1"
                    placeholder="Enter your specific address"
                  />

                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      label="State"
                      name="state"
                      placeholder="Example: NY"
                    />

                    <CustomInput
                      control={form.control}
                      label="Postal Code"
                      name="postalCode"
                      placeholder="Example: 11101"
                    />
                  </div>

                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      label="Date of Birth"
                      name="dateOfBirth"
                      placeholder="YYYY-MM-DD"
                    />

                    <CustomInput
                      control={form.control}
                      label="SSN"
                      name="ssn"
                      placeholder="1234"
                    />
                  </div>
                </>
              )}
              <CustomInput
                control={form.control}
                label="Email"
                name="email"
                placeholder="Enter your email"
              />

              <CustomInput
                control={form.control}
                label="Password"
                name="password"
                placeholder="Enter your password"
              />
              <div className="flex flex-col gap-4">
                <Button type="submit" className="form-btn" disabled={isLoading}>
                  {
                    isLoading ? (
                      <>
                        <Loader
                          size={20}
                          className="animate-spin"
                        />
                        &nbsp;
                        Loading...
                      </>
                    ) : type === "sign-in" ? "Sign In" : "Sign Up"
                  }
                </Button>
              </div>
            </form>
          </Form>

          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === "sign-in"
              ? "Don't have an account?"
              : "Already have an account?"}
            </p>
            <Link href={type === "sign-in" ? "/sign-up" : "/sign-in"} className="form-link">
              {type === "sign-in" ? "Sign up" : "Sign in"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
