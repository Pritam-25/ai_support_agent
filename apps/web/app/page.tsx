"use client";
import { Button } from "@workspace/ui/components/button"
import {useMutation, useQuery} from "convex/react"
import {api} from "@workspace/backend/convex/_generated/api"
import { useState } from "react";
import { Input } from "@workspace/ui/components/input";

/**
 * Client-side React page component that displays a user input, adds users to the backend, and shows fetched users.
 *
 * Renders a centered UI with a controlled text input for a name, an "Add User" button, and a JSON snapshot of users
 * fetched via a Convex query. Clicking the button ignores empty/whitespace-only names, calls the `addUser` mutation
 * with the entered name, and clears the input on success.
 *
 * @returns The page's JSX element.
 */
export default function Page() {

   const [name, setName] = useState(""); // Track user input

  const users = useQuery(api.user.getManyUsers);
  const addUser = useMutation(api.user.addUser);

  const handleAddUser = async () => {
    if (!name.trim()) return; // Prevent empty names
    await addUser({ name });
    setName(""); // Clear input after adding
  };

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Apps/Web</h1>
         <Input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Button size="lg" variant="default" onClick={handleAddUser}>
          Add User
        </Button>

        <pre>{JSON.stringify(users, null, 2)}</pre>
      </div>
    </div>
  );
}
