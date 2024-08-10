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
import Link from "next/link";

export default function Login() {
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
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Email:</Label>
                  <Input id="Username" placeholder="Enter username" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Username:</Label>
                  <Input id="Username" placeholder="Enter username" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Password:</Label>
                  <Input id="name" placeholder="Enter password" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Confirm Password:</Label>
                  <Input id="password" placeholder="Confirm password" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/registration">
              <Button variant="outline">Back</Button>
            </Link>
            <Button>Submit</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
