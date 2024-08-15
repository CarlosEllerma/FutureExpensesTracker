import React from "react"

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export default function Register() {
  return (
    <main>
      <div className="flex justify-center pt-16">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Register Account</CardTitle>
            <CardTitle className="text-lg"> Enter Personal Details </CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              {/* Name of the user (First, Middle, Last) */}
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="firstName">First Name:</Label>
                  <Input type="text" id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="middleName">Middle Name:</Label>
                  <Input type="text" id="middleName" placeholder="Enter your middle name" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="lastName">Last Name:</Label>
                  <Input type="text" id="lastName" placeholder="Enter your last name" />
                </div>
                {/* Sex of the user */}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="sex">Sex:</Label>
                  <Select>
                    <SelectTrigger id="sex">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="others">Others</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* Birthday of the user */}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="birthday">Birthday:</Label>
                  <Input type="date" id="birthday" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Link href="/registration1">
                <Button type="submit">Next</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
