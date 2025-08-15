"use client";
import { Button } from "@workspace/ui/components/button"
import {useQuery} from "convex/react"
import {api} from "@workspace/backend/convex/_generated/api"

/**
 * Client React page component that subscribes to the backend users query and renders a simple UI.
 *
 * This is a client (browser) component that uses Convex's `useQuery` to subscribe to `api.user.getManyUsers`
 * and displays the fetched `users` as pretty-printed JSON alongside a header and a button.
 *
 * Note: the component does not provide explicit loading or error handling for the query result.
 *
 * @returns A JSX element representing the page.
 */
export default function Page() {

  const users = useQuery(api.user.getManyUsers)

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button size="lg" variant="default">
          apps/Widget
        </Button>
        {JSON.stringify(users, null, 2)}
      </div>
    </div>
  );
}
