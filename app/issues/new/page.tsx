"use client";
import { TextField, TextFieldInput, Button } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}
const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();

  return (
    <form
      className="max-w-xl flex flex-col gap-2"
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/issues", data);
        router.push("/issues");
      })}
    >
      <TextField.Root>
        <TextFieldInput placeholder="Title" {...register("title")} />
      </TextField.Root>
      <Controller name="description" control={control} render={({ field }) => <SimpleMDE placeholder="Description" {...field} />}></Controller>
      <Button>Submit New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
