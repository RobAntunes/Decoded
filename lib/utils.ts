import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function randomizeName(name: string, onUpdate: (currentName: string) => void): void {
  const alphabet = "1234567890abcdefghijklmnopqrstuvwxyzABDEFGHIJKLMNOPQRSTUVWXYZ";
  const maxDuration = 4000; // 4 seconds in milliseconds
  const randomDuration = Math.random() * maxDuration;
  const startTime = Date.now();
  
  // Create function to generate a random string of same length as input
  const generateRandomString = (length: number): string => {
    return Array.from({ length }, () => 
      alphabet[Math.floor(Math.random() * alphabet.length)]
    ).join('');
  };

  const animate = () => {
    const elapsed = Date.now() - startTime;
    
    if (elapsed < randomDuration) {
      // Generate random string keeping same length as original
      const currentName = generateRandomString(name.length);
      onUpdate(currentName);
      requestAnimationFrame(animate);
    } else {
      onUpdate(name); // Return to original name when done
    }
  };
  
  requestAnimationFrame(animate);
}