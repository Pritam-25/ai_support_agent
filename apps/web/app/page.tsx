"use client"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { add } from "@workspace/math/add"
import { useState } from "react";

export default function Page() {
  const [firstNumber, setFirstNumber] = useState<string>('');
  const [secondNumber, setSecondNumber] = useState<string>('');
  const [result, setResult] = useState<number | string>('');

  const handleAdd = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    if (!isNaN(num1) && !isNaN(num2)) {
      setResult(add(num1, num2));
    } else {
      setResult('Invalid input');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>

        <Input
          placeholder="First number"
          className="w-64"
          value={firstNumber}
          onChange={(e) => setFirstNumber(e.target.value)}
        />

        <Input
          placeholder="Second number"
          className="w-64"
          value={secondNumber}
          onChange={(e) => setSecondNumber(e.target.value)}
        />

        <Button size="sm" onClick={handleAdd}>
          Add
        </Button>

        <p className="text-lg font-semibold">{result}</p>
      </div>
    </div>
  );
}
