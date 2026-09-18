"use client";

import type { SubmitEvent } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motorcycleMakes, motorcycles } from "@/data/motorcycles";
import type { MotorcycleMake } from "@/types/motorcycle";

const MotorcycleFinderForm = () => {
  const router = useRouter();
  const [selectedMake, setSelectedMake] = useState<MotorcycleMake | null>(null);
  const [selectedMotorcycle, setSelectedMotorcycle] = useState<string | null>(null);

  const availableMotorcycles = selectedMake
    ? motorcycles.filter((motorcycle) => motorcycle.make === selectedMake)
    : [];

  const handleMakeChange = (value: MotorcycleMake | null) => {
    setSelectedMake(value);
    setSelectedMotorcycle(null);
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedMake || !selectedMotorcycle) {
      return;
    }

    router.push(`/products?motorcycle=${encodeURIComponent(selectedMotorcycle)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <label htmlFor="motorcycle-make" className="text-foreground text-sm font-medium">
          Motorcycle Make
        </label>
        <Select value={selectedMake} onValueChange={handleMakeChange}>
          <SelectTrigger id="motorcycle-make" className="bg-background h-11 w-full px-3">
            <SelectValue placeholder="Select a make" />
          </SelectTrigger>
          <SelectContent align="start" sideOffset={8}>
            {motorcycleMakes.map((make) => (
              <SelectItem key={make} value={make}>
                {make}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label htmlFor="motorcycle-model" className="text-foreground text-sm font-medium">
          Motorcycle Model
        </label>
        <Select
          value={selectedMotorcycle}
          onValueChange={setSelectedMotorcycle}
          disabled={!selectedMake}
        >
          <SelectTrigger id="motorcycle-model" className="bg-background h-11 w-full px-3">
            <SelectValue placeholder={selectedMake ? "Select a model" : "Select a make first"} />
          </SelectTrigger>
          <SelectContent align="start" sideOffset={8}>
            {availableMotorcycles.map((motorcycle) => (
              <SelectItem key={motorcycle.id} value={motorcycle.slug}>
                {motorcycle.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={!selectedMake || !selectedMotorcycle}
        className="h-11 w-full cursor-pointer uppercase"
      >
        Find Compatible Parts
      </Button>
    </form>
  );
};

export default MotorcycleFinderForm;
