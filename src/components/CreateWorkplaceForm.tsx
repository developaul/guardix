"use client";

import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSelectedLayoutSegments } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

import { workplaceSchema } from "@/constants";
import { IWorkplaceForm } from "@/interfaces";
import { createWorkplace } from "@/server/routes";

interface CreateWorkplaceFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateWorkplaceForm: FC<CreateWorkplaceFormProps> = ({
  isOpen,
  onClose,
}) => {
  const [resourcePathname] = useSelectedLayoutSegments();

  const form = useForm<IWorkplaceForm>({
    resolver: zodResolver(workplaceSchema),
    defaultValues: { name: "" },
  });

  const { isSubmitting, isDirty } = form.formState;

  const handleSubmit = async (args: IWorkplaceForm) => {
    try {
      await createWorkplace(args, resourcePathname);
    } catch (error) {
      console.error(error);
    } finally {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent
        onClose={onClose}
        onEscapeKeyDown={onClose}
        className="sm:max-w-md"
      >
        <DialogHeader>
          <DialogTitle>Create a New Workplace</DialogTitle>
          <DialogDescription>
            Each workplace is unique, with its own projects, team members,
            activity logs and integrations
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-8"
          >
            <FormField
              disabled={isSubmitting}
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Name</FormLabel>
                  <FormControl>
                    <Input placeholder={"Untitled"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="sm:justify-start">
              <Button
                type="submit"
                className="w-full"
                loading={isSubmitting}
                disabled={
                  Boolean(form.formState.errors.name) ||
                  !isDirty ||
                  isSubmitting
                }
              >
                Create
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
