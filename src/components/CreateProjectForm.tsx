"use client";

import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRightIcon } from "lucide-react";

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
import { Textarea } from "./ui/textarea";

import { IProjectForm } from "@/interfaces";
import { projectSchemaForm } from "@/constants";
import { createProject } from "@/server/routes";
import { useParams } from "next/navigation";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateProjectForm: FC<Props> = ({ isOpen, onClose }) => {
  const { id } = useParams();

  const form = useForm<IProjectForm>({
    resolver: zodResolver(projectSchemaForm),
    defaultValues: { name: "", description: "", workplace_id: id.toString() },
  });

  const { isSubmitting, isDirty } = form.formState;

  const handleSubmit = async (args: IProjectForm) => {
    try {
      console.log("🚀 ~ handleSubmit ~ args:", args);
      await createProject(args);
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
          <DialogTitle>Create Project</DialogTitle>
          <DialogDescription>
            Securely store your Development, Staging, and Production secrets.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              disabled={isSubmitting}
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Name</FormLabel>
                  <FormControl>
                    <Input
                      className="mb-4"
                      placeholder={"Project name (ex: frontend, backend, etc.)"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              disabled={isSubmitting}
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={"Describe your project... (optional)"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="mt-6">
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
                Create Project
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
