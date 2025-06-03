"use client";

import { Toaster } from "sonner";
import { useTheme } from "next-themes";

const ToastProvider = () => {
  const { theme } = useTheme();

  return (
    <Toaster
      // Theme configuration
      theme={theme as "light" | "dark" | "system"}
      
      // Position of toasts
      position="bottom-right"
      
      // Maximum number of toasts to show
      visibleToasts={5}
      
      // Close button
      closeButton={true}
      
      // Rich colors (better contrast)
      richColors={true}
      
      // Expand toasts by default
      expand={false}
      
      // Duration in milliseconds (4 seconds)
      duration={4000}
      
      // Gap between toasts
      gap={12}
      
      // Custom styling
      toastOptions={{
        style: {
          background: 'hsl(var(--background))',
          color: 'hsl(var(--foreground))',
          border: '1px solid hsl(var(--border))',
          borderRadius: '8px',
          fontSize: '14px',
          padding: '12px 16px',
        },
        className: 'toast-custom',
      }}
      
      // Offset from edge of screen
      offset={16}
      
      // Direction for stacking
      dir="auto"
    />
  );
};

export default ToastProvider;