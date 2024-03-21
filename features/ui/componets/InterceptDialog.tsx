"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import React, { ReactNode } from "react";

interface InterfaceDialogProps {
  children: ReactNode;
  onClose: () => void;
}
const InterceptDialog = ({ children, onClose }: InterfaceDialogProps) => {
  const closeDialog = () => {
    onClose();
  };

  return (
    <Dialog open onOpenChange={closeDialog}>
      <DialogContent className="h-4/5 w-4/5 bg-gradient-to-b from-blue-400 via-pink-200 to-white bg-no-repeat bg-cover">
        <ScrollArea className="min-h-[350px] ">
          <div className="p-4 text-black">{children}</div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default InterceptDialog;
