"use client";
import Alert from "@/components/Alert";
import CheckoutButton from "@/components/CheckoutButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

function DashboardPage() {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Subscription</CardTitle>
          <CardDescription>You need to subscribe</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Now the Card content Starts</p>
          <CheckoutButton label="Subscribe" />
          <button
            className="p-3 text-white bg-blue-500 rounded-md w-full"
            onClick={() => setShowAlert(true)}
          >
            Subscribe
          </button>
        </CardContent>
        <CardFooter>Thankyou</CardFooter>
      </Card>
      {showAlert && <Alert onClose={() => setShowAlert(false)} />}
    </div>
  );
}

export default DashboardPage;
